(ns replchat.routes.home
  (:require [clj-time.core :as t]
            [clojure.java.io :as io]
            [clojure.spec.alpha :as s]
            [compojure.core :refer [defroutes GET POST]]
            [digest :as hashlib]
            [ring.util.http-response :as response]
            [replchat.db.core :as db]
            [replchat.layout :as layout]
            [replchat.spec]))

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

(defn create-repl-user! []
  (db/put-cookie-and-user {:username "repl-user"
                           :password (hashlib/md5 (rnd-str 12))
                           :cookie (rnd-str 64)
                           :signupdate (t/now)}))

(defn signup [{:keys [params]}]
  (let [{:keys [username password]} params
        full-info (db/get-user {:username username})
        existing-username (:username full-info)
        existing-password (:password full-info)]
    (cond
      (or (empty? username)
          (and (not (empty? existing-username))
               (not= existing-password (hashlib/md5 password))))
      (response/bad-request {:error-text
                             "Incorrect password for existing user"})

    ;;double-check specced pass
      (not (s/valid? :replchat.spec/password password))
      (response/bad-request {:error-text
                             (str "Congrats! You sneaked past our "
                                  "cljs.spec, but not clj.spec though!")})

     ;;user exists, pass is OK
      (and (= username existing-username)
           (= existing-password (hashlib/md5 password)))
      (let [new-cookie (rnd-str 64)]
        (println "successful login from" existing-username)
        (db/put-cookie {:cookie new-cookie :username username})
        (response/ok {:ok-cookie new-cookie}))

     ;;a vacant username entered
      (empty? existing-username)
      (let [new-cookie (rnd-str 64)]
        (println "creating new user" username)
        (db/put-cookie-and-user {:username username
                                 :password (hashlib/md5 password)
                                 :cookie new-cookie
                                 :signupdate (t/now)})
        (response/ok {:ok-cookie new-cookie})))))

(defn- get-msgs-author-data
  "supplementary fn to get-chat to assoc author data"
  [msg]
  (merge msg (db/get-user-with-id {:id (:author msg)})))

(defn get-chat [_]
  (let [msgs-with-authors (map get-msgs-author-data (db/get-chat))]
    (response/ok {:ok true
                  :ok-chats msgs-with-authors})))

(defn put-chat-with-repl [message]
  (db/put-chat {:text message
                :author 1
                :stamp (t/now)})
  (response/ok {:ok true}))

(defn put-chat [{:keys [params]}]
  (let [{:keys [cookie username message]} params
        cookie-check (db/get-cookie {:cookie cookie})]
    (if (= username (get cookie-check :username))
      (do (db/put-chat {:text message
                        :author (get cookie-check :id)
                        :stamp (t/now)})
          (response/ok {:ok true}))
      (response/ok {:ok false}))))

(defn poll
  "receives UDP-styled poll, returns whether user is up-to-date
  and a list of online users"
  [{:keys [params]}]
  (let [{:keys [cookie lastchat] :or {lastchat 0}} params
        now-stamp (t/now)
        users-online (db/get-online-users)
        last-stored-chat-id (or (:id (db/get-last-chat)) 0)]
    (db/put-poll {:cookie cookie :lastseen now-stamp})
    (if (> last-stored-chat-id lastchat)
      (response/ok {:update-due? true :users-online users-online})
      (response/ok {:update-due? false :users-online users-online}))))

(defroutes home-routes
  (GET "/" [] (home-page))
  (POST "/api/auth" request (signup request))
  (POST "/api/put-chat" request (put-chat request))
  (POST "/api/poll" request (poll request))
  (POST "/api/get-chat" request (get-chat request)))
