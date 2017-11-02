(ns spachat.mui
  (:require [camel-snake-kebab.core :as convert-case]
            [reagent.core :as r]
            [oops.core :as oops]
            material-ui
            material-ui-icons))

(def app-bar (r/adapt-react-class (.-AppBar js/MaterialUI)))

(def button (r/adapt-react-class (.-Button js/MaterialUI)))

(def card (r/adapt-react-class (.-Card js/MaterialUI)))

(def chip (r/adapt-react-class (.-Chip js/MaterialUI)))

(def form-control (r/adapt-react-class (.-FormControl js/MaterialUI)))

(def grid (r/adapt-react-class (.-Grid js/MaterialUI)))

(def input (r/adapt-react-class (.-Input js/MaterialUI)))

(def input-label (r/adapt-react-class (.-InputLabel js/MaterialUI)))

(def mui-theme-provider (r/adapt-react-class (.-MuiThemeProvider js/MaterialUI)))

(defn create-mui-theme [theme]
  (oops/ocall+ js/MaterialUIStyles "createMuiTheme" theme))

(def paper (r/adapt-react-class (.-Paper js/MaterialUI)))

(def toolbar (r/adapt-react-class (.-Toolbar js/MaterialUI)))

(def typography (r/adapt-react-class (.-Typography js/MaterialUI)))

(def snackbar (r/adapt-react-class (.-Snackbar js/MaterialUI)))

(defn color [mui-color mui-tint]
  (oops/oget+ js/MaterialUIColors (str ".?" (name mui-color) ".?" mui-tint)))
