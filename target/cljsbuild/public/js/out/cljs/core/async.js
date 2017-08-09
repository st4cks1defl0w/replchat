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
var G__58314 = arguments.length;
switch (G__58314) {
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
if(typeof cljs.core.async.t_cljs$core$async58315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58315 = (function (f,blockable,meta58316){
this.f = f;
this.blockable = blockable;
this.meta58316 = meta58316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58317,meta58316__$1){
var self__ = this;
var _58317__$1 = this;
return (new cljs.core.async.t_cljs$core$async58315(self__.f,self__.blockable,meta58316__$1));
});

cljs.core.async.t_cljs$core$async58315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58317){
var self__ = this;
var _58317__$1 = this;
return self__.meta58316;
});

cljs.core.async.t_cljs$core$async58315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async58315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async58315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async58315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58316","meta58316",577699149,null)], null);
});

cljs.core.async.t_cljs$core$async58315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58315";

cljs.core.async.t_cljs$core$async58315.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58315");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58315.
 */
cljs.core.async.__GT_t_cljs$core$async58315 = (function cljs$core$async$__GT_t_cljs$core$async58315(f__$1,blockable__$1,meta58316){
return (new cljs.core.async.t_cljs$core$async58315(f__$1,blockable__$1,meta58316));
});

}

return (new cljs.core.async.t_cljs$core$async58315(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__58321 = arguments.length;
switch (G__58321) {
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
var G__58324 = arguments.length;
switch (G__58324) {
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
var G__58327 = arguments.length;
switch (G__58327) {
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
var val_58329 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_58329);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_58329,ret){
return (function (){
return fn1.call(null,val_58329);
});})(val_58329,ret))
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
var G__58331 = arguments.length;
switch (G__58331) {
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
var n__4376__auto___58333 = n;
var x_58334 = (0);
while(true){
if((x_58334 < n__4376__auto___58333)){
(a[x_58334] = (0));

var G__58335 = (x_58334 + (1));
x_58334 = G__58335;
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

var G__58336 = (i + (1));
i = G__58336;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async58337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58337 = (function (flag,meta58338){
this.flag = flag;
this.meta58338 = meta58338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_58339,meta58338__$1){
var self__ = this;
var _58339__$1 = this;
return (new cljs.core.async.t_cljs$core$async58337(self__.flag,meta58338__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async58337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_58339){
var self__ = this;
var _58339__$1 = this;
return self__.meta58338;
});})(flag))
;

cljs.core.async.t_cljs$core$async58337.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async58337.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async58337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async58337.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58338","meta58338",-197041481,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async58337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58337";

cljs.core.async.t_cljs$core$async58337.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58337");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58337.
 */
cljs.core.async.__GT_t_cljs$core$async58337 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58337(flag__$1,meta58338){
return (new cljs.core.async.t_cljs$core$async58337(flag__$1,meta58338));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async58337(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async58340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58340 = (function (flag,cb,meta58341){
this.flag = flag;
this.cb = cb;
this.meta58341 = meta58341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58342,meta58341__$1){
var self__ = this;
var _58342__$1 = this;
return (new cljs.core.async.t_cljs$core$async58340(self__.flag,self__.cb,meta58341__$1));
});

cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58342){
var self__ = this;
var _58342__$1 = this;
return self__.meta58341;
});

cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async58340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58341","meta58341",-1868310590,null)], null);
});

cljs.core.async.t_cljs$core$async58340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58340";

cljs.core.async.t_cljs$core$async58340.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58340");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58340.
 */
cljs.core.async.__GT_t_cljs$core$async58340 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58340(flag__$1,cb__$1,meta58341){
return (new cljs.core.async.t_cljs$core$async58340(flag__$1,cb__$1,meta58341));
});

}

return (new cljs.core.async.t_cljs$core$async58340(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__58343_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58343_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58344_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58344_SHARP_,port], null));
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
var G__58345 = (i + (1));
i = G__58345;
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
var len__4499__auto___58351 = arguments.length;
var i__4500__auto___58352 = (0);
while(true){
if((i__4500__auto___58352 < len__4499__auto___58351)){
args__4502__auto__.push((arguments[i__4500__auto___58352]));

var G__58353 = (i__4500__auto___58352 + (1));
i__4500__auto___58352 = G__58353;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58348){
var map__58349 = p__58348;
var map__58349__$1 = ((((!((map__58349 == null)))?(((((map__58349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58349):map__58349);
var opts = map__58349__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58346){
var G__58347 = cljs.core.first.call(null,seq58346);
var seq58346__$1 = cljs.core.next.call(null,seq58346);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58347,seq58346__$1);
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
var G__58355 = arguments.length;
switch (G__58355) {
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
var c__58254__auto___58401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___58401){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___58401){
return (function (state_58379){
var state_val_58380 = (state_58379[(1)]);
if((state_val_58380 === (7))){
var inst_58375 = (state_58379[(2)]);
var state_58379__$1 = state_58379;
var statearr_58381_58402 = state_58379__$1;
(statearr_58381_58402[(2)] = inst_58375);

(statearr_58381_58402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58380 === (1))){
var state_58379__$1 = state_58379;
var statearr_58382_58403 = state_58379__$1;
(statearr_58382_58403[(2)] = null);

(statearr_58382_58403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58380 === (4))){
var inst_58358 = (state_58379[(7)]);
var inst_58358__$1 = (state_58379[(2)]);
var inst_58359 = (inst_58358__$1 == null);
var state_58379__$1 = (function (){var statearr_58383 = state_58379;
(statearr_58383[(7)] = inst_58358__$1);

return statearr_58383;
})();
if(cljs.core.truth_(inst_58359)){
var statearr_58384_58404 = state_58379__$1;
(statearr_58384_58404[(1)] = (5));

} else {
var statearr_58385_58405 = state_58379__$1;
(statearr_58385_58405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58380 === (13))){
var state_58379__$1 = state_58379;
var statearr_58386_58406 = state_58379__$1;
(statearr_58386_58406[(2)] = null);

(statearr_58386_58406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58380 === (6))){
var inst_58358 = (state_58379[(7)]);
var state_58379__$1 = state_58379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58379__$1,(11),to,inst_58358);
} else {
if((state_val_58380 === (3))){
var inst_58377 = (state_58379[(2)]);
var state_58379__$1 = state_58379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58379__$1,inst_58377);
} else {
if((state_val_58380 === (12))){
var state_58379__$1 = state_58379;
var statearr_58387_58407 = state_58379__$1;
(statearr_58387_58407[(2)] = null);

(statearr_58387_58407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58380 === (2))){
var state_58379__$1 = state_58379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58379__$1,(4),from);
} else {
if((state_val_58380 === (11))){
var inst_58368 = (state_58379[(2)]);
var state_58379__$1 = state_58379;
if(cljs.core.truth_(inst_58368)){
var statearr_58388_58408 = state_58379__$1;
(statearr_58388_58408[(1)] = (12));

} else {
var statearr_58389_58409 = state_58379__$1;
(statearr_58389_58409[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58380 === (9))){
var state_58379__$1 = state_58379;
var statearr_58390_58410 = state_58379__$1;
(statearr_58390_58410[(2)] = null);

(statearr_58390_58410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58380 === (5))){
var state_58379__$1 = state_58379;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58391_58411 = state_58379__$1;
(statearr_58391_58411[(1)] = (8));

} else {
var statearr_58392_58412 = state_58379__$1;
(statearr_58392_58412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58380 === (14))){
var inst_58373 = (state_58379[(2)]);
var state_58379__$1 = state_58379;
var statearr_58393_58413 = state_58379__$1;
(statearr_58393_58413[(2)] = inst_58373);

(statearr_58393_58413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58380 === (10))){
var inst_58365 = (state_58379[(2)]);
var state_58379__$1 = state_58379;
var statearr_58394_58414 = state_58379__$1;
(statearr_58394_58414[(2)] = inst_58365);

(statearr_58394_58414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58380 === (8))){
var inst_58362 = cljs.core.async.close_BANG_.call(null,to);
var state_58379__$1 = state_58379;
var statearr_58395_58415 = state_58379__$1;
(statearr_58395_58415[(2)] = inst_58362);

(statearr_58395_58415[(1)] = (10));


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
});})(c__58254__auto___58401))
;
return ((function (switch__58164__auto__,c__58254__auto___58401){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_58396 = [null,null,null,null,null,null,null,null];
(statearr_58396[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_58396[(1)] = (1));

return statearr_58396;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_58379){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e58397){if((e58397 instanceof Object)){
var ex__58168__auto__ = e58397;
var statearr_58398_58416 = state_58379;
(statearr_58398_58416[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58417 = state_58379;
state_58379 = G__58417;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_58379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_58379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___58401))
})();
var state__58256__auto__ = (function (){var statearr_58399 = f__58255__auto__.call(null);
(statearr_58399[(6)] = c__58254__auto___58401);

return statearr_58399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___58401))
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
return (function (p__58418){
var vec__58419 = p__58418;
var v = cljs.core.nth.call(null,vec__58419,(0),null);
var p = cljs.core.nth.call(null,vec__58419,(1),null);
var job = vec__58419;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__58254__auto___58590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___58590,res,vec__58419,v,p,job,jobs,results){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___58590,res,vec__58419,v,p,job,jobs,results){
return (function (state_58426){
var state_val_58427 = (state_58426[(1)]);
if((state_val_58427 === (1))){
var state_58426__$1 = state_58426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58426__$1,(2),res,v);
} else {
if((state_val_58427 === (2))){
var inst_58423 = (state_58426[(2)]);
var inst_58424 = cljs.core.async.close_BANG_.call(null,res);
var state_58426__$1 = (function (){var statearr_58428 = state_58426;
(statearr_58428[(7)] = inst_58423);

return statearr_58428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58426__$1,inst_58424);
} else {
return null;
}
}
});})(c__58254__auto___58590,res,vec__58419,v,p,job,jobs,results))
;
return ((function (switch__58164__auto__,c__58254__auto___58590,res,vec__58419,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0 = (function (){
var statearr_58429 = [null,null,null,null,null,null,null,null];
(statearr_58429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__);

(statearr_58429[(1)] = (1));

return statearr_58429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1 = (function (state_58426){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e58430){if((e58430 instanceof Object)){
var ex__58168__auto__ = e58430;
var statearr_58431_58591 = state_58426;
(statearr_58431_58591[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58592 = state_58426;
state_58426 = G__58592;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__ = function(state_58426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1.call(this,state_58426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___58590,res,vec__58419,v,p,job,jobs,results))
})();
var state__58256__auto__ = (function (){var statearr_58432 = f__58255__auto__.call(null);
(statearr_58432[(6)] = c__58254__auto___58590);

return statearr_58432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___58590,res,vec__58419,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__58433){
var vec__58434 = p__58433;
var v = cljs.core.nth.call(null,vec__58434,(0),null);
var p = cljs.core.nth.call(null,vec__58434,(1),null);
var job = vec__58434;
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
var n__4376__auto___58593 = n;
var __58594 = (0);
while(true){
if((__58594 < n__4376__auto___58593)){
var G__58437_58595 = type;
var G__58437_58596__$1 = (((G__58437_58595 instanceof cljs.core.Keyword))?G__58437_58595.fqn:null);
switch (G__58437_58596__$1) {
case "compute":
var c__58254__auto___58598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__58594,c__58254__auto___58598,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (__58594,c__58254__auto___58598,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async){
return (function (state_58450){
var state_val_58451 = (state_58450[(1)]);
if((state_val_58451 === (1))){
var state_58450__$1 = state_58450;
var statearr_58452_58599 = state_58450__$1;
(statearr_58452_58599[(2)] = null);

(statearr_58452_58599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58451 === (2))){
var state_58450__$1 = state_58450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58450__$1,(4),jobs);
} else {
if((state_val_58451 === (3))){
var inst_58448 = (state_58450[(2)]);
var state_58450__$1 = state_58450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58450__$1,inst_58448);
} else {
if((state_val_58451 === (4))){
var inst_58440 = (state_58450[(2)]);
var inst_58441 = process.call(null,inst_58440);
var state_58450__$1 = state_58450;
if(cljs.core.truth_(inst_58441)){
var statearr_58453_58600 = state_58450__$1;
(statearr_58453_58600[(1)] = (5));

} else {
var statearr_58454_58601 = state_58450__$1;
(statearr_58454_58601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58451 === (5))){
var state_58450__$1 = state_58450;
var statearr_58455_58602 = state_58450__$1;
(statearr_58455_58602[(2)] = null);

(statearr_58455_58602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58451 === (6))){
var state_58450__$1 = state_58450;
var statearr_58456_58603 = state_58450__$1;
(statearr_58456_58603[(2)] = null);

(statearr_58456_58603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58451 === (7))){
var inst_58446 = (state_58450[(2)]);
var state_58450__$1 = state_58450;
var statearr_58457_58604 = state_58450__$1;
(statearr_58457_58604[(2)] = inst_58446);

(statearr_58457_58604[(1)] = (3));


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
});})(__58594,c__58254__auto___58598,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async))
;
return ((function (__58594,switch__58164__auto__,c__58254__auto___58598,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0 = (function (){
var statearr_58458 = [null,null,null,null,null,null,null];
(statearr_58458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__);

(statearr_58458[(1)] = (1));

return statearr_58458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1 = (function (state_58450){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e58459){if((e58459 instanceof Object)){
var ex__58168__auto__ = e58459;
var statearr_58460_58605 = state_58450;
(statearr_58460_58605[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58606 = state_58450;
state_58450 = G__58606;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__ = function(state_58450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1.call(this,state_58450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__;
})()
;})(__58594,switch__58164__auto__,c__58254__auto___58598,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async))
})();
var state__58256__auto__ = (function (){var statearr_58461 = f__58255__auto__.call(null);
(statearr_58461[(6)] = c__58254__auto___58598);

return statearr_58461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(__58594,c__58254__auto___58598,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async))
);


break;
case "async":
var c__58254__auto___58607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__58594,c__58254__auto___58607,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (__58594,c__58254__auto___58607,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async){
return (function (state_58474){
var state_val_58475 = (state_58474[(1)]);
if((state_val_58475 === (1))){
var state_58474__$1 = state_58474;
var statearr_58476_58608 = state_58474__$1;
(statearr_58476_58608[(2)] = null);

(statearr_58476_58608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58475 === (2))){
var state_58474__$1 = state_58474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58474__$1,(4),jobs);
} else {
if((state_val_58475 === (3))){
var inst_58472 = (state_58474[(2)]);
var state_58474__$1 = state_58474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58474__$1,inst_58472);
} else {
if((state_val_58475 === (4))){
var inst_58464 = (state_58474[(2)]);
var inst_58465 = async.call(null,inst_58464);
var state_58474__$1 = state_58474;
if(cljs.core.truth_(inst_58465)){
var statearr_58477_58609 = state_58474__$1;
(statearr_58477_58609[(1)] = (5));

} else {
var statearr_58478_58610 = state_58474__$1;
(statearr_58478_58610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58475 === (5))){
var state_58474__$1 = state_58474;
var statearr_58479_58611 = state_58474__$1;
(statearr_58479_58611[(2)] = null);

(statearr_58479_58611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58475 === (6))){
var state_58474__$1 = state_58474;
var statearr_58480_58612 = state_58474__$1;
(statearr_58480_58612[(2)] = null);

(statearr_58480_58612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58475 === (7))){
var inst_58470 = (state_58474[(2)]);
var state_58474__$1 = state_58474;
var statearr_58481_58613 = state_58474__$1;
(statearr_58481_58613[(2)] = inst_58470);

(statearr_58481_58613[(1)] = (3));


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
});})(__58594,c__58254__auto___58607,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async))
;
return ((function (__58594,switch__58164__auto__,c__58254__auto___58607,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0 = (function (){
var statearr_58482 = [null,null,null,null,null,null,null];
(statearr_58482[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__);

(statearr_58482[(1)] = (1));

return statearr_58482;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1 = (function (state_58474){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e58483){if((e58483 instanceof Object)){
var ex__58168__auto__ = e58483;
var statearr_58484_58614 = state_58474;
(statearr_58484_58614[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58615 = state_58474;
state_58474 = G__58615;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__ = function(state_58474){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1.call(this,state_58474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__;
})()
;})(__58594,switch__58164__auto__,c__58254__auto___58607,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async))
})();
var state__58256__auto__ = (function (){var statearr_58485 = f__58255__auto__.call(null);
(statearr_58485[(6)] = c__58254__auto___58607);

return statearr_58485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(__58594,c__58254__auto___58607,G__58437_58595,G__58437_58596__$1,n__4376__auto___58593,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58437_58596__$1)].join('')));

}

var G__58616 = (__58594 + (1));
__58594 = G__58616;
continue;
} else {
}
break;
}

var c__58254__auto___58617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___58617,jobs,results,process,async){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___58617,jobs,results,process,async){
return (function (state_58507){
var state_val_58508 = (state_58507[(1)]);
if((state_val_58508 === (1))){
var state_58507__$1 = state_58507;
var statearr_58509_58618 = state_58507__$1;
(statearr_58509_58618[(2)] = null);

(statearr_58509_58618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58508 === (2))){
var state_58507__$1 = state_58507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58507__$1,(4),from);
} else {
if((state_val_58508 === (3))){
var inst_58505 = (state_58507[(2)]);
var state_58507__$1 = state_58507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58507__$1,inst_58505);
} else {
if((state_val_58508 === (4))){
var inst_58488 = (state_58507[(7)]);
var inst_58488__$1 = (state_58507[(2)]);
var inst_58489 = (inst_58488__$1 == null);
var state_58507__$1 = (function (){var statearr_58510 = state_58507;
(statearr_58510[(7)] = inst_58488__$1);

return statearr_58510;
})();
if(cljs.core.truth_(inst_58489)){
var statearr_58511_58619 = state_58507__$1;
(statearr_58511_58619[(1)] = (5));

} else {
var statearr_58512_58620 = state_58507__$1;
(statearr_58512_58620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58508 === (5))){
var inst_58491 = cljs.core.async.close_BANG_.call(null,jobs);
var state_58507__$1 = state_58507;
var statearr_58513_58621 = state_58507__$1;
(statearr_58513_58621[(2)] = inst_58491);

(statearr_58513_58621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58508 === (6))){
var inst_58493 = (state_58507[(8)]);
var inst_58488 = (state_58507[(7)]);
var inst_58493__$1 = cljs.core.async.chan.call(null,(1));
var inst_58494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58495 = [inst_58488,inst_58493__$1];
var inst_58496 = (new cljs.core.PersistentVector(null,2,(5),inst_58494,inst_58495,null));
var state_58507__$1 = (function (){var statearr_58514 = state_58507;
(statearr_58514[(8)] = inst_58493__$1);

return statearr_58514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58507__$1,(8),jobs,inst_58496);
} else {
if((state_val_58508 === (7))){
var inst_58503 = (state_58507[(2)]);
var state_58507__$1 = state_58507;
var statearr_58515_58622 = state_58507__$1;
(statearr_58515_58622[(2)] = inst_58503);

(statearr_58515_58622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58508 === (8))){
var inst_58493 = (state_58507[(8)]);
var inst_58498 = (state_58507[(2)]);
var state_58507__$1 = (function (){var statearr_58516 = state_58507;
(statearr_58516[(9)] = inst_58498);

return statearr_58516;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58507__$1,(9),results,inst_58493);
} else {
if((state_val_58508 === (9))){
var inst_58500 = (state_58507[(2)]);
var state_58507__$1 = (function (){var statearr_58517 = state_58507;
(statearr_58517[(10)] = inst_58500);

return statearr_58517;
})();
var statearr_58518_58623 = state_58507__$1;
(statearr_58518_58623[(2)] = null);

(statearr_58518_58623[(1)] = (2));


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
});})(c__58254__auto___58617,jobs,results,process,async))
;
return ((function (switch__58164__auto__,c__58254__auto___58617,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0 = (function (){
var statearr_58519 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__);

(statearr_58519[(1)] = (1));

return statearr_58519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1 = (function (state_58507){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e58520){if((e58520 instanceof Object)){
var ex__58168__auto__ = e58520;
var statearr_58521_58624 = state_58507;
(statearr_58521_58624[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58625 = state_58507;
state_58507 = G__58625;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__ = function(state_58507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1.call(this,state_58507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___58617,jobs,results,process,async))
})();
var state__58256__auto__ = (function (){var statearr_58522 = f__58255__auto__.call(null);
(statearr_58522[(6)] = c__58254__auto___58617);

return statearr_58522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___58617,jobs,results,process,async))
);


var c__58254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto__,jobs,results,process,async){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto__,jobs,results,process,async){
return (function (state_58560){
var state_val_58561 = (state_58560[(1)]);
if((state_val_58561 === (7))){
var inst_58556 = (state_58560[(2)]);
var state_58560__$1 = state_58560;
var statearr_58562_58626 = state_58560__$1;
(statearr_58562_58626[(2)] = inst_58556);

(statearr_58562_58626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (20))){
var state_58560__$1 = state_58560;
var statearr_58563_58627 = state_58560__$1;
(statearr_58563_58627[(2)] = null);

(statearr_58563_58627[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (1))){
var state_58560__$1 = state_58560;
var statearr_58564_58628 = state_58560__$1;
(statearr_58564_58628[(2)] = null);

(statearr_58564_58628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (4))){
var inst_58525 = (state_58560[(7)]);
var inst_58525__$1 = (state_58560[(2)]);
var inst_58526 = (inst_58525__$1 == null);
var state_58560__$1 = (function (){var statearr_58565 = state_58560;
(statearr_58565[(7)] = inst_58525__$1);

return statearr_58565;
})();
if(cljs.core.truth_(inst_58526)){
var statearr_58566_58629 = state_58560__$1;
(statearr_58566_58629[(1)] = (5));

} else {
var statearr_58567_58630 = state_58560__$1;
(statearr_58567_58630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (15))){
var inst_58538 = (state_58560[(8)]);
var state_58560__$1 = state_58560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58560__$1,(18),to,inst_58538);
} else {
if((state_val_58561 === (21))){
var inst_58551 = (state_58560[(2)]);
var state_58560__$1 = state_58560;
var statearr_58568_58631 = state_58560__$1;
(statearr_58568_58631[(2)] = inst_58551);

(statearr_58568_58631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (13))){
var inst_58553 = (state_58560[(2)]);
var state_58560__$1 = (function (){var statearr_58569 = state_58560;
(statearr_58569[(9)] = inst_58553);

return statearr_58569;
})();
var statearr_58570_58632 = state_58560__$1;
(statearr_58570_58632[(2)] = null);

(statearr_58570_58632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (6))){
var inst_58525 = (state_58560[(7)]);
var state_58560__$1 = state_58560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58560__$1,(11),inst_58525);
} else {
if((state_val_58561 === (17))){
var inst_58546 = (state_58560[(2)]);
var state_58560__$1 = state_58560;
if(cljs.core.truth_(inst_58546)){
var statearr_58571_58633 = state_58560__$1;
(statearr_58571_58633[(1)] = (19));

} else {
var statearr_58572_58634 = state_58560__$1;
(statearr_58572_58634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (3))){
var inst_58558 = (state_58560[(2)]);
var state_58560__$1 = state_58560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58560__$1,inst_58558);
} else {
if((state_val_58561 === (12))){
var inst_58535 = (state_58560[(10)]);
var state_58560__$1 = state_58560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58560__$1,(14),inst_58535);
} else {
if((state_val_58561 === (2))){
var state_58560__$1 = state_58560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58560__$1,(4),results);
} else {
if((state_val_58561 === (19))){
var state_58560__$1 = state_58560;
var statearr_58573_58635 = state_58560__$1;
(statearr_58573_58635[(2)] = null);

(statearr_58573_58635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (11))){
var inst_58535 = (state_58560[(2)]);
var state_58560__$1 = (function (){var statearr_58574 = state_58560;
(statearr_58574[(10)] = inst_58535);

return statearr_58574;
})();
var statearr_58575_58636 = state_58560__$1;
(statearr_58575_58636[(2)] = null);

(statearr_58575_58636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (9))){
var state_58560__$1 = state_58560;
var statearr_58576_58637 = state_58560__$1;
(statearr_58576_58637[(2)] = null);

(statearr_58576_58637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (5))){
var state_58560__$1 = state_58560;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58577_58638 = state_58560__$1;
(statearr_58577_58638[(1)] = (8));

} else {
var statearr_58578_58639 = state_58560__$1;
(statearr_58578_58639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (14))){
var inst_58540 = (state_58560[(11)]);
var inst_58538 = (state_58560[(8)]);
var inst_58538__$1 = (state_58560[(2)]);
var inst_58539 = (inst_58538__$1 == null);
var inst_58540__$1 = cljs.core.not.call(null,inst_58539);
var state_58560__$1 = (function (){var statearr_58579 = state_58560;
(statearr_58579[(11)] = inst_58540__$1);

(statearr_58579[(8)] = inst_58538__$1);

return statearr_58579;
})();
if(inst_58540__$1){
var statearr_58580_58640 = state_58560__$1;
(statearr_58580_58640[(1)] = (15));

} else {
var statearr_58581_58641 = state_58560__$1;
(statearr_58581_58641[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (16))){
var inst_58540 = (state_58560[(11)]);
var state_58560__$1 = state_58560;
var statearr_58582_58642 = state_58560__$1;
(statearr_58582_58642[(2)] = inst_58540);

(statearr_58582_58642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (10))){
var inst_58532 = (state_58560[(2)]);
var state_58560__$1 = state_58560;
var statearr_58583_58643 = state_58560__$1;
(statearr_58583_58643[(2)] = inst_58532);

(statearr_58583_58643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (18))){
var inst_58543 = (state_58560[(2)]);
var state_58560__$1 = state_58560;
var statearr_58584_58644 = state_58560__$1;
(statearr_58584_58644[(2)] = inst_58543);

(statearr_58584_58644[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58561 === (8))){
var inst_58529 = cljs.core.async.close_BANG_.call(null,to);
var state_58560__$1 = state_58560;
var statearr_58585_58645 = state_58560__$1;
(statearr_58585_58645[(2)] = inst_58529);

(statearr_58585_58645[(1)] = (10));


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
});})(c__58254__auto__,jobs,results,process,async))
;
return ((function (switch__58164__auto__,c__58254__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0 = (function (){
var statearr_58586 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__);

(statearr_58586[(1)] = (1));

return statearr_58586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1 = (function (state_58560){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e58587){if((e58587 instanceof Object)){
var ex__58168__auto__ = e58587;
var statearr_58588_58646 = state_58560;
(statearr_58588_58646[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58647 = state_58560;
state_58560 = G__58647;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__ = function(state_58560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1.call(this,state_58560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto__,jobs,results,process,async))
})();
var state__58256__auto__ = (function (){var statearr_58589 = f__58255__auto__.call(null);
(statearr_58589[(6)] = c__58254__auto__);

return statearr_58589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto__,jobs,results,process,async))
);

return c__58254__auto__;
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
var G__58649 = arguments.length;
switch (G__58649) {
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
var G__58652 = arguments.length;
switch (G__58652) {
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
var G__58655 = arguments.length;
switch (G__58655) {
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
var c__58254__auto___58704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___58704,tc,fc){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___58704,tc,fc){
return (function (state_58681){
var state_val_58682 = (state_58681[(1)]);
if((state_val_58682 === (7))){
var inst_58677 = (state_58681[(2)]);
var state_58681__$1 = state_58681;
var statearr_58683_58705 = state_58681__$1;
(statearr_58683_58705[(2)] = inst_58677);

(statearr_58683_58705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58682 === (1))){
var state_58681__$1 = state_58681;
var statearr_58684_58706 = state_58681__$1;
(statearr_58684_58706[(2)] = null);

(statearr_58684_58706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58682 === (4))){
var inst_58658 = (state_58681[(7)]);
var inst_58658__$1 = (state_58681[(2)]);
var inst_58659 = (inst_58658__$1 == null);
var state_58681__$1 = (function (){var statearr_58685 = state_58681;
(statearr_58685[(7)] = inst_58658__$1);

return statearr_58685;
})();
if(cljs.core.truth_(inst_58659)){
var statearr_58686_58707 = state_58681__$1;
(statearr_58686_58707[(1)] = (5));

} else {
var statearr_58687_58708 = state_58681__$1;
(statearr_58687_58708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58682 === (13))){
var state_58681__$1 = state_58681;
var statearr_58688_58709 = state_58681__$1;
(statearr_58688_58709[(2)] = null);

(statearr_58688_58709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58682 === (6))){
var inst_58658 = (state_58681[(7)]);
var inst_58664 = p.call(null,inst_58658);
var state_58681__$1 = state_58681;
if(cljs.core.truth_(inst_58664)){
var statearr_58689_58710 = state_58681__$1;
(statearr_58689_58710[(1)] = (9));

} else {
var statearr_58690_58711 = state_58681__$1;
(statearr_58690_58711[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58682 === (3))){
var inst_58679 = (state_58681[(2)]);
var state_58681__$1 = state_58681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58681__$1,inst_58679);
} else {
if((state_val_58682 === (12))){
var state_58681__$1 = state_58681;
var statearr_58691_58712 = state_58681__$1;
(statearr_58691_58712[(2)] = null);

(statearr_58691_58712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58682 === (2))){
var state_58681__$1 = state_58681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58681__$1,(4),ch);
} else {
if((state_val_58682 === (11))){
var inst_58658 = (state_58681[(7)]);
var inst_58668 = (state_58681[(2)]);
var state_58681__$1 = state_58681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58681__$1,(8),inst_58668,inst_58658);
} else {
if((state_val_58682 === (9))){
var state_58681__$1 = state_58681;
var statearr_58692_58713 = state_58681__$1;
(statearr_58692_58713[(2)] = tc);

(statearr_58692_58713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58682 === (5))){
var inst_58661 = cljs.core.async.close_BANG_.call(null,tc);
var inst_58662 = cljs.core.async.close_BANG_.call(null,fc);
var state_58681__$1 = (function (){var statearr_58693 = state_58681;
(statearr_58693[(8)] = inst_58661);

return statearr_58693;
})();
var statearr_58694_58714 = state_58681__$1;
(statearr_58694_58714[(2)] = inst_58662);

(statearr_58694_58714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58682 === (14))){
var inst_58675 = (state_58681[(2)]);
var state_58681__$1 = state_58681;
var statearr_58695_58715 = state_58681__$1;
(statearr_58695_58715[(2)] = inst_58675);

(statearr_58695_58715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58682 === (10))){
var state_58681__$1 = state_58681;
var statearr_58696_58716 = state_58681__$1;
(statearr_58696_58716[(2)] = fc);

(statearr_58696_58716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58682 === (8))){
var inst_58670 = (state_58681[(2)]);
var state_58681__$1 = state_58681;
if(cljs.core.truth_(inst_58670)){
var statearr_58697_58717 = state_58681__$1;
(statearr_58697_58717[(1)] = (12));

} else {
var statearr_58698_58718 = state_58681__$1;
(statearr_58698_58718[(1)] = (13));

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
});})(c__58254__auto___58704,tc,fc))
;
return ((function (switch__58164__auto__,c__58254__auto___58704,tc,fc){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_58699 = [null,null,null,null,null,null,null,null,null];
(statearr_58699[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_58699[(1)] = (1));

return statearr_58699;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_58681){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e58700){if((e58700 instanceof Object)){
var ex__58168__auto__ = e58700;
var statearr_58701_58719 = state_58681;
(statearr_58701_58719[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58720 = state_58681;
state_58681 = G__58720;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_58681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_58681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___58704,tc,fc))
})();
var state__58256__auto__ = (function (){var statearr_58702 = f__58255__auto__.call(null);
(statearr_58702[(6)] = c__58254__auto___58704);

return statearr_58702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___58704,tc,fc))
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
var c__58254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto__){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto__){
return (function (state_58741){
var state_val_58742 = (state_58741[(1)]);
if((state_val_58742 === (7))){
var inst_58737 = (state_58741[(2)]);
var state_58741__$1 = state_58741;
var statearr_58743_58761 = state_58741__$1;
(statearr_58743_58761[(2)] = inst_58737);

(statearr_58743_58761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58742 === (1))){
var inst_58721 = init;
var state_58741__$1 = (function (){var statearr_58744 = state_58741;
(statearr_58744[(7)] = inst_58721);

return statearr_58744;
})();
var statearr_58745_58762 = state_58741__$1;
(statearr_58745_58762[(2)] = null);

(statearr_58745_58762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58742 === (4))){
var inst_58724 = (state_58741[(8)]);
var inst_58724__$1 = (state_58741[(2)]);
var inst_58725 = (inst_58724__$1 == null);
var state_58741__$1 = (function (){var statearr_58746 = state_58741;
(statearr_58746[(8)] = inst_58724__$1);

return statearr_58746;
})();
if(cljs.core.truth_(inst_58725)){
var statearr_58747_58763 = state_58741__$1;
(statearr_58747_58763[(1)] = (5));

} else {
var statearr_58748_58764 = state_58741__$1;
(statearr_58748_58764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58742 === (6))){
var inst_58728 = (state_58741[(9)]);
var inst_58724 = (state_58741[(8)]);
var inst_58721 = (state_58741[(7)]);
var inst_58728__$1 = f.call(null,inst_58721,inst_58724);
var inst_58729 = cljs.core.reduced_QMARK_.call(null,inst_58728__$1);
var state_58741__$1 = (function (){var statearr_58749 = state_58741;
(statearr_58749[(9)] = inst_58728__$1);

return statearr_58749;
})();
if(inst_58729){
var statearr_58750_58765 = state_58741__$1;
(statearr_58750_58765[(1)] = (8));

} else {
var statearr_58751_58766 = state_58741__$1;
(statearr_58751_58766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58742 === (3))){
var inst_58739 = (state_58741[(2)]);
var state_58741__$1 = state_58741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58741__$1,inst_58739);
} else {
if((state_val_58742 === (2))){
var state_58741__$1 = state_58741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58741__$1,(4),ch);
} else {
if((state_val_58742 === (9))){
var inst_58728 = (state_58741[(9)]);
var inst_58721 = inst_58728;
var state_58741__$1 = (function (){var statearr_58752 = state_58741;
(statearr_58752[(7)] = inst_58721);

return statearr_58752;
})();
var statearr_58753_58767 = state_58741__$1;
(statearr_58753_58767[(2)] = null);

(statearr_58753_58767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58742 === (5))){
var inst_58721 = (state_58741[(7)]);
var state_58741__$1 = state_58741;
var statearr_58754_58768 = state_58741__$1;
(statearr_58754_58768[(2)] = inst_58721);

(statearr_58754_58768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58742 === (10))){
var inst_58735 = (state_58741[(2)]);
var state_58741__$1 = state_58741;
var statearr_58755_58769 = state_58741__$1;
(statearr_58755_58769[(2)] = inst_58735);

(statearr_58755_58769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58742 === (8))){
var inst_58728 = (state_58741[(9)]);
var inst_58731 = cljs.core.deref.call(null,inst_58728);
var state_58741__$1 = state_58741;
var statearr_58756_58770 = state_58741__$1;
(statearr_58756_58770[(2)] = inst_58731);

(statearr_58756_58770[(1)] = (10));


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
});})(c__58254__auto__))
;
return ((function (switch__58164__auto__,c__58254__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__58165__auto__ = null;
var cljs$core$async$reduce_$_state_machine__58165__auto____0 = (function (){
var statearr_58757 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58757[(0)] = cljs$core$async$reduce_$_state_machine__58165__auto__);

(statearr_58757[(1)] = (1));

return statearr_58757;
});
var cljs$core$async$reduce_$_state_machine__58165__auto____1 = (function (state_58741){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e58758){if((e58758 instanceof Object)){
var ex__58168__auto__ = e58758;
var statearr_58759_58771 = state_58741;
(statearr_58759_58771[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58772 = state_58741;
state_58741 = G__58772;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__58165__auto__ = function(state_58741){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__58165__auto____1.call(this,state_58741);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__58165__auto____0;
cljs$core$async$reduce_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__58165__auto____1;
return cljs$core$async$reduce_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto__))
})();
var state__58256__auto__ = (function (){var statearr_58760 = f__58255__auto__.call(null);
(statearr_58760[(6)] = c__58254__auto__);

return statearr_58760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto__))
);

return c__58254__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__58254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto__,f__$1){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto__,f__$1){
return (function (state_58778){
var state_val_58779 = (state_58778[(1)]);
if((state_val_58779 === (1))){
var inst_58773 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_58778__$1 = state_58778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58778__$1,(2),inst_58773);
} else {
if((state_val_58779 === (2))){
var inst_58775 = (state_58778[(2)]);
var inst_58776 = f__$1.call(null,inst_58775);
var state_58778__$1 = state_58778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58778__$1,inst_58776);
} else {
return null;
}
}
});})(c__58254__auto__,f__$1))
;
return ((function (switch__58164__auto__,c__58254__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__58165__auto__ = null;
var cljs$core$async$transduce_$_state_machine__58165__auto____0 = (function (){
var statearr_58780 = [null,null,null,null,null,null,null];
(statearr_58780[(0)] = cljs$core$async$transduce_$_state_machine__58165__auto__);

(statearr_58780[(1)] = (1));

return statearr_58780;
});
var cljs$core$async$transduce_$_state_machine__58165__auto____1 = (function (state_58778){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e58781){if((e58781 instanceof Object)){
var ex__58168__auto__ = e58781;
var statearr_58782_58784 = state_58778;
(statearr_58782_58784[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58785 = state_58778;
state_58778 = G__58785;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__58165__auto__ = function(state_58778){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__58165__auto____1.call(this,state_58778);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__58165__auto____0;
cljs$core$async$transduce_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__58165__auto____1;
return cljs$core$async$transduce_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto__,f__$1))
})();
var state__58256__auto__ = (function (){var statearr_58783 = f__58255__auto__.call(null);
(statearr_58783[(6)] = c__58254__auto__);

return statearr_58783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto__,f__$1))
);

return c__58254__auto__;
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
var G__58787 = arguments.length;
switch (G__58787) {
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
var c__58254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto__){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto__){
return (function (state_58812){
var state_val_58813 = (state_58812[(1)]);
if((state_val_58813 === (7))){
var inst_58794 = (state_58812[(2)]);
var state_58812__$1 = state_58812;
var statearr_58814_58835 = state_58812__$1;
(statearr_58814_58835[(2)] = inst_58794);

(statearr_58814_58835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58813 === (1))){
var inst_58788 = cljs.core.seq.call(null,coll);
var inst_58789 = inst_58788;
var state_58812__$1 = (function (){var statearr_58815 = state_58812;
(statearr_58815[(7)] = inst_58789);

return statearr_58815;
})();
var statearr_58816_58836 = state_58812__$1;
(statearr_58816_58836[(2)] = null);

(statearr_58816_58836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58813 === (4))){
var inst_58789 = (state_58812[(7)]);
var inst_58792 = cljs.core.first.call(null,inst_58789);
var state_58812__$1 = state_58812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58812__$1,(7),ch,inst_58792);
} else {
if((state_val_58813 === (13))){
var inst_58806 = (state_58812[(2)]);
var state_58812__$1 = state_58812;
var statearr_58817_58837 = state_58812__$1;
(statearr_58817_58837[(2)] = inst_58806);

(statearr_58817_58837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58813 === (6))){
var inst_58797 = (state_58812[(2)]);
var state_58812__$1 = state_58812;
if(cljs.core.truth_(inst_58797)){
var statearr_58818_58838 = state_58812__$1;
(statearr_58818_58838[(1)] = (8));

} else {
var statearr_58819_58839 = state_58812__$1;
(statearr_58819_58839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58813 === (3))){
var inst_58810 = (state_58812[(2)]);
var state_58812__$1 = state_58812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58812__$1,inst_58810);
} else {
if((state_val_58813 === (12))){
var state_58812__$1 = state_58812;
var statearr_58820_58840 = state_58812__$1;
(statearr_58820_58840[(2)] = null);

(statearr_58820_58840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58813 === (2))){
var inst_58789 = (state_58812[(7)]);
var state_58812__$1 = state_58812;
if(cljs.core.truth_(inst_58789)){
var statearr_58821_58841 = state_58812__$1;
(statearr_58821_58841[(1)] = (4));

} else {
var statearr_58822_58842 = state_58812__$1;
(statearr_58822_58842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58813 === (11))){
var inst_58803 = cljs.core.async.close_BANG_.call(null,ch);
var state_58812__$1 = state_58812;
var statearr_58823_58843 = state_58812__$1;
(statearr_58823_58843[(2)] = inst_58803);

(statearr_58823_58843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58813 === (9))){
var state_58812__$1 = state_58812;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58824_58844 = state_58812__$1;
(statearr_58824_58844[(1)] = (11));

} else {
var statearr_58825_58845 = state_58812__$1;
(statearr_58825_58845[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58813 === (5))){
var inst_58789 = (state_58812[(7)]);
var state_58812__$1 = state_58812;
var statearr_58826_58846 = state_58812__$1;
(statearr_58826_58846[(2)] = inst_58789);

(statearr_58826_58846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58813 === (10))){
var inst_58808 = (state_58812[(2)]);
var state_58812__$1 = state_58812;
var statearr_58827_58847 = state_58812__$1;
(statearr_58827_58847[(2)] = inst_58808);

(statearr_58827_58847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58813 === (8))){
var inst_58789 = (state_58812[(7)]);
var inst_58799 = cljs.core.next.call(null,inst_58789);
var inst_58789__$1 = inst_58799;
var state_58812__$1 = (function (){var statearr_58828 = state_58812;
(statearr_58828[(7)] = inst_58789__$1);

return statearr_58828;
})();
var statearr_58829_58848 = state_58812__$1;
(statearr_58829_58848[(2)] = null);

(statearr_58829_58848[(1)] = (2));


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
});})(c__58254__auto__))
;
return ((function (switch__58164__auto__,c__58254__auto__){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_58830 = [null,null,null,null,null,null,null,null];
(statearr_58830[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_58830[(1)] = (1));

return statearr_58830;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_58812){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e58831){if((e58831 instanceof Object)){
var ex__58168__auto__ = e58831;
var statearr_58832_58849 = state_58812;
(statearr_58832_58849[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58850 = state_58812;
state_58812 = G__58850;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_58812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_58812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto__))
})();
var state__58256__auto__ = (function (){var statearr_58833 = f__58255__auto__.call(null);
(statearr_58833[(6)] = c__58254__auto__);

return statearr_58833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto__))
);

return c__58254__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async58851 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58851 = (function (ch,cs,meta58852){
this.ch = ch;
this.cs = cs;
this.meta58852 = meta58852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_58853,meta58852__$1){
var self__ = this;
var _58853__$1 = this;
return (new cljs.core.async.t_cljs$core$async58851(self__.ch,self__.cs,meta58852__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async58851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_58853){
var self__ = this;
var _58853__$1 = this;
return self__.meta58852;
});})(cs))
;

cljs.core.async.t_cljs$core$async58851.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58851.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async58851.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58851.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58851.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58851.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58851.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta58852","meta58852",-1455182655,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async58851.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58851";

cljs.core.async.t_cljs$core$async58851.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async58851");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58851.
 */
cljs.core.async.__GT_t_cljs$core$async58851 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async58851(ch__$1,cs__$1,meta58852){
return (new cljs.core.async.t_cljs$core$async58851(ch__$1,cs__$1,meta58852));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async58851(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__58254__auto___59073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___59073,cs,m,dchan,dctr,done){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___59073,cs,m,dchan,dctr,done){
return (function (state_58988){
var state_val_58989 = (state_58988[(1)]);
if((state_val_58989 === (7))){
var inst_58984 = (state_58988[(2)]);
var state_58988__$1 = state_58988;
var statearr_58990_59074 = state_58988__$1;
(statearr_58990_59074[(2)] = inst_58984);

(statearr_58990_59074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (20))){
var inst_58887 = (state_58988[(7)]);
var inst_58899 = cljs.core.first.call(null,inst_58887);
var inst_58900 = cljs.core.nth.call(null,inst_58899,(0),null);
var inst_58901 = cljs.core.nth.call(null,inst_58899,(1),null);
var state_58988__$1 = (function (){var statearr_58991 = state_58988;
(statearr_58991[(8)] = inst_58900);

return statearr_58991;
})();
if(cljs.core.truth_(inst_58901)){
var statearr_58992_59075 = state_58988__$1;
(statearr_58992_59075[(1)] = (22));

} else {
var statearr_58993_59076 = state_58988__$1;
(statearr_58993_59076[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (27))){
var inst_58931 = (state_58988[(9)]);
var inst_58856 = (state_58988[(10)]);
var inst_58929 = (state_58988[(11)]);
var inst_58936 = (state_58988[(12)]);
var inst_58936__$1 = cljs.core._nth.call(null,inst_58929,inst_58931);
var inst_58937 = cljs.core.async.put_BANG_.call(null,inst_58936__$1,inst_58856,done);
var state_58988__$1 = (function (){var statearr_58994 = state_58988;
(statearr_58994[(12)] = inst_58936__$1);

return statearr_58994;
})();
if(cljs.core.truth_(inst_58937)){
var statearr_58995_59077 = state_58988__$1;
(statearr_58995_59077[(1)] = (30));

} else {
var statearr_58996_59078 = state_58988__$1;
(statearr_58996_59078[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (1))){
var state_58988__$1 = state_58988;
var statearr_58997_59079 = state_58988__$1;
(statearr_58997_59079[(2)] = null);

(statearr_58997_59079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (24))){
var inst_58887 = (state_58988[(7)]);
var inst_58906 = (state_58988[(2)]);
var inst_58907 = cljs.core.next.call(null,inst_58887);
var inst_58865 = inst_58907;
var inst_58866 = null;
var inst_58867 = (0);
var inst_58868 = (0);
var state_58988__$1 = (function (){var statearr_58998 = state_58988;
(statearr_58998[(13)] = inst_58906);

(statearr_58998[(14)] = inst_58867);

(statearr_58998[(15)] = inst_58868);

(statearr_58998[(16)] = inst_58865);

(statearr_58998[(17)] = inst_58866);

return statearr_58998;
})();
var statearr_58999_59080 = state_58988__$1;
(statearr_58999_59080[(2)] = null);

(statearr_58999_59080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (39))){
var state_58988__$1 = state_58988;
var statearr_59003_59081 = state_58988__$1;
(statearr_59003_59081[(2)] = null);

(statearr_59003_59081[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (4))){
var inst_58856 = (state_58988[(10)]);
var inst_58856__$1 = (state_58988[(2)]);
var inst_58857 = (inst_58856__$1 == null);
var state_58988__$1 = (function (){var statearr_59004 = state_58988;
(statearr_59004[(10)] = inst_58856__$1);

return statearr_59004;
})();
if(cljs.core.truth_(inst_58857)){
var statearr_59005_59082 = state_58988__$1;
(statearr_59005_59082[(1)] = (5));

} else {
var statearr_59006_59083 = state_58988__$1;
(statearr_59006_59083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (15))){
var inst_58867 = (state_58988[(14)]);
var inst_58868 = (state_58988[(15)]);
var inst_58865 = (state_58988[(16)]);
var inst_58866 = (state_58988[(17)]);
var inst_58883 = (state_58988[(2)]);
var inst_58884 = (inst_58868 + (1));
var tmp59000 = inst_58867;
var tmp59001 = inst_58865;
var tmp59002 = inst_58866;
var inst_58865__$1 = tmp59001;
var inst_58866__$1 = tmp59002;
var inst_58867__$1 = tmp59000;
var inst_58868__$1 = inst_58884;
var state_58988__$1 = (function (){var statearr_59007 = state_58988;
(statearr_59007[(18)] = inst_58883);

(statearr_59007[(14)] = inst_58867__$1);

(statearr_59007[(15)] = inst_58868__$1);

(statearr_59007[(16)] = inst_58865__$1);

(statearr_59007[(17)] = inst_58866__$1);

return statearr_59007;
})();
var statearr_59008_59084 = state_58988__$1;
(statearr_59008_59084[(2)] = null);

(statearr_59008_59084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (21))){
var inst_58910 = (state_58988[(2)]);
var state_58988__$1 = state_58988;
var statearr_59012_59085 = state_58988__$1;
(statearr_59012_59085[(2)] = inst_58910);

(statearr_59012_59085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (31))){
var inst_58936 = (state_58988[(12)]);
var inst_58940 = done.call(null,null);
var inst_58941 = cljs.core.async.untap_STAR_.call(null,m,inst_58936);
var state_58988__$1 = (function (){var statearr_59013 = state_58988;
(statearr_59013[(19)] = inst_58940);

return statearr_59013;
})();
var statearr_59014_59086 = state_58988__$1;
(statearr_59014_59086[(2)] = inst_58941);

(statearr_59014_59086[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (32))){
var inst_58931 = (state_58988[(9)]);
var inst_58930 = (state_58988[(20)]);
var inst_58928 = (state_58988[(21)]);
var inst_58929 = (state_58988[(11)]);
var inst_58943 = (state_58988[(2)]);
var inst_58944 = (inst_58931 + (1));
var tmp59009 = inst_58930;
var tmp59010 = inst_58928;
var tmp59011 = inst_58929;
var inst_58928__$1 = tmp59010;
var inst_58929__$1 = tmp59011;
var inst_58930__$1 = tmp59009;
var inst_58931__$1 = inst_58944;
var state_58988__$1 = (function (){var statearr_59015 = state_58988;
(statearr_59015[(9)] = inst_58931__$1);

(statearr_59015[(20)] = inst_58930__$1);

(statearr_59015[(21)] = inst_58928__$1);

(statearr_59015[(11)] = inst_58929__$1);

(statearr_59015[(22)] = inst_58943);

return statearr_59015;
})();
var statearr_59016_59087 = state_58988__$1;
(statearr_59016_59087[(2)] = null);

(statearr_59016_59087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (40))){
var inst_58956 = (state_58988[(23)]);
var inst_58960 = done.call(null,null);
var inst_58961 = cljs.core.async.untap_STAR_.call(null,m,inst_58956);
var state_58988__$1 = (function (){var statearr_59017 = state_58988;
(statearr_59017[(24)] = inst_58960);

return statearr_59017;
})();
var statearr_59018_59088 = state_58988__$1;
(statearr_59018_59088[(2)] = inst_58961);

(statearr_59018_59088[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (33))){
var inst_58947 = (state_58988[(25)]);
var inst_58949 = cljs.core.chunked_seq_QMARK_.call(null,inst_58947);
var state_58988__$1 = state_58988;
if(inst_58949){
var statearr_59019_59089 = state_58988__$1;
(statearr_59019_59089[(1)] = (36));

} else {
var statearr_59020_59090 = state_58988__$1;
(statearr_59020_59090[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (13))){
var inst_58877 = (state_58988[(26)]);
var inst_58880 = cljs.core.async.close_BANG_.call(null,inst_58877);
var state_58988__$1 = state_58988;
var statearr_59021_59091 = state_58988__$1;
(statearr_59021_59091[(2)] = inst_58880);

(statearr_59021_59091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (22))){
var inst_58900 = (state_58988[(8)]);
var inst_58903 = cljs.core.async.close_BANG_.call(null,inst_58900);
var state_58988__$1 = state_58988;
var statearr_59022_59092 = state_58988__$1;
(statearr_59022_59092[(2)] = inst_58903);

(statearr_59022_59092[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (36))){
var inst_58947 = (state_58988[(25)]);
var inst_58951 = cljs.core.chunk_first.call(null,inst_58947);
var inst_58952 = cljs.core.chunk_rest.call(null,inst_58947);
var inst_58953 = cljs.core.count.call(null,inst_58951);
var inst_58928 = inst_58952;
var inst_58929 = inst_58951;
var inst_58930 = inst_58953;
var inst_58931 = (0);
var state_58988__$1 = (function (){var statearr_59023 = state_58988;
(statearr_59023[(9)] = inst_58931);

(statearr_59023[(20)] = inst_58930);

(statearr_59023[(21)] = inst_58928);

(statearr_59023[(11)] = inst_58929);

return statearr_59023;
})();
var statearr_59024_59093 = state_58988__$1;
(statearr_59024_59093[(2)] = null);

(statearr_59024_59093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (41))){
var inst_58947 = (state_58988[(25)]);
var inst_58963 = (state_58988[(2)]);
var inst_58964 = cljs.core.next.call(null,inst_58947);
var inst_58928 = inst_58964;
var inst_58929 = null;
var inst_58930 = (0);
var inst_58931 = (0);
var state_58988__$1 = (function (){var statearr_59025 = state_58988;
(statearr_59025[(9)] = inst_58931);

(statearr_59025[(20)] = inst_58930);

(statearr_59025[(21)] = inst_58928);

(statearr_59025[(11)] = inst_58929);

(statearr_59025[(27)] = inst_58963);

return statearr_59025;
})();
var statearr_59026_59094 = state_58988__$1;
(statearr_59026_59094[(2)] = null);

(statearr_59026_59094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (43))){
var state_58988__$1 = state_58988;
var statearr_59027_59095 = state_58988__$1;
(statearr_59027_59095[(2)] = null);

(statearr_59027_59095[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (29))){
var inst_58972 = (state_58988[(2)]);
var state_58988__$1 = state_58988;
var statearr_59028_59096 = state_58988__$1;
(statearr_59028_59096[(2)] = inst_58972);

(statearr_59028_59096[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (44))){
var inst_58981 = (state_58988[(2)]);
var state_58988__$1 = (function (){var statearr_59029 = state_58988;
(statearr_59029[(28)] = inst_58981);

return statearr_59029;
})();
var statearr_59030_59097 = state_58988__$1;
(statearr_59030_59097[(2)] = null);

(statearr_59030_59097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (6))){
var inst_58920 = (state_58988[(29)]);
var inst_58919 = cljs.core.deref.call(null,cs);
var inst_58920__$1 = cljs.core.keys.call(null,inst_58919);
var inst_58921 = cljs.core.count.call(null,inst_58920__$1);
var inst_58922 = cljs.core.reset_BANG_.call(null,dctr,inst_58921);
var inst_58927 = cljs.core.seq.call(null,inst_58920__$1);
var inst_58928 = inst_58927;
var inst_58929 = null;
var inst_58930 = (0);
var inst_58931 = (0);
var state_58988__$1 = (function (){var statearr_59031 = state_58988;
(statearr_59031[(9)] = inst_58931);

(statearr_59031[(20)] = inst_58930);

(statearr_59031[(21)] = inst_58928);

(statearr_59031[(11)] = inst_58929);

(statearr_59031[(29)] = inst_58920__$1);

(statearr_59031[(30)] = inst_58922);

return statearr_59031;
})();
var statearr_59032_59098 = state_58988__$1;
(statearr_59032_59098[(2)] = null);

(statearr_59032_59098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (28))){
var inst_58928 = (state_58988[(21)]);
var inst_58947 = (state_58988[(25)]);
var inst_58947__$1 = cljs.core.seq.call(null,inst_58928);
var state_58988__$1 = (function (){var statearr_59033 = state_58988;
(statearr_59033[(25)] = inst_58947__$1);

return statearr_59033;
})();
if(inst_58947__$1){
var statearr_59034_59099 = state_58988__$1;
(statearr_59034_59099[(1)] = (33));

} else {
var statearr_59035_59100 = state_58988__$1;
(statearr_59035_59100[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (25))){
var inst_58931 = (state_58988[(9)]);
var inst_58930 = (state_58988[(20)]);
var inst_58933 = (inst_58931 < inst_58930);
var inst_58934 = inst_58933;
var state_58988__$1 = state_58988;
if(cljs.core.truth_(inst_58934)){
var statearr_59036_59101 = state_58988__$1;
(statearr_59036_59101[(1)] = (27));

} else {
var statearr_59037_59102 = state_58988__$1;
(statearr_59037_59102[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (34))){
var state_58988__$1 = state_58988;
var statearr_59038_59103 = state_58988__$1;
(statearr_59038_59103[(2)] = null);

(statearr_59038_59103[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (17))){
var state_58988__$1 = state_58988;
var statearr_59039_59104 = state_58988__$1;
(statearr_59039_59104[(2)] = null);

(statearr_59039_59104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (3))){
var inst_58986 = (state_58988[(2)]);
var state_58988__$1 = state_58988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58988__$1,inst_58986);
} else {
if((state_val_58989 === (12))){
var inst_58915 = (state_58988[(2)]);
var state_58988__$1 = state_58988;
var statearr_59040_59105 = state_58988__$1;
(statearr_59040_59105[(2)] = inst_58915);

(statearr_59040_59105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (2))){
var state_58988__$1 = state_58988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58988__$1,(4),ch);
} else {
if((state_val_58989 === (23))){
var state_58988__$1 = state_58988;
var statearr_59041_59106 = state_58988__$1;
(statearr_59041_59106[(2)] = null);

(statearr_59041_59106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (35))){
var inst_58970 = (state_58988[(2)]);
var state_58988__$1 = state_58988;
var statearr_59042_59107 = state_58988__$1;
(statearr_59042_59107[(2)] = inst_58970);

(statearr_59042_59107[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (19))){
var inst_58887 = (state_58988[(7)]);
var inst_58891 = cljs.core.chunk_first.call(null,inst_58887);
var inst_58892 = cljs.core.chunk_rest.call(null,inst_58887);
var inst_58893 = cljs.core.count.call(null,inst_58891);
var inst_58865 = inst_58892;
var inst_58866 = inst_58891;
var inst_58867 = inst_58893;
var inst_58868 = (0);
var state_58988__$1 = (function (){var statearr_59043 = state_58988;
(statearr_59043[(14)] = inst_58867);

(statearr_59043[(15)] = inst_58868);

(statearr_59043[(16)] = inst_58865);

(statearr_59043[(17)] = inst_58866);

return statearr_59043;
})();
var statearr_59044_59108 = state_58988__$1;
(statearr_59044_59108[(2)] = null);

(statearr_59044_59108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (11))){
var inst_58887 = (state_58988[(7)]);
var inst_58865 = (state_58988[(16)]);
var inst_58887__$1 = cljs.core.seq.call(null,inst_58865);
var state_58988__$1 = (function (){var statearr_59045 = state_58988;
(statearr_59045[(7)] = inst_58887__$1);

return statearr_59045;
})();
if(inst_58887__$1){
var statearr_59046_59109 = state_58988__$1;
(statearr_59046_59109[(1)] = (16));

} else {
var statearr_59047_59110 = state_58988__$1;
(statearr_59047_59110[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (9))){
var inst_58917 = (state_58988[(2)]);
var state_58988__$1 = state_58988;
var statearr_59048_59111 = state_58988__$1;
(statearr_59048_59111[(2)] = inst_58917);

(statearr_59048_59111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (5))){
var inst_58863 = cljs.core.deref.call(null,cs);
var inst_58864 = cljs.core.seq.call(null,inst_58863);
var inst_58865 = inst_58864;
var inst_58866 = null;
var inst_58867 = (0);
var inst_58868 = (0);
var state_58988__$1 = (function (){var statearr_59049 = state_58988;
(statearr_59049[(14)] = inst_58867);

(statearr_59049[(15)] = inst_58868);

(statearr_59049[(16)] = inst_58865);

(statearr_59049[(17)] = inst_58866);

return statearr_59049;
})();
var statearr_59050_59112 = state_58988__$1;
(statearr_59050_59112[(2)] = null);

(statearr_59050_59112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (14))){
var state_58988__$1 = state_58988;
var statearr_59051_59113 = state_58988__$1;
(statearr_59051_59113[(2)] = null);

(statearr_59051_59113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (45))){
var inst_58978 = (state_58988[(2)]);
var state_58988__$1 = state_58988;
var statearr_59052_59114 = state_58988__$1;
(statearr_59052_59114[(2)] = inst_58978);

(statearr_59052_59114[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (26))){
var inst_58920 = (state_58988[(29)]);
var inst_58974 = (state_58988[(2)]);
var inst_58975 = cljs.core.seq.call(null,inst_58920);
var state_58988__$1 = (function (){var statearr_59053 = state_58988;
(statearr_59053[(31)] = inst_58974);

return statearr_59053;
})();
if(inst_58975){
var statearr_59054_59115 = state_58988__$1;
(statearr_59054_59115[(1)] = (42));

} else {
var statearr_59055_59116 = state_58988__$1;
(statearr_59055_59116[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (16))){
var inst_58887 = (state_58988[(7)]);
var inst_58889 = cljs.core.chunked_seq_QMARK_.call(null,inst_58887);
var state_58988__$1 = state_58988;
if(inst_58889){
var statearr_59056_59117 = state_58988__$1;
(statearr_59056_59117[(1)] = (19));

} else {
var statearr_59057_59118 = state_58988__$1;
(statearr_59057_59118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (38))){
var inst_58967 = (state_58988[(2)]);
var state_58988__$1 = state_58988;
var statearr_59058_59119 = state_58988__$1;
(statearr_59058_59119[(2)] = inst_58967);

(statearr_59058_59119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (30))){
var state_58988__$1 = state_58988;
var statearr_59059_59120 = state_58988__$1;
(statearr_59059_59120[(2)] = null);

(statearr_59059_59120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (10))){
var inst_58868 = (state_58988[(15)]);
var inst_58866 = (state_58988[(17)]);
var inst_58876 = cljs.core._nth.call(null,inst_58866,inst_58868);
var inst_58877 = cljs.core.nth.call(null,inst_58876,(0),null);
var inst_58878 = cljs.core.nth.call(null,inst_58876,(1),null);
var state_58988__$1 = (function (){var statearr_59060 = state_58988;
(statearr_59060[(26)] = inst_58877);

return statearr_59060;
})();
if(cljs.core.truth_(inst_58878)){
var statearr_59061_59121 = state_58988__$1;
(statearr_59061_59121[(1)] = (13));

} else {
var statearr_59062_59122 = state_58988__$1;
(statearr_59062_59122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (18))){
var inst_58913 = (state_58988[(2)]);
var state_58988__$1 = state_58988;
var statearr_59063_59123 = state_58988__$1;
(statearr_59063_59123[(2)] = inst_58913);

(statearr_59063_59123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (42))){
var state_58988__$1 = state_58988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58988__$1,(45),dchan);
} else {
if((state_val_58989 === (37))){
var inst_58856 = (state_58988[(10)]);
var inst_58956 = (state_58988[(23)]);
var inst_58947 = (state_58988[(25)]);
var inst_58956__$1 = cljs.core.first.call(null,inst_58947);
var inst_58957 = cljs.core.async.put_BANG_.call(null,inst_58956__$1,inst_58856,done);
var state_58988__$1 = (function (){var statearr_59064 = state_58988;
(statearr_59064[(23)] = inst_58956__$1);

return statearr_59064;
})();
if(cljs.core.truth_(inst_58957)){
var statearr_59065_59124 = state_58988__$1;
(statearr_59065_59124[(1)] = (39));

} else {
var statearr_59066_59125 = state_58988__$1;
(statearr_59066_59125[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58989 === (8))){
var inst_58867 = (state_58988[(14)]);
var inst_58868 = (state_58988[(15)]);
var inst_58870 = (inst_58868 < inst_58867);
var inst_58871 = inst_58870;
var state_58988__$1 = state_58988;
if(cljs.core.truth_(inst_58871)){
var statearr_59067_59126 = state_58988__$1;
(statearr_59067_59126[(1)] = (10));

} else {
var statearr_59068_59127 = state_58988__$1;
(statearr_59068_59127[(1)] = (11));

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
});})(c__58254__auto___59073,cs,m,dchan,dctr,done))
;
return ((function (switch__58164__auto__,c__58254__auto___59073,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__58165__auto__ = null;
var cljs$core$async$mult_$_state_machine__58165__auto____0 = (function (){
var statearr_59069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59069[(0)] = cljs$core$async$mult_$_state_machine__58165__auto__);

(statearr_59069[(1)] = (1));

return statearr_59069;
});
var cljs$core$async$mult_$_state_machine__58165__auto____1 = (function (state_58988){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_58988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e59070){if((e59070 instanceof Object)){
var ex__58168__auto__ = e59070;
var statearr_59071_59128 = state_58988;
(statearr_59071_59128[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59129 = state_58988;
state_58988 = G__59129;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__58165__auto__ = function(state_58988){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__58165__auto____1.call(this,state_58988);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__58165__auto____0;
cljs$core$async$mult_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__58165__auto____1;
return cljs$core$async$mult_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___59073,cs,m,dchan,dctr,done))
})();
var state__58256__auto__ = (function (){var statearr_59072 = f__58255__auto__.call(null);
(statearr_59072[(6)] = c__58254__auto___59073);

return statearr_59072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___59073,cs,m,dchan,dctr,done))
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
var G__59131 = arguments.length;
switch (G__59131) {
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
var len__4499__auto___59143 = arguments.length;
var i__4500__auto___59144 = (0);
while(true){
if((i__4500__auto___59144 < len__4499__auto___59143)){
args__4502__auto__.push((arguments[i__4500__auto___59144]));

var G__59145 = (i__4500__auto___59144 + (1));
i__4500__auto___59144 = G__59145;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59137){
var map__59138 = p__59137;
var map__59138__$1 = ((((!((map__59138 == null)))?(((((map__59138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59138):map__59138);
var opts = map__59138__$1;
var statearr_59140_59146 = state;
(statearr_59140_59146[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__59138,map__59138__$1,opts){
return (function (val){
var statearr_59141_59147 = state;
(statearr_59141_59147[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__59138,map__59138__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_59142_59148 = state;
(statearr_59142_59148[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq59133){
var G__59134 = cljs.core.first.call(null,seq59133);
var seq59133__$1 = cljs.core.next.call(null,seq59133);
var G__59135 = cljs.core.first.call(null,seq59133__$1);
var seq59133__$2 = cljs.core.next.call(null,seq59133__$1);
var G__59136 = cljs.core.first.call(null,seq59133__$2);
var seq59133__$3 = cljs.core.next.call(null,seq59133__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59134,G__59135,G__59136,seq59133__$3);
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
if(typeof cljs.core.async.t_cljs$core$async59149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59149 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta59150){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta59150 = meta59150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59151,meta59150__$1){
var self__ = this;
var _59151__$1 = this;
return (new cljs.core.async.t_cljs$core$async59149(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta59150__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59151){
var self__ = this;
var _59151__$1 = this;
return self__.meta59150;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59149.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59149.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59149.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59149.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59149.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59149.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59149.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async59149.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta59150","meta59150",540242243,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async59149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59149";

cljs.core.async.t_cljs$core$async59149.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59149");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59149.
 */
cljs.core.async.__GT_t_cljs$core$async59149 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async59149(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta59150){
return (new cljs.core.async.t_cljs$core$async59149(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta59150));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async59149(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58254__auto___59313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___59313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___59313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_59253){
var state_val_59254 = (state_59253[(1)]);
if((state_val_59254 === (7))){
var inst_59168 = (state_59253[(2)]);
var state_59253__$1 = state_59253;
var statearr_59255_59314 = state_59253__$1;
(statearr_59255_59314[(2)] = inst_59168);

(statearr_59255_59314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (20))){
var inst_59180 = (state_59253[(7)]);
var state_59253__$1 = state_59253;
var statearr_59256_59315 = state_59253__$1;
(statearr_59256_59315[(2)] = inst_59180);

(statearr_59256_59315[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (27))){
var state_59253__$1 = state_59253;
var statearr_59257_59316 = state_59253__$1;
(statearr_59257_59316[(2)] = null);

(statearr_59257_59316[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (1))){
var inst_59155 = (state_59253[(8)]);
var inst_59155__$1 = calc_state.call(null);
var inst_59157 = (inst_59155__$1 == null);
var inst_59158 = cljs.core.not.call(null,inst_59157);
var state_59253__$1 = (function (){var statearr_59258 = state_59253;
(statearr_59258[(8)] = inst_59155__$1);

return statearr_59258;
})();
if(inst_59158){
var statearr_59259_59317 = state_59253__$1;
(statearr_59259_59317[(1)] = (2));

} else {
var statearr_59260_59318 = state_59253__$1;
(statearr_59260_59318[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (24))){
var inst_59227 = (state_59253[(9)]);
var inst_59213 = (state_59253[(10)]);
var inst_59204 = (state_59253[(11)]);
var inst_59227__$1 = inst_59204.call(null,inst_59213);
var state_59253__$1 = (function (){var statearr_59261 = state_59253;
(statearr_59261[(9)] = inst_59227__$1);

return statearr_59261;
})();
if(cljs.core.truth_(inst_59227__$1)){
var statearr_59262_59319 = state_59253__$1;
(statearr_59262_59319[(1)] = (29));

} else {
var statearr_59263_59320 = state_59253__$1;
(statearr_59263_59320[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (4))){
var inst_59171 = (state_59253[(2)]);
var state_59253__$1 = state_59253;
if(cljs.core.truth_(inst_59171)){
var statearr_59264_59321 = state_59253__$1;
(statearr_59264_59321[(1)] = (8));

} else {
var statearr_59265_59322 = state_59253__$1;
(statearr_59265_59322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (15))){
var inst_59198 = (state_59253[(2)]);
var state_59253__$1 = state_59253;
if(cljs.core.truth_(inst_59198)){
var statearr_59266_59323 = state_59253__$1;
(statearr_59266_59323[(1)] = (19));

} else {
var statearr_59267_59324 = state_59253__$1;
(statearr_59267_59324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (21))){
var inst_59203 = (state_59253[(12)]);
var inst_59203__$1 = (state_59253[(2)]);
var inst_59204 = cljs.core.get.call(null,inst_59203__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59205 = cljs.core.get.call(null,inst_59203__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59206 = cljs.core.get.call(null,inst_59203__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59253__$1 = (function (){var statearr_59268 = state_59253;
(statearr_59268[(13)] = inst_59205);

(statearr_59268[(12)] = inst_59203__$1);

(statearr_59268[(11)] = inst_59204);

return statearr_59268;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_59253__$1,(22),inst_59206);
} else {
if((state_val_59254 === (31))){
var inst_59235 = (state_59253[(2)]);
var state_59253__$1 = state_59253;
if(cljs.core.truth_(inst_59235)){
var statearr_59269_59325 = state_59253__$1;
(statearr_59269_59325[(1)] = (32));

} else {
var statearr_59270_59326 = state_59253__$1;
(statearr_59270_59326[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (32))){
var inst_59212 = (state_59253[(14)]);
var state_59253__$1 = state_59253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59253__$1,(35),out,inst_59212);
} else {
if((state_val_59254 === (33))){
var inst_59203 = (state_59253[(12)]);
var inst_59180 = inst_59203;
var state_59253__$1 = (function (){var statearr_59271 = state_59253;
(statearr_59271[(7)] = inst_59180);

return statearr_59271;
})();
var statearr_59272_59327 = state_59253__$1;
(statearr_59272_59327[(2)] = null);

(statearr_59272_59327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (13))){
var inst_59180 = (state_59253[(7)]);
var inst_59187 = inst_59180.cljs$lang$protocol_mask$partition0$;
var inst_59188 = (inst_59187 & (64));
var inst_59189 = inst_59180.cljs$core$ISeq$;
var inst_59190 = (cljs.core.PROTOCOL_SENTINEL === inst_59189);
var inst_59191 = ((inst_59188) || (inst_59190));
var state_59253__$1 = state_59253;
if(cljs.core.truth_(inst_59191)){
var statearr_59273_59328 = state_59253__$1;
(statearr_59273_59328[(1)] = (16));

} else {
var statearr_59274_59329 = state_59253__$1;
(statearr_59274_59329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (22))){
var inst_59212 = (state_59253[(14)]);
var inst_59213 = (state_59253[(10)]);
var inst_59211 = (state_59253[(2)]);
var inst_59212__$1 = cljs.core.nth.call(null,inst_59211,(0),null);
var inst_59213__$1 = cljs.core.nth.call(null,inst_59211,(1),null);
var inst_59214 = (inst_59212__$1 == null);
var inst_59215 = cljs.core._EQ_.call(null,inst_59213__$1,change);
var inst_59216 = ((inst_59214) || (inst_59215));
var state_59253__$1 = (function (){var statearr_59275 = state_59253;
(statearr_59275[(14)] = inst_59212__$1);

(statearr_59275[(10)] = inst_59213__$1);

return statearr_59275;
})();
if(cljs.core.truth_(inst_59216)){
var statearr_59276_59330 = state_59253__$1;
(statearr_59276_59330[(1)] = (23));

} else {
var statearr_59277_59331 = state_59253__$1;
(statearr_59277_59331[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (36))){
var inst_59203 = (state_59253[(12)]);
var inst_59180 = inst_59203;
var state_59253__$1 = (function (){var statearr_59278 = state_59253;
(statearr_59278[(7)] = inst_59180);

return statearr_59278;
})();
var statearr_59279_59332 = state_59253__$1;
(statearr_59279_59332[(2)] = null);

(statearr_59279_59332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (29))){
var inst_59227 = (state_59253[(9)]);
var state_59253__$1 = state_59253;
var statearr_59280_59333 = state_59253__$1;
(statearr_59280_59333[(2)] = inst_59227);

(statearr_59280_59333[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (6))){
var state_59253__$1 = state_59253;
var statearr_59281_59334 = state_59253__$1;
(statearr_59281_59334[(2)] = false);

(statearr_59281_59334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (28))){
var inst_59223 = (state_59253[(2)]);
var inst_59224 = calc_state.call(null);
var inst_59180 = inst_59224;
var state_59253__$1 = (function (){var statearr_59282 = state_59253;
(statearr_59282[(15)] = inst_59223);

(statearr_59282[(7)] = inst_59180);

return statearr_59282;
})();
var statearr_59283_59335 = state_59253__$1;
(statearr_59283_59335[(2)] = null);

(statearr_59283_59335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (25))){
var inst_59249 = (state_59253[(2)]);
var state_59253__$1 = state_59253;
var statearr_59284_59336 = state_59253__$1;
(statearr_59284_59336[(2)] = inst_59249);

(statearr_59284_59336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (34))){
var inst_59247 = (state_59253[(2)]);
var state_59253__$1 = state_59253;
var statearr_59285_59337 = state_59253__$1;
(statearr_59285_59337[(2)] = inst_59247);

(statearr_59285_59337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (17))){
var state_59253__$1 = state_59253;
var statearr_59286_59338 = state_59253__$1;
(statearr_59286_59338[(2)] = false);

(statearr_59286_59338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (3))){
var state_59253__$1 = state_59253;
var statearr_59287_59339 = state_59253__$1;
(statearr_59287_59339[(2)] = false);

(statearr_59287_59339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (12))){
var inst_59251 = (state_59253[(2)]);
var state_59253__$1 = state_59253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59253__$1,inst_59251);
} else {
if((state_val_59254 === (2))){
var inst_59155 = (state_59253[(8)]);
var inst_59160 = inst_59155.cljs$lang$protocol_mask$partition0$;
var inst_59161 = (inst_59160 & (64));
var inst_59162 = inst_59155.cljs$core$ISeq$;
var inst_59163 = (cljs.core.PROTOCOL_SENTINEL === inst_59162);
var inst_59164 = ((inst_59161) || (inst_59163));
var state_59253__$1 = state_59253;
if(cljs.core.truth_(inst_59164)){
var statearr_59288_59340 = state_59253__$1;
(statearr_59288_59340[(1)] = (5));

} else {
var statearr_59289_59341 = state_59253__$1;
(statearr_59289_59341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (23))){
var inst_59212 = (state_59253[(14)]);
var inst_59218 = (inst_59212 == null);
var state_59253__$1 = state_59253;
if(cljs.core.truth_(inst_59218)){
var statearr_59290_59342 = state_59253__$1;
(statearr_59290_59342[(1)] = (26));

} else {
var statearr_59291_59343 = state_59253__$1;
(statearr_59291_59343[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (35))){
var inst_59238 = (state_59253[(2)]);
var state_59253__$1 = state_59253;
if(cljs.core.truth_(inst_59238)){
var statearr_59292_59344 = state_59253__$1;
(statearr_59292_59344[(1)] = (36));

} else {
var statearr_59293_59345 = state_59253__$1;
(statearr_59293_59345[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (19))){
var inst_59180 = (state_59253[(7)]);
var inst_59200 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59180);
var state_59253__$1 = state_59253;
var statearr_59294_59346 = state_59253__$1;
(statearr_59294_59346[(2)] = inst_59200);

(statearr_59294_59346[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (11))){
var inst_59180 = (state_59253[(7)]);
var inst_59184 = (inst_59180 == null);
var inst_59185 = cljs.core.not.call(null,inst_59184);
var state_59253__$1 = state_59253;
if(inst_59185){
var statearr_59295_59347 = state_59253__$1;
(statearr_59295_59347[(1)] = (13));

} else {
var statearr_59296_59348 = state_59253__$1;
(statearr_59296_59348[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (9))){
var inst_59155 = (state_59253[(8)]);
var state_59253__$1 = state_59253;
var statearr_59297_59349 = state_59253__$1;
(statearr_59297_59349[(2)] = inst_59155);

(statearr_59297_59349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (5))){
var state_59253__$1 = state_59253;
var statearr_59298_59350 = state_59253__$1;
(statearr_59298_59350[(2)] = true);

(statearr_59298_59350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (14))){
var state_59253__$1 = state_59253;
var statearr_59299_59351 = state_59253__$1;
(statearr_59299_59351[(2)] = false);

(statearr_59299_59351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (26))){
var inst_59213 = (state_59253[(10)]);
var inst_59220 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_59213);
var state_59253__$1 = state_59253;
var statearr_59300_59352 = state_59253__$1;
(statearr_59300_59352[(2)] = inst_59220);

(statearr_59300_59352[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (16))){
var state_59253__$1 = state_59253;
var statearr_59301_59353 = state_59253__$1;
(statearr_59301_59353[(2)] = true);

(statearr_59301_59353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (38))){
var inst_59243 = (state_59253[(2)]);
var state_59253__$1 = state_59253;
var statearr_59302_59354 = state_59253__$1;
(statearr_59302_59354[(2)] = inst_59243);

(statearr_59302_59354[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (30))){
var inst_59205 = (state_59253[(13)]);
var inst_59213 = (state_59253[(10)]);
var inst_59204 = (state_59253[(11)]);
var inst_59230 = cljs.core.empty_QMARK_.call(null,inst_59204);
var inst_59231 = inst_59205.call(null,inst_59213);
var inst_59232 = cljs.core.not.call(null,inst_59231);
var inst_59233 = ((inst_59230) && (inst_59232));
var state_59253__$1 = state_59253;
var statearr_59303_59355 = state_59253__$1;
(statearr_59303_59355[(2)] = inst_59233);

(statearr_59303_59355[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (10))){
var inst_59155 = (state_59253[(8)]);
var inst_59176 = (state_59253[(2)]);
var inst_59177 = cljs.core.get.call(null,inst_59176,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59178 = cljs.core.get.call(null,inst_59176,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59179 = cljs.core.get.call(null,inst_59176,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59180 = inst_59155;
var state_59253__$1 = (function (){var statearr_59304 = state_59253;
(statearr_59304[(16)] = inst_59177);

(statearr_59304[(17)] = inst_59179);

(statearr_59304[(18)] = inst_59178);

(statearr_59304[(7)] = inst_59180);

return statearr_59304;
})();
var statearr_59305_59356 = state_59253__$1;
(statearr_59305_59356[(2)] = null);

(statearr_59305_59356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (18))){
var inst_59195 = (state_59253[(2)]);
var state_59253__$1 = state_59253;
var statearr_59306_59357 = state_59253__$1;
(statearr_59306_59357[(2)] = inst_59195);

(statearr_59306_59357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (37))){
var state_59253__$1 = state_59253;
var statearr_59307_59358 = state_59253__$1;
(statearr_59307_59358[(2)] = null);

(statearr_59307_59358[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59254 === (8))){
var inst_59155 = (state_59253[(8)]);
var inst_59173 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59155);
var state_59253__$1 = state_59253;
var statearr_59308_59359 = state_59253__$1;
(statearr_59308_59359[(2)] = inst_59173);

(statearr_59308_59359[(1)] = (10));


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
});})(c__58254__auto___59313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__58164__auto__,c__58254__auto___59313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__58165__auto__ = null;
var cljs$core$async$mix_$_state_machine__58165__auto____0 = (function (){
var statearr_59309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59309[(0)] = cljs$core$async$mix_$_state_machine__58165__auto__);

(statearr_59309[(1)] = (1));

return statearr_59309;
});
var cljs$core$async$mix_$_state_machine__58165__auto____1 = (function (state_59253){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_59253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e59310){if((e59310 instanceof Object)){
var ex__58168__auto__ = e59310;
var statearr_59311_59360 = state_59253;
(statearr_59311_59360[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59361 = state_59253;
state_59253 = G__59361;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__58165__auto__ = function(state_59253){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__58165__auto____1.call(this,state_59253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__58165__auto____0;
cljs$core$async$mix_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__58165__auto____1;
return cljs$core$async$mix_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___59313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__58256__auto__ = (function (){var statearr_59312 = f__58255__auto__.call(null);
(statearr_59312[(6)] = c__58254__auto___59313);

return statearr_59312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___59313,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__59363 = arguments.length;
switch (G__59363) {
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
var G__59367 = arguments.length;
switch (G__59367) {
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
return (function (p1__59365_SHARP_){
if(cljs.core.truth_(p1__59365_SHARP_.call(null,topic))){
return p1__59365_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__59365_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async59368 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59368 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59369){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59369 = meta59369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_59370,meta59369__$1){
var self__ = this;
var _59370__$1 = this;
return (new cljs.core.async.t_cljs$core$async59368(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59369__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_59370){
var self__ = this;
var _59370__$1 = this;
return self__.meta59369;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59368.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59368.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59368.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59368.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59368.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async59368.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59368.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59368.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59369","meta59369",-1437871183,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59368.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59368";

cljs.core.async.t_cljs$core$async59368.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59368");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59368.
 */
cljs.core.async.__GT_t_cljs$core$async59368 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async59368(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59369){
return (new cljs.core.async.t_cljs$core$async59368(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59369));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async59368(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58254__auto___59488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___59488,mults,ensure_mult,p){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___59488,mults,ensure_mult,p){
return (function (state_59442){
var state_val_59443 = (state_59442[(1)]);
if((state_val_59443 === (7))){
var inst_59438 = (state_59442[(2)]);
var state_59442__$1 = state_59442;
var statearr_59444_59489 = state_59442__$1;
(statearr_59444_59489[(2)] = inst_59438);

(statearr_59444_59489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (20))){
var state_59442__$1 = state_59442;
var statearr_59445_59490 = state_59442__$1;
(statearr_59445_59490[(2)] = null);

(statearr_59445_59490[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (1))){
var state_59442__$1 = state_59442;
var statearr_59446_59491 = state_59442__$1;
(statearr_59446_59491[(2)] = null);

(statearr_59446_59491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (24))){
var inst_59421 = (state_59442[(7)]);
var inst_59430 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_59421);
var state_59442__$1 = state_59442;
var statearr_59447_59492 = state_59442__$1;
(statearr_59447_59492[(2)] = inst_59430);

(statearr_59447_59492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (4))){
var inst_59373 = (state_59442[(8)]);
var inst_59373__$1 = (state_59442[(2)]);
var inst_59374 = (inst_59373__$1 == null);
var state_59442__$1 = (function (){var statearr_59448 = state_59442;
(statearr_59448[(8)] = inst_59373__$1);

return statearr_59448;
})();
if(cljs.core.truth_(inst_59374)){
var statearr_59449_59493 = state_59442__$1;
(statearr_59449_59493[(1)] = (5));

} else {
var statearr_59450_59494 = state_59442__$1;
(statearr_59450_59494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (15))){
var inst_59415 = (state_59442[(2)]);
var state_59442__$1 = state_59442;
var statearr_59451_59495 = state_59442__$1;
(statearr_59451_59495[(2)] = inst_59415);

(statearr_59451_59495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (21))){
var inst_59435 = (state_59442[(2)]);
var state_59442__$1 = (function (){var statearr_59452 = state_59442;
(statearr_59452[(9)] = inst_59435);

return statearr_59452;
})();
var statearr_59453_59496 = state_59442__$1;
(statearr_59453_59496[(2)] = null);

(statearr_59453_59496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (13))){
var inst_59397 = (state_59442[(10)]);
var inst_59399 = cljs.core.chunked_seq_QMARK_.call(null,inst_59397);
var state_59442__$1 = state_59442;
if(inst_59399){
var statearr_59454_59497 = state_59442__$1;
(statearr_59454_59497[(1)] = (16));

} else {
var statearr_59455_59498 = state_59442__$1;
(statearr_59455_59498[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (22))){
var inst_59427 = (state_59442[(2)]);
var state_59442__$1 = state_59442;
if(cljs.core.truth_(inst_59427)){
var statearr_59456_59499 = state_59442__$1;
(statearr_59456_59499[(1)] = (23));

} else {
var statearr_59457_59500 = state_59442__$1;
(statearr_59457_59500[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (6))){
var inst_59421 = (state_59442[(7)]);
var inst_59373 = (state_59442[(8)]);
var inst_59423 = (state_59442[(11)]);
var inst_59421__$1 = topic_fn.call(null,inst_59373);
var inst_59422 = cljs.core.deref.call(null,mults);
var inst_59423__$1 = cljs.core.get.call(null,inst_59422,inst_59421__$1);
var state_59442__$1 = (function (){var statearr_59458 = state_59442;
(statearr_59458[(7)] = inst_59421__$1);

(statearr_59458[(11)] = inst_59423__$1);

return statearr_59458;
})();
if(cljs.core.truth_(inst_59423__$1)){
var statearr_59459_59501 = state_59442__$1;
(statearr_59459_59501[(1)] = (19));

} else {
var statearr_59460_59502 = state_59442__$1;
(statearr_59460_59502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (25))){
var inst_59432 = (state_59442[(2)]);
var state_59442__$1 = state_59442;
var statearr_59461_59503 = state_59442__$1;
(statearr_59461_59503[(2)] = inst_59432);

(statearr_59461_59503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (17))){
var inst_59397 = (state_59442[(10)]);
var inst_59406 = cljs.core.first.call(null,inst_59397);
var inst_59407 = cljs.core.async.muxch_STAR_.call(null,inst_59406);
var inst_59408 = cljs.core.async.close_BANG_.call(null,inst_59407);
var inst_59409 = cljs.core.next.call(null,inst_59397);
var inst_59383 = inst_59409;
var inst_59384 = null;
var inst_59385 = (0);
var inst_59386 = (0);
var state_59442__$1 = (function (){var statearr_59462 = state_59442;
(statearr_59462[(12)] = inst_59408);

(statearr_59462[(13)] = inst_59383);

(statearr_59462[(14)] = inst_59384);

(statearr_59462[(15)] = inst_59385);

(statearr_59462[(16)] = inst_59386);

return statearr_59462;
})();
var statearr_59463_59504 = state_59442__$1;
(statearr_59463_59504[(2)] = null);

(statearr_59463_59504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (3))){
var inst_59440 = (state_59442[(2)]);
var state_59442__$1 = state_59442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59442__$1,inst_59440);
} else {
if((state_val_59443 === (12))){
var inst_59417 = (state_59442[(2)]);
var state_59442__$1 = state_59442;
var statearr_59464_59505 = state_59442__$1;
(statearr_59464_59505[(2)] = inst_59417);

(statearr_59464_59505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (2))){
var state_59442__$1 = state_59442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59442__$1,(4),ch);
} else {
if((state_val_59443 === (23))){
var state_59442__$1 = state_59442;
var statearr_59465_59506 = state_59442__$1;
(statearr_59465_59506[(2)] = null);

(statearr_59465_59506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (19))){
var inst_59373 = (state_59442[(8)]);
var inst_59423 = (state_59442[(11)]);
var inst_59425 = cljs.core.async.muxch_STAR_.call(null,inst_59423);
var state_59442__$1 = state_59442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59442__$1,(22),inst_59425,inst_59373);
} else {
if((state_val_59443 === (11))){
var inst_59383 = (state_59442[(13)]);
var inst_59397 = (state_59442[(10)]);
var inst_59397__$1 = cljs.core.seq.call(null,inst_59383);
var state_59442__$1 = (function (){var statearr_59466 = state_59442;
(statearr_59466[(10)] = inst_59397__$1);

return statearr_59466;
})();
if(inst_59397__$1){
var statearr_59467_59507 = state_59442__$1;
(statearr_59467_59507[(1)] = (13));

} else {
var statearr_59468_59508 = state_59442__$1;
(statearr_59468_59508[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (9))){
var inst_59419 = (state_59442[(2)]);
var state_59442__$1 = state_59442;
var statearr_59469_59509 = state_59442__$1;
(statearr_59469_59509[(2)] = inst_59419);

(statearr_59469_59509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (5))){
var inst_59380 = cljs.core.deref.call(null,mults);
var inst_59381 = cljs.core.vals.call(null,inst_59380);
var inst_59382 = cljs.core.seq.call(null,inst_59381);
var inst_59383 = inst_59382;
var inst_59384 = null;
var inst_59385 = (0);
var inst_59386 = (0);
var state_59442__$1 = (function (){var statearr_59470 = state_59442;
(statearr_59470[(13)] = inst_59383);

(statearr_59470[(14)] = inst_59384);

(statearr_59470[(15)] = inst_59385);

(statearr_59470[(16)] = inst_59386);

return statearr_59470;
})();
var statearr_59471_59510 = state_59442__$1;
(statearr_59471_59510[(2)] = null);

(statearr_59471_59510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (14))){
var state_59442__$1 = state_59442;
var statearr_59475_59511 = state_59442__$1;
(statearr_59475_59511[(2)] = null);

(statearr_59475_59511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (16))){
var inst_59397 = (state_59442[(10)]);
var inst_59401 = cljs.core.chunk_first.call(null,inst_59397);
var inst_59402 = cljs.core.chunk_rest.call(null,inst_59397);
var inst_59403 = cljs.core.count.call(null,inst_59401);
var inst_59383 = inst_59402;
var inst_59384 = inst_59401;
var inst_59385 = inst_59403;
var inst_59386 = (0);
var state_59442__$1 = (function (){var statearr_59476 = state_59442;
(statearr_59476[(13)] = inst_59383);

(statearr_59476[(14)] = inst_59384);

(statearr_59476[(15)] = inst_59385);

(statearr_59476[(16)] = inst_59386);

return statearr_59476;
})();
var statearr_59477_59512 = state_59442__$1;
(statearr_59477_59512[(2)] = null);

(statearr_59477_59512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (10))){
var inst_59383 = (state_59442[(13)]);
var inst_59384 = (state_59442[(14)]);
var inst_59385 = (state_59442[(15)]);
var inst_59386 = (state_59442[(16)]);
var inst_59391 = cljs.core._nth.call(null,inst_59384,inst_59386);
var inst_59392 = cljs.core.async.muxch_STAR_.call(null,inst_59391);
var inst_59393 = cljs.core.async.close_BANG_.call(null,inst_59392);
var inst_59394 = (inst_59386 + (1));
var tmp59472 = inst_59383;
var tmp59473 = inst_59384;
var tmp59474 = inst_59385;
var inst_59383__$1 = tmp59472;
var inst_59384__$1 = tmp59473;
var inst_59385__$1 = tmp59474;
var inst_59386__$1 = inst_59394;
var state_59442__$1 = (function (){var statearr_59478 = state_59442;
(statearr_59478[(17)] = inst_59393);

(statearr_59478[(13)] = inst_59383__$1);

(statearr_59478[(14)] = inst_59384__$1);

(statearr_59478[(15)] = inst_59385__$1);

(statearr_59478[(16)] = inst_59386__$1);

return statearr_59478;
})();
var statearr_59479_59513 = state_59442__$1;
(statearr_59479_59513[(2)] = null);

(statearr_59479_59513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (18))){
var inst_59412 = (state_59442[(2)]);
var state_59442__$1 = state_59442;
var statearr_59480_59514 = state_59442__$1;
(statearr_59480_59514[(2)] = inst_59412);

(statearr_59480_59514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59443 === (8))){
var inst_59385 = (state_59442[(15)]);
var inst_59386 = (state_59442[(16)]);
var inst_59388 = (inst_59386 < inst_59385);
var inst_59389 = inst_59388;
var state_59442__$1 = state_59442;
if(cljs.core.truth_(inst_59389)){
var statearr_59481_59515 = state_59442__$1;
(statearr_59481_59515[(1)] = (10));

} else {
var statearr_59482_59516 = state_59442__$1;
(statearr_59482_59516[(1)] = (11));

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
});})(c__58254__auto___59488,mults,ensure_mult,p))
;
return ((function (switch__58164__auto__,c__58254__auto___59488,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_59483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59483[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_59483[(1)] = (1));

return statearr_59483;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_59442){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_59442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e59484){if((e59484 instanceof Object)){
var ex__58168__auto__ = e59484;
var statearr_59485_59517 = state_59442;
(statearr_59485_59517[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59518 = state_59442;
state_59442 = G__59518;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_59442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_59442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___59488,mults,ensure_mult,p))
})();
var state__58256__auto__ = (function (){var statearr_59486 = f__58255__auto__.call(null);
(statearr_59486[(6)] = c__58254__auto___59488);

return statearr_59486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___59488,mults,ensure_mult,p))
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
var G__59520 = arguments.length;
switch (G__59520) {
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
var G__59523 = arguments.length;
switch (G__59523) {
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
var G__59526 = arguments.length;
switch (G__59526) {
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
var c__58254__auto___59593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___59593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___59593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_59565){
var state_val_59566 = (state_59565[(1)]);
if((state_val_59566 === (7))){
var state_59565__$1 = state_59565;
var statearr_59567_59594 = state_59565__$1;
(statearr_59567_59594[(2)] = null);

(statearr_59567_59594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (1))){
var state_59565__$1 = state_59565;
var statearr_59568_59595 = state_59565__$1;
(statearr_59568_59595[(2)] = null);

(statearr_59568_59595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (4))){
var inst_59529 = (state_59565[(7)]);
var inst_59531 = (inst_59529 < cnt);
var state_59565__$1 = state_59565;
if(cljs.core.truth_(inst_59531)){
var statearr_59569_59596 = state_59565__$1;
(statearr_59569_59596[(1)] = (6));

} else {
var statearr_59570_59597 = state_59565__$1;
(statearr_59570_59597[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (15))){
var inst_59561 = (state_59565[(2)]);
var state_59565__$1 = state_59565;
var statearr_59571_59598 = state_59565__$1;
(statearr_59571_59598[(2)] = inst_59561);

(statearr_59571_59598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (13))){
var inst_59554 = cljs.core.async.close_BANG_.call(null,out);
var state_59565__$1 = state_59565;
var statearr_59572_59599 = state_59565__$1;
(statearr_59572_59599[(2)] = inst_59554);

(statearr_59572_59599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (6))){
var state_59565__$1 = state_59565;
var statearr_59573_59600 = state_59565__$1;
(statearr_59573_59600[(2)] = null);

(statearr_59573_59600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (3))){
var inst_59563 = (state_59565[(2)]);
var state_59565__$1 = state_59565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59565__$1,inst_59563);
} else {
if((state_val_59566 === (12))){
var inst_59551 = (state_59565[(8)]);
var inst_59551__$1 = (state_59565[(2)]);
var inst_59552 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_59551__$1);
var state_59565__$1 = (function (){var statearr_59574 = state_59565;
(statearr_59574[(8)] = inst_59551__$1);

return statearr_59574;
})();
if(cljs.core.truth_(inst_59552)){
var statearr_59575_59601 = state_59565__$1;
(statearr_59575_59601[(1)] = (13));

} else {
var statearr_59576_59602 = state_59565__$1;
(statearr_59576_59602[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (2))){
var inst_59528 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_59529 = (0);
var state_59565__$1 = (function (){var statearr_59577 = state_59565;
(statearr_59577[(7)] = inst_59529);

(statearr_59577[(9)] = inst_59528);

return statearr_59577;
})();
var statearr_59578_59603 = state_59565__$1;
(statearr_59578_59603[(2)] = null);

(statearr_59578_59603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (11))){
var inst_59529 = (state_59565[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59565,(10),Object,null,(9));
var inst_59538 = chs__$1.call(null,inst_59529);
var inst_59539 = done.call(null,inst_59529);
var inst_59540 = cljs.core.async.take_BANG_.call(null,inst_59538,inst_59539);
var state_59565__$1 = state_59565;
var statearr_59579_59604 = state_59565__$1;
(statearr_59579_59604[(2)] = inst_59540);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59565__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (9))){
var inst_59529 = (state_59565[(7)]);
var inst_59542 = (state_59565[(2)]);
var inst_59543 = (inst_59529 + (1));
var inst_59529__$1 = inst_59543;
var state_59565__$1 = (function (){var statearr_59580 = state_59565;
(statearr_59580[(7)] = inst_59529__$1);

(statearr_59580[(10)] = inst_59542);

return statearr_59580;
})();
var statearr_59581_59605 = state_59565__$1;
(statearr_59581_59605[(2)] = null);

(statearr_59581_59605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (5))){
var inst_59549 = (state_59565[(2)]);
var state_59565__$1 = (function (){var statearr_59582 = state_59565;
(statearr_59582[(11)] = inst_59549);

return statearr_59582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59565__$1,(12),dchan);
} else {
if((state_val_59566 === (14))){
var inst_59551 = (state_59565[(8)]);
var inst_59556 = cljs.core.apply.call(null,f,inst_59551);
var state_59565__$1 = state_59565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59565__$1,(16),out,inst_59556);
} else {
if((state_val_59566 === (16))){
var inst_59558 = (state_59565[(2)]);
var state_59565__$1 = (function (){var statearr_59583 = state_59565;
(statearr_59583[(12)] = inst_59558);

return statearr_59583;
})();
var statearr_59584_59606 = state_59565__$1;
(statearr_59584_59606[(2)] = null);

(statearr_59584_59606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (10))){
var inst_59533 = (state_59565[(2)]);
var inst_59534 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_59565__$1 = (function (){var statearr_59585 = state_59565;
(statearr_59585[(13)] = inst_59533);

return statearr_59585;
})();
var statearr_59586_59607 = state_59565__$1;
(statearr_59586_59607[(2)] = inst_59534);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59565__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59566 === (8))){
var inst_59547 = (state_59565[(2)]);
var state_59565__$1 = state_59565;
var statearr_59587_59608 = state_59565__$1;
(statearr_59587_59608[(2)] = inst_59547);

(statearr_59587_59608[(1)] = (5));


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
});})(c__58254__auto___59593,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__58164__auto__,c__58254__auto___59593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_59588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59588[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_59588[(1)] = (1));

return statearr_59588;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_59565){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_59565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e59589){if((e59589 instanceof Object)){
var ex__58168__auto__ = e59589;
var statearr_59590_59609 = state_59565;
(statearr_59590_59609[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59610 = state_59565;
state_59565 = G__59610;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_59565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_59565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___59593,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__58256__auto__ = (function (){var statearr_59591 = f__58255__auto__.call(null);
(statearr_59591[(6)] = c__58254__auto___59593);

return statearr_59591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___59593,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__59613 = arguments.length;
switch (G__59613) {
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
var c__58254__auto___59667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___59667,out){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___59667,out){
return (function (state_59645){
var state_val_59646 = (state_59645[(1)]);
if((state_val_59646 === (7))){
var inst_59625 = (state_59645[(7)]);
var inst_59624 = (state_59645[(8)]);
var inst_59624__$1 = (state_59645[(2)]);
var inst_59625__$1 = cljs.core.nth.call(null,inst_59624__$1,(0),null);
var inst_59626 = cljs.core.nth.call(null,inst_59624__$1,(1),null);
var inst_59627 = (inst_59625__$1 == null);
var state_59645__$1 = (function (){var statearr_59647 = state_59645;
(statearr_59647[(7)] = inst_59625__$1);

(statearr_59647[(8)] = inst_59624__$1);

(statearr_59647[(9)] = inst_59626);

return statearr_59647;
})();
if(cljs.core.truth_(inst_59627)){
var statearr_59648_59668 = state_59645__$1;
(statearr_59648_59668[(1)] = (8));

} else {
var statearr_59649_59669 = state_59645__$1;
(statearr_59649_59669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (1))){
var inst_59614 = cljs.core.vec.call(null,chs);
var inst_59615 = inst_59614;
var state_59645__$1 = (function (){var statearr_59650 = state_59645;
(statearr_59650[(10)] = inst_59615);

return statearr_59650;
})();
var statearr_59651_59670 = state_59645__$1;
(statearr_59651_59670[(2)] = null);

(statearr_59651_59670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (4))){
var inst_59615 = (state_59645[(10)]);
var state_59645__$1 = state_59645;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59645__$1,(7),inst_59615);
} else {
if((state_val_59646 === (6))){
var inst_59641 = (state_59645[(2)]);
var state_59645__$1 = state_59645;
var statearr_59652_59671 = state_59645__$1;
(statearr_59652_59671[(2)] = inst_59641);

(statearr_59652_59671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (3))){
var inst_59643 = (state_59645[(2)]);
var state_59645__$1 = state_59645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59645__$1,inst_59643);
} else {
if((state_val_59646 === (2))){
var inst_59615 = (state_59645[(10)]);
var inst_59617 = cljs.core.count.call(null,inst_59615);
var inst_59618 = (inst_59617 > (0));
var state_59645__$1 = state_59645;
if(cljs.core.truth_(inst_59618)){
var statearr_59654_59672 = state_59645__$1;
(statearr_59654_59672[(1)] = (4));

} else {
var statearr_59655_59673 = state_59645__$1;
(statearr_59655_59673[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (11))){
var inst_59615 = (state_59645[(10)]);
var inst_59634 = (state_59645[(2)]);
var tmp59653 = inst_59615;
var inst_59615__$1 = tmp59653;
var state_59645__$1 = (function (){var statearr_59656 = state_59645;
(statearr_59656[(10)] = inst_59615__$1);

(statearr_59656[(11)] = inst_59634);

return statearr_59656;
})();
var statearr_59657_59674 = state_59645__$1;
(statearr_59657_59674[(2)] = null);

(statearr_59657_59674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (9))){
var inst_59625 = (state_59645[(7)]);
var state_59645__$1 = state_59645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59645__$1,(11),out,inst_59625);
} else {
if((state_val_59646 === (5))){
var inst_59639 = cljs.core.async.close_BANG_.call(null,out);
var state_59645__$1 = state_59645;
var statearr_59658_59675 = state_59645__$1;
(statearr_59658_59675[(2)] = inst_59639);

(statearr_59658_59675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (10))){
var inst_59637 = (state_59645[(2)]);
var state_59645__$1 = state_59645;
var statearr_59659_59676 = state_59645__$1;
(statearr_59659_59676[(2)] = inst_59637);

(statearr_59659_59676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59646 === (8))){
var inst_59615 = (state_59645[(10)]);
var inst_59625 = (state_59645[(7)]);
var inst_59624 = (state_59645[(8)]);
var inst_59626 = (state_59645[(9)]);
var inst_59629 = (function (){var cs = inst_59615;
var vec__59620 = inst_59624;
var v = inst_59625;
var c = inst_59626;
return ((function (cs,vec__59620,v,c,inst_59615,inst_59625,inst_59624,inst_59626,state_val_59646,c__58254__auto___59667,out){
return (function (p1__59611_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__59611_SHARP_);
});
;})(cs,vec__59620,v,c,inst_59615,inst_59625,inst_59624,inst_59626,state_val_59646,c__58254__auto___59667,out))
})();
var inst_59630 = cljs.core.filterv.call(null,inst_59629,inst_59615);
var inst_59615__$1 = inst_59630;
var state_59645__$1 = (function (){var statearr_59660 = state_59645;
(statearr_59660[(10)] = inst_59615__$1);

return statearr_59660;
})();
var statearr_59661_59677 = state_59645__$1;
(statearr_59661_59677[(2)] = null);

(statearr_59661_59677[(1)] = (2));


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
});})(c__58254__auto___59667,out))
;
return ((function (switch__58164__auto__,c__58254__auto___59667,out){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_59662 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59662[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_59662[(1)] = (1));

return statearr_59662;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_59645){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_59645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e59663){if((e59663 instanceof Object)){
var ex__58168__auto__ = e59663;
var statearr_59664_59678 = state_59645;
(statearr_59664_59678[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59679 = state_59645;
state_59645 = G__59679;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_59645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_59645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___59667,out))
})();
var state__58256__auto__ = (function (){var statearr_59665 = f__58255__auto__.call(null);
(statearr_59665[(6)] = c__58254__auto___59667);

return statearr_59665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___59667,out))
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
var G__59681 = arguments.length;
switch (G__59681) {
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
var c__58254__auto___59726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___59726,out){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___59726,out){
return (function (state_59705){
var state_val_59706 = (state_59705[(1)]);
if((state_val_59706 === (7))){
var inst_59687 = (state_59705[(7)]);
var inst_59687__$1 = (state_59705[(2)]);
var inst_59688 = (inst_59687__$1 == null);
var inst_59689 = cljs.core.not.call(null,inst_59688);
var state_59705__$1 = (function (){var statearr_59707 = state_59705;
(statearr_59707[(7)] = inst_59687__$1);

return statearr_59707;
})();
if(inst_59689){
var statearr_59708_59727 = state_59705__$1;
(statearr_59708_59727[(1)] = (8));

} else {
var statearr_59709_59728 = state_59705__$1;
(statearr_59709_59728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59706 === (1))){
var inst_59682 = (0);
var state_59705__$1 = (function (){var statearr_59710 = state_59705;
(statearr_59710[(8)] = inst_59682);

return statearr_59710;
})();
var statearr_59711_59729 = state_59705__$1;
(statearr_59711_59729[(2)] = null);

(statearr_59711_59729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59706 === (4))){
var state_59705__$1 = state_59705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59705__$1,(7),ch);
} else {
if((state_val_59706 === (6))){
var inst_59700 = (state_59705[(2)]);
var state_59705__$1 = state_59705;
var statearr_59712_59730 = state_59705__$1;
(statearr_59712_59730[(2)] = inst_59700);

(statearr_59712_59730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59706 === (3))){
var inst_59702 = (state_59705[(2)]);
var inst_59703 = cljs.core.async.close_BANG_.call(null,out);
var state_59705__$1 = (function (){var statearr_59713 = state_59705;
(statearr_59713[(9)] = inst_59702);

return statearr_59713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59705__$1,inst_59703);
} else {
if((state_val_59706 === (2))){
var inst_59682 = (state_59705[(8)]);
var inst_59684 = (inst_59682 < n);
var state_59705__$1 = state_59705;
if(cljs.core.truth_(inst_59684)){
var statearr_59714_59731 = state_59705__$1;
(statearr_59714_59731[(1)] = (4));

} else {
var statearr_59715_59732 = state_59705__$1;
(statearr_59715_59732[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59706 === (11))){
var inst_59682 = (state_59705[(8)]);
var inst_59692 = (state_59705[(2)]);
var inst_59693 = (inst_59682 + (1));
var inst_59682__$1 = inst_59693;
var state_59705__$1 = (function (){var statearr_59716 = state_59705;
(statearr_59716[(8)] = inst_59682__$1);

(statearr_59716[(10)] = inst_59692);

return statearr_59716;
})();
var statearr_59717_59733 = state_59705__$1;
(statearr_59717_59733[(2)] = null);

(statearr_59717_59733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59706 === (9))){
var state_59705__$1 = state_59705;
var statearr_59718_59734 = state_59705__$1;
(statearr_59718_59734[(2)] = null);

(statearr_59718_59734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59706 === (5))){
var state_59705__$1 = state_59705;
var statearr_59719_59735 = state_59705__$1;
(statearr_59719_59735[(2)] = null);

(statearr_59719_59735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59706 === (10))){
var inst_59697 = (state_59705[(2)]);
var state_59705__$1 = state_59705;
var statearr_59720_59736 = state_59705__$1;
(statearr_59720_59736[(2)] = inst_59697);

(statearr_59720_59736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59706 === (8))){
var inst_59687 = (state_59705[(7)]);
var state_59705__$1 = state_59705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59705__$1,(11),out,inst_59687);
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
});})(c__58254__auto___59726,out))
;
return ((function (switch__58164__auto__,c__58254__auto___59726,out){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_59721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59721[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_59721[(1)] = (1));

return statearr_59721;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_59705){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_59705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e59722){if((e59722 instanceof Object)){
var ex__58168__auto__ = e59722;
var statearr_59723_59737 = state_59705;
(statearr_59723_59737[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59738 = state_59705;
state_59705 = G__59738;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_59705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_59705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___59726,out))
})();
var state__58256__auto__ = (function (){var statearr_59724 = f__58255__auto__.call(null);
(statearr_59724[(6)] = c__58254__auto___59726);

return statearr_59724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___59726,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async59740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59740 = (function (f,ch,meta59741){
this.f = f;
this.ch = ch;
this.meta59741 = meta59741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59742,meta59741__$1){
var self__ = this;
var _59742__$1 = this;
return (new cljs.core.async.t_cljs$core$async59740(self__.f,self__.ch,meta59741__$1));
});

cljs.core.async.t_cljs$core$async59740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59742){
var self__ = this;
var _59742__$1 = this;
return self__.meta59741;
});

cljs.core.async.t_cljs$core$async59740.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59740.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59740.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59740.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59740.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async59743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59743 = (function (f,ch,meta59741,_,fn1,meta59744){
this.f = f;
this.ch = ch;
this.meta59741 = meta59741;
this._ = _;
this.fn1 = fn1;
this.meta59744 = meta59744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_59745,meta59744__$1){
var self__ = this;
var _59745__$1 = this;
return (new cljs.core.async.t_cljs$core$async59743(self__.f,self__.ch,self__.meta59741,self__._,self__.fn1,meta59744__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async59743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_59745){
var self__ = this;
var _59745__$1 = this;
return self__.meta59744;
});})(___$1))
;

cljs.core.async.t_cljs$core$async59743.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async59743.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async59743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__59739_SHARP_){
return f1.call(null,(((p1__59739_SHARP_ == null))?null:self__.f.call(null,p1__59739_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async59743.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59741","meta59741",478207511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59740","cljs.core.async/t_cljs$core$async59740",-1120358376,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59744","meta59744",-2035704639,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async59743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59743";

cljs.core.async.t_cljs$core$async59743.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59743");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59743.
 */
cljs.core.async.__GT_t_cljs$core$async59743 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59743(f__$1,ch__$1,meta59741__$1,___$2,fn1__$1,meta59744){
return (new cljs.core.async.t_cljs$core$async59743(f__$1,ch__$1,meta59741__$1,___$2,fn1__$1,meta59744));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async59743(self__.f,self__.ch,self__.meta59741,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async59740.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59740.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async59740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59741","meta59741",478207511,null)], null);
});

cljs.core.async.t_cljs$core$async59740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59740";

cljs.core.async.t_cljs$core$async59740.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59740");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59740.
 */
cljs.core.async.__GT_t_cljs$core$async59740 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59740(f__$1,ch__$1,meta59741){
return (new cljs.core.async.t_cljs$core$async59740(f__$1,ch__$1,meta59741));
});

}

return (new cljs.core.async.t_cljs$core$async59740(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async59746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59746 = (function (f,ch,meta59747){
this.f = f;
this.ch = ch;
this.meta59747 = meta59747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59748,meta59747__$1){
var self__ = this;
var _59748__$1 = this;
return (new cljs.core.async.t_cljs$core$async59746(self__.f,self__.ch,meta59747__$1));
});

cljs.core.async.t_cljs$core$async59746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59748){
var self__ = this;
var _59748__$1 = this;
return self__.meta59747;
});

cljs.core.async.t_cljs$core$async59746.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59746.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59746.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59746.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async59746.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59746.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async59746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59747","meta59747",44506147,null)], null);
});

cljs.core.async.t_cljs$core$async59746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59746";

cljs.core.async.t_cljs$core$async59746.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59746");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59746.
 */
cljs.core.async.__GT_t_cljs$core$async59746 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59746(f__$1,ch__$1,meta59747){
return (new cljs.core.async.t_cljs$core$async59746(f__$1,ch__$1,meta59747));
});

}

return (new cljs.core.async.t_cljs$core$async59746(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async59749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59749 = (function (p,ch,meta59750){
this.p = p;
this.ch = ch;
this.meta59750 = meta59750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59751,meta59750__$1){
var self__ = this;
var _59751__$1 = this;
return (new cljs.core.async.t_cljs$core$async59749(self__.p,self__.ch,meta59750__$1));
});

cljs.core.async.t_cljs$core$async59749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59751){
var self__ = this;
var _59751__$1 = this;
return self__.meta59750;
});

cljs.core.async.t_cljs$core$async59749.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59749.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59749.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59749.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59749.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async59749.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59749.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async59749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59750","meta59750",384705841,null)], null);
});

cljs.core.async.t_cljs$core$async59749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59749";

cljs.core.async.t_cljs$core$async59749.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async59749");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59749.
 */
cljs.core.async.__GT_t_cljs$core$async59749 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59749(p__$1,ch__$1,meta59750){
return (new cljs.core.async.t_cljs$core$async59749(p__$1,ch__$1,meta59750));
});

}

return (new cljs.core.async.t_cljs$core$async59749(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__59753 = arguments.length;
switch (G__59753) {
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
var c__58254__auto___59793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___59793,out){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___59793,out){
return (function (state_59774){
var state_val_59775 = (state_59774[(1)]);
if((state_val_59775 === (7))){
var inst_59770 = (state_59774[(2)]);
var state_59774__$1 = state_59774;
var statearr_59776_59794 = state_59774__$1;
(statearr_59776_59794[(2)] = inst_59770);

(statearr_59776_59794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59775 === (1))){
var state_59774__$1 = state_59774;
var statearr_59777_59795 = state_59774__$1;
(statearr_59777_59795[(2)] = null);

(statearr_59777_59795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59775 === (4))){
var inst_59756 = (state_59774[(7)]);
var inst_59756__$1 = (state_59774[(2)]);
var inst_59757 = (inst_59756__$1 == null);
var state_59774__$1 = (function (){var statearr_59778 = state_59774;
(statearr_59778[(7)] = inst_59756__$1);

return statearr_59778;
})();
if(cljs.core.truth_(inst_59757)){
var statearr_59779_59796 = state_59774__$1;
(statearr_59779_59796[(1)] = (5));

} else {
var statearr_59780_59797 = state_59774__$1;
(statearr_59780_59797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59775 === (6))){
var inst_59756 = (state_59774[(7)]);
var inst_59761 = p.call(null,inst_59756);
var state_59774__$1 = state_59774;
if(cljs.core.truth_(inst_59761)){
var statearr_59781_59798 = state_59774__$1;
(statearr_59781_59798[(1)] = (8));

} else {
var statearr_59782_59799 = state_59774__$1;
(statearr_59782_59799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59775 === (3))){
var inst_59772 = (state_59774[(2)]);
var state_59774__$1 = state_59774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59774__$1,inst_59772);
} else {
if((state_val_59775 === (2))){
var state_59774__$1 = state_59774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59774__$1,(4),ch);
} else {
if((state_val_59775 === (11))){
var inst_59764 = (state_59774[(2)]);
var state_59774__$1 = state_59774;
var statearr_59783_59800 = state_59774__$1;
(statearr_59783_59800[(2)] = inst_59764);

(statearr_59783_59800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59775 === (9))){
var state_59774__$1 = state_59774;
var statearr_59784_59801 = state_59774__$1;
(statearr_59784_59801[(2)] = null);

(statearr_59784_59801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59775 === (5))){
var inst_59759 = cljs.core.async.close_BANG_.call(null,out);
var state_59774__$1 = state_59774;
var statearr_59785_59802 = state_59774__$1;
(statearr_59785_59802[(2)] = inst_59759);

(statearr_59785_59802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59775 === (10))){
var inst_59767 = (state_59774[(2)]);
var state_59774__$1 = (function (){var statearr_59786 = state_59774;
(statearr_59786[(8)] = inst_59767);

return statearr_59786;
})();
var statearr_59787_59803 = state_59774__$1;
(statearr_59787_59803[(2)] = null);

(statearr_59787_59803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59775 === (8))){
var inst_59756 = (state_59774[(7)]);
var state_59774__$1 = state_59774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59774__$1,(11),out,inst_59756);
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
});})(c__58254__auto___59793,out))
;
return ((function (switch__58164__auto__,c__58254__auto___59793,out){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_59788 = [null,null,null,null,null,null,null,null,null];
(statearr_59788[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_59788[(1)] = (1));

return statearr_59788;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_59774){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_59774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e59789){if((e59789 instanceof Object)){
var ex__58168__auto__ = e59789;
var statearr_59790_59804 = state_59774;
(statearr_59790_59804[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59805 = state_59774;
state_59774 = G__59805;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_59774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_59774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___59793,out))
})();
var state__58256__auto__ = (function (){var statearr_59791 = f__58255__auto__.call(null);
(statearr_59791[(6)] = c__58254__auto___59793);

return statearr_59791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___59793,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__59807 = arguments.length;
switch (G__59807) {
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
var c__58254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto__){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto__){
return (function (state_59870){
var state_val_59871 = (state_59870[(1)]);
if((state_val_59871 === (7))){
var inst_59866 = (state_59870[(2)]);
var state_59870__$1 = state_59870;
var statearr_59872_59910 = state_59870__$1;
(statearr_59872_59910[(2)] = inst_59866);

(statearr_59872_59910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (20))){
var inst_59836 = (state_59870[(7)]);
var inst_59847 = (state_59870[(2)]);
var inst_59848 = cljs.core.next.call(null,inst_59836);
var inst_59822 = inst_59848;
var inst_59823 = null;
var inst_59824 = (0);
var inst_59825 = (0);
var state_59870__$1 = (function (){var statearr_59873 = state_59870;
(statearr_59873[(8)] = inst_59823);

(statearr_59873[(9)] = inst_59847);

(statearr_59873[(10)] = inst_59825);

(statearr_59873[(11)] = inst_59822);

(statearr_59873[(12)] = inst_59824);

return statearr_59873;
})();
var statearr_59874_59911 = state_59870__$1;
(statearr_59874_59911[(2)] = null);

(statearr_59874_59911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (1))){
var state_59870__$1 = state_59870;
var statearr_59875_59912 = state_59870__$1;
(statearr_59875_59912[(2)] = null);

(statearr_59875_59912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (4))){
var inst_59811 = (state_59870[(13)]);
var inst_59811__$1 = (state_59870[(2)]);
var inst_59812 = (inst_59811__$1 == null);
var state_59870__$1 = (function (){var statearr_59876 = state_59870;
(statearr_59876[(13)] = inst_59811__$1);

return statearr_59876;
})();
if(cljs.core.truth_(inst_59812)){
var statearr_59877_59913 = state_59870__$1;
(statearr_59877_59913[(1)] = (5));

} else {
var statearr_59878_59914 = state_59870__$1;
(statearr_59878_59914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (15))){
var state_59870__$1 = state_59870;
var statearr_59882_59915 = state_59870__$1;
(statearr_59882_59915[(2)] = null);

(statearr_59882_59915[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (21))){
var state_59870__$1 = state_59870;
var statearr_59883_59916 = state_59870__$1;
(statearr_59883_59916[(2)] = null);

(statearr_59883_59916[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (13))){
var inst_59823 = (state_59870[(8)]);
var inst_59825 = (state_59870[(10)]);
var inst_59822 = (state_59870[(11)]);
var inst_59824 = (state_59870[(12)]);
var inst_59832 = (state_59870[(2)]);
var inst_59833 = (inst_59825 + (1));
var tmp59879 = inst_59823;
var tmp59880 = inst_59822;
var tmp59881 = inst_59824;
var inst_59822__$1 = tmp59880;
var inst_59823__$1 = tmp59879;
var inst_59824__$1 = tmp59881;
var inst_59825__$1 = inst_59833;
var state_59870__$1 = (function (){var statearr_59884 = state_59870;
(statearr_59884[(14)] = inst_59832);

(statearr_59884[(8)] = inst_59823__$1);

(statearr_59884[(10)] = inst_59825__$1);

(statearr_59884[(11)] = inst_59822__$1);

(statearr_59884[(12)] = inst_59824__$1);

return statearr_59884;
})();
var statearr_59885_59917 = state_59870__$1;
(statearr_59885_59917[(2)] = null);

(statearr_59885_59917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (22))){
var state_59870__$1 = state_59870;
var statearr_59886_59918 = state_59870__$1;
(statearr_59886_59918[(2)] = null);

(statearr_59886_59918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (6))){
var inst_59811 = (state_59870[(13)]);
var inst_59820 = f.call(null,inst_59811);
var inst_59821 = cljs.core.seq.call(null,inst_59820);
var inst_59822 = inst_59821;
var inst_59823 = null;
var inst_59824 = (0);
var inst_59825 = (0);
var state_59870__$1 = (function (){var statearr_59887 = state_59870;
(statearr_59887[(8)] = inst_59823);

(statearr_59887[(10)] = inst_59825);

(statearr_59887[(11)] = inst_59822);

(statearr_59887[(12)] = inst_59824);

return statearr_59887;
})();
var statearr_59888_59919 = state_59870__$1;
(statearr_59888_59919[(2)] = null);

(statearr_59888_59919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (17))){
var inst_59836 = (state_59870[(7)]);
var inst_59840 = cljs.core.chunk_first.call(null,inst_59836);
var inst_59841 = cljs.core.chunk_rest.call(null,inst_59836);
var inst_59842 = cljs.core.count.call(null,inst_59840);
var inst_59822 = inst_59841;
var inst_59823 = inst_59840;
var inst_59824 = inst_59842;
var inst_59825 = (0);
var state_59870__$1 = (function (){var statearr_59889 = state_59870;
(statearr_59889[(8)] = inst_59823);

(statearr_59889[(10)] = inst_59825);

(statearr_59889[(11)] = inst_59822);

(statearr_59889[(12)] = inst_59824);

return statearr_59889;
})();
var statearr_59890_59920 = state_59870__$1;
(statearr_59890_59920[(2)] = null);

(statearr_59890_59920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (3))){
var inst_59868 = (state_59870[(2)]);
var state_59870__$1 = state_59870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59870__$1,inst_59868);
} else {
if((state_val_59871 === (12))){
var inst_59856 = (state_59870[(2)]);
var state_59870__$1 = state_59870;
var statearr_59891_59921 = state_59870__$1;
(statearr_59891_59921[(2)] = inst_59856);

(statearr_59891_59921[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (2))){
var state_59870__$1 = state_59870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59870__$1,(4),in$);
} else {
if((state_val_59871 === (23))){
var inst_59864 = (state_59870[(2)]);
var state_59870__$1 = state_59870;
var statearr_59892_59922 = state_59870__$1;
(statearr_59892_59922[(2)] = inst_59864);

(statearr_59892_59922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (19))){
var inst_59851 = (state_59870[(2)]);
var state_59870__$1 = state_59870;
var statearr_59893_59923 = state_59870__$1;
(statearr_59893_59923[(2)] = inst_59851);

(statearr_59893_59923[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (11))){
var inst_59836 = (state_59870[(7)]);
var inst_59822 = (state_59870[(11)]);
var inst_59836__$1 = cljs.core.seq.call(null,inst_59822);
var state_59870__$1 = (function (){var statearr_59894 = state_59870;
(statearr_59894[(7)] = inst_59836__$1);

return statearr_59894;
})();
if(inst_59836__$1){
var statearr_59895_59924 = state_59870__$1;
(statearr_59895_59924[(1)] = (14));

} else {
var statearr_59896_59925 = state_59870__$1;
(statearr_59896_59925[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (9))){
var inst_59858 = (state_59870[(2)]);
var inst_59859 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_59870__$1 = (function (){var statearr_59897 = state_59870;
(statearr_59897[(15)] = inst_59858);

return statearr_59897;
})();
if(cljs.core.truth_(inst_59859)){
var statearr_59898_59926 = state_59870__$1;
(statearr_59898_59926[(1)] = (21));

} else {
var statearr_59899_59927 = state_59870__$1;
(statearr_59899_59927[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (5))){
var inst_59814 = cljs.core.async.close_BANG_.call(null,out);
var state_59870__$1 = state_59870;
var statearr_59900_59928 = state_59870__$1;
(statearr_59900_59928[(2)] = inst_59814);

(statearr_59900_59928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (14))){
var inst_59836 = (state_59870[(7)]);
var inst_59838 = cljs.core.chunked_seq_QMARK_.call(null,inst_59836);
var state_59870__$1 = state_59870;
if(inst_59838){
var statearr_59901_59929 = state_59870__$1;
(statearr_59901_59929[(1)] = (17));

} else {
var statearr_59902_59930 = state_59870__$1;
(statearr_59902_59930[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (16))){
var inst_59854 = (state_59870[(2)]);
var state_59870__$1 = state_59870;
var statearr_59903_59931 = state_59870__$1;
(statearr_59903_59931[(2)] = inst_59854);

(statearr_59903_59931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59871 === (10))){
var inst_59823 = (state_59870[(8)]);
var inst_59825 = (state_59870[(10)]);
var inst_59830 = cljs.core._nth.call(null,inst_59823,inst_59825);
var state_59870__$1 = state_59870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59870__$1,(13),out,inst_59830);
} else {
if((state_val_59871 === (18))){
var inst_59836 = (state_59870[(7)]);
var inst_59845 = cljs.core.first.call(null,inst_59836);
var state_59870__$1 = state_59870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59870__$1,(20),out,inst_59845);
} else {
if((state_val_59871 === (8))){
var inst_59825 = (state_59870[(10)]);
var inst_59824 = (state_59870[(12)]);
var inst_59827 = (inst_59825 < inst_59824);
var inst_59828 = inst_59827;
var state_59870__$1 = state_59870;
if(cljs.core.truth_(inst_59828)){
var statearr_59904_59932 = state_59870__$1;
(statearr_59904_59932[(1)] = (10));

} else {
var statearr_59905_59933 = state_59870__$1;
(statearr_59905_59933[(1)] = (11));

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
});})(c__58254__auto__))
;
return ((function (switch__58164__auto__,c__58254__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__58165__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__58165__auto____0 = (function (){
var statearr_59906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59906[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__58165__auto__);

(statearr_59906[(1)] = (1));

return statearr_59906;
});
var cljs$core$async$mapcat_STAR__$_state_machine__58165__auto____1 = (function (state_59870){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_59870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e59907){if((e59907 instanceof Object)){
var ex__58168__auto__ = e59907;
var statearr_59908_59934 = state_59870;
(statearr_59908_59934[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59935 = state_59870;
state_59870 = G__59935;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__58165__auto__ = function(state_59870){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__58165__auto____1.call(this,state_59870);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__58165__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__58165__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto__))
})();
var state__58256__auto__ = (function (){var statearr_59909 = f__58255__auto__.call(null);
(statearr_59909[(6)] = c__58254__auto__);

return statearr_59909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto__))
);

return c__58254__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59937 = arguments.length;
switch (G__59937) {
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
var G__59940 = arguments.length;
switch (G__59940) {
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
var G__59943 = arguments.length;
switch (G__59943) {
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
var c__58254__auto___59990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___59990,out){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___59990,out){
return (function (state_59967){
var state_val_59968 = (state_59967[(1)]);
if((state_val_59968 === (7))){
var inst_59962 = (state_59967[(2)]);
var state_59967__$1 = state_59967;
var statearr_59969_59991 = state_59967__$1;
(statearr_59969_59991[(2)] = inst_59962);

(statearr_59969_59991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59968 === (1))){
var inst_59944 = null;
var state_59967__$1 = (function (){var statearr_59970 = state_59967;
(statearr_59970[(7)] = inst_59944);

return statearr_59970;
})();
var statearr_59971_59992 = state_59967__$1;
(statearr_59971_59992[(2)] = null);

(statearr_59971_59992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59968 === (4))){
var inst_59947 = (state_59967[(8)]);
var inst_59947__$1 = (state_59967[(2)]);
var inst_59948 = (inst_59947__$1 == null);
var inst_59949 = cljs.core.not.call(null,inst_59948);
var state_59967__$1 = (function (){var statearr_59972 = state_59967;
(statearr_59972[(8)] = inst_59947__$1);

return statearr_59972;
})();
if(inst_59949){
var statearr_59973_59993 = state_59967__$1;
(statearr_59973_59993[(1)] = (5));

} else {
var statearr_59974_59994 = state_59967__$1;
(statearr_59974_59994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59968 === (6))){
var state_59967__$1 = state_59967;
var statearr_59975_59995 = state_59967__$1;
(statearr_59975_59995[(2)] = null);

(statearr_59975_59995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59968 === (3))){
var inst_59964 = (state_59967[(2)]);
var inst_59965 = cljs.core.async.close_BANG_.call(null,out);
var state_59967__$1 = (function (){var statearr_59976 = state_59967;
(statearr_59976[(9)] = inst_59964);

return statearr_59976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59967__$1,inst_59965);
} else {
if((state_val_59968 === (2))){
var state_59967__$1 = state_59967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59967__$1,(4),ch);
} else {
if((state_val_59968 === (11))){
var inst_59947 = (state_59967[(8)]);
var inst_59956 = (state_59967[(2)]);
var inst_59944 = inst_59947;
var state_59967__$1 = (function (){var statearr_59977 = state_59967;
(statearr_59977[(10)] = inst_59956);

(statearr_59977[(7)] = inst_59944);

return statearr_59977;
})();
var statearr_59978_59996 = state_59967__$1;
(statearr_59978_59996[(2)] = null);

(statearr_59978_59996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59968 === (9))){
var inst_59947 = (state_59967[(8)]);
var state_59967__$1 = state_59967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59967__$1,(11),out,inst_59947);
} else {
if((state_val_59968 === (5))){
var inst_59947 = (state_59967[(8)]);
var inst_59944 = (state_59967[(7)]);
var inst_59951 = cljs.core._EQ_.call(null,inst_59947,inst_59944);
var state_59967__$1 = state_59967;
if(inst_59951){
var statearr_59980_59997 = state_59967__$1;
(statearr_59980_59997[(1)] = (8));

} else {
var statearr_59981_59998 = state_59967__$1;
(statearr_59981_59998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59968 === (10))){
var inst_59959 = (state_59967[(2)]);
var state_59967__$1 = state_59967;
var statearr_59982_59999 = state_59967__$1;
(statearr_59982_59999[(2)] = inst_59959);

(statearr_59982_59999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59968 === (8))){
var inst_59944 = (state_59967[(7)]);
var tmp59979 = inst_59944;
var inst_59944__$1 = tmp59979;
var state_59967__$1 = (function (){var statearr_59983 = state_59967;
(statearr_59983[(7)] = inst_59944__$1);

return statearr_59983;
})();
var statearr_59984_60000 = state_59967__$1;
(statearr_59984_60000[(2)] = null);

(statearr_59984_60000[(1)] = (2));


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
});})(c__58254__auto___59990,out))
;
return ((function (switch__58164__auto__,c__58254__auto___59990,out){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_59985 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59985[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_59985[(1)] = (1));

return statearr_59985;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_59967){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_59967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e59986){if((e59986 instanceof Object)){
var ex__58168__auto__ = e59986;
var statearr_59987_60001 = state_59967;
(statearr_59987_60001[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60002 = state_59967;
state_59967 = G__60002;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_59967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_59967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___59990,out))
})();
var state__58256__auto__ = (function (){var statearr_59988 = f__58255__auto__.call(null);
(statearr_59988[(6)] = c__58254__auto___59990);

return statearr_59988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___59990,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60004 = arguments.length;
switch (G__60004) {
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
var c__58254__auto___60070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___60070,out){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___60070,out){
return (function (state_60042){
var state_val_60043 = (state_60042[(1)]);
if((state_val_60043 === (7))){
var inst_60038 = (state_60042[(2)]);
var state_60042__$1 = state_60042;
var statearr_60044_60071 = state_60042__$1;
(statearr_60044_60071[(2)] = inst_60038);

(statearr_60044_60071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60043 === (1))){
var inst_60005 = (new Array(n));
var inst_60006 = inst_60005;
var inst_60007 = (0);
var state_60042__$1 = (function (){var statearr_60045 = state_60042;
(statearr_60045[(7)] = inst_60007);

(statearr_60045[(8)] = inst_60006);

return statearr_60045;
})();
var statearr_60046_60072 = state_60042__$1;
(statearr_60046_60072[(2)] = null);

(statearr_60046_60072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60043 === (4))){
var inst_60010 = (state_60042[(9)]);
var inst_60010__$1 = (state_60042[(2)]);
var inst_60011 = (inst_60010__$1 == null);
var inst_60012 = cljs.core.not.call(null,inst_60011);
var state_60042__$1 = (function (){var statearr_60047 = state_60042;
(statearr_60047[(9)] = inst_60010__$1);

return statearr_60047;
})();
if(inst_60012){
var statearr_60048_60073 = state_60042__$1;
(statearr_60048_60073[(1)] = (5));

} else {
var statearr_60049_60074 = state_60042__$1;
(statearr_60049_60074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60043 === (15))){
var inst_60032 = (state_60042[(2)]);
var state_60042__$1 = state_60042;
var statearr_60050_60075 = state_60042__$1;
(statearr_60050_60075[(2)] = inst_60032);

(statearr_60050_60075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60043 === (13))){
var state_60042__$1 = state_60042;
var statearr_60051_60076 = state_60042__$1;
(statearr_60051_60076[(2)] = null);

(statearr_60051_60076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60043 === (6))){
var inst_60007 = (state_60042[(7)]);
var inst_60028 = (inst_60007 > (0));
var state_60042__$1 = state_60042;
if(cljs.core.truth_(inst_60028)){
var statearr_60052_60077 = state_60042__$1;
(statearr_60052_60077[(1)] = (12));

} else {
var statearr_60053_60078 = state_60042__$1;
(statearr_60053_60078[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60043 === (3))){
var inst_60040 = (state_60042[(2)]);
var state_60042__$1 = state_60042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60042__$1,inst_60040);
} else {
if((state_val_60043 === (12))){
var inst_60006 = (state_60042[(8)]);
var inst_60030 = cljs.core.vec.call(null,inst_60006);
var state_60042__$1 = state_60042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60042__$1,(15),out,inst_60030);
} else {
if((state_val_60043 === (2))){
var state_60042__$1 = state_60042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60042__$1,(4),ch);
} else {
if((state_val_60043 === (11))){
var inst_60022 = (state_60042[(2)]);
var inst_60023 = (new Array(n));
var inst_60006 = inst_60023;
var inst_60007 = (0);
var state_60042__$1 = (function (){var statearr_60054 = state_60042;
(statearr_60054[(7)] = inst_60007);

(statearr_60054[(10)] = inst_60022);

(statearr_60054[(8)] = inst_60006);

return statearr_60054;
})();
var statearr_60055_60079 = state_60042__$1;
(statearr_60055_60079[(2)] = null);

(statearr_60055_60079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60043 === (9))){
var inst_60006 = (state_60042[(8)]);
var inst_60020 = cljs.core.vec.call(null,inst_60006);
var state_60042__$1 = state_60042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60042__$1,(11),out,inst_60020);
} else {
if((state_val_60043 === (5))){
var inst_60010 = (state_60042[(9)]);
var inst_60015 = (state_60042[(11)]);
var inst_60007 = (state_60042[(7)]);
var inst_60006 = (state_60042[(8)]);
var inst_60014 = (inst_60006[inst_60007] = inst_60010);
var inst_60015__$1 = (inst_60007 + (1));
var inst_60016 = (inst_60015__$1 < n);
var state_60042__$1 = (function (){var statearr_60056 = state_60042;
(statearr_60056[(11)] = inst_60015__$1);

(statearr_60056[(12)] = inst_60014);

return statearr_60056;
})();
if(cljs.core.truth_(inst_60016)){
var statearr_60057_60080 = state_60042__$1;
(statearr_60057_60080[(1)] = (8));

} else {
var statearr_60058_60081 = state_60042__$1;
(statearr_60058_60081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60043 === (14))){
var inst_60035 = (state_60042[(2)]);
var inst_60036 = cljs.core.async.close_BANG_.call(null,out);
var state_60042__$1 = (function (){var statearr_60060 = state_60042;
(statearr_60060[(13)] = inst_60035);

return statearr_60060;
})();
var statearr_60061_60082 = state_60042__$1;
(statearr_60061_60082[(2)] = inst_60036);

(statearr_60061_60082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60043 === (10))){
var inst_60026 = (state_60042[(2)]);
var state_60042__$1 = state_60042;
var statearr_60062_60083 = state_60042__$1;
(statearr_60062_60083[(2)] = inst_60026);

(statearr_60062_60083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60043 === (8))){
var inst_60015 = (state_60042[(11)]);
var inst_60006 = (state_60042[(8)]);
var tmp60059 = inst_60006;
var inst_60006__$1 = tmp60059;
var inst_60007 = inst_60015;
var state_60042__$1 = (function (){var statearr_60063 = state_60042;
(statearr_60063[(7)] = inst_60007);

(statearr_60063[(8)] = inst_60006__$1);

return statearr_60063;
})();
var statearr_60064_60084 = state_60042__$1;
(statearr_60064_60084[(2)] = null);

(statearr_60064_60084[(1)] = (2));


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
});})(c__58254__auto___60070,out))
;
return ((function (switch__58164__auto__,c__58254__auto___60070,out){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_60065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60065[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_60065[(1)] = (1));

return statearr_60065;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_60042){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_60042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e60066){if((e60066 instanceof Object)){
var ex__58168__auto__ = e60066;
var statearr_60067_60085 = state_60042;
(statearr_60067_60085[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60086 = state_60042;
state_60042 = G__60086;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_60042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_60042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___60070,out))
})();
var state__58256__auto__ = (function (){var statearr_60068 = f__58255__auto__.call(null);
(statearr_60068[(6)] = c__58254__auto___60070);

return statearr_60068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___60070,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60088 = arguments.length;
switch (G__60088) {
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
var c__58254__auto___60158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___60158,out){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___60158,out){
return (function (state_60130){
var state_val_60131 = (state_60130[(1)]);
if((state_val_60131 === (7))){
var inst_60126 = (state_60130[(2)]);
var state_60130__$1 = state_60130;
var statearr_60132_60159 = state_60130__$1;
(statearr_60132_60159[(2)] = inst_60126);

(statearr_60132_60159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60131 === (1))){
var inst_60089 = [];
var inst_60090 = inst_60089;
var inst_60091 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60130__$1 = (function (){var statearr_60133 = state_60130;
(statearr_60133[(7)] = inst_60091);

(statearr_60133[(8)] = inst_60090);

return statearr_60133;
})();
var statearr_60134_60160 = state_60130__$1;
(statearr_60134_60160[(2)] = null);

(statearr_60134_60160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60131 === (4))){
var inst_60094 = (state_60130[(9)]);
var inst_60094__$1 = (state_60130[(2)]);
var inst_60095 = (inst_60094__$1 == null);
var inst_60096 = cljs.core.not.call(null,inst_60095);
var state_60130__$1 = (function (){var statearr_60135 = state_60130;
(statearr_60135[(9)] = inst_60094__$1);

return statearr_60135;
})();
if(inst_60096){
var statearr_60136_60161 = state_60130__$1;
(statearr_60136_60161[(1)] = (5));

} else {
var statearr_60137_60162 = state_60130__$1;
(statearr_60137_60162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60131 === (15))){
var inst_60120 = (state_60130[(2)]);
var state_60130__$1 = state_60130;
var statearr_60138_60163 = state_60130__$1;
(statearr_60138_60163[(2)] = inst_60120);

(statearr_60138_60163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60131 === (13))){
var state_60130__$1 = state_60130;
var statearr_60139_60164 = state_60130__$1;
(statearr_60139_60164[(2)] = null);

(statearr_60139_60164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60131 === (6))){
var inst_60090 = (state_60130[(8)]);
var inst_60115 = inst_60090.length;
var inst_60116 = (inst_60115 > (0));
var state_60130__$1 = state_60130;
if(cljs.core.truth_(inst_60116)){
var statearr_60140_60165 = state_60130__$1;
(statearr_60140_60165[(1)] = (12));

} else {
var statearr_60141_60166 = state_60130__$1;
(statearr_60141_60166[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60131 === (3))){
var inst_60128 = (state_60130[(2)]);
var state_60130__$1 = state_60130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60130__$1,inst_60128);
} else {
if((state_val_60131 === (12))){
var inst_60090 = (state_60130[(8)]);
var inst_60118 = cljs.core.vec.call(null,inst_60090);
var state_60130__$1 = state_60130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60130__$1,(15),out,inst_60118);
} else {
if((state_val_60131 === (2))){
var state_60130__$1 = state_60130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60130__$1,(4),ch);
} else {
if((state_val_60131 === (11))){
var inst_60094 = (state_60130[(9)]);
var inst_60098 = (state_60130[(10)]);
var inst_60108 = (state_60130[(2)]);
var inst_60109 = [];
var inst_60110 = inst_60109.push(inst_60094);
var inst_60090 = inst_60109;
var inst_60091 = inst_60098;
var state_60130__$1 = (function (){var statearr_60142 = state_60130;
(statearr_60142[(7)] = inst_60091);

(statearr_60142[(8)] = inst_60090);

(statearr_60142[(11)] = inst_60110);

(statearr_60142[(12)] = inst_60108);

return statearr_60142;
})();
var statearr_60143_60167 = state_60130__$1;
(statearr_60143_60167[(2)] = null);

(statearr_60143_60167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60131 === (9))){
var inst_60090 = (state_60130[(8)]);
var inst_60106 = cljs.core.vec.call(null,inst_60090);
var state_60130__$1 = state_60130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60130__$1,(11),out,inst_60106);
} else {
if((state_val_60131 === (5))){
var inst_60091 = (state_60130[(7)]);
var inst_60094 = (state_60130[(9)]);
var inst_60098 = (state_60130[(10)]);
var inst_60098__$1 = f.call(null,inst_60094);
var inst_60099 = cljs.core._EQ_.call(null,inst_60098__$1,inst_60091);
var inst_60100 = cljs.core.keyword_identical_QMARK_.call(null,inst_60091,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_60101 = ((inst_60099) || (inst_60100));
var state_60130__$1 = (function (){var statearr_60144 = state_60130;
(statearr_60144[(10)] = inst_60098__$1);

return statearr_60144;
})();
if(cljs.core.truth_(inst_60101)){
var statearr_60145_60168 = state_60130__$1;
(statearr_60145_60168[(1)] = (8));

} else {
var statearr_60146_60169 = state_60130__$1;
(statearr_60146_60169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60131 === (14))){
var inst_60123 = (state_60130[(2)]);
var inst_60124 = cljs.core.async.close_BANG_.call(null,out);
var state_60130__$1 = (function (){var statearr_60148 = state_60130;
(statearr_60148[(13)] = inst_60123);

return statearr_60148;
})();
var statearr_60149_60170 = state_60130__$1;
(statearr_60149_60170[(2)] = inst_60124);

(statearr_60149_60170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60131 === (10))){
var inst_60113 = (state_60130[(2)]);
var state_60130__$1 = state_60130;
var statearr_60150_60171 = state_60130__$1;
(statearr_60150_60171[(2)] = inst_60113);

(statearr_60150_60171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60131 === (8))){
var inst_60090 = (state_60130[(8)]);
var inst_60094 = (state_60130[(9)]);
var inst_60098 = (state_60130[(10)]);
var inst_60103 = inst_60090.push(inst_60094);
var tmp60147 = inst_60090;
var inst_60090__$1 = tmp60147;
var inst_60091 = inst_60098;
var state_60130__$1 = (function (){var statearr_60151 = state_60130;
(statearr_60151[(14)] = inst_60103);

(statearr_60151[(7)] = inst_60091);

(statearr_60151[(8)] = inst_60090__$1);

return statearr_60151;
})();
var statearr_60152_60172 = state_60130__$1;
(statearr_60152_60172[(2)] = null);

(statearr_60152_60172[(1)] = (2));


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
});})(c__58254__auto___60158,out))
;
return ((function (switch__58164__auto__,c__58254__auto___60158,out){
return (function() {
var cljs$core$async$state_machine__58165__auto__ = null;
var cljs$core$async$state_machine__58165__auto____0 = (function (){
var statearr_60153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60153[(0)] = cljs$core$async$state_machine__58165__auto__);

(statearr_60153[(1)] = (1));

return statearr_60153;
});
var cljs$core$async$state_machine__58165__auto____1 = (function (state_60130){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_60130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e60154){if((e60154 instanceof Object)){
var ex__58168__auto__ = e60154;
var statearr_60155_60173 = state_60130;
(statearr_60155_60173[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60174 = state_60130;
state_60130 = G__60174;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
cljs$core$async$state_machine__58165__auto__ = function(state_60130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58165__auto____1.call(this,state_60130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58165__auto____0;
cljs$core$async$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58165__auto____1;
return cljs$core$async$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___60158,out))
})();
var state__58256__auto__ = (function (){var statearr_60156 = f__58255__auto__.call(null);
(statearr_60156[(6)] = c__58254__auto___60158);

return statearr_60156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___60158,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1536503812505
