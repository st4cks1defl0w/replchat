// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e61217){if((e61217 instanceof Error)){
var e = e61217;
return "Error: Unable to stringify";
} else {
throw e61217;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__61220 = arguments.length;
switch (G__61220) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__61218_SHARP_){
if(typeof p1__61218_SHARP_ === 'string'){
return p1__61218_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__61218_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___61223 = arguments.length;
var i__4500__auto___61224 = (0);
while(true){
if((i__4500__auto___61224 < len__4499__auto___61223)){
args__4502__auto__.push((arguments[i__4500__auto___61224]));

var G__61225 = (i__4500__auto___61224 + (1));
i__4500__auto___61224 = G__61225;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq61222){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61222));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___61227 = arguments.length;
var i__4500__auto___61228 = (0);
while(true){
if((i__4500__auto___61228 < len__4499__auto___61227)){
args__4502__auto__.push((arguments[i__4500__auto___61228]));

var G__61229 = (i__4500__auto___61228 + (1));
i__4500__auto___61228 = G__61229;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq61226){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61226));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__61230){
var map__61231 = p__61230;
var map__61231__$1 = ((((!((map__61231 == null)))?(((((map__61231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61231):map__61231);
var message = cljs.core.get.call(null,map__61231__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__61231__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__58254__auto___61310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___61310,ch){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___61310,ch){
return (function (state_61282){
var state_val_61283 = (state_61282[(1)]);
if((state_val_61283 === (7))){
var inst_61278 = (state_61282[(2)]);
var state_61282__$1 = state_61282;
var statearr_61284_61311 = state_61282__$1;
(statearr_61284_61311[(2)] = inst_61278);

(statearr_61284_61311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (1))){
var state_61282__$1 = state_61282;
var statearr_61285_61312 = state_61282__$1;
(statearr_61285_61312[(2)] = null);

(statearr_61285_61312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (4))){
var inst_61235 = (state_61282[(7)]);
var inst_61235__$1 = (state_61282[(2)]);
var state_61282__$1 = (function (){var statearr_61286 = state_61282;
(statearr_61286[(7)] = inst_61235__$1);

return statearr_61286;
})();
if(cljs.core.truth_(inst_61235__$1)){
var statearr_61287_61313 = state_61282__$1;
(statearr_61287_61313[(1)] = (5));

} else {
var statearr_61288_61314 = state_61282__$1;
(statearr_61288_61314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (15))){
var inst_61242 = (state_61282[(8)]);
var inst_61257 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_61242);
var inst_61258 = cljs.core.first.call(null,inst_61257);
var inst_61259 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_61258);
var inst_61260 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_61259)].join('');
var inst_61261 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_61260);
var state_61282__$1 = state_61282;
var statearr_61289_61315 = state_61282__$1;
(statearr_61289_61315[(2)] = inst_61261);

(statearr_61289_61315[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (13))){
var inst_61266 = (state_61282[(2)]);
var state_61282__$1 = state_61282;
var statearr_61290_61316 = state_61282__$1;
(statearr_61290_61316[(2)] = inst_61266);

(statearr_61290_61316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (6))){
var state_61282__$1 = state_61282;
var statearr_61291_61317 = state_61282__$1;
(statearr_61291_61317[(2)] = null);

(statearr_61291_61317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (17))){
var inst_61264 = (state_61282[(2)]);
var state_61282__$1 = state_61282;
var statearr_61292_61318 = state_61282__$1;
(statearr_61292_61318[(2)] = inst_61264);

(statearr_61292_61318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (3))){
var inst_61280 = (state_61282[(2)]);
var state_61282__$1 = state_61282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61282__$1,inst_61280);
} else {
if((state_val_61283 === (12))){
var inst_61241 = (state_61282[(9)]);
var inst_61255 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_61241,opts);
var state_61282__$1 = state_61282;
if(cljs.core.truth_(inst_61255)){
var statearr_61293_61319 = state_61282__$1;
(statearr_61293_61319[(1)] = (15));

} else {
var statearr_61294_61320 = state_61282__$1;
(statearr_61294_61320[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (2))){
var state_61282__$1 = state_61282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61282__$1,(4),ch);
} else {
if((state_val_61283 === (11))){
var inst_61242 = (state_61282[(8)]);
var inst_61247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61248 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_61242);
var inst_61249 = cljs.core.async.timeout.call(null,(1000));
var inst_61250 = [inst_61248,inst_61249];
var inst_61251 = (new cljs.core.PersistentVector(null,2,(5),inst_61247,inst_61250,null));
var state_61282__$1 = state_61282;
return cljs.core.async.ioc_alts_BANG_.call(null,state_61282__$1,(14),inst_61251);
} else {
if((state_val_61283 === (9))){
var inst_61242 = (state_61282[(8)]);
var inst_61268 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_61269 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_61242);
var inst_61270 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_61269);
var inst_61271 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_61270)].join('');
var inst_61272 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_61271);
var state_61282__$1 = (function (){var statearr_61295 = state_61282;
(statearr_61295[(10)] = inst_61268);

return statearr_61295;
})();
var statearr_61296_61321 = state_61282__$1;
(statearr_61296_61321[(2)] = inst_61272);

(statearr_61296_61321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (5))){
var inst_61235 = (state_61282[(7)]);
var inst_61237 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_61238 = (new cljs.core.PersistentArrayMap(null,2,inst_61237,null));
var inst_61239 = (new cljs.core.PersistentHashSet(null,inst_61238,null));
var inst_61240 = figwheel.client.focus_msgs.call(null,inst_61239,inst_61235);
var inst_61241 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_61240);
var inst_61242 = cljs.core.first.call(null,inst_61240);
var inst_61243 = figwheel.client.autoload_QMARK_.call(null);
var state_61282__$1 = (function (){var statearr_61297 = state_61282;
(statearr_61297[(8)] = inst_61242);

(statearr_61297[(9)] = inst_61241);

return statearr_61297;
})();
if(cljs.core.truth_(inst_61243)){
var statearr_61298_61322 = state_61282__$1;
(statearr_61298_61322[(1)] = (8));

} else {
var statearr_61299_61323 = state_61282__$1;
(statearr_61299_61323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (14))){
var inst_61253 = (state_61282[(2)]);
var state_61282__$1 = state_61282;
var statearr_61300_61324 = state_61282__$1;
(statearr_61300_61324[(2)] = inst_61253);

(statearr_61300_61324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (16))){
var state_61282__$1 = state_61282;
var statearr_61301_61325 = state_61282__$1;
(statearr_61301_61325[(2)] = null);

(statearr_61301_61325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (10))){
var inst_61274 = (state_61282[(2)]);
var state_61282__$1 = (function (){var statearr_61302 = state_61282;
(statearr_61302[(11)] = inst_61274);

return statearr_61302;
})();
var statearr_61303_61326 = state_61282__$1;
(statearr_61303_61326[(2)] = null);

(statearr_61303_61326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61283 === (8))){
var inst_61241 = (state_61282[(9)]);
var inst_61245 = figwheel.client.reload_file_state_QMARK_.call(null,inst_61241,opts);
var state_61282__$1 = state_61282;
if(cljs.core.truth_(inst_61245)){
var statearr_61304_61327 = state_61282__$1;
(statearr_61304_61327[(1)] = (11));

} else {
var statearr_61305_61328 = state_61282__$1;
(statearr_61305_61328[(1)] = (12));

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
});})(c__58254__auto___61310,ch))
;
return ((function (switch__58164__auto__,c__58254__auto___61310,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__58165__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__58165__auto____0 = (function (){
var statearr_61306 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61306[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__58165__auto__);

(statearr_61306[(1)] = (1));

return statearr_61306;
});
var figwheel$client$file_reloader_plugin_$_state_machine__58165__auto____1 = (function (state_61282){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_61282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e61307){if((e61307 instanceof Object)){
var ex__58168__auto__ = e61307;
var statearr_61308_61329 = state_61282;
(statearr_61308_61329[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61330 = state_61282;
state_61282 = G__61330;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__58165__auto__ = function(state_61282){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__58165__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__58165__auto____1.call(this,state_61282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__58165__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__58165__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___61310,ch))
})();
var state__58256__auto__ = (function (){var statearr_61309 = f__58255__auto__.call(null);
(statearr_61309[(6)] = c__58254__auto___61310);

return statearr_61309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___61310,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__61331_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__61331_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_61335 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_61335){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_61333 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_61334 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_61333,_STAR_print_fn_STAR_61334,sb,base_path_61335){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_61333,_STAR_print_fn_STAR_61334,sb,base_path_61335))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_61334;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_61333;
}}catch (e61332){if((e61332 instanceof Error)){
var e = e61332;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_61335], null));
} else {
var e = e61332;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_61335))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__61336){
var map__61337 = p__61336;
var map__61337__$1 = ((((!((map__61337 == null)))?(((((map__61337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61337):map__61337);
var opts = map__61337__$1;
var build_id = cljs.core.get.call(null,map__61337__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__61337,map__61337__$1,opts,build_id){
return (function (p__61339){
var vec__61340 = p__61339;
var seq__61341 = cljs.core.seq.call(null,vec__61340);
var first__61342 = cljs.core.first.call(null,seq__61341);
var seq__61341__$1 = cljs.core.next.call(null,seq__61341);
var map__61343 = first__61342;
var map__61343__$1 = ((((!((map__61343 == null)))?(((((map__61343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61343):map__61343);
var msg = map__61343__$1;
var msg_name = cljs.core.get.call(null,map__61343__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__61341__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__61340,seq__61341,first__61342,seq__61341__$1,map__61343,map__61343__$1,msg,msg_name,_,map__61337,map__61337__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__61340,seq__61341,first__61342,seq__61341__$1,map__61343,map__61343__$1,msg,msg_name,_,map__61337,map__61337__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__61337,map__61337__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__61345){
var vec__61346 = p__61345;
var seq__61347 = cljs.core.seq.call(null,vec__61346);
var first__61348 = cljs.core.first.call(null,seq__61347);
var seq__61347__$1 = cljs.core.next.call(null,seq__61347);
var map__61349 = first__61348;
var map__61349__$1 = ((((!((map__61349 == null)))?(((((map__61349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61349):map__61349);
var msg = map__61349__$1;
var msg_name = cljs.core.get.call(null,map__61349__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__61347__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__61351){
var map__61352 = p__61351;
var map__61352__$1 = ((((!((map__61352 == null)))?(((((map__61352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61352):map__61352);
var on_compile_warning = cljs.core.get.call(null,map__61352__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__61352__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__61352,map__61352__$1,on_compile_warning,on_compile_fail){
return (function (p__61354){
var vec__61355 = p__61354;
var seq__61356 = cljs.core.seq.call(null,vec__61355);
var first__61357 = cljs.core.first.call(null,seq__61356);
var seq__61356__$1 = cljs.core.next.call(null,seq__61356);
var map__61358 = first__61357;
var map__61358__$1 = ((((!((map__61358 == null)))?(((((map__61358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61358):map__61358);
var msg = map__61358__$1;
var msg_name = cljs.core.get.call(null,map__61358__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__61356__$1;
var pred__61360 = cljs.core._EQ_;
var expr__61361 = msg_name;
if(cljs.core.truth_(pred__61360.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__61361))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__61360.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__61361))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__61352,map__61352__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__58254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto__,msg_hist,msg_names,msg){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto__,msg_hist,msg_names,msg){
return (function (state_61450){
var state_val_61451 = (state_61450[(1)]);
if((state_val_61451 === (7))){
var inst_61370 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
if(cljs.core.truth_(inst_61370)){
var statearr_61452_61499 = state_61450__$1;
(statearr_61452_61499[(1)] = (8));

} else {
var statearr_61453_61500 = state_61450__$1;
(statearr_61453_61500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (20))){
var inst_61444 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61454_61501 = state_61450__$1;
(statearr_61454_61501[(2)] = inst_61444);

(statearr_61454_61501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (27))){
var inst_61440 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61455_61502 = state_61450__$1;
(statearr_61455_61502[(2)] = inst_61440);

(statearr_61455_61502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (1))){
var inst_61363 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_61450__$1 = state_61450;
if(cljs.core.truth_(inst_61363)){
var statearr_61456_61503 = state_61450__$1;
(statearr_61456_61503[(1)] = (2));

} else {
var statearr_61457_61504 = state_61450__$1;
(statearr_61457_61504[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (24))){
var inst_61442 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61458_61505 = state_61450__$1;
(statearr_61458_61505[(2)] = inst_61442);

(statearr_61458_61505[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (4))){
var inst_61448 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61450__$1,inst_61448);
} else {
if((state_val_61451 === (15))){
var inst_61446 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61459_61506 = state_61450__$1;
(statearr_61459_61506[(2)] = inst_61446);

(statearr_61459_61506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (21))){
var inst_61399 = (state_61450[(2)]);
var inst_61400 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61401 = figwheel.client.auto_jump_to_error.call(null,opts,inst_61400);
var state_61450__$1 = (function (){var statearr_61460 = state_61450;
(statearr_61460[(7)] = inst_61399);

return statearr_61460;
})();
var statearr_61461_61507 = state_61450__$1;
(statearr_61461_61507[(2)] = inst_61401);

(statearr_61461_61507[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (31))){
var inst_61429 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_61450__$1 = state_61450;
if(cljs.core.truth_(inst_61429)){
var statearr_61462_61508 = state_61450__$1;
(statearr_61462_61508[(1)] = (34));

} else {
var statearr_61463_61509 = state_61450__$1;
(statearr_61463_61509[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (32))){
var inst_61438 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61464_61510 = state_61450__$1;
(statearr_61464_61510[(2)] = inst_61438);

(statearr_61464_61510[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (33))){
var inst_61425 = (state_61450[(2)]);
var inst_61426 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61427 = figwheel.client.auto_jump_to_error.call(null,opts,inst_61426);
var state_61450__$1 = (function (){var statearr_61465 = state_61450;
(statearr_61465[(8)] = inst_61425);

return statearr_61465;
})();
var statearr_61466_61511 = state_61450__$1;
(statearr_61466_61511[(2)] = inst_61427);

(statearr_61466_61511[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (13))){
var inst_61384 = figwheel.client.heads_up.clear.call(null);
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61450__$1,(16),inst_61384);
} else {
if((state_val_61451 === (22))){
var inst_61405 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61406 = figwheel.client.heads_up.append_warning_message.call(null,inst_61405);
var state_61450__$1 = state_61450;
var statearr_61467_61512 = state_61450__$1;
(statearr_61467_61512[(2)] = inst_61406);

(statearr_61467_61512[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (36))){
var inst_61436 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61468_61513 = state_61450__$1;
(statearr_61468_61513[(2)] = inst_61436);

(statearr_61468_61513[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (29))){
var inst_61416 = (state_61450[(2)]);
var inst_61417 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61418 = figwheel.client.auto_jump_to_error.call(null,opts,inst_61417);
var state_61450__$1 = (function (){var statearr_61469 = state_61450;
(statearr_61469[(9)] = inst_61416);

return statearr_61469;
})();
var statearr_61470_61514 = state_61450__$1;
(statearr_61470_61514[(2)] = inst_61418);

(statearr_61470_61514[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (6))){
var inst_61365 = (state_61450[(10)]);
var state_61450__$1 = state_61450;
var statearr_61471_61515 = state_61450__$1;
(statearr_61471_61515[(2)] = inst_61365);

(statearr_61471_61515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (28))){
var inst_61412 = (state_61450[(2)]);
var inst_61413 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61414 = figwheel.client.heads_up.display_warning.call(null,inst_61413);
var state_61450__$1 = (function (){var statearr_61472 = state_61450;
(statearr_61472[(11)] = inst_61412);

return statearr_61472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61450__$1,(29),inst_61414);
} else {
if((state_val_61451 === (25))){
var inst_61410 = figwheel.client.heads_up.clear.call(null);
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61450__$1,(28),inst_61410);
} else {
if((state_val_61451 === (34))){
var inst_61431 = figwheel.client.heads_up.flash_loaded.call(null);
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61450__$1,(37),inst_61431);
} else {
if((state_val_61451 === (17))){
var inst_61390 = (state_61450[(2)]);
var inst_61391 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61392 = figwheel.client.auto_jump_to_error.call(null,opts,inst_61391);
var state_61450__$1 = (function (){var statearr_61473 = state_61450;
(statearr_61473[(12)] = inst_61390);

return statearr_61473;
})();
var statearr_61474_61516 = state_61450__$1;
(statearr_61474_61516[(2)] = inst_61392);

(statearr_61474_61516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (3))){
var inst_61382 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_61450__$1 = state_61450;
if(cljs.core.truth_(inst_61382)){
var statearr_61475_61517 = state_61450__$1;
(statearr_61475_61517[(1)] = (13));

} else {
var statearr_61476_61518 = state_61450__$1;
(statearr_61476_61518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (12))){
var inst_61378 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61477_61519 = state_61450__$1;
(statearr_61477_61519[(2)] = inst_61378);

(statearr_61477_61519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (2))){
var inst_61365 = (state_61450[(10)]);
var inst_61365__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_61450__$1 = (function (){var statearr_61478 = state_61450;
(statearr_61478[(10)] = inst_61365__$1);

return statearr_61478;
})();
if(cljs.core.truth_(inst_61365__$1)){
var statearr_61479_61520 = state_61450__$1;
(statearr_61479_61520[(1)] = (5));

} else {
var statearr_61480_61521 = state_61450__$1;
(statearr_61480_61521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (23))){
var inst_61408 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_61450__$1 = state_61450;
if(cljs.core.truth_(inst_61408)){
var statearr_61481_61522 = state_61450__$1;
(statearr_61481_61522[(1)] = (25));

} else {
var statearr_61482_61523 = state_61450__$1;
(statearr_61482_61523[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (35))){
var state_61450__$1 = state_61450;
var statearr_61483_61524 = state_61450__$1;
(statearr_61483_61524[(2)] = null);

(statearr_61483_61524[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (19))){
var inst_61403 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_61450__$1 = state_61450;
if(cljs.core.truth_(inst_61403)){
var statearr_61484_61525 = state_61450__$1;
(statearr_61484_61525[(1)] = (22));

} else {
var statearr_61485_61526 = state_61450__$1;
(statearr_61485_61526[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (11))){
var inst_61374 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61486_61527 = state_61450__$1;
(statearr_61486_61527[(2)] = inst_61374);

(statearr_61486_61527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (9))){
var inst_61376 = figwheel.client.heads_up.clear.call(null);
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61450__$1,(12),inst_61376);
} else {
if((state_val_61451 === (5))){
var inst_61367 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_61450__$1 = state_61450;
var statearr_61487_61528 = state_61450__$1;
(statearr_61487_61528[(2)] = inst_61367);

(statearr_61487_61528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (14))){
var inst_61394 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_61450__$1 = state_61450;
if(cljs.core.truth_(inst_61394)){
var statearr_61488_61529 = state_61450__$1;
(statearr_61488_61529[(1)] = (18));

} else {
var statearr_61489_61530 = state_61450__$1;
(statearr_61489_61530[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (26))){
var inst_61420 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_61450__$1 = state_61450;
if(cljs.core.truth_(inst_61420)){
var statearr_61490_61531 = state_61450__$1;
(statearr_61490_61531[(1)] = (30));

} else {
var statearr_61491_61532 = state_61450__$1;
(statearr_61491_61532[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (16))){
var inst_61386 = (state_61450[(2)]);
var inst_61387 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61388 = figwheel.client.heads_up.display_exception.call(null,inst_61387);
var state_61450__$1 = (function (){var statearr_61492 = state_61450;
(statearr_61492[(13)] = inst_61386);

return statearr_61492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61450__$1,(17),inst_61388);
} else {
if((state_val_61451 === (30))){
var inst_61422 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61423 = figwheel.client.heads_up.display_warning.call(null,inst_61422);
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61450__$1,(33),inst_61423);
} else {
if((state_val_61451 === (10))){
var inst_61380 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61493_61533 = state_61450__$1;
(statearr_61493_61533[(2)] = inst_61380);

(statearr_61493_61533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (18))){
var inst_61396 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_61397 = figwheel.client.heads_up.display_exception.call(null,inst_61396);
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61450__$1,(21),inst_61397);
} else {
if((state_val_61451 === (37))){
var inst_61433 = (state_61450[(2)]);
var state_61450__$1 = state_61450;
var statearr_61494_61534 = state_61450__$1;
(statearr_61494_61534[(2)] = inst_61433);

(statearr_61494_61534[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61451 === (8))){
var inst_61372 = figwheel.client.heads_up.flash_loaded.call(null);
var state_61450__$1 = state_61450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61450__$1,(11),inst_61372);
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
});})(c__58254__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__58164__auto__,c__58254__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto____0 = (function (){
var statearr_61495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61495[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto__);

(statearr_61495[(1)] = (1));

return statearr_61495;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto____1 = (function (state_61450){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_61450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e61496){if((e61496 instanceof Object)){
var ex__58168__auto__ = e61496;
var statearr_61497_61535 = state_61450;
(statearr_61497_61535[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61536 = state_61450;
state_61450 = G__61536;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto__ = function(state_61450){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto____1.call(this,state_61450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto__,msg_hist,msg_names,msg))
})();
var state__58256__auto__ = (function (){var statearr_61498 = f__58255__auto__.call(null);
(statearr_61498[(6)] = c__58254__auto__);

return statearr_61498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto__,msg_hist,msg_names,msg))
);

return c__58254__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__58254__auto___61565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___61565,ch){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___61565,ch){
return (function (state_61551){
var state_val_61552 = (state_61551[(1)]);
if((state_val_61552 === (1))){
var state_61551__$1 = state_61551;
var statearr_61553_61566 = state_61551__$1;
(statearr_61553_61566[(2)] = null);

(statearr_61553_61566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61552 === (2))){
var state_61551__$1 = state_61551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61551__$1,(4),ch);
} else {
if((state_val_61552 === (3))){
var inst_61549 = (state_61551[(2)]);
var state_61551__$1 = state_61551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61551__$1,inst_61549);
} else {
if((state_val_61552 === (4))){
var inst_61539 = (state_61551[(7)]);
var inst_61539__$1 = (state_61551[(2)]);
var state_61551__$1 = (function (){var statearr_61554 = state_61551;
(statearr_61554[(7)] = inst_61539__$1);

return statearr_61554;
})();
if(cljs.core.truth_(inst_61539__$1)){
var statearr_61555_61567 = state_61551__$1;
(statearr_61555_61567[(1)] = (5));

} else {
var statearr_61556_61568 = state_61551__$1;
(statearr_61556_61568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61552 === (5))){
var inst_61539 = (state_61551[(7)]);
var inst_61541 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_61539);
var state_61551__$1 = state_61551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61551__$1,(8),inst_61541);
} else {
if((state_val_61552 === (6))){
var state_61551__$1 = state_61551;
var statearr_61557_61569 = state_61551__$1;
(statearr_61557_61569[(2)] = null);

(statearr_61557_61569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61552 === (7))){
var inst_61547 = (state_61551[(2)]);
var state_61551__$1 = state_61551;
var statearr_61558_61570 = state_61551__$1;
(statearr_61558_61570[(2)] = inst_61547);

(statearr_61558_61570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61552 === (8))){
var inst_61543 = (state_61551[(2)]);
var state_61551__$1 = (function (){var statearr_61559 = state_61551;
(statearr_61559[(8)] = inst_61543);

return statearr_61559;
})();
var statearr_61560_61571 = state_61551__$1;
(statearr_61560_61571[(2)] = null);

(statearr_61560_61571[(1)] = (2));


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
});})(c__58254__auto___61565,ch))
;
return ((function (switch__58164__auto__,c__58254__auto___61565,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__58165__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__58165__auto____0 = (function (){
var statearr_61561 = [null,null,null,null,null,null,null,null,null];
(statearr_61561[(0)] = figwheel$client$heads_up_plugin_$_state_machine__58165__auto__);

(statearr_61561[(1)] = (1));

return statearr_61561;
});
var figwheel$client$heads_up_plugin_$_state_machine__58165__auto____1 = (function (state_61551){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_61551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e61562){if((e61562 instanceof Object)){
var ex__58168__auto__ = e61562;
var statearr_61563_61572 = state_61551;
(statearr_61563_61572[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61573 = state_61551;
state_61551 = G__61573;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__58165__auto__ = function(state_61551){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__58165__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__58165__auto____1.call(this,state_61551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__58165__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__58165__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___61565,ch))
})();
var state__58256__auto__ = (function (){var statearr_61564 = f__58255__auto__.call(null);
(statearr_61564[(6)] = c__58254__auto___61565);

return statearr_61564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___61565,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__58254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto__){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto__){
return (function (state_61579){
var state_val_61580 = (state_61579[(1)]);
if((state_val_61580 === (1))){
var inst_61574 = cljs.core.async.timeout.call(null,(3000));
var state_61579__$1 = state_61579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61579__$1,(2),inst_61574);
} else {
if((state_val_61580 === (2))){
var inst_61576 = (state_61579[(2)]);
var inst_61577 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_61579__$1 = (function (){var statearr_61581 = state_61579;
(statearr_61581[(7)] = inst_61576);

return statearr_61581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61579__$1,inst_61577);
} else {
return null;
}
}
});})(c__58254__auto__))
;
return ((function (switch__58164__auto__,c__58254__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__58165__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__58165__auto____0 = (function (){
var statearr_61582 = [null,null,null,null,null,null,null,null];
(statearr_61582[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__58165__auto__);

(statearr_61582[(1)] = (1));

return statearr_61582;
});
var figwheel$client$enforce_project_plugin_$_state_machine__58165__auto____1 = (function (state_61579){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_61579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e61583){if((e61583 instanceof Object)){
var ex__58168__auto__ = e61583;
var statearr_61584_61586 = state_61579;
(statearr_61584_61586[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61587 = state_61579;
state_61579 = G__61587;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__58165__auto__ = function(state_61579){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__58165__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__58165__auto____1.call(this,state_61579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__58165__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__58165__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto__))
})();
var state__58256__auto__ = (function (){var statearr_61585 = f__58255__auto__.call(null);
(statearr_61585[(6)] = c__58254__auto__);

return statearr_61585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto__))
);

return c__58254__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__58254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto__,figwheel_version,temp__5457__auto__){
return (function (state_61594){
var state_val_61595 = (state_61594[(1)]);
if((state_val_61595 === (1))){
var inst_61588 = cljs.core.async.timeout.call(null,(2000));
var state_61594__$1 = state_61594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61594__$1,(2),inst_61588);
} else {
if((state_val_61595 === (2))){
var inst_61590 = (state_61594[(2)]);
var inst_61591 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_61592 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_61591);
var state_61594__$1 = (function (){var statearr_61596 = state_61594;
(statearr_61596[(7)] = inst_61590);

return statearr_61596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61594__$1,inst_61592);
} else {
return null;
}
}
});})(c__58254__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__58164__auto__,c__58254__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto____0 = (function (){
var statearr_61597 = [null,null,null,null,null,null,null,null];
(statearr_61597[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto__);

(statearr_61597[(1)] = (1));

return statearr_61597;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto____1 = (function (state_61594){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_61594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e61598){if((e61598 instanceof Object)){
var ex__58168__auto__ = e61598;
var statearr_61599_61601 = state_61594;
(statearr_61599_61601[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61602 = state_61594;
state_61594 = G__61602;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto__ = function(state_61594){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto____1.call(this,state_61594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto__,figwheel_version,temp__5457__auto__))
})();
var state__58256__auto__ = (function (){var statearr_61600 = f__58255__auto__.call(null);
(statearr_61600[(6)] = c__58254__auto__);

return statearr_61600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto__,figwheel_version,temp__5457__auto__))
);

return c__58254__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__61603){
var map__61604 = p__61603;
var map__61604__$1 = ((((!((map__61604 == null)))?(((((map__61604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61604):map__61604);
var file = cljs.core.get.call(null,map__61604__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__61604__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__61604__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__61606 = "";
var G__61606__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61606),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__61606);
var G__61606__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61606__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__61606__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61606__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__61606__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__61607){
var map__61608 = p__61607;
var map__61608__$1 = ((((!((map__61608 == null)))?(((((map__61608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61608):map__61608);
var ed = map__61608__$1;
var formatted_exception = cljs.core.get.call(null,map__61608__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__61608__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__61608__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__61610_61614 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__61611_61615 = null;
var count__61612_61616 = (0);
var i__61613_61617 = (0);
while(true){
if((i__61613_61617 < count__61612_61616)){
var msg_61618 = cljs.core._nth.call(null,chunk__61611_61615,i__61613_61617);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_61618);


var G__61619 = seq__61610_61614;
var G__61620 = chunk__61611_61615;
var G__61621 = count__61612_61616;
var G__61622 = (i__61613_61617 + (1));
seq__61610_61614 = G__61619;
chunk__61611_61615 = G__61620;
count__61612_61616 = G__61621;
i__61613_61617 = G__61622;
continue;
} else {
var temp__5457__auto___61623 = cljs.core.seq.call(null,seq__61610_61614);
if(temp__5457__auto___61623){
var seq__61610_61624__$1 = temp__5457__auto___61623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61610_61624__$1)){
var c__4319__auto___61625 = cljs.core.chunk_first.call(null,seq__61610_61624__$1);
var G__61626 = cljs.core.chunk_rest.call(null,seq__61610_61624__$1);
var G__61627 = c__4319__auto___61625;
var G__61628 = cljs.core.count.call(null,c__4319__auto___61625);
var G__61629 = (0);
seq__61610_61614 = G__61626;
chunk__61611_61615 = G__61627;
count__61612_61616 = G__61628;
i__61613_61617 = G__61629;
continue;
} else {
var msg_61630 = cljs.core.first.call(null,seq__61610_61624__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_61630);


var G__61631 = cljs.core.next.call(null,seq__61610_61624__$1);
var G__61632 = null;
var G__61633 = (0);
var G__61634 = (0);
seq__61610_61614 = G__61631;
chunk__61611_61615 = G__61632;
count__61612_61616 = G__61633;
i__61613_61617 = G__61634;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__61635){
var map__61636 = p__61635;
var map__61636__$1 = ((((!((map__61636 == null)))?(((((map__61636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61636):map__61636);
var w = map__61636__$1;
var message = cljs.core.get.call(null,map__61636__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__61638 = cljs.core.seq.call(null,plugins);
var chunk__61639 = null;
var count__61640 = (0);
var i__61641 = (0);
while(true){
if((i__61641 < count__61640)){
var vec__61642 = cljs.core._nth.call(null,chunk__61639,i__61641);
var k = cljs.core.nth.call(null,vec__61642,(0),null);
var plugin = cljs.core.nth.call(null,vec__61642,(1),null);
if(cljs.core.truth_(plugin)){
var pl_61648 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__61638,chunk__61639,count__61640,i__61641,pl_61648,vec__61642,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_61648.call(null,msg_hist);
});})(seq__61638,chunk__61639,count__61640,i__61641,pl_61648,vec__61642,k,plugin))
);
} else {
}


var G__61649 = seq__61638;
var G__61650 = chunk__61639;
var G__61651 = count__61640;
var G__61652 = (i__61641 + (1));
seq__61638 = G__61649;
chunk__61639 = G__61650;
count__61640 = G__61651;
i__61641 = G__61652;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__61638);
if(temp__5457__auto__){
var seq__61638__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61638__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__61638__$1);
var G__61653 = cljs.core.chunk_rest.call(null,seq__61638__$1);
var G__61654 = c__4319__auto__;
var G__61655 = cljs.core.count.call(null,c__4319__auto__);
var G__61656 = (0);
seq__61638 = G__61653;
chunk__61639 = G__61654;
count__61640 = G__61655;
i__61641 = G__61656;
continue;
} else {
var vec__61645 = cljs.core.first.call(null,seq__61638__$1);
var k = cljs.core.nth.call(null,vec__61645,(0),null);
var plugin = cljs.core.nth.call(null,vec__61645,(1),null);
if(cljs.core.truth_(plugin)){
var pl_61657 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__61638,chunk__61639,count__61640,i__61641,pl_61657,vec__61645,k,plugin,seq__61638__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_61657.call(null,msg_hist);
});})(seq__61638,chunk__61639,count__61640,i__61641,pl_61657,vec__61645,k,plugin,seq__61638__$1,temp__5457__auto__))
);
} else {
}


var G__61658 = cljs.core.next.call(null,seq__61638__$1);
var G__61659 = null;
var G__61660 = (0);
var G__61661 = (0);
seq__61638 = G__61658;
chunk__61639 = G__61659;
count__61640 = G__61660;
i__61641 = G__61661;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__61663 = arguments.length;
switch (G__61663) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__61664_61669 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__61665_61670 = null;
var count__61666_61671 = (0);
var i__61667_61672 = (0);
while(true){
if((i__61667_61672 < count__61666_61671)){
var msg_61673 = cljs.core._nth.call(null,chunk__61665_61670,i__61667_61672);
figwheel.client.socket.handle_incoming_message.call(null,msg_61673);


var G__61674 = seq__61664_61669;
var G__61675 = chunk__61665_61670;
var G__61676 = count__61666_61671;
var G__61677 = (i__61667_61672 + (1));
seq__61664_61669 = G__61674;
chunk__61665_61670 = G__61675;
count__61666_61671 = G__61676;
i__61667_61672 = G__61677;
continue;
} else {
var temp__5457__auto___61678 = cljs.core.seq.call(null,seq__61664_61669);
if(temp__5457__auto___61678){
var seq__61664_61679__$1 = temp__5457__auto___61678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61664_61679__$1)){
var c__4319__auto___61680 = cljs.core.chunk_first.call(null,seq__61664_61679__$1);
var G__61681 = cljs.core.chunk_rest.call(null,seq__61664_61679__$1);
var G__61682 = c__4319__auto___61680;
var G__61683 = cljs.core.count.call(null,c__4319__auto___61680);
var G__61684 = (0);
seq__61664_61669 = G__61681;
chunk__61665_61670 = G__61682;
count__61666_61671 = G__61683;
i__61667_61672 = G__61684;
continue;
} else {
var msg_61685 = cljs.core.first.call(null,seq__61664_61679__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_61685);


var G__61686 = cljs.core.next.call(null,seq__61664_61679__$1);
var G__61687 = null;
var G__61688 = (0);
var G__61689 = (0);
seq__61664_61669 = G__61686;
chunk__61665_61670 = G__61687;
count__61666_61671 = G__61688;
i__61667_61672 = G__61689;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___61694 = arguments.length;
var i__4500__auto___61695 = (0);
while(true){
if((i__4500__auto___61695 < len__4499__auto___61694)){
args__4502__auto__.push((arguments[i__4500__auto___61695]));

var G__61696 = (i__4500__auto___61695 + (1));
i__4500__auto___61695 = G__61696;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__61691){
var map__61692 = p__61691;
var map__61692__$1 = ((((!((map__61692 == null)))?(((((map__61692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61692):map__61692);
var opts = map__61692__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq61690){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61690));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e61697){if((e61697 instanceof Error)){
var e = e61697;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e61697;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__61698){
var map__61699 = p__61698;
var map__61699__$1 = ((((!((map__61699 == null)))?(((((map__61699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61699):map__61699);
var msg_name = cljs.core.get.call(null,map__61699__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1536503814833
