(ns spachat.subs
  (:require [re-frame.core :as rf]
            [ajax.core :refer [GET POST]]))

;;subscriptions
(rf/reg-sub
 :page
 (fn [db _]
   (:page db)))

(rf/reg-sub
 :signInError
 (fn [db _]
   (:signInError db)))

(rf/reg-sub
 :spaCookie
 (fn [db _]
   (:spaCookie db)))

(rf/reg-sub
 :chats
 (fn [db _]
   (:chats db)))

(rf/reg-sub
 :lastchat
 (fn [db _]
   (:lastchat db)))

(rf/reg-sub
 :signupUserValue
 (fn [db _]
   (:signupUserValue db)))

(rf/reg-sub
 :sendMessage
 (fn [db _]
   (:sendMessage db)))

(rf/reg-sub
 :signupPasswordValue
 (fn [db _]
   (:signupPasswordValue db)))

(rf/reg-sub
 :onlineUsersNow
 (fn [db _]
   (:onlineUsersNow db)))
