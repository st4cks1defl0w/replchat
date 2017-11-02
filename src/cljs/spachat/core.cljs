(ns spachat.core
  (:require [ajax.core :refer [GET POST]]
            [cljs-time.format :as tformat]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [re-frame.core :as rf]
            [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [spachat.ajax :as ajax]
            [spachat.mui :as mui]
            [spachat.icon :as icon]
            [spachat.events]
            [spachat.subs]
            goog.History)
  (:import goog.History))

(def formatterTime (tformat/formatter "yyyyMMdd"))

(defonce app-state (atom {:text "spachat"}))

(defn navbar
  "Appwide navbar"
  []
  [mui/app-bar {:position "static"}
   [mui/toolbar
    [mui/typography {:variant "h6" :style {:font-family "monospace"}}
     [icon/chat {:style {:margin-right "10px"}}] "SPACHAT"]]])

(defn scroll-chats-down!
  "keeps chat container scrolled to the bottom with classic css (noflex) (hacky)"
  []
  (let [chat-container (.getElementById js/document "chatsContainer")]
    (when (not (nil? chat-container))
      (set! (.-scrollTop chat-container) 10000000))))

(defn msgs-elements [{:keys [username text stamp]} msg-component]
  (cond
    (= username @(rf/subscribe [:signup-user]))
    [:div #_{:style chat-bubble-yours}
     text [:p {:style {:font-size "0.8em"}}
           (str "- by You at "   (.toString stamp))]]

    :else
    [:div #_{:style chat-bubble-others}
     text [:p {:style {:font-size "0.8em"}}
           (str "- by " username " at "  (.toString stamp))]]))

(defn chat-element [msgs]
  (js/setTimeout scroll-chats-down! 50)
  (into [:ul] (map msgs-elements msgs)))

(defn chat-page []
  (let [_on-load! (rf/dispatch [:pingingChatUser])]
    [:div {:style {:padding-top "40px"
                   :width "50%"
                   :max-width "500px"
                   :margin "0 auto"}}
     [mui/paper {:elevation 1 :style {}}
      [mui/app-bar {:style {:position "static" :padding "10px"}}
       [mui/typography
        {:variant "h5"}
        #_[mui/icon
           #_{:color "inherit"
            :style {:margin-left "0px"
                    :margin-right "5px"
                    :vertical-align "0.1em"}}
           "Delete"] "Hi, " @(rf/subscribe [:signup-user])]]
      [mui/card {:id "chatsContainer"
                 :elevation 1
                 :style {:overflow-y "scroll"
                         :padding "5px"
                         :height "40vh"}}
       [chat-element @(rf/subscribe [:chats])]]
      [mui/card {:elevation 1 :style {:padding "10px" :height "100px"}}
       [mui/form-control {:style {:width "60%"}}
        [mui/input-label {:htmlFor "sendMessage"} "Send Message"]
        [mui/input {:value @(rf/subscribe [:sendMessage])
                    :id "sendMessage"
                    :multiline true
                    :rows 3
                    :on-change
                    #(rf/dispatch [:sendMessage (-> % .-target .-value)])}]]
       [mui/form-control {:style {:width "40%"}}
        [mui/button {:on-click  #(rf/dispatch [:sendMessageGo])
                     :variant "contained"
                     :color "primary"
                     :id "sendMessageGo"
                     :style {:float "right"
                             :width "50px"
                             :margin-left "auto"}} "Send"]]]]
     [:div {:style {:padding-top "10px"}}
      "Users online now: "
      (map #(vector mui/chip {:label (:username %)})
           @(rf/subscribe [:onlineUsersNow]))]]))

(defn home-page []
  [mui/grid {:justify :center :container true :style {:padding "2em"}}
   [mui/grid {:xs 6 :sm 3}
    (let [sign-in-error @(rf/subscribe [:sign-in-error])]
      (when (some? sign-in-error)
        (js/setTimeout  #(rf/dispatch [:reset-sign-in-error]) 3000)
        [mui/snackbar {:open true
                       :message "Wrong Password"
                       :anchorOrigin {:vertical "bottom"
                                      :horizontal "left"}
                       :autoHideDuration 2}])
      [mui/paper {:elevation 1 :style {:padding "20px"}}
       [mui/typography
        {:variant "h5"}
        "Sign In / Sign Up"]
       [mui/typography
        {:variant "body1"}
        "If you don't have a username, you'll be signed up"]
       [mui/form-control {:required true :fullWidth true :margin :normal}
        [mui/input-label {:htmlFor "signup-user"} "Username"]
        [mui/input {:value @(rf/subscribe [:signup-user])
                    :on-change #(rf/dispatch [:signup-user (-> % .-target .-value)])
                    :id "signup-user"}]]
       [mui/form-control {:fullWidth true :required true :margin :normal}
        [mui/input-label {:htmlFor "signup-password"} "Password"]
        [mui/input {:value  @(rf/subscribe [:signup-password])
                    :on-change #(rf/dispatch [:signup-password (-> % .-target .-value)])
                    :fullWidth true
                    :type "password"
                    :id "signup-password"}]]
       [mui/form-control {:margin :normal}
        [mui/button {:on-click #(rf/dispatch [:signup-submit])
                     :variant "contained"
                     :color "primary"
                     :id "signup-submit"}
         "Go"]]])]])

(def pages
  {:home #'home-page
   :chat #'chat-page})

(def material-theme
  "MaterialUI theme"
  (mui/create-mui-theme
   (clj->js
    {:palette {:type :dark
               :primary {:main (mui/color :red 200)}
               :secondary {:main (mui/color :red 200)}}
     :typography {:useNextVariants true}})))

(defn page
  "app template"
  []
  [mui/mui-theme-provider {:theme material-theme}
   [navbar]
   [(pages @(rf/subscribe [:page]))]])

;;routes section
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (rf/dispatch [:navigate :home]))

(secretary/defroute "/chat" []
  (rf/dispatch [:navigate :chat]))
;;end routes section

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     HistoryEventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn ping-with-interval []
  (js/setInterval #(rf/dispatch [:pinging-chat-user]) 10000))

(defn mount-components []
  (rf/clear-subscription-cache!)
  (reagent/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:navigate :home])
  (ajax/load-interceptors!)
  (hook-browser-navigation!)
  (mount-components)
  (ping-with-interval))
