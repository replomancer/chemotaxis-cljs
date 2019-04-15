## Chemotaxis simulation in ClojureScript

This is a simple simulation of bacteria exploring the environment
by moving towards higher concentration of food (chemotaxis).

It is based on ants colony simulation written in Clojure by Rich Hickey
and then ported to ClojureScript by [Julian Gamble](https://github.com/juliangamble/clojure-conj-2014-paradigms-of-core-async/tree/950964320bbff17cdd3da7bbcae00ac85dbcd388/9.Ants-CLJS-Array-Optimised/ants-cljs).

[Demo](https://cdn.rawgit.com/replomancer/chemotaxis-cljs/master/resources/public/index.html)

The relevant blog post: https://replomancer.github.io/Chemotaxis

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).
