(ns spachat.routes.home
  (:require [spachat.layout :as layout]
            [spachat.db.core :as db]
            [digest :as hashlib]
            [clj-time.core :as t]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]))

;;lib to get random [safe] chars
(defn rnd-str
        ([] (rnd-str 3))
        ([n]
           (let [chars (map char (range 48 127))
                 password (take n (repeatedly #(rand-nth chars)))]
             (reduce str password))))      

;;static page, host for reagent
(defn home-page []
  (layout/render "home.html"))



;;piping signup/signin ajax call, custom authUser function
(defn signupGo [{:keys [params]}]
(println "request arrived, params are " params)
;;supplied params
(def paramsGetUser (get params :username))
(def paramsGetPass (get params :password))
;;got DB response on user, pass is md5
(def signupGetAllInfo  (db/get-user {:username paramsGetUser}))
(def signupGetUser (get signupGetAllInfo :username))
(def signupGetPass (get signupGetAllInfo :password))

;;user exists but pass is wrong
(cond (or (empty? paramsGetUser) (and (not (empty? signupGetUser)) (not= signupGetPass (hashlib/md5 paramsGetPass))))

(response/ok {:ok false
     :errorText "Incorrect password"
})
;;user exists, pass correct 
(and (= paramsGetUser signupGetUser) (= signupGetPass (hashlib/md5 paramsGetPass)))
(do
(println "correct pass!!!!!")
(def newCookie (rnd-str 64))
(db/put-cookie {:cookie newCookie :username paramsGetUser})
(response/ok {:ok true
     :okCookie newCookie
}))
;;a vacant username is entered
(empty? signupGetUser)
(do
(println "creating new user!!!!!")
(def newCookie (rnd-str 64))
(db/put-cookie-and-user {:username paramsGetUser :password (hashlib/md5 paramsGetPass) :cookie newCookie :signupdate (t/now)})
(response/ok {:ok true
     :okCookie newCookie
})
)
)

)

;;return seq of chats with assoced data on authors - p.1 get Authors
(defn getChatAuthorsData [onlyChatsEntry]
(println (:stamp onlyChatsEntry))
(merge onlyChatsEntry (db/get-user-with-id {:id (:author onlyChatsEntry)}))
)

;;return seq of chats with assoced data on authors - p.2 assoc Authors
(defn getChat [{:keys [params]}]
(def chatsWithAuthors (map getChatAuthorsData (db/get-chat)))
(response/ok {:ok true
     :okChats chatsWithAuthors
})
)


;;insert new message, auth by cookie
(defn putChat [{:keys [params]}]
(def putCookie (get params :cookie))
(def putUser (get params :username))
(def putMessage (get params :message))
(println params)
(def cookieCheck  (db/get-cookie {:cookie putCookie}))
(println cookieCheck)
(if (= putUser (get cookieCheck :username))
(do
(println (t/now))
(db/put-chat {:text putMessage :author (get cookieCheck :id) :stamp (t/now)})
(response/ok {:ok true
})
)
(do
(println (get cookieCheck :username))
(response/ok {:ok false
})
)
)
)


;;server recieves UDP-style ping, returns whether user is uptodate with chats and seq of online users
(defn ping [{:keys [params]}]
(def putCookie (get params :cookie))
(def idOfLastChat (get params :lastchat))
(def onlineUsersNow (db/get-online-users))
(println onlineUsersNow)
(def nowStamp (t/now))
(db/put-ping {:cookie putCookie :lastseen nowStamp})
(println (> (get (db/get-last-chat) :id) idOfLastChat))
(if (> (get (db/get-last-chat) :id) idOfLastChat)
(response/ok {:updateneeded true :onlineUsersNow onlineUsersNow})
(response/ok {:updateneeded false :onlineUsersNow onlineUsersNow})
)
)



(defroutes home-routes
  (GET "/" []
       (home-page))
  (POST "/API/signupGo" request (signupGo request))
  (POST "/API/putChat" request (putChat request))
  (POST "/API/ping" request (ping request))
  (POST "/API/getChat" request (getChat request))

)






