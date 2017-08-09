// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_49417 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__49418 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__49419 = null;
var count__49420 = (0);
var i__49421 = (0);
while(true){
if((i__49421 < count__49420)){
var vec__49422 = cljs.core._nth.call(null,chunk__49419,i__49421);
var effect_key = cljs.core.nth.call(null,vec__49422,(0),null);
var effect_value = cljs.core.nth.call(null,vec__49422,(1),null);
var temp__5455__auto___49438 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___49438)){
var effect_fn_49439 = temp__5455__auto___49438;
effect_fn_49439.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__49440 = seq__49418;
var G__49441 = chunk__49419;
var G__49442 = count__49420;
var G__49443 = (i__49421 + (1));
seq__49418 = G__49440;
chunk__49419 = G__49441;
count__49420 = G__49442;
i__49421 = G__49443;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49418);
if(temp__5457__auto__){
var seq__49418__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49418__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__49418__$1);
var G__49444 = cljs.core.chunk_rest.call(null,seq__49418__$1);
var G__49445 = c__4319__auto__;
var G__49446 = cljs.core.count.call(null,c__4319__auto__);
var G__49447 = (0);
seq__49418 = G__49444;
chunk__49419 = G__49445;
count__49420 = G__49446;
i__49421 = G__49447;
continue;
} else {
var vec__49425 = cljs.core.first.call(null,seq__49418__$1);
var effect_key = cljs.core.nth.call(null,vec__49425,(0),null);
var effect_value = cljs.core.nth.call(null,vec__49425,(1),null);
var temp__5455__auto___49448 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___49448)){
var effect_fn_49449 = temp__5455__auto___49448;
effect_fn_49449.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__49450 = cljs.core.next.call(null,seq__49418__$1);
var G__49451 = null;
var G__49452 = (0);
var G__49453 = (0);
seq__49418 = G__49450;
chunk__49419 = G__49451;
count__49420 = G__49452;
i__49421 = G__49453;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__49257__auto___49454 = re_frame.interop.now.call(null);
var duration__49258__auto___49455 = (end__49257__auto___49454 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49258__auto___49455,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__49257__auto___49454);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_49417;
}} else {
var seq__49428 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__49429 = null;
var count__49430 = (0);
var i__49431 = (0);
while(true){
if((i__49431 < count__49430)){
var vec__49432 = cljs.core._nth.call(null,chunk__49429,i__49431);
var effect_key = cljs.core.nth.call(null,vec__49432,(0),null);
var effect_value = cljs.core.nth.call(null,vec__49432,(1),null);
var temp__5455__auto___49456 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___49456)){
var effect_fn_49457 = temp__5455__auto___49456;
effect_fn_49457.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__49458 = seq__49428;
var G__49459 = chunk__49429;
var G__49460 = count__49430;
var G__49461 = (i__49431 + (1));
seq__49428 = G__49458;
chunk__49429 = G__49459;
count__49430 = G__49460;
i__49431 = G__49461;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49428);
if(temp__5457__auto__){
var seq__49428__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49428__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__49428__$1);
var G__49462 = cljs.core.chunk_rest.call(null,seq__49428__$1);
var G__49463 = c__4319__auto__;
var G__49464 = cljs.core.count.call(null,c__4319__auto__);
var G__49465 = (0);
seq__49428 = G__49462;
chunk__49429 = G__49463;
count__49430 = G__49464;
i__49431 = G__49465;
continue;
} else {
var vec__49435 = cljs.core.first.call(null,seq__49428__$1);
var effect_key = cljs.core.nth.call(null,vec__49435,(0),null);
var effect_value = cljs.core.nth.call(null,vec__49435,(1),null);
var temp__5455__auto___49466 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___49466)){
var effect_fn_49467 = temp__5455__auto___49466;
effect_fn_49467.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__49468 = cljs.core.next.call(null,seq__49428__$1);
var G__49469 = null;
var G__49470 = (0);
var G__49471 = (0);
seq__49428 = G__49468;
chunk__49429 = G__49469;
count__49430 = G__49470;
i__49431 = G__49471;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__49472 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__49473 = null;
var count__49474 = (0);
var i__49475 = (0);
while(true){
if((i__49475 < count__49474)){
var map__49476 = cljs.core._nth.call(null,chunk__49473,i__49475);
var map__49476__$1 = ((((!((map__49476 == null)))?(((((map__49476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49476):map__49476);
var effect = map__49476__$1;
var ms = cljs.core.get.call(null,map__49476__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__49476__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__49472,chunk__49473,count__49474,i__49475,map__49476,map__49476__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__49472,chunk__49473,count__49474,i__49475,map__49476,map__49476__$1,effect,ms,dispatch))
,ms);
}


var G__49480 = seq__49472;
var G__49481 = chunk__49473;
var G__49482 = count__49474;
var G__49483 = (i__49475 + (1));
seq__49472 = G__49480;
chunk__49473 = G__49481;
count__49474 = G__49482;
i__49475 = G__49483;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49472);
if(temp__5457__auto__){
var seq__49472__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49472__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__49472__$1);
var G__49484 = cljs.core.chunk_rest.call(null,seq__49472__$1);
var G__49485 = c__4319__auto__;
var G__49486 = cljs.core.count.call(null,c__4319__auto__);
var G__49487 = (0);
seq__49472 = G__49484;
chunk__49473 = G__49485;
count__49474 = G__49486;
i__49475 = G__49487;
continue;
} else {
var map__49478 = cljs.core.first.call(null,seq__49472__$1);
var map__49478__$1 = ((((!((map__49478 == null)))?(((((map__49478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49478):map__49478);
var effect = map__49478__$1;
var ms = cljs.core.get.call(null,map__49478__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__49478__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__49472,chunk__49473,count__49474,i__49475,map__49478,map__49478__$1,effect,ms,dispatch,seq__49472__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__49472,chunk__49473,count__49474,i__49475,map__49478,map__49478__$1,effect,ms,dispatch,seq__49472__$1,temp__5457__auto__))
,ms);
}


var G__49488 = cljs.core.next.call(null,seq__49472__$1);
var G__49489 = null;
var G__49490 = (0);
var G__49491 = (0);
seq__49472 = G__49488;
chunk__49473 = G__49489;
count__49474 = G__49490;
i__49475 = G__49491;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__49492 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__49493 = null;
var count__49494 = (0);
var i__49495 = (0);
while(true){
if((i__49495 < count__49494)){
var event = cljs.core._nth.call(null,chunk__49493,i__49495);
re_frame.router.dispatch.call(null,event);


var G__49496 = seq__49492;
var G__49497 = chunk__49493;
var G__49498 = count__49494;
var G__49499 = (i__49495 + (1));
seq__49492 = G__49496;
chunk__49493 = G__49497;
count__49494 = G__49498;
i__49495 = G__49499;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49492);
if(temp__5457__auto__){
var seq__49492__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49492__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__49492__$1);
var G__49500 = cljs.core.chunk_rest.call(null,seq__49492__$1);
var G__49501 = c__4319__auto__;
var G__49502 = cljs.core.count.call(null,c__4319__auto__);
var G__49503 = (0);
seq__49492 = G__49500;
chunk__49493 = G__49501;
count__49494 = G__49502;
i__49495 = G__49503;
continue;
} else {
var event = cljs.core.first.call(null,seq__49492__$1);
re_frame.router.dispatch.call(null,event);


var G__49504 = cljs.core.next.call(null,seq__49492__$1);
var G__49505 = null;
var G__49506 = (0);
var G__49507 = (0);
seq__49492 = G__49504;
chunk__49493 = G__49505;
count__49494 = G__49506;
i__49495 = G__49507;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__49508 = cljs.core.seq.call(null,value);
var chunk__49509 = null;
var count__49510 = (0);
var i__49511 = (0);
while(true){
if((i__49511 < count__49510)){
var event = cljs.core._nth.call(null,chunk__49509,i__49511);
clear_event.call(null,event);


var G__49512 = seq__49508;
var G__49513 = chunk__49509;
var G__49514 = count__49510;
var G__49515 = (i__49511 + (1));
seq__49508 = G__49512;
chunk__49509 = G__49513;
count__49510 = G__49514;
i__49511 = G__49515;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49508);
if(temp__5457__auto__){
var seq__49508__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49508__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__49508__$1);
var G__49516 = cljs.core.chunk_rest.call(null,seq__49508__$1);
var G__49517 = c__4319__auto__;
var G__49518 = cljs.core.count.call(null,c__4319__auto__);
var G__49519 = (0);
seq__49508 = G__49516;
chunk__49509 = G__49517;
count__49510 = G__49518;
i__49511 = G__49519;
continue;
} else {
var event = cljs.core.first.call(null,seq__49508__$1);
clear_event.call(null,event);


var G__49520 = cljs.core.next.call(null,seq__49508__$1);
var G__49521 = null;
var G__49522 = (0);
var G__49523 = (0);
seq__49508 = G__49520;
chunk__49509 = G__49521;
count__49510 = G__49522;
i__49511 = G__49523;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1536503772789
