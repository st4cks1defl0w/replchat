(ns replchat.nrepl-server
  (:require [clojure.tools.logging :as log]
            [clojure.tools.nrepl.server :as nrepl]
            [protected-eval.core :as pe]))

(defn start
  [{:keys [port bind transport-fn ack-port greeting-fn]}]
  (try
    (log/info "starting nREPL server on port" port)
    (nrepl/start-server
     :port port
     :bind bind
     :transport-fn transport-fn
     :handler (nrepl/default-handler #'pe/eval-apply-remote-only-cider)
     :ack-port ack-port
     :greeting-fn greeting-fn)

    (catch Throwable t
      (log/error t "failed to start nREPL")
      (throw t))))

(defn stop [server]
  (nrepl/stop-server server)
  (log/info "nREPL server stopped"))
