(ns spachat.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [spachat.core-test]))

(doo-tests 'spachat.core-test)

