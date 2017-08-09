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
var _STAR_current_trace_STAR_6855 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__6856 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__6857 = null;
var count__6858 = (0);
var i__6859 = (0);
while(true){
if((i__6859 < count__6858)){
var vec__6860 = cljs.core._nth.call(null,chunk__6857,i__6859);
var effect_key = cljs.core.nth.call(null,vec__6860,(0),null);
var effect_value = cljs.core.nth.call(null,vec__6860,(1),null);
var temp__5455__auto___6876 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___6876)){
var effect_fn_6877 = temp__5455__auto___6876;
effect_fn_6877.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__6878 = seq__6856;
var G__6879 = chunk__6857;
var G__6880 = count__6858;
var G__6881 = (i__6859 + (1));
seq__6856 = G__6878;
chunk__6857 = G__6879;
count__6858 = G__6880;
i__6859 = G__6881;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__6856);
if(temp__5457__auto__){
var seq__6856__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6856__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__6856__$1);
var G__6882 = cljs.core.chunk_rest.call(null,seq__6856__$1);
var G__6883 = c__4319__auto__;
var G__6884 = cljs.core.count.call(null,c__4319__auto__);
var G__6885 = (0);
seq__6856 = G__6882;
chunk__6857 = G__6883;
count__6858 = G__6884;
i__6859 = G__6885;
continue;
} else {
var vec__6863 = cljs.core.first.call(null,seq__6856__$1);
var effect_key = cljs.core.nth.call(null,vec__6863,(0),null);
var effect_value = cljs.core.nth.call(null,vec__6863,(1),null);
var temp__5455__auto___6886 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___6886)){
var effect_fn_6887 = temp__5455__auto___6886;
effect_fn_6887.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__6888 = cljs.core.next.call(null,seq__6856__$1);
var G__6889 = null;
var G__6890 = (0);
var G__6891 = (0);
seq__6856 = G__6888;
chunk__6857 = G__6889;
count__6858 = G__6890;
i__6859 = G__6891;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__6695__auto___6892 = re_frame.interop.now.call(null);
var duration__6696__auto___6893 = (end__6695__auto___6892 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__6696__auto___6893,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__6695__auto___6892);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_6855;
}} else {
var seq__6866 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__6867 = null;
var count__6868 = (0);
var i__6869 = (0);
while(true){
if((i__6869 < count__6868)){
var vec__6870 = cljs.core._nth.call(null,chunk__6867,i__6869);
var effect_key = cljs.core.nth.call(null,vec__6870,(0),null);
var effect_value = cljs.core.nth.call(null,vec__6870,(1),null);
var temp__5455__auto___6894 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___6894)){
var effect_fn_6895 = temp__5455__auto___6894;
effect_fn_6895.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__6896 = seq__6866;
var G__6897 = chunk__6867;
var G__6898 = count__6868;
var G__6899 = (i__6869 + (1));
seq__6866 = G__6896;
chunk__6867 = G__6897;
count__6868 = G__6898;
i__6869 = G__6899;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__6866);
if(temp__5457__auto__){
var seq__6866__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6866__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__6866__$1);
var G__6900 = cljs.core.chunk_rest.call(null,seq__6866__$1);
var G__6901 = c__4319__auto__;
var G__6902 = cljs.core.count.call(null,c__4319__auto__);
var G__6903 = (0);
seq__6866 = G__6900;
chunk__6867 = G__6901;
count__6868 = G__6902;
i__6869 = G__6903;
continue;
} else {
var vec__6873 = cljs.core.first.call(null,seq__6866__$1);
var effect_key = cljs.core.nth.call(null,vec__6873,(0),null);
var effect_value = cljs.core.nth.call(null,vec__6873,(1),null);
var temp__5455__auto___6904 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___6904)){
var effect_fn_6905 = temp__5455__auto___6904;
effect_fn_6905.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__6906 = cljs.core.next.call(null,seq__6866__$1);
var G__6907 = null;
var G__6908 = (0);
var G__6909 = (0);
seq__6866 = G__6906;
chunk__6867 = G__6907;
count__6868 = G__6908;
i__6869 = G__6909;
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
var seq__6910 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__6911 = null;
var count__6912 = (0);
var i__6913 = (0);
while(true){
if((i__6913 < count__6912)){
var map__6914 = cljs.core._nth.call(null,chunk__6911,i__6913);
var map__6914__$1 = ((((!((map__6914 == null)))?(((((map__6914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6914):map__6914);
var effect = map__6914__$1;
var ms = cljs.core.get.call(null,map__6914__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__6914__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__6910,chunk__6911,count__6912,i__6913,map__6914,map__6914__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__6910,chunk__6911,count__6912,i__6913,map__6914,map__6914__$1,effect,ms,dispatch))
,ms);
}


var G__6918 = seq__6910;
var G__6919 = chunk__6911;
var G__6920 = count__6912;
var G__6921 = (i__6913 + (1));
seq__6910 = G__6918;
chunk__6911 = G__6919;
count__6912 = G__6920;
i__6913 = G__6921;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__6910);
if(temp__5457__auto__){
var seq__6910__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6910__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__6910__$1);
var G__6922 = cljs.core.chunk_rest.call(null,seq__6910__$1);
var G__6923 = c__4319__auto__;
var G__6924 = cljs.core.count.call(null,c__4319__auto__);
var G__6925 = (0);
seq__6910 = G__6922;
chunk__6911 = G__6923;
count__6912 = G__6924;
i__6913 = G__6925;
continue;
} else {
var map__6916 = cljs.core.first.call(null,seq__6910__$1);
var map__6916__$1 = ((((!((map__6916 == null)))?(((((map__6916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6916):map__6916);
var effect = map__6916__$1;
var ms = cljs.core.get.call(null,map__6916__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__6916__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__6910,chunk__6911,count__6912,i__6913,map__6916,map__6916__$1,effect,ms,dispatch,seq__6910__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__6910,chunk__6911,count__6912,i__6913,map__6916,map__6916__$1,effect,ms,dispatch,seq__6910__$1,temp__5457__auto__))
,ms);
}


var G__6926 = cljs.core.next.call(null,seq__6910__$1);
var G__6927 = null;
var G__6928 = (0);
var G__6929 = (0);
seq__6910 = G__6926;
chunk__6911 = G__6927;
count__6912 = G__6928;
i__6913 = G__6929;
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
var seq__6930 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__6931 = null;
var count__6932 = (0);
var i__6933 = (0);
while(true){
if((i__6933 < count__6932)){
var event = cljs.core._nth.call(null,chunk__6931,i__6933);
re_frame.router.dispatch.call(null,event);


var G__6934 = seq__6930;
var G__6935 = chunk__6931;
var G__6936 = count__6932;
var G__6937 = (i__6933 + (1));
seq__6930 = G__6934;
chunk__6931 = G__6935;
count__6932 = G__6936;
i__6933 = G__6937;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__6930);
if(temp__5457__auto__){
var seq__6930__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6930__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__6930__$1);
var G__6938 = cljs.core.chunk_rest.call(null,seq__6930__$1);
var G__6939 = c__4319__auto__;
var G__6940 = cljs.core.count.call(null,c__4319__auto__);
var G__6941 = (0);
seq__6930 = G__6938;
chunk__6931 = G__6939;
count__6932 = G__6940;
i__6933 = G__6941;
continue;
} else {
var event = cljs.core.first.call(null,seq__6930__$1);
re_frame.router.dispatch.call(null,event);


var G__6942 = cljs.core.next.call(null,seq__6930__$1);
var G__6943 = null;
var G__6944 = (0);
var G__6945 = (0);
seq__6930 = G__6942;
chunk__6931 = G__6943;
count__6932 = G__6944;
i__6933 = G__6945;
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
var seq__6946 = cljs.core.seq.call(null,value);
var chunk__6947 = null;
var count__6948 = (0);
var i__6949 = (0);
while(true){
if((i__6949 < count__6948)){
var event = cljs.core._nth.call(null,chunk__6947,i__6949);
clear_event.call(null,event);


var G__6950 = seq__6946;
var G__6951 = chunk__6947;
var G__6952 = count__6948;
var G__6953 = (i__6949 + (1));
seq__6946 = G__6950;
chunk__6947 = G__6951;
count__6948 = G__6952;
i__6949 = G__6953;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__6946);
if(temp__5457__auto__){
var seq__6946__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6946__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__6946__$1);
var G__6954 = cljs.core.chunk_rest.call(null,seq__6946__$1);
var G__6955 = c__4319__auto__;
var G__6956 = cljs.core.count.call(null,c__4319__auto__);
var G__6957 = (0);
seq__6946 = G__6954;
chunk__6947 = G__6955;
count__6948 = G__6956;
i__6949 = G__6957;
continue;
} else {
var event = cljs.core.first.call(null,seq__6946__$1);
clear_event.call(null,event);


var G__6958 = cljs.core.next.call(null,seq__6946__$1);
var G__6959 = null;
var G__6960 = (0);
var G__6961 = (0);
seq__6946 = G__6958;
chunk__6947 = G__6959;
count__6948 = G__6960;
i__6949 = G__6961;
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
