// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__7209 = arguments.length;
switch (G__7209) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7210 = (function (f,blockable,meta7211){
this.f = f;
this.blockable = blockable;
this.meta7211 = meta7211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7212,meta7211__$1){
var self__ = this;
var _7212__$1 = this;
return (new cljs.core.async.t_cljs$core$async7210(self__.f,self__.blockable,meta7211__$1));
});

cljs.core.async.t_cljs$core$async7210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7212){
var self__ = this;
var _7212__$1 = this;
return self__.meta7211;
});

cljs.core.async.t_cljs$core$async7210.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7210.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta7211], null);
});

cljs.core.async.t_cljs$core$async7210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7210";

cljs.core.async.t_cljs$core$async7210.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async7210");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7210.
 */
cljs.core.async.__GT_t_cljs$core$async7210 = (function cljs$core$async$__GT_t_cljs$core$async7210(f__$1,blockable__$1,meta7211){
return (new cljs.core.async.t_cljs$core$async7210(f__$1,blockable__$1,meta7211));
});

}

return (new cljs.core.async.t_cljs$core$async7210(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__7216 = arguments.length;
switch (G__7216) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__7219 = arguments.length;
switch (G__7219) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__7222 = arguments.length;
switch (G__7222) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_7224 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7224) : fn1.call(null,val_7224));
} else {
cljs.core.async.impl.dispatch.run(((function (val_7224,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7224) : fn1.call(null,val_7224));
});})(val_7224,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__7226 = arguments.length;
switch (G__7226) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___7228 = n;
var x_7229 = (0);
while(true){
if((x_7229 < n__4376__auto___7228)){
(a[x_7229] = (0));

var G__7230 = (x_7229 + (1));
x_7229 = G__7230;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__7231 = (i + (1));
i = G__7231;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async7232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7232 = (function (flag,meta7233){
this.flag = flag;
this.meta7233 = meta7233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7234,meta7233__$1){
var self__ = this;
var _7234__$1 = this;
return (new cljs.core.async.t_cljs$core$async7232(self__.flag,meta7233__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7234){
var self__ = this;
var _7234__$1 = this;
return self__.meta7233;
});})(flag))
;

cljs.core.async.t_cljs$core$async7232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7232.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta7233], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7232";

cljs.core.async.t_cljs$core$async7232.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async7232");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7232.
 */
cljs.core.async.__GT_t_cljs$core$async7232 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7232(flag__$1,meta7233){
return (new cljs.core.async.t_cljs$core$async7232(flag__$1,meta7233));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7232(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7235 = (function (flag,cb,meta7236){
this.flag = flag;
this.cb = cb;
this.meta7236 = meta7236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7237,meta7236__$1){
var self__ = this;
var _7237__$1 = this;
return (new cljs.core.async.t_cljs$core$async7235(self__.flag,self__.cb,meta7236__$1));
});

cljs.core.async.t_cljs$core$async7235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7237){
var self__ = this;
var _7237__$1 = this;
return self__.meta7236;
});

cljs.core.async.t_cljs$core$async7235.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async7235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta7236], null);
});

cljs.core.async.t_cljs$core$async7235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7235";

cljs.core.async.t_cljs$core$async7235.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async7235");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7235.
 */
cljs.core.async.__GT_t_cljs$core$async7235 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7235(flag__$1,cb__$1,meta7236){
return (new cljs.core.async.t_cljs$core$async7235(flag__$1,cb__$1,meta7236));
});

}

return (new cljs.core.async.t_cljs$core$async7235(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7238_SHARP_){
var G__7240 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7238_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7240) : fret.call(null,G__7240));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7239_SHARP_){
var G__7241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7239_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7241) : fret.call(null,G__7241));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7242 = (i + (1));
i = G__7242;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4499__auto___7248 = arguments.length;
var i__4500__auto___7249 = (0);
while(true){
if((i__4500__auto___7249 < len__4499__auto___7248)){
args__4502__auto__.push((arguments[i__4500__auto___7249]));

var G__7250 = (i__4500__auto___7249 + (1));
i__4500__auto___7249 = G__7250;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7245){
var map__7246 = p__7245;
var map__7246__$1 = ((((!((map__7246 == null)))?(((((map__7246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7246):map__7246);
var opts = map__7246__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7243){
var G__7244 = cljs.core.first(seq7243);
var seq7243__$1 = cljs.core.next(seq7243);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7244,seq7243__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__7252 = arguments.length;
switch (G__7252) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7149__auto___7298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___7298){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___7298){
return (function (state_7276){
var state_val_7277 = (state_7276[(1)]);
if((state_val_7277 === (7))){
var inst_7272 = (state_7276[(2)]);
var state_7276__$1 = state_7276;
var statearr_7278_7299 = state_7276__$1;
(statearr_7278_7299[(2)] = inst_7272);

(statearr_7278_7299[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7277 === (1))){
var state_7276__$1 = state_7276;
var statearr_7279_7300 = state_7276__$1;
(statearr_7279_7300[(2)] = null);

(statearr_7279_7300[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7277 === (4))){
var inst_7255 = (state_7276[(7)]);
var inst_7255__$1 = (state_7276[(2)]);
var inst_7256 = (inst_7255__$1 == null);
var state_7276__$1 = (function (){var statearr_7280 = state_7276;
(statearr_7280[(7)] = inst_7255__$1);

return statearr_7280;
})();
if(cljs.core.truth_(inst_7256)){
var statearr_7281_7301 = state_7276__$1;
(statearr_7281_7301[(1)] = (5));

} else {
var statearr_7282_7302 = state_7276__$1;
(statearr_7282_7302[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7277 === (13))){
var state_7276__$1 = state_7276;
var statearr_7283_7303 = state_7276__$1;
(statearr_7283_7303[(2)] = null);

(statearr_7283_7303[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7277 === (6))){
var inst_7255 = (state_7276[(7)]);
var state_7276__$1 = state_7276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7276__$1,(11),to,inst_7255);
} else {
if((state_val_7277 === (3))){
var inst_7274 = (state_7276[(2)]);
var state_7276__$1 = state_7276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7276__$1,inst_7274);
} else {
if((state_val_7277 === (12))){
var state_7276__$1 = state_7276;
var statearr_7284_7304 = state_7276__$1;
(statearr_7284_7304[(2)] = null);

(statearr_7284_7304[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7277 === (2))){
var state_7276__$1 = state_7276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7276__$1,(4),from);
} else {
if((state_val_7277 === (11))){
var inst_7265 = (state_7276[(2)]);
var state_7276__$1 = state_7276;
if(cljs.core.truth_(inst_7265)){
var statearr_7285_7305 = state_7276__$1;
(statearr_7285_7305[(1)] = (12));

} else {
var statearr_7286_7306 = state_7276__$1;
(statearr_7286_7306[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7277 === (9))){
var state_7276__$1 = state_7276;
var statearr_7287_7307 = state_7276__$1;
(statearr_7287_7307[(2)] = null);

(statearr_7287_7307[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7277 === (5))){
var state_7276__$1 = state_7276;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7288_7308 = state_7276__$1;
(statearr_7288_7308[(1)] = (8));

} else {
var statearr_7289_7309 = state_7276__$1;
(statearr_7289_7309[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7277 === (14))){
var inst_7270 = (state_7276[(2)]);
var state_7276__$1 = state_7276;
var statearr_7290_7310 = state_7276__$1;
(statearr_7290_7310[(2)] = inst_7270);

(statearr_7290_7310[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7277 === (10))){
var inst_7262 = (state_7276[(2)]);
var state_7276__$1 = state_7276;
var statearr_7291_7311 = state_7276__$1;
(statearr_7291_7311[(2)] = inst_7262);

(statearr_7291_7311[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7277 === (8))){
var inst_7259 = cljs.core.async.close_BANG_(to);
var state_7276__$1 = state_7276;
var statearr_7292_7312 = state_7276__$1;
(statearr_7292_7312[(2)] = inst_7259);

(statearr_7292_7312[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___7298))
;
return ((function (switch__7047__auto__,c__7149__auto___7298){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_7293 = [null,null,null,null,null,null,null,null];
(statearr_7293[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_7293[(1)] = (1));

return statearr_7293;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_7276){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7276);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7294){if((e7294 instanceof Object)){
var ex__7051__auto__ = e7294;
var statearr_7295_7313 = state_7276;
(statearr_7295_7313[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7276);

return cljs.core.cst$kw$recur;
} else {
throw e7294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__7314 = state_7276;
state_7276 = G__7314;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_7276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_7276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___7298))
})();
var state__7151__auto__ = (function (){var statearr_7296 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7296[(6)] = c__7149__auto___7298);

return statearr_7296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___7298))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__7315){
var vec__7316 = p__7315;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7316,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7316,(1),null);
var job = vec__7316;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7149__auto___7487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___7487,res,vec__7316,v,p,job,jobs,results){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___7487,res,vec__7316,v,p,job,jobs,results){
return (function (state_7323){
var state_val_7324 = (state_7323[(1)]);
if((state_val_7324 === (1))){
var state_7323__$1 = state_7323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7323__$1,(2),res,v);
} else {
if((state_val_7324 === (2))){
var inst_7320 = (state_7323[(2)]);
var inst_7321 = cljs.core.async.close_BANG_(res);
var state_7323__$1 = (function (){var statearr_7325 = state_7323;
(statearr_7325[(7)] = inst_7320);

return statearr_7325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_7323__$1,inst_7321);
} else {
return null;
}
}
});})(c__7149__auto___7487,res,vec__7316,v,p,job,jobs,results))
;
return ((function (switch__7047__auto__,c__7149__auto___7487,res,vec__7316,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0 = (function (){
var statearr_7326 = [null,null,null,null,null,null,null,null];
(statearr_7326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__);

(statearr_7326[(1)] = (1));

return statearr_7326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1 = (function (state_7323){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7323);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7327){if((e7327 instanceof Object)){
var ex__7051__auto__ = e7327;
var statearr_7328_7488 = state_7323;
(statearr_7328_7488[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7323);

return cljs.core.cst$kw$recur;
} else {
throw e7327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__7489 = state_7323;
state_7323 = G__7489;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__ = function(state_7323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1.call(this,state_7323);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___7487,res,vec__7316,v,p,job,jobs,results))
})();
var state__7151__auto__ = (function (){var statearr_7329 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7329[(6)] = c__7149__auto___7487);

return statearr_7329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___7487,res,vec__7316,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7330){
var vec__7331 = p__7330;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7331,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7331,(1),null);
var job = vec__7331;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___7490 = n;
var __7491 = (0);
while(true){
if((__7491 < n__4376__auto___7490)){
var G__7334_7492 = type;
var G__7334_7493__$1 = (((G__7334_7492 instanceof cljs.core.Keyword))?G__7334_7492.fqn:null);
switch (G__7334_7493__$1) {
case "compute":
var c__7149__auto___7495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__7491,c__7149__auto___7495,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (__7491,c__7149__auto___7495,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async){
return (function (state_7347){
var state_val_7348 = (state_7347[(1)]);
if((state_val_7348 === (1))){
var state_7347__$1 = state_7347;
var statearr_7349_7496 = state_7347__$1;
(statearr_7349_7496[(2)] = null);

(statearr_7349_7496[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7348 === (2))){
var state_7347__$1 = state_7347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7347__$1,(4),jobs);
} else {
if((state_val_7348 === (3))){
var inst_7345 = (state_7347[(2)]);
var state_7347__$1 = state_7347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7347__$1,inst_7345);
} else {
if((state_val_7348 === (4))){
var inst_7337 = (state_7347[(2)]);
var inst_7338 = process(inst_7337);
var state_7347__$1 = state_7347;
if(cljs.core.truth_(inst_7338)){
var statearr_7350_7497 = state_7347__$1;
(statearr_7350_7497[(1)] = (5));

} else {
var statearr_7351_7498 = state_7347__$1;
(statearr_7351_7498[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7348 === (5))){
var state_7347__$1 = state_7347;
var statearr_7352_7499 = state_7347__$1;
(statearr_7352_7499[(2)] = null);

(statearr_7352_7499[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7348 === (6))){
var state_7347__$1 = state_7347;
var statearr_7353_7500 = state_7347__$1;
(statearr_7353_7500[(2)] = null);

(statearr_7353_7500[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7348 === (7))){
var inst_7343 = (state_7347[(2)]);
var state_7347__$1 = state_7347;
var statearr_7354_7501 = state_7347__$1;
(statearr_7354_7501[(2)] = inst_7343);

(statearr_7354_7501[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__7491,c__7149__auto___7495,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async))
;
return ((function (__7491,switch__7047__auto__,c__7149__auto___7495,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0 = (function (){
var statearr_7355 = [null,null,null,null,null,null,null];
(statearr_7355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__);

(statearr_7355[(1)] = (1));

return statearr_7355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1 = (function (state_7347){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7347);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7356){if((e7356 instanceof Object)){
var ex__7051__auto__ = e7356;
var statearr_7357_7502 = state_7347;
(statearr_7357_7502[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7347);

return cljs.core.cst$kw$recur;
} else {
throw e7356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__7503 = state_7347;
state_7347 = G__7503;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__ = function(state_7347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1.call(this,state_7347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__;
})()
;})(__7491,switch__7047__auto__,c__7149__auto___7495,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async))
})();
var state__7151__auto__ = (function (){var statearr_7358 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7358[(6)] = c__7149__auto___7495);

return statearr_7358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(__7491,c__7149__auto___7495,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async))
);


break;
case "async":
var c__7149__auto___7504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__7491,c__7149__auto___7504,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (__7491,c__7149__auto___7504,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async){
return (function (state_7371){
var state_val_7372 = (state_7371[(1)]);
if((state_val_7372 === (1))){
var state_7371__$1 = state_7371;
var statearr_7373_7505 = state_7371__$1;
(statearr_7373_7505[(2)] = null);

(statearr_7373_7505[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7372 === (2))){
var state_7371__$1 = state_7371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7371__$1,(4),jobs);
} else {
if((state_val_7372 === (3))){
var inst_7369 = (state_7371[(2)]);
var state_7371__$1 = state_7371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7371__$1,inst_7369);
} else {
if((state_val_7372 === (4))){
var inst_7361 = (state_7371[(2)]);
var inst_7362 = async(inst_7361);
var state_7371__$1 = state_7371;
if(cljs.core.truth_(inst_7362)){
var statearr_7374_7506 = state_7371__$1;
(statearr_7374_7506[(1)] = (5));

} else {
var statearr_7375_7507 = state_7371__$1;
(statearr_7375_7507[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7372 === (5))){
var state_7371__$1 = state_7371;
var statearr_7376_7508 = state_7371__$1;
(statearr_7376_7508[(2)] = null);

(statearr_7376_7508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7372 === (6))){
var state_7371__$1 = state_7371;
var statearr_7377_7509 = state_7371__$1;
(statearr_7377_7509[(2)] = null);

(statearr_7377_7509[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7372 === (7))){
var inst_7367 = (state_7371[(2)]);
var state_7371__$1 = state_7371;
var statearr_7378_7510 = state_7371__$1;
(statearr_7378_7510[(2)] = inst_7367);

(statearr_7378_7510[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__7491,c__7149__auto___7504,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async))
;
return ((function (__7491,switch__7047__auto__,c__7149__auto___7504,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0 = (function (){
var statearr_7379 = [null,null,null,null,null,null,null];
(statearr_7379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__);

(statearr_7379[(1)] = (1));

return statearr_7379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1 = (function (state_7371){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7371);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7380){if((e7380 instanceof Object)){
var ex__7051__auto__ = e7380;
var statearr_7381_7511 = state_7371;
(statearr_7381_7511[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7371);

return cljs.core.cst$kw$recur;
} else {
throw e7380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__7512 = state_7371;
state_7371 = G__7512;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__ = function(state_7371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1.call(this,state_7371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__;
})()
;})(__7491,switch__7047__auto__,c__7149__auto___7504,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async))
})();
var state__7151__auto__ = (function (){var statearr_7382 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7382[(6)] = c__7149__auto___7504);

return statearr_7382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(__7491,c__7149__auto___7504,G__7334_7492,G__7334_7493__$1,n__4376__auto___7490,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7334_7493__$1)].join('')));

}

var G__7513 = (__7491 + (1));
__7491 = G__7513;
continue;
} else {
}
break;
}

var c__7149__auto___7514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___7514,jobs,results,process,async){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___7514,jobs,results,process,async){
return (function (state_7404){
var state_val_7405 = (state_7404[(1)]);
if((state_val_7405 === (1))){
var state_7404__$1 = state_7404;
var statearr_7406_7515 = state_7404__$1;
(statearr_7406_7515[(2)] = null);

(statearr_7406_7515[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7405 === (2))){
var state_7404__$1 = state_7404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7404__$1,(4),from);
} else {
if((state_val_7405 === (3))){
var inst_7402 = (state_7404[(2)]);
var state_7404__$1 = state_7404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7404__$1,inst_7402);
} else {
if((state_val_7405 === (4))){
var inst_7385 = (state_7404[(7)]);
var inst_7385__$1 = (state_7404[(2)]);
var inst_7386 = (inst_7385__$1 == null);
var state_7404__$1 = (function (){var statearr_7407 = state_7404;
(statearr_7407[(7)] = inst_7385__$1);

return statearr_7407;
})();
if(cljs.core.truth_(inst_7386)){
var statearr_7408_7516 = state_7404__$1;
(statearr_7408_7516[(1)] = (5));

} else {
var statearr_7409_7517 = state_7404__$1;
(statearr_7409_7517[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7405 === (5))){
var inst_7388 = cljs.core.async.close_BANG_(jobs);
var state_7404__$1 = state_7404;
var statearr_7410_7518 = state_7404__$1;
(statearr_7410_7518[(2)] = inst_7388);

(statearr_7410_7518[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7405 === (6))){
var inst_7385 = (state_7404[(7)]);
var inst_7390 = (state_7404[(8)]);
var inst_7390__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_7391 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7392 = [inst_7385,inst_7390__$1];
var inst_7393 = (new cljs.core.PersistentVector(null,2,(5),inst_7391,inst_7392,null));
var state_7404__$1 = (function (){var statearr_7411 = state_7404;
(statearr_7411[(8)] = inst_7390__$1);

return statearr_7411;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7404__$1,(8),jobs,inst_7393);
} else {
if((state_val_7405 === (7))){
var inst_7400 = (state_7404[(2)]);
var state_7404__$1 = state_7404;
var statearr_7412_7519 = state_7404__$1;
(statearr_7412_7519[(2)] = inst_7400);

(statearr_7412_7519[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7405 === (8))){
var inst_7390 = (state_7404[(8)]);
var inst_7395 = (state_7404[(2)]);
var state_7404__$1 = (function (){var statearr_7413 = state_7404;
(statearr_7413[(9)] = inst_7395);

return statearr_7413;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7404__$1,(9),results,inst_7390);
} else {
if((state_val_7405 === (9))){
var inst_7397 = (state_7404[(2)]);
var state_7404__$1 = (function (){var statearr_7414 = state_7404;
(statearr_7414[(10)] = inst_7397);

return statearr_7414;
})();
var statearr_7415_7520 = state_7404__$1;
(statearr_7415_7520[(2)] = null);

(statearr_7415_7520[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___7514,jobs,results,process,async))
;
return ((function (switch__7047__auto__,c__7149__auto___7514,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0 = (function (){
var statearr_7416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__);

(statearr_7416[(1)] = (1));

return statearr_7416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1 = (function (state_7404){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7404);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7417){if((e7417 instanceof Object)){
var ex__7051__auto__ = e7417;
var statearr_7418_7521 = state_7404;
(statearr_7418_7521[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7404);

return cljs.core.cst$kw$recur;
} else {
throw e7417;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__7522 = state_7404;
state_7404 = G__7522;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__ = function(state_7404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1.call(this,state_7404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___7514,jobs,results,process,async))
})();
var state__7151__auto__ = (function (){var statearr_7419 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7419[(6)] = c__7149__auto___7514);

return statearr_7419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___7514,jobs,results,process,async))
);


var c__7149__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto__,jobs,results,process,async){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto__,jobs,results,process,async){
return (function (state_7457){
var state_val_7458 = (state_7457[(1)]);
if((state_val_7458 === (7))){
var inst_7453 = (state_7457[(2)]);
var state_7457__$1 = state_7457;
var statearr_7459_7523 = state_7457__$1;
(statearr_7459_7523[(2)] = inst_7453);

(statearr_7459_7523[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (20))){
var state_7457__$1 = state_7457;
var statearr_7460_7524 = state_7457__$1;
(statearr_7460_7524[(2)] = null);

(statearr_7460_7524[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (1))){
var state_7457__$1 = state_7457;
var statearr_7461_7525 = state_7457__$1;
(statearr_7461_7525[(2)] = null);

(statearr_7461_7525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (4))){
var inst_7422 = (state_7457[(7)]);
var inst_7422__$1 = (state_7457[(2)]);
var inst_7423 = (inst_7422__$1 == null);
var state_7457__$1 = (function (){var statearr_7462 = state_7457;
(statearr_7462[(7)] = inst_7422__$1);

return statearr_7462;
})();
if(cljs.core.truth_(inst_7423)){
var statearr_7463_7526 = state_7457__$1;
(statearr_7463_7526[(1)] = (5));

} else {
var statearr_7464_7527 = state_7457__$1;
(statearr_7464_7527[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (15))){
var inst_7435 = (state_7457[(8)]);
var state_7457__$1 = state_7457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7457__$1,(18),to,inst_7435);
} else {
if((state_val_7458 === (21))){
var inst_7448 = (state_7457[(2)]);
var state_7457__$1 = state_7457;
var statearr_7465_7528 = state_7457__$1;
(statearr_7465_7528[(2)] = inst_7448);

(statearr_7465_7528[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (13))){
var inst_7450 = (state_7457[(2)]);
var state_7457__$1 = (function (){var statearr_7466 = state_7457;
(statearr_7466[(9)] = inst_7450);

return statearr_7466;
})();
var statearr_7467_7529 = state_7457__$1;
(statearr_7467_7529[(2)] = null);

(statearr_7467_7529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (6))){
var inst_7422 = (state_7457[(7)]);
var state_7457__$1 = state_7457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7457__$1,(11),inst_7422);
} else {
if((state_val_7458 === (17))){
var inst_7443 = (state_7457[(2)]);
var state_7457__$1 = state_7457;
if(cljs.core.truth_(inst_7443)){
var statearr_7468_7530 = state_7457__$1;
(statearr_7468_7530[(1)] = (19));

} else {
var statearr_7469_7531 = state_7457__$1;
(statearr_7469_7531[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (3))){
var inst_7455 = (state_7457[(2)]);
var state_7457__$1 = state_7457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7457__$1,inst_7455);
} else {
if((state_val_7458 === (12))){
var inst_7432 = (state_7457[(10)]);
var state_7457__$1 = state_7457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7457__$1,(14),inst_7432);
} else {
if((state_val_7458 === (2))){
var state_7457__$1 = state_7457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7457__$1,(4),results);
} else {
if((state_val_7458 === (19))){
var state_7457__$1 = state_7457;
var statearr_7470_7532 = state_7457__$1;
(statearr_7470_7532[(2)] = null);

(statearr_7470_7532[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (11))){
var inst_7432 = (state_7457[(2)]);
var state_7457__$1 = (function (){var statearr_7471 = state_7457;
(statearr_7471[(10)] = inst_7432);

return statearr_7471;
})();
var statearr_7472_7533 = state_7457__$1;
(statearr_7472_7533[(2)] = null);

(statearr_7472_7533[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (9))){
var state_7457__$1 = state_7457;
var statearr_7473_7534 = state_7457__$1;
(statearr_7473_7534[(2)] = null);

(statearr_7473_7534[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (5))){
var state_7457__$1 = state_7457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7474_7535 = state_7457__$1;
(statearr_7474_7535[(1)] = (8));

} else {
var statearr_7475_7536 = state_7457__$1;
(statearr_7475_7536[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (14))){
var inst_7437 = (state_7457[(11)]);
var inst_7435 = (state_7457[(8)]);
var inst_7435__$1 = (state_7457[(2)]);
var inst_7436 = (inst_7435__$1 == null);
var inst_7437__$1 = cljs.core.not(inst_7436);
var state_7457__$1 = (function (){var statearr_7476 = state_7457;
(statearr_7476[(11)] = inst_7437__$1);

(statearr_7476[(8)] = inst_7435__$1);

return statearr_7476;
})();
if(inst_7437__$1){
var statearr_7477_7537 = state_7457__$1;
(statearr_7477_7537[(1)] = (15));

} else {
var statearr_7478_7538 = state_7457__$1;
(statearr_7478_7538[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (16))){
var inst_7437 = (state_7457[(11)]);
var state_7457__$1 = state_7457;
var statearr_7479_7539 = state_7457__$1;
(statearr_7479_7539[(2)] = inst_7437);

(statearr_7479_7539[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (10))){
var inst_7429 = (state_7457[(2)]);
var state_7457__$1 = state_7457;
var statearr_7480_7540 = state_7457__$1;
(statearr_7480_7540[(2)] = inst_7429);

(statearr_7480_7540[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (18))){
var inst_7440 = (state_7457[(2)]);
var state_7457__$1 = state_7457;
var statearr_7481_7541 = state_7457__$1;
(statearr_7481_7541[(2)] = inst_7440);

(statearr_7481_7541[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7458 === (8))){
var inst_7426 = cljs.core.async.close_BANG_(to);
var state_7457__$1 = state_7457;
var statearr_7482_7542 = state_7457__$1;
(statearr_7482_7542[(2)] = inst_7426);

(statearr_7482_7542[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto__,jobs,results,process,async))
;
return ((function (switch__7047__auto__,c__7149__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0 = (function (){
var statearr_7483 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__);

(statearr_7483[(1)] = (1));

return statearr_7483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1 = (function (state_7457){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7457);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7484){if((e7484 instanceof Object)){
var ex__7051__auto__ = e7484;
var statearr_7485_7543 = state_7457;
(statearr_7485_7543[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7457);

return cljs.core.cst$kw$recur;
} else {
throw e7484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__7544 = state_7457;
state_7457 = G__7544;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__ = function(state_7457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1.call(this,state_7457);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7048__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto__,jobs,results,process,async))
})();
var state__7151__auto__ = (function (){var statearr_7486 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7486[(6)] = c__7149__auto__);

return statearr_7486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto__,jobs,results,process,async))
);

return c__7149__auto__;
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
var G__7546 = arguments.length;
switch (G__7546) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__7549 = arguments.length;
switch (G__7549) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__7552 = arguments.length;
switch (G__7552) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__7149__auto___7601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___7601,tc,fc){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___7601,tc,fc){
return (function (state_7578){
var state_val_7579 = (state_7578[(1)]);
if((state_val_7579 === (7))){
var inst_7574 = (state_7578[(2)]);
var state_7578__$1 = state_7578;
var statearr_7580_7602 = state_7578__$1;
(statearr_7580_7602[(2)] = inst_7574);

(statearr_7580_7602[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7579 === (1))){
var state_7578__$1 = state_7578;
var statearr_7581_7603 = state_7578__$1;
(statearr_7581_7603[(2)] = null);

(statearr_7581_7603[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7579 === (4))){
var inst_7555 = (state_7578[(7)]);
var inst_7555__$1 = (state_7578[(2)]);
var inst_7556 = (inst_7555__$1 == null);
var state_7578__$1 = (function (){var statearr_7582 = state_7578;
(statearr_7582[(7)] = inst_7555__$1);

return statearr_7582;
})();
if(cljs.core.truth_(inst_7556)){
var statearr_7583_7604 = state_7578__$1;
(statearr_7583_7604[(1)] = (5));

} else {
var statearr_7584_7605 = state_7578__$1;
(statearr_7584_7605[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7579 === (13))){
var state_7578__$1 = state_7578;
var statearr_7585_7606 = state_7578__$1;
(statearr_7585_7606[(2)] = null);

(statearr_7585_7606[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7579 === (6))){
var inst_7555 = (state_7578[(7)]);
var inst_7561 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_7555) : p.call(null,inst_7555));
var state_7578__$1 = state_7578;
if(cljs.core.truth_(inst_7561)){
var statearr_7586_7607 = state_7578__$1;
(statearr_7586_7607[(1)] = (9));

} else {
var statearr_7587_7608 = state_7578__$1;
(statearr_7587_7608[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7579 === (3))){
var inst_7576 = (state_7578[(2)]);
var state_7578__$1 = state_7578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7578__$1,inst_7576);
} else {
if((state_val_7579 === (12))){
var state_7578__$1 = state_7578;
var statearr_7588_7609 = state_7578__$1;
(statearr_7588_7609[(2)] = null);

(statearr_7588_7609[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7579 === (2))){
var state_7578__$1 = state_7578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7578__$1,(4),ch);
} else {
if((state_val_7579 === (11))){
var inst_7555 = (state_7578[(7)]);
var inst_7565 = (state_7578[(2)]);
var state_7578__$1 = state_7578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7578__$1,(8),inst_7565,inst_7555);
} else {
if((state_val_7579 === (9))){
var state_7578__$1 = state_7578;
var statearr_7589_7610 = state_7578__$1;
(statearr_7589_7610[(2)] = tc);

(statearr_7589_7610[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7579 === (5))){
var inst_7558 = cljs.core.async.close_BANG_(tc);
var inst_7559 = cljs.core.async.close_BANG_(fc);
var state_7578__$1 = (function (){var statearr_7590 = state_7578;
(statearr_7590[(8)] = inst_7558);

return statearr_7590;
})();
var statearr_7591_7611 = state_7578__$1;
(statearr_7591_7611[(2)] = inst_7559);

(statearr_7591_7611[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7579 === (14))){
var inst_7572 = (state_7578[(2)]);
var state_7578__$1 = state_7578;
var statearr_7592_7612 = state_7578__$1;
(statearr_7592_7612[(2)] = inst_7572);

(statearr_7592_7612[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7579 === (10))){
var state_7578__$1 = state_7578;
var statearr_7593_7613 = state_7578__$1;
(statearr_7593_7613[(2)] = fc);

(statearr_7593_7613[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7579 === (8))){
var inst_7567 = (state_7578[(2)]);
var state_7578__$1 = state_7578;
if(cljs.core.truth_(inst_7567)){
var statearr_7594_7614 = state_7578__$1;
(statearr_7594_7614[(1)] = (12));

} else {
var statearr_7595_7615 = state_7578__$1;
(statearr_7595_7615[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___7601,tc,fc))
;
return ((function (switch__7047__auto__,c__7149__auto___7601,tc,fc){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_7596 = [null,null,null,null,null,null,null,null,null];
(statearr_7596[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_7596[(1)] = (1));

return statearr_7596;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_7578){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7578);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7597){if((e7597 instanceof Object)){
var ex__7051__auto__ = e7597;
var statearr_7598_7616 = state_7578;
(statearr_7598_7616[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7578);

return cljs.core.cst$kw$recur;
} else {
throw e7597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__7617 = state_7578;
state_7578 = G__7617;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_7578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_7578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___7601,tc,fc))
})();
var state__7151__auto__ = (function (){var statearr_7599 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7599[(6)] = c__7149__auto___7601);

return statearr_7599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___7601,tc,fc))
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
var c__7149__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto__){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto__){
return (function (state_7638){
var state_val_7639 = (state_7638[(1)]);
if((state_val_7639 === (7))){
var inst_7634 = (state_7638[(2)]);
var state_7638__$1 = state_7638;
var statearr_7640_7658 = state_7638__$1;
(statearr_7640_7658[(2)] = inst_7634);

(statearr_7640_7658[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7639 === (1))){
var inst_7618 = init;
var state_7638__$1 = (function (){var statearr_7641 = state_7638;
(statearr_7641[(7)] = inst_7618);

return statearr_7641;
})();
var statearr_7642_7659 = state_7638__$1;
(statearr_7642_7659[(2)] = null);

(statearr_7642_7659[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7639 === (4))){
var inst_7621 = (state_7638[(8)]);
var inst_7621__$1 = (state_7638[(2)]);
var inst_7622 = (inst_7621__$1 == null);
var state_7638__$1 = (function (){var statearr_7643 = state_7638;
(statearr_7643[(8)] = inst_7621__$1);

return statearr_7643;
})();
if(cljs.core.truth_(inst_7622)){
var statearr_7644_7660 = state_7638__$1;
(statearr_7644_7660[(1)] = (5));

} else {
var statearr_7645_7661 = state_7638__$1;
(statearr_7645_7661[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7639 === (6))){
var inst_7625 = (state_7638[(9)]);
var inst_7618 = (state_7638[(7)]);
var inst_7621 = (state_7638[(8)]);
var inst_7625__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_7618,inst_7621) : f.call(null,inst_7618,inst_7621));
var inst_7626 = cljs.core.reduced_QMARK_(inst_7625__$1);
var state_7638__$1 = (function (){var statearr_7646 = state_7638;
(statearr_7646[(9)] = inst_7625__$1);

return statearr_7646;
})();
if(inst_7626){
var statearr_7647_7662 = state_7638__$1;
(statearr_7647_7662[(1)] = (8));

} else {
var statearr_7648_7663 = state_7638__$1;
(statearr_7648_7663[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7639 === (3))){
var inst_7636 = (state_7638[(2)]);
var state_7638__$1 = state_7638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7638__$1,inst_7636);
} else {
if((state_val_7639 === (2))){
var state_7638__$1 = state_7638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7638__$1,(4),ch);
} else {
if((state_val_7639 === (9))){
var inst_7625 = (state_7638[(9)]);
var inst_7618 = inst_7625;
var state_7638__$1 = (function (){var statearr_7649 = state_7638;
(statearr_7649[(7)] = inst_7618);

return statearr_7649;
})();
var statearr_7650_7664 = state_7638__$1;
(statearr_7650_7664[(2)] = null);

(statearr_7650_7664[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7639 === (5))){
var inst_7618 = (state_7638[(7)]);
var state_7638__$1 = state_7638;
var statearr_7651_7665 = state_7638__$1;
(statearr_7651_7665[(2)] = inst_7618);

(statearr_7651_7665[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7639 === (10))){
var inst_7632 = (state_7638[(2)]);
var state_7638__$1 = state_7638;
var statearr_7652_7666 = state_7638__$1;
(statearr_7652_7666[(2)] = inst_7632);

(statearr_7652_7666[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7639 === (8))){
var inst_7625 = (state_7638[(9)]);
var inst_7628 = cljs.core.deref(inst_7625);
var state_7638__$1 = state_7638;
var statearr_7653_7667 = state_7638__$1;
(statearr_7653_7667[(2)] = inst_7628);

(statearr_7653_7667[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto__))
;
return ((function (switch__7047__auto__,c__7149__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7048__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7048__auto____0 = (function (){
var statearr_7654 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7654[(0)] = cljs$core$async$reduce_$_state_machine__7048__auto__);

(statearr_7654[(1)] = (1));

return statearr_7654;
});
var cljs$core$async$reduce_$_state_machine__7048__auto____1 = (function (state_7638){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7638);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7655){if((e7655 instanceof Object)){
var ex__7051__auto__ = e7655;
var statearr_7656_7668 = state_7638;
(statearr_7656_7668[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7638);

return cljs.core.cst$kw$recur;
} else {
throw e7655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__7669 = state_7638;
state_7638 = G__7669;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7048__auto__ = function(state_7638){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7048__auto____1.call(this,state_7638);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7048__auto____0;
cljs$core$async$reduce_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7048__auto____1;
return cljs$core$async$reduce_$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto__))
})();
var state__7151__auto__ = (function (){var statearr_7657 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7657[(6)] = c__7149__auto__);

return statearr_7657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto__))
);

return c__7149__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__7149__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto__,f__$1){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto__,f__$1){
return (function (state_7675){
var state_val_7676 = (state_7675[(1)]);
if((state_val_7676 === (1))){
var inst_7670 = cljs.core.async.reduce(f__$1,init,ch);
var state_7675__$1 = state_7675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7675__$1,(2),inst_7670);
} else {
if((state_val_7676 === (2))){
var inst_7672 = (state_7675[(2)]);
var inst_7673 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_7672) : f__$1.call(null,inst_7672));
var state_7675__$1 = state_7675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7675__$1,inst_7673);
} else {
return null;
}
}
});})(c__7149__auto__,f__$1))
;
return ((function (switch__7047__auto__,c__7149__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__7048__auto__ = null;
var cljs$core$async$transduce_$_state_machine__7048__auto____0 = (function (){
var statearr_7677 = [null,null,null,null,null,null,null];
(statearr_7677[(0)] = cljs$core$async$transduce_$_state_machine__7048__auto__);

(statearr_7677[(1)] = (1));

return statearr_7677;
});
var cljs$core$async$transduce_$_state_machine__7048__auto____1 = (function (state_7675){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7675);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7678){if((e7678 instanceof Object)){
var ex__7051__auto__ = e7678;
var statearr_7679_7681 = state_7675;
(statearr_7679_7681[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7675);

return cljs.core.cst$kw$recur;
} else {
throw e7678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__7682 = state_7675;
state_7675 = G__7682;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__7048__auto__ = function(state_7675){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__7048__auto____1.call(this,state_7675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__7048__auto____0;
cljs$core$async$transduce_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__7048__auto____1;
return cljs$core$async$transduce_$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto__,f__$1))
})();
var state__7151__auto__ = (function (){var statearr_7680 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7680[(6)] = c__7149__auto__);

return statearr_7680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto__,f__$1))
);

return c__7149__auto__;
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
var G__7684 = arguments.length;
switch (G__7684) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7149__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto__){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto__){
return (function (state_7709){
var state_val_7710 = (state_7709[(1)]);
if((state_val_7710 === (7))){
var inst_7691 = (state_7709[(2)]);
var state_7709__$1 = state_7709;
var statearr_7711_7732 = state_7709__$1;
(statearr_7711_7732[(2)] = inst_7691);

(statearr_7711_7732[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7710 === (1))){
var inst_7685 = cljs.core.seq(coll);
var inst_7686 = inst_7685;
var state_7709__$1 = (function (){var statearr_7712 = state_7709;
(statearr_7712[(7)] = inst_7686);

return statearr_7712;
})();
var statearr_7713_7733 = state_7709__$1;
(statearr_7713_7733[(2)] = null);

(statearr_7713_7733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7710 === (4))){
var inst_7686 = (state_7709[(7)]);
var inst_7689 = cljs.core.first(inst_7686);
var state_7709__$1 = state_7709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7709__$1,(7),ch,inst_7689);
} else {
if((state_val_7710 === (13))){
var inst_7703 = (state_7709[(2)]);
var state_7709__$1 = state_7709;
var statearr_7714_7734 = state_7709__$1;
(statearr_7714_7734[(2)] = inst_7703);

(statearr_7714_7734[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7710 === (6))){
var inst_7694 = (state_7709[(2)]);
var state_7709__$1 = state_7709;
if(cljs.core.truth_(inst_7694)){
var statearr_7715_7735 = state_7709__$1;
(statearr_7715_7735[(1)] = (8));

} else {
var statearr_7716_7736 = state_7709__$1;
(statearr_7716_7736[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7710 === (3))){
var inst_7707 = (state_7709[(2)]);
var state_7709__$1 = state_7709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7709__$1,inst_7707);
} else {
if((state_val_7710 === (12))){
var state_7709__$1 = state_7709;
var statearr_7717_7737 = state_7709__$1;
(statearr_7717_7737[(2)] = null);

(statearr_7717_7737[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7710 === (2))){
var inst_7686 = (state_7709[(7)]);
var state_7709__$1 = state_7709;
if(cljs.core.truth_(inst_7686)){
var statearr_7718_7738 = state_7709__$1;
(statearr_7718_7738[(1)] = (4));

} else {
var statearr_7719_7739 = state_7709__$1;
(statearr_7719_7739[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7710 === (11))){
var inst_7700 = cljs.core.async.close_BANG_(ch);
var state_7709__$1 = state_7709;
var statearr_7720_7740 = state_7709__$1;
(statearr_7720_7740[(2)] = inst_7700);

(statearr_7720_7740[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7710 === (9))){
var state_7709__$1 = state_7709;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7721_7741 = state_7709__$1;
(statearr_7721_7741[(1)] = (11));

} else {
var statearr_7722_7742 = state_7709__$1;
(statearr_7722_7742[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7710 === (5))){
var inst_7686 = (state_7709[(7)]);
var state_7709__$1 = state_7709;
var statearr_7723_7743 = state_7709__$1;
(statearr_7723_7743[(2)] = inst_7686);

(statearr_7723_7743[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7710 === (10))){
var inst_7705 = (state_7709[(2)]);
var state_7709__$1 = state_7709;
var statearr_7724_7744 = state_7709__$1;
(statearr_7724_7744[(2)] = inst_7705);

(statearr_7724_7744[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7710 === (8))){
var inst_7686 = (state_7709[(7)]);
var inst_7696 = cljs.core.next(inst_7686);
var inst_7686__$1 = inst_7696;
var state_7709__$1 = (function (){var statearr_7725 = state_7709;
(statearr_7725[(7)] = inst_7686__$1);

return statearr_7725;
})();
var statearr_7726_7745 = state_7709__$1;
(statearr_7726_7745[(2)] = null);

(statearr_7726_7745[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto__))
;
return ((function (switch__7047__auto__,c__7149__auto__){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_7727 = [null,null,null,null,null,null,null,null];
(statearr_7727[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_7727[(1)] = (1));

return statearr_7727;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_7709){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7709);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7728){if((e7728 instanceof Object)){
var ex__7051__auto__ = e7728;
var statearr_7729_7746 = state_7709;
(statearr_7729_7746[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7709);

return cljs.core.cst$kw$recur;
} else {
throw e7728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__7747 = state_7709;
state_7709 = G__7747;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_7709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_7709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto__))
})();
var state__7151__auto__ = (function (){var statearr_7730 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7730[(6)] = c__7149__auto__);

return statearr_7730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto__))
);

return c__7149__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async7748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7748 = (function (ch,cs,meta7749){
this.ch = ch;
this.cs = cs;
this.meta7749 = meta7749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7750,meta7749__$1){
var self__ = this;
var _7750__$1 = this;
return (new cljs.core.async.t_cljs$core$async7748(self__.ch,self__.cs,meta7749__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7750){
var self__ = this;
var _7750__$1 = this;
return self__.meta7749;
});})(cs))
;

cljs.core.async.t_cljs$core$async7748.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7748.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7748.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7748.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7748.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7748.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta7749], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7748";

cljs.core.async.t_cljs$core$async7748.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async7748");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7748.
 */
cljs.core.async.__GT_t_cljs$core$async7748 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7748(ch__$1,cs__$1,meta7749){
return (new cljs.core.async.t_cljs$core$async7748(ch__$1,cs__$1,meta7749));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7748(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7149__auto___7970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___7970,cs,m,dchan,dctr,done){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___7970,cs,m,dchan,dctr,done){
return (function (state_7885){
var state_val_7886 = (state_7885[(1)]);
if((state_val_7886 === (7))){
var inst_7881 = (state_7885[(2)]);
var state_7885__$1 = state_7885;
var statearr_7887_7971 = state_7885__$1;
(statearr_7887_7971[(2)] = inst_7881);

(statearr_7887_7971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (20))){
var inst_7784 = (state_7885[(7)]);
var inst_7796 = cljs.core.first(inst_7784);
var inst_7797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7796,(0),null);
var inst_7798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7796,(1),null);
var state_7885__$1 = (function (){var statearr_7888 = state_7885;
(statearr_7888[(8)] = inst_7797);

return statearr_7888;
})();
if(cljs.core.truth_(inst_7798)){
var statearr_7889_7972 = state_7885__$1;
(statearr_7889_7972[(1)] = (22));

} else {
var statearr_7890_7973 = state_7885__$1;
(statearr_7890_7973[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (27))){
var inst_7753 = (state_7885[(9)]);
var inst_7833 = (state_7885[(10)]);
var inst_7826 = (state_7885[(11)]);
var inst_7828 = (state_7885[(12)]);
var inst_7833__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_7826,inst_7828);
var inst_7834 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_7833__$1,inst_7753,done);
var state_7885__$1 = (function (){var statearr_7891 = state_7885;
(statearr_7891[(10)] = inst_7833__$1);

return statearr_7891;
})();
if(cljs.core.truth_(inst_7834)){
var statearr_7892_7974 = state_7885__$1;
(statearr_7892_7974[(1)] = (30));

} else {
var statearr_7893_7975 = state_7885__$1;
(statearr_7893_7975[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (1))){
var state_7885__$1 = state_7885;
var statearr_7894_7976 = state_7885__$1;
(statearr_7894_7976[(2)] = null);

(statearr_7894_7976[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (24))){
var inst_7784 = (state_7885[(7)]);
var inst_7803 = (state_7885[(2)]);
var inst_7804 = cljs.core.next(inst_7784);
var inst_7762 = inst_7804;
var inst_7763 = null;
var inst_7764 = (0);
var inst_7765 = (0);
var state_7885__$1 = (function (){var statearr_7895 = state_7885;
(statearr_7895[(13)] = inst_7765);

(statearr_7895[(14)] = inst_7763);

(statearr_7895[(15)] = inst_7764);

(statearr_7895[(16)] = inst_7803);

(statearr_7895[(17)] = inst_7762);

return statearr_7895;
})();
var statearr_7896_7977 = state_7885__$1;
(statearr_7896_7977[(2)] = null);

(statearr_7896_7977[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (39))){
var state_7885__$1 = state_7885;
var statearr_7900_7978 = state_7885__$1;
(statearr_7900_7978[(2)] = null);

(statearr_7900_7978[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (4))){
var inst_7753 = (state_7885[(9)]);
var inst_7753__$1 = (state_7885[(2)]);
var inst_7754 = (inst_7753__$1 == null);
var state_7885__$1 = (function (){var statearr_7901 = state_7885;
(statearr_7901[(9)] = inst_7753__$1);

return statearr_7901;
})();
if(cljs.core.truth_(inst_7754)){
var statearr_7902_7979 = state_7885__$1;
(statearr_7902_7979[(1)] = (5));

} else {
var statearr_7903_7980 = state_7885__$1;
(statearr_7903_7980[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (15))){
var inst_7765 = (state_7885[(13)]);
var inst_7763 = (state_7885[(14)]);
var inst_7764 = (state_7885[(15)]);
var inst_7762 = (state_7885[(17)]);
var inst_7780 = (state_7885[(2)]);
var inst_7781 = (inst_7765 + (1));
var tmp7897 = inst_7763;
var tmp7898 = inst_7764;
var tmp7899 = inst_7762;
var inst_7762__$1 = tmp7899;
var inst_7763__$1 = tmp7897;
var inst_7764__$1 = tmp7898;
var inst_7765__$1 = inst_7781;
var state_7885__$1 = (function (){var statearr_7904 = state_7885;
(statearr_7904[(13)] = inst_7765__$1);

(statearr_7904[(14)] = inst_7763__$1);

(statearr_7904[(15)] = inst_7764__$1);

(statearr_7904[(18)] = inst_7780);

(statearr_7904[(17)] = inst_7762__$1);

return statearr_7904;
})();
var statearr_7905_7981 = state_7885__$1;
(statearr_7905_7981[(2)] = null);

(statearr_7905_7981[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (21))){
var inst_7807 = (state_7885[(2)]);
var state_7885__$1 = state_7885;
var statearr_7909_7982 = state_7885__$1;
(statearr_7909_7982[(2)] = inst_7807);

(statearr_7909_7982[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (31))){
var inst_7833 = (state_7885[(10)]);
var inst_7837 = done(null);
var inst_7838 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_7833);
var state_7885__$1 = (function (){var statearr_7910 = state_7885;
(statearr_7910[(19)] = inst_7837);

return statearr_7910;
})();
var statearr_7911_7983 = state_7885__$1;
(statearr_7911_7983[(2)] = inst_7838);

(statearr_7911_7983[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (32))){
var inst_7827 = (state_7885[(20)]);
var inst_7826 = (state_7885[(11)]);
var inst_7825 = (state_7885[(21)]);
var inst_7828 = (state_7885[(12)]);
var inst_7840 = (state_7885[(2)]);
var inst_7841 = (inst_7828 + (1));
var tmp7906 = inst_7827;
var tmp7907 = inst_7826;
var tmp7908 = inst_7825;
var inst_7825__$1 = tmp7908;
var inst_7826__$1 = tmp7907;
var inst_7827__$1 = tmp7906;
var inst_7828__$1 = inst_7841;
var state_7885__$1 = (function (){var statearr_7912 = state_7885;
(statearr_7912[(20)] = inst_7827__$1);

(statearr_7912[(11)] = inst_7826__$1);

(statearr_7912[(21)] = inst_7825__$1);

(statearr_7912[(12)] = inst_7828__$1);

(statearr_7912[(22)] = inst_7840);

return statearr_7912;
})();
var statearr_7913_7984 = state_7885__$1;
(statearr_7913_7984[(2)] = null);

(statearr_7913_7984[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (40))){
var inst_7853 = (state_7885[(23)]);
var inst_7857 = done(null);
var inst_7858 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_7853);
var state_7885__$1 = (function (){var statearr_7914 = state_7885;
(statearr_7914[(24)] = inst_7857);

return statearr_7914;
})();
var statearr_7915_7985 = state_7885__$1;
(statearr_7915_7985[(2)] = inst_7858);

(statearr_7915_7985[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (33))){
var inst_7844 = (state_7885[(25)]);
var inst_7846 = cljs.core.chunked_seq_QMARK_(inst_7844);
var state_7885__$1 = state_7885;
if(inst_7846){
var statearr_7916_7986 = state_7885__$1;
(statearr_7916_7986[(1)] = (36));

} else {
var statearr_7917_7987 = state_7885__$1;
(statearr_7917_7987[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (13))){
var inst_7774 = (state_7885[(26)]);
var inst_7777 = cljs.core.async.close_BANG_(inst_7774);
var state_7885__$1 = state_7885;
var statearr_7918_7988 = state_7885__$1;
(statearr_7918_7988[(2)] = inst_7777);

(statearr_7918_7988[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (22))){
var inst_7797 = (state_7885[(8)]);
var inst_7800 = cljs.core.async.close_BANG_(inst_7797);
var state_7885__$1 = state_7885;
var statearr_7919_7989 = state_7885__$1;
(statearr_7919_7989[(2)] = inst_7800);

(statearr_7919_7989[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (36))){
var inst_7844 = (state_7885[(25)]);
var inst_7848 = cljs.core.chunk_first(inst_7844);
var inst_7849 = cljs.core.chunk_rest(inst_7844);
var inst_7850 = cljs.core.count(inst_7848);
var inst_7825 = inst_7849;
var inst_7826 = inst_7848;
var inst_7827 = inst_7850;
var inst_7828 = (0);
var state_7885__$1 = (function (){var statearr_7920 = state_7885;
(statearr_7920[(20)] = inst_7827);

(statearr_7920[(11)] = inst_7826);

(statearr_7920[(21)] = inst_7825);

(statearr_7920[(12)] = inst_7828);

return statearr_7920;
})();
var statearr_7921_7990 = state_7885__$1;
(statearr_7921_7990[(2)] = null);

(statearr_7921_7990[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (41))){
var inst_7844 = (state_7885[(25)]);
var inst_7860 = (state_7885[(2)]);
var inst_7861 = cljs.core.next(inst_7844);
var inst_7825 = inst_7861;
var inst_7826 = null;
var inst_7827 = (0);
var inst_7828 = (0);
var state_7885__$1 = (function (){var statearr_7922 = state_7885;
(statearr_7922[(20)] = inst_7827);

(statearr_7922[(11)] = inst_7826);

(statearr_7922[(21)] = inst_7825);

(statearr_7922[(12)] = inst_7828);

(statearr_7922[(27)] = inst_7860);

return statearr_7922;
})();
var statearr_7923_7991 = state_7885__$1;
(statearr_7923_7991[(2)] = null);

(statearr_7923_7991[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (43))){
var state_7885__$1 = state_7885;
var statearr_7924_7992 = state_7885__$1;
(statearr_7924_7992[(2)] = null);

(statearr_7924_7992[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (29))){
var inst_7869 = (state_7885[(2)]);
var state_7885__$1 = state_7885;
var statearr_7925_7993 = state_7885__$1;
(statearr_7925_7993[(2)] = inst_7869);

(statearr_7925_7993[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (44))){
var inst_7878 = (state_7885[(2)]);
var state_7885__$1 = (function (){var statearr_7926 = state_7885;
(statearr_7926[(28)] = inst_7878);

return statearr_7926;
})();
var statearr_7927_7994 = state_7885__$1;
(statearr_7927_7994[(2)] = null);

(statearr_7927_7994[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (6))){
var inst_7817 = (state_7885[(29)]);
var inst_7816 = cljs.core.deref(cs);
var inst_7817__$1 = cljs.core.keys(inst_7816);
var inst_7818 = cljs.core.count(inst_7817__$1);
var inst_7819 = cljs.core.reset_BANG_(dctr,inst_7818);
var inst_7824 = cljs.core.seq(inst_7817__$1);
var inst_7825 = inst_7824;
var inst_7826 = null;
var inst_7827 = (0);
var inst_7828 = (0);
var state_7885__$1 = (function (){var statearr_7928 = state_7885;
(statearr_7928[(29)] = inst_7817__$1);

(statearr_7928[(30)] = inst_7819);

(statearr_7928[(20)] = inst_7827);

(statearr_7928[(11)] = inst_7826);

(statearr_7928[(21)] = inst_7825);

(statearr_7928[(12)] = inst_7828);

return statearr_7928;
})();
var statearr_7929_7995 = state_7885__$1;
(statearr_7929_7995[(2)] = null);

(statearr_7929_7995[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (28))){
var inst_7825 = (state_7885[(21)]);
var inst_7844 = (state_7885[(25)]);
var inst_7844__$1 = cljs.core.seq(inst_7825);
var state_7885__$1 = (function (){var statearr_7930 = state_7885;
(statearr_7930[(25)] = inst_7844__$1);

return statearr_7930;
})();
if(inst_7844__$1){
var statearr_7931_7996 = state_7885__$1;
(statearr_7931_7996[(1)] = (33));

} else {
var statearr_7932_7997 = state_7885__$1;
(statearr_7932_7997[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (25))){
var inst_7827 = (state_7885[(20)]);
var inst_7828 = (state_7885[(12)]);
var inst_7830 = (inst_7828 < inst_7827);
var inst_7831 = inst_7830;
var state_7885__$1 = state_7885;
if(cljs.core.truth_(inst_7831)){
var statearr_7933_7998 = state_7885__$1;
(statearr_7933_7998[(1)] = (27));

} else {
var statearr_7934_7999 = state_7885__$1;
(statearr_7934_7999[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (34))){
var state_7885__$1 = state_7885;
var statearr_7935_8000 = state_7885__$1;
(statearr_7935_8000[(2)] = null);

(statearr_7935_8000[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (17))){
var state_7885__$1 = state_7885;
var statearr_7936_8001 = state_7885__$1;
(statearr_7936_8001[(2)] = null);

(statearr_7936_8001[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (3))){
var inst_7883 = (state_7885[(2)]);
var state_7885__$1 = state_7885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7885__$1,inst_7883);
} else {
if((state_val_7886 === (12))){
var inst_7812 = (state_7885[(2)]);
var state_7885__$1 = state_7885;
var statearr_7937_8002 = state_7885__$1;
(statearr_7937_8002[(2)] = inst_7812);

(statearr_7937_8002[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (2))){
var state_7885__$1 = state_7885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7885__$1,(4),ch);
} else {
if((state_val_7886 === (23))){
var state_7885__$1 = state_7885;
var statearr_7938_8003 = state_7885__$1;
(statearr_7938_8003[(2)] = null);

(statearr_7938_8003[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (35))){
var inst_7867 = (state_7885[(2)]);
var state_7885__$1 = state_7885;
var statearr_7939_8004 = state_7885__$1;
(statearr_7939_8004[(2)] = inst_7867);

(statearr_7939_8004[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (19))){
var inst_7784 = (state_7885[(7)]);
var inst_7788 = cljs.core.chunk_first(inst_7784);
var inst_7789 = cljs.core.chunk_rest(inst_7784);
var inst_7790 = cljs.core.count(inst_7788);
var inst_7762 = inst_7789;
var inst_7763 = inst_7788;
var inst_7764 = inst_7790;
var inst_7765 = (0);
var state_7885__$1 = (function (){var statearr_7940 = state_7885;
(statearr_7940[(13)] = inst_7765);

(statearr_7940[(14)] = inst_7763);

(statearr_7940[(15)] = inst_7764);

(statearr_7940[(17)] = inst_7762);

return statearr_7940;
})();
var statearr_7941_8005 = state_7885__$1;
(statearr_7941_8005[(2)] = null);

(statearr_7941_8005[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (11))){
var inst_7784 = (state_7885[(7)]);
var inst_7762 = (state_7885[(17)]);
var inst_7784__$1 = cljs.core.seq(inst_7762);
var state_7885__$1 = (function (){var statearr_7942 = state_7885;
(statearr_7942[(7)] = inst_7784__$1);

return statearr_7942;
})();
if(inst_7784__$1){
var statearr_7943_8006 = state_7885__$1;
(statearr_7943_8006[(1)] = (16));

} else {
var statearr_7944_8007 = state_7885__$1;
(statearr_7944_8007[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (9))){
var inst_7814 = (state_7885[(2)]);
var state_7885__$1 = state_7885;
var statearr_7945_8008 = state_7885__$1;
(statearr_7945_8008[(2)] = inst_7814);

(statearr_7945_8008[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (5))){
var inst_7760 = cljs.core.deref(cs);
var inst_7761 = cljs.core.seq(inst_7760);
var inst_7762 = inst_7761;
var inst_7763 = null;
var inst_7764 = (0);
var inst_7765 = (0);
var state_7885__$1 = (function (){var statearr_7946 = state_7885;
(statearr_7946[(13)] = inst_7765);

(statearr_7946[(14)] = inst_7763);

(statearr_7946[(15)] = inst_7764);

(statearr_7946[(17)] = inst_7762);

return statearr_7946;
})();
var statearr_7947_8009 = state_7885__$1;
(statearr_7947_8009[(2)] = null);

(statearr_7947_8009[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (14))){
var state_7885__$1 = state_7885;
var statearr_7948_8010 = state_7885__$1;
(statearr_7948_8010[(2)] = null);

(statearr_7948_8010[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (45))){
var inst_7875 = (state_7885[(2)]);
var state_7885__$1 = state_7885;
var statearr_7949_8011 = state_7885__$1;
(statearr_7949_8011[(2)] = inst_7875);

(statearr_7949_8011[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (26))){
var inst_7817 = (state_7885[(29)]);
var inst_7871 = (state_7885[(2)]);
var inst_7872 = cljs.core.seq(inst_7817);
var state_7885__$1 = (function (){var statearr_7950 = state_7885;
(statearr_7950[(31)] = inst_7871);

return statearr_7950;
})();
if(inst_7872){
var statearr_7951_8012 = state_7885__$1;
(statearr_7951_8012[(1)] = (42));

} else {
var statearr_7952_8013 = state_7885__$1;
(statearr_7952_8013[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (16))){
var inst_7784 = (state_7885[(7)]);
var inst_7786 = cljs.core.chunked_seq_QMARK_(inst_7784);
var state_7885__$1 = state_7885;
if(inst_7786){
var statearr_7953_8014 = state_7885__$1;
(statearr_7953_8014[(1)] = (19));

} else {
var statearr_7954_8015 = state_7885__$1;
(statearr_7954_8015[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (38))){
var inst_7864 = (state_7885[(2)]);
var state_7885__$1 = state_7885;
var statearr_7955_8016 = state_7885__$1;
(statearr_7955_8016[(2)] = inst_7864);

(statearr_7955_8016[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (30))){
var state_7885__$1 = state_7885;
var statearr_7956_8017 = state_7885__$1;
(statearr_7956_8017[(2)] = null);

(statearr_7956_8017[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (10))){
var inst_7765 = (state_7885[(13)]);
var inst_7763 = (state_7885[(14)]);
var inst_7773 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_7763,inst_7765);
var inst_7774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7773,(0),null);
var inst_7775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_7773,(1),null);
var state_7885__$1 = (function (){var statearr_7957 = state_7885;
(statearr_7957[(26)] = inst_7774);

return statearr_7957;
})();
if(cljs.core.truth_(inst_7775)){
var statearr_7958_8018 = state_7885__$1;
(statearr_7958_8018[(1)] = (13));

} else {
var statearr_7959_8019 = state_7885__$1;
(statearr_7959_8019[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (18))){
var inst_7810 = (state_7885[(2)]);
var state_7885__$1 = state_7885;
var statearr_7960_8020 = state_7885__$1;
(statearr_7960_8020[(2)] = inst_7810);

(statearr_7960_8020[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (42))){
var state_7885__$1 = state_7885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7885__$1,(45),dchan);
} else {
if((state_val_7886 === (37))){
var inst_7753 = (state_7885[(9)]);
var inst_7853 = (state_7885[(23)]);
var inst_7844 = (state_7885[(25)]);
var inst_7853__$1 = cljs.core.first(inst_7844);
var inst_7854 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_7853__$1,inst_7753,done);
var state_7885__$1 = (function (){var statearr_7961 = state_7885;
(statearr_7961[(23)] = inst_7853__$1);

return statearr_7961;
})();
if(cljs.core.truth_(inst_7854)){
var statearr_7962_8021 = state_7885__$1;
(statearr_7962_8021[(1)] = (39));

} else {
var statearr_7963_8022 = state_7885__$1;
(statearr_7963_8022[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7886 === (8))){
var inst_7765 = (state_7885[(13)]);
var inst_7764 = (state_7885[(15)]);
var inst_7767 = (inst_7765 < inst_7764);
var inst_7768 = inst_7767;
var state_7885__$1 = state_7885;
if(cljs.core.truth_(inst_7768)){
var statearr_7964_8023 = state_7885__$1;
(statearr_7964_8023[(1)] = (10));

} else {
var statearr_7965_8024 = state_7885__$1;
(statearr_7965_8024[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___7970,cs,m,dchan,dctr,done))
;
return ((function (switch__7047__auto__,c__7149__auto___7970,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7048__auto__ = null;
var cljs$core$async$mult_$_state_machine__7048__auto____0 = (function (){
var statearr_7966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7966[(0)] = cljs$core$async$mult_$_state_machine__7048__auto__);

(statearr_7966[(1)] = (1));

return statearr_7966;
});
var cljs$core$async$mult_$_state_machine__7048__auto____1 = (function (state_7885){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_7885);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e7967){if((e7967 instanceof Object)){
var ex__7051__auto__ = e7967;
var statearr_7968_8025 = state_7885;
(statearr_7968_8025[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7885);

return cljs.core.cst$kw$recur;
} else {
throw e7967;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__8026 = state_7885;
state_7885 = G__8026;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7048__auto__ = function(state_7885){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7048__auto____1.call(this,state_7885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7048__auto____0;
cljs$core$async$mult_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7048__auto____1;
return cljs$core$async$mult_$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___7970,cs,m,dchan,dctr,done))
})();
var state__7151__auto__ = (function (){var statearr_7969 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_7969[(6)] = c__7149__auto___7970);

return statearr_7969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___7970,cs,m,dchan,dctr,done))
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
var G__8028 = arguments.length;
switch (G__8028) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8040 = arguments.length;
var i__4500__auto___8041 = (0);
while(true){
if((i__4500__auto___8041 < len__4499__auto___8040)){
args__4502__auto__.push((arguments[i__4500__auto___8041]));

var G__8042 = (i__4500__auto___8041 + (1));
i__4500__auto___8041 = G__8042;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8034){
var map__8035 = p__8034;
var map__8035__$1 = ((((!((map__8035 == null)))?(((((map__8035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8035):map__8035);
var opts = map__8035__$1;
var statearr_8037_8043 = state;
(statearr_8037_8043[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__8035,map__8035__$1,opts){
return (function (val){
var statearr_8038_8044 = state;
(statearr_8038_8044[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__8035,map__8035__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_8039_8045 = state;
(statearr_8039_8045[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8030){
var G__8031 = cljs.core.first(seq8030);
var seq8030__$1 = cljs.core.next(seq8030);
var G__8032 = cljs.core.first(seq8030__$1);
var seq8030__$2 = cljs.core.next(seq8030__$1);
var G__8033 = cljs.core.first(seq8030__$2);
var seq8030__$3 = cljs.core.next(seq8030__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8031,G__8032,G__8033,seq8030__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8046 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta8047){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta8047 = meta8047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8048,meta8047__$1){
var self__ = this;
var _8048__$1 = this;
return (new cljs.core.async.t_cljs$core$async8046(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta8047__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8048){
var self__ = this;
var _8048__$1 = this;
return self__.meta8047;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8046.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8046.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8046.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8046.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8046.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8046.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8046.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8046.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta8047], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8046";

cljs.core.async.t_cljs$core$async8046.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8046");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8046.
 */
cljs.core.async.__GT_t_cljs$core$async8046 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8046(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8047){
return (new cljs.core.async.t_cljs$core$async8046(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8047));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8046(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7149__auto___8210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___8210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___8210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8150){
var state_val_8151 = (state_8150[(1)]);
if((state_val_8151 === (7))){
var inst_8065 = (state_8150[(2)]);
var state_8150__$1 = state_8150;
var statearr_8152_8211 = state_8150__$1;
(statearr_8152_8211[(2)] = inst_8065);

(statearr_8152_8211[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (20))){
var inst_8077 = (state_8150[(7)]);
var state_8150__$1 = state_8150;
var statearr_8153_8212 = state_8150__$1;
(statearr_8153_8212[(2)] = inst_8077);

(statearr_8153_8212[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (27))){
var state_8150__$1 = state_8150;
var statearr_8154_8213 = state_8150__$1;
(statearr_8154_8213[(2)] = null);

(statearr_8154_8213[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (1))){
var inst_8052 = (state_8150[(8)]);
var inst_8052__$1 = calc_state();
var inst_8054 = (inst_8052__$1 == null);
var inst_8055 = cljs.core.not(inst_8054);
var state_8150__$1 = (function (){var statearr_8155 = state_8150;
(statearr_8155[(8)] = inst_8052__$1);

return statearr_8155;
})();
if(inst_8055){
var statearr_8156_8214 = state_8150__$1;
(statearr_8156_8214[(1)] = (2));

} else {
var statearr_8157_8215 = state_8150__$1;
(statearr_8157_8215[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (24))){
var inst_8101 = (state_8150[(9)]);
var inst_8110 = (state_8150[(10)]);
var inst_8124 = (state_8150[(11)]);
var inst_8124__$1 = (inst_8101.cljs$core$IFn$_invoke$arity$1 ? inst_8101.cljs$core$IFn$_invoke$arity$1(inst_8110) : inst_8101.call(null,inst_8110));
var state_8150__$1 = (function (){var statearr_8158 = state_8150;
(statearr_8158[(11)] = inst_8124__$1);

return statearr_8158;
})();
if(cljs.core.truth_(inst_8124__$1)){
var statearr_8159_8216 = state_8150__$1;
(statearr_8159_8216[(1)] = (29));

} else {
var statearr_8160_8217 = state_8150__$1;
(statearr_8160_8217[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (4))){
var inst_8068 = (state_8150[(2)]);
var state_8150__$1 = state_8150;
if(cljs.core.truth_(inst_8068)){
var statearr_8161_8218 = state_8150__$1;
(statearr_8161_8218[(1)] = (8));

} else {
var statearr_8162_8219 = state_8150__$1;
(statearr_8162_8219[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (15))){
var inst_8095 = (state_8150[(2)]);
var state_8150__$1 = state_8150;
if(cljs.core.truth_(inst_8095)){
var statearr_8163_8220 = state_8150__$1;
(statearr_8163_8220[(1)] = (19));

} else {
var statearr_8164_8221 = state_8150__$1;
(statearr_8164_8221[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (21))){
var inst_8100 = (state_8150[(12)]);
var inst_8100__$1 = (state_8150[(2)]);
var inst_8101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8100__$1,cljs.core.cst$kw$solos);
var inst_8102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8100__$1,cljs.core.cst$kw$mutes);
var inst_8103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8100__$1,cljs.core.cst$kw$reads);
var state_8150__$1 = (function (){var statearr_8165 = state_8150;
(statearr_8165[(12)] = inst_8100__$1);

(statearr_8165[(9)] = inst_8101);

(statearr_8165[(13)] = inst_8102);

return statearr_8165;
})();
return cljs.core.async.ioc_alts_BANG_(state_8150__$1,(22),inst_8103);
} else {
if((state_val_8151 === (31))){
var inst_8132 = (state_8150[(2)]);
var state_8150__$1 = state_8150;
if(cljs.core.truth_(inst_8132)){
var statearr_8166_8222 = state_8150__$1;
(statearr_8166_8222[(1)] = (32));

} else {
var statearr_8167_8223 = state_8150__$1;
(statearr_8167_8223[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (32))){
var inst_8109 = (state_8150[(14)]);
var state_8150__$1 = state_8150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8150__$1,(35),out,inst_8109);
} else {
if((state_val_8151 === (33))){
var inst_8100 = (state_8150[(12)]);
var inst_8077 = inst_8100;
var state_8150__$1 = (function (){var statearr_8168 = state_8150;
(statearr_8168[(7)] = inst_8077);

return statearr_8168;
})();
var statearr_8169_8224 = state_8150__$1;
(statearr_8169_8224[(2)] = null);

(statearr_8169_8224[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (13))){
var inst_8077 = (state_8150[(7)]);
var inst_8084 = inst_8077.cljs$lang$protocol_mask$partition0$;
var inst_8085 = (inst_8084 & (64));
var inst_8086 = inst_8077.cljs$core$ISeq$;
var inst_8087 = (cljs.core.PROTOCOL_SENTINEL === inst_8086);
var inst_8088 = ((inst_8085) || (inst_8087));
var state_8150__$1 = state_8150;
if(cljs.core.truth_(inst_8088)){
var statearr_8170_8225 = state_8150__$1;
(statearr_8170_8225[(1)] = (16));

} else {
var statearr_8171_8226 = state_8150__$1;
(statearr_8171_8226[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (22))){
var inst_8110 = (state_8150[(10)]);
var inst_8109 = (state_8150[(14)]);
var inst_8108 = (state_8150[(2)]);
var inst_8109__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8108,(0),null);
var inst_8110__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8108,(1),null);
var inst_8111 = (inst_8109__$1 == null);
var inst_8112 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8110__$1,change);
var inst_8113 = ((inst_8111) || (inst_8112));
var state_8150__$1 = (function (){var statearr_8172 = state_8150;
(statearr_8172[(10)] = inst_8110__$1);

(statearr_8172[(14)] = inst_8109__$1);

return statearr_8172;
})();
if(cljs.core.truth_(inst_8113)){
var statearr_8173_8227 = state_8150__$1;
(statearr_8173_8227[(1)] = (23));

} else {
var statearr_8174_8228 = state_8150__$1;
(statearr_8174_8228[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (36))){
var inst_8100 = (state_8150[(12)]);
var inst_8077 = inst_8100;
var state_8150__$1 = (function (){var statearr_8175 = state_8150;
(statearr_8175[(7)] = inst_8077);

return statearr_8175;
})();
var statearr_8176_8229 = state_8150__$1;
(statearr_8176_8229[(2)] = null);

(statearr_8176_8229[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (29))){
var inst_8124 = (state_8150[(11)]);
var state_8150__$1 = state_8150;
var statearr_8177_8230 = state_8150__$1;
(statearr_8177_8230[(2)] = inst_8124);

(statearr_8177_8230[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (6))){
var state_8150__$1 = state_8150;
var statearr_8178_8231 = state_8150__$1;
(statearr_8178_8231[(2)] = false);

(statearr_8178_8231[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (28))){
var inst_8120 = (state_8150[(2)]);
var inst_8121 = calc_state();
var inst_8077 = inst_8121;
var state_8150__$1 = (function (){var statearr_8179 = state_8150;
(statearr_8179[(15)] = inst_8120);

(statearr_8179[(7)] = inst_8077);

return statearr_8179;
})();
var statearr_8180_8232 = state_8150__$1;
(statearr_8180_8232[(2)] = null);

(statearr_8180_8232[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (25))){
var inst_8146 = (state_8150[(2)]);
var state_8150__$1 = state_8150;
var statearr_8181_8233 = state_8150__$1;
(statearr_8181_8233[(2)] = inst_8146);

(statearr_8181_8233[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (34))){
var inst_8144 = (state_8150[(2)]);
var state_8150__$1 = state_8150;
var statearr_8182_8234 = state_8150__$1;
(statearr_8182_8234[(2)] = inst_8144);

(statearr_8182_8234[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (17))){
var state_8150__$1 = state_8150;
var statearr_8183_8235 = state_8150__$1;
(statearr_8183_8235[(2)] = false);

(statearr_8183_8235[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (3))){
var state_8150__$1 = state_8150;
var statearr_8184_8236 = state_8150__$1;
(statearr_8184_8236[(2)] = false);

(statearr_8184_8236[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (12))){
var inst_8148 = (state_8150[(2)]);
var state_8150__$1 = state_8150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8150__$1,inst_8148);
} else {
if((state_val_8151 === (2))){
var inst_8052 = (state_8150[(8)]);
var inst_8057 = inst_8052.cljs$lang$protocol_mask$partition0$;
var inst_8058 = (inst_8057 & (64));
var inst_8059 = inst_8052.cljs$core$ISeq$;
var inst_8060 = (cljs.core.PROTOCOL_SENTINEL === inst_8059);
var inst_8061 = ((inst_8058) || (inst_8060));
var state_8150__$1 = state_8150;
if(cljs.core.truth_(inst_8061)){
var statearr_8185_8237 = state_8150__$1;
(statearr_8185_8237[(1)] = (5));

} else {
var statearr_8186_8238 = state_8150__$1;
(statearr_8186_8238[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (23))){
var inst_8109 = (state_8150[(14)]);
var inst_8115 = (inst_8109 == null);
var state_8150__$1 = state_8150;
if(cljs.core.truth_(inst_8115)){
var statearr_8187_8239 = state_8150__$1;
(statearr_8187_8239[(1)] = (26));

} else {
var statearr_8188_8240 = state_8150__$1;
(statearr_8188_8240[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (35))){
var inst_8135 = (state_8150[(2)]);
var state_8150__$1 = state_8150;
if(cljs.core.truth_(inst_8135)){
var statearr_8189_8241 = state_8150__$1;
(statearr_8189_8241[(1)] = (36));

} else {
var statearr_8190_8242 = state_8150__$1;
(statearr_8190_8242[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (19))){
var inst_8077 = (state_8150[(7)]);
var inst_8097 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8077);
var state_8150__$1 = state_8150;
var statearr_8191_8243 = state_8150__$1;
(statearr_8191_8243[(2)] = inst_8097);

(statearr_8191_8243[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (11))){
var inst_8077 = (state_8150[(7)]);
var inst_8081 = (inst_8077 == null);
var inst_8082 = cljs.core.not(inst_8081);
var state_8150__$1 = state_8150;
if(inst_8082){
var statearr_8192_8244 = state_8150__$1;
(statearr_8192_8244[(1)] = (13));

} else {
var statearr_8193_8245 = state_8150__$1;
(statearr_8193_8245[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (9))){
var inst_8052 = (state_8150[(8)]);
var state_8150__$1 = state_8150;
var statearr_8194_8246 = state_8150__$1;
(statearr_8194_8246[(2)] = inst_8052);

(statearr_8194_8246[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (5))){
var state_8150__$1 = state_8150;
var statearr_8195_8247 = state_8150__$1;
(statearr_8195_8247[(2)] = true);

(statearr_8195_8247[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (14))){
var state_8150__$1 = state_8150;
var statearr_8196_8248 = state_8150__$1;
(statearr_8196_8248[(2)] = false);

(statearr_8196_8248[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (26))){
var inst_8110 = (state_8150[(10)]);
var inst_8117 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_8110);
var state_8150__$1 = state_8150;
var statearr_8197_8249 = state_8150__$1;
(statearr_8197_8249[(2)] = inst_8117);

(statearr_8197_8249[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (16))){
var state_8150__$1 = state_8150;
var statearr_8198_8250 = state_8150__$1;
(statearr_8198_8250[(2)] = true);

(statearr_8198_8250[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (38))){
var inst_8140 = (state_8150[(2)]);
var state_8150__$1 = state_8150;
var statearr_8199_8251 = state_8150__$1;
(statearr_8199_8251[(2)] = inst_8140);

(statearr_8199_8251[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (30))){
var inst_8101 = (state_8150[(9)]);
var inst_8110 = (state_8150[(10)]);
var inst_8102 = (state_8150[(13)]);
var inst_8127 = cljs.core.empty_QMARK_(inst_8101);
var inst_8128 = (inst_8102.cljs$core$IFn$_invoke$arity$1 ? inst_8102.cljs$core$IFn$_invoke$arity$1(inst_8110) : inst_8102.call(null,inst_8110));
var inst_8129 = cljs.core.not(inst_8128);
var inst_8130 = ((inst_8127) && (inst_8129));
var state_8150__$1 = state_8150;
var statearr_8200_8252 = state_8150__$1;
(statearr_8200_8252[(2)] = inst_8130);

(statearr_8200_8252[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (10))){
var inst_8052 = (state_8150[(8)]);
var inst_8073 = (state_8150[(2)]);
var inst_8074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8073,cljs.core.cst$kw$solos);
var inst_8075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8073,cljs.core.cst$kw$mutes);
var inst_8076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8073,cljs.core.cst$kw$reads);
var inst_8077 = inst_8052;
var state_8150__$1 = (function (){var statearr_8201 = state_8150;
(statearr_8201[(16)] = inst_8074);

(statearr_8201[(17)] = inst_8075);

(statearr_8201[(18)] = inst_8076);

(statearr_8201[(7)] = inst_8077);

return statearr_8201;
})();
var statearr_8202_8253 = state_8150__$1;
(statearr_8202_8253[(2)] = null);

(statearr_8202_8253[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (18))){
var inst_8092 = (state_8150[(2)]);
var state_8150__$1 = state_8150;
var statearr_8203_8254 = state_8150__$1;
(statearr_8203_8254[(2)] = inst_8092);

(statearr_8203_8254[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (37))){
var state_8150__$1 = state_8150;
var statearr_8204_8255 = state_8150__$1;
(statearr_8204_8255[(2)] = null);

(statearr_8204_8255[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8151 === (8))){
var inst_8052 = (state_8150[(8)]);
var inst_8070 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8052);
var state_8150__$1 = state_8150;
var statearr_8205_8256 = state_8150__$1;
(statearr_8205_8256[(2)] = inst_8070);

(statearr_8205_8256[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___8210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7047__auto__,c__7149__auto___8210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7048__auto__ = null;
var cljs$core$async$mix_$_state_machine__7048__auto____0 = (function (){
var statearr_8206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8206[(0)] = cljs$core$async$mix_$_state_machine__7048__auto__);

(statearr_8206[(1)] = (1));

return statearr_8206;
});
var cljs$core$async$mix_$_state_machine__7048__auto____1 = (function (state_8150){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_8150);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e8207){if((e8207 instanceof Object)){
var ex__7051__auto__ = e8207;
var statearr_8208_8257 = state_8150;
(statearr_8208_8257[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8150);

return cljs.core.cst$kw$recur;
} else {
throw e8207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__8258 = state_8150;
state_8150 = G__8258;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7048__auto__ = function(state_8150){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7048__auto____1.call(this,state_8150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7048__auto____0;
cljs$core$async$mix_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7048__auto____1;
return cljs$core$async$mix_$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___8210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7151__auto__ = (function (){var statearr_8209 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_8209[(6)] = c__7149__auto___8210);

return statearr_8209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___8210,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__8260 = arguments.length;
switch (G__8260) {
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__8264 = arguments.length;
switch (G__8264) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__8262_SHARP_){
if(cljs.core.truth_((p1__8262_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8262_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__8262_SHARP_.call(null,topic)))){
return p1__8262_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8262_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8265 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8266){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8266 = meta8266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8267,meta8266__$1){
var self__ = this;
var _8267__$1 = this;
return (new cljs.core.async.t_cljs$core$async8265(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8266__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8267){
var self__ = this;
var _8267__$1 = this;
return self__.meta8266;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8265.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8265.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8265.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8265.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8265.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta8266], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8265";

cljs.core.async.t_cljs$core$async8265.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8265");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8265.
 */
cljs.core.async.__GT_t_cljs$core$async8265 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8265(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8266){
return (new cljs.core.async.t_cljs$core$async8265(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8266));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8265(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7149__auto___8385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___8385,mults,ensure_mult,p){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___8385,mults,ensure_mult,p){
return (function (state_8339){
var state_val_8340 = (state_8339[(1)]);
if((state_val_8340 === (7))){
var inst_8335 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8341_8386 = state_8339__$1;
(statearr_8341_8386[(2)] = inst_8335);

(statearr_8341_8386[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (20))){
var state_8339__$1 = state_8339;
var statearr_8342_8387 = state_8339__$1;
(statearr_8342_8387[(2)] = null);

(statearr_8342_8387[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (1))){
var state_8339__$1 = state_8339;
var statearr_8343_8388 = state_8339__$1;
(statearr_8343_8388[(2)] = null);

(statearr_8343_8388[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (24))){
var inst_8318 = (state_8339[(7)]);
var inst_8327 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_8318);
var state_8339__$1 = state_8339;
var statearr_8344_8389 = state_8339__$1;
(statearr_8344_8389[(2)] = inst_8327);

(statearr_8344_8389[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (4))){
var inst_8270 = (state_8339[(8)]);
var inst_8270__$1 = (state_8339[(2)]);
var inst_8271 = (inst_8270__$1 == null);
var state_8339__$1 = (function (){var statearr_8345 = state_8339;
(statearr_8345[(8)] = inst_8270__$1);

return statearr_8345;
})();
if(cljs.core.truth_(inst_8271)){
var statearr_8346_8390 = state_8339__$1;
(statearr_8346_8390[(1)] = (5));

} else {
var statearr_8347_8391 = state_8339__$1;
(statearr_8347_8391[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (15))){
var inst_8312 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8348_8392 = state_8339__$1;
(statearr_8348_8392[(2)] = inst_8312);

(statearr_8348_8392[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (21))){
var inst_8332 = (state_8339[(2)]);
var state_8339__$1 = (function (){var statearr_8349 = state_8339;
(statearr_8349[(9)] = inst_8332);

return statearr_8349;
})();
var statearr_8350_8393 = state_8339__$1;
(statearr_8350_8393[(2)] = null);

(statearr_8350_8393[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (13))){
var inst_8294 = (state_8339[(10)]);
var inst_8296 = cljs.core.chunked_seq_QMARK_(inst_8294);
var state_8339__$1 = state_8339;
if(inst_8296){
var statearr_8351_8394 = state_8339__$1;
(statearr_8351_8394[(1)] = (16));

} else {
var statearr_8352_8395 = state_8339__$1;
(statearr_8352_8395[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (22))){
var inst_8324 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
if(cljs.core.truth_(inst_8324)){
var statearr_8353_8396 = state_8339__$1;
(statearr_8353_8396[(1)] = (23));

} else {
var statearr_8354_8397 = state_8339__$1;
(statearr_8354_8397[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (6))){
var inst_8270 = (state_8339[(8)]);
var inst_8318 = (state_8339[(7)]);
var inst_8320 = (state_8339[(11)]);
var inst_8318__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_8270) : topic_fn.call(null,inst_8270));
var inst_8319 = cljs.core.deref(mults);
var inst_8320__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8319,inst_8318__$1);
var state_8339__$1 = (function (){var statearr_8355 = state_8339;
(statearr_8355[(7)] = inst_8318__$1);

(statearr_8355[(11)] = inst_8320__$1);

return statearr_8355;
})();
if(cljs.core.truth_(inst_8320__$1)){
var statearr_8356_8398 = state_8339__$1;
(statearr_8356_8398[(1)] = (19));

} else {
var statearr_8357_8399 = state_8339__$1;
(statearr_8357_8399[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (25))){
var inst_8329 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8358_8400 = state_8339__$1;
(statearr_8358_8400[(2)] = inst_8329);

(statearr_8358_8400[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (17))){
var inst_8294 = (state_8339[(10)]);
var inst_8303 = cljs.core.first(inst_8294);
var inst_8304 = cljs.core.async.muxch_STAR_(inst_8303);
var inst_8305 = cljs.core.async.close_BANG_(inst_8304);
var inst_8306 = cljs.core.next(inst_8294);
var inst_8280 = inst_8306;
var inst_8281 = null;
var inst_8282 = (0);
var inst_8283 = (0);
var state_8339__$1 = (function (){var statearr_8359 = state_8339;
(statearr_8359[(12)] = inst_8305);

(statearr_8359[(13)] = inst_8281);

(statearr_8359[(14)] = inst_8283);

(statearr_8359[(15)] = inst_8280);

(statearr_8359[(16)] = inst_8282);

return statearr_8359;
})();
var statearr_8360_8401 = state_8339__$1;
(statearr_8360_8401[(2)] = null);

(statearr_8360_8401[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (3))){
var inst_8337 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8339__$1,inst_8337);
} else {
if((state_val_8340 === (12))){
var inst_8314 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8361_8402 = state_8339__$1;
(statearr_8361_8402[(2)] = inst_8314);

(statearr_8361_8402[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (2))){
var state_8339__$1 = state_8339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8339__$1,(4),ch);
} else {
if((state_val_8340 === (23))){
var state_8339__$1 = state_8339;
var statearr_8362_8403 = state_8339__$1;
(statearr_8362_8403[(2)] = null);

(statearr_8362_8403[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (19))){
var inst_8270 = (state_8339[(8)]);
var inst_8320 = (state_8339[(11)]);
var inst_8322 = cljs.core.async.muxch_STAR_(inst_8320);
var state_8339__$1 = state_8339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8339__$1,(22),inst_8322,inst_8270);
} else {
if((state_val_8340 === (11))){
var inst_8294 = (state_8339[(10)]);
var inst_8280 = (state_8339[(15)]);
var inst_8294__$1 = cljs.core.seq(inst_8280);
var state_8339__$1 = (function (){var statearr_8363 = state_8339;
(statearr_8363[(10)] = inst_8294__$1);

return statearr_8363;
})();
if(inst_8294__$1){
var statearr_8364_8404 = state_8339__$1;
(statearr_8364_8404[(1)] = (13));

} else {
var statearr_8365_8405 = state_8339__$1;
(statearr_8365_8405[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (9))){
var inst_8316 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8366_8406 = state_8339__$1;
(statearr_8366_8406[(2)] = inst_8316);

(statearr_8366_8406[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (5))){
var inst_8277 = cljs.core.deref(mults);
var inst_8278 = cljs.core.vals(inst_8277);
var inst_8279 = cljs.core.seq(inst_8278);
var inst_8280 = inst_8279;
var inst_8281 = null;
var inst_8282 = (0);
var inst_8283 = (0);
var state_8339__$1 = (function (){var statearr_8367 = state_8339;
(statearr_8367[(13)] = inst_8281);

(statearr_8367[(14)] = inst_8283);

(statearr_8367[(15)] = inst_8280);

(statearr_8367[(16)] = inst_8282);

return statearr_8367;
})();
var statearr_8368_8407 = state_8339__$1;
(statearr_8368_8407[(2)] = null);

(statearr_8368_8407[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (14))){
var state_8339__$1 = state_8339;
var statearr_8372_8408 = state_8339__$1;
(statearr_8372_8408[(2)] = null);

(statearr_8372_8408[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (16))){
var inst_8294 = (state_8339[(10)]);
var inst_8298 = cljs.core.chunk_first(inst_8294);
var inst_8299 = cljs.core.chunk_rest(inst_8294);
var inst_8300 = cljs.core.count(inst_8298);
var inst_8280 = inst_8299;
var inst_8281 = inst_8298;
var inst_8282 = inst_8300;
var inst_8283 = (0);
var state_8339__$1 = (function (){var statearr_8373 = state_8339;
(statearr_8373[(13)] = inst_8281);

(statearr_8373[(14)] = inst_8283);

(statearr_8373[(15)] = inst_8280);

(statearr_8373[(16)] = inst_8282);

return statearr_8373;
})();
var statearr_8374_8409 = state_8339__$1;
(statearr_8374_8409[(2)] = null);

(statearr_8374_8409[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (10))){
var inst_8281 = (state_8339[(13)]);
var inst_8283 = (state_8339[(14)]);
var inst_8280 = (state_8339[(15)]);
var inst_8282 = (state_8339[(16)]);
var inst_8288 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8281,inst_8283);
var inst_8289 = cljs.core.async.muxch_STAR_(inst_8288);
var inst_8290 = cljs.core.async.close_BANG_(inst_8289);
var inst_8291 = (inst_8283 + (1));
var tmp8369 = inst_8281;
var tmp8370 = inst_8280;
var tmp8371 = inst_8282;
var inst_8280__$1 = tmp8370;
var inst_8281__$1 = tmp8369;
var inst_8282__$1 = tmp8371;
var inst_8283__$1 = inst_8291;
var state_8339__$1 = (function (){var statearr_8375 = state_8339;
(statearr_8375[(17)] = inst_8290);

(statearr_8375[(13)] = inst_8281__$1);

(statearr_8375[(14)] = inst_8283__$1);

(statearr_8375[(15)] = inst_8280__$1);

(statearr_8375[(16)] = inst_8282__$1);

return statearr_8375;
})();
var statearr_8376_8410 = state_8339__$1;
(statearr_8376_8410[(2)] = null);

(statearr_8376_8410[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (18))){
var inst_8309 = (state_8339[(2)]);
var state_8339__$1 = state_8339;
var statearr_8377_8411 = state_8339__$1;
(statearr_8377_8411[(2)] = inst_8309);

(statearr_8377_8411[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8340 === (8))){
var inst_8283 = (state_8339[(14)]);
var inst_8282 = (state_8339[(16)]);
var inst_8285 = (inst_8283 < inst_8282);
var inst_8286 = inst_8285;
var state_8339__$1 = state_8339;
if(cljs.core.truth_(inst_8286)){
var statearr_8378_8412 = state_8339__$1;
(statearr_8378_8412[(1)] = (10));

} else {
var statearr_8379_8413 = state_8339__$1;
(statearr_8379_8413[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___8385,mults,ensure_mult,p))
;
return ((function (switch__7047__auto__,c__7149__auto___8385,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_8380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8380[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_8380[(1)] = (1));

return statearr_8380;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_8339){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_8339);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e8381){if((e8381 instanceof Object)){
var ex__7051__auto__ = e8381;
var statearr_8382_8414 = state_8339;
(statearr_8382_8414[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8339);

return cljs.core.cst$kw$recur;
} else {
throw e8381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__8415 = state_8339;
state_8339 = G__8415;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_8339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_8339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___8385,mults,ensure_mult,p))
})();
var state__7151__auto__ = (function (){var statearr_8383 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_8383[(6)] = c__7149__auto___8385);

return statearr_8383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___8385,mults,ensure_mult,p))
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
var G__8417 = arguments.length;
switch (G__8417) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__8420 = arguments.length;
switch (G__8420) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__8423 = arguments.length;
switch (G__8423) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__7149__auto___8490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___8490,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___8490,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8462){
var state_val_8463 = (state_8462[(1)]);
if((state_val_8463 === (7))){
var state_8462__$1 = state_8462;
var statearr_8464_8491 = state_8462__$1;
(statearr_8464_8491[(2)] = null);

(statearr_8464_8491[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (1))){
var state_8462__$1 = state_8462;
var statearr_8465_8492 = state_8462__$1;
(statearr_8465_8492[(2)] = null);

(statearr_8465_8492[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (4))){
var inst_8426 = (state_8462[(7)]);
var inst_8428 = (inst_8426 < cnt);
var state_8462__$1 = state_8462;
if(cljs.core.truth_(inst_8428)){
var statearr_8466_8493 = state_8462__$1;
(statearr_8466_8493[(1)] = (6));

} else {
var statearr_8467_8494 = state_8462__$1;
(statearr_8467_8494[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (15))){
var inst_8458 = (state_8462[(2)]);
var state_8462__$1 = state_8462;
var statearr_8468_8495 = state_8462__$1;
(statearr_8468_8495[(2)] = inst_8458);

(statearr_8468_8495[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (13))){
var inst_8451 = cljs.core.async.close_BANG_(out);
var state_8462__$1 = state_8462;
var statearr_8469_8496 = state_8462__$1;
(statearr_8469_8496[(2)] = inst_8451);

(statearr_8469_8496[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (6))){
var state_8462__$1 = state_8462;
var statearr_8470_8497 = state_8462__$1;
(statearr_8470_8497[(2)] = null);

(statearr_8470_8497[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (3))){
var inst_8460 = (state_8462[(2)]);
var state_8462__$1 = state_8462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8462__$1,inst_8460);
} else {
if((state_val_8463 === (12))){
var inst_8448 = (state_8462[(8)]);
var inst_8448__$1 = (state_8462[(2)]);
var inst_8449 = cljs.core.some(cljs.core.nil_QMARK_,inst_8448__$1);
var state_8462__$1 = (function (){var statearr_8471 = state_8462;
(statearr_8471[(8)] = inst_8448__$1);

return statearr_8471;
})();
if(cljs.core.truth_(inst_8449)){
var statearr_8472_8498 = state_8462__$1;
(statearr_8472_8498[(1)] = (13));

} else {
var statearr_8473_8499 = state_8462__$1;
(statearr_8473_8499[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (2))){
var inst_8425 = cljs.core.reset_BANG_(dctr,cnt);
var inst_8426 = (0);
var state_8462__$1 = (function (){var statearr_8474 = state_8462;
(statearr_8474[(9)] = inst_8425);

(statearr_8474[(7)] = inst_8426);

return statearr_8474;
})();
var statearr_8475_8500 = state_8462__$1;
(statearr_8475_8500[(2)] = null);

(statearr_8475_8500[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (11))){
var inst_8426 = (state_8462[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_8462,(10),Object,null,(9));
var inst_8435 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_8426) : chs__$1.call(null,inst_8426));
var inst_8436 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_8426) : done.call(null,inst_8426));
var inst_8437 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_8435,inst_8436);
var state_8462__$1 = state_8462;
var statearr_8476_8501 = state_8462__$1;
(statearr_8476_8501[(2)] = inst_8437);


cljs.core.async.impl.ioc_helpers.process_exception(state_8462__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (9))){
var inst_8426 = (state_8462[(7)]);
var inst_8439 = (state_8462[(2)]);
var inst_8440 = (inst_8426 + (1));
var inst_8426__$1 = inst_8440;
var state_8462__$1 = (function (){var statearr_8477 = state_8462;
(statearr_8477[(10)] = inst_8439);

(statearr_8477[(7)] = inst_8426__$1);

return statearr_8477;
})();
var statearr_8478_8502 = state_8462__$1;
(statearr_8478_8502[(2)] = null);

(statearr_8478_8502[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (5))){
var inst_8446 = (state_8462[(2)]);
var state_8462__$1 = (function (){var statearr_8479 = state_8462;
(statearr_8479[(11)] = inst_8446);

return statearr_8479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8462__$1,(12),dchan);
} else {
if((state_val_8463 === (14))){
var inst_8448 = (state_8462[(8)]);
var inst_8453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_8448);
var state_8462__$1 = state_8462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8462__$1,(16),out,inst_8453);
} else {
if((state_val_8463 === (16))){
var inst_8455 = (state_8462[(2)]);
var state_8462__$1 = (function (){var statearr_8480 = state_8462;
(statearr_8480[(12)] = inst_8455);

return statearr_8480;
})();
var statearr_8481_8503 = state_8462__$1;
(statearr_8481_8503[(2)] = null);

(statearr_8481_8503[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (10))){
var inst_8430 = (state_8462[(2)]);
var inst_8431 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_8462__$1 = (function (){var statearr_8482 = state_8462;
(statearr_8482[(13)] = inst_8430);

return statearr_8482;
})();
var statearr_8483_8504 = state_8462__$1;
(statearr_8483_8504[(2)] = inst_8431);


cljs.core.async.impl.ioc_helpers.process_exception(state_8462__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_8463 === (8))){
var inst_8444 = (state_8462[(2)]);
var state_8462__$1 = state_8462;
var statearr_8484_8505 = state_8462__$1;
(statearr_8484_8505[(2)] = inst_8444);

(statearr_8484_8505[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___8490,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7047__auto__,c__7149__auto___8490,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_8485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8485[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_8485[(1)] = (1));

return statearr_8485;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_8462){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_8462);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e8486){if((e8486 instanceof Object)){
var ex__7051__auto__ = e8486;
var statearr_8487_8506 = state_8462;
(statearr_8487_8506[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8462);

return cljs.core.cst$kw$recur;
} else {
throw e8486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__8507 = state_8462;
state_8462 = G__8507;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_8462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_8462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___8490,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7151__auto__ = (function (){var statearr_8488 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_8488[(6)] = c__7149__auto___8490);

return statearr_8488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___8490,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__8510 = arguments.length;
switch (G__8510) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7149__auto___8564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___8564,out){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___8564,out){
return (function (state_8542){
var state_val_8543 = (state_8542[(1)]);
if((state_val_8543 === (7))){
var inst_8521 = (state_8542[(7)]);
var inst_8522 = (state_8542[(8)]);
var inst_8521__$1 = (state_8542[(2)]);
var inst_8522__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8521__$1,(0),null);
var inst_8523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8521__$1,(1),null);
var inst_8524 = (inst_8522__$1 == null);
var state_8542__$1 = (function (){var statearr_8544 = state_8542;
(statearr_8544[(9)] = inst_8523);

(statearr_8544[(7)] = inst_8521__$1);

(statearr_8544[(8)] = inst_8522__$1);

return statearr_8544;
})();
if(cljs.core.truth_(inst_8524)){
var statearr_8545_8565 = state_8542__$1;
(statearr_8545_8565[(1)] = (8));

} else {
var statearr_8546_8566 = state_8542__$1;
(statearr_8546_8566[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8543 === (1))){
var inst_8511 = cljs.core.vec(chs);
var inst_8512 = inst_8511;
var state_8542__$1 = (function (){var statearr_8547 = state_8542;
(statearr_8547[(10)] = inst_8512);

return statearr_8547;
})();
var statearr_8548_8567 = state_8542__$1;
(statearr_8548_8567[(2)] = null);

(statearr_8548_8567[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8543 === (4))){
var inst_8512 = (state_8542[(10)]);
var state_8542__$1 = state_8542;
return cljs.core.async.ioc_alts_BANG_(state_8542__$1,(7),inst_8512);
} else {
if((state_val_8543 === (6))){
var inst_8538 = (state_8542[(2)]);
var state_8542__$1 = state_8542;
var statearr_8549_8568 = state_8542__$1;
(statearr_8549_8568[(2)] = inst_8538);

(statearr_8549_8568[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8543 === (3))){
var inst_8540 = (state_8542[(2)]);
var state_8542__$1 = state_8542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8542__$1,inst_8540);
} else {
if((state_val_8543 === (2))){
var inst_8512 = (state_8542[(10)]);
var inst_8514 = cljs.core.count(inst_8512);
var inst_8515 = (inst_8514 > (0));
var state_8542__$1 = state_8542;
if(cljs.core.truth_(inst_8515)){
var statearr_8551_8569 = state_8542__$1;
(statearr_8551_8569[(1)] = (4));

} else {
var statearr_8552_8570 = state_8542__$1;
(statearr_8552_8570[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8543 === (11))){
var inst_8512 = (state_8542[(10)]);
var inst_8531 = (state_8542[(2)]);
var tmp8550 = inst_8512;
var inst_8512__$1 = tmp8550;
var state_8542__$1 = (function (){var statearr_8553 = state_8542;
(statearr_8553[(11)] = inst_8531);

(statearr_8553[(10)] = inst_8512__$1);

return statearr_8553;
})();
var statearr_8554_8571 = state_8542__$1;
(statearr_8554_8571[(2)] = null);

(statearr_8554_8571[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8543 === (9))){
var inst_8522 = (state_8542[(8)]);
var state_8542__$1 = state_8542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8542__$1,(11),out,inst_8522);
} else {
if((state_val_8543 === (5))){
var inst_8536 = cljs.core.async.close_BANG_(out);
var state_8542__$1 = state_8542;
var statearr_8555_8572 = state_8542__$1;
(statearr_8555_8572[(2)] = inst_8536);

(statearr_8555_8572[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8543 === (10))){
var inst_8534 = (state_8542[(2)]);
var state_8542__$1 = state_8542;
var statearr_8556_8573 = state_8542__$1;
(statearr_8556_8573[(2)] = inst_8534);

(statearr_8556_8573[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8543 === (8))){
var inst_8523 = (state_8542[(9)]);
var inst_8521 = (state_8542[(7)]);
var inst_8522 = (state_8542[(8)]);
var inst_8512 = (state_8542[(10)]);
var inst_8526 = (function (){var cs = inst_8512;
var vec__8517 = inst_8521;
var v = inst_8522;
var c = inst_8523;
return ((function (cs,vec__8517,v,c,inst_8523,inst_8521,inst_8522,inst_8512,state_val_8543,c__7149__auto___8564,out){
return (function (p1__8508_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__8508_SHARP_);
});
;})(cs,vec__8517,v,c,inst_8523,inst_8521,inst_8522,inst_8512,state_val_8543,c__7149__auto___8564,out))
})();
var inst_8527 = cljs.core.filterv(inst_8526,inst_8512);
var inst_8512__$1 = inst_8527;
var state_8542__$1 = (function (){var statearr_8557 = state_8542;
(statearr_8557[(10)] = inst_8512__$1);

return statearr_8557;
})();
var statearr_8558_8574 = state_8542__$1;
(statearr_8558_8574[(2)] = null);

(statearr_8558_8574[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___8564,out))
;
return ((function (switch__7047__auto__,c__7149__auto___8564,out){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_8559 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8559[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_8559[(1)] = (1));

return statearr_8559;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_8542){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_8542);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e8560){if((e8560 instanceof Object)){
var ex__7051__auto__ = e8560;
var statearr_8561_8575 = state_8542;
(statearr_8561_8575[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8542);

return cljs.core.cst$kw$recur;
} else {
throw e8560;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__8576 = state_8542;
state_8542 = G__8576;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_8542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_8542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___8564,out))
})();
var state__7151__auto__ = (function (){var statearr_8562 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_8562[(6)] = c__7149__auto___8564);

return statearr_8562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___8564,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__8578 = arguments.length;
switch (G__8578) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7149__auto___8623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___8623,out){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___8623,out){
return (function (state_8602){
var state_val_8603 = (state_8602[(1)]);
if((state_val_8603 === (7))){
var inst_8584 = (state_8602[(7)]);
var inst_8584__$1 = (state_8602[(2)]);
var inst_8585 = (inst_8584__$1 == null);
var inst_8586 = cljs.core.not(inst_8585);
var state_8602__$1 = (function (){var statearr_8604 = state_8602;
(statearr_8604[(7)] = inst_8584__$1);

return statearr_8604;
})();
if(inst_8586){
var statearr_8605_8624 = state_8602__$1;
(statearr_8605_8624[(1)] = (8));

} else {
var statearr_8606_8625 = state_8602__$1;
(statearr_8606_8625[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8603 === (1))){
var inst_8579 = (0);
var state_8602__$1 = (function (){var statearr_8607 = state_8602;
(statearr_8607[(8)] = inst_8579);

return statearr_8607;
})();
var statearr_8608_8626 = state_8602__$1;
(statearr_8608_8626[(2)] = null);

(statearr_8608_8626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8603 === (4))){
var state_8602__$1 = state_8602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8602__$1,(7),ch);
} else {
if((state_val_8603 === (6))){
var inst_8597 = (state_8602[(2)]);
var state_8602__$1 = state_8602;
var statearr_8609_8627 = state_8602__$1;
(statearr_8609_8627[(2)] = inst_8597);

(statearr_8609_8627[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8603 === (3))){
var inst_8599 = (state_8602[(2)]);
var inst_8600 = cljs.core.async.close_BANG_(out);
var state_8602__$1 = (function (){var statearr_8610 = state_8602;
(statearr_8610[(9)] = inst_8599);

return statearr_8610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8602__$1,inst_8600);
} else {
if((state_val_8603 === (2))){
var inst_8579 = (state_8602[(8)]);
var inst_8581 = (inst_8579 < n);
var state_8602__$1 = state_8602;
if(cljs.core.truth_(inst_8581)){
var statearr_8611_8628 = state_8602__$1;
(statearr_8611_8628[(1)] = (4));

} else {
var statearr_8612_8629 = state_8602__$1;
(statearr_8612_8629[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8603 === (11))){
var inst_8579 = (state_8602[(8)]);
var inst_8589 = (state_8602[(2)]);
var inst_8590 = (inst_8579 + (1));
var inst_8579__$1 = inst_8590;
var state_8602__$1 = (function (){var statearr_8613 = state_8602;
(statearr_8613[(10)] = inst_8589);

(statearr_8613[(8)] = inst_8579__$1);

return statearr_8613;
})();
var statearr_8614_8630 = state_8602__$1;
(statearr_8614_8630[(2)] = null);

(statearr_8614_8630[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8603 === (9))){
var state_8602__$1 = state_8602;
var statearr_8615_8631 = state_8602__$1;
(statearr_8615_8631[(2)] = null);

(statearr_8615_8631[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8603 === (5))){
var state_8602__$1 = state_8602;
var statearr_8616_8632 = state_8602__$1;
(statearr_8616_8632[(2)] = null);

(statearr_8616_8632[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8603 === (10))){
var inst_8594 = (state_8602[(2)]);
var state_8602__$1 = state_8602;
var statearr_8617_8633 = state_8602__$1;
(statearr_8617_8633[(2)] = inst_8594);

(statearr_8617_8633[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8603 === (8))){
var inst_8584 = (state_8602[(7)]);
var state_8602__$1 = state_8602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8602__$1,(11),out,inst_8584);
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
});})(c__7149__auto___8623,out))
;
return ((function (switch__7047__auto__,c__7149__auto___8623,out){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_8618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8618[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_8618[(1)] = (1));

return statearr_8618;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_8602){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_8602);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e8619){if((e8619 instanceof Object)){
var ex__7051__auto__ = e8619;
var statearr_8620_8634 = state_8602;
(statearr_8620_8634[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8602);

return cljs.core.cst$kw$recur;
} else {
throw e8619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__8635 = state_8602;
state_8602 = G__8635;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_8602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_8602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___8623,out))
})();
var state__7151__auto__ = (function (){var statearr_8621 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_8621[(6)] = c__7149__auto___8623);

return statearr_8621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___8623,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async8637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8637 = (function (f,ch,meta8638){
this.f = f;
this.ch = ch;
this.meta8638 = meta8638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8639,meta8638__$1){
var self__ = this;
var _8639__$1 = this;
return (new cljs.core.async.t_cljs$core$async8637(self__.f,self__.ch,meta8638__$1));
});

cljs.core.async.t_cljs$core$async8637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8639){
var self__ = this;
var _8639__$1 = this;
return self__.meta8638;
});

cljs.core.async.t_cljs$core$async8637.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8637.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async8637.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async8640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8640 = (function (f,ch,meta8638,_,fn1,meta8641){
this.f = f;
this.ch = ch;
this.meta8638 = meta8638;
this._ = _;
this.fn1 = fn1;
this.meta8641 = meta8641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8642,meta8641__$1){
var self__ = this;
var _8642__$1 = this;
return (new cljs.core.async.t_cljs$core$async8640(self__.f,self__.ch,self__.meta8638,self__._,self__.fn1,meta8641__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8642){
var self__ = this;
var _8642__$1 = this;
return self__.meta8641;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8640.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8640.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8636_SHARP_){
var G__8643 = (((p1__8636_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__8636_SHARP_) : self__.f.call(null,p1__8636_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__8643) : f1.call(null,G__8643));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8640.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8638,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async8637], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta8641], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8640.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8640";

cljs.core.async.t_cljs$core$async8640.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8640");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8640.
 */
cljs.core.async.__GT_t_cljs$core$async8640 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8640(f__$1,ch__$1,meta8638__$1,___$2,fn1__$1,meta8641){
return (new cljs.core.async.t_cljs$core$async8640(f__$1,ch__$1,meta8638__$1,___$2,fn1__$1,meta8641));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8640(self__.f,self__.ch,self__.meta8638,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__8644 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__8644) : self__.f.call(null,G__8644));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async8637.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8638], null);
});

cljs.core.async.t_cljs$core$async8637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8637";

cljs.core.async.t_cljs$core$async8637.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8637");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8637.
 */
cljs.core.async.__GT_t_cljs$core$async8637 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8637(f__$1,ch__$1,meta8638){
return (new cljs.core.async.t_cljs$core$async8637(f__$1,ch__$1,meta8638));
});

}

return (new cljs.core.async.t_cljs$core$async8637(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async8645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8645 = (function (f,ch,meta8646){
this.f = f;
this.ch = ch;
this.meta8646 = meta8646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8647,meta8646__$1){
var self__ = this;
var _8647__$1 = this;
return (new cljs.core.async.t_cljs$core$async8645(self__.f,self__.ch,meta8646__$1));
});

cljs.core.async.t_cljs$core$async8645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8647){
var self__ = this;
var _8647__$1 = this;
return self__.meta8646;
});

cljs.core.async.t_cljs$core$async8645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async8645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8646], null);
});

cljs.core.async.t_cljs$core$async8645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8645";

cljs.core.async.t_cljs$core$async8645.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8645");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8645.
 */
cljs.core.async.__GT_t_cljs$core$async8645 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8645(f__$1,ch__$1,meta8646){
return (new cljs.core.async.t_cljs$core$async8645(f__$1,ch__$1,meta8646));
});

}

return (new cljs.core.async.t_cljs$core$async8645(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async8648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8648 = (function (p,ch,meta8649){
this.p = p;
this.ch = ch;
this.meta8649 = meta8649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8650,meta8649__$1){
var self__ = this;
var _8650__$1 = this;
return (new cljs.core.async.t_cljs$core$async8648(self__.p,self__.ch,meta8649__$1));
});

cljs.core.async.t_cljs$core$async8648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8650){
var self__ = this;
var _8650__$1 = this;
return self__.meta8649;
});

cljs.core.async.t_cljs$core$async8648.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async8648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async8648.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8648.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta8649], null);
});

cljs.core.async.t_cljs$core$async8648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8648";

cljs.core.async.t_cljs$core$async8648.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async8648");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8648.
 */
cljs.core.async.__GT_t_cljs$core$async8648 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8648(p__$1,ch__$1,meta8649){
return (new cljs.core.async.t_cljs$core$async8648(p__$1,ch__$1,meta8649));
});

}

return (new cljs.core.async.t_cljs$core$async8648(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__8652 = arguments.length;
switch (G__8652) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7149__auto___8692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___8692,out){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___8692,out){
return (function (state_8673){
var state_val_8674 = (state_8673[(1)]);
if((state_val_8674 === (7))){
var inst_8669 = (state_8673[(2)]);
var state_8673__$1 = state_8673;
var statearr_8675_8693 = state_8673__$1;
(statearr_8675_8693[(2)] = inst_8669);

(statearr_8675_8693[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8674 === (1))){
var state_8673__$1 = state_8673;
var statearr_8676_8694 = state_8673__$1;
(statearr_8676_8694[(2)] = null);

(statearr_8676_8694[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8674 === (4))){
var inst_8655 = (state_8673[(7)]);
var inst_8655__$1 = (state_8673[(2)]);
var inst_8656 = (inst_8655__$1 == null);
var state_8673__$1 = (function (){var statearr_8677 = state_8673;
(statearr_8677[(7)] = inst_8655__$1);

return statearr_8677;
})();
if(cljs.core.truth_(inst_8656)){
var statearr_8678_8695 = state_8673__$1;
(statearr_8678_8695[(1)] = (5));

} else {
var statearr_8679_8696 = state_8673__$1;
(statearr_8679_8696[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8674 === (6))){
var inst_8655 = (state_8673[(7)]);
var inst_8660 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_8655) : p.call(null,inst_8655));
var state_8673__$1 = state_8673;
if(cljs.core.truth_(inst_8660)){
var statearr_8680_8697 = state_8673__$1;
(statearr_8680_8697[(1)] = (8));

} else {
var statearr_8681_8698 = state_8673__$1;
(statearr_8681_8698[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8674 === (3))){
var inst_8671 = (state_8673[(2)]);
var state_8673__$1 = state_8673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8673__$1,inst_8671);
} else {
if((state_val_8674 === (2))){
var state_8673__$1 = state_8673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8673__$1,(4),ch);
} else {
if((state_val_8674 === (11))){
var inst_8663 = (state_8673[(2)]);
var state_8673__$1 = state_8673;
var statearr_8682_8699 = state_8673__$1;
(statearr_8682_8699[(2)] = inst_8663);

(statearr_8682_8699[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8674 === (9))){
var state_8673__$1 = state_8673;
var statearr_8683_8700 = state_8673__$1;
(statearr_8683_8700[(2)] = null);

(statearr_8683_8700[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8674 === (5))){
var inst_8658 = cljs.core.async.close_BANG_(out);
var state_8673__$1 = state_8673;
var statearr_8684_8701 = state_8673__$1;
(statearr_8684_8701[(2)] = inst_8658);

(statearr_8684_8701[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8674 === (10))){
var inst_8666 = (state_8673[(2)]);
var state_8673__$1 = (function (){var statearr_8685 = state_8673;
(statearr_8685[(8)] = inst_8666);

return statearr_8685;
})();
var statearr_8686_8702 = state_8673__$1;
(statearr_8686_8702[(2)] = null);

(statearr_8686_8702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8674 === (8))){
var inst_8655 = (state_8673[(7)]);
var state_8673__$1 = state_8673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8673__$1,(11),out,inst_8655);
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
});})(c__7149__auto___8692,out))
;
return ((function (switch__7047__auto__,c__7149__auto___8692,out){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_8687 = [null,null,null,null,null,null,null,null,null];
(statearr_8687[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_8687[(1)] = (1));

return statearr_8687;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_8673){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_8673);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e8688){if((e8688 instanceof Object)){
var ex__7051__auto__ = e8688;
var statearr_8689_8703 = state_8673;
(statearr_8689_8703[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8673);

return cljs.core.cst$kw$recur;
} else {
throw e8688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__8704 = state_8673;
state_8673 = G__8704;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_8673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_8673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___8692,out))
})();
var state__7151__auto__ = (function (){var statearr_8690 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_8690[(6)] = c__7149__auto___8692);

return statearr_8690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___8692,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8706 = arguments.length;
switch (G__8706) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7149__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto__){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto__){
return (function (state_8769){
var state_val_8770 = (state_8769[(1)]);
if((state_val_8770 === (7))){
var inst_8765 = (state_8769[(2)]);
var state_8769__$1 = state_8769;
var statearr_8771_8809 = state_8769__$1;
(statearr_8771_8809[(2)] = inst_8765);

(statearr_8771_8809[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (20))){
var inst_8735 = (state_8769[(7)]);
var inst_8746 = (state_8769[(2)]);
var inst_8747 = cljs.core.next(inst_8735);
var inst_8721 = inst_8747;
var inst_8722 = null;
var inst_8723 = (0);
var inst_8724 = (0);
var state_8769__$1 = (function (){var statearr_8772 = state_8769;
(statearr_8772[(8)] = inst_8722);

(statearr_8772[(9)] = inst_8724);

(statearr_8772[(10)] = inst_8746);

(statearr_8772[(11)] = inst_8721);

(statearr_8772[(12)] = inst_8723);

return statearr_8772;
})();
var statearr_8773_8810 = state_8769__$1;
(statearr_8773_8810[(2)] = null);

(statearr_8773_8810[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (1))){
var state_8769__$1 = state_8769;
var statearr_8774_8811 = state_8769__$1;
(statearr_8774_8811[(2)] = null);

(statearr_8774_8811[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (4))){
var inst_8710 = (state_8769[(13)]);
var inst_8710__$1 = (state_8769[(2)]);
var inst_8711 = (inst_8710__$1 == null);
var state_8769__$1 = (function (){var statearr_8775 = state_8769;
(statearr_8775[(13)] = inst_8710__$1);

return statearr_8775;
})();
if(cljs.core.truth_(inst_8711)){
var statearr_8776_8812 = state_8769__$1;
(statearr_8776_8812[(1)] = (5));

} else {
var statearr_8777_8813 = state_8769__$1;
(statearr_8777_8813[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (15))){
var state_8769__$1 = state_8769;
var statearr_8781_8814 = state_8769__$1;
(statearr_8781_8814[(2)] = null);

(statearr_8781_8814[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (21))){
var state_8769__$1 = state_8769;
var statearr_8782_8815 = state_8769__$1;
(statearr_8782_8815[(2)] = null);

(statearr_8782_8815[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (13))){
var inst_8722 = (state_8769[(8)]);
var inst_8724 = (state_8769[(9)]);
var inst_8721 = (state_8769[(11)]);
var inst_8723 = (state_8769[(12)]);
var inst_8731 = (state_8769[(2)]);
var inst_8732 = (inst_8724 + (1));
var tmp8778 = inst_8722;
var tmp8779 = inst_8721;
var tmp8780 = inst_8723;
var inst_8721__$1 = tmp8779;
var inst_8722__$1 = tmp8778;
var inst_8723__$1 = tmp8780;
var inst_8724__$1 = inst_8732;
var state_8769__$1 = (function (){var statearr_8783 = state_8769;
(statearr_8783[(8)] = inst_8722__$1);

(statearr_8783[(9)] = inst_8724__$1);

(statearr_8783[(14)] = inst_8731);

(statearr_8783[(11)] = inst_8721__$1);

(statearr_8783[(12)] = inst_8723__$1);

return statearr_8783;
})();
var statearr_8784_8816 = state_8769__$1;
(statearr_8784_8816[(2)] = null);

(statearr_8784_8816[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (22))){
var state_8769__$1 = state_8769;
var statearr_8785_8817 = state_8769__$1;
(statearr_8785_8817[(2)] = null);

(statearr_8785_8817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (6))){
var inst_8710 = (state_8769[(13)]);
var inst_8719 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_8710) : f.call(null,inst_8710));
var inst_8720 = cljs.core.seq(inst_8719);
var inst_8721 = inst_8720;
var inst_8722 = null;
var inst_8723 = (0);
var inst_8724 = (0);
var state_8769__$1 = (function (){var statearr_8786 = state_8769;
(statearr_8786[(8)] = inst_8722);

(statearr_8786[(9)] = inst_8724);

(statearr_8786[(11)] = inst_8721);

(statearr_8786[(12)] = inst_8723);

return statearr_8786;
})();
var statearr_8787_8818 = state_8769__$1;
(statearr_8787_8818[(2)] = null);

(statearr_8787_8818[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (17))){
var inst_8735 = (state_8769[(7)]);
var inst_8739 = cljs.core.chunk_first(inst_8735);
var inst_8740 = cljs.core.chunk_rest(inst_8735);
var inst_8741 = cljs.core.count(inst_8739);
var inst_8721 = inst_8740;
var inst_8722 = inst_8739;
var inst_8723 = inst_8741;
var inst_8724 = (0);
var state_8769__$1 = (function (){var statearr_8788 = state_8769;
(statearr_8788[(8)] = inst_8722);

(statearr_8788[(9)] = inst_8724);

(statearr_8788[(11)] = inst_8721);

(statearr_8788[(12)] = inst_8723);

return statearr_8788;
})();
var statearr_8789_8819 = state_8769__$1;
(statearr_8789_8819[(2)] = null);

(statearr_8789_8819[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (3))){
var inst_8767 = (state_8769[(2)]);
var state_8769__$1 = state_8769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8769__$1,inst_8767);
} else {
if((state_val_8770 === (12))){
var inst_8755 = (state_8769[(2)]);
var state_8769__$1 = state_8769;
var statearr_8790_8820 = state_8769__$1;
(statearr_8790_8820[(2)] = inst_8755);

(statearr_8790_8820[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (2))){
var state_8769__$1 = state_8769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8769__$1,(4),in$);
} else {
if((state_val_8770 === (23))){
var inst_8763 = (state_8769[(2)]);
var state_8769__$1 = state_8769;
var statearr_8791_8821 = state_8769__$1;
(statearr_8791_8821[(2)] = inst_8763);

(statearr_8791_8821[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (19))){
var inst_8750 = (state_8769[(2)]);
var state_8769__$1 = state_8769;
var statearr_8792_8822 = state_8769__$1;
(statearr_8792_8822[(2)] = inst_8750);

(statearr_8792_8822[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (11))){
var inst_8735 = (state_8769[(7)]);
var inst_8721 = (state_8769[(11)]);
var inst_8735__$1 = cljs.core.seq(inst_8721);
var state_8769__$1 = (function (){var statearr_8793 = state_8769;
(statearr_8793[(7)] = inst_8735__$1);

return statearr_8793;
})();
if(inst_8735__$1){
var statearr_8794_8823 = state_8769__$1;
(statearr_8794_8823[(1)] = (14));

} else {
var statearr_8795_8824 = state_8769__$1;
(statearr_8795_8824[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (9))){
var inst_8757 = (state_8769[(2)]);
var inst_8758 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_8769__$1 = (function (){var statearr_8796 = state_8769;
(statearr_8796[(15)] = inst_8757);

return statearr_8796;
})();
if(cljs.core.truth_(inst_8758)){
var statearr_8797_8825 = state_8769__$1;
(statearr_8797_8825[(1)] = (21));

} else {
var statearr_8798_8826 = state_8769__$1;
(statearr_8798_8826[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (5))){
var inst_8713 = cljs.core.async.close_BANG_(out);
var state_8769__$1 = state_8769;
var statearr_8799_8827 = state_8769__$1;
(statearr_8799_8827[(2)] = inst_8713);

(statearr_8799_8827[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (14))){
var inst_8735 = (state_8769[(7)]);
var inst_8737 = cljs.core.chunked_seq_QMARK_(inst_8735);
var state_8769__$1 = state_8769;
if(inst_8737){
var statearr_8800_8828 = state_8769__$1;
(statearr_8800_8828[(1)] = (17));

} else {
var statearr_8801_8829 = state_8769__$1;
(statearr_8801_8829[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (16))){
var inst_8753 = (state_8769[(2)]);
var state_8769__$1 = state_8769;
var statearr_8802_8830 = state_8769__$1;
(statearr_8802_8830[(2)] = inst_8753);

(statearr_8802_8830[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8770 === (10))){
var inst_8722 = (state_8769[(8)]);
var inst_8724 = (state_8769[(9)]);
var inst_8729 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8722,inst_8724);
var state_8769__$1 = state_8769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8769__$1,(13),out,inst_8729);
} else {
if((state_val_8770 === (18))){
var inst_8735 = (state_8769[(7)]);
var inst_8744 = cljs.core.first(inst_8735);
var state_8769__$1 = state_8769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8769__$1,(20),out,inst_8744);
} else {
if((state_val_8770 === (8))){
var inst_8724 = (state_8769[(9)]);
var inst_8723 = (state_8769[(12)]);
var inst_8726 = (inst_8724 < inst_8723);
var inst_8727 = inst_8726;
var state_8769__$1 = state_8769;
if(cljs.core.truth_(inst_8727)){
var statearr_8803_8831 = state_8769__$1;
(statearr_8803_8831[(1)] = (10));

} else {
var statearr_8804_8832 = state_8769__$1;
(statearr_8804_8832[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__7149__auto__))
;
return ((function (switch__7047__auto__,c__7149__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7048__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7048__auto____0 = (function (){
var statearr_8805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8805[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7048__auto__);

(statearr_8805[(1)] = (1));

return statearr_8805;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7048__auto____1 = (function (state_8769){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_8769);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e8806){if((e8806 instanceof Object)){
var ex__7051__auto__ = e8806;
var statearr_8807_8833 = state_8769;
(statearr_8807_8833[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8769);

return cljs.core.cst$kw$recur;
} else {
throw e8806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__8834 = state_8769;
state_8769 = G__8834;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7048__auto__ = function(state_8769){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7048__auto____1.call(this,state_8769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7048__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7048__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto__))
})();
var state__7151__auto__ = (function (){var statearr_8808 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_8808[(6)] = c__7149__auto__);

return statearr_8808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto__))
);

return c__7149__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__8836 = arguments.length;
switch (G__8836) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__8839 = arguments.length;
switch (G__8839) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__8842 = arguments.length;
switch (G__8842) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7149__auto___8889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___8889,out){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___8889,out){
return (function (state_8866){
var state_val_8867 = (state_8866[(1)]);
if((state_val_8867 === (7))){
var inst_8861 = (state_8866[(2)]);
var state_8866__$1 = state_8866;
var statearr_8868_8890 = state_8866__$1;
(statearr_8868_8890[(2)] = inst_8861);

(statearr_8868_8890[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8867 === (1))){
var inst_8843 = null;
var state_8866__$1 = (function (){var statearr_8869 = state_8866;
(statearr_8869[(7)] = inst_8843);

return statearr_8869;
})();
var statearr_8870_8891 = state_8866__$1;
(statearr_8870_8891[(2)] = null);

(statearr_8870_8891[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8867 === (4))){
var inst_8846 = (state_8866[(8)]);
var inst_8846__$1 = (state_8866[(2)]);
var inst_8847 = (inst_8846__$1 == null);
var inst_8848 = cljs.core.not(inst_8847);
var state_8866__$1 = (function (){var statearr_8871 = state_8866;
(statearr_8871[(8)] = inst_8846__$1);

return statearr_8871;
})();
if(inst_8848){
var statearr_8872_8892 = state_8866__$1;
(statearr_8872_8892[(1)] = (5));

} else {
var statearr_8873_8893 = state_8866__$1;
(statearr_8873_8893[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8867 === (6))){
var state_8866__$1 = state_8866;
var statearr_8874_8894 = state_8866__$1;
(statearr_8874_8894[(2)] = null);

(statearr_8874_8894[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8867 === (3))){
var inst_8863 = (state_8866[(2)]);
var inst_8864 = cljs.core.async.close_BANG_(out);
var state_8866__$1 = (function (){var statearr_8875 = state_8866;
(statearr_8875[(9)] = inst_8863);

return statearr_8875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8866__$1,inst_8864);
} else {
if((state_val_8867 === (2))){
var state_8866__$1 = state_8866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8866__$1,(4),ch);
} else {
if((state_val_8867 === (11))){
var inst_8846 = (state_8866[(8)]);
var inst_8855 = (state_8866[(2)]);
var inst_8843 = inst_8846;
var state_8866__$1 = (function (){var statearr_8876 = state_8866;
(statearr_8876[(7)] = inst_8843);

(statearr_8876[(10)] = inst_8855);

return statearr_8876;
})();
var statearr_8877_8895 = state_8866__$1;
(statearr_8877_8895[(2)] = null);

(statearr_8877_8895[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8867 === (9))){
var inst_8846 = (state_8866[(8)]);
var state_8866__$1 = state_8866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8866__$1,(11),out,inst_8846);
} else {
if((state_val_8867 === (5))){
var inst_8846 = (state_8866[(8)]);
var inst_8843 = (state_8866[(7)]);
var inst_8850 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8846,inst_8843);
var state_8866__$1 = state_8866;
if(inst_8850){
var statearr_8879_8896 = state_8866__$1;
(statearr_8879_8896[(1)] = (8));

} else {
var statearr_8880_8897 = state_8866__$1;
(statearr_8880_8897[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8867 === (10))){
var inst_8858 = (state_8866[(2)]);
var state_8866__$1 = state_8866;
var statearr_8881_8898 = state_8866__$1;
(statearr_8881_8898[(2)] = inst_8858);

(statearr_8881_8898[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8867 === (8))){
var inst_8843 = (state_8866[(7)]);
var tmp8878 = inst_8843;
var inst_8843__$1 = tmp8878;
var state_8866__$1 = (function (){var statearr_8882 = state_8866;
(statearr_8882[(7)] = inst_8843__$1);

return statearr_8882;
})();
var statearr_8883_8899 = state_8866__$1;
(statearr_8883_8899[(2)] = null);

(statearr_8883_8899[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___8889,out))
;
return ((function (switch__7047__auto__,c__7149__auto___8889,out){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_8884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8884[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_8884[(1)] = (1));

return statearr_8884;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_8866){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_8866);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e8885){if((e8885 instanceof Object)){
var ex__7051__auto__ = e8885;
var statearr_8886_8900 = state_8866;
(statearr_8886_8900[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8866);

return cljs.core.cst$kw$recur;
} else {
throw e8885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__8901 = state_8866;
state_8866 = G__8901;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_8866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_8866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___8889,out))
})();
var state__7151__auto__ = (function (){var statearr_8887 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_8887[(6)] = c__7149__auto___8889);

return statearr_8887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___8889,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__8903 = arguments.length;
switch (G__8903) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7149__auto___8969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___8969,out){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___8969,out){
return (function (state_8941){
var state_val_8942 = (state_8941[(1)]);
if((state_val_8942 === (7))){
var inst_8937 = (state_8941[(2)]);
var state_8941__$1 = state_8941;
var statearr_8943_8970 = state_8941__$1;
(statearr_8943_8970[(2)] = inst_8937);

(statearr_8943_8970[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8942 === (1))){
var inst_8904 = (new Array(n));
var inst_8905 = inst_8904;
var inst_8906 = (0);
var state_8941__$1 = (function (){var statearr_8944 = state_8941;
(statearr_8944[(7)] = inst_8905);

(statearr_8944[(8)] = inst_8906);

return statearr_8944;
})();
var statearr_8945_8971 = state_8941__$1;
(statearr_8945_8971[(2)] = null);

(statearr_8945_8971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8942 === (4))){
var inst_8909 = (state_8941[(9)]);
var inst_8909__$1 = (state_8941[(2)]);
var inst_8910 = (inst_8909__$1 == null);
var inst_8911 = cljs.core.not(inst_8910);
var state_8941__$1 = (function (){var statearr_8946 = state_8941;
(statearr_8946[(9)] = inst_8909__$1);

return statearr_8946;
})();
if(inst_8911){
var statearr_8947_8972 = state_8941__$1;
(statearr_8947_8972[(1)] = (5));

} else {
var statearr_8948_8973 = state_8941__$1;
(statearr_8948_8973[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8942 === (15))){
var inst_8931 = (state_8941[(2)]);
var state_8941__$1 = state_8941;
var statearr_8949_8974 = state_8941__$1;
(statearr_8949_8974[(2)] = inst_8931);

(statearr_8949_8974[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8942 === (13))){
var state_8941__$1 = state_8941;
var statearr_8950_8975 = state_8941__$1;
(statearr_8950_8975[(2)] = null);

(statearr_8950_8975[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8942 === (6))){
var inst_8906 = (state_8941[(8)]);
var inst_8927 = (inst_8906 > (0));
var state_8941__$1 = state_8941;
if(cljs.core.truth_(inst_8927)){
var statearr_8951_8976 = state_8941__$1;
(statearr_8951_8976[(1)] = (12));

} else {
var statearr_8952_8977 = state_8941__$1;
(statearr_8952_8977[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8942 === (3))){
var inst_8939 = (state_8941[(2)]);
var state_8941__$1 = state_8941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8941__$1,inst_8939);
} else {
if((state_val_8942 === (12))){
var inst_8905 = (state_8941[(7)]);
var inst_8929 = cljs.core.vec(inst_8905);
var state_8941__$1 = state_8941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8941__$1,(15),out,inst_8929);
} else {
if((state_val_8942 === (2))){
var state_8941__$1 = state_8941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8941__$1,(4),ch);
} else {
if((state_val_8942 === (11))){
var inst_8921 = (state_8941[(2)]);
var inst_8922 = (new Array(n));
var inst_8905 = inst_8922;
var inst_8906 = (0);
var state_8941__$1 = (function (){var statearr_8953 = state_8941;
(statearr_8953[(10)] = inst_8921);

(statearr_8953[(7)] = inst_8905);

(statearr_8953[(8)] = inst_8906);

return statearr_8953;
})();
var statearr_8954_8978 = state_8941__$1;
(statearr_8954_8978[(2)] = null);

(statearr_8954_8978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8942 === (9))){
var inst_8905 = (state_8941[(7)]);
var inst_8919 = cljs.core.vec(inst_8905);
var state_8941__$1 = state_8941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8941__$1,(11),out,inst_8919);
} else {
if((state_val_8942 === (5))){
var inst_8914 = (state_8941[(11)]);
var inst_8905 = (state_8941[(7)]);
var inst_8906 = (state_8941[(8)]);
var inst_8909 = (state_8941[(9)]);
var inst_8913 = (inst_8905[inst_8906] = inst_8909);
var inst_8914__$1 = (inst_8906 + (1));
var inst_8915 = (inst_8914__$1 < n);
var state_8941__$1 = (function (){var statearr_8955 = state_8941;
(statearr_8955[(11)] = inst_8914__$1);

(statearr_8955[(12)] = inst_8913);

return statearr_8955;
})();
if(cljs.core.truth_(inst_8915)){
var statearr_8956_8979 = state_8941__$1;
(statearr_8956_8979[(1)] = (8));

} else {
var statearr_8957_8980 = state_8941__$1;
(statearr_8957_8980[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8942 === (14))){
var inst_8934 = (state_8941[(2)]);
var inst_8935 = cljs.core.async.close_BANG_(out);
var state_8941__$1 = (function (){var statearr_8959 = state_8941;
(statearr_8959[(13)] = inst_8934);

return statearr_8959;
})();
var statearr_8960_8981 = state_8941__$1;
(statearr_8960_8981[(2)] = inst_8935);

(statearr_8960_8981[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8942 === (10))){
var inst_8925 = (state_8941[(2)]);
var state_8941__$1 = state_8941;
var statearr_8961_8982 = state_8941__$1;
(statearr_8961_8982[(2)] = inst_8925);

(statearr_8961_8982[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8942 === (8))){
var inst_8914 = (state_8941[(11)]);
var inst_8905 = (state_8941[(7)]);
var tmp8958 = inst_8905;
var inst_8905__$1 = tmp8958;
var inst_8906 = inst_8914;
var state_8941__$1 = (function (){var statearr_8962 = state_8941;
(statearr_8962[(7)] = inst_8905__$1);

(statearr_8962[(8)] = inst_8906);

return statearr_8962;
})();
var statearr_8963_8983 = state_8941__$1;
(statearr_8963_8983[(2)] = null);

(statearr_8963_8983[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___8969,out))
;
return ((function (switch__7047__auto__,c__7149__auto___8969,out){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_8964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8964[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_8964[(1)] = (1));

return statearr_8964;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_8941){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_8941);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e8965){if((e8965 instanceof Object)){
var ex__7051__auto__ = e8965;
var statearr_8966_8984 = state_8941;
(statearr_8966_8984[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8941);

return cljs.core.cst$kw$recur;
} else {
throw e8965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__8985 = state_8941;
state_8941 = G__8985;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_8941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_8941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___8969,out))
})();
var state__7151__auto__ = (function (){var statearr_8967 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_8967[(6)] = c__7149__auto___8969);

return statearr_8967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___8969,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__8987 = arguments.length;
switch (G__8987) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7149__auto___9057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto___9057,out){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto___9057,out){
return (function (state_9029){
var state_val_9030 = (state_9029[(1)]);
if((state_val_9030 === (7))){
var inst_9025 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
var statearr_9031_9058 = state_9029__$1;
(statearr_9031_9058[(2)] = inst_9025);

(statearr_9031_9058[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9030 === (1))){
var inst_8988 = [];
var inst_8989 = inst_8988;
var inst_8990 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_9029__$1 = (function (){var statearr_9032 = state_9029;
(statearr_9032[(7)] = inst_8990);

(statearr_9032[(8)] = inst_8989);

return statearr_9032;
})();
var statearr_9033_9059 = state_9029__$1;
(statearr_9033_9059[(2)] = null);

(statearr_9033_9059[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9030 === (4))){
var inst_8993 = (state_9029[(9)]);
var inst_8993__$1 = (state_9029[(2)]);
var inst_8994 = (inst_8993__$1 == null);
var inst_8995 = cljs.core.not(inst_8994);
var state_9029__$1 = (function (){var statearr_9034 = state_9029;
(statearr_9034[(9)] = inst_8993__$1);

return statearr_9034;
})();
if(inst_8995){
var statearr_9035_9060 = state_9029__$1;
(statearr_9035_9060[(1)] = (5));

} else {
var statearr_9036_9061 = state_9029__$1;
(statearr_9036_9061[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9030 === (15))){
var inst_9019 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
var statearr_9037_9062 = state_9029__$1;
(statearr_9037_9062[(2)] = inst_9019);

(statearr_9037_9062[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9030 === (13))){
var state_9029__$1 = state_9029;
var statearr_9038_9063 = state_9029__$1;
(statearr_9038_9063[(2)] = null);

(statearr_9038_9063[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9030 === (6))){
var inst_8989 = (state_9029[(8)]);
var inst_9014 = inst_8989.length;
var inst_9015 = (inst_9014 > (0));
var state_9029__$1 = state_9029;
if(cljs.core.truth_(inst_9015)){
var statearr_9039_9064 = state_9029__$1;
(statearr_9039_9064[(1)] = (12));

} else {
var statearr_9040_9065 = state_9029__$1;
(statearr_9040_9065[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9030 === (3))){
var inst_9027 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9029__$1,inst_9027);
} else {
if((state_val_9030 === (12))){
var inst_8989 = (state_9029[(8)]);
var inst_9017 = cljs.core.vec(inst_8989);
var state_9029__$1 = state_9029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9029__$1,(15),out,inst_9017);
} else {
if((state_val_9030 === (2))){
var state_9029__$1 = state_9029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9029__$1,(4),ch);
} else {
if((state_val_9030 === (11))){
var inst_8993 = (state_9029[(9)]);
var inst_8997 = (state_9029[(10)]);
var inst_9007 = (state_9029[(2)]);
var inst_9008 = [];
var inst_9009 = inst_9008.push(inst_8993);
var inst_8989 = inst_9008;
var inst_8990 = inst_8997;
var state_9029__$1 = (function (){var statearr_9041 = state_9029;
(statearr_9041[(7)] = inst_8990);

(statearr_9041[(8)] = inst_8989);

(statearr_9041[(11)] = inst_9009);

(statearr_9041[(12)] = inst_9007);

return statearr_9041;
})();
var statearr_9042_9066 = state_9029__$1;
(statearr_9042_9066[(2)] = null);

(statearr_9042_9066[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9030 === (9))){
var inst_8989 = (state_9029[(8)]);
var inst_9005 = cljs.core.vec(inst_8989);
var state_9029__$1 = state_9029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9029__$1,(11),out,inst_9005);
} else {
if((state_val_9030 === (5))){
var inst_8993 = (state_9029[(9)]);
var inst_8990 = (state_9029[(7)]);
var inst_8997 = (state_9029[(10)]);
var inst_8997__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_8993) : f.call(null,inst_8993));
var inst_8998 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8997__$1,inst_8990);
var inst_8999 = cljs.core.keyword_identical_QMARK_(inst_8990,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_9000 = ((inst_8998) || (inst_8999));
var state_9029__$1 = (function (){var statearr_9043 = state_9029;
(statearr_9043[(10)] = inst_8997__$1);

return statearr_9043;
})();
if(cljs.core.truth_(inst_9000)){
var statearr_9044_9067 = state_9029__$1;
(statearr_9044_9067[(1)] = (8));

} else {
var statearr_9045_9068 = state_9029__$1;
(statearr_9045_9068[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9030 === (14))){
var inst_9022 = (state_9029[(2)]);
var inst_9023 = cljs.core.async.close_BANG_(out);
var state_9029__$1 = (function (){var statearr_9047 = state_9029;
(statearr_9047[(13)] = inst_9022);

return statearr_9047;
})();
var statearr_9048_9069 = state_9029__$1;
(statearr_9048_9069[(2)] = inst_9023);

(statearr_9048_9069[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9030 === (10))){
var inst_9012 = (state_9029[(2)]);
var state_9029__$1 = state_9029;
var statearr_9049_9070 = state_9029__$1;
(statearr_9049_9070[(2)] = inst_9012);

(statearr_9049_9070[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9030 === (8))){
var inst_8993 = (state_9029[(9)]);
var inst_8989 = (state_9029[(8)]);
var inst_8997 = (state_9029[(10)]);
var inst_9002 = inst_8989.push(inst_8993);
var tmp9046 = inst_8989;
var inst_8989__$1 = tmp9046;
var inst_8990 = inst_8997;
var state_9029__$1 = (function (){var statearr_9050 = state_9029;
(statearr_9050[(7)] = inst_8990);

(statearr_9050[(8)] = inst_8989__$1);

(statearr_9050[(14)] = inst_9002);

return statearr_9050;
})();
var statearr_9051_9071 = state_9029__$1;
(statearr_9051_9071[(2)] = null);

(statearr_9051_9071[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto___9057,out))
;
return ((function (switch__7047__auto__,c__7149__auto___9057,out){
return (function() {
var cljs$core$async$state_machine__7048__auto__ = null;
var cljs$core$async$state_machine__7048__auto____0 = (function (){
var statearr_9052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9052[(0)] = cljs$core$async$state_machine__7048__auto__);

(statearr_9052[(1)] = (1));

return statearr_9052;
});
var cljs$core$async$state_machine__7048__auto____1 = (function (state_9029){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_9029);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e9053){if((e9053 instanceof Object)){
var ex__7051__auto__ = e9053;
var statearr_9054_9072 = state_9029;
(statearr_9054_9072[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9029);

return cljs.core.cst$kw$recur;
} else {
throw e9053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__9073 = state_9029;
state_9029 = G__9073;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
cljs$core$async$state_machine__7048__auto__ = function(state_9029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7048__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7048__auto____1.call(this,state_9029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7048__auto____0;
cljs$core$async$state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7048__auto____1;
return cljs$core$async$state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto___9057,out))
})();
var state__7151__auto__ = (function (){var statearr_9055 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_9055[(6)] = c__7149__auto___9057);

return statearr_9055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto___9057,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

