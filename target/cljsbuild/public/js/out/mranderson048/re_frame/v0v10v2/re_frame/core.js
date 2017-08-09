// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.core');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.subs');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.cofx');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.std_interceptors');
goog.require('clojure.set');
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch = mranderson048.re_frame.v0v10v2.re_frame.router.dispatch;
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch_sync = mranderson048.re_frame.v0v10v2.re_frame.router.dispatch_sync;
mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub = mranderson048.re_frame.v0v10v2.re_frame.subs.reg_sub;
mranderson048.re_frame.v0v10v2.re_frame.core.subscribe = mranderson048.re_frame.v0v10v2.re_frame.subs.subscribe;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_sub = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.subs.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.clear_subscription_cache_BANG_ = mranderson048.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub_raw = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_sub_raw(query_id,handler_fn){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.kind,query_id,handler_fn);
});
mranderson048.re_frame.v0v10v2.re_frame.core.reg_fx = mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_fx = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.fx.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.reg_cofx = mranderson048.re_frame.v0v10v2.re_frame.cofx.reg_cofx;
mranderson048.re_frame.v0v10v2.re_frame.core.inject_cofx = mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_cofx;
mranderson048.re_frame.v0v10v2.re_frame.core.clear_cofx = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_db(var_args){
var G__53197 = arguments.length;
switch (G__53197) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.db_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_fx(var_args){
var G__53200 = arguments.length;
switch (G__53200) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.fx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx = (function mranderson048$re_frame$v0v10v2$re_frame$core$reg_event_ctx(var_args){
var G__53203 = arguments.length;
switch (G__53203) {
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.call(null,id,null,handler);
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return mranderson048.re_frame.v0v10v2.re_frame.events.register.call(null,id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.re_frame.v0v10v2.re_frame.cofx.inject_db,mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx,interceptors,mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.ctx_handler__GT_interceptor.call(null,handler)], null));
});

mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

mranderson048.re_frame.v0v10v2.re_frame.core.clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
mranderson048.re_frame.v0v10v2.re_frame.core.debug = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.debug;
mranderson048.re_frame.v0v10v2.re_frame.core.path = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.path;
mranderson048.re_frame.v0v10v2.re_frame.core.enrich = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.enrich;
mranderson048.re_frame.v0v10v2.re_frame.core.trim_v = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.trim_v;
mranderson048.re_frame.v0v10v2.re_frame.core.after = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.after;
mranderson048.re_frame.v0v10v2.re_frame.core.on_changes = mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.on_changes;
mranderson048.re_frame.v0v10v2.re_frame.core.__GT_interceptor = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor;
mranderson048.re_frame.v0v10v2.re_frame.core.get_coeffect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect;
mranderson048.re_frame.v0v10v2.re_frame.core.assoc_coeffect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect;
mranderson048.re_frame.v0v10v2.re_frame.core.get_effect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect;
mranderson048.re_frame.v0v10v2.re_frame.core.assoc_effect = mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_effect;
mranderson048.re_frame.v0v10v2.re_frame.core.enqueue = mranderson048.re_frame.v0v10v2.re_frame.interceptor.enqueue;
mranderson048.re_frame.v0v10v2.re_frame.core.set_loggers_BANG_ = mranderson048.re_frame.v0v10v2.re_frame.loggers.set_loggers_BANG_;
mranderson048.re_frame.v0v10v2.re_frame.core.console = mranderson048.re_frame.v0v10v2.re_frame.loggers.console;
/**
 * Checkpoints the state of mranderson048.re-frame.v0v10v2.re-frame and returns a function which, when
 *   later called, will restore mranderson048.re-frame.v0v10v2.re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.core.make_restore_fn = (function mranderson048$re_frame$v0v10v2$re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db);
var subs_cache = cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_53209 = cljs.core.set.call(null,cljs.core.vals.call(null,subs_cache));
var current_subs_53210 = cljs.core.set.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)));
var seq__53205_53211 = cljs.core.seq.call(null,clojure.set.difference.call(null,current_subs_53210,original_subs_53209));
var chunk__53206_53212 = null;
var count__53207_53213 = (0);
var i__53208_53214 = (0);
while(true){
if((i__53208_53214 < count__53207_53213)){
var sub_53215 = cljs.core._nth.call(null,chunk__53206_53212,i__53208_53214);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,sub_53215);


var G__53216 = seq__53205_53211;
var G__53217 = chunk__53206_53212;
var G__53218 = count__53207_53213;
var G__53219 = (i__53208_53214 + (1));
seq__53205_53211 = G__53216;
chunk__53206_53212 = G__53217;
count__53207_53213 = G__53218;
i__53208_53214 = G__53219;
continue;
} else {
var temp__5457__auto___53220 = cljs.core.seq.call(null,seq__53205_53211);
if(temp__5457__auto___53220){
var seq__53205_53221__$1 = temp__5457__auto___53220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53205_53221__$1)){
var c__4319__auto___53222 = cljs.core.chunk_first.call(null,seq__53205_53221__$1);
var G__53223 = cljs.core.chunk_rest.call(null,seq__53205_53221__$1);
var G__53224 = c__4319__auto___53222;
var G__53225 = cljs.core.count.call(null,c__4319__auto___53222);
var G__53226 = (0);
seq__53205_53211 = G__53223;
chunk__53206_53212 = G__53224;
count__53207_53213 = G__53225;
i__53208_53214 = G__53226;
continue;
} else {
var sub_53227 = cljs.core.first.call(null,seq__53205_53221__$1);
mranderson048.re_frame.v0v10v2.re_frame.interop.dispose_BANG_.call(null,sub_53227);


var G__53228 = cljs.core.next.call(null,seq__53205_53221__$1);
var G__53229 = null;
var G__53230 = (0);
var G__53231 = (0);
seq__53205_53211 = G__53228;
chunk__53206_53212 = G__53229;
count__53207_53213 = G__53230;
i__53208_53214 = G__53231;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback = (function mranderson048$re_frame$v0v10v2$re_frame$core$add_post_event_callback(var_args){
var G__53233 = arguments.length;
switch (G__53233) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.call(null,f,f);
});

mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return mranderson048.re_frame.v0v10v2.re_frame.router.add_post_event_callback.call(null,mranderson048.re_frame.v0v10v2.re_frame.router.event_queue,id,f);
});

mranderson048.re_frame.v0v10v2.re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

mranderson048.re_frame.v0v10v2.re_frame.core.remove_post_event_callback = (function mranderson048$re_frame$v0v10v2$re_frame$core$remove_post_event_callback(id){
return mranderson048.re_frame.v0v10v2.re_frame.router.remove_post_event_callback.call(null,mranderson048.re_frame.v0v10v2.re_frame.router.event_queue,id);
});
mranderson048.re_frame.v0v10v2.re_frame.core.register_handler = (function mranderson048$re_frame$v0v10v2$re_frame$core$register_handler(var_args){
var args__4502__auto__ = [];
var len__4499__auto___53236 = arguments.length;
var i__4500__auto___53237 = (0);
while(true){
if((i__4500__auto___53237 < len__4499__auto___53236)){
args__4502__auto__.push((arguments[i__4500__auto___53237]));

var G__53238 = (i__4500__auto___53237 + (1));
i__4500__auto___53237 = G__53238;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson048.re_frame.v0v10v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,mranderson048.re_frame.v0v10v2.re_frame.core.reg_event_db,args);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.core.register_handler.cljs$lang$applyTo = (function (seq53235){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53235));
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_sub = (function mranderson048$re_frame$v0v10v2$re_frame$core$register_sub(var_args){
var args__4502__auto__ = [];
var len__4499__auto___53240 = arguments.length;
var i__4500__auto___53241 = (0);
while(true){
if((i__4500__auto___53241 < len__4499__auto___53240)){
args__4502__auto__.push((arguments[i__4500__auto___53241]));

var G__53242 = (i__4500__auto___53241 + (1));
i__4500__auto___53241 = G__53242;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
mranderson048.re_frame.v0v10v2.re_frame.core.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),")");

return cljs.core.apply.call(null,mranderson048.re_frame.v0v10v2.re_frame.core.reg_sub_raw,args);
});

mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.core.register_sub.cljs$lang$applyTo = (function (seq53239){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53239));
});


//# sourceMappingURL=core.js.map?rel=1536503791347
