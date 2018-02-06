(defproject spachat "0.1.0"

  :description "SPA chat with re-frame, posting with remote REPL is available"
  :url "https://stacksideflow.host"

  :dependencies [[baking-soda "0.2.0" :exclusions [cljsjs/react-bootstrap]]
                 [binaryage/oops "0.6.4"]
                 [ch.qos.logback/logback-classic "1.2.3"]
                 [camel-snake-kebab "0.4.0"]
                 [clj-time "0.15.1"]
                 [cljs-ajax "0.8.0"]
                 [cljsjs/react-popper "0.10.4-0"]
                 [cljsjs/react-transition-group "2.4.0-0"]
                 [com.cognitect/transit-java "0.8.337"]
                 [compojure "1.6.1"]
                 [conman "0.8.3"]
                 [cprop "0.1.13"]
                 [funcool/struct "1.3.0"]
                 [luminus-aleph "0.1.5"]
                 [luminus-migrations "0.6.3"]
                 [luminus/ring-ttl-session "0.3.2"]
                 [markdown-clj "1.0.7"]
                 [metosin/muuntaja "0.5.0"]
                 [metosin/ring-http-response "0.9.1"]
                 [mount "0.1.16"]
                 [mysql/mysql-connector-java "8.0.14" :exclusions [com.google.protobuf/protobuf-java]]
                 [nrepl "0.5.3"]
                 [org.clojure/tools.nrepl "0.2.13"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238" :scope "provided"]
                 [org.clojure/tools.cli "0.4.1"]
                 [org.clojure/tools.logging "0.4.1"]
                 [org.webjars.bower/tether "1.4.4"]
                 [org.webjars/bootstrap "4.2.1"]
                 [org.webjars/font-awesome "5.6.3"]
                 [org.webjars/webjars-locator "0.35"]
                 [re-frame "0.10.6"]
                 [day8.re-frame/http-fx "0.1.6"]
                 [reagent "0.8.1"]
                 [ring-webjars "0.2.0"]
                 [ring/ring-core "1.7.1"]
                 [ring/ring-defaults "0.3.2"]
                 [secretary "1.2.3"]
                 [cljsjs/material-ui "3.9.1-0"]
                 [cljsjs/material-ui-icons "3.0.1-0"]
                 [digest "1.4.8"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [selmer "1.12.5"]
                 [protected-eval "0.1.6"]]
  :min-lein-version "2.0.0"
  :source-paths ["src/clj" "src/cljs" "src/cljc"]
  :test-paths ["test/clj"]
  :resource-paths ["resources" "target/cljsbuild"]
  :target-path "target/%s/"
  :main ^:skip-aot spachat.core
  :clean-targets ^{:protect false}
  [:target-path [:cljsbuild :builds :app :compiler :output-dir] [:cljsbuild :builds :app :compiler :output-to]]
  :figwheel
  {:http-server-root "public"
   :nrepl-port 7002
   :css-dirs ["resources/public/css"]
   :nrepl-middleware [cider/wrap-cljs-repl cider.piggieback/wrap-cljs-repl]}
  :aliases {"check-all"
            ["do"
             ["clean-m2"]
             ["bikeshed" "check"]
             ["eastwood"]
             ["cljfmt" "check"]]}
:profiles
  {:uberjar {:omit-source true
             :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
             :cljsbuild
             {:builds
              {:min
               {:source-paths ["src/cljc" "src/cljs" "env/prod/cljs"]
                :compiler
                {:output-dir "target/cljsbuild/public/js"
                 :output-to "target/cljsbuild/public/js/app.js"
                 :source-map "target/cljsbuild/public/js/app.js.map"
                 :optimizations :advanced
                 :infer-externs true
                 :pretty-print false}}}}
             :aot :all
             :uberjar-name "spachat.jar"
             :source-paths ["env/prod/clj"]
             :resource-paths ["env/prod/resources"]}

   :dev           [:project/dev :profiles/dev]
   :test          [:project/dev :project/test :profiles/test]
   ;; :protected-eval {:repl-options {:init-ns user
   ;;                                 :timeout 120000
   ;;                                 :nrepl-middleware [protected-eval.core/eval-apply-remote-only-non-headless-cider]}}
   :project/dev  {:jvm-opts ["-Dconf=dev-config.edn"]
                  :dependencies [[binaryage/devtools "0.9.10"]
                                 [cider/piggieback "0.3.10"]
                                 [day8.re-frame/re-frame-10x "0.3.6"]
                                 [doo "0.1.11"]
                                 [expound "0.7.2"]
                                 [figwheel-sidecar "0.5.18"]
                                 [pjstadig/humane-test-output "0.9.0"]
                                 [prone "1.6.1"]
                                 [ring/ring-devel "1.7.1"]
                                 [ring/ring-mock "0.3.2"]]
                  :plugins      [[lein-cljsbuild "1.1.7"]
                                 [lein-clean-m2 "0.1.2"]
                                 [com.jakemccrary/lein-test-refresh "0.23.0"]
                                 [lein-bikeshed "0.5.1"]
                                 [lein-cljfmt "0.6.4"]
                                 [lein-eftest "0.5.4"]
                                 [jonase/eastwood "0.3.5"]
                                 [lein-doo "0.1.10"]
                                 [lein-figwheel "0.5.18"]]
                  :cljsbuild
                  {:builds
                   {:app
                    {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
                     :figwheel {:on-jsload "spachat.core/mount-components"}
                     :compiler
                     {:main "spachat.app"
                      :asset-path "/js/out"
                      :output-to "target/cljsbuild/public/js/app.js"
                      :output-dir "target/cljsbuild/public/js/out"
                      :source-map true
                      :optimizations :none
                      :pretty-print true
                      :closure-defines {"re_frame.trace.trace_enabled_QMARK_" true}
                      :preloads [day8.re-frame-10x.preload]}}}}



                  :doo {:build "test"}
                  :source-paths ["env/dev/clj"]
                  :resource-paths ["env/dev/resources"]
                  :repl-options {:init-ns user
                                 :timeout 120000
                                 :nrepl-middleware [protected-eval.core/eval-apply-remote-only-cider]}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]}
   :project/test {:jvm-opts ["-Dconf=test-config.edn"]
                  :resource-paths ["env/test/resources"]
                  :cljsbuild
                  {:builds
                   {:test
                    {:source-paths ["src/cljc" "src/cljs" "test/cljs"]
                     :compiler
                     {:output-to "target/test.js"
                      :main "spachat.doo-runner"
                      :optimizations :whitespace
                      :pretty-print true}}}}

                  }
   :profiles/dev {}
   :profiles/test {}})
