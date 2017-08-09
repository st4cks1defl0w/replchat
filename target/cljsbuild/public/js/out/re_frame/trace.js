// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__49279){
var map__49280 = p__49279;
var map__49280__$1 = ((((!((map__49280 == null)))?(((((map__49280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49280):map__49280);
var operation = cljs.core.get.call(null,map__49280__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__49280__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__49280__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__49280__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__49282_49294 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__49283_49295 = null;
var count__49284_49296 = (0);
var i__49285_49297 = (0);
while(true){
if((i__49285_49297 < count__49284_49296)){
var vec__49286_49298 = cljs.core._nth.call(null,chunk__49283_49295,i__49285_49297);
var k_49299 = cljs.core.nth.call(null,vec__49286_49298,(0),null);
var cb_49300 = cljs.core.nth.call(null,vec__49286_49298,(1),null);
try{cb_49300.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e49289){var e_49301 = e49289;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_49299,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_49301);
}

var G__49302 = seq__49282_49294;
var G__49303 = chunk__49283_49295;
var G__49304 = count__49284_49296;
var G__49305 = (i__49285_49297 + (1));
seq__49282_49294 = G__49302;
chunk__49283_49295 = G__49303;
count__49284_49296 = G__49304;
i__49285_49297 = G__49305;
continue;
} else {
var temp__5457__auto___49306 = cljs.core.seq.call(null,seq__49282_49294);
if(temp__5457__auto___49306){
var seq__49282_49307__$1 = temp__5457__auto___49306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49282_49307__$1)){
var c__4319__auto___49308 = cljs.core.chunk_first.call(null,seq__49282_49307__$1);
var G__49309 = cljs.core.chunk_rest.call(null,seq__49282_49307__$1);
var G__49310 = c__4319__auto___49308;
var G__49311 = cljs.core.count.call(null,c__4319__auto___49308);
var G__49312 = (0);
seq__49282_49294 = G__49309;
chunk__49283_49295 = G__49310;
count__49284_49296 = G__49311;
i__49285_49297 = G__49312;
continue;
} else {
var vec__49290_49313 = cljs.core.first.call(null,seq__49282_49307__$1);
var k_49314 = cljs.core.nth.call(null,vec__49290_49313,(0),null);
var cb_49315 = cljs.core.nth.call(null,vec__49290_49313,(1),null);
try{cb_49315.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e49293){var e_49316 = e49293;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_49314,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_49316);
}

var G__49317 = cljs.core.next.call(null,seq__49282_49307__$1);
var G__49318 = null;
var G__49319 = (0);
var G__49320 = (0);
seq__49282_49294 = G__49317;
chunk__49283_49295 = G__49318;
count__49284_49296 = G__49319;
i__49285_49297 = G__49320;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1536503772189
