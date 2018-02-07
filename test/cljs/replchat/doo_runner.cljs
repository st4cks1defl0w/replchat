(ns replchat.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [replchat.core-test]))

(doo-tests 'replchat.core-test)
