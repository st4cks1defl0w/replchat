(ns spachat.db.core
  (:require
   [clj-time.jdbc]
   [clojure.java.jdbc :as jdbc]
   [clojure.tools.logging :as log]
   [conman.core :as conman]
   [spachat.config :refer [env]]
   [mount.core :refer [defstate]])
  (:import [java.sql
            BatchUpdateException
            PreparedStatement]))
(defstate ^:dynamic *db*
  :start (if-let [jdbc-url (env :databaseurl)]
           (conman/connect! {:jdbc-url jdbc-url})
           (do
             (log/warn "database connection URL was not found, please set :databaseurl in your config, e.g: dev-config.edn")
             *db*))
  :stop (conman/disconnect! *db*))

(conman/bind-connection *db* "sql/queries.sql")
