// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
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
mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__53116 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__53117 = null;
var count__53118 = (0);
var i__53119 = (0);
while(true){
if((i__53119 < count__53118)){
var vec__53120 = cljs.core._nth.call(null,chunk__53117,i__53119);
var effect_key = cljs.core.nth.call(null,vec__53120,(0),null);
var effect_value = cljs.core.nth.call(null,vec__53120,(1),null);
var temp__5455__auto___53126 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___53126)){
var effect_fn_53127 = temp__5455__auto___53126;
effect_fn_53127.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__53128 = seq__53116;
var G__53129 = chunk__53117;
var G__53130 = count__53118;
var G__53131 = (i__53119 + (1));
seq__53116 = G__53128;
chunk__53117 = G__53129;
count__53118 = G__53130;
i__53119 = G__53131;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__53116);
if(temp__5457__auto__){
var seq__53116__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53116__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__53116__$1);
var G__53132 = cljs.core.chunk_rest.call(null,seq__53116__$1);
var G__53133 = c__4319__auto__;
var G__53134 = cljs.core.count.call(null,c__4319__auto__);
var G__53135 = (0);
seq__53116 = G__53132;
chunk__53117 = G__53133;
count__53118 = G__53134;
i__53119 = G__53135;
continue;
} else {
var vec__53123 = cljs.core.first.call(null,seq__53116__$1);
var effect_key = cljs.core.nth.call(null,vec__53123,(0),null);
var effect_value = cljs.core.nth.call(null,vec__53123,(1),null);
var temp__5455__auto___53136 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___53136)){
var effect_fn_53137 = temp__5455__auto___53136;
effect_fn_53137.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__53138 = cljs.core.next.call(null,seq__53116__$1);
var G__53139 = null;
var G__53140 = (0);
var G__53141 = (0);
seq__53116 = G__53138;
chunk__53117 = G__53139;
count__53118 = G__53140;
i__53119 = G__53141;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__53142 = cljs.core.seq.call(null,value);
var chunk__53143 = null;
var count__53144 = (0);
var i__53145 = (0);
while(true){
if((i__53145 < count__53144)){
var map__53146 = cljs.core._nth.call(null,chunk__53143,i__53145);
var map__53146__$1 = ((((!((map__53146 == null)))?(((((map__53146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53146):map__53146);
var effect = map__53146__$1;
var ms = cljs.core.get.call(null,map__53146__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__53146__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__53142,chunk__53143,count__53144,i__53145,map__53146,map__53146__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__53142,chunk__53143,count__53144,i__53145,map__53146,map__53146__$1,effect,ms,dispatch))
,ms);
}


var G__53150 = seq__53142;
var G__53151 = chunk__53143;
var G__53152 = count__53144;
var G__53153 = (i__53145 + (1));
seq__53142 = G__53150;
chunk__53143 = G__53151;
count__53144 = G__53152;
i__53145 = G__53153;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__53142);
if(temp__5457__auto__){
var seq__53142__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53142__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__53142__$1);
var G__53154 = cljs.core.chunk_rest.call(null,seq__53142__$1);
var G__53155 = c__4319__auto__;
var G__53156 = cljs.core.count.call(null,c__4319__auto__);
var G__53157 = (0);
seq__53142 = G__53154;
chunk__53143 = G__53155;
count__53144 = G__53156;
i__53145 = G__53157;
continue;
} else {
var map__53148 = cljs.core.first.call(null,seq__53142__$1);
var map__53148__$1 = ((((!((map__53148 == null)))?(((((map__53148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53148):map__53148);
var effect = map__53148__$1;
var ms = cljs.core.get.call(null,map__53148__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__53148__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__53142,chunk__53143,count__53144,i__53145,map__53148,map__53148__$1,effect,ms,dispatch,seq__53142__$1,temp__5457__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__53142,chunk__53143,count__53144,i__53145,map__53148,map__53148__$1,effect,ms,dispatch,seq__53142__$1,temp__5457__auto__))
,ms);
}


var G__53158 = cljs.core.next.call(null,seq__53142__$1);
var G__53159 = null;
var G__53160 = (0);
var G__53161 = (0);
seq__53142 = G__53158;
chunk__53143 = G__53159;
count__53144 = G__53160;
i__53145 = G__53161;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__53162 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__53163 = null;
var count__53164 = (0);
var i__53165 = (0);
while(true){
if((i__53165 < count__53164)){
var event = cljs.core._nth.call(null,chunk__53163,i__53165);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__53166 = seq__53162;
var G__53167 = chunk__53163;
var G__53168 = count__53164;
var G__53169 = (i__53165 + (1));
seq__53162 = G__53166;
chunk__53163 = G__53167;
count__53164 = G__53168;
i__53165 = G__53169;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__53162);
if(temp__5457__auto__){
var seq__53162__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53162__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__53162__$1);
var G__53170 = cljs.core.chunk_rest.call(null,seq__53162__$1);
var G__53171 = c__4319__auto__;
var G__53172 = cljs.core.count.call(null,c__4319__auto__);
var G__53173 = (0);
seq__53162 = G__53170;
chunk__53163 = G__53171;
count__53164 = G__53172;
i__53165 = G__53173;
continue;
} else {
var event = cljs.core.first.call(null,seq__53162__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__53174 = cljs.core.next.call(null,seq__53162__$1);
var G__53175 = null;
var G__53176 = (0);
var G__53177 = (0);
seq__53162 = G__53174;
chunk__53163 = G__53175;
count__53164 = G__53176;
i__53165 = G__53177;
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__53178 = cljs.core.seq.call(null,value);
var chunk__53179 = null;
var count__53180 = (0);
var i__53181 = (0);
while(true){
if((i__53181 < count__53180)){
var event = cljs.core._nth.call(null,chunk__53179,i__53181);
clear_event.call(null,event);


var G__53182 = seq__53178;
var G__53183 = chunk__53179;
var G__53184 = count__53180;
var G__53185 = (i__53181 + (1));
seq__53178 = G__53182;
chunk__53179 = G__53183;
count__53180 = G__53184;
i__53181 = G__53185;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__53178);
if(temp__5457__auto__){
var seq__53178__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53178__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__53178__$1);
var G__53186 = cljs.core.chunk_rest.call(null,seq__53178__$1);
var G__53187 = c__4319__auto__;
var G__53188 = cljs.core.count.call(null,c__4319__auto__);
var G__53189 = (0);
seq__53178 = G__53186;
chunk__53179 = G__53187;
count__53180 = G__53188;
i__53181 = G__53189;
continue;
} else {
var event = cljs.core.first.call(null,seq__53178__$1);
clear_event.call(null,event);


var G__53190 = cljs.core.next.call(null,seq__53178__$1);
var G__53191 = null;
var G__53192 = (0);
var G__53193 = (0);
seq__53178 = G__53190;
chunk__53179 = G__53191;
count__53180 = G__53192;
i__53181 = G__53193;
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1536503791239
