(ns replchat.spec
  (:require
   #?(:clj  [clojure.spec.alpha :as s]
      :cljs [cljs.spec.alpha :as s])))

(s/def ::password (s/and string? #(<= 6 (count %))))
