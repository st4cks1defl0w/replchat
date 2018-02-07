(ns replchat.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [replchat.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[replchat started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[replchat has shut down successfully]=-"))
   :middleware wrap-dev})
