(defproject chemotaxis-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [org.clojure/core.async "0.4.474"]]

  :plugins [[lein-figwheel "0.5.16"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  :figwheel {:css-dirs ["resources/public/css/"]}

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel true
              :compiler {:asset-path "js/out"
                         :output-to "resources/public/js/chemotaxis-cljs.js"
                         :main chemotaxis_cljs.core
                         :output-dir "resources/public/js/out"
                         :optimizations :none
                         :source-map true}}
             {:id "min"
              :source-paths ["src"]
              :compiler {:asset-path "js/min"
                         :output-to "resources/public/js/chemotaxis-cljs.js"
                         :output-dir "resources/public/js/min"
                         :optimizations :advanced
                         :source-map "resources/public/js/chemotaxis-cljs.js.map"
                         :pretty-print false}}]}

    :profiles {:dev {:dependencies [[binaryage/devtools "0.9.9"]
                                    [figwheel-sidecar "0.5.16"]
                                    [cider/piggieback "0.3.1"]]
                   :source-paths ["src"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
                   ;; need to add the compliled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/"
                                                     :target-path]}}
)
