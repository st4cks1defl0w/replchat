(ns spachat.subs
  (:require [re-frame.core :as rf]))

;;subscriptions
(rf/reg-sub
 :page
 (fn [db _]
   (:page db)))

(rf/reg-sub
 :sign-in-error
 (fn [db _]
   (:sign-in-error db)))

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
 :signup-user
 (fn [db _]
   (:signup-user db)))

(rf/reg-sub
 :signup-password
 (fn [db _]
   (:signup-password db)))

(rf/reg-sub
 :sendMessage
 (fn [db _]
   (:sendMessage db)))

(rf/reg-sub
 :onlineUsersNow
 (fn [db _]
   (:onlineUsersNow db)))
