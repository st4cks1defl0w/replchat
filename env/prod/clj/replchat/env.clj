(ns replchat.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[replchat started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[replchat has shut down successfully]=-"))
   :middleware identity})
