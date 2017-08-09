(ns spachat.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [spachat.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[spachat started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[spachat has shut down successfully]=-"))
   :middleware wrap-dev})
