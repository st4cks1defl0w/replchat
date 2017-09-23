(ns spachat.events
  (:require [re-frame.core :as rf]
            [ajax.core :refer [GET POST]]))

;;debug handlers middleware
(defn log-ex
  [handler]
  (fn log-ex-handler
    [db v]
    (try
      (handler db v)        ;; call the handler with a wrapping try
      (catch :default e     ;; ooops
        (do
          (.error js/console e.stack)   ;; print a sane stacktrace
          (throw e))))))

;;dispatchers
(rf/reg-event-db
 :navigate
 (fn [db [_ page]]
   (assoc db :page page)))

(rf/reg-event-db
 :resetSignInError
 (fn [db _]
   (dissoc db :signInError)))

(rf/reg-event-db
 :signupUserValue
 (fn [db [_ v]]
   (assoc db :signupUserValue v)))

(rf/reg-event-db
 :sendMessage
 (fn [db [_ v]]
   (println "called sendMessage" v)
   (assoc db :sendMessage v)))

(rf/reg-event-db
 :signupPasswordValue
 (fn [db [_ v]]
   (assoc db :signupPasswordValue v)))

;;ajax calls
;;POST signin
(rf/reg-event-db ;submit signin info, login or if (doesn't exist username) then make a new record
 :signupGo
 (fn
   [db _]
   (POST
     "/API/signupGo"
     {:params {:username (get db :signupUserValue)
               :password    (get db :signupPasswordValue)}
      :handler       #(rf/dispatch [:signupGotResponse %1])
      :error-handler #(rf/dispatch [:signupGotResponseBad %1])}) ;;reserve for server failure
   db))

;;process signin response
(rf/reg-event-db ;process signin response - if ok, set a cookie and dispatch chat View
 :signupGotResponse
 (fn
   [db [_ response]]
   (println response)
   (if (get response :ok)
;all ok
     (-> db        (assoc :lastchat 0 :page :chat :spaCookie (get response :okCookie)))
;bad user/pass combo  or no username supplied
     (do
       (-> db  (assoc :signupPasswordValue "")  (assoc :signInError (get response :errorText)))))))

;;process error signin response
(rf/reg-event-db ;server-down
 :signupGotResponseBad
 (fn
   [db [_ response]]
   (println "chats server down notice")
   (-> db (assoc :noserver true))))

;;POST chats request
(rf/reg-event-db ;submit signin info, login or if (doesn't exist username) then make a new record
 :getChats
 (fn
   [db _]
   (POST
     "/API/getChat"
     :handler       #(rf/dispatch [:getChatsGotResponse %1]))
   db))

;;process chats request
(rf/reg-event-db
 :getChatsGotResponse
 (fn
   [db [_ response]]
   (def chatsSeq (get response :okChats))
   (-> db    (assoc :lastchat (get (last chatsSeq) :id) :chats  chatsSeq))))

;;POST a new message
(rf/reg-event-db ;submit signin info, login or if (doesn't exist username) then make a new record
 :sendMessageGo
 (fn
   [db _]
   (POST
     "/API/putChat"
     {:params {:message (get db :sendMessage)
               :username    (get db :signupUserValue)
               :cookie    (get db :spaCookie)}
      :handler       #(rf/dispatch [:sendMessageGotResponse %1])
      :error-handler #(rf/dispatch [:sendMessageGotResponseBad %1])}) ;;reserve for server failure
   (-> db (assoc :sendMessage ""))))

;;process a new message response
(rf/reg-event-db
 :sendMessageGotResponse
 (fn
   [db [_ response]]
   (if (get response :ok)
;all ok
     (do
       (println "got ok sendmessages response")
       (rf/dispatch [:getChats])
       db)
     (do
;bad username/cookie
       (println "got BAD sendmessages response")
       db))))

;;process error new message response
(rf/reg-event-db ;server-down
 :sendMessageGotResponseBad
 (fn
   [db [_ response]]
   (println "chats server down notice")
   (-> db (assoc :noserver true))))

;;ping part 1 - trigger chats update if we're lagging
(rf/reg-event-db
 :pingingChatUser
 (fn [db _]
   (when (get db :spaCookie)
     (println "pinging with cookie " (get db :spaCookie))
     (POST "/API/ping" {:params {:lastchat  (get db :lastchat) :cookie  (get db :spaCookie)} :handler #(rf/dispatch [:pingingGotResponse %1])}))
   db))

;;ping part 2 - dispatch chatsUpdate if lagging detected
(rf/reg-event-db ;server-down
 :pingingGotResponse
 (fn
   [db [_ response]]
   (when  (get response :updateneeded)
     (rf/dispatch [:getChats]))
   (-> db (assoc :onlineUsersNow (get response :onlineUsersNow)))))
