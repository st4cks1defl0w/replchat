(ns spachat.remote
  "ns should be required somewhere for defnremote?
    resolve to work on nREPL launch"
  (:require [protected-eval.core :refer [defnremote]]
            [spachat.core :refer [start-app]]
            [spachat.routes.home :as home-routes]
            [spachat.user :refer [fw-repl!]]))


(defnremote send-message-with-repl [message]
  (home-routes/put-chat-with-repl message)
  (str "message sent, thanks for using our REPL API!"))

(defnremote start-app-wtih-repl []
  (let [cli-args nil]
    (start-app cli-args)
    (fw-repl!)))
