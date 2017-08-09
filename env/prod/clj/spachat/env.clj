(ns spachat.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[spachat started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[spachat has shut down successfully]=-"))
   :middleware identity})
