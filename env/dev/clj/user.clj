(ns user
  (:require [spachat.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [spachat.figwheel :refer [start-fw stop-fw cljs]]
            [spachat.core :refer [start-app]]
            [spachat.db.core]
            [conman.core :as conman]
            [luminus-migrations.core :as migrations]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'spachat.core/repl-server))

(defn stop []
  (mount/stop-except #'spachat.core/repl-server))

(defn restart []
  (stop)
  (start))

(defn restart-db []
  (mount/stop #'spachat.db.core/*db*)
  (mount/start #'spachat.db.core/*db*)
  (binding [*ns* 'spachat.db.core]
    (conman/bind-connection spachat.db.core/*db* "sql/queries.sql")))

(defn reset-db []
  (migrations/migrate ["reset"] (select-keys env [:databaseurl])))

(defn migrate []
  (migrations/migrate ["migrate"] (select-keys env [:databaseurl])))

(defn rollback []
  (migrations/migrate ["rollback"] (select-keys env [:databaseurl])))

(defn create-migration [name]
  (migrations/create name (select-keys env [:databaseurl])))


