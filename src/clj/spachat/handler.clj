(ns spachat.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [compojure.route :as route]
            [mount.core :as mount]
            [ring.util.http-response :as response]
            [spachat.env :refer [defaults]]
            [spachat.layout :refer [error-page]]
            [spachat.middleware :as middleware]
            [spachat.routes.home :refer [home-routes]]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

(mount/defstate app
  :start
  (middleware/wrap-base
   (routes
    (-> #'home-routes
        (wrap-routes middleware/wrap-csrf)
        (wrap-routes middleware/wrap-formats))
    (route/not-found
     (:body
      (error-page {:status 404
                   :title "page not found"}))))))
