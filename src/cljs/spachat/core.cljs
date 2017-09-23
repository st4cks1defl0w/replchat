(ns spachat.core
  (:require [ajax.core :refer [GET POST]]
            [cljs-react-material-ui.core :refer [create-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as ic]
            [cljs-time.format :as tformat]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [re-frame.core :as rf]
            [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [spachat.ajax :as ajax]
            [spachat.events]
            [spachat.subs])
  (:import goog.History))

(def formatterTime (tformat/formatter "yyyyMMdd"))

(defonce app-state (atom {:text "spachat"}))

(def base-theme
  "materialUI theme"
  (create-mui-theme
   {:palette {:primary {:main (color :red :A100)}
              :secondary {:main (color :pink :A100)}
              :text-color (color :common :white)}}))

(defn navbar
  "appwide navbar" []
  [ui/mui-theme-provider
   {:theme base-theme}
   [ui/app-bar     {:position "static"}
    [ui/toolbar
     [:div  [ui/icon
             {:color "inherit"
              :style {:margin-left "-10px"
                      :margin-right "10px"}}
             [ic/chat]]]
     [ui/typography
      {:variant "title"
       :style {:font-family "monospace"}}
      "Welcome to spachat"]]]])

(def chat-bubble-others {:text-align "left"
                         :float "left"
                         :clear "both"
                         :padding-top "6px"
                         :padding-right "15px"
                         :padding-left "15px"
                         :font-size "0.8em"
                         :background-color (color :red :A100)
                         :border-radius "10px"
                         :margin-bottom "20px"})

(def chat-bubble-yours {:text-align "right"
                        :float "right"
                        :clear "both"
                        :padding-top "6px"
                        :padding-right "15px"
                        :padding-left "15px"
                        :font-size "0.8em"
                        :border (str "1px solid " (color :red :A100))
                        :border-radius "10px"
                        :margin-bottom "20px"})

(defn scroll-chats-down!
  "keeps chat container scrolled to the bottom with classic css (noflex) (hacky)"
  []
  (let [chat-container (.getElementById js/document "chatsContainer")]
    (when (not (nil? chat-container))
      (set! (.-scrollTop chat-container) 10000000))))

(defn msgs-elements [{:keys [username text stamp]} msg-component]
  (cond

    (= username @(rf/subscribe [:signupUserValue]))
    [:div {:style chat-bubble-yours}
     text [:p {:style {:font-size "0.8em"}}
           (str "- by You at "   (.toString stamp))]]

    :else
    [:div {:style chat-bubble-others}
     text [:p {:style {:font-size "0.8em"}}
           (str "- by " username " at "  (.toString stamp))]]))

(defn chat-element [msgs]
  (js/setTimeout scroll-chats-down! 50)
  (into [:ul] (map msgs-elements msgs)))

(defn chat-page []
  (let [_on-load! (rf/dispatch [:pingingChatUser])]
    [ui/mui-theme-provider
     {:theme base-theme}
     [:div {:style {:padding-top "40px"
                    :width "50%"
                    :max-width "500px"
                    :margin "0 auto"}}
      [ui/paper {:elevation 1 :style {}}
       [ui/app-bar {:style {:position "static" :padding "10px"}}
        [ui/typography
         {:variant "headline" :component "h4"}
         [ui/icon
          {:color "inherit"
           :style {:margin-left "0px"
                   :margin-right "5px"
                   :vertical-align "0.1em"}}
          [ic/account-circle]] "Hi, " @(rf/subscribe [:signupUserValue])]]
       [ui/card {:id "chatsContainer"
                 :elevation 1
                 :style {:overflow-y "scroll"
                         :padding "5px"
                         :height "40vh"}}
        [chat-element @(rf/subscribe [:chats])]]
       [ui/card {:elevation 1 :style {:padding "10px" :height "100px"}}
        [ui/form-control {:style {:width "60%"}}
         [ui/input-label {:htmlFor "sendMessage"} "Send Message"]
         [ui/input {:value @(rf/subscribe [:sendMessage])
                    :id "sendMessage"
                    :multiline true
                    :rows 3
                    :on-change
                    #(rf/dispatch [:sendMessage (-> % .-target .-value)])}]]
        [ui/form-control {:style {:width "40%"}}
         [ui/button {:on-click  #(rf/dispatch [:sendMessageGo])
                     :variant "contained"
                     :color "primary"
                     :id "sendMessageGo"
                     :style {:float "right"
                             :width "50px"
                             :margin-left "auto"}} "Send"]]]]
      [:div {:style {:padding-top "10px"}}
       "Users online now: "
       (map #(vector ui/chip {:label (:username %)})
            @(rf/subscribe [:onlineUsersNow]))]]]))

(defn home-page []
  [ui/mui-theme-provider
   {:theme base-theme}
   (when @(rf/subscribe [:signInError])
     (js/setTimeout  #(rf/dispatch [:resetSignInError]) 3000)
     [ui/snackbar {:open true
                   :message "Wrong Password"
                   :anchorOrigin {:vertical "bottom"
                                  :horizontal "left"}
                   :autoHideDuration 2}])
   [:div {:style {:padding-top "40px"
                  :width "50%"
                  :max-width "300px"
                  :margin "0 auto"}}
    [ui/paper {:elevation 1 :style {:padding "20px"}}
     [ui/typography
      {:variant "headline" :component "h3"}
      "Sign In / Sign Up"]
     [ui/typography
      {:variant "body1" :component "p"}
      "If you don't have a username, you'll be signed up"]
     [ui/form-control
      [ui/input-label {:htmlFor "signupUser"} "Username"]
      [ui/input {:id "signupUserValue"
                 :on-change #(rf/dispatch [:signupUserValue (-> % .-target .-value)])}]]
     [ui/form-control {:style {:margin-top "15px"}}
      [ui/input-label {:htmlFor "signupPasswordValue"} "Password"]
      [ui/input {:value  @(rf/subscribe [:signupPasswordValue])
                 :type "password"
                 :id "signupPasswordValue"
                 :on-change #(rf/dispatch
                              [:signupPasswordValue (-> % .-target .-value)])}]]
     [:div {:style {:padding-top "25px"}}
      [ui/form-control
       [ui/button {:on-click #(rf/dispatch [:signupGo])
                   :variant "contained"
                   :color "primary"
                   :id "signupGo"
                   :style {:float "right"}}
        "Go"]]]]]])

(def pages
  {:home #'home-page
   :chat #'chat-page})

(defn page
  "app template"
  []
  [:div
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

(defonce pingWithInterval
  (js/setInterval #(rf/dispatch [:pingingChatUser]) 10000))

(defn mount-components []
  (rf/clear-subscription-cache!)
  (reagent/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:navigate :home])
  (ajax/load-interceptors!)
  (rf/dispatch [:fetch-docs])
  (hook-browser-navigation!)
  (mount-components)
  (pingWithInterval))
