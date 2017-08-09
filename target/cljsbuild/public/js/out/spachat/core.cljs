(ns spachat.core
  (:require 
            [reagent.core :as r]
            [cljsjs.material-ui]
            [re-frame.core :as rf]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            [spachat.ajax :as ajax]
            [spachat.events]
[reagent.core :as reagent :refer [atom]]
            [cljs-react-material-ui.core :refer [create-mui-theme color]]
            [cljs-react-material-ui.reagent :as ui]
    [cljs-react-material-ui.icons :as ic]
            [secretary.core :as secretary]
[cljs-time.format :as tformat])

  (:import goog.History))


(def formatterTime (tformat/formatter "yyyyMMdd"))

;;materialUI settings 
(defonce app-state (atom {:text "spachat"}))
(def base-theme
  (create-mui-theme {:palette {:primary {:main (color :red :A100)}
                            :secondary {:main (color :pink :A100)}
                            :text-color (color :common :white)}}))






;;appwide navbar
(defn navbar []
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





;;add custom css for chatBubbles
(def chatBubbleOthers {
:text-align "left"
:float "left"
:clear "both"
:padding-top "6px"
:padding-right "15px"
:padding-left "15px"
:font-size "0.8em"
:background-color (color :red :A100)
:border-radius "10px"
:margin-bottom "20px"
})

(def chatBubbleYours {
:text-align "right"
:float "right"
:clear "both"
:padding-top "6px"
:padding-right "15px"
:padding-left "15px"
:font-size "0.8em"
:border (str "1px solid " (color :red :A100))
:border-radius "10px"
:margin-bottom "20px"
})

;;js scroll function to keep chats container at the bottom
(defn scrollChatsContainer []
(def contScroll (.getElementById js/document "chatsContainer"))
(when (not (nil? contScroll))
(set! (.-scrollTop contScroll) 10000000))
)

;;chat-parser custom react element - part 1
(defn chatsParser [{cAuthor :username cText :text cStamp :stamp} oneChat]
;;return user msgs / other ppl msgs
(cond 
(= cAuthor @(rf/subscribe [:signupUserValue])) [:div {:style chatBubbleYours} cText [:p {:style {:font-size "0.8em"}} (str "- by You at "   (.toString cStamp)) ]]
:else  [:div {:style chatBubbleOthers} cText [:p {:style {:font-size "0.8em"}} (str "- by " cAuthor " at "  (.toString cStamp))]]
)
)

;;chat-parser custom react element - part 2, chats container
 (defn mapChats [subbedChats]
(js/setTimeout  scrollChatsContainer 50)
       (into [:ul] (map chatsParser subbedChats)))


;;reagent+materialUI templates, 2 views in total
(defn chat-page []
(rf/dispatch [:pingingChatUser])
  [ui/mui-theme-provider
   {:theme base-theme}
[:div {:style {:padding-top "40px" :width "50%" :max-width "500px" :margin "0 auto"}}
   [ui/paper {:elevation 1 :style {}}
[ui/app-bar {:style {:position "static" :padding "10px"}} 
[ui/typography
      {:variant "headline" :component "h4"}
 [ui/icon
      {:color "inherit"
       :style {:margin-left "0px"
               :margin-right "5px" :vertical-align "0.1em"}}
      [ic/account-circle]] "Hi, " @(rf/subscribe [:signupUserValue]) ]
]
   [ui/card {:id "chatsContainer" :elevation 1 :style {:overflow-y "scroll" :padding "5px" :height "40vh"}}
[mapChats @(rf/subscribe [:chats])]
]
   [ui/card {:elevation 1 :style {:padding "10px" :height "100px"}}
[ui/form-control {:style {:width "60%"}}
[ui/input-label {:htmlFor "sendMessage"} "Send Message"]
[ui/input {:value  @(rf/subscribe [:sendMessage]) :id "sendMessage" :multiline true :rows 3 :on-change   #(rf/dispatch [:sendMessage (-> % .-target .-value)])}] 
]
[ui/form-control {:style {:width "40%"}}
[ui/button {:on-click  #(rf/dispatch [:sendMessageGo]) :variant "contained" :color "primary" :id "sendMessageGo" :style {:float "right" :width "50px" :margin-left "auto"}} "Send"]
]
]
]
[:div {:style {:padding-top "10px"}} "Users online now: "  (map #(vector ui/chip {:label (:username %)}) @(rf/subscribe [:onlineUsersNow]))]
]])





(defn home-page []
  [ui/mui-theme-provider

   {:theme base-theme}
(when @(rf/subscribe [:signInError])
(js/setTimeout  #(rf/dispatch [:resetSignInError]) 3000)
[ui/snackbar {:open true :message "Wrong Password" :anchorOrigin {:vertical "bottom" :horizontal "left"} :autoHideDuration 2} ]

)
[:div {:style {:padding-top "40px" :width "50%" :max-width "300px" :margin "0 auto"}}
   [ui/paper {:elevation 1 :style {:padding "20px"}}
[ui/typography
      {:variant "headline" :component "h3"}
  "Sign In / Sign Up"]
[ui/typography
      {:variant "body1" :component "p"}
      "If you don't have a username, you'll be signed up"]
[ui/form-control
[ui/input-label {:htmlFor "signupUser"} "Username"]
[ui/input {:id "signupUserValue" :on-change   #(rf/dispatch [:signupUserValue (-> % .-target .-value)])}]
]
[ui/form-control {:style {:margin-top "15px"}}
[ui/input-label {:htmlFor "signupPasswordValue"} "Password"]
[ui/input {:value  @(rf/subscribe [:signupPasswordValue]) :type "password" :id "signupPasswordValue" :on-change   #(rf/dispatch [:signupPasswordValue (-> % .-target .-value)])}]
]
[:div {:style {:padding-top "25px"}}
[ui/form-control
[ui/button {:on-click  #(rf/dispatch [:signupGo]) :variant "contained" :color "primary" :id "signupGo" :style {:float "right"}} "Go"]
]
]
]
   ]])



;;template routers
(def pages
  {:home #'home-page
   :chat #'chat-page})

;;appwide "ubertemplate"
(defn page []
  [:div
   [navbar]
   [(pages @(rf/subscribe [:page]))]])


;;routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (rf/dispatch [:navigate :home]))

(secretary/defroute "/chat" []
  (rf/dispatch [:navigate :chat]))


;;history, required for normal work of navigation
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))


;;for signedin user - ping i'm online and check whether chats are uptodate, ping part 1
;;start pinging, ping part 3
(defonce pingWithInterval
  (js/setInterval #(rf/dispatch [:pingingChatUser]) 10000))

;;init app
(defn mount-components []
  (rf/clear-subscription-cache!)
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:navigate :home])
  (ajax/load-interceptors!)
  (rf/dispatch [:fetch-docs])
  (hook-browser-navigation!)
  (mount-components)
  (pingWithInterval))



    






