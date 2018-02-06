(ns spachat.remote
  "ns should be required somewhere for defnremote
   to be resolved"
  (:require [protected-eval.core :refer [defnremote]]
            [spachat.routes.home :as home-routes])
  (:gen-class))

(defnremote send-message-with-repl [message]
  (home-routes/put-chat-with-repl message)
  (str "message sent, thanks for using our REPL API!"))
