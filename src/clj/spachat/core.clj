(ns spachat.core
  (:require [spachat.handler :as handler]
            [spachat.nrepl-server :as nrepl]
            [luminus.http-server :as http]
            [luminus-migrations.core :as migrations]
            [spachat.config :refer [env]]
            [spachat.remote :as remote]
            [clojure.tools.cli :refer [parse-opts]]
            [clojure.tools.logging :as log]
            [mount.core :as mount])
  (:gen-class))

(def cli-options
  [["-p" "--port PORT" "Port number"
    :parse-fn #(Integer/parseInt %)]])

(mount/defstate ^{:on-reload :noop} http-server
  :start
  (http/start
   (-> env
       (assoc  :handler #'handler/app)
       (update :io-threads #(or % (* 2 (.availableProcessors (Runtime/getRuntime)))))
       (update :port #(or (-> env :options :port) %))))
  :stop
  (http/stop http-server))

(mount/defstate ^{:on-reload :noop} repl-server
  :start
  (when (env :nrepl-port)
    (nrepl/start {:bind (env :nrepl-bind)
                  :port (env :nrepl-port)}))
  :stop
  (when repl-server
    (nrepl/stop repl-server)))

(defn stop-app []
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (shutdown-agents))

(defn start-app [args]
  (mount/start #'spachat.config/env)
  (doseq [component (-> args
                        (parse-opts cli-options)
                        mount/start-with-args
                        :started)]
    (log/info component "started"))
  (migrations/migrate ["reset"] {:database-url (:databaseurl env)})
  (migrations/migrate ["migrate"] {:database-url (:databaseurl env)})
  (println "ran simple-setup migrations")
  (.addShutdownHook (Runtime/getRuntime) (Thread. stop-app)))

(defn -main [& args]
  (start-app args))
