(ns user
  (:require [clojure.spec.alpha :as s]
            [conman.core :as conman]
            [expound.alpha :as expound]
            [figwheel-sidecar.repl-api :as fw]
            [mount.core :as mount]
            [luminus-migrations.core :as migrations]
            [replchat.db.core]
            [replchat.config :refer [env]]
            [replchat.core :refer [start-app]]
            [replchat.figwheel :refer [start-fw stop-fw cljs]]
            [replchat.routes.home :as home-routes]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'replchat.core/repl-server)
  (migrations/migrate ["reset"] {:database-url (:databaseurl env)})
  (migrations/migrate ["migrate"] {:database-url (:databaseurl env)})
  (println "ran simple-setup migrations")
  (home-routes/create-repl-user!)
  (println "created shared REPL user"))

(defn stop []
  (mount/stop-except #'replchat.core/repl-server))

(defn restart []
  (stop)
  (start))

(defn restart-db []
  (mount/stop #'replchat.db.core/*db*)
  (mount/start #'replchat.db.core/*db*)
  (binding [*ns* 'replchat.db.core]
    (conman/bind-connection replchat.db.core/*db* "sql/queries.sql")))

(defn reset-db []
  (migrations/migrate ["reset"] (select-keys env [:databaseurl])))

(defn migrate []
  (migrations/migrate ["migrate"] (select-keys env [:databaseurl])))

(defn rollback []
  (migrations/migrate ["rollback"] (select-keys env [:databaseurl])))

(defn create-migration [migration-name]
  (migrations/create migration-name (select-keys env [:databaseurl])))

(defn fw-repl! []
  (fw/start-figwheel!)
  (fw/cljs-repl))
