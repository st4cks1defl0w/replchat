(ns spachat.icon
  (:require [reagent.core :as r]
            [oops.core :as oops]
            material-ui-icons))

(def account-circle (r/adapt-react-class (oops/oget+ js/MaterialUIIcons "AccountCircle")))

(def chat (r/adapt-react-class (oops/oget+ js/MaterialUIIcons "Chat")))
