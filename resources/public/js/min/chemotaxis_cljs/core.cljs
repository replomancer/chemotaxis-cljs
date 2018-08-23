(ns chemotaxis-cljs.core
  (:require
   [goog.dom :as dom]
   [goog.events :as ev]
   [cljs.core.async :as async :refer [<! >! chan put! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(enable-console-print!)

; dimensions of square world
; when changing this remember to change canvas size
(def dim 100)

;number of bacteria
(def bacteria-cnt 100)

;max number of places with food
(def food-places-max 16)

; min of amount of food at a place
(def food-min 20)
; max of amount of food at a place
(def food-max 100)

;scale factor for food drawing
(def food-scale 50.0)

(def chan-timeout-duration 30)

(defn cell [food bacterium]
  {:pre [(not (nil? food))
         (not (nil? bacterium))
         (or (= false bacterium) (= 3 (alength bacterium)))
         (number? food)]}
  (let [cell (make-array 2)]
    (aset cell 0 food)
    (aset cell 1 bacterium)
    cell))

(defn get-cell-food [cell]
  {:pre [(not (nil? cell))
         (= 2 (alength cell))]
   :post [(not (nil? %))
          (number? %)]}
  (aget cell 0))

(defn get-cell-bacterium [cell]
  {:pre [(not (nil? cell))
         (= 2 (alength cell))]
   :post [(not (nil? %))]}
  (aget cell 1))

(defn set-cell-food [cell food]
  {:pre [(not (nil? cell))
         (not (nil? food))
         (= 2 (alength cell))
         (number? food)]}
  (aset cell 0 (int food))
  cell)

(defn set-cell-bacterium [cell bacterium]
  {:pre [(not (nil? cell))
         (not (nil? bacterium))
         (= 2 (alength cell))
         (or (= false bacterium) (= 3 (alength bacterium)))]}
  (aset cell 1 bacterium)
  cell)

(defn make-world [w h]
  (vec (for [_ (range h)]
         (vec (for [_ (range w)] (cell 0 false))))))

(defonce world (make-world dim dim))

(defn place [[x y]]
  (get-in world [y x]))

(defn bacterium "make an array representing a bacterium" [dir loc food]
  {:pre [(not (nil? dir))
         (not (nil? loc))
         (not (nil? food))
         (number? dir)
         (number? food)]}
  (let [bacterium (make-array 3)]
    (aset bacterium 0 dir)
    (aset bacterium 1 loc)
    (aset bacterium 2 food)
    bacterium))

(defn get-bacterium-dir [bacterium]
  {:pre [(not (nil? bacterium))
         (= 3 (alength bacterium))]
   :post [(not (nil? %))]}
  (aget bacterium 0))

(defn get-bacterium-coord [bacterium]
  {:pre [(not (nil? bacterium))
         (= 3 (alength bacterium))]
   :post [(not (nil? %))]}
  (aget bacterium 1))

(defn get-bacterium-food [bacterium]
  {:pre [(not (nil? bacterium))
         (= 3 (alength bacterium))]
   :post [(not (nil? %))
          (number? %)]}
  (aget bacterium 2))

(defn set-bacterium-dir [bacterium dir]
  {:pre [(not (nil? bacterium))
         (not (nil? dir))
         (number? dir)
         (= 3 (alength bacterium))]}
  (aset bacterium 0 dir)
  bacterium)

(defn set-bacterium-loc [bacterium loc]
  {:pre [(not (nil? bacterium))
         (not (nil? loc))
         (= 3 (alength bacterium))]}
  (aset bacterium 1 loc)
  bacterium)

(defn set-bacterium-food [bacterium food]
  {:pre [(not (nil? food))
         (number? food)
         (not (nil? bacterium))
         (= 3 (alength bacterium))]}
  (aset bacterium 2 food)
  bacterium)

(defn create-bacterium
  [loc dir]
  (let [c (place loc)
        bact (bacterium dir loc 0)]
    (set-cell-bacterium c bact)
    bact))

(defn distance [[x1 y1] [x2 y2]]
  (js/Math.sqrt (+ (js/Math.pow (- x1 x2) 2) (js/Math.pow (- y1 y2) 2))))

(defn drop-single-food-splash [[center-x center-y] food-amount]
  (let [circle-r (int (* 25 (/ food-max food-amount)))]
    (doseq [x (range (max 0 (- center-x circle-r))  ;;doall?
                     (min dim (+ center-x circle-r)))
            y (range (max 0 (- center-y circle-r))
                     (min dim (+ center-y circle-r)))]
           (set-cell-food (place [x y])
                          (+
                           (get-cell-food (place [x y]))
                           (* food-amount
                              (js/Math.pow 0.7
                                           (distance [center-x center-y] [x y]))))))))

(defn drop-random-food
  ([] (drop-random-food 1))
  ([min-places-cnt]
   (dotimes [_ (+ min-places-cnt
                  (rand-int (inc (- food-places-max min-places-cnt))))]
     (let [coord [(rand-int dim) (rand-int dim)]
           food-amount (+ food-min (rand-int (inc (- food-max food-min))))]
       (drop-single-food-splash coord food-amount)))))

(defn remove-all-food []
  (doseq [x (range dim) y (range dim)]
    (set-cell-food (place [x y]) 0)))

(defn drop-bacteria []
  (doall (for [_ (range bacteria-cnt)]
           (let [x (rand-int dim) y (rand-int dim)]
             (create-bacterium [x y] (rand-int 8))))))

;dirs are 0-7, starting at north and going clockwise
;these are the deltas in order to move one step in given dir
(def dir-delta {0 [0 -1]
                1 [1 -1]
                2 [1 0]
                3 [1 1]
                4 [0 1]
                5 [-1 1]
                6 [-1 0]
                7 [-1 -1]})

(defn delta-loc
  "returns the location one step in the given dir."
  [[x y] dir]
  (let [[dx dy] (dir-delta dir)]
    [(+ x dx) (+ y dy)]))

(defn outside-world? [[x y]]
  (or (neg? x) (>= x dim)
      (neg? y) (>= y dim)))

(defn move [bacterium]
  (let [coord (get-bacterium-coord bacterium)
        old-p (place coord)
        new-loc (delta-loc coord (get-bacterium-dir bacterium))]
    (if (outside-world? new-loc)
      coord
      (let [new-p (place new-loc)]
        (if (get-cell-bacterium new-p)
          coord
          (do
            (set-cell-bacterium new-p bacterium)
            (set-cell-bacterium old-p false)
            (set-bacterium-loc bacterium new-loc)
            new-loc))))))

(defn behave [bacterium]
  {:pre [(not (nil? bacterium))
         (= 3 (alength bacterium))]}
  (let [coord (get-bacterium-coord bacterium)
        occupied-cell (place coord)
        curr-food-amount (get-cell-food occupied-cell)
        prev-food-amount (get-bacterium-food bacterium)
        ahead-coord (delta-loc coord (get-bacterium-dir bacterium))]
    ;; When food is less abundant, the bacterium flips and chooses
    ;; a new dir randomly (sometimes it's the same as the old dir).
    ;; It also flips when the way is blocked (by world borders or another
    ;; bacteria). Otherwise it continues moving forward.
    (when (or (< curr-food-amount prev-food-amount)
              (outside-world? ahead-coord)
              (get-cell-bacterium (place ahead-coord)))
      (set-bacterium-dir bacterium (rand-int 8)))
    ;; remember how much food there was
    (set-bacterium-food bacterium curr-food-amount)
    ;; eat some of the available food
    (set-cell-food occupied-cell (int (Math.floor (* 0.9 curr-food-amount))))
    ;; move
    (move bacterium)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; UI ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(def canvas-id "chemotaxis-canvas")

(def context (.getContext (dom/getElement canvas-id) "2d"))

(def play-button-id "chemotaxis-play-button")
(def food-button-id "chemotaxis-food-button")
(def remove-food-button-id "chemotaxis-remove-food-button")
(def play-button (dom/getElement play-button-id))
(def food-button (dom/getElement food-button-id))
(def remove-food-button (dom/getElement remove-food-button-id))

(def scale 5)

(defn fill-cell [ctx x y color]
  (doto ctx
    (.beginPath)
    (.rect (* x  scale) (* y scale) scale scale))
  (set! (.-fillStyle ctx) color)
  (.fill ctx))

(defn render-bacterium [bacterium ctx x y]
  (let [[hx hy tx ty] ({0 [2 0 2 4]
                        1 [4 0 0 4]
                        2 [4 2 0 2]
                        3 [4 4 0 0]
                        4 [2 4 2 0]
                        5 [0 4 4 0]
                        6 [0 2 4 2]
                        7 [0 0 4 4]}
                       (get-bacterium-dir bacterium))]
    (.beginPath ctx)
    (set! (.-lineWidth ctx) 3)
    (set! (.-strokeStyle ctx) "black")
    (doto ctx
      (.moveTo (+ hx (* x scale)) (+ hy (* y scale)))
      (.lineTo (+ tx (* x scale)) (+ ty (* y scale)))
      (.stroke))))

(defn render-food [food-amount ctx x y ]
  (fill-cell ctx x y (str "rgba(0,255,0,"
                          (/ food-amount food-scale) ")")))

(defn render-place [ctx p x y]
  (let [cell-food (get-cell-food p)
        cell-bacterium (get-cell-bacterium p)]
    (render-food cell-food ctx x y)
    (when cell-bacterium
      (render-bacterium cell-bacterium ctx x y))))

(defn setup-context [ctx]
  (set! (.-width ctx) (* dim scale))
  (set! (.-height ctx) (* dim scale))
  (.beginPath ctx)
  (set! (.-strokeStyle ctx) "white")
  (.rect ctx 0 0 (* dim scale) (* dim scale))
  (set! (.-fillStyle ctx) "white")
  (.fill ctx)
  (.stroke ctx))

(defn render [ctx]
  ;1. draw the white background
  (setup-context ctx)
  ;2. Render each of the cells
  (doseq [x (range dim)
          y (range dim)]
    (render-place ctx (place [x y]) x y)))


;; Go blocks and main function

(defonce is-running (atom false))

(defn render-go-block []
  (go-loop []
    (if @is-running
      (render context))
    (<! (timeout chan-timeout-duration))
    (recur)))

(defn behave-bacteria-go-block [bacteria-seq]
  (go-loop []
    (if @is-running
      (doseq [bacterium bacteria-seq]
        (behave bacterium)))
    (<! (timeout chan-timeout-duration))
    (recur)))

; put the events from an element on a core.async channel
; from David Noel's core.async tutorial http://swannodette.github.io/2013/11/07/clojurescript-101/
(defn listen [el type]
  (let [out (chan)]
    (ev/listen el type
               (fn [e] (put! out e)))
    out))

(defn play-pause []
  (swap! is-running not))

(defn mouse-interaction-go-block []
  (let [play-button-clicks (listen play-button "click")
        drop-button-clicks (listen food-button "click")
        remove-food-button-clicks (listen remove-food-button "click")]
    (go-loop []
      (let [[v c] (alts! [play-button-clicks
                          drop-button-clicks
                          remove-food-button-clicks])]
        (cond (= c play-button-clicks) (play-pause)
              (= c drop-button-clicks) (do (drop-random-food)
                                           (render context))
              (= c remove-food-button-clicks) (do (remove-all-food)
                                                  (render context))))
      (recur))))

(defn start []
  (drop-random-food 10)
  (let [bacteria (drop-bacteria)]
    (render context)
    (render-go-block)
    (behave-bacteria-go-block bacteria)
    (mouse-interaction-go-block)))

(defonce _
  (start))
