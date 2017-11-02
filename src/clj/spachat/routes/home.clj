(ns spachat.routes.home
  (:require [clj-time.core :as t]
            [clojure.java.io :as io]
            [compojure.core :refer [defroutes GET POST]]
            [digest :as hashlib]
            [ring.util.http-response :as response]
            [spachat.db.core :as db]
            [spachat.layout :as layout]))

(defn rnd-str
  "get str of pseudorandom safe chars"
  ([] (rnd-str 3))
  ([n]
   (let [chars (map char (range 48 127))
         password (take n (repeatedly #(rand-nth chars)))]
     (reduce str password))))

(defn home-page
  "render the page hosting js app" []
  (layout/render "home.html"))

(defn signup [{:keys [params]}]
  (println "request arrived, params are " params)
  (let [{:keys [username password]} params
        full-info (db/get-user {:username username})
        existing-username (:username full-info)
        existing-password (:password full-info)]

    (cond (or (empty? username) (and (not (empty? existing-username))
                                     (not= existing-password (hashlib/md5 password))))
          (response/ok {:ok false
                        :errorText "Incorrect password"})
     ;;user exists, pass is OK
          (and (= username existing-username)
               (= existing-password (hashlib/md5 password)))
          (let [new-cookie (rnd-str 64)]
            (println "successfull login form" existing-username)
            (db/put-cookie {:cookie new-cookie :username username})
            (response/ok {:ok true
                          :okCookie new-cookie}))
     ;;a vacant username was entered
          (empty? existing-username)
          (let [new-cookie (rnd-str 64)]
            (println "creating new user" username)
            (db/put-cookie-and-user {:username username
                                     :password (hashlib/md5 password)
                                     :cookie new-cookie
                                     :signupdate (t/now)})
            (response/ok {:ok true
                          :okCookie new-cookie})))))

(defn- get-msgs-author-data
  "supplementary fn to get-chat to assoc author data"
  [msg]
  (merge msg (db/get-user-with-id {:id (:author msg)})))

(defn get-chat [_]
  (let [msgs-with-authors (map get-msgs-author-data (db/get-chat))]
    (response/ok {:ok true
                  :okChats msgs-with-authors})))

(defn put-chat [{:keys [params]}]
  (println "put-chat received params:" params)
  (let [put-cookie (get params :cookie)
        put-user (get params :username)
        put-message (get params :message)
        cookie-check (db/get-cookie {:cookie put-cookie})]
    (if (= put-user (get cookie-check :username))
      (do (db/put-chat {:text put-message :author (get cookie-check :id) :stamp (t/now)})
          (response/ok {:ok true}))
      (response/ok {:ok false}))))

(defn ping
  "receives UDP-styled ping, returns whether user is up-to-date"
  [{:keys [params]}]
  (let [{:keys [cookie lastchat]} params
        now-stamp (t/now)
        users-online (db/get-online-users)]
    (db/put-ping {:cookie cookie :lastseen now-stamp})
    (println (> (get (db/get-last-chat) :id) lastchat))
    (if (> (:id (db/get-last-chat))
           lastchat)
      (response/ok {:updateneeded true :onlineUsersNow users-online})
      (response/ok {:updateneeded false :onlineUsersNow users-online}))))

(defroutes home-routes
  (GET "/" [] (home-page))
  (POST "/API/signupGo" request (signup request))
  (POST "/API/putChat" request (put-chat request))
  (POST "/API/ping" request (ping request))
  (POST "/API/getChat" request (get-chat request)))
