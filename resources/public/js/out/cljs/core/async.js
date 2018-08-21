// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23212 = arguments.length;
switch (G__23212) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23213 = (function (f,blockable,meta23214){
this.f = f;
this.blockable = blockable;
this.meta23214 = meta23214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23215,meta23214__$1){
var self__ = this;
var _23215__$1 = this;
return (new cljs.core.async.t_cljs$core$async23213(self__.f,self__.blockable,meta23214__$1));
});

cljs.core.async.t_cljs$core$async23213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23215){
var self__ = this;
var _23215__$1 = this;
return self__.meta23214;
});

cljs.core.async.t_cljs$core$async23213.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23214","meta23214",1840326965,null)], null);
});

cljs.core.async.t_cljs$core$async23213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23213";

cljs.core.async.t_cljs$core$async23213.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23213");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23213.
 */
cljs.core.async.__GT_t_cljs$core$async23213 = (function cljs$core$async$__GT_t_cljs$core$async23213(f__$1,blockable__$1,meta23214){
return (new cljs.core.async.t_cljs$core$async23213(f__$1,blockable__$1,meta23214));
});

}

return (new cljs.core.async.t_cljs$core$async23213(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23219 = arguments.length;
switch (G__23219) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23222 = arguments.length;
switch (G__23222) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23225 = arguments.length;
switch (G__23225) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23227 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23227);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23227,ret){
return (function (){
return fn1.call(null,val_23227);
});})(val_23227,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23229 = arguments.length;
switch (G__23229) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___23231 = n;
var x_23232 = (0);
while(true){
if((x_23232 < n__4376__auto___23231)){
(a[x_23232] = (0));

var G__23233 = (x_23232 + (1));
x_23232 = G__23233;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23234 = (i + (1));
i = G__23234;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23235 = (function (flag,meta23236){
this.flag = flag;
this.meta23236 = meta23236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23237,meta23236__$1){
var self__ = this;
var _23237__$1 = this;
return (new cljs.core.async.t_cljs$core$async23235(self__.flag,meta23236__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23237){
var self__ = this;
var _23237__$1 = this;
return self__.meta23236;
});})(flag))
;

cljs.core.async.t_cljs$core$async23235.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23235.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23236","meta23236",-573220370,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23235";

cljs.core.async.t_cljs$core$async23235.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23235");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23235.
 */
cljs.core.async.__GT_t_cljs$core$async23235 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23235(flag__$1,meta23236){
return (new cljs.core.async.t_cljs$core$async23235(flag__$1,meta23236));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23235(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23238 = (function (flag,cb,meta23239){
this.flag = flag;
this.cb = cb;
this.meta23239 = meta23239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23240,meta23239__$1){
var self__ = this;
var _23240__$1 = this;
return (new cljs.core.async.t_cljs$core$async23238(self__.flag,self__.cb,meta23239__$1));
});

cljs.core.async.t_cljs$core$async23238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23240){
var self__ = this;
var _23240__$1 = this;
return self__.meta23239;
});

cljs.core.async.t_cljs$core$async23238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23239","meta23239",-860036378,null)], null);
});

cljs.core.async.t_cljs$core$async23238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23238";

cljs.core.async.t_cljs$core$async23238.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23238");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23238.
 */
cljs.core.async.__GT_t_cljs$core$async23238 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23238(flag__$1,cb__$1,meta23239){
return (new cljs.core.async.t_cljs$core$async23238(flag__$1,cb__$1,meta23239));
});

}

return (new cljs.core.async.t_cljs$core$async23238(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23241_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23241_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23242_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23242_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23243 = (i + (1));
i = G__23243;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23249 = arguments.length;
var i__4500__auto___23250 = (0);
while(true){
if((i__4500__auto___23250 < len__4499__auto___23249)){
args__4502__auto__.push((arguments[i__4500__auto___23250]));

var G__23251 = (i__4500__auto___23250 + (1));
i__4500__auto___23250 = G__23251;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23246){
var map__23247 = p__23246;
var map__23247__$1 = ((((!((map__23247 == null)))?(((((map__23247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23247):map__23247);
var opts = map__23247__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23244){
var G__23245 = cljs.core.first.call(null,seq23244);
var seq23244__$1 = cljs.core.next.call(null,seq23244);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23245,seq23244__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23253 = arguments.length;
switch (G__23253) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23152__auto___23299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___23299){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___23299){
return (function (state_23277){
var state_val_23278 = (state_23277[(1)]);
if((state_val_23278 === (7))){
var inst_23273 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23279_23300 = state_23277__$1;
(statearr_23279_23300[(2)] = inst_23273);

(statearr_23279_23300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (1))){
var state_23277__$1 = state_23277;
var statearr_23280_23301 = state_23277__$1;
(statearr_23280_23301[(2)] = null);

(statearr_23280_23301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (4))){
var inst_23256 = (state_23277[(7)]);
var inst_23256__$1 = (state_23277[(2)]);
var inst_23257 = (inst_23256__$1 == null);
var state_23277__$1 = (function (){var statearr_23281 = state_23277;
(statearr_23281[(7)] = inst_23256__$1);

return statearr_23281;
})();
if(cljs.core.truth_(inst_23257)){
var statearr_23282_23302 = state_23277__$1;
(statearr_23282_23302[(1)] = (5));

} else {
var statearr_23283_23303 = state_23277__$1;
(statearr_23283_23303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (13))){
var state_23277__$1 = state_23277;
var statearr_23284_23304 = state_23277__$1;
(statearr_23284_23304[(2)] = null);

(statearr_23284_23304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (6))){
var inst_23256 = (state_23277[(7)]);
var state_23277__$1 = state_23277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23277__$1,(11),to,inst_23256);
} else {
if((state_val_23278 === (3))){
var inst_23275 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23277__$1,inst_23275);
} else {
if((state_val_23278 === (12))){
var state_23277__$1 = state_23277;
var statearr_23285_23305 = state_23277__$1;
(statearr_23285_23305[(2)] = null);

(statearr_23285_23305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (2))){
var state_23277__$1 = state_23277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23277__$1,(4),from);
} else {
if((state_val_23278 === (11))){
var inst_23266 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
if(cljs.core.truth_(inst_23266)){
var statearr_23286_23306 = state_23277__$1;
(statearr_23286_23306[(1)] = (12));

} else {
var statearr_23287_23307 = state_23277__$1;
(statearr_23287_23307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (9))){
var state_23277__$1 = state_23277;
var statearr_23288_23308 = state_23277__$1;
(statearr_23288_23308[(2)] = null);

(statearr_23288_23308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (5))){
var state_23277__$1 = state_23277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23289_23309 = state_23277__$1;
(statearr_23289_23309[(1)] = (8));

} else {
var statearr_23290_23310 = state_23277__$1;
(statearr_23290_23310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (14))){
var inst_23271 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23291_23311 = state_23277__$1;
(statearr_23291_23311[(2)] = inst_23271);

(statearr_23291_23311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (10))){
var inst_23263 = (state_23277[(2)]);
var state_23277__$1 = state_23277;
var statearr_23292_23312 = state_23277__$1;
(statearr_23292_23312[(2)] = inst_23263);

(statearr_23292_23312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23278 === (8))){
var inst_23260 = cljs.core.async.close_BANG_.call(null,to);
var state_23277__$1 = state_23277;
var statearr_23293_23313 = state_23277__$1;
(statearr_23293_23313[(2)] = inst_23260);

(statearr_23293_23313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___23299))
;
return ((function (switch__23062__auto__,c__23152__auto___23299){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_23294 = [null,null,null,null,null,null,null,null];
(statearr_23294[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_23294[(1)] = (1));

return statearr_23294;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_23277){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23295){if((e23295 instanceof Object)){
var ex__23066__auto__ = e23295;
var statearr_23296_23314 = state_23277;
(statearr_23296_23314[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23315 = state_23277;
state_23277 = G__23315;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_23277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_23277);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___23299))
})();
var state__23154__auto__ = (function (){var statearr_23297 = f__23153__auto__.call(null);
(statearr_23297[(6)] = c__23152__auto___23299);

return statearr_23297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___23299))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23316){
var vec__23317 = p__23316;
var v = cljs.core.nth.call(null,vec__23317,(0),null);
var p = cljs.core.nth.call(null,vec__23317,(1),null);
var job = vec__23317;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23152__auto___23488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___23488,res,vec__23317,v,p,job,jobs,results){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___23488,res,vec__23317,v,p,job,jobs,results){
return (function (state_23324){
var state_val_23325 = (state_23324[(1)]);
if((state_val_23325 === (1))){
var state_23324__$1 = state_23324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23324__$1,(2),res,v);
} else {
if((state_val_23325 === (2))){
var inst_23321 = (state_23324[(2)]);
var inst_23322 = cljs.core.async.close_BANG_.call(null,res);
var state_23324__$1 = (function (){var statearr_23326 = state_23324;
(statearr_23326[(7)] = inst_23321);

return statearr_23326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23324__$1,inst_23322);
} else {
return null;
}
}
});})(c__23152__auto___23488,res,vec__23317,v,p,job,jobs,results))
;
return ((function (switch__23062__auto__,c__23152__auto___23488,res,vec__23317,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_23327 = [null,null,null,null,null,null,null,null];
(statearr_23327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__);

(statearr_23327[(1)] = (1));

return statearr_23327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1 = (function (state_23324){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23328){if((e23328 instanceof Object)){
var ex__23066__auto__ = e23328;
var statearr_23329_23489 = state_23324;
(statearr_23329_23489[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23490 = state_23324;
state_23324 = G__23490;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = function(state_23324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1.call(this,state_23324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___23488,res,vec__23317,v,p,job,jobs,results))
})();
var state__23154__auto__ = (function (){var statearr_23330 = f__23153__auto__.call(null);
(statearr_23330[(6)] = c__23152__auto___23488);

return statearr_23330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___23488,res,vec__23317,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23331){
var vec__23332 = p__23331;
var v = cljs.core.nth.call(null,vec__23332,(0),null);
var p = cljs.core.nth.call(null,vec__23332,(1),null);
var job = vec__23332;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___23491 = n;
var __23492 = (0);
while(true){
if((__23492 < n__4376__auto___23491)){
var G__23335_23493 = type;
var G__23335_23494__$1 = (((G__23335_23493 instanceof cljs.core.Keyword))?G__23335_23493.fqn:null);
switch (G__23335_23494__$1) {
case "compute":
var c__23152__auto___23496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23492,c__23152__auto___23496,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (__23492,c__23152__auto___23496,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async){
return (function (state_23348){
var state_val_23349 = (state_23348[(1)]);
if((state_val_23349 === (1))){
var state_23348__$1 = state_23348;
var statearr_23350_23497 = state_23348__$1;
(statearr_23350_23497[(2)] = null);

(statearr_23350_23497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (2))){
var state_23348__$1 = state_23348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23348__$1,(4),jobs);
} else {
if((state_val_23349 === (3))){
var inst_23346 = (state_23348[(2)]);
var state_23348__$1 = state_23348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23348__$1,inst_23346);
} else {
if((state_val_23349 === (4))){
var inst_23338 = (state_23348[(2)]);
var inst_23339 = process.call(null,inst_23338);
var state_23348__$1 = state_23348;
if(cljs.core.truth_(inst_23339)){
var statearr_23351_23498 = state_23348__$1;
(statearr_23351_23498[(1)] = (5));

} else {
var statearr_23352_23499 = state_23348__$1;
(statearr_23352_23499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (5))){
var state_23348__$1 = state_23348;
var statearr_23353_23500 = state_23348__$1;
(statearr_23353_23500[(2)] = null);

(statearr_23353_23500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (6))){
var state_23348__$1 = state_23348;
var statearr_23354_23501 = state_23348__$1;
(statearr_23354_23501[(2)] = null);

(statearr_23354_23501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23349 === (7))){
var inst_23344 = (state_23348[(2)]);
var state_23348__$1 = state_23348;
var statearr_23355_23502 = state_23348__$1;
(statearr_23355_23502[(2)] = inst_23344);

(statearr_23355_23502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23492,c__23152__auto___23496,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async))
;
return ((function (__23492,switch__23062__auto__,c__23152__auto___23496,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_23356 = [null,null,null,null,null,null,null];
(statearr_23356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__);

(statearr_23356[(1)] = (1));

return statearr_23356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1 = (function (state_23348){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23357){if((e23357 instanceof Object)){
var ex__23066__auto__ = e23357;
var statearr_23358_23503 = state_23348;
(statearr_23358_23503[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23504 = state_23348;
state_23348 = G__23504;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = function(state_23348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1.call(this,state_23348);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__;
})()
;})(__23492,switch__23062__auto__,c__23152__auto___23496,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async))
})();
var state__23154__auto__ = (function (){var statearr_23359 = f__23153__auto__.call(null);
(statearr_23359[(6)] = c__23152__auto___23496);

return statearr_23359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(__23492,c__23152__auto___23496,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async))
);


break;
case "async":
var c__23152__auto___23505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23492,c__23152__auto___23505,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (__23492,c__23152__auto___23505,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async){
return (function (state_23372){
var state_val_23373 = (state_23372[(1)]);
if((state_val_23373 === (1))){
var state_23372__$1 = state_23372;
var statearr_23374_23506 = state_23372__$1;
(statearr_23374_23506[(2)] = null);

(statearr_23374_23506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23373 === (2))){
var state_23372__$1 = state_23372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23372__$1,(4),jobs);
} else {
if((state_val_23373 === (3))){
var inst_23370 = (state_23372[(2)]);
var state_23372__$1 = state_23372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23372__$1,inst_23370);
} else {
if((state_val_23373 === (4))){
var inst_23362 = (state_23372[(2)]);
var inst_23363 = async.call(null,inst_23362);
var state_23372__$1 = state_23372;
if(cljs.core.truth_(inst_23363)){
var statearr_23375_23507 = state_23372__$1;
(statearr_23375_23507[(1)] = (5));

} else {
var statearr_23376_23508 = state_23372__$1;
(statearr_23376_23508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23373 === (5))){
var state_23372__$1 = state_23372;
var statearr_23377_23509 = state_23372__$1;
(statearr_23377_23509[(2)] = null);

(statearr_23377_23509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23373 === (6))){
var state_23372__$1 = state_23372;
var statearr_23378_23510 = state_23372__$1;
(statearr_23378_23510[(2)] = null);

(statearr_23378_23510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23373 === (7))){
var inst_23368 = (state_23372[(2)]);
var state_23372__$1 = state_23372;
var statearr_23379_23511 = state_23372__$1;
(statearr_23379_23511[(2)] = inst_23368);

(statearr_23379_23511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23492,c__23152__auto___23505,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async))
;
return ((function (__23492,switch__23062__auto__,c__23152__auto___23505,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_23380 = [null,null,null,null,null,null,null];
(statearr_23380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__);

(statearr_23380[(1)] = (1));

return statearr_23380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1 = (function (state_23372){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23381){if((e23381 instanceof Object)){
var ex__23066__auto__ = e23381;
var statearr_23382_23512 = state_23372;
(statearr_23382_23512[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23513 = state_23372;
state_23372 = G__23513;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = function(state_23372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1.call(this,state_23372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__;
})()
;})(__23492,switch__23062__auto__,c__23152__auto___23505,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async))
})();
var state__23154__auto__ = (function (){var statearr_23383 = f__23153__auto__.call(null);
(statearr_23383[(6)] = c__23152__auto___23505);

return statearr_23383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(__23492,c__23152__auto___23505,G__23335_23493,G__23335_23494__$1,n__4376__auto___23491,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23335_23494__$1)].join('')));

}

var G__23514 = (__23492 + (1));
__23492 = G__23514;
continue;
} else {
}
break;
}

var c__23152__auto___23515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___23515,jobs,results,process,async){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___23515,jobs,results,process,async){
return (function (state_23405){
var state_val_23406 = (state_23405[(1)]);
if((state_val_23406 === (1))){
var state_23405__$1 = state_23405;
var statearr_23407_23516 = state_23405__$1;
(statearr_23407_23516[(2)] = null);

(statearr_23407_23516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (2))){
var state_23405__$1 = state_23405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23405__$1,(4),from);
} else {
if((state_val_23406 === (3))){
var inst_23403 = (state_23405[(2)]);
var state_23405__$1 = state_23405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23405__$1,inst_23403);
} else {
if((state_val_23406 === (4))){
var inst_23386 = (state_23405[(7)]);
var inst_23386__$1 = (state_23405[(2)]);
var inst_23387 = (inst_23386__$1 == null);
var state_23405__$1 = (function (){var statearr_23408 = state_23405;
(statearr_23408[(7)] = inst_23386__$1);

return statearr_23408;
})();
if(cljs.core.truth_(inst_23387)){
var statearr_23409_23517 = state_23405__$1;
(statearr_23409_23517[(1)] = (5));

} else {
var statearr_23410_23518 = state_23405__$1;
(statearr_23410_23518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (5))){
var inst_23389 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23405__$1 = state_23405;
var statearr_23411_23519 = state_23405__$1;
(statearr_23411_23519[(2)] = inst_23389);

(statearr_23411_23519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (6))){
var inst_23386 = (state_23405[(7)]);
var inst_23391 = (state_23405[(8)]);
var inst_23391__$1 = cljs.core.async.chan.call(null,(1));
var inst_23392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23393 = [inst_23386,inst_23391__$1];
var inst_23394 = (new cljs.core.PersistentVector(null,2,(5),inst_23392,inst_23393,null));
var state_23405__$1 = (function (){var statearr_23412 = state_23405;
(statearr_23412[(8)] = inst_23391__$1);

return statearr_23412;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23405__$1,(8),jobs,inst_23394);
} else {
if((state_val_23406 === (7))){
var inst_23401 = (state_23405[(2)]);
var state_23405__$1 = state_23405;
var statearr_23413_23520 = state_23405__$1;
(statearr_23413_23520[(2)] = inst_23401);

(statearr_23413_23520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23406 === (8))){
var inst_23391 = (state_23405[(8)]);
var inst_23396 = (state_23405[(2)]);
var state_23405__$1 = (function (){var statearr_23414 = state_23405;
(statearr_23414[(9)] = inst_23396);

return statearr_23414;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23405__$1,(9),results,inst_23391);
} else {
if((state_val_23406 === (9))){
var inst_23398 = (state_23405[(2)]);
var state_23405__$1 = (function (){var statearr_23415 = state_23405;
(statearr_23415[(10)] = inst_23398);

return statearr_23415;
})();
var statearr_23416_23521 = state_23405__$1;
(statearr_23416_23521[(2)] = null);

(statearr_23416_23521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___23515,jobs,results,process,async))
;
return ((function (switch__23062__auto__,c__23152__auto___23515,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_23417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__);

(statearr_23417[(1)] = (1));

return statearr_23417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1 = (function (state_23405){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23418){if((e23418 instanceof Object)){
var ex__23066__auto__ = e23418;
var statearr_23419_23522 = state_23405;
(statearr_23419_23522[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23523 = state_23405;
state_23405 = G__23523;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = function(state_23405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1.call(this,state_23405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___23515,jobs,results,process,async))
})();
var state__23154__auto__ = (function (){var statearr_23420 = f__23153__auto__.call(null);
(statearr_23420[(6)] = c__23152__auto___23515);

return statearr_23420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___23515,jobs,results,process,async))
);


var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,jobs,results,process,async){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,jobs,results,process,async){
return (function (state_23458){
var state_val_23459 = (state_23458[(1)]);
if((state_val_23459 === (7))){
var inst_23454 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
var statearr_23460_23524 = state_23458__$1;
(statearr_23460_23524[(2)] = inst_23454);

(statearr_23460_23524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (20))){
var state_23458__$1 = state_23458;
var statearr_23461_23525 = state_23458__$1;
(statearr_23461_23525[(2)] = null);

(statearr_23461_23525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (1))){
var state_23458__$1 = state_23458;
var statearr_23462_23526 = state_23458__$1;
(statearr_23462_23526[(2)] = null);

(statearr_23462_23526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (4))){
var inst_23423 = (state_23458[(7)]);
var inst_23423__$1 = (state_23458[(2)]);
var inst_23424 = (inst_23423__$1 == null);
var state_23458__$1 = (function (){var statearr_23463 = state_23458;
(statearr_23463[(7)] = inst_23423__$1);

return statearr_23463;
})();
if(cljs.core.truth_(inst_23424)){
var statearr_23464_23527 = state_23458__$1;
(statearr_23464_23527[(1)] = (5));

} else {
var statearr_23465_23528 = state_23458__$1;
(statearr_23465_23528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (15))){
var inst_23436 = (state_23458[(8)]);
var state_23458__$1 = state_23458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23458__$1,(18),to,inst_23436);
} else {
if((state_val_23459 === (21))){
var inst_23449 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
var statearr_23466_23529 = state_23458__$1;
(statearr_23466_23529[(2)] = inst_23449);

(statearr_23466_23529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (13))){
var inst_23451 = (state_23458[(2)]);
var state_23458__$1 = (function (){var statearr_23467 = state_23458;
(statearr_23467[(9)] = inst_23451);

return statearr_23467;
})();
var statearr_23468_23530 = state_23458__$1;
(statearr_23468_23530[(2)] = null);

(statearr_23468_23530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (6))){
var inst_23423 = (state_23458[(7)]);
var state_23458__$1 = state_23458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23458__$1,(11),inst_23423);
} else {
if((state_val_23459 === (17))){
var inst_23444 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
if(cljs.core.truth_(inst_23444)){
var statearr_23469_23531 = state_23458__$1;
(statearr_23469_23531[(1)] = (19));

} else {
var statearr_23470_23532 = state_23458__$1;
(statearr_23470_23532[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (3))){
var inst_23456 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23458__$1,inst_23456);
} else {
if((state_val_23459 === (12))){
var inst_23433 = (state_23458[(10)]);
var state_23458__$1 = state_23458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23458__$1,(14),inst_23433);
} else {
if((state_val_23459 === (2))){
var state_23458__$1 = state_23458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23458__$1,(4),results);
} else {
if((state_val_23459 === (19))){
var state_23458__$1 = state_23458;
var statearr_23471_23533 = state_23458__$1;
(statearr_23471_23533[(2)] = null);

(statearr_23471_23533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (11))){
var inst_23433 = (state_23458[(2)]);
var state_23458__$1 = (function (){var statearr_23472 = state_23458;
(statearr_23472[(10)] = inst_23433);

return statearr_23472;
})();
var statearr_23473_23534 = state_23458__$1;
(statearr_23473_23534[(2)] = null);

(statearr_23473_23534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (9))){
var state_23458__$1 = state_23458;
var statearr_23474_23535 = state_23458__$1;
(statearr_23474_23535[(2)] = null);

(statearr_23474_23535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (5))){
var state_23458__$1 = state_23458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23475_23536 = state_23458__$1;
(statearr_23475_23536[(1)] = (8));

} else {
var statearr_23476_23537 = state_23458__$1;
(statearr_23476_23537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (14))){
var inst_23438 = (state_23458[(11)]);
var inst_23436 = (state_23458[(8)]);
var inst_23436__$1 = (state_23458[(2)]);
var inst_23437 = (inst_23436__$1 == null);
var inst_23438__$1 = cljs.core.not.call(null,inst_23437);
var state_23458__$1 = (function (){var statearr_23477 = state_23458;
(statearr_23477[(11)] = inst_23438__$1);

(statearr_23477[(8)] = inst_23436__$1);

return statearr_23477;
})();
if(inst_23438__$1){
var statearr_23478_23538 = state_23458__$1;
(statearr_23478_23538[(1)] = (15));

} else {
var statearr_23479_23539 = state_23458__$1;
(statearr_23479_23539[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (16))){
var inst_23438 = (state_23458[(11)]);
var state_23458__$1 = state_23458;
var statearr_23480_23540 = state_23458__$1;
(statearr_23480_23540[(2)] = inst_23438);

(statearr_23480_23540[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (10))){
var inst_23430 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
var statearr_23481_23541 = state_23458__$1;
(statearr_23481_23541[(2)] = inst_23430);

(statearr_23481_23541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (18))){
var inst_23441 = (state_23458[(2)]);
var state_23458__$1 = state_23458;
var statearr_23482_23542 = state_23458__$1;
(statearr_23482_23542[(2)] = inst_23441);

(statearr_23482_23542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23459 === (8))){
var inst_23427 = cljs.core.async.close_BANG_.call(null,to);
var state_23458__$1 = state_23458;
var statearr_23483_23543 = state_23458__$1;
(statearr_23483_23543[(2)] = inst_23427);

(statearr_23483_23543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto__,jobs,results,process,async))
;
return ((function (switch__23062__auto__,c__23152__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_23484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__);

(statearr_23484[(1)] = (1));

return statearr_23484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1 = (function (state_23458){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23485){if((e23485 instanceof Object)){
var ex__23066__auto__ = e23485;
var statearr_23486_23544 = state_23458;
(statearr_23486_23544[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23545 = state_23458;
state_23458 = G__23545;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__ = function(state_23458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1.call(this,state_23458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,jobs,results,process,async))
})();
var state__23154__auto__ = (function (){var statearr_23487 = f__23153__auto__.call(null);
(statearr_23487[(6)] = c__23152__auto__);

return statearr_23487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,jobs,results,process,async))
);

return c__23152__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23547 = arguments.length;
switch (G__23547) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23550 = arguments.length;
switch (G__23550) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23553 = arguments.length;
switch (G__23553) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23152__auto___23602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___23602,tc,fc){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___23602,tc,fc){
return (function (state_23579){
var state_val_23580 = (state_23579[(1)]);
if((state_val_23580 === (7))){
var inst_23575 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
var statearr_23581_23603 = state_23579__$1;
(statearr_23581_23603[(2)] = inst_23575);

(statearr_23581_23603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (1))){
var state_23579__$1 = state_23579;
var statearr_23582_23604 = state_23579__$1;
(statearr_23582_23604[(2)] = null);

(statearr_23582_23604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (4))){
var inst_23556 = (state_23579[(7)]);
var inst_23556__$1 = (state_23579[(2)]);
var inst_23557 = (inst_23556__$1 == null);
var state_23579__$1 = (function (){var statearr_23583 = state_23579;
(statearr_23583[(7)] = inst_23556__$1);

return statearr_23583;
})();
if(cljs.core.truth_(inst_23557)){
var statearr_23584_23605 = state_23579__$1;
(statearr_23584_23605[(1)] = (5));

} else {
var statearr_23585_23606 = state_23579__$1;
(statearr_23585_23606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (13))){
var state_23579__$1 = state_23579;
var statearr_23586_23607 = state_23579__$1;
(statearr_23586_23607[(2)] = null);

(statearr_23586_23607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (6))){
var inst_23556 = (state_23579[(7)]);
var inst_23562 = p.call(null,inst_23556);
var state_23579__$1 = state_23579;
if(cljs.core.truth_(inst_23562)){
var statearr_23587_23608 = state_23579__$1;
(statearr_23587_23608[(1)] = (9));

} else {
var statearr_23588_23609 = state_23579__$1;
(statearr_23588_23609[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (3))){
var inst_23577 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23579__$1,inst_23577);
} else {
if((state_val_23580 === (12))){
var state_23579__$1 = state_23579;
var statearr_23589_23610 = state_23579__$1;
(statearr_23589_23610[(2)] = null);

(statearr_23589_23610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (2))){
var state_23579__$1 = state_23579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23579__$1,(4),ch);
} else {
if((state_val_23580 === (11))){
var inst_23556 = (state_23579[(7)]);
var inst_23566 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23579__$1,(8),inst_23566,inst_23556);
} else {
if((state_val_23580 === (9))){
var state_23579__$1 = state_23579;
var statearr_23590_23611 = state_23579__$1;
(statearr_23590_23611[(2)] = tc);

(statearr_23590_23611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (5))){
var inst_23559 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23560 = cljs.core.async.close_BANG_.call(null,fc);
var state_23579__$1 = (function (){var statearr_23591 = state_23579;
(statearr_23591[(8)] = inst_23559);

return statearr_23591;
})();
var statearr_23592_23612 = state_23579__$1;
(statearr_23592_23612[(2)] = inst_23560);

(statearr_23592_23612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (14))){
var inst_23573 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
var statearr_23593_23613 = state_23579__$1;
(statearr_23593_23613[(2)] = inst_23573);

(statearr_23593_23613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (10))){
var state_23579__$1 = state_23579;
var statearr_23594_23614 = state_23579__$1;
(statearr_23594_23614[(2)] = fc);

(statearr_23594_23614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23580 === (8))){
var inst_23568 = (state_23579[(2)]);
var state_23579__$1 = state_23579;
if(cljs.core.truth_(inst_23568)){
var statearr_23595_23615 = state_23579__$1;
(statearr_23595_23615[(1)] = (12));

} else {
var statearr_23596_23616 = state_23579__$1;
(statearr_23596_23616[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___23602,tc,fc))
;
return ((function (switch__23062__auto__,c__23152__auto___23602,tc,fc){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_23597 = [null,null,null,null,null,null,null,null,null];
(statearr_23597[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_23597[(1)] = (1));

return statearr_23597;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_23579){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23598){if((e23598 instanceof Object)){
var ex__23066__auto__ = e23598;
var statearr_23599_23617 = state_23579;
(statearr_23599_23617[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23618 = state_23579;
state_23579 = G__23618;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_23579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_23579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___23602,tc,fc))
})();
var state__23154__auto__ = (function (){var statearr_23600 = f__23153__auto__.call(null);
(statearr_23600[(6)] = c__23152__auto___23602);

return statearr_23600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___23602,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__){
return (function (state_23639){
var state_val_23640 = (state_23639[(1)]);
if((state_val_23640 === (7))){
var inst_23635 = (state_23639[(2)]);
var state_23639__$1 = state_23639;
var statearr_23641_23659 = state_23639__$1;
(statearr_23641_23659[(2)] = inst_23635);

(statearr_23641_23659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23640 === (1))){
var inst_23619 = init;
var state_23639__$1 = (function (){var statearr_23642 = state_23639;
(statearr_23642[(7)] = inst_23619);

return statearr_23642;
})();
var statearr_23643_23660 = state_23639__$1;
(statearr_23643_23660[(2)] = null);

(statearr_23643_23660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23640 === (4))){
var inst_23622 = (state_23639[(8)]);
var inst_23622__$1 = (state_23639[(2)]);
var inst_23623 = (inst_23622__$1 == null);
var state_23639__$1 = (function (){var statearr_23644 = state_23639;
(statearr_23644[(8)] = inst_23622__$1);

return statearr_23644;
})();
if(cljs.core.truth_(inst_23623)){
var statearr_23645_23661 = state_23639__$1;
(statearr_23645_23661[(1)] = (5));

} else {
var statearr_23646_23662 = state_23639__$1;
(statearr_23646_23662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23640 === (6))){
var inst_23619 = (state_23639[(7)]);
var inst_23622 = (state_23639[(8)]);
var inst_23626 = (state_23639[(9)]);
var inst_23626__$1 = f.call(null,inst_23619,inst_23622);
var inst_23627 = cljs.core.reduced_QMARK_.call(null,inst_23626__$1);
var state_23639__$1 = (function (){var statearr_23647 = state_23639;
(statearr_23647[(9)] = inst_23626__$1);

return statearr_23647;
})();
if(inst_23627){
var statearr_23648_23663 = state_23639__$1;
(statearr_23648_23663[(1)] = (8));

} else {
var statearr_23649_23664 = state_23639__$1;
(statearr_23649_23664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23640 === (3))){
var inst_23637 = (state_23639[(2)]);
var state_23639__$1 = state_23639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23639__$1,inst_23637);
} else {
if((state_val_23640 === (2))){
var state_23639__$1 = state_23639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23639__$1,(4),ch);
} else {
if((state_val_23640 === (9))){
var inst_23626 = (state_23639[(9)]);
var inst_23619 = inst_23626;
var state_23639__$1 = (function (){var statearr_23650 = state_23639;
(statearr_23650[(7)] = inst_23619);

return statearr_23650;
})();
var statearr_23651_23665 = state_23639__$1;
(statearr_23651_23665[(2)] = null);

(statearr_23651_23665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23640 === (5))){
var inst_23619 = (state_23639[(7)]);
var state_23639__$1 = state_23639;
var statearr_23652_23666 = state_23639__$1;
(statearr_23652_23666[(2)] = inst_23619);

(statearr_23652_23666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23640 === (10))){
var inst_23633 = (state_23639[(2)]);
var state_23639__$1 = state_23639;
var statearr_23653_23667 = state_23639__$1;
(statearr_23653_23667[(2)] = inst_23633);

(statearr_23653_23667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23640 === (8))){
var inst_23626 = (state_23639[(9)]);
var inst_23629 = cljs.core.deref.call(null,inst_23626);
var state_23639__$1 = state_23639;
var statearr_23654_23668 = state_23639__$1;
(statearr_23654_23668[(2)] = inst_23629);

(statearr_23654_23668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23063__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23063__auto____0 = (function (){
var statearr_23655 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23655[(0)] = cljs$core$async$reduce_$_state_machine__23063__auto__);

(statearr_23655[(1)] = (1));

return statearr_23655;
});
var cljs$core$async$reduce_$_state_machine__23063__auto____1 = (function (state_23639){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23656){if((e23656 instanceof Object)){
var ex__23066__auto__ = e23656;
var statearr_23657_23669 = state_23639;
(statearr_23657_23669[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23670 = state_23639;
state_23639 = G__23670;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23063__auto__ = function(state_23639){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23063__auto____1.call(this,state_23639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23063__auto____0;
cljs$core$async$reduce_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23063__auto____1;
return cljs$core$async$reduce_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__))
})();
var state__23154__auto__ = (function (){var statearr_23658 = f__23153__auto__.call(null);
(statearr_23658[(6)] = c__23152__auto__);

return statearr_23658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__))
);

return c__23152__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,f__$1){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,f__$1){
return (function (state_23676){
var state_val_23677 = (state_23676[(1)]);
if((state_val_23677 === (1))){
var inst_23671 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23676__$1 = state_23676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23676__$1,(2),inst_23671);
} else {
if((state_val_23677 === (2))){
var inst_23673 = (state_23676[(2)]);
var inst_23674 = f__$1.call(null,inst_23673);
var state_23676__$1 = state_23676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23676__$1,inst_23674);
} else {
return null;
}
}
});})(c__23152__auto__,f__$1))
;
return ((function (switch__23062__auto__,c__23152__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23063__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23063__auto____0 = (function (){
var statearr_23678 = [null,null,null,null,null,null,null];
(statearr_23678[(0)] = cljs$core$async$transduce_$_state_machine__23063__auto__);

(statearr_23678[(1)] = (1));

return statearr_23678;
});
var cljs$core$async$transduce_$_state_machine__23063__auto____1 = (function (state_23676){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23679){if((e23679 instanceof Object)){
var ex__23066__auto__ = e23679;
var statearr_23680_23682 = state_23676;
(statearr_23680_23682[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23683 = state_23676;
state_23676 = G__23683;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23063__auto__ = function(state_23676){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23063__auto____1.call(this,state_23676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23063__auto____0;
cljs$core$async$transduce_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23063__auto____1;
return cljs$core$async$transduce_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,f__$1))
})();
var state__23154__auto__ = (function (){var statearr_23681 = f__23153__auto__.call(null);
(statearr_23681[(6)] = c__23152__auto__);

return statearr_23681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,f__$1))
);

return c__23152__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23685 = arguments.length;
switch (G__23685) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__){
return (function (state_23710){
var state_val_23711 = (state_23710[(1)]);
if((state_val_23711 === (7))){
var inst_23692 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
var statearr_23712_23733 = state_23710__$1;
(statearr_23712_23733[(2)] = inst_23692);

(statearr_23712_23733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (1))){
var inst_23686 = cljs.core.seq.call(null,coll);
var inst_23687 = inst_23686;
var state_23710__$1 = (function (){var statearr_23713 = state_23710;
(statearr_23713[(7)] = inst_23687);

return statearr_23713;
})();
var statearr_23714_23734 = state_23710__$1;
(statearr_23714_23734[(2)] = null);

(statearr_23714_23734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (4))){
var inst_23687 = (state_23710[(7)]);
var inst_23690 = cljs.core.first.call(null,inst_23687);
var state_23710__$1 = state_23710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23710__$1,(7),ch,inst_23690);
} else {
if((state_val_23711 === (13))){
var inst_23704 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
var statearr_23715_23735 = state_23710__$1;
(statearr_23715_23735[(2)] = inst_23704);

(statearr_23715_23735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (6))){
var inst_23695 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
if(cljs.core.truth_(inst_23695)){
var statearr_23716_23736 = state_23710__$1;
(statearr_23716_23736[(1)] = (8));

} else {
var statearr_23717_23737 = state_23710__$1;
(statearr_23717_23737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (3))){
var inst_23708 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23710__$1,inst_23708);
} else {
if((state_val_23711 === (12))){
var state_23710__$1 = state_23710;
var statearr_23718_23738 = state_23710__$1;
(statearr_23718_23738[(2)] = null);

(statearr_23718_23738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (2))){
var inst_23687 = (state_23710[(7)]);
var state_23710__$1 = state_23710;
if(cljs.core.truth_(inst_23687)){
var statearr_23719_23739 = state_23710__$1;
(statearr_23719_23739[(1)] = (4));

} else {
var statearr_23720_23740 = state_23710__$1;
(statearr_23720_23740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (11))){
var inst_23701 = cljs.core.async.close_BANG_.call(null,ch);
var state_23710__$1 = state_23710;
var statearr_23721_23741 = state_23710__$1;
(statearr_23721_23741[(2)] = inst_23701);

(statearr_23721_23741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (9))){
var state_23710__$1 = state_23710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23722_23742 = state_23710__$1;
(statearr_23722_23742[(1)] = (11));

} else {
var statearr_23723_23743 = state_23710__$1;
(statearr_23723_23743[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (5))){
var inst_23687 = (state_23710[(7)]);
var state_23710__$1 = state_23710;
var statearr_23724_23744 = state_23710__$1;
(statearr_23724_23744[(2)] = inst_23687);

(statearr_23724_23744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (10))){
var inst_23706 = (state_23710[(2)]);
var state_23710__$1 = state_23710;
var statearr_23725_23745 = state_23710__$1;
(statearr_23725_23745[(2)] = inst_23706);

(statearr_23725_23745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23711 === (8))){
var inst_23687 = (state_23710[(7)]);
var inst_23697 = cljs.core.next.call(null,inst_23687);
var inst_23687__$1 = inst_23697;
var state_23710__$1 = (function (){var statearr_23726 = state_23710;
(statearr_23726[(7)] = inst_23687__$1);

return statearr_23726;
})();
var statearr_23727_23746 = state_23710__$1;
(statearr_23727_23746[(2)] = null);

(statearr_23727_23746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_23728 = [null,null,null,null,null,null,null,null];
(statearr_23728[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_23728[(1)] = (1));

return statearr_23728;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_23710){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23729){if((e23729 instanceof Object)){
var ex__23066__auto__ = e23729;
var statearr_23730_23747 = state_23710;
(statearr_23730_23747[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23748 = state_23710;
state_23710 = G__23748;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_23710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_23710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__))
})();
var state__23154__auto__ = (function (){var statearr_23731 = f__23153__auto__.call(null);
(statearr_23731[(6)] = c__23152__auto__);

return statearr_23731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__))
);

return c__23152__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23749 = (function (ch,cs,meta23750){
this.ch = ch;
this.cs = cs;
this.meta23750 = meta23750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23751,meta23750__$1){
var self__ = this;
var _23751__$1 = this;
return (new cljs.core.async.t_cljs$core$async23749(self__.ch,self__.cs,meta23750__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23751){
var self__ = this;
var _23751__$1 = this;
return self__.meta23750;
});})(cs))
;

cljs.core.async.t_cljs$core$async23749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23749.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23749.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23749.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23749.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23749.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23750","meta23750",-959964803,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23749";

cljs.core.async.t_cljs$core$async23749.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23749");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23749.
 */
cljs.core.async.__GT_t_cljs$core$async23749 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23749(ch__$1,cs__$1,meta23750){
return (new cljs.core.async.t_cljs$core$async23749(ch__$1,cs__$1,meta23750));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23749(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23152__auto___23971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___23971,cs,m,dchan,dctr,done){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___23971,cs,m,dchan,dctr,done){
return (function (state_23886){
var state_val_23887 = (state_23886[(1)]);
if((state_val_23887 === (7))){
var inst_23882 = (state_23886[(2)]);
var state_23886__$1 = state_23886;
var statearr_23888_23972 = state_23886__$1;
(statearr_23888_23972[(2)] = inst_23882);

(statearr_23888_23972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (20))){
var inst_23785 = (state_23886[(7)]);
var inst_23797 = cljs.core.first.call(null,inst_23785);
var inst_23798 = cljs.core.nth.call(null,inst_23797,(0),null);
var inst_23799 = cljs.core.nth.call(null,inst_23797,(1),null);
var state_23886__$1 = (function (){var statearr_23889 = state_23886;
(statearr_23889[(8)] = inst_23798);

return statearr_23889;
})();
if(cljs.core.truth_(inst_23799)){
var statearr_23890_23973 = state_23886__$1;
(statearr_23890_23973[(1)] = (22));

} else {
var statearr_23891_23974 = state_23886__$1;
(statearr_23891_23974[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (27))){
var inst_23827 = (state_23886[(9)]);
var inst_23754 = (state_23886[(10)]);
var inst_23829 = (state_23886[(11)]);
var inst_23834 = (state_23886[(12)]);
var inst_23834__$1 = cljs.core._nth.call(null,inst_23827,inst_23829);
var inst_23835 = cljs.core.async.put_BANG_.call(null,inst_23834__$1,inst_23754,done);
var state_23886__$1 = (function (){var statearr_23892 = state_23886;
(statearr_23892[(12)] = inst_23834__$1);

return statearr_23892;
})();
if(cljs.core.truth_(inst_23835)){
var statearr_23893_23975 = state_23886__$1;
(statearr_23893_23975[(1)] = (30));

} else {
var statearr_23894_23976 = state_23886__$1;
(statearr_23894_23976[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (1))){
var state_23886__$1 = state_23886;
var statearr_23895_23977 = state_23886__$1;
(statearr_23895_23977[(2)] = null);

(statearr_23895_23977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (24))){
var inst_23785 = (state_23886[(7)]);
var inst_23804 = (state_23886[(2)]);
var inst_23805 = cljs.core.next.call(null,inst_23785);
var inst_23763 = inst_23805;
var inst_23764 = null;
var inst_23765 = (0);
var inst_23766 = (0);
var state_23886__$1 = (function (){var statearr_23896 = state_23886;
(statearr_23896[(13)] = inst_23766);

(statearr_23896[(14)] = inst_23763);

(statearr_23896[(15)] = inst_23765);

(statearr_23896[(16)] = inst_23804);

(statearr_23896[(17)] = inst_23764);

return statearr_23896;
})();
var statearr_23897_23978 = state_23886__$1;
(statearr_23897_23978[(2)] = null);

(statearr_23897_23978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (39))){
var state_23886__$1 = state_23886;
var statearr_23901_23979 = state_23886__$1;
(statearr_23901_23979[(2)] = null);

(statearr_23901_23979[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (4))){
var inst_23754 = (state_23886[(10)]);
var inst_23754__$1 = (state_23886[(2)]);
var inst_23755 = (inst_23754__$1 == null);
var state_23886__$1 = (function (){var statearr_23902 = state_23886;
(statearr_23902[(10)] = inst_23754__$1);

return statearr_23902;
})();
if(cljs.core.truth_(inst_23755)){
var statearr_23903_23980 = state_23886__$1;
(statearr_23903_23980[(1)] = (5));

} else {
var statearr_23904_23981 = state_23886__$1;
(statearr_23904_23981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (15))){
var inst_23766 = (state_23886[(13)]);
var inst_23763 = (state_23886[(14)]);
var inst_23765 = (state_23886[(15)]);
var inst_23764 = (state_23886[(17)]);
var inst_23781 = (state_23886[(2)]);
var inst_23782 = (inst_23766 + (1));
var tmp23898 = inst_23763;
var tmp23899 = inst_23765;
var tmp23900 = inst_23764;
var inst_23763__$1 = tmp23898;
var inst_23764__$1 = tmp23900;
var inst_23765__$1 = tmp23899;
var inst_23766__$1 = inst_23782;
var state_23886__$1 = (function (){var statearr_23905 = state_23886;
(statearr_23905[(13)] = inst_23766__$1);

(statearr_23905[(18)] = inst_23781);

(statearr_23905[(14)] = inst_23763__$1);

(statearr_23905[(15)] = inst_23765__$1);

(statearr_23905[(17)] = inst_23764__$1);

return statearr_23905;
})();
var statearr_23906_23982 = state_23886__$1;
(statearr_23906_23982[(2)] = null);

(statearr_23906_23982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (21))){
var inst_23808 = (state_23886[(2)]);
var state_23886__$1 = state_23886;
var statearr_23910_23983 = state_23886__$1;
(statearr_23910_23983[(2)] = inst_23808);

(statearr_23910_23983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (31))){
var inst_23834 = (state_23886[(12)]);
var inst_23838 = done.call(null,null);
var inst_23839 = cljs.core.async.untap_STAR_.call(null,m,inst_23834);
var state_23886__$1 = (function (){var statearr_23911 = state_23886;
(statearr_23911[(19)] = inst_23838);

return statearr_23911;
})();
var statearr_23912_23984 = state_23886__$1;
(statearr_23912_23984[(2)] = inst_23839);

(statearr_23912_23984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (32))){
var inst_23827 = (state_23886[(9)]);
var inst_23829 = (state_23886[(11)]);
var inst_23826 = (state_23886[(20)]);
var inst_23828 = (state_23886[(21)]);
var inst_23841 = (state_23886[(2)]);
var inst_23842 = (inst_23829 + (1));
var tmp23907 = inst_23827;
var tmp23908 = inst_23826;
var tmp23909 = inst_23828;
var inst_23826__$1 = tmp23908;
var inst_23827__$1 = tmp23907;
var inst_23828__$1 = tmp23909;
var inst_23829__$1 = inst_23842;
var state_23886__$1 = (function (){var statearr_23913 = state_23886;
(statearr_23913[(9)] = inst_23827__$1);

(statearr_23913[(22)] = inst_23841);

(statearr_23913[(11)] = inst_23829__$1);

(statearr_23913[(20)] = inst_23826__$1);

(statearr_23913[(21)] = inst_23828__$1);

return statearr_23913;
})();
var statearr_23914_23985 = state_23886__$1;
(statearr_23914_23985[(2)] = null);

(statearr_23914_23985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (40))){
var inst_23854 = (state_23886[(23)]);
var inst_23858 = done.call(null,null);
var inst_23859 = cljs.core.async.untap_STAR_.call(null,m,inst_23854);
var state_23886__$1 = (function (){var statearr_23915 = state_23886;
(statearr_23915[(24)] = inst_23858);

return statearr_23915;
})();
var statearr_23916_23986 = state_23886__$1;
(statearr_23916_23986[(2)] = inst_23859);

(statearr_23916_23986[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (33))){
var inst_23845 = (state_23886[(25)]);
var inst_23847 = cljs.core.chunked_seq_QMARK_.call(null,inst_23845);
var state_23886__$1 = state_23886;
if(inst_23847){
var statearr_23917_23987 = state_23886__$1;
(statearr_23917_23987[(1)] = (36));

} else {
var statearr_23918_23988 = state_23886__$1;
(statearr_23918_23988[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (13))){
var inst_23775 = (state_23886[(26)]);
var inst_23778 = cljs.core.async.close_BANG_.call(null,inst_23775);
var state_23886__$1 = state_23886;
var statearr_23919_23989 = state_23886__$1;
(statearr_23919_23989[(2)] = inst_23778);

(statearr_23919_23989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (22))){
var inst_23798 = (state_23886[(8)]);
var inst_23801 = cljs.core.async.close_BANG_.call(null,inst_23798);
var state_23886__$1 = state_23886;
var statearr_23920_23990 = state_23886__$1;
(statearr_23920_23990[(2)] = inst_23801);

(statearr_23920_23990[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (36))){
var inst_23845 = (state_23886[(25)]);
var inst_23849 = cljs.core.chunk_first.call(null,inst_23845);
var inst_23850 = cljs.core.chunk_rest.call(null,inst_23845);
var inst_23851 = cljs.core.count.call(null,inst_23849);
var inst_23826 = inst_23850;
var inst_23827 = inst_23849;
var inst_23828 = inst_23851;
var inst_23829 = (0);
var state_23886__$1 = (function (){var statearr_23921 = state_23886;
(statearr_23921[(9)] = inst_23827);

(statearr_23921[(11)] = inst_23829);

(statearr_23921[(20)] = inst_23826);

(statearr_23921[(21)] = inst_23828);

return statearr_23921;
})();
var statearr_23922_23991 = state_23886__$1;
(statearr_23922_23991[(2)] = null);

(statearr_23922_23991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (41))){
var inst_23845 = (state_23886[(25)]);
var inst_23861 = (state_23886[(2)]);
var inst_23862 = cljs.core.next.call(null,inst_23845);
var inst_23826 = inst_23862;
var inst_23827 = null;
var inst_23828 = (0);
var inst_23829 = (0);
var state_23886__$1 = (function (){var statearr_23923 = state_23886;
(statearr_23923[(9)] = inst_23827);

(statearr_23923[(11)] = inst_23829);

(statearr_23923[(20)] = inst_23826);

(statearr_23923[(27)] = inst_23861);

(statearr_23923[(21)] = inst_23828);

return statearr_23923;
})();
var statearr_23924_23992 = state_23886__$1;
(statearr_23924_23992[(2)] = null);

(statearr_23924_23992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (43))){
var state_23886__$1 = state_23886;
var statearr_23925_23993 = state_23886__$1;
(statearr_23925_23993[(2)] = null);

(statearr_23925_23993[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (29))){
var inst_23870 = (state_23886[(2)]);
var state_23886__$1 = state_23886;
var statearr_23926_23994 = state_23886__$1;
(statearr_23926_23994[(2)] = inst_23870);

(statearr_23926_23994[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (44))){
var inst_23879 = (state_23886[(2)]);
var state_23886__$1 = (function (){var statearr_23927 = state_23886;
(statearr_23927[(28)] = inst_23879);

return statearr_23927;
})();
var statearr_23928_23995 = state_23886__$1;
(statearr_23928_23995[(2)] = null);

(statearr_23928_23995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (6))){
var inst_23818 = (state_23886[(29)]);
var inst_23817 = cljs.core.deref.call(null,cs);
var inst_23818__$1 = cljs.core.keys.call(null,inst_23817);
var inst_23819 = cljs.core.count.call(null,inst_23818__$1);
var inst_23820 = cljs.core.reset_BANG_.call(null,dctr,inst_23819);
var inst_23825 = cljs.core.seq.call(null,inst_23818__$1);
var inst_23826 = inst_23825;
var inst_23827 = null;
var inst_23828 = (0);
var inst_23829 = (0);
var state_23886__$1 = (function (){var statearr_23929 = state_23886;
(statearr_23929[(9)] = inst_23827);

(statearr_23929[(30)] = inst_23820);

(statearr_23929[(11)] = inst_23829);

(statearr_23929[(20)] = inst_23826);

(statearr_23929[(29)] = inst_23818__$1);

(statearr_23929[(21)] = inst_23828);

return statearr_23929;
})();
var statearr_23930_23996 = state_23886__$1;
(statearr_23930_23996[(2)] = null);

(statearr_23930_23996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (28))){
var inst_23845 = (state_23886[(25)]);
var inst_23826 = (state_23886[(20)]);
var inst_23845__$1 = cljs.core.seq.call(null,inst_23826);
var state_23886__$1 = (function (){var statearr_23931 = state_23886;
(statearr_23931[(25)] = inst_23845__$1);

return statearr_23931;
})();
if(inst_23845__$1){
var statearr_23932_23997 = state_23886__$1;
(statearr_23932_23997[(1)] = (33));

} else {
var statearr_23933_23998 = state_23886__$1;
(statearr_23933_23998[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (25))){
var inst_23829 = (state_23886[(11)]);
var inst_23828 = (state_23886[(21)]);
var inst_23831 = (inst_23829 < inst_23828);
var inst_23832 = inst_23831;
var state_23886__$1 = state_23886;
if(cljs.core.truth_(inst_23832)){
var statearr_23934_23999 = state_23886__$1;
(statearr_23934_23999[(1)] = (27));

} else {
var statearr_23935_24000 = state_23886__$1;
(statearr_23935_24000[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (34))){
var state_23886__$1 = state_23886;
var statearr_23936_24001 = state_23886__$1;
(statearr_23936_24001[(2)] = null);

(statearr_23936_24001[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (17))){
var state_23886__$1 = state_23886;
var statearr_23937_24002 = state_23886__$1;
(statearr_23937_24002[(2)] = null);

(statearr_23937_24002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (3))){
var inst_23884 = (state_23886[(2)]);
var state_23886__$1 = state_23886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23886__$1,inst_23884);
} else {
if((state_val_23887 === (12))){
var inst_23813 = (state_23886[(2)]);
var state_23886__$1 = state_23886;
var statearr_23938_24003 = state_23886__$1;
(statearr_23938_24003[(2)] = inst_23813);

(statearr_23938_24003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (2))){
var state_23886__$1 = state_23886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23886__$1,(4),ch);
} else {
if((state_val_23887 === (23))){
var state_23886__$1 = state_23886;
var statearr_23939_24004 = state_23886__$1;
(statearr_23939_24004[(2)] = null);

(statearr_23939_24004[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (35))){
var inst_23868 = (state_23886[(2)]);
var state_23886__$1 = state_23886;
var statearr_23940_24005 = state_23886__$1;
(statearr_23940_24005[(2)] = inst_23868);

(statearr_23940_24005[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (19))){
var inst_23785 = (state_23886[(7)]);
var inst_23789 = cljs.core.chunk_first.call(null,inst_23785);
var inst_23790 = cljs.core.chunk_rest.call(null,inst_23785);
var inst_23791 = cljs.core.count.call(null,inst_23789);
var inst_23763 = inst_23790;
var inst_23764 = inst_23789;
var inst_23765 = inst_23791;
var inst_23766 = (0);
var state_23886__$1 = (function (){var statearr_23941 = state_23886;
(statearr_23941[(13)] = inst_23766);

(statearr_23941[(14)] = inst_23763);

(statearr_23941[(15)] = inst_23765);

(statearr_23941[(17)] = inst_23764);

return statearr_23941;
})();
var statearr_23942_24006 = state_23886__$1;
(statearr_23942_24006[(2)] = null);

(statearr_23942_24006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (11))){
var inst_23785 = (state_23886[(7)]);
var inst_23763 = (state_23886[(14)]);
var inst_23785__$1 = cljs.core.seq.call(null,inst_23763);
var state_23886__$1 = (function (){var statearr_23943 = state_23886;
(statearr_23943[(7)] = inst_23785__$1);

return statearr_23943;
})();
if(inst_23785__$1){
var statearr_23944_24007 = state_23886__$1;
(statearr_23944_24007[(1)] = (16));

} else {
var statearr_23945_24008 = state_23886__$1;
(statearr_23945_24008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (9))){
var inst_23815 = (state_23886[(2)]);
var state_23886__$1 = state_23886;
var statearr_23946_24009 = state_23886__$1;
(statearr_23946_24009[(2)] = inst_23815);

(statearr_23946_24009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (5))){
var inst_23761 = cljs.core.deref.call(null,cs);
var inst_23762 = cljs.core.seq.call(null,inst_23761);
var inst_23763 = inst_23762;
var inst_23764 = null;
var inst_23765 = (0);
var inst_23766 = (0);
var state_23886__$1 = (function (){var statearr_23947 = state_23886;
(statearr_23947[(13)] = inst_23766);

(statearr_23947[(14)] = inst_23763);

(statearr_23947[(15)] = inst_23765);

(statearr_23947[(17)] = inst_23764);

return statearr_23947;
})();
var statearr_23948_24010 = state_23886__$1;
(statearr_23948_24010[(2)] = null);

(statearr_23948_24010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (14))){
var state_23886__$1 = state_23886;
var statearr_23949_24011 = state_23886__$1;
(statearr_23949_24011[(2)] = null);

(statearr_23949_24011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (45))){
var inst_23876 = (state_23886[(2)]);
var state_23886__$1 = state_23886;
var statearr_23950_24012 = state_23886__$1;
(statearr_23950_24012[(2)] = inst_23876);

(statearr_23950_24012[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (26))){
var inst_23818 = (state_23886[(29)]);
var inst_23872 = (state_23886[(2)]);
var inst_23873 = cljs.core.seq.call(null,inst_23818);
var state_23886__$1 = (function (){var statearr_23951 = state_23886;
(statearr_23951[(31)] = inst_23872);

return statearr_23951;
})();
if(inst_23873){
var statearr_23952_24013 = state_23886__$1;
(statearr_23952_24013[(1)] = (42));

} else {
var statearr_23953_24014 = state_23886__$1;
(statearr_23953_24014[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (16))){
var inst_23785 = (state_23886[(7)]);
var inst_23787 = cljs.core.chunked_seq_QMARK_.call(null,inst_23785);
var state_23886__$1 = state_23886;
if(inst_23787){
var statearr_23954_24015 = state_23886__$1;
(statearr_23954_24015[(1)] = (19));

} else {
var statearr_23955_24016 = state_23886__$1;
(statearr_23955_24016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (38))){
var inst_23865 = (state_23886[(2)]);
var state_23886__$1 = state_23886;
var statearr_23956_24017 = state_23886__$1;
(statearr_23956_24017[(2)] = inst_23865);

(statearr_23956_24017[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (30))){
var state_23886__$1 = state_23886;
var statearr_23957_24018 = state_23886__$1;
(statearr_23957_24018[(2)] = null);

(statearr_23957_24018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (10))){
var inst_23766 = (state_23886[(13)]);
var inst_23764 = (state_23886[(17)]);
var inst_23774 = cljs.core._nth.call(null,inst_23764,inst_23766);
var inst_23775 = cljs.core.nth.call(null,inst_23774,(0),null);
var inst_23776 = cljs.core.nth.call(null,inst_23774,(1),null);
var state_23886__$1 = (function (){var statearr_23958 = state_23886;
(statearr_23958[(26)] = inst_23775);

return statearr_23958;
})();
if(cljs.core.truth_(inst_23776)){
var statearr_23959_24019 = state_23886__$1;
(statearr_23959_24019[(1)] = (13));

} else {
var statearr_23960_24020 = state_23886__$1;
(statearr_23960_24020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (18))){
var inst_23811 = (state_23886[(2)]);
var state_23886__$1 = state_23886;
var statearr_23961_24021 = state_23886__$1;
(statearr_23961_24021[(2)] = inst_23811);

(statearr_23961_24021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (42))){
var state_23886__$1 = state_23886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23886__$1,(45),dchan);
} else {
if((state_val_23887 === (37))){
var inst_23754 = (state_23886[(10)]);
var inst_23845 = (state_23886[(25)]);
var inst_23854 = (state_23886[(23)]);
var inst_23854__$1 = cljs.core.first.call(null,inst_23845);
var inst_23855 = cljs.core.async.put_BANG_.call(null,inst_23854__$1,inst_23754,done);
var state_23886__$1 = (function (){var statearr_23962 = state_23886;
(statearr_23962[(23)] = inst_23854__$1);

return statearr_23962;
})();
if(cljs.core.truth_(inst_23855)){
var statearr_23963_24022 = state_23886__$1;
(statearr_23963_24022[(1)] = (39));

} else {
var statearr_23964_24023 = state_23886__$1;
(statearr_23964_24023[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23887 === (8))){
var inst_23766 = (state_23886[(13)]);
var inst_23765 = (state_23886[(15)]);
var inst_23768 = (inst_23766 < inst_23765);
var inst_23769 = inst_23768;
var state_23886__$1 = state_23886;
if(cljs.core.truth_(inst_23769)){
var statearr_23965_24024 = state_23886__$1;
(statearr_23965_24024[(1)] = (10));

} else {
var statearr_23966_24025 = state_23886__$1;
(statearr_23966_24025[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___23971,cs,m,dchan,dctr,done))
;
return ((function (switch__23062__auto__,c__23152__auto___23971,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23063__auto__ = null;
var cljs$core$async$mult_$_state_machine__23063__auto____0 = (function (){
var statearr_23967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23967[(0)] = cljs$core$async$mult_$_state_machine__23063__auto__);

(statearr_23967[(1)] = (1));

return statearr_23967;
});
var cljs$core$async$mult_$_state_machine__23063__auto____1 = (function (state_23886){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_23886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e23968){if((e23968 instanceof Object)){
var ex__23066__auto__ = e23968;
var statearr_23969_24026 = state_23886;
(statearr_23969_24026[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24027 = state_23886;
state_23886 = G__24027;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23063__auto__ = function(state_23886){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23063__auto____1.call(this,state_23886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23063__auto____0;
cljs$core$async$mult_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23063__auto____1;
return cljs$core$async$mult_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___23971,cs,m,dchan,dctr,done))
})();
var state__23154__auto__ = (function (){var statearr_23970 = f__23153__auto__.call(null);
(statearr_23970[(6)] = c__23152__auto___23971);

return statearr_23970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___23971,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24029 = arguments.length;
switch (G__24029) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24041 = arguments.length;
var i__4500__auto___24042 = (0);
while(true){
if((i__4500__auto___24042 < len__4499__auto___24041)){
args__4502__auto__.push((arguments[i__4500__auto___24042]));

var G__24043 = (i__4500__auto___24042 + (1));
i__4500__auto___24042 = G__24043;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24035){
var map__24036 = p__24035;
var map__24036__$1 = ((((!((map__24036 == null)))?(((((map__24036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24036):map__24036);
var opts = map__24036__$1;
var statearr_24038_24044 = state;
(statearr_24038_24044[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24036,map__24036__$1,opts){
return (function (val){
var statearr_24039_24045 = state;
(statearr_24039_24045[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24036,map__24036__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24040_24046 = state;
(statearr_24040_24046[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24031){
var G__24032 = cljs.core.first.call(null,seq24031);
var seq24031__$1 = cljs.core.next.call(null,seq24031);
var G__24033 = cljs.core.first.call(null,seq24031__$1);
var seq24031__$2 = cljs.core.next.call(null,seq24031__$1);
var G__24034 = cljs.core.first.call(null,seq24031__$2);
var seq24031__$3 = cljs.core.next.call(null,seq24031__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24032,G__24033,G__24034,seq24031__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24047 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24048){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24048 = meta24048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24049,meta24048__$1){
var self__ = this;
var _24049__$1 = this;
return (new cljs.core.async.t_cljs$core$async24047(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24048__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24049){
var self__ = this;
var _24049__$1 = this;
return self__.meta24048;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24047.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24048","meta24048",-410203263,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24047";

cljs.core.async.t_cljs$core$async24047.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24047");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24047.
 */
cljs.core.async.__GT_t_cljs$core$async24047 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24047(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24048){
return (new cljs.core.async.t_cljs$core$async24047(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24048));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24047(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23152__auto___24211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___24211,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___24211,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24151){
var state_val_24152 = (state_24151[(1)]);
if((state_val_24152 === (7))){
var inst_24066 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
var statearr_24153_24212 = state_24151__$1;
(statearr_24153_24212[(2)] = inst_24066);

(statearr_24153_24212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (20))){
var inst_24078 = (state_24151[(7)]);
var state_24151__$1 = state_24151;
var statearr_24154_24213 = state_24151__$1;
(statearr_24154_24213[(2)] = inst_24078);

(statearr_24154_24213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (27))){
var state_24151__$1 = state_24151;
var statearr_24155_24214 = state_24151__$1;
(statearr_24155_24214[(2)] = null);

(statearr_24155_24214[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (1))){
var inst_24053 = (state_24151[(8)]);
var inst_24053__$1 = calc_state.call(null);
var inst_24055 = (inst_24053__$1 == null);
var inst_24056 = cljs.core.not.call(null,inst_24055);
var state_24151__$1 = (function (){var statearr_24156 = state_24151;
(statearr_24156[(8)] = inst_24053__$1);

return statearr_24156;
})();
if(inst_24056){
var statearr_24157_24215 = state_24151__$1;
(statearr_24157_24215[(1)] = (2));

} else {
var statearr_24158_24216 = state_24151__$1;
(statearr_24158_24216[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (24))){
var inst_24102 = (state_24151[(9)]);
var inst_24111 = (state_24151[(10)]);
var inst_24125 = (state_24151[(11)]);
var inst_24125__$1 = inst_24102.call(null,inst_24111);
var state_24151__$1 = (function (){var statearr_24159 = state_24151;
(statearr_24159[(11)] = inst_24125__$1);

return statearr_24159;
})();
if(cljs.core.truth_(inst_24125__$1)){
var statearr_24160_24217 = state_24151__$1;
(statearr_24160_24217[(1)] = (29));

} else {
var statearr_24161_24218 = state_24151__$1;
(statearr_24161_24218[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (4))){
var inst_24069 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
if(cljs.core.truth_(inst_24069)){
var statearr_24162_24219 = state_24151__$1;
(statearr_24162_24219[(1)] = (8));

} else {
var statearr_24163_24220 = state_24151__$1;
(statearr_24163_24220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (15))){
var inst_24096 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
if(cljs.core.truth_(inst_24096)){
var statearr_24164_24221 = state_24151__$1;
(statearr_24164_24221[(1)] = (19));

} else {
var statearr_24165_24222 = state_24151__$1;
(statearr_24165_24222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (21))){
var inst_24101 = (state_24151[(12)]);
var inst_24101__$1 = (state_24151[(2)]);
var inst_24102 = cljs.core.get.call(null,inst_24101__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24103 = cljs.core.get.call(null,inst_24101__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24104 = cljs.core.get.call(null,inst_24101__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24151__$1 = (function (){var statearr_24166 = state_24151;
(statearr_24166[(12)] = inst_24101__$1);

(statearr_24166[(13)] = inst_24103);

(statearr_24166[(9)] = inst_24102);

return statearr_24166;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24151__$1,(22),inst_24104);
} else {
if((state_val_24152 === (31))){
var inst_24133 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
if(cljs.core.truth_(inst_24133)){
var statearr_24167_24223 = state_24151__$1;
(statearr_24167_24223[(1)] = (32));

} else {
var statearr_24168_24224 = state_24151__$1;
(statearr_24168_24224[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (32))){
var inst_24110 = (state_24151[(14)]);
var state_24151__$1 = state_24151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24151__$1,(35),out,inst_24110);
} else {
if((state_val_24152 === (33))){
var inst_24101 = (state_24151[(12)]);
var inst_24078 = inst_24101;
var state_24151__$1 = (function (){var statearr_24169 = state_24151;
(statearr_24169[(7)] = inst_24078);

return statearr_24169;
})();
var statearr_24170_24225 = state_24151__$1;
(statearr_24170_24225[(2)] = null);

(statearr_24170_24225[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (13))){
var inst_24078 = (state_24151[(7)]);
var inst_24085 = inst_24078.cljs$lang$protocol_mask$partition0$;
var inst_24086 = (inst_24085 & (64));
var inst_24087 = inst_24078.cljs$core$ISeq$;
var inst_24088 = (cljs.core.PROTOCOL_SENTINEL === inst_24087);
var inst_24089 = ((inst_24086) || (inst_24088));
var state_24151__$1 = state_24151;
if(cljs.core.truth_(inst_24089)){
var statearr_24171_24226 = state_24151__$1;
(statearr_24171_24226[(1)] = (16));

} else {
var statearr_24172_24227 = state_24151__$1;
(statearr_24172_24227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (22))){
var inst_24110 = (state_24151[(14)]);
var inst_24111 = (state_24151[(10)]);
var inst_24109 = (state_24151[(2)]);
var inst_24110__$1 = cljs.core.nth.call(null,inst_24109,(0),null);
var inst_24111__$1 = cljs.core.nth.call(null,inst_24109,(1),null);
var inst_24112 = (inst_24110__$1 == null);
var inst_24113 = cljs.core._EQ_.call(null,inst_24111__$1,change);
var inst_24114 = ((inst_24112) || (inst_24113));
var state_24151__$1 = (function (){var statearr_24173 = state_24151;
(statearr_24173[(14)] = inst_24110__$1);

(statearr_24173[(10)] = inst_24111__$1);

return statearr_24173;
})();
if(cljs.core.truth_(inst_24114)){
var statearr_24174_24228 = state_24151__$1;
(statearr_24174_24228[(1)] = (23));

} else {
var statearr_24175_24229 = state_24151__$1;
(statearr_24175_24229[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (36))){
var inst_24101 = (state_24151[(12)]);
var inst_24078 = inst_24101;
var state_24151__$1 = (function (){var statearr_24176 = state_24151;
(statearr_24176[(7)] = inst_24078);

return statearr_24176;
})();
var statearr_24177_24230 = state_24151__$1;
(statearr_24177_24230[(2)] = null);

(statearr_24177_24230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (29))){
var inst_24125 = (state_24151[(11)]);
var state_24151__$1 = state_24151;
var statearr_24178_24231 = state_24151__$1;
(statearr_24178_24231[(2)] = inst_24125);

(statearr_24178_24231[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (6))){
var state_24151__$1 = state_24151;
var statearr_24179_24232 = state_24151__$1;
(statearr_24179_24232[(2)] = false);

(statearr_24179_24232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (28))){
var inst_24121 = (state_24151[(2)]);
var inst_24122 = calc_state.call(null);
var inst_24078 = inst_24122;
var state_24151__$1 = (function (){var statearr_24180 = state_24151;
(statearr_24180[(15)] = inst_24121);

(statearr_24180[(7)] = inst_24078);

return statearr_24180;
})();
var statearr_24181_24233 = state_24151__$1;
(statearr_24181_24233[(2)] = null);

(statearr_24181_24233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (25))){
var inst_24147 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
var statearr_24182_24234 = state_24151__$1;
(statearr_24182_24234[(2)] = inst_24147);

(statearr_24182_24234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (34))){
var inst_24145 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
var statearr_24183_24235 = state_24151__$1;
(statearr_24183_24235[(2)] = inst_24145);

(statearr_24183_24235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (17))){
var state_24151__$1 = state_24151;
var statearr_24184_24236 = state_24151__$1;
(statearr_24184_24236[(2)] = false);

(statearr_24184_24236[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (3))){
var state_24151__$1 = state_24151;
var statearr_24185_24237 = state_24151__$1;
(statearr_24185_24237[(2)] = false);

(statearr_24185_24237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (12))){
var inst_24149 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24151__$1,inst_24149);
} else {
if((state_val_24152 === (2))){
var inst_24053 = (state_24151[(8)]);
var inst_24058 = inst_24053.cljs$lang$protocol_mask$partition0$;
var inst_24059 = (inst_24058 & (64));
var inst_24060 = inst_24053.cljs$core$ISeq$;
var inst_24061 = (cljs.core.PROTOCOL_SENTINEL === inst_24060);
var inst_24062 = ((inst_24059) || (inst_24061));
var state_24151__$1 = state_24151;
if(cljs.core.truth_(inst_24062)){
var statearr_24186_24238 = state_24151__$1;
(statearr_24186_24238[(1)] = (5));

} else {
var statearr_24187_24239 = state_24151__$1;
(statearr_24187_24239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (23))){
var inst_24110 = (state_24151[(14)]);
var inst_24116 = (inst_24110 == null);
var state_24151__$1 = state_24151;
if(cljs.core.truth_(inst_24116)){
var statearr_24188_24240 = state_24151__$1;
(statearr_24188_24240[(1)] = (26));

} else {
var statearr_24189_24241 = state_24151__$1;
(statearr_24189_24241[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (35))){
var inst_24136 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
if(cljs.core.truth_(inst_24136)){
var statearr_24190_24242 = state_24151__$1;
(statearr_24190_24242[(1)] = (36));

} else {
var statearr_24191_24243 = state_24151__$1;
(statearr_24191_24243[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (19))){
var inst_24078 = (state_24151[(7)]);
var inst_24098 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24078);
var state_24151__$1 = state_24151;
var statearr_24192_24244 = state_24151__$1;
(statearr_24192_24244[(2)] = inst_24098);

(statearr_24192_24244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (11))){
var inst_24078 = (state_24151[(7)]);
var inst_24082 = (inst_24078 == null);
var inst_24083 = cljs.core.not.call(null,inst_24082);
var state_24151__$1 = state_24151;
if(inst_24083){
var statearr_24193_24245 = state_24151__$1;
(statearr_24193_24245[(1)] = (13));

} else {
var statearr_24194_24246 = state_24151__$1;
(statearr_24194_24246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (9))){
var inst_24053 = (state_24151[(8)]);
var state_24151__$1 = state_24151;
var statearr_24195_24247 = state_24151__$1;
(statearr_24195_24247[(2)] = inst_24053);

(statearr_24195_24247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (5))){
var state_24151__$1 = state_24151;
var statearr_24196_24248 = state_24151__$1;
(statearr_24196_24248[(2)] = true);

(statearr_24196_24248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (14))){
var state_24151__$1 = state_24151;
var statearr_24197_24249 = state_24151__$1;
(statearr_24197_24249[(2)] = false);

(statearr_24197_24249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (26))){
var inst_24111 = (state_24151[(10)]);
var inst_24118 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24111);
var state_24151__$1 = state_24151;
var statearr_24198_24250 = state_24151__$1;
(statearr_24198_24250[(2)] = inst_24118);

(statearr_24198_24250[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (16))){
var state_24151__$1 = state_24151;
var statearr_24199_24251 = state_24151__$1;
(statearr_24199_24251[(2)] = true);

(statearr_24199_24251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (38))){
var inst_24141 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
var statearr_24200_24252 = state_24151__$1;
(statearr_24200_24252[(2)] = inst_24141);

(statearr_24200_24252[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (30))){
var inst_24103 = (state_24151[(13)]);
var inst_24102 = (state_24151[(9)]);
var inst_24111 = (state_24151[(10)]);
var inst_24128 = cljs.core.empty_QMARK_.call(null,inst_24102);
var inst_24129 = inst_24103.call(null,inst_24111);
var inst_24130 = cljs.core.not.call(null,inst_24129);
var inst_24131 = ((inst_24128) && (inst_24130));
var state_24151__$1 = state_24151;
var statearr_24201_24253 = state_24151__$1;
(statearr_24201_24253[(2)] = inst_24131);

(statearr_24201_24253[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (10))){
var inst_24053 = (state_24151[(8)]);
var inst_24074 = (state_24151[(2)]);
var inst_24075 = cljs.core.get.call(null,inst_24074,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24076 = cljs.core.get.call(null,inst_24074,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24077 = cljs.core.get.call(null,inst_24074,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24078 = inst_24053;
var state_24151__$1 = (function (){var statearr_24202 = state_24151;
(statearr_24202[(7)] = inst_24078);

(statearr_24202[(16)] = inst_24076);

(statearr_24202[(17)] = inst_24077);

(statearr_24202[(18)] = inst_24075);

return statearr_24202;
})();
var statearr_24203_24254 = state_24151__$1;
(statearr_24203_24254[(2)] = null);

(statearr_24203_24254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (18))){
var inst_24093 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
var statearr_24204_24255 = state_24151__$1;
(statearr_24204_24255[(2)] = inst_24093);

(statearr_24204_24255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (37))){
var state_24151__$1 = state_24151;
var statearr_24205_24256 = state_24151__$1;
(statearr_24205_24256[(2)] = null);

(statearr_24205_24256[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (8))){
var inst_24053 = (state_24151[(8)]);
var inst_24071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24053);
var state_24151__$1 = state_24151;
var statearr_24206_24257 = state_24151__$1;
(statearr_24206_24257[(2)] = inst_24071);

(statearr_24206_24257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___24211,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23062__auto__,c__23152__auto___24211,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23063__auto__ = null;
var cljs$core$async$mix_$_state_machine__23063__auto____0 = (function (){
var statearr_24207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24207[(0)] = cljs$core$async$mix_$_state_machine__23063__auto__);

(statearr_24207[(1)] = (1));

return statearr_24207;
});
var cljs$core$async$mix_$_state_machine__23063__auto____1 = (function (state_24151){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24208){if((e24208 instanceof Object)){
var ex__23066__auto__ = e24208;
var statearr_24209_24258 = state_24151;
(statearr_24209_24258[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24259 = state_24151;
state_24151 = G__24259;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23063__auto__ = function(state_24151){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23063__auto____1.call(this,state_24151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23063__auto____0;
cljs$core$async$mix_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23063__auto____1;
return cljs$core$async$mix_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___24211,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23154__auto__ = (function (){var statearr_24210 = f__23153__auto__.call(null);
(statearr_24210[(6)] = c__23152__auto___24211);

return statearr_24210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___24211,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24261 = arguments.length;
switch (G__24261) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24265 = arguments.length;
switch (G__24265) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__24263_SHARP_){
if(cljs.core.truth_(p1__24263_SHARP_.call(null,topic))){
return p1__24263_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24263_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24266 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24267){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24267 = meta24267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24268,meta24267__$1){
var self__ = this;
var _24268__$1 = this;
return (new cljs.core.async.t_cljs$core$async24266(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24267__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24268){
var self__ = this;
var _24268__$1 = this;
return self__.meta24267;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24266.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24266.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24267","meta24267",2036375194,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24266";

cljs.core.async.t_cljs$core$async24266.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24266");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24266.
 */
cljs.core.async.__GT_t_cljs$core$async24266 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24266(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24267){
return (new cljs.core.async.t_cljs$core$async24266(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24267));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24266(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23152__auto___24386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___24386,mults,ensure_mult,p){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___24386,mults,ensure_mult,p){
return (function (state_24340){
var state_val_24341 = (state_24340[(1)]);
if((state_val_24341 === (7))){
var inst_24336 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24342_24387 = state_24340__$1;
(statearr_24342_24387[(2)] = inst_24336);

(statearr_24342_24387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (20))){
var state_24340__$1 = state_24340;
var statearr_24343_24388 = state_24340__$1;
(statearr_24343_24388[(2)] = null);

(statearr_24343_24388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (1))){
var state_24340__$1 = state_24340;
var statearr_24344_24389 = state_24340__$1;
(statearr_24344_24389[(2)] = null);

(statearr_24344_24389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (24))){
var inst_24319 = (state_24340[(7)]);
var inst_24328 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24319);
var state_24340__$1 = state_24340;
var statearr_24345_24390 = state_24340__$1;
(statearr_24345_24390[(2)] = inst_24328);

(statearr_24345_24390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (4))){
var inst_24271 = (state_24340[(8)]);
var inst_24271__$1 = (state_24340[(2)]);
var inst_24272 = (inst_24271__$1 == null);
var state_24340__$1 = (function (){var statearr_24346 = state_24340;
(statearr_24346[(8)] = inst_24271__$1);

return statearr_24346;
})();
if(cljs.core.truth_(inst_24272)){
var statearr_24347_24391 = state_24340__$1;
(statearr_24347_24391[(1)] = (5));

} else {
var statearr_24348_24392 = state_24340__$1;
(statearr_24348_24392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (15))){
var inst_24313 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24349_24393 = state_24340__$1;
(statearr_24349_24393[(2)] = inst_24313);

(statearr_24349_24393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (21))){
var inst_24333 = (state_24340[(2)]);
var state_24340__$1 = (function (){var statearr_24350 = state_24340;
(statearr_24350[(9)] = inst_24333);

return statearr_24350;
})();
var statearr_24351_24394 = state_24340__$1;
(statearr_24351_24394[(2)] = null);

(statearr_24351_24394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (13))){
var inst_24295 = (state_24340[(10)]);
var inst_24297 = cljs.core.chunked_seq_QMARK_.call(null,inst_24295);
var state_24340__$1 = state_24340;
if(inst_24297){
var statearr_24352_24395 = state_24340__$1;
(statearr_24352_24395[(1)] = (16));

} else {
var statearr_24353_24396 = state_24340__$1;
(statearr_24353_24396[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (22))){
var inst_24325 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
if(cljs.core.truth_(inst_24325)){
var statearr_24354_24397 = state_24340__$1;
(statearr_24354_24397[(1)] = (23));

} else {
var statearr_24355_24398 = state_24340__$1;
(statearr_24355_24398[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (6))){
var inst_24319 = (state_24340[(7)]);
var inst_24321 = (state_24340[(11)]);
var inst_24271 = (state_24340[(8)]);
var inst_24319__$1 = topic_fn.call(null,inst_24271);
var inst_24320 = cljs.core.deref.call(null,mults);
var inst_24321__$1 = cljs.core.get.call(null,inst_24320,inst_24319__$1);
var state_24340__$1 = (function (){var statearr_24356 = state_24340;
(statearr_24356[(7)] = inst_24319__$1);

(statearr_24356[(11)] = inst_24321__$1);

return statearr_24356;
})();
if(cljs.core.truth_(inst_24321__$1)){
var statearr_24357_24399 = state_24340__$1;
(statearr_24357_24399[(1)] = (19));

} else {
var statearr_24358_24400 = state_24340__$1;
(statearr_24358_24400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (25))){
var inst_24330 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24359_24401 = state_24340__$1;
(statearr_24359_24401[(2)] = inst_24330);

(statearr_24359_24401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (17))){
var inst_24295 = (state_24340[(10)]);
var inst_24304 = cljs.core.first.call(null,inst_24295);
var inst_24305 = cljs.core.async.muxch_STAR_.call(null,inst_24304);
var inst_24306 = cljs.core.async.close_BANG_.call(null,inst_24305);
var inst_24307 = cljs.core.next.call(null,inst_24295);
var inst_24281 = inst_24307;
var inst_24282 = null;
var inst_24283 = (0);
var inst_24284 = (0);
var state_24340__$1 = (function (){var statearr_24360 = state_24340;
(statearr_24360[(12)] = inst_24306);

(statearr_24360[(13)] = inst_24284);

(statearr_24360[(14)] = inst_24282);

(statearr_24360[(15)] = inst_24283);

(statearr_24360[(16)] = inst_24281);

return statearr_24360;
})();
var statearr_24361_24402 = state_24340__$1;
(statearr_24361_24402[(2)] = null);

(statearr_24361_24402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (3))){
var inst_24338 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24340__$1,inst_24338);
} else {
if((state_val_24341 === (12))){
var inst_24315 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24362_24403 = state_24340__$1;
(statearr_24362_24403[(2)] = inst_24315);

(statearr_24362_24403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (2))){
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24340__$1,(4),ch);
} else {
if((state_val_24341 === (23))){
var state_24340__$1 = state_24340;
var statearr_24363_24404 = state_24340__$1;
(statearr_24363_24404[(2)] = null);

(statearr_24363_24404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (19))){
var inst_24321 = (state_24340[(11)]);
var inst_24271 = (state_24340[(8)]);
var inst_24323 = cljs.core.async.muxch_STAR_.call(null,inst_24321);
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24340__$1,(22),inst_24323,inst_24271);
} else {
if((state_val_24341 === (11))){
var inst_24295 = (state_24340[(10)]);
var inst_24281 = (state_24340[(16)]);
var inst_24295__$1 = cljs.core.seq.call(null,inst_24281);
var state_24340__$1 = (function (){var statearr_24364 = state_24340;
(statearr_24364[(10)] = inst_24295__$1);

return statearr_24364;
})();
if(inst_24295__$1){
var statearr_24365_24405 = state_24340__$1;
(statearr_24365_24405[(1)] = (13));

} else {
var statearr_24366_24406 = state_24340__$1;
(statearr_24366_24406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (9))){
var inst_24317 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24367_24407 = state_24340__$1;
(statearr_24367_24407[(2)] = inst_24317);

(statearr_24367_24407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (5))){
var inst_24278 = cljs.core.deref.call(null,mults);
var inst_24279 = cljs.core.vals.call(null,inst_24278);
var inst_24280 = cljs.core.seq.call(null,inst_24279);
var inst_24281 = inst_24280;
var inst_24282 = null;
var inst_24283 = (0);
var inst_24284 = (0);
var state_24340__$1 = (function (){var statearr_24368 = state_24340;
(statearr_24368[(13)] = inst_24284);

(statearr_24368[(14)] = inst_24282);

(statearr_24368[(15)] = inst_24283);

(statearr_24368[(16)] = inst_24281);

return statearr_24368;
})();
var statearr_24369_24408 = state_24340__$1;
(statearr_24369_24408[(2)] = null);

(statearr_24369_24408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (14))){
var state_24340__$1 = state_24340;
var statearr_24373_24409 = state_24340__$1;
(statearr_24373_24409[(2)] = null);

(statearr_24373_24409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (16))){
var inst_24295 = (state_24340[(10)]);
var inst_24299 = cljs.core.chunk_first.call(null,inst_24295);
var inst_24300 = cljs.core.chunk_rest.call(null,inst_24295);
var inst_24301 = cljs.core.count.call(null,inst_24299);
var inst_24281 = inst_24300;
var inst_24282 = inst_24299;
var inst_24283 = inst_24301;
var inst_24284 = (0);
var state_24340__$1 = (function (){var statearr_24374 = state_24340;
(statearr_24374[(13)] = inst_24284);

(statearr_24374[(14)] = inst_24282);

(statearr_24374[(15)] = inst_24283);

(statearr_24374[(16)] = inst_24281);

return statearr_24374;
})();
var statearr_24375_24410 = state_24340__$1;
(statearr_24375_24410[(2)] = null);

(statearr_24375_24410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (10))){
var inst_24284 = (state_24340[(13)]);
var inst_24282 = (state_24340[(14)]);
var inst_24283 = (state_24340[(15)]);
var inst_24281 = (state_24340[(16)]);
var inst_24289 = cljs.core._nth.call(null,inst_24282,inst_24284);
var inst_24290 = cljs.core.async.muxch_STAR_.call(null,inst_24289);
var inst_24291 = cljs.core.async.close_BANG_.call(null,inst_24290);
var inst_24292 = (inst_24284 + (1));
var tmp24370 = inst_24282;
var tmp24371 = inst_24283;
var tmp24372 = inst_24281;
var inst_24281__$1 = tmp24372;
var inst_24282__$1 = tmp24370;
var inst_24283__$1 = tmp24371;
var inst_24284__$1 = inst_24292;
var state_24340__$1 = (function (){var statearr_24376 = state_24340;
(statearr_24376[(13)] = inst_24284__$1);

(statearr_24376[(14)] = inst_24282__$1);

(statearr_24376[(15)] = inst_24283__$1);

(statearr_24376[(17)] = inst_24291);

(statearr_24376[(16)] = inst_24281__$1);

return statearr_24376;
})();
var statearr_24377_24411 = state_24340__$1;
(statearr_24377_24411[(2)] = null);

(statearr_24377_24411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (18))){
var inst_24310 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24378_24412 = state_24340__$1;
(statearr_24378_24412[(2)] = inst_24310);

(statearr_24378_24412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (8))){
var inst_24284 = (state_24340[(13)]);
var inst_24283 = (state_24340[(15)]);
var inst_24286 = (inst_24284 < inst_24283);
var inst_24287 = inst_24286;
var state_24340__$1 = state_24340;
if(cljs.core.truth_(inst_24287)){
var statearr_24379_24413 = state_24340__$1;
(statearr_24379_24413[(1)] = (10));

} else {
var statearr_24380_24414 = state_24340__$1;
(statearr_24380_24414[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___24386,mults,ensure_mult,p))
;
return ((function (switch__23062__auto__,c__23152__auto___24386,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24381[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24381[(1)] = (1));

return statearr_24381;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24340){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24382){if((e24382 instanceof Object)){
var ex__23066__auto__ = e24382;
var statearr_24383_24415 = state_24340;
(statearr_24383_24415[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24416 = state_24340;
state_24340 = G__24416;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___24386,mults,ensure_mult,p))
})();
var state__23154__auto__ = (function (){var statearr_24384 = f__23153__auto__.call(null);
(statearr_24384[(6)] = c__23152__auto___24386);

return statearr_24384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___24386,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24418 = arguments.length;
switch (G__24418) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24421 = arguments.length;
switch (G__24421) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24424 = arguments.length;
switch (G__24424) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23152__auto___24491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___24491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___24491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24463){
var state_val_24464 = (state_24463[(1)]);
if((state_val_24464 === (7))){
var state_24463__$1 = state_24463;
var statearr_24465_24492 = state_24463__$1;
(statearr_24465_24492[(2)] = null);

(statearr_24465_24492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (1))){
var state_24463__$1 = state_24463;
var statearr_24466_24493 = state_24463__$1;
(statearr_24466_24493[(2)] = null);

(statearr_24466_24493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (4))){
var inst_24427 = (state_24463[(7)]);
var inst_24429 = (inst_24427 < cnt);
var state_24463__$1 = state_24463;
if(cljs.core.truth_(inst_24429)){
var statearr_24467_24494 = state_24463__$1;
(statearr_24467_24494[(1)] = (6));

} else {
var statearr_24468_24495 = state_24463__$1;
(statearr_24468_24495[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (15))){
var inst_24459 = (state_24463[(2)]);
var state_24463__$1 = state_24463;
var statearr_24469_24496 = state_24463__$1;
(statearr_24469_24496[(2)] = inst_24459);

(statearr_24469_24496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (13))){
var inst_24452 = cljs.core.async.close_BANG_.call(null,out);
var state_24463__$1 = state_24463;
var statearr_24470_24497 = state_24463__$1;
(statearr_24470_24497[(2)] = inst_24452);

(statearr_24470_24497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (6))){
var state_24463__$1 = state_24463;
var statearr_24471_24498 = state_24463__$1;
(statearr_24471_24498[(2)] = null);

(statearr_24471_24498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (3))){
var inst_24461 = (state_24463[(2)]);
var state_24463__$1 = state_24463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24463__$1,inst_24461);
} else {
if((state_val_24464 === (12))){
var inst_24449 = (state_24463[(8)]);
var inst_24449__$1 = (state_24463[(2)]);
var inst_24450 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24449__$1);
var state_24463__$1 = (function (){var statearr_24472 = state_24463;
(statearr_24472[(8)] = inst_24449__$1);

return statearr_24472;
})();
if(cljs.core.truth_(inst_24450)){
var statearr_24473_24499 = state_24463__$1;
(statearr_24473_24499[(1)] = (13));

} else {
var statearr_24474_24500 = state_24463__$1;
(statearr_24474_24500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (2))){
var inst_24426 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24427 = (0);
var state_24463__$1 = (function (){var statearr_24475 = state_24463;
(statearr_24475[(7)] = inst_24427);

(statearr_24475[(9)] = inst_24426);

return statearr_24475;
})();
var statearr_24476_24501 = state_24463__$1;
(statearr_24476_24501[(2)] = null);

(statearr_24476_24501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (11))){
var inst_24427 = (state_24463[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24463,(10),Object,null,(9));
var inst_24436 = chs__$1.call(null,inst_24427);
var inst_24437 = done.call(null,inst_24427);
var inst_24438 = cljs.core.async.take_BANG_.call(null,inst_24436,inst_24437);
var state_24463__$1 = state_24463;
var statearr_24477_24502 = state_24463__$1;
(statearr_24477_24502[(2)] = inst_24438);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24463__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (9))){
var inst_24427 = (state_24463[(7)]);
var inst_24440 = (state_24463[(2)]);
var inst_24441 = (inst_24427 + (1));
var inst_24427__$1 = inst_24441;
var state_24463__$1 = (function (){var statearr_24478 = state_24463;
(statearr_24478[(7)] = inst_24427__$1);

(statearr_24478[(10)] = inst_24440);

return statearr_24478;
})();
var statearr_24479_24503 = state_24463__$1;
(statearr_24479_24503[(2)] = null);

(statearr_24479_24503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (5))){
var inst_24447 = (state_24463[(2)]);
var state_24463__$1 = (function (){var statearr_24480 = state_24463;
(statearr_24480[(11)] = inst_24447);

return statearr_24480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24463__$1,(12),dchan);
} else {
if((state_val_24464 === (14))){
var inst_24449 = (state_24463[(8)]);
var inst_24454 = cljs.core.apply.call(null,f,inst_24449);
var state_24463__$1 = state_24463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24463__$1,(16),out,inst_24454);
} else {
if((state_val_24464 === (16))){
var inst_24456 = (state_24463[(2)]);
var state_24463__$1 = (function (){var statearr_24481 = state_24463;
(statearr_24481[(12)] = inst_24456);

return statearr_24481;
})();
var statearr_24482_24504 = state_24463__$1;
(statearr_24482_24504[(2)] = null);

(statearr_24482_24504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (10))){
var inst_24431 = (state_24463[(2)]);
var inst_24432 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24463__$1 = (function (){var statearr_24483 = state_24463;
(statearr_24483[(13)] = inst_24431);

return statearr_24483;
})();
var statearr_24484_24505 = state_24463__$1;
(statearr_24484_24505[(2)] = inst_24432);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24463__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24464 === (8))){
var inst_24445 = (state_24463[(2)]);
var state_24463__$1 = state_24463;
var statearr_24485_24506 = state_24463__$1;
(statearr_24485_24506[(2)] = inst_24445);

(statearr_24485_24506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___24491,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23062__auto__,c__23152__auto___24491,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24486[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24486[(1)] = (1));

return statearr_24486;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24463){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24487){if((e24487 instanceof Object)){
var ex__23066__auto__ = e24487;
var statearr_24488_24507 = state_24463;
(statearr_24488_24507[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24508 = state_24463;
state_24463 = G__24508;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24463);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___24491,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23154__auto__ = (function (){var statearr_24489 = f__23153__auto__.call(null);
(statearr_24489[(6)] = c__23152__auto___24491);

return statearr_24489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___24491,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24511 = arguments.length;
switch (G__24511) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23152__auto___24565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___24565,out){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___24565,out){
return (function (state_24543){
var state_val_24544 = (state_24543[(1)]);
if((state_val_24544 === (7))){
var inst_24523 = (state_24543[(7)]);
var inst_24522 = (state_24543[(8)]);
var inst_24522__$1 = (state_24543[(2)]);
var inst_24523__$1 = cljs.core.nth.call(null,inst_24522__$1,(0),null);
var inst_24524 = cljs.core.nth.call(null,inst_24522__$1,(1),null);
var inst_24525 = (inst_24523__$1 == null);
var state_24543__$1 = (function (){var statearr_24545 = state_24543;
(statearr_24545[(7)] = inst_24523__$1);

(statearr_24545[(8)] = inst_24522__$1);

(statearr_24545[(9)] = inst_24524);

return statearr_24545;
})();
if(cljs.core.truth_(inst_24525)){
var statearr_24546_24566 = state_24543__$1;
(statearr_24546_24566[(1)] = (8));

} else {
var statearr_24547_24567 = state_24543__$1;
(statearr_24547_24567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (1))){
var inst_24512 = cljs.core.vec.call(null,chs);
var inst_24513 = inst_24512;
var state_24543__$1 = (function (){var statearr_24548 = state_24543;
(statearr_24548[(10)] = inst_24513);

return statearr_24548;
})();
var statearr_24549_24568 = state_24543__$1;
(statearr_24549_24568[(2)] = null);

(statearr_24549_24568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (4))){
var inst_24513 = (state_24543[(10)]);
var state_24543__$1 = state_24543;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24543__$1,(7),inst_24513);
} else {
if((state_val_24544 === (6))){
var inst_24539 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24550_24569 = state_24543__$1;
(statearr_24550_24569[(2)] = inst_24539);

(statearr_24550_24569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (3))){
var inst_24541 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24543__$1,inst_24541);
} else {
if((state_val_24544 === (2))){
var inst_24513 = (state_24543[(10)]);
var inst_24515 = cljs.core.count.call(null,inst_24513);
var inst_24516 = (inst_24515 > (0));
var state_24543__$1 = state_24543;
if(cljs.core.truth_(inst_24516)){
var statearr_24552_24570 = state_24543__$1;
(statearr_24552_24570[(1)] = (4));

} else {
var statearr_24553_24571 = state_24543__$1;
(statearr_24553_24571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (11))){
var inst_24513 = (state_24543[(10)]);
var inst_24532 = (state_24543[(2)]);
var tmp24551 = inst_24513;
var inst_24513__$1 = tmp24551;
var state_24543__$1 = (function (){var statearr_24554 = state_24543;
(statearr_24554[(11)] = inst_24532);

(statearr_24554[(10)] = inst_24513__$1);

return statearr_24554;
})();
var statearr_24555_24572 = state_24543__$1;
(statearr_24555_24572[(2)] = null);

(statearr_24555_24572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (9))){
var inst_24523 = (state_24543[(7)]);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24543__$1,(11),out,inst_24523);
} else {
if((state_val_24544 === (5))){
var inst_24537 = cljs.core.async.close_BANG_.call(null,out);
var state_24543__$1 = state_24543;
var statearr_24556_24573 = state_24543__$1;
(statearr_24556_24573[(2)] = inst_24537);

(statearr_24556_24573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (10))){
var inst_24535 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24557_24574 = state_24543__$1;
(statearr_24557_24574[(2)] = inst_24535);

(statearr_24557_24574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (8))){
var inst_24523 = (state_24543[(7)]);
var inst_24522 = (state_24543[(8)]);
var inst_24524 = (state_24543[(9)]);
var inst_24513 = (state_24543[(10)]);
var inst_24527 = (function (){var cs = inst_24513;
var vec__24518 = inst_24522;
var v = inst_24523;
var c = inst_24524;
return ((function (cs,vec__24518,v,c,inst_24523,inst_24522,inst_24524,inst_24513,state_val_24544,c__23152__auto___24565,out){
return (function (p1__24509_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24509_SHARP_);
});
;})(cs,vec__24518,v,c,inst_24523,inst_24522,inst_24524,inst_24513,state_val_24544,c__23152__auto___24565,out))
})();
var inst_24528 = cljs.core.filterv.call(null,inst_24527,inst_24513);
var inst_24513__$1 = inst_24528;
var state_24543__$1 = (function (){var statearr_24558 = state_24543;
(statearr_24558[(10)] = inst_24513__$1);

return statearr_24558;
})();
var statearr_24559_24575 = state_24543__$1;
(statearr_24559_24575[(2)] = null);

(statearr_24559_24575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___24565,out))
;
return ((function (switch__23062__auto__,c__23152__auto___24565,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24560[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24560[(1)] = (1));

return statearr_24560;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24543){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24561){if((e24561 instanceof Object)){
var ex__23066__auto__ = e24561;
var statearr_24562_24576 = state_24543;
(statearr_24562_24576[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24577 = state_24543;
state_24543 = G__24577;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___24565,out))
})();
var state__23154__auto__ = (function (){var statearr_24563 = f__23153__auto__.call(null);
(statearr_24563[(6)] = c__23152__auto___24565);

return statearr_24563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___24565,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24579 = arguments.length;
switch (G__24579) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23152__auto___24624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___24624,out){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___24624,out){
return (function (state_24603){
var state_val_24604 = (state_24603[(1)]);
if((state_val_24604 === (7))){
var inst_24585 = (state_24603[(7)]);
var inst_24585__$1 = (state_24603[(2)]);
var inst_24586 = (inst_24585__$1 == null);
var inst_24587 = cljs.core.not.call(null,inst_24586);
var state_24603__$1 = (function (){var statearr_24605 = state_24603;
(statearr_24605[(7)] = inst_24585__$1);

return statearr_24605;
})();
if(inst_24587){
var statearr_24606_24625 = state_24603__$1;
(statearr_24606_24625[(1)] = (8));

} else {
var statearr_24607_24626 = state_24603__$1;
(statearr_24607_24626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (1))){
var inst_24580 = (0);
var state_24603__$1 = (function (){var statearr_24608 = state_24603;
(statearr_24608[(8)] = inst_24580);

return statearr_24608;
})();
var statearr_24609_24627 = state_24603__$1;
(statearr_24609_24627[(2)] = null);

(statearr_24609_24627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (4))){
var state_24603__$1 = state_24603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24603__$1,(7),ch);
} else {
if((state_val_24604 === (6))){
var inst_24598 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
var statearr_24610_24628 = state_24603__$1;
(statearr_24610_24628[(2)] = inst_24598);

(statearr_24610_24628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (3))){
var inst_24600 = (state_24603[(2)]);
var inst_24601 = cljs.core.async.close_BANG_.call(null,out);
var state_24603__$1 = (function (){var statearr_24611 = state_24603;
(statearr_24611[(9)] = inst_24600);

return statearr_24611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24603__$1,inst_24601);
} else {
if((state_val_24604 === (2))){
var inst_24580 = (state_24603[(8)]);
var inst_24582 = (inst_24580 < n);
var state_24603__$1 = state_24603;
if(cljs.core.truth_(inst_24582)){
var statearr_24612_24629 = state_24603__$1;
(statearr_24612_24629[(1)] = (4));

} else {
var statearr_24613_24630 = state_24603__$1;
(statearr_24613_24630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (11))){
var inst_24580 = (state_24603[(8)]);
var inst_24590 = (state_24603[(2)]);
var inst_24591 = (inst_24580 + (1));
var inst_24580__$1 = inst_24591;
var state_24603__$1 = (function (){var statearr_24614 = state_24603;
(statearr_24614[(10)] = inst_24590);

(statearr_24614[(8)] = inst_24580__$1);

return statearr_24614;
})();
var statearr_24615_24631 = state_24603__$1;
(statearr_24615_24631[(2)] = null);

(statearr_24615_24631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (9))){
var state_24603__$1 = state_24603;
var statearr_24616_24632 = state_24603__$1;
(statearr_24616_24632[(2)] = null);

(statearr_24616_24632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (5))){
var state_24603__$1 = state_24603;
var statearr_24617_24633 = state_24603__$1;
(statearr_24617_24633[(2)] = null);

(statearr_24617_24633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (10))){
var inst_24595 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
var statearr_24618_24634 = state_24603__$1;
(statearr_24618_24634[(2)] = inst_24595);

(statearr_24618_24634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (8))){
var inst_24585 = (state_24603[(7)]);
var state_24603__$1 = state_24603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24603__$1,(11),out,inst_24585);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___24624,out))
;
return ((function (switch__23062__auto__,c__23152__auto___24624,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24619 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24619[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24619[(1)] = (1));

return statearr_24619;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24603){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24620){if((e24620 instanceof Object)){
var ex__23066__auto__ = e24620;
var statearr_24621_24635 = state_24603;
(statearr_24621_24635[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24636 = state_24603;
state_24603 = G__24636;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24603);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___24624,out))
})();
var state__23154__auto__ = (function (){var statearr_24622 = f__23153__auto__.call(null);
(statearr_24622[(6)] = c__23152__auto___24624);

return statearr_24622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___24624,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24638 = (function (f,ch,meta24639){
this.f = f;
this.ch = ch;
this.meta24639 = meta24639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24640,meta24639__$1){
var self__ = this;
var _24640__$1 = this;
return (new cljs.core.async.t_cljs$core$async24638(self__.f,self__.ch,meta24639__$1));
});

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24640){
var self__ = this;
var _24640__$1 = this;
return self__.meta24639;
});

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24641 = (function (f,ch,meta24639,_,fn1,meta24642){
this.f = f;
this.ch = ch;
this.meta24639 = meta24639;
this._ = _;
this.fn1 = fn1;
this.meta24642 = meta24642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24643,meta24642__$1){
var self__ = this;
var _24643__$1 = this;
return (new cljs.core.async.t_cljs$core$async24641(self__.f,self__.ch,self__.meta24639,self__._,self__.fn1,meta24642__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24643){
var self__ = this;
var _24643__$1 = this;
return self__.meta24642;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24637_SHARP_){
return f1.call(null,(((p1__24637_SHARP_ == null))?null:self__.f.call(null,p1__24637_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24641.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24639","meta24639",-1845139209,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24638","cljs.core.async/t_cljs$core$async24638",-758497505,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24642","meta24642",-1036472855,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24641";

cljs.core.async.t_cljs$core$async24641.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24641");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24641.
 */
cljs.core.async.__GT_t_cljs$core$async24641 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24641(f__$1,ch__$1,meta24639__$1,___$2,fn1__$1,meta24642){
return (new cljs.core.async.t_cljs$core$async24641(f__$1,ch__$1,meta24639__$1,___$2,fn1__$1,meta24642));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24641(self__.f,self__.ch,self__.meta24639,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24639","meta24639",-1845139209,null)], null);
});

cljs.core.async.t_cljs$core$async24638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24638";

cljs.core.async.t_cljs$core$async24638.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24638");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24638.
 */
cljs.core.async.__GT_t_cljs$core$async24638 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24638(f__$1,ch__$1,meta24639){
return (new cljs.core.async.t_cljs$core$async24638(f__$1,ch__$1,meta24639));
});

}

return (new cljs.core.async.t_cljs$core$async24638(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24644 = (function (f,ch,meta24645){
this.f = f;
this.ch = ch;
this.meta24645 = meta24645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24646,meta24645__$1){
var self__ = this;
var _24646__$1 = this;
return (new cljs.core.async.t_cljs$core$async24644(self__.f,self__.ch,meta24645__$1));
});

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24646){
var self__ = this;
var _24646__$1 = this;
return self__.meta24645;
});

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24645","meta24645",491315684,null)], null);
});

cljs.core.async.t_cljs$core$async24644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24644";

cljs.core.async.t_cljs$core$async24644.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24644");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24644.
 */
cljs.core.async.__GT_t_cljs$core$async24644 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24644(f__$1,ch__$1,meta24645){
return (new cljs.core.async.t_cljs$core$async24644(f__$1,ch__$1,meta24645));
});

}

return (new cljs.core.async.t_cljs$core$async24644(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24647 = (function (p,ch,meta24648){
this.p = p;
this.ch = ch;
this.meta24648 = meta24648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24649,meta24648__$1){
var self__ = this;
var _24649__$1 = this;
return (new cljs.core.async.t_cljs$core$async24647(self__.p,self__.ch,meta24648__$1));
});

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24649){
var self__ = this;
var _24649__$1 = this;
return self__.meta24648;
});

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24648","meta24648",274516612,null)], null);
});

cljs.core.async.t_cljs$core$async24647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24647";

cljs.core.async.t_cljs$core$async24647.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24647");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24647.
 */
cljs.core.async.__GT_t_cljs$core$async24647 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24647(p__$1,ch__$1,meta24648){
return (new cljs.core.async.t_cljs$core$async24647(p__$1,ch__$1,meta24648));
});

}

return (new cljs.core.async.t_cljs$core$async24647(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24651 = arguments.length;
switch (G__24651) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23152__auto___24691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___24691,out){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___24691,out){
return (function (state_24672){
var state_val_24673 = (state_24672[(1)]);
if((state_val_24673 === (7))){
var inst_24668 = (state_24672[(2)]);
var state_24672__$1 = state_24672;
var statearr_24674_24692 = state_24672__$1;
(statearr_24674_24692[(2)] = inst_24668);

(statearr_24674_24692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24673 === (1))){
var state_24672__$1 = state_24672;
var statearr_24675_24693 = state_24672__$1;
(statearr_24675_24693[(2)] = null);

(statearr_24675_24693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24673 === (4))){
var inst_24654 = (state_24672[(7)]);
var inst_24654__$1 = (state_24672[(2)]);
var inst_24655 = (inst_24654__$1 == null);
var state_24672__$1 = (function (){var statearr_24676 = state_24672;
(statearr_24676[(7)] = inst_24654__$1);

return statearr_24676;
})();
if(cljs.core.truth_(inst_24655)){
var statearr_24677_24694 = state_24672__$1;
(statearr_24677_24694[(1)] = (5));

} else {
var statearr_24678_24695 = state_24672__$1;
(statearr_24678_24695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24673 === (6))){
var inst_24654 = (state_24672[(7)]);
var inst_24659 = p.call(null,inst_24654);
var state_24672__$1 = state_24672;
if(cljs.core.truth_(inst_24659)){
var statearr_24679_24696 = state_24672__$1;
(statearr_24679_24696[(1)] = (8));

} else {
var statearr_24680_24697 = state_24672__$1;
(statearr_24680_24697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24673 === (3))){
var inst_24670 = (state_24672[(2)]);
var state_24672__$1 = state_24672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24672__$1,inst_24670);
} else {
if((state_val_24673 === (2))){
var state_24672__$1 = state_24672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24672__$1,(4),ch);
} else {
if((state_val_24673 === (11))){
var inst_24662 = (state_24672[(2)]);
var state_24672__$1 = state_24672;
var statearr_24681_24698 = state_24672__$1;
(statearr_24681_24698[(2)] = inst_24662);

(statearr_24681_24698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24673 === (9))){
var state_24672__$1 = state_24672;
var statearr_24682_24699 = state_24672__$1;
(statearr_24682_24699[(2)] = null);

(statearr_24682_24699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24673 === (5))){
var inst_24657 = cljs.core.async.close_BANG_.call(null,out);
var state_24672__$1 = state_24672;
var statearr_24683_24700 = state_24672__$1;
(statearr_24683_24700[(2)] = inst_24657);

(statearr_24683_24700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24673 === (10))){
var inst_24665 = (state_24672[(2)]);
var state_24672__$1 = (function (){var statearr_24684 = state_24672;
(statearr_24684[(8)] = inst_24665);

return statearr_24684;
})();
var statearr_24685_24701 = state_24672__$1;
(statearr_24685_24701[(2)] = null);

(statearr_24685_24701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24673 === (8))){
var inst_24654 = (state_24672[(7)]);
var state_24672__$1 = state_24672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24672__$1,(11),out,inst_24654);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___24691,out))
;
return ((function (switch__23062__auto__,c__23152__auto___24691,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24686 = [null,null,null,null,null,null,null,null,null];
(statearr_24686[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24686[(1)] = (1));

return statearr_24686;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24672){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24687){if((e24687 instanceof Object)){
var ex__23066__auto__ = e24687;
var statearr_24688_24702 = state_24672;
(statearr_24688_24702[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24703 = state_24672;
state_24672 = G__24703;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___24691,out))
})();
var state__23154__auto__ = (function (){var statearr_24689 = f__23153__auto__.call(null);
(statearr_24689[(6)] = c__23152__auto___24691);

return statearr_24689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___24691,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24705 = arguments.length;
switch (G__24705) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__){
return (function (state_24768){
var state_val_24769 = (state_24768[(1)]);
if((state_val_24769 === (7))){
var inst_24764 = (state_24768[(2)]);
var state_24768__$1 = state_24768;
var statearr_24770_24808 = state_24768__$1;
(statearr_24770_24808[(2)] = inst_24764);

(statearr_24770_24808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (20))){
var inst_24734 = (state_24768[(7)]);
var inst_24745 = (state_24768[(2)]);
var inst_24746 = cljs.core.next.call(null,inst_24734);
var inst_24720 = inst_24746;
var inst_24721 = null;
var inst_24722 = (0);
var inst_24723 = (0);
var state_24768__$1 = (function (){var statearr_24771 = state_24768;
(statearr_24771[(8)] = inst_24745);

(statearr_24771[(9)] = inst_24722);

(statearr_24771[(10)] = inst_24720);

(statearr_24771[(11)] = inst_24721);

(statearr_24771[(12)] = inst_24723);

return statearr_24771;
})();
var statearr_24772_24809 = state_24768__$1;
(statearr_24772_24809[(2)] = null);

(statearr_24772_24809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (1))){
var state_24768__$1 = state_24768;
var statearr_24773_24810 = state_24768__$1;
(statearr_24773_24810[(2)] = null);

(statearr_24773_24810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (4))){
var inst_24709 = (state_24768[(13)]);
var inst_24709__$1 = (state_24768[(2)]);
var inst_24710 = (inst_24709__$1 == null);
var state_24768__$1 = (function (){var statearr_24774 = state_24768;
(statearr_24774[(13)] = inst_24709__$1);

return statearr_24774;
})();
if(cljs.core.truth_(inst_24710)){
var statearr_24775_24811 = state_24768__$1;
(statearr_24775_24811[(1)] = (5));

} else {
var statearr_24776_24812 = state_24768__$1;
(statearr_24776_24812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (15))){
var state_24768__$1 = state_24768;
var statearr_24780_24813 = state_24768__$1;
(statearr_24780_24813[(2)] = null);

(statearr_24780_24813[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (21))){
var state_24768__$1 = state_24768;
var statearr_24781_24814 = state_24768__$1;
(statearr_24781_24814[(2)] = null);

(statearr_24781_24814[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (13))){
var inst_24722 = (state_24768[(9)]);
var inst_24720 = (state_24768[(10)]);
var inst_24721 = (state_24768[(11)]);
var inst_24723 = (state_24768[(12)]);
var inst_24730 = (state_24768[(2)]);
var inst_24731 = (inst_24723 + (1));
var tmp24777 = inst_24722;
var tmp24778 = inst_24720;
var tmp24779 = inst_24721;
var inst_24720__$1 = tmp24778;
var inst_24721__$1 = tmp24779;
var inst_24722__$1 = tmp24777;
var inst_24723__$1 = inst_24731;
var state_24768__$1 = (function (){var statearr_24782 = state_24768;
(statearr_24782[(9)] = inst_24722__$1);

(statearr_24782[(10)] = inst_24720__$1);

(statearr_24782[(11)] = inst_24721__$1);

(statearr_24782[(12)] = inst_24723__$1);

(statearr_24782[(14)] = inst_24730);

return statearr_24782;
})();
var statearr_24783_24815 = state_24768__$1;
(statearr_24783_24815[(2)] = null);

(statearr_24783_24815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (22))){
var state_24768__$1 = state_24768;
var statearr_24784_24816 = state_24768__$1;
(statearr_24784_24816[(2)] = null);

(statearr_24784_24816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (6))){
var inst_24709 = (state_24768[(13)]);
var inst_24718 = f.call(null,inst_24709);
var inst_24719 = cljs.core.seq.call(null,inst_24718);
var inst_24720 = inst_24719;
var inst_24721 = null;
var inst_24722 = (0);
var inst_24723 = (0);
var state_24768__$1 = (function (){var statearr_24785 = state_24768;
(statearr_24785[(9)] = inst_24722);

(statearr_24785[(10)] = inst_24720);

(statearr_24785[(11)] = inst_24721);

(statearr_24785[(12)] = inst_24723);

return statearr_24785;
})();
var statearr_24786_24817 = state_24768__$1;
(statearr_24786_24817[(2)] = null);

(statearr_24786_24817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (17))){
var inst_24734 = (state_24768[(7)]);
var inst_24738 = cljs.core.chunk_first.call(null,inst_24734);
var inst_24739 = cljs.core.chunk_rest.call(null,inst_24734);
var inst_24740 = cljs.core.count.call(null,inst_24738);
var inst_24720 = inst_24739;
var inst_24721 = inst_24738;
var inst_24722 = inst_24740;
var inst_24723 = (0);
var state_24768__$1 = (function (){var statearr_24787 = state_24768;
(statearr_24787[(9)] = inst_24722);

(statearr_24787[(10)] = inst_24720);

(statearr_24787[(11)] = inst_24721);

(statearr_24787[(12)] = inst_24723);

return statearr_24787;
})();
var statearr_24788_24818 = state_24768__$1;
(statearr_24788_24818[(2)] = null);

(statearr_24788_24818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (3))){
var inst_24766 = (state_24768[(2)]);
var state_24768__$1 = state_24768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24768__$1,inst_24766);
} else {
if((state_val_24769 === (12))){
var inst_24754 = (state_24768[(2)]);
var state_24768__$1 = state_24768;
var statearr_24789_24819 = state_24768__$1;
(statearr_24789_24819[(2)] = inst_24754);

(statearr_24789_24819[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (2))){
var state_24768__$1 = state_24768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24768__$1,(4),in$);
} else {
if((state_val_24769 === (23))){
var inst_24762 = (state_24768[(2)]);
var state_24768__$1 = state_24768;
var statearr_24790_24820 = state_24768__$1;
(statearr_24790_24820[(2)] = inst_24762);

(statearr_24790_24820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (19))){
var inst_24749 = (state_24768[(2)]);
var state_24768__$1 = state_24768;
var statearr_24791_24821 = state_24768__$1;
(statearr_24791_24821[(2)] = inst_24749);

(statearr_24791_24821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (11))){
var inst_24720 = (state_24768[(10)]);
var inst_24734 = (state_24768[(7)]);
var inst_24734__$1 = cljs.core.seq.call(null,inst_24720);
var state_24768__$1 = (function (){var statearr_24792 = state_24768;
(statearr_24792[(7)] = inst_24734__$1);

return statearr_24792;
})();
if(inst_24734__$1){
var statearr_24793_24822 = state_24768__$1;
(statearr_24793_24822[(1)] = (14));

} else {
var statearr_24794_24823 = state_24768__$1;
(statearr_24794_24823[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (9))){
var inst_24756 = (state_24768[(2)]);
var inst_24757 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24768__$1 = (function (){var statearr_24795 = state_24768;
(statearr_24795[(15)] = inst_24756);

return statearr_24795;
})();
if(cljs.core.truth_(inst_24757)){
var statearr_24796_24824 = state_24768__$1;
(statearr_24796_24824[(1)] = (21));

} else {
var statearr_24797_24825 = state_24768__$1;
(statearr_24797_24825[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (5))){
var inst_24712 = cljs.core.async.close_BANG_.call(null,out);
var state_24768__$1 = state_24768;
var statearr_24798_24826 = state_24768__$1;
(statearr_24798_24826[(2)] = inst_24712);

(statearr_24798_24826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (14))){
var inst_24734 = (state_24768[(7)]);
var inst_24736 = cljs.core.chunked_seq_QMARK_.call(null,inst_24734);
var state_24768__$1 = state_24768;
if(inst_24736){
var statearr_24799_24827 = state_24768__$1;
(statearr_24799_24827[(1)] = (17));

} else {
var statearr_24800_24828 = state_24768__$1;
(statearr_24800_24828[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (16))){
var inst_24752 = (state_24768[(2)]);
var state_24768__$1 = state_24768;
var statearr_24801_24829 = state_24768__$1;
(statearr_24801_24829[(2)] = inst_24752);

(statearr_24801_24829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24769 === (10))){
var inst_24721 = (state_24768[(11)]);
var inst_24723 = (state_24768[(12)]);
var inst_24728 = cljs.core._nth.call(null,inst_24721,inst_24723);
var state_24768__$1 = state_24768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24768__$1,(13),out,inst_24728);
} else {
if((state_val_24769 === (18))){
var inst_24734 = (state_24768[(7)]);
var inst_24743 = cljs.core.first.call(null,inst_24734);
var state_24768__$1 = state_24768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24768__$1,(20),out,inst_24743);
} else {
if((state_val_24769 === (8))){
var inst_24722 = (state_24768[(9)]);
var inst_24723 = (state_24768[(12)]);
var inst_24725 = (inst_24723 < inst_24722);
var inst_24726 = inst_24725;
var state_24768__$1 = state_24768;
if(cljs.core.truth_(inst_24726)){
var statearr_24802_24830 = state_24768__$1;
(statearr_24802_24830[(1)] = (10));

} else {
var statearr_24803_24831 = state_24768__$1;
(statearr_24803_24831[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____0 = (function (){
var statearr_24804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24804[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__);

(statearr_24804[(1)] = (1));

return statearr_24804;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____1 = (function (state_24768){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24805){if((e24805 instanceof Object)){
var ex__23066__auto__ = e24805;
var statearr_24806_24832 = state_24768;
(statearr_24806_24832[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24833 = state_24768;
state_24768 = G__24833;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__ = function(state_24768){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____1.call(this,state_24768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23063__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__))
})();
var state__23154__auto__ = (function (){var statearr_24807 = f__23153__auto__.call(null);
(statearr_24807[(6)] = c__23152__auto__);

return statearr_24807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__))
);

return c__23152__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24835 = arguments.length;
switch (G__24835) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24838 = arguments.length;
switch (G__24838) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24841 = arguments.length;
switch (G__24841) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23152__auto___24888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___24888,out){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___24888,out){
return (function (state_24865){
var state_val_24866 = (state_24865[(1)]);
if((state_val_24866 === (7))){
var inst_24860 = (state_24865[(2)]);
var state_24865__$1 = state_24865;
var statearr_24867_24889 = state_24865__$1;
(statearr_24867_24889[(2)] = inst_24860);

(statearr_24867_24889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (1))){
var inst_24842 = null;
var state_24865__$1 = (function (){var statearr_24868 = state_24865;
(statearr_24868[(7)] = inst_24842);

return statearr_24868;
})();
var statearr_24869_24890 = state_24865__$1;
(statearr_24869_24890[(2)] = null);

(statearr_24869_24890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (4))){
var inst_24845 = (state_24865[(8)]);
var inst_24845__$1 = (state_24865[(2)]);
var inst_24846 = (inst_24845__$1 == null);
var inst_24847 = cljs.core.not.call(null,inst_24846);
var state_24865__$1 = (function (){var statearr_24870 = state_24865;
(statearr_24870[(8)] = inst_24845__$1);

return statearr_24870;
})();
if(inst_24847){
var statearr_24871_24891 = state_24865__$1;
(statearr_24871_24891[(1)] = (5));

} else {
var statearr_24872_24892 = state_24865__$1;
(statearr_24872_24892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (6))){
var state_24865__$1 = state_24865;
var statearr_24873_24893 = state_24865__$1;
(statearr_24873_24893[(2)] = null);

(statearr_24873_24893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (3))){
var inst_24862 = (state_24865[(2)]);
var inst_24863 = cljs.core.async.close_BANG_.call(null,out);
var state_24865__$1 = (function (){var statearr_24874 = state_24865;
(statearr_24874[(9)] = inst_24862);

return statearr_24874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24865__$1,inst_24863);
} else {
if((state_val_24866 === (2))){
var state_24865__$1 = state_24865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24865__$1,(4),ch);
} else {
if((state_val_24866 === (11))){
var inst_24845 = (state_24865[(8)]);
var inst_24854 = (state_24865[(2)]);
var inst_24842 = inst_24845;
var state_24865__$1 = (function (){var statearr_24875 = state_24865;
(statearr_24875[(7)] = inst_24842);

(statearr_24875[(10)] = inst_24854);

return statearr_24875;
})();
var statearr_24876_24894 = state_24865__$1;
(statearr_24876_24894[(2)] = null);

(statearr_24876_24894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (9))){
var inst_24845 = (state_24865[(8)]);
var state_24865__$1 = state_24865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24865__$1,(11),out,inst_24845);
} else {
if((state_val_24866 === (5))){
var inst_24842 = (state_24865[(7)]);
var inst_24845 = (state_24865[(8)]);
var inst_24849 = cljs.core._EQ_.call(null,inst_24845,inst_24842);
var state_24865__$1 = state_24865;
if(inst_24849){
var statearr_24878_24895 = state_24865__$1;
(statearr_24878_24895[(1)] = (8));

} else {
var statearr_24879_24896 = state_24865__$1;
(statearr_24879_24896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (10))){
var inst_24857 = (state_24865[(2)]);
var state_24865__$1 = state_24865;
var statearr_24880_24897 = state_24865__$1;
(statearr_24880_24897[(2)] = inst_24857);

(statearr_24880_24897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24866 === (8))){
var inst_24842 = (state_24865[(7)]);
var tmp24877 = inst_24842;
var inst_24842__$1 = tmp24877;
var state_24865__$1 = (function (){var statearr_24881 = state_24865;
(statearr_24881[(7)] = inst_24842__$1);

return statearr_24881;
})();
var statearr_24882_24898 = state_24865__$1;
(statearr_24882_24898[(2)] = null);

(statearr_24882_24898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___24888,out))
;
return ((function (switch__23062__auto__,c__23152__auto___24888,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24883[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24883[(1)] = (1));

return statearr_24883;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24865){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24884){if((e24884 instanceof Object)){
var ex__23066__auto__ = e24884;
var statearr_24885_24899 = state_24865;
(statearr_24885_24899[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24900 = state_24865;
state_24865 = G__24900;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___24888,out))
})();
var state__23154__auto__ = (function (){var statearr_24886 = f__23153__auto__.call(null);
(statearr_24886[(6)] = c__23152__auto___24888);

return statearr_24886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___24888,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24902 = arguments.length;
switch (G__24902) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23152__auto___24968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___24968,out){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___24968,out){
return (function (state_24940){
var state_val_24941 = (state_24940[(1)]);
if((state_val_24941 === (7))){
var inst_24936 = (state_24940[(2)]);
var state_24940__$1 = state_24940;
var statearr_24942_24969 = state_24940__$1;
(statearr_24942_24969[(2)] = inst_24936);

(statearr_24942_24969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24941 === (1))){
var inst_24903 = (new Array(n));
var inst_24904 = inst_24903;
var inst_24905 = (0);
var state_24940__$1 = (function (){var statearr_24943 = state_24940;
(statearr_24943[(7)] = inst_24905);

(statearr_24943[(8)] = inst_24904);

return statearr_24943;
})();
var statearr_24944_24970 = state_24940__$1;
(statearr_24944_24970[(2)] = null);

(statearr_24944_24970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24941 === (4))){
var inst_24908 = (state_24940[(9)]);
var inst_24908__$1 = (state_24940[(2)]);
var inst_24909 = (inst_24908__$1 == null);
var inst_24910 = cljs.core.not.call(null,inst_24909);
var state_24940__$1 = (function (){var statearr_24945 = state_24940;
(statearr_24945[(9)] = inst_24908__$1);

return statearr_24945;
})();
if(inst_24910){
var statearr_24946_24971 = state_24940__$1;
(statearr_24946_24971[(1)] = (5));

} else {
var statearr_24947_24972 = state_24940__$1;
(statearr_24947_24972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24941 === (15))){
var inst_24930 = (state_24940[(2)]);
var state_24940__$1 = state_24940;
var statearr_24948_24973 = state_24940__$1;
(statearr_24948_24973[(2)] = inst_24930);

(statearr_24948_24973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24941 === (13))){
var state_24940__$1 = state_24940;
var statearr_24949_24974 = state_24940__$1;
(statearr_24949_24974[(2)] = null);

(statearr_24949_24974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24941 === (6))){
var inst_24905 = (state_24940[(7)]);
var inst_24926 = (inst_24905 > (0));
var state_24940__$1 = state_24940;
if(cljs.core.truth_(inst_24926)){
var statearr_24950_24975 = state_24940__$1;
(statearr_24950_24975[(1)] = (12));

} else {
var statearr_24951_24976 = state_24940__$1;
(statearr_24951_24976[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24941 === (3))){
var inst_24938 = (state_24940[(2)]);
var state_24940__$1 = state_24940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24940__$1,inst_24938);
} else {
if((state_val_24941 === (12))){
var inst_24904 = (state_24940[(8)]);
var inst_24928 = cljs.core.vec.call(null,inst_24904);
var state_24940__$1 = state_24940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24940__$1,(15),out,inst_24928);
} else {
if((state_val_24941 === (2))){
var state_24940__$1 = state_24940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24940__$1,(4),ch);
} else {
if((state_val_24941 === (11))){
var inst_24920 = (state_24940[(2)]);
var inst_24921 = (new Array(n));
var inst_24904 = inst_24921;
var inst_24905 = (0);
var state_24940__$1 = (function (){var statearr_24952 = state_24940;
(statearr_24952[(7)] = inst_24905);

(statearr_24952[(8)] = inst_24904);

(statearr_24952[(10)] = inst_24920);

return statearr_24952;
})();
var statearr_24953_24977 = state_24940__$1;
(statearr_24953_24977[(2)] = null);

(statearr_24953_24977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24941 === (9))){
var inst_24904 = (state_24940[(8)]);
var inst_24918 = cljs.core.vec.call(null,inst_24904);
var state_24940__$1 = state_24940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24940__$1,(11),out,inst_24918);
} else {
if((state_val_24941 === (5))){
var inst_24908 = (state_24940[(9)]);
var inst_24905 = (state_24940[(7)]);
var inst_24913 = (state_24940[(11)]);
var inst_24904 = (state_24940[(8)]);
var inst_24912 = (inst_24904[inst_24905] = inst_24908);
var inst_24913__$1 = (inst_24905 + (1));
var inst_24914 = (inst_24913__$1 < n);
var state_24940__$1 = (function (){var statearr_24954 = state_24940;
(statearr_24954[(12)] = inst_24912);

(statearr_24954[(11)] = inst_24913__$1);

return statearr_24954;
})();
if(cljs.core.truth_(inst_24914)){
var statearr_24955_24978 = state_24940__$1;
(statearr_24955_24978[(1)] = (8));

} else {
var statearr_24956_24979 = state_24940__$1;
(statearr_24956_24979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24941 === (14))){
var inst_24933 = (state_24940[(2)]);
var inst_24934 = cljs.core.async.close_BANG_.call(null,out);
var state_24940__$1 = (function (){var statearr_24958 = state_24940;
(statearr_24958[(13)] = inst_24933);

return statearr_24958;
})();
var statearr_24959_24980 = state_24940__$1;
(statearr_24959_24980[(2)] = inst_24934);

(statearr_24959_24980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24941 === (10))){
var inst_24924 = (state_24940[(2)]);
var state_24940__$1 = state_24940;
var statearr_24960_24981 = state_24940__$1;
(statearr_24960_24981[(2)] = inst_24924);

(statearr_24960_24981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24941 === (8))){
var inst_24913 = (state_24940[(11)]);
var inst_24904 = (state_24940[(8)]);
var tmp24957 = inst_24904;
var inst_24904__$1 = tmp24957;
var inst_24905 = inst_24913;
var state_24940__$1 = (function (){var statearr_24961 = state_24940;
(statearr_24961[(7)] = inst_24905);

(statearr_24961[(8)] = inst_24904__$1);

return statearr_24961;
})();
var statearr_24962_24982 = state_24940__$1;
(statearr_24962_24982[(2)] = null);

(statearr_24962_24982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___24968,out))
;
return ((function (switch__23062__auto__,c__23152__auto___24968,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_24963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24963[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_24963[(1)] = (1));

return statearr_24963;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_24940){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_24940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e24964){if((e24964 instanceof Object)){
var ex__23066__auto__ = e24964;
var statearr_24965_24983 = state_24940;
(statearr_24965_24983[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24984 = state_24940;
state_24940 = G__24984;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_24940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_24940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___24968,out))
})();
var state__23154__auto__ = (function (){var statearr_24966 = f__23153__auto__.call(null);
(statearr_24966[(6)] = c__23152__auto___24968);

return statearr_24966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___24968,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24986 = arguments.length;
switch (G__24986) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23152__auto___25056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___25056,out){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___25056,out){
return (function (state_25028){
var state_val_25029 = (state_25028[(1)]);
if((state_val_25029 === (7))){
var inst_25024 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
var statearr_25030_25057 = state_25028__$1;
(statearr_25030_25057[(2)] = inst_25024);

(statearr_25030_25057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (1))){
var inst_24987 = [];
var inst_24988 = inst_24987;
var inst_24989 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25028__$1 = (function (){var statearr_25031 = state_25028;
(statearr_25031[(7)] = inst_24988);

(statearr_25031[(8)] = inst_24989);

return statearr_25031;
})();
var statearr_25032_25058 = state_25028__$1;
(statearr_25032_25058[(2)] = null);

(statearr_25032_25058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (4))){
var inst_24992 = (state_25028[(9)]);
var inst_24992__$1 = (state_25028[(2)]);
var inst_24993 = (inst_24992__$1 == null);
var inst_24994 = cljs.core.not.call(null,inst_24993);
var state_25028__$1 = (function (){var statearr_25033 = state_25028;
(statearr_25033[(9)] = inst_24992__$1);

return statearr_25033;
})();
if(inst_24994){
var statearr_25034_25059 = state_25028__$1;
(statearr_25034_25059[(1)] = (5));

} else {
var statearr_25035_25060 = state_25028__$1;
(statearr_25035_25060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (15))){
var inst_25018 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
var statearr_25036_25061 = state_25028__$1;
(statearr_25036_25061[(2)] = inst_25018);

(statearr_25036_25061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (13))){
var state_25028__$1 = state_25028;
var statearr_25037_25062 = state_25028__$1;
(statearr_25037_25062[(2)] = null);

(statearr_25037_25062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (6))){
var inst_24988 = (state_25028[(7)]);
var inst_25013 = inst_24988.length;
var inst_25014 = (inst_25013 > (0));
var state_25028__$1 = state_25028;
if(cljs.core.truth_(inst_25014)){
var statearr_25038_25063 = state_25028__$1;
(statearr_25038_25063[(1)] = (12));

} else {
var statearr_25039_25064 = state_25028__$1;
(statearr_25039_25064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (3))){
var inst_25026 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25028__$1,inst_25026);
} else {
if((state_val_25029 === (12))){
var inst_24988 = (state_25028[(7)]);
var inst_25016 = cljs.core.vec.call(null,inst_24988);
var state_25028__$1 = state_25028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25028__$1,(15),out,inst_25016);
} else {
if((state_val_25029 === (2))){
var state_25028__$1 = state_25028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25028__$1,(4),ch);
} else {
if((state_val_25029 === (11))){
var inst_24992 = (state_25028[(9)]);
var inst_24996 = (state_25028[(10)]);
var inst_25006 = (state_25028[(2)]);
var inst_25007 = [];
var inst_25008 = inst_25007.push(inst_24992);
var inst_24988 = inst_25007;
var inst_24989 = inst_24996;
var state_25028__$1 = (function (){var statearr_25040 = state_25028;
(statearr_25040[(11)] = inst_25006);

(statearr_25040[(12)] = inst_25008);

(statearr_25040[(7)] = inst_24988);

(statearr_25040[(8)] = inst_24989);

return statearr_25040;
})();
var statearr_25041_25065 = state_25028__$1;
(statearr_25041_25065[(2)] = null);

(statearr_25041_25065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (9))){
var inst_24988 = (state_25028[(7)]);
var inst_25004 = cljs.core.vec.call(null,inst_24988);
var state_25028__$1 = state_25028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25028__$1,(11),out,inst_25004);
} else {
if((state_val_25029 === (5))){
var inst_24992 = (state_25028[(9)]);
var inst_24989 = (state_25028[(8)]);
var inst_24996 = (state_25028[(10)]);
var inst_24996__$1 = f.call(null,inst_24992);
var inst_24997 = cljs.core._EQ_.call(null,inst_24996__$1,inst_24989);
var inst_24998 = cljs.core.keyword_identical_QMARK_.call(null,inst_24989,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24999 = ((inst_24997) || (inst_24998));
var state_25028__$1 = (function (){var statearr_25042 = state_25028;
(statearr_25042[(10)] = inst_24996__$1);

return statearr_25042;
})();
if(cljs.core.truth_(inst_24999)){
var statearr_25043_25066 = state_25028__$1;
(statearr_25043_25066[(1)] = (8));

} else {
var statearr_25044_25067 = state_25028__$1;
(statearr_25044_25067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (14))){
var inst_25021 = (state_25028[(2)]);
var inst_25022 = cljs.core.async.close_BANG_.call(null,out);
var state_25028__$1 = (function (){var statearr_25046 = state_25028;
(statearr_25046[(13)] = inst_25021);

return statearr_25046;
})();
var statearr_25047_25068 = state_25028__$1;
(statearr_25047_25068[(2)] = inst_25022);

(statearr_25047_25068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (10))){
var inst_25011 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
var statearr_25048_25069 = state_25028__$1;
(statearr_25048_25069[(2)] = inst_25011);

(statearr_25048_25069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (8))){
var inst_24992 = (state_25028[(9)]);
var inst_24988 = (state_25028[(7)]);
var inst_24996 = (state_25028[(10)]);
var inst_25001 = inst_24988.push(inst_24992);
var tmp25045 = inst_24988;
var inst_24988__$1 = tmp25045;
var inst_24989 = inst_24996;
var state_25028__$1 = (function (){var statearr_25049 = state_25028;
(statearr_25049[(14)] = inst_25001);

(statearr_25049[(7)] = inst_24988__$1);

(statearr_25049[(8)] = inst_24989);

return statearr_25049;
})();
var statearr_25050_25070 = state_25028__$1;
(statearr_25050_25070[(2)] = null);

(statearr_25050_25070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23152__auto___25056,out))
;
return ((function (switch__23062__auto__,c__23152__auto___25056,out){
return (function() {
var cljs$core$async$state_machine__23063__auto__ = null;
var cljs$core$async$state_machine__23063__auto____0 = (function (){
var statearr_25051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25051[(0)] = cljs$core$async$state_machine__23063__auto__);

(statearr_25051[(1)] = (1));

return statearr_25051;
});
var cljs$core$async$state_machine__23063__auto____1 = (function (state_25028){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25052){if((e25052 instanceof Object)){
var ex__23066__auto__ = e25052;
var statearr_25053_25071 = state_25028;
(statearr_25053_25071[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25072 = state_25028;
state_25028 = G__25072;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
cljs$core$async$state_machine__23063__auto__ = function(state_25028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23063__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23063__auto____1.call(this,state_25028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23063__auto____0;
cljs$core$async$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23063__auto____1;
return cljs$core$async$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___25056,out))
})();
var state__23154__auto__ = (function (){var statearr_25054 = f__23153__auto__.call(null);
(statearr_25054[(6)] = c__23152__auto___25056);

return statearr_25054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___25056,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1534858994122
