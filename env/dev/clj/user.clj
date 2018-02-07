(ns user
  (:require [replchat.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [replchat.figwheel :refer [start-fw stop-fw cljs]]
            [figwheel-sidecar.repl-api :as fw]
            [replchat.core :refer [start-app]]
            [replchat.db.core]
            [conman.core :as conman]
            [luminus-migrations.core :as migrations]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'replchat.core/repl-server))

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

(defn create-migration [name]
  (migrations/create name (select-keys env [:databaseurl])))

(defn fw-repl! []
  (fw/start-figwheel!)
  (fw/cljs-repl))
