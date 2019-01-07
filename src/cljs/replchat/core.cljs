(ns replchat.core
  (:require [cljs-time.coerce :as time.coerce]
            [cljs-time.format :as time.format]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [re-frame.core :as rf]
            [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [replchat.ajax :as ajax]
            [replchat.icons :as icons]
            [replchat.mui :as mui]
            replchat.events
            replchat.subs)
  (:import goog.History))

(def time-format (time.format/formatters :mysql))

(defonce app-state (atom {:text "REPLchat running"}))

(defn navbar
  "Appwide navbar"
  []
  [mui/app-bar {:position "static"}
   [mui/toolbar
    [mui/typography {:variant "h6"}
     [icons/chat {:style {:margin-right "10px"}}] "REPLchat"]]])

(defn repl-message-view []
  [mui/grid {:container true}
   [mui/typography {:variant :caption
                    :style {:font-size "0.8em" :opacity 0.5 :color :bold}}
    [icons/cast-connected] " Sent with REPL"]])

(defn message-view-styles [own-message?]
  (let [justify (if own-message?
                  :flex-end
                  :flex-start)
        background (if own-message?
                     :inherit
                     (mui/color :grey 300))]
    {:container-style {:container true
                       :justify justify
                       :style {:padding "0.5em"}}
     :message-box-style {:style {:padding "0.5em"
                                 :background-color background}}}))

(defn- timestamp->formatted-time [stamp]
  (time.format/unparse time-format (time.coerce/from-long stamp)))

(defn message-view [{:keys [username text stamp]} msg-component]
  (let [own-message? (= username @(rf/subscribe [:signup-user]))
        repl-message? (= username "repl-user")
        {:keys [container-style message-box-style]} (message-view-styles own-message?)]
    [mui/grid container-style
     [mui/paper message-box-style
      [mui/grid {:container true}
       [mui/typography {:variant :subtitle2} text]]
      [mui/grid {:container true}
       [mui/typography {:variant :caption
                        :style {:font-size "0.8em"
                                :opacity 0.5}}
        (str "- by " (if own-message? "You" username) " at ")
        [:b (timestamp->formatted-time stamp)]]]
      (when repl-message?
        [repl-message-view])]]))

(defn chats [msgs]
  [mui/grid {:container true}
   (for [message msgs]
     ^{:key message}
     [message-view message])])

(defn chat-page []
  [mui/grid {:style {:padding-top "40px"
                     :width "50%"
                     :max-width "500px"
                     :margin "0 auto"}}
   [mui/paper {:elevation 1 :style {}}
    [mui/grid {:style {:padding "1em"}}
     [mui/typography
      {:variant "body1" :style {:font-family "monospace"}}
      [icons/account-circle {:style {:margin-right "10px"}}]
      "hi, " @(rf/subscribe [:signup-user]) "!"]]
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
   [mui/grid {:container true
              :style {:padding-top "1em"}}
    [mui/typography {:variant :subtitle1
                     :paragraph true
                     :style {:padding-right "0.5em"
                             :opacity "0.6"}}
     "Users online now: "]
    (for [online-user @(rf/subscribe [:online-now])]
      ^{:key online-user}
      [mui/chip {:label (:username online-user)
                 :style {:opacity 0.6}}])]])

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
                  :on-change #(rf/dispatch [:signup-user
                                            (-> % .-target .-value)])
                  :id "signup-user"}]]
     [mui/form-control {:fullWidth true :required true :margin :normal}
      [mui/input-label {:htmlFor "signup-password"} "Password"]
      [mui/input {:value  @(rf/subscribe [:signup-password])
                  :on-change #(rf/dispatch [:signup-password
                                            (-> % .-target .-value)])
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
    {:palette {:primary {:main (mui/color :red 200)}
               :secondary {:main (mui/color :red 200)}}
     :typography {:useNextVariants true}})))

(defn snackbar-view []
  (let [snackbar-message @(rf/subscribe [:snackbar-home])]
    [mui/snackbar {:open (some? snackbar-message)
                   :message snackbar-message
                   :anchorOrigin {:vertical "bottom"
                                  :horizontal "left"}
                   :autoHideDuration 3000
                   :onClose #(rf/dispatch [:snackbar-home nil])}]))
(defn page
  "app template"
  []
  [mui/mui-theme-provider {:theme material-theme}
   [snackbar-view]
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

(defn mount-components []
  (rf/clear-subscription-cache!)
  (reagent/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:navigate :home])
  (ajax/load-interceptors!)
  (hook-browser-navigation!)
  (mount-components))
