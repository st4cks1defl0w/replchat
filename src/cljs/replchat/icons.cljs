(ns replchat.icons
  (:require material-ui-icons
            [oops.core :as oops]
            [reagent.core :as r]))

(def account-circle (r/adapt-react-class (oops/oget+ js/MaterialUIIcons "AccountCircle")))

(def chat (r/adapt-react-class (oops/oget+ js/MaterialUIIcons "Chat")))
