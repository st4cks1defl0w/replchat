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
    [mui/typography {:variant "h6"}
     [icon/chat {:style {:margin-right "10px"}}] "SPACHAT"]]])

(defn scroll-chats-down!
  "Keeps chat container scrolled to the bottom with classic css (noflex) (hacky)"
  []
  (when-let [chat-container (.getElementById js/document "chats-container")]
    (set! (.-scrollTop chat-container) 10000000)))

(def ^:private message-view-yours-styles {:justify :flex-end
                                          :style {:padding "0.5em"}})

(def ^:private message-view-others-styles {:justify :flex-start
                                           :style {:padding "0.5em"}})

(defn message-view [{:keys [username text stamp]} msg-component]
  (if (= username @(rf/subscribe [:signup-user]))
    [mui/grid (merge {:container true} message-view-yours-styles)
     [mui/grid {:container true}
      [mui/typography {:variant :h6} text]]
     [mui/grid {:container true}
      [mui/typography {:variant :caption :style {:font-size "0.8em"}}
       (str "- by You at "   (.toString stamp))]]]

    [mui/grid (merge {:container true} message-view-others-styles)
     [mui/grid {:container true}
      [mui/typography {:variant :h6} text]]
     [mui/grid {:container true}
      [mui/typography {:variant :caption :style {:font-size "0.8em"}}
       (str "- by " username " at "  (.toString stamp))]]]))

(defn chats [msgs]
  (js/setTimeout scroll-chats-down! 50)
  [mui/grid {:container true}
   (for [message msgs]
     ^{:key message}
     [message-view message])])

(defn chat-page []
  (let [_on-load! (rf/dispatch [:pinging-chat-user])]
    [:div {:style {:padding-top "40px"
                   :width "50%"
                   :max-width "500px"
                   :margin "0 auto"}}
     [mui/paper {:elevation 1 :style {}}
      [mui/grid {:style {:padding "1em"}}
       [mui/typography
        {:variant "body1" :style {:font-family "monospace"}}
        [icon/account-circle {:style {:margin-right "10px"}}]
        "hi, " @(rf/subscribe [:signup-user])]]
      [mui/card {:id "chats-container"
                 :elevation 1
                 :style {:overflow-y "scroll"
                         :padding "5px"
                         :height "40vh"}}
       [chats @(rf/subscribe [:chats])]]
      [mui/card {:elevation 1 :style {:padding "10px" :height "100px"}}
       [mui/form-control {:style {:width "60%"}}
        [mui/input-label {:htmlFor "send-message"} "Send Message"]
        [mui/input {:value @(rf/subscribe [:send-message])
                    :id "send-message"
                    :multiline true
                    :rows 3
                    :on-change
                    #(rf/dispatch [:send-message (-> % .-target .-value)])}]]
       [mui/form-control {:style {:width "40%"}}
        [mui/button {:on-click  #(rf/dispatch [:send-message-go])
                     :variant "contained"
                     :color "primary"
                     :id "send-message-go"
                     :style {:float "right"
                             :width "50px"
                             :margin-left "auto"}} "Send"]]]]
     [:div {:style {:padding-top "10px"}}
      "Users online now: "
      (for [online-user @(rf/subscribe [:onlineUsersNow])]
        ^{:key online-user}
        [mui/chip {:label (:username online-user)}])]]))

(defn home-page []
  [mui/grid {:justify :center :container true :style {:padding "2em"}}
   [mui/grid {:xs 6 :md 3 :item true}
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
      [mui/button {:on-click #(rf/dispatch [:signup-check-pass])
                   :variant "contained"
                   :color "primary"
                   :id "signup-submit"}
       "Go"]]]]])

(def pages
  {:home #'home-page
   :chat #'chat-page})

(def material-theme
  "MaterialUI theme"
  (mui/create-mui-theme
   (clj->js
    {:palette {#_:type #_:dark
               :primary {:main (mui/color :red 200)}
               :secondary {:main (mui/color :red 200)}}
     :typography {:useNextVariants true}})))

(defn page
  "app template"
  []
  [mui/mui-theme-provider {:theme material-theme}
   (let [snackbar-message @(rf/subscribe [:snackbar-home])]
     [mui/snackbar {:open (some? snackbar-message)
                   :message snackbar-message
                   :anchorOrigin {:vertical "bottom"
                                  :horizontal "left"}
                   :autoHideDuration 3000
                   :onClose #(rf/dispatch [:snackbar-home nil])}])
   [navbar]
   [(pages @(rf/subscribe [:page]))]])

(some? @(rf/subscribe [:snackbar-home]))

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

(defn ping-with-interval! []
  (let [cookie @(rf/subscribe [:spaCookie])]
    (js/setInterval #(when (some? cookie)
                      (rf/dispatch [:pinging-chat-user])) 10000)))

(defn mount-components []
  (rf/clear-subscription-cache!)
  (reagent/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:navigate :home])
  (ajax/load-interceptors!)
  (hook-browser-navigation!)
  (mount-components)
  (ping-with-interval!))
