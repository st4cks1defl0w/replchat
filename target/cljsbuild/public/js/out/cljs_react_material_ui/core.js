// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('goog.object');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__50317){
var vec__50318 = p__50317;
var k = cljs.core.nth.call(null,vec__50318,(0),null);
var v = cljs.core.nth.call(null,vec__50318,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.call(null,k),v], null);
});
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform,x));
} else {
return x;
}
}),coll);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,sablono.util.camel_case_keys);
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var G__50322 = arguments.length;
switch (G__50322) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = ((((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null))))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,react_class,cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,goog.object.getValueByKeys(root_obj,type),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.create_mui_theme = (function cljs_react_material_ui$core$create_mui_theme(var_args){
var G__50325 = arguments.length;
switch (G__50325) {
case 0:
return cljs_react_material_ui.core.create_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.create_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.create_mui_theme.call(null,null);
});

cljs_react_material_ui.core.create_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.createMuiTheme(cljs.core.clj__GT_js.call(null,cljs_react_material_ui.core.transform_keys.call(null,sablono.util.camel_case,raw_theme)));
});

cljs_react_material_ui.core.create_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.create_mui_transition = (function cljs_react_material_ui$core$create_mui_transition(theme,properties,transitionParams){
return goog.object.get(theme,"transitions").create(cljs.core.clj__GT_js.call(null,properties),cljs.core.clj__GT_js.call(null,transitionParams));
});
/**
 * Takes the color as a symbol for the first argument and then either
 *   a number or a symbol for the second arg to specify the shade
 */
cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_name,color_key){
var key_string = ((cljs.core.integer_QMARK_.call(null,color_key))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_key)].join(''):cljs.core.name.call(null,sablono.util.camel_case.call(null,color_key)));
return goog.object.getValueByKeys(MaterialUIColors,cljs.core.name.call(null,sablono.util.camel_case.call(null,color_name)),key_string);
});
cljs_react_material_ui.core.make_selectable = goog.object.get(MaterialUI,"makeSelectable");
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50328 = arguments.length;
var i__4500__auto___50329 = (0);
while(true){
if((i__4500__auto___50329 < len__4499__auto___50328)){
args__4502__auto__.push((arguments[i__4500__auto___50329]));

var G__50330 = (i__4500__auto___50329 + (1));
i__4500__auto___50329 = G__50330;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,goog.object.get(MaterialUI,"List")),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq50327){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50327));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50332 = arguments.length;
var i__4500__auto___50333 = (0);
while(true){
if((i__4500__auto___50333 < len__4499__auto___50332)){
args__4502__auto__.push((arguments[i__4500__auto___50333]));

var G__50334 = (i__4500__auto___50333 + (1));
i__4500__auto___50333 = G__50334;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq50331){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50331));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50336 = arguments.length;
var i__4500__auto___50337 = (0);
while(true){
if((i__4500__auto___50337 < len__4499__auto___50336)){
args__4502__auto__.push((arguments[i__4500__auto___50337]));

var G__50338 = (i__4500__auto___50337 + (1));
i__4500__auto___50337 = G__50338;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq50335){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50335));
});

cljs_react_material_ui.core.backdrop = (function cljs_react_material_ui$core$backdrop(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50340 = arguments.length;
var i__4500__auto___50341 = (0);
while(true){
if((i__4500__auto___50341 < len__4499__auto___50340)){
args__4502__auto__.push((arguments[i__4500__auto___50341]));

var G__50342 = (i__4500__auto___50341 + (1));
i__4500__auto___50341 = G__50342;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.backdrop.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.backdrop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Backdrop",args);
});

cljs_react_material_ui.core.backdrop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.backdrop.cljs$lang$applyTo = (function (seq50339){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50339));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50344 = arguments.length;
var i__4500__auto___50345 = (0);
while(true){
if((i__4500__auto___50345 < len__4499__auto___50344)){
args__4502__auto__.push((arguments[i__4500__auto___50345]));

var G__50346 = (i__4500__auto___50345 + (1));
i__4500__auto___50345 = G__50346;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq50343){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50343));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50348 = arguments.length;
var i__4500__auto___50349 = (0);
while(true){
if((i__4500__auto___50349 < len__4499__auto___50348)){
args__4502__auto__.push((arguments[i__4500__auto___50349]));

var G__50350 = (i__4500__auto___50349 + (1));
i__4500__auto___50349 = G__50350;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq50347){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50347));
});

cljs_react_material_ui.core.bottom_navigation_action = (function cljs_react_material_ui$core$bottom_navigation_action(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50352 = arguments.length;
var i__4500__auto___50353 = (0);
while(true){
if((i__4500__auto___50353 < len__4499__auto___50352)){
args__4502__auto__.push((arguments[i__4500__auto___50353]));

var G__50354 = (i__4500__auto___50353 + (1));
i__4500__auto___50353 = G__50354;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_action.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.bottom_navigation_action.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationAction",args);
});

cljs_react_material_ui.core.bottom_navigation_action.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.bottom_navigation_action.cljs$lang$applyTo = (function (seq50351){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50351));
});

cljs_react_material_ui.core.button = (function cljs_react_material_ui$core$button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50356 = arguments.length;
var i__4500__auto___50357 = (0);
while(true){
if((i__4500__auto___50357 < len__4499__auto___50356)){
args__4502__auto__.push((arguments[i__4500__auto___50357]));

var G__50358 = (i__4500__auto___50357 + (1));
i__4500__auto___50357 = G__50358;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Button",args);
});

cljs_react_material_ui.core.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.button.cljs$lang$applyTo = (function (seq50355){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50355));
});

cljs_react_material_ui.core.button_base = (function cljs_react_material_ui$core$button_base(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50360 = arguments.length;
var i__4500__auto___50361 = (0);
while(true){
if((i__4500__auto___50361 < len__4499__auto___50360)){
args__4502__auto__.push((arguments[i__4500__auto___50361]));

var G__50362 = (i__4500__auto___50361 + (1));
i__4500__auto___50361 = G__50362;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.button_base.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.button_base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ButtonBase",args);
});

cljs_react_material_ui.core.button_base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.button_base.cljs$lang$applyTo = (function (seq50359){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50359));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50364 = arguments.length;
var i__4500__auto___50365 = (0);
while(true){
if((i__4500__auto___50365 < len__4499__auto___50364)){
args__4502__auto__.push((arguments[i__4500__auto___50365]));

var G__50366 = (i__4500__auto___50365 + (1));
i__4500__auto___50365 = G__50366;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq50363){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50363));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50368 = arguments.length;
var i__4500__auto___50369 = (0);
while(true){
if((i__4500__auto___50369 < len__4499__auto___50368)){
args__4502__auto__.push((arguments[i__4500__auto___50369]));

var G__50370 = (i__4500__auto___50369 + (1));
i__4500__auto___50369 = G__50370;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq50367){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50367));
});

cljs_react_material_ui.core.card_content = (function cljs_react_material_ui$core$card_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50372 = arguments.length;
var i__4500__auto___50373 = (0);
while(true){
if((i__4500__auto___50373 < len__4499__auto___50372)){
args__4502__auto__.push((arguments[i__4500__auto___50373]));

var G__50374 = (i__4500__auto___50373 + (1));
i__4500__auto___50373 = G__50374;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardContent",args);
});

cljs_react_material_ui.core.card_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_content.cljs$lang$applyTo = (function (seq50371){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50371));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50376 = arguments.length;
var i__4500__auto___50377 = (0);
while(true){
if((i__4500__auto___50377 < len__4499__auto___50376)){
args__4502__auto__.push((arguments[i__4500__auto___50377]));

var G__50378 = (i__4500__auto___50377 + (1));
i__4500__auto___50377 = G__50378;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq50375){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50375));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50380 = arguments.length;
var i__4500__auto___50381 = (0);
while(true){
if((i__4500__auto___50381 < len__4499__auto___50380)){
args__4502__auto__.push((arguments[i__4500__auto___50381]));

var G__50382 = (i__4500__auto___50381 + (1));
i__4500__auto___50381 = G__50382;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq50379){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50379));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50384 = arguments.length;
var i__4500__auto___50385 = (0);
while(true){
if((i__4500__auto___50385 < len__4499__auto___50384)){
args__4502__auto__.push((arguments[i__4500__auto___50385]));

var G__50386 = (i__4500__auto___50385 + (1));
i__4500__auto___50385 = G__50386;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq50383){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50383));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50388 = arguments.length;
var i__4500__auto___50389 = (0);
while(true){
if((i__4500__auto___50389 < len__4499__auto___50388)){
args__4502__auto__.push((arguments[i__4500__auto___50389]));

var G__50390 = (i__4500__auto___50389 + (1));
i__4500__auto___50389 = G__50390;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq50387){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50387));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50392 = arguments.length;
var i__4500__auto___50393 = (0);
while(true){
if((i__4500__auto___50393 < len__4499__auto___50392)){
args__4502__auto__.push((arguments[i__4500__auto___50393]));

var G__50394 = (i__4500__auto___50393 + (1));
i__4500__auto___50393 = G__50394;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq50391){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50391));
});

cljs_react_material_ui.core.click_away_listener = (function cljs_react_material_ui$core$click_away_listener(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50396 = arguments.length;
var i__4500__auto___50397 = (0);
while(true){
if((i__4500__auto___50397 < len__4499__auto___50396)){
args__4502__auto__.push((arguments[i__4500__auto___50397]));

var G__50398 = (i__4500__auto___50397 + (1));
i__4500__auto___50397 = G__50398;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.click_away_listener.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.click_away_listener.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ClickAwayListener",args);
});

cljs_react_material_ui.core.click_away_listener.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.click_away_listener.cljs$lang$applyTo = (function (seq50395){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50395));
});

cljs_react_material_ui.core.collapse = (function cljs_react_material_ui$core$collapse(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50400 = arguments.length;
var i__4500__auto___50401 = (0);
while(true){
if((i__4500__auto___50401 < len__4499__auto___50400)){
args__4502__auto__.push((arguments[i__4500__auto___50401]));

var G__50402 = (i__4500__auto___50401 + (1));
i__4500__auto___50401 = G__50402;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.collapse.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.collapse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Collapse",args);
});

cljs_react_material_ui.core.collapse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.collapse.cljs$lang$applyTo = (function (seq50399){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50399));
});

cljs_react_material_ui.core.css_baseline = (function cljs_react_material_ui$core$css_baseline(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50404 = arguments.length;
var i__4500__auto___50405 = (0);
while(true){
if((i__4500__auto___50405 < len__4499__auto___50404)){
args__4502__auto__.push((arguments[i__4500__auto___50405]));

var G__50406 = (i__4500__auto___50405 + (1));
i__4500__auto___50405 = G__50406;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.css_baseline.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.css_baseline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CssBaseline",args);
});

cljs_react_material_ui.core.css_baseline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.css_baseline.cljs$lang$applyTo = (function (seq50403){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50403));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50408 = arguments.length;
var i__4500__auto___50409 = (0);
while(true){
if((i__4500__auto___50409 < len__4499__auto___50408)){
args__4502__auto__.push((arguments[i__4500__auto___50409]));

var G__50410 = (i__4500__auto___50409 + (1));
i__4500__auto___50409 = G__50410;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq50407){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50407));
});

cljs_react_material_ui.core.dialog_actions = (function cljs_react_material_ui$core$dialog_actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50412 = arguments.length;
var i__4500__auto___50413 = (0);
while(true){
if((i__4500__auto___50413 < len__4499__auto___50412)){
args__4502__auto__.push((arguments[i__4500__auto___50413]));

var G__50414 = (i__4500__auto___50413 + (1));
i__4500__auto___50413 = G__50414;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.dialog_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DialogActions",args);
});

cljs_react_material_ui.core.dialog_actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog_actions.cljs$lang$applyTo = (function (seq50411){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50411));
});

cljs_react_material_ui.core.dialog_content = (function cljs_react_material_ui$core$dialog_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50416 = arguments.length;
var i__4500__auto___50417 = (0);
while(true){
if((i__4500__auto___50417 < len__4499__auto___50416)){
args__4502__auto__.push((arguments[i__4500__auto___50417]));

var G__50418 = (i__4500__auto___50417 + (1));
i__4500__auto___50417 = G__50418;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.dialog_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DialogContent",args);
});

cljs_react_material_ui.core.dialog_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog_content.cljs$lang$applyTo = (function (seq50415){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50415));
});

cljs_react_material_ui.core.dialog_content_text = (function cljs_react_material_ui$core$dialog_content_text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50420 = arguments.length;
var i__4500__auto___50421 = (0);
while(true){
if((i__4500__auto___50421 < len__4499__auto___50420)){
args__4502__auto__.push((arguments[i__4500__auto___50421]));

var G__50422 = (i__4500__auto___50421 + (1));
i__4500__auto___50421 = G__50422;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog_content_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.dialog_content_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DialogContentText",args);
});

cljs_react_material_ui.core.dialog_content_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog_content_text.cljs$lang$applyTo = (function (seq50419){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50419));
});

cljs_react_material_ui.core.dialog_title = (function cljs_react_material_ui$core$dialog_title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50424 = arguments.length;
var i__4500__auto___50425 = (0);
while(true){
if((i__4500__auto___50425 < len__4499__auto___50424)){
args__4502__auto__.push((arguments[i__4500__auto___50425]));

var G__50426 = (i__4500__auto___50425 + (1));
i__4500__auto___50425 = G__50426;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.dialog_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DialogTitle",args);
});

cljs_react_material_ui.core.dialog_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog_title.cljs$lang$applyTo = (function (seq50423){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50423));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50428 = arguments.length;
var i__4500__auto___50429 = (0);
while(true){
if((i__4500__auto___50429 < len__4499__auto___50428)){
args__4502__auto__.push((arguments[i__4500__auto___50429]));

var G__50430 = (i__4500__auto___50429 + (1));
i__4500__auto___50429 = G__50430;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq50427){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50427));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50432 = arguments.length;
var i__4500__auto___50433 = (0);
while(true){
if((i__4500__auto___50433 < len__4499__auto___50432)){
args__4502__auto__.push((arguments[i__4500__auto___50433]));

var G__50434 = (i__4500__auto___50433 + (1));
i__4500__auto___50433 = G__50434;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq50431){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50431));
});

cljs_react_material_ui.core.expansion_panel = (function cljs_react_material_ui$core$expansion_panel(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50436 = arguments.length;
var i__4500__auto___50437 = (0);
while(true){
if((i__4500__auto___50437 < len__4499__auto___50436)){
args__4502__auto__.push((arguments[i__4500__auto___50437]));

var G__50438 = (i__4500__auto___50437 + (1));
i__4500__auto___50437 = G__50438;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.expansion_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.expansion_panel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ExpansionPanel",args);
});

cljs_react_material_ui.core.expansion_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.expansion_panel.cljs$lang$applyTo = (function (seq50435){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50435));
});

cljs_react_material_ui.core.expansion_panel_actions = (function cljs_react_material_ui$core$expansion_panel_actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50440 = arguments.length;
var i__4500__auto___50441 = (0);
while(true){
if((i__4500__auto___50441 < len__4499__auto___50440)){
args__4502__auto__.push((arguments[i__4500__auto___50441]));

var G__50442 = (i__4500__auto___50441 + (1));
i__4500__auto___50441 = G__50442;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.expansion_panel_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.expansion_panel_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ExpansionPanelActions",args);
});

cljs_react_material_ui.core.expansion_panel_actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.expansion_panel_actions.cljs$lang$applyTo = (function (seq50439){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50439));
});

cljs_react_material_ui.core.expansion_panel_details = (function cljs_react_material_ui$core$expansion_panel_details(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50444 = arguments.length;
var i__4500__auto___50445 = (0);
while(true){
if((i__4500__auto___50445 < len__4499__auto___50444)){
args__4502__auto__.push((arguments[i__4500__auto___50445]));

var G__50446 = (i__4500__auto___50445 + (1));
i__4500__auto___50445 = G__50446;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.expansion_panel_details.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.expansion_panel_details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ExpansionPanelDetails",args);
});

cljs_react_material_ui.core.expansion_panel_details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.expansion_panel_details.cljs$lang$applyTo = (function (seq50443){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50443));
});

cljs_react_material_ui.core.expansion_panel_summary = (function cljs_react_material_ui$core$expansion_panel_summary(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50448 = arguments.length;
var i__4500__auto___50449 = (0);
while(true){
if((i__4500__auto___50449 < len__4499__auto___50448)){
args__4502__auto__.push((arguments[i__4500__auto___50449]));

var G__50450 = (i__4500__auto___50449 + (1));
i__4500__auto___50449 = G__50450;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.expansion_panel_summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.expansion_panel_summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ExpansionPanelSummary",args);
});

cljs_react_material_ui.core.expansion_panel_summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.expansion_panel_summary.cljs$lang$applyTo = (function (seq50447){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50447));
});

cljs_react_material_ui.core.fade = (function cljs_react_material_ui$core$fade(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50452 = arguments.length;
var i__4500__auto___50453 = (0);
while(true){
if((i__4500__auto___50453 < len__4499__auto___50452)){
args__4502__auto__.push((arguments[i__4500__auto___50453]));

var G__50454 = (i__4500__auto___50453 + (1));
i__4500__auto___50453 = G__50454;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.fade.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.fade.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Fade",args);
});

cljs_react_material_ui.core.fade.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.fade.cljs$lang$applyTo = (function (seq50451){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50451));
});

cljs_react_material_ui.core.form_control = (function cljs_react_material_ui$core$form_control(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50456 = arguments.length;
var i__4500__auto___50457 = (0);
while(true){
if((i__4500__auto___50457 < len__4499__auto___50456)){
args__4502__auto__.push((arguments[i__4500__auto___50457]));

var G__50458 = (i__4500__auto___50457 + (1));
i__4500__auto___50457 = G__50458;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.form_control.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.form_control.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FormControl",args);
});

cljs_react_material_ui.core.form_control.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.form_control.cljs$lang$applyTo = (function (seq50455){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50455));
});

cljs_react_material_ui.core.form_control_label = (function cljs_react_material_ui$core$form_control_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50460 = arguments.length;
var i__4500__auto___50461 = (0);
while(true){
if((i__4500__auto___50461 < len__4499__auto___50460)){
args__4502__auto__.push((arguments[i__4500__auto___50461]));

var G__50462 = (i__4500__auto___50461 + (1));
i__4500__auto___50461 = G__50462;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.form_control_label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.form_control_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FormControlLabel",args);
});

cljs_react_material_ui.core.form_control_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.form_control_label.cljs$lang$applyTo = (function (seq50459){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50459));
});

cljs_react_material_ui.core.form_group = (function cljs_react_material_ui$core$form_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50464 = arguments.length;
var i__4500__auto___50465 = (0);
while(true){
if((i__4500__auto___50465 < len__4499__auto___50464)){
args__4502__auto__.push((arguments[i__4500__auto___50465]));

var G__50466 = (i__4500__auto___50465 + (1));
i__4500__auto___50465 = G__50466;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.form_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.form_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FormGroup",args);
});

cljs_react_material_ui.core.form_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.form_group.cljs$lang$applyTo = (function (seq50463){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50463));
});

cljs_react_material_ui.core.form_helper_text = (function cljs_react_material_ui$core$form_helper_text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50468 = arguments.length;
var i__4500__auto___50469 = (0);
while(true){
if((i__4500__auto___50469 < len__4499__auto___50468)){
args__4502__auto__.push((arguments[i__4500__auto___50469]));

var G__50470 = (i__4500__auto___50469 + (1));
i__4500__auto___50469 = G__50470;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.form_helper_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.form_helper_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FormHelperText",args);
});

cljs_react_material_ui.core.form_helper_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.form_helper_text.cljs$lang$applyTo = (function (seq50467){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50467));
});

cljs_react_material_ui.core.form_label = (function cljs_react_material_ui$core$form_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50472 = arguments.length;
var i__4500__auto___50473 = (0);
while(true){
if((i__4500__auto___50473 < len__4499__auto___50472)){
args__4502__auto__.push((arguments[i__4500__auto___50473]));

var G__50474 = (i__4500__auto___50473 + (1));
i__4500__auto___50473 = G__50474;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.form_label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.form_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FormLabel",args);
});

cljs_react_material_ui.core.form_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.form_label.cljs$lang$applyTo = (function (seq50471){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50471));
});

cljs_react_material_ui.core.grid = (function cljs_react_material_ui$core$grid(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50476 = arguments.length;
var i__4500__auto___50477 = (0);
while(true){
if((i__4500__auto___50477 < len__4499__auto___50476)){
args__4502__auto__.push((arguments[i__4500__auto___50477]));

var G__50478 = (i__4500__auto___50477 + (1));
i__4500__auto___50477 = G__50478;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grid.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Grid",args);
});

cljs_react_material_ui.core.grid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid.cljs$lang$applyTo = (function (seq50475){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50475));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50480 = arguments.length;
var i__4500__auto___50481 = (0);
while(true){
if((i__4500__auto___50481 < len__4499__auto___50480)){
args__4502__auto__.push((arguments[i__4500__auto___50481]));

var G__50482 = (i__4500__auto___50481 + (1));
i__4500__auto___50481 = G__50482;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq50479){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50479));
});

cljs_react_material_ui.core.grid_list_tile = (function cljs_react_material_ui$core$grid_list_tile(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50484 = arguments.length;
var i__4500__auto___50485 = (0);
while(true){
if((i__4500__auto___50485 < len__4499__auto___50484)){
args__4502__auto__.push((arguments[i__4500__auto___50485]));

var G__50486 = (i__4500__auto___50485 + (1));
i__4500__auto___50485 = G__50486;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grid_list_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridListTile",args);
});

cljs_react_material_ui.core.grid_list_tile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_list_tile.cljs$lang$applyTo = (function (seq50483){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50483));
});

cljs_react_material_ui.core.grid_list_tile_bar = (function cljs_react_material_ui$core$grid_list_tile_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50488 = arguments.length;
var i__4500__auto___50489 = (0);
while(true){
if((i__4500__auto___50489 < len__4499__auto___50488)){
args__4502__auto__.push((arguments[i__4500__auto___50489]));

var G__50490 = (i__4500__auto___50489 + (1));
i__4500__auto___50489 = G__50490;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list_tile_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grid_list_tile_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridListTileBar",args);
});

cljs_react_material_ui.core.grid_list_tile_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_list_tile_bar.cljs$lang$applyTo = (function (seq50487){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50487));
});

cljs_react_material_ui.core.grow = (function cljs_react_material_ui$core$grow(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50492 = arguments.length;
var i__4500__auto___50493 = (0);
while(true){
if((i__4500__auto___50493 < len__4499__auto___50492)){
args__4502__auto__.push((arguments[i__4500__auto___50493]));

var G__50494 = (i__4500__auto___50493 + (1));
i__4500__auto___50493 = G__50494;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grow.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Grow",args);
});

cljs_react_material_ui.core.grow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grow.cljs$lang$applyTo = (function (seq50491){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50491));
});

cljs_react_material_ui.core.hidden = (function cljs_react_material_ui$core$hidden(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50496 = arguments.length;
var i__4500__auto___50497 = (0);
while(true){
if((i__4500__auto___50497 < len__4499__auto___50496)){
args__4502__auto__.push((arguments[i__4500__auto___50497]));

var G__50498 = (i__4500__auto___50497 + (1));
i__4500__auto___50497 = G__50498;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.hidden.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.hidden.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Hidden",args);
});

cljs_react_material_ui.core.hidden.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.hidden.cljs$lang$applyTo = (function (seq50495){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50495));
});

cljs_react_material_ui.core.icon = (function cljs_react_material_ui$core$icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50500 = arguments.length;
var i__4500__auto___50501 = (0);
while(true){
if((i__4500__auto___50501 < len__4499__auto___50500)){
args__4502__auto__.push((arguments[i__4500__auto___50501]));

var G__50502 = (i__4500__auto___50501 + (1));
i__4500__auto___50501 = G__50502;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Icon",args);
});

cljs_react_material_ui.core.icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.icon.cljs$lang$applyTo = (function (seq50499){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50499));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50504 = arguments.length;
var i__4500__auto___50505 = (0);
while(true){
if((i__4500__auto___50505 < len__4499__auto___50504)){
args__4502__auto__.push((arguments[i__4500__auto___50505]));

var G__50506 = (i__4500__auto___50505 + (1));
i__4500__auto___50505 = G__50506;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq50503){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50503));
});

cljs_react_material_ui.core.input = (function cljs_react_material_ui$core$input(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50508 = arguments.length;
var i__4500__auto___50509 = (0);
while(true){
if((i__4500__auto___50509 < len__4499__auto___50508)){
args__4502__auto__.push((arguments[i__4500__auto___50509]));

var G__50510 = (i__4500__auto___50509 + (1));
i__4500__auto___50509 = G__50510;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Input",args);
});

cljs_react_material_ui.core.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.input.cljs$lang$applyTo = (function (seq50507){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50507));
});

cljs_react_material_ui.core.input_adornment = (function cljs_react_material_ui$core$input_adornment(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50512 = arguments.length;
var i__4500__auto___50513 = (0);
while(true){
if((i__4500__auto___50513 < len__4499__auto___50512)){
args__4502__auto__.push((arguments[i__4500__auto___50513]));

var G__50514 = (i__4500__auto___50513 + (1));
i__4500__auto___50513 = G__50514;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.input_adornment.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.input_adornment.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"InputAdornment",args);
});

cljs_react_material_ui.core.input_adornment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.input_adornment.cljs$lang$applyTo = (function (seq50511){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50511));
});

cljs_react_material_ui.core.input_label = (function cljs_react_material_ui$core$input_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50516 = arguments.length;
var i__4500__auto___50517 = (0);
while(true){
if((i__4500__auto___50517 < len__4499__auto___50516)){
args__4502__auto__.push((arguments[i__4500__auto___50517]));

var G__50518 = (i__4500__auto___50517 + (1));
i__4500__auto___50517 = G__50518;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.input_label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.input_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"InputLabel",args);
});

cljs_react_material_ui.core.input_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.input_label.cljs$lang$applyTo = (function (seq50515){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50515));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50520 = arguments.length;
var i__4500__auto___50521 = (0);
while(true){
if((i__4500__auto___50521 < len__4499__auto___50520)){
args__4502__auto__.push((arguments[i__4500__auto___50521]));

var G__50522 = (i__4500__auto___50521 + (1));
i__4500__auto___50521 = G__50522;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq50519){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50519));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50524 = arguments.length;
var i__4500__auto___50525 = (0);
while(true){
if((i__4500__auto___50525 < len__4499__auto___50524)){
args__4502__auto__.push((arguments[i__4500__auto___50525]));

var G__50526 = (i__4500__auto___50525 + (1));
i__4500__auto___50525 = G__50526;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq50523){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50523));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50528 = arguments.length;
var i__4500__auto___50529 = (0);
while(true){
if((i__4500__auto___50529 < len__4499__auto___50528)){
args__4502__auto__.push((arguments[i__4500__auto___50529]));

var G__50530 = (i__4500__auto___50529 + (1));
i__4500__auto___50529 = G__50530;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq50527){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50527));
});

cljs_react_material_ui.core.list_item_avatar = (function cljs_react_material_ui$core$list_item_avatar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50532 = arguments.length;
var i__4500__auto___50533 = (0);
while(true){
if((i__4500__auto___50533 < len__4499__auto___50532)){
args__4502__auto__.push((arguments[i__4500__auto___50533]));

var G__50534 = (i__4500__auto___50533 + (1));
i__4500__auto___50533 = G__50534;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item_avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list_item_avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItemAvatar",args);
});

cljs_react_material_ui.core.list_item_avatar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item_avatar.cljs$lang$applyTo = (function (seq50531){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50531));
});

cljs_react_material_ui.core.list_item_icon = (function cljs_react_material_ui$core$list_item_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50536 = arguments.length;
var i__4500__auto___50537 = (0);
while(true){
if((i__4500__auto___50537 < len__4499__auto___50536)){
args__4502__auto__.push((arguments[i__4500__auto___50537]));

var G__50538 = (i__4500__auto___50537 + (1));
i__4500__auto___50537 = G__50538;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list_item_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItemIcon",args);
});

cljs_react_material_ui.core.list_item_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item_icon.cljs$lang$applyTo = (function (seq50535){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50535));
});

cljs_react_material_ui.core.list_item_secondary_action = (function cljs_react_material_ui$core$list_item_secondary_action(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50540 = arguments.length;
var i__4500__auto___50541 = (0);
while(true){
if((i__4500__auto___50541 < len__4499__auto___50540)){
args__4502__auto__.push((arguments[i__4500__auto___50541]));

var G__50542 = (i__4500__auto___50541 + (1));
i__4500__auto___50541 = G__50542;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item_secondary_action.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list_item_secondary_action.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItemSecondaryAction",args);
});

cljs_react_material_ui.core.list_item_secondary_action.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item_secondary_action.cljs$lang$applyTo = (function (seq50539){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50539));
});

cljs_react_material_ui.core.list_item_text = (function cljs_react_material_ui$core$list_item_text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50544 = arguments.length;
var i__4500__auto___50545 = (0);
while(true){
if((i__4500__auto___50545 < len__4499__auto___50544)){
args__4502__auto__.push((arguments[i__4500__auto___50545]));

var G__50546 = (i__4500__auto___50545 + (1));
i__4500__auto___50545 = G__50546;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list_item_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItemText",args);
});

cljs_react_material_ui.core.list_item_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item_text.cljs$lang$applyTo = (function (seq50543){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50543));
});

cljs_react_material_ui.core.list_subheader = (function cljs_react_material_ui$core$list_subheader(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50548 = arguments.length;
var i__4500__auto___50549 = (0);
while(true){
if((i__4500__auto___50549 < len__4499__auto___50548)){
args__4502__auto__.push((arguments[i__4500__auto___50549]));

var G__50550 = (i__4500__auto___50549 + (1));
i__4500__auto___50549 = G__50550;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list_subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListSubheader",args);
});

cljs_react_material_ui.core.list_subheader.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_subheader.cljs$lang$applyTo = (function (seq50547){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50547));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50552 = arguments.length;
var i__4500__auto___50553 = (0);
while(true){
if((i__4500__auto___50553 < len__4499__auto___50552)){
args__4502__auto__.push((arguments[i__4500__auto___50553]));

var G__50554 = (i__4500__auto___50553 + (1));
i__4500__auto___50553 = G__50554;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq50551){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50551));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50556 = arguments.length;
var i__4500__auto___50557 = (0);
while(true){
if((i__4500__auto___50557 < len__4499__auto___50556)){
args__4502__auto__.push((arguments[i__4500__auto___50557]));

var G__50558 = (i__4500__auto___50557 + (1));
i__4500__auto___50557 = G__50558;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq50555){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50555));
});

cljs_react_material_ui.core.menu_list = (function cljs_react_material_ui$core$menu_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50560 = arguments.length;
var i__4500__auto___50561 = (0);
while(true){
if((i__4500__auto___50561 < len__4499__auto___50560)){
args__4502__auto__.push((arguments[i__4500__auto___50561]));

var G__50562 = (i__4500__auto___50561 + (1));
i__4500__auto___50561 = G__50562;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.menu_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuList",args);
});

cljs_react_material_ui.core.menu_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu_list.cljs$lang$applyTo = (function (seq50559){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50559));
});

cljs_react_material_ui.core.mobile_stepper = (function cljs_react_material_ui$core$mobile_stepper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50564 = arguments.length;
var i__4500__auto___50565 = (0);
while(true){
if((i__4500__auto___50565 < len__4499__auto___50564)){
args__4502__auto__.push((arguments[i__4500__auto___50565]));

var G__50566 = (i__4500__auto___50565 + (1));
i__4500__auto___50565 = G__50566;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mobile_stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.mobile_stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MobileStepper",args);
});

cljs_react_material_ui.core.mobile_stepper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.mobile_stepper.cljs$lang$applyTo = (function (seq50563){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50563));
});

cljs_react_material_ui.core.modal = (function cljs_react_material_ui$core$modal(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50568 = arguments.length;
var i__4500__auto___50569 = (0);
while(true){
if((i__4500__auto___50569 < len__4499__auto___50568)){
args__4502__auto__.push((arguments[i__4500__auto___50569]));

var G__50570 = (i__4500__auto___50569 + (1));
i__4500__auto___50569 = G__50570;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.modal.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.modal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Modal",args);
});

cljs_react_material_ui.core.modal.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.modal.cljs$lang$applyTo = (function (seq50567){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50567));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50572 = arguments.length;
var i__4500__auto___50573 = (0);
while(true){
if((i__4500__auto___50573 < len__4499__auto___50572)){
args__4502__auto__.push((arguments[i__4500__auto___50573]));

var G__50574 = (i__4500__auto___50573 + (1));
i__4500__auto___50573 = G__50574;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq50571){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50571));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50576 = arguments.length;
var i__4500__auto___50577 = (0);
while(true){
if((i__4500__auto___50577 < len__4499__auto___50576)){
args__4502__auto__.push((arguments[i__4500__auto___50577]));

var G__50578 = (i__4500__auto___50577 + (1));
i__4500__auto___50577 = G__50578;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq50575){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50575));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50580 = arguments.length;
var i__4500__auto___50581 = (0);
while(true){
if((i__4500__auto___50581 < len__4499__auto___50580)){
args__4502__auto__.push((arguments[i__4500__auto___50581]));

var G__50582 = (i__4500__auto___50581 + (1));
i__4500__auto___50581 = G__50582;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq50579){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50579));
});

cljs_react_material_ui.core.portal = (function cljs_react_material_ui$core$portal(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50584 = arguments.length;
var i__4500__auto___50585 = (0);
while(true){
if((i__4500__auto___50585 < len__4499__auto___50584)){
args__4502__auto__.push((arguments[i__4500__auto___50585]));

var G__50586 = (i__4500__auto___50585 + (1));
i__4500__auto___50585 = G__50586;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.portal.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.portal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Portal",args);
});

cljs_react_material_ui.core.portal.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.portal.cljs$lang$applyTo = (function (seq50583){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50583));
});

cljs_react_material_ui.core.radio = (function cljs_react_material_ui$core$radio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50588 = arguments.length;
var i__4500__auto___50589 = (0);
while(true){
if((i__4500__auto___50589 < len__4499__auto___50588)){
args__4502__auto__.push((arguments[i__4500__auto___50589]));

var G__50590 = (i__4500__auto___50589 + (1));
i__4500__auto___50589 = G__50590;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.radio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Radio",args);
});

cljs_react_material_ui.core.radio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.radio.cljs$lang$applyTo = (function (seq50587){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50587));
});

cljs_react_material_ui.core.radio_group = (function cljs_react_material_ui$core$radio_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50592 = arguments.length;
var i__4500__auto___50593 = (0);
while(true){
if((i__4500__auto___50593 < len__4499__auto___50592)){
args__4502__auto__.push((arguments[i__4500__auto___50593]));

var G__50594 = (i__4500__auto___50593 + (1));
i__4500__auto___50593 = G__50594;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.radio_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioGroup",args);
});

cljs_react_material_ui.core.radio_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.radio_group.cljs$lang$applyTo = (function (seq50591){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50591));
});

cljs_react_material_ui.core.root_ref = (function cljs_react_material_ui$core$root_ref(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50596 = arguments.length;
var i__4500__auto___50597 = (0);
while(true){
if((i__4500__auto___50597 < len__4499__auto___50596)){
args__4502__auto__.push((arguments[i__4500__auto___50597]));

var G__50598 = (i__4500__auto___50597 + (1));
i__4500__auto___50597 = G__50598;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.root_ref.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.root_ref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RootRef",args);
});

cljs_react_material_ui.core.root_ref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.root_ref.cljs$lang$applyTo = (function (seq50595){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50595));
});

cljs_react_material_ui.core.select = (function cljs_react_material_ui$core$select(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50600 = arguments.length;
var i__4500__auto___50601 = (0);
while(true){
if((i__4500__auto___50601 < len__4499__auto___50600)){
args__4502__auto__.push((arguments[i__4500__auto___50601]));

var G__50602 = (i__4500__auto___50601 + (1));
i__4500__auto___50601 = G__50602;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Select",args);
});

cljs_react_material_ui.core.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.select.cljs$lang$applyTo = (function (seq50599){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50599));
});

cljs_react_material_ui.core.slide = (function cljs_react_material_ui$core$slide(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50604 = arguments.length;
var i__4500__auto___50605 = (0);
while(true){
if((i__4500__auto___50605 < len__4499__auto___50604)){
args__4502__auto__.push((arguments[i__4500__auto___50605]));

var G__50606 = (i__4500__auto___50605 + (1));
i__4500__auto___50605 = G__50606;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slide.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.slide.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slide",args);
});

cljs_react_material_ui.core.slide.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.slide.cljs$lang$applyTo = (function (seq50603){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50603));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50608 = arguments.length;
var i__4500__auto___50609 = (0);
while(true){
if((i__4500__auto___50609 < len__4499__auto___50608)){
args__4502__auto__.push((arguments[i__4500__auto___50609]));

var G__50610 = (i__4500__auto___50609 + (1));
i__4500__auto___50609 = G__50610;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq50607){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50607));
});

cljs_react_material_ui.core.snackbar_content = (function cljs_react_material_ui$core$snackbar_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50612 = arguments.length;
var i__4500__auto___50613 = (0);
while(true){
if((i__4500__auto___50613 < len__4499__auto___50612)){
args__4502__auto__.push((arguments[i__4500__auto___50613]));

var G__50614 = (i__4500__auto___50613 + (1));
i__4500__auto___50613 = G__50614;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.snackbar_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SnackbarContent",args);
});

cljs_react_material_ui.core.snackbar_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.snackbar_content.cljs$lang$applyTo = (function (seq50611){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50611));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50616 = arguments.length;
var i__4500__auto___50617 = (0);
while(true){
if((i__4500__auto___50617 < len__4499__auto___50616)){
args__4502__auto__.push((arguments[i__4500__auto___50617]));

var G__50618 = (i__4500__auto___50617 + (1));
i__4500__auto___50617 = G__50618;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq50615){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50615));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50620 = arguments.length;
var i__4500__auto___50621 = (0);
while(true){
if((i__4500__auto___50621 < len__4499__auto___50620)){
args__4502__auto__.push((arguments[i__4500__auto___50621]));

var G__50622 = (i__4500__auto___50621 + (1));
i__4500__auto___50621 = G__50622;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq50619){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50619));
});

cljs_react_material_ui.core.step_connector = (function cljs_react_material_ui$core$step_connector(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50624 = arguments.length;
var i__4500__auto___50625 = (0);
while(true){
if((i__4500__auto___50625 < len__4499__auto___50624)){
args__4502__auto__.push((arguments[i__4500__auto___50625]));

var G__50626 = (i__4500__auto___50625 + (1));
i__4500__auto___50625 = G__50626;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_connector.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_connector.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepConnector",args);
});

cljs_react_material_ui.core.step_connector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_connector.cljs$lang$applyTo = (function (seq50623){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50623));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50628 = arguments.length;
var i__4500__auto___50629 = (0);
while(true){
if((i__4500__auto___50629 < len__4499__auto___50628)){
args__4502__auto__.push((arguments[i__4500__auto___50629]));

var G__50630 = (i__4500__auto___50629 + (1));
i__4500__auto___50629 = G__50630;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq50627){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50627));
});

cljs_react_material_ui.core.step_icon = (function cljs_react_material_ui$core$step_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50632 = arguments.length;
var i__4500__auto___50633 = (0);
while(true){
if((i__4500__auto___50633 < len__4499__auto___50632)){
args__4502__auto__.push((arguments[i__4500__auto___50633]));

var G__50634 = (i__4500__auto___50633 + (1));
i__4500__auto___50633 = G__50634;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepIcon",args);
});

cljs_react_material_ui.core.step_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_icon.cljs$lang$applyTo = (function (seq50631){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50631));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50636 = arguments.length;
var i__4500__auto___50637 = (0);
while(true){
if((i__4500__auto___50637 < len__4499__auto___50636)){
args__4502__auto__.push((arguments[i__4500__auto___50637]));

var G__50638 = (i__4500__auto___50637 + (1));
i__4500__auto___50637 = G__50638;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq50635){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50635));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50640 = arguments.length;
var i__4500__auto___50641 = (0);
while(true){
if((i__4500__auto___50641 < len__4499__auto___50640)){
args__4502__auto__.push((arguments[i__4500__auto___50641]));

var G__50642 = (i__4500__auto___50641 + (1));
i__4500__auto___50641 = G__50642;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq50639){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50639));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50644 = arguments.length;
var i__4500__auto___50645 = (0);
while(true){
if((i__4500__auto___50645 < len__4499__auto___50644)){
args__4502__auto__.push((arguments[i__4500__auto___50645]));

var G__50646 = (i__4500__auto___50645 + (1));
i__4500__auto___50645 = G__50646;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq50643){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50643));
});

cljs_react_material_ui.core.swipeable_drawer = (function cljs_react_material_ui$core$swipeable_drawer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50648 = arguments.length;
var i__4500__auto___50649 = (0);
while(true){
if((i__4500__auto___50649 < len__4499__auto___50648)){
args__4502__auto__.push((arguments[i__4500__auto___50649]));

var G__50650 = (i__4500__auto___50649 + (1));
i__4500__auto___50649 = G__50650;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.swipeable_drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.swipeable_drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SwipeableDrawer",args);
});

cljs_react_material_ui.core.swipeable_drawer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.swipeable_drawer.cljs$lang$applyTo = (function (seq50647){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50647));
});

cljs_react_material_ui.core.switch$ = (function cljs_react_material_ui$core$switch(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50652 = arguments.length;
var i__4500__auto___50653 = (0);
while(true){
if((i__4500__auto___50653 < len__4499__auto___50652)){
args__4502__auto__.push((arguments[i__4500__auto___50653]));

var G__50654 = (i__4500__auto___50653 + (1));
i__4500__auto___50653 = G__50654;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Switch",args);
});

cljs_react_material_ui.core.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.switch$.cljs$lang$applyTo = (function (seq50651){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50651));
});

cljs_react_material_ui.core.switch_base = (function cljs_react_material_ui$core$switch_base(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50656 = arguments.length;
var i__4500__auto___50657 = (0);
while(true){
if((i__4500__auto___50657 < len__4499__auto___50656)){
args__4502__auto__.push((arguments[i__4500__auto___50657]));

var G__50658 = (i__4500__auto___50657 + (1));
i__4500__auto___50657 = G__50658;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.switch_base.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.switch_base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SwitchBase",args);
});

cljs_react_material_ui.core.switch_base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.switch_base.cljs$lang$applyTo = (function (seq50655){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50655));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50660 = arguments.length;
var i__4500__auto___50661 = (0);
while(true){
if((i__4500__auto___50661 < len__4499__auto___50660)){
args__4502__auto__.push((arguments[i__4500__auto___50661]));

var G__50662 = (i__4500__auto___50661 + (1));
i__4500__auto___50661 = G__50662;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq50659){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50659));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50664 = arguments.length;
var i__4500__auto___50665 = (0);
while(true){
if((i__4500__auto___50665 < len__4499__auto___50664)){
args__4502__auto__.push((arguments[i__4500__auto___50665]));

var G__50666 = (i__4500__auto___50665 + (1));
i__4500__auto___50665 = G__50666;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq50663){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50663));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50668 = arguments.length;
var i__4500__auto___50669 = (0);
while(true){
if((i__4500__auto___50669 < len__4499__auto___50668)){
args__4502__auto__.push((arguments[i__4500__auto___50669]));

var G__50670 = (i__4500__auto___50669 + (1));
i__4500__auto___50669 = G__50670;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq50667){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50667));
});

cljs_react_material_ui.core.table_cell = (function cljs_react_material_ui$core$table_cell(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50672 = arguments.length;
var i__4500__auto___50673 = (0);
while(true){
if((i__4500__auto___50673 < len__4499__auto___50672)){
args__4502__auto__.push((arguments[i__4500__auto___50673]));

var G__50674 = (i__4500__auto___50673 + (1));
i__4500__auto___50673 = G__50674;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_cell.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableCell",args);
});

cljs_react_material_ui.core.table_cell.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_cell.cljs$lang$applyTo = (function (seq50671){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50671));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50676 = arguments.length;
var i__4500__auto___50677 = (0);
while(true){
if((i__4500__auto___50677 < len__4499__auto___50676)){
args__4502__auto__.push((arguments[i__4500__auto___50677]));

var G__50678 = (i__4500__auto___50677 + (1));
i__4500__auto___50677 = G__50678;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq50675){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50675));
});

cljs_react_material_ui.core.table_head = (function cljs_react_material_ui$core$table_head(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50680 = arguments.length;
var i__4500__auto___50681 = (0);
while(true){
if((i__4500__auto___50681 < len__4499__auto___50680)){
args__4502__auto__.push((arguments[i__4500__auto___50681]));

var G__50682 = (i__4500__auto___50681 + (1));
i__4500__auto___50681 = G__50682;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_head.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHead",args);
});

cljs_react_material_ui.core.table_head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_head.cljs$lang$applyTo = (function (seq50679){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50679));
});

cljs_react_material_ui.core.table_pagination = (function cljs_react_material_ui$core$table_pagination(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50684 = arguments.length;
var i__4500__auto___50685 = (0);
while(true){
if((i__4500__auto___50685 < len__4499__auto___50684)){
args__4502__auto__.push((arguments[i__4500__auto___50685]));

var G__50686 = (i__4500__auto___50685 + (1));
i__4500__auto___50685 = G__50686;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_pagination.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_pagination.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TablePagination",args);
});

cljs_react_material_ui.core.table_pagination.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_pagination.cljs$lang$applyTo = (function (seq50683){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50683));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50688 = arguments.length;
var i__4500__auto___50689 = (0);
while(true){
if((i__4500__auto___50689 < len__4499__auto___50688)){
args__4502__auto__.push((arguments[i__4500__auto___50689]));

var G__50690 = (i__4500__auto___50689 + (1));
i__4500__auto___50689 = G__50690;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq50687){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50687));
});

cljs_react_material_ui.core.table_sort_label = (function cljs_react_material_ui$core$table_sort_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50692 = arguments.length;
var i__4500__auto___50693 = (0);
while(true){
if((i__4500__auto___50693 < len__4499__auto___50692)){
args__4502__auto__.push((arguments[i__4500__auto___50693]));

var G__50694 = (i__4500__auto___50693 + (1));
i__4500__auto___50693 = G__50694;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_sort_label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_sort_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableSortLabel",args);
});

cljs_react_material_ui.core.table_sort_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_sort_label.cljs$lang$applyTo = (function (seq50691){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50691));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50696 = arguments.length;
var i__4500__auto___50697 = (0);
while(true){
if((i__4500__auto___50697 < len__4499__auto___50696)){
args__4502__auto__.push((arguments[i__4500__auto___50697]));

var G__50698 = (i__4500__auto___50697 + (1));
i__4500__auto___50697 = G__50698;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq50695){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50695));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50700 = arguments.length;
var i__4500__auto___50701 = (0);
while(true){
if((i__4500__auto___50701 < len__4499__auto___50700)){
args__4502__auto__.push((arguments[i__4500__auto___50701]));

var G__50702 = (i__4500__auto___50701 + (1));
i__4500__auto___50701 = G__50702;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq50699){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50699));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50704 = arguments.length;
var i__4500__auto___50705 = (0);
while(true){
if((i__4500__auto___50705 < len__4499__auto___50704)){
args__4502__auto__.push((arguments[i__4500__auto___50705]));

var G__50706 = (i__4500__auto___50705 + (1));
i__4500__auto___50705 = G__50706;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq50703){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50703));
});

cljs_react_material_ui.core.tooltip = (function cljs_react_material_ui$core$tooltip(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50708 = arguments.length;
var i__4500__auto___50709 = (0);
while(true){
if((i__4500__auto___50709 < len__4499__auto___50708)){
args__4502__auto__.push((arguments[i__4500__auto___50709]));

var G__50710 = (i__4500__auto___50709 + (1));
i__4500__auto___50709 = G__50710;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tooltip.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.tooltip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tooltip",args);
});

cljs_react_material_ui.core.tooltip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tooltip.cljs$lang$applyTo = (function (seq50707){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50707));
});

cljs_react_material_ui.core.touch_ripple = (function cljs_react_material_ui$core$touch_ripple(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50712 = arguments.length;
var i__4500__auto___50713 = (0);
while(true){
if((i__4500__auto___50713 < len__4499__auto___50712)){
args__4502__auto__.push((arguments[i__4500__auto___50713]));

var G__50714 = (i__4500__auto___50713 + (1));
i__4500__auto___50713 = G__50714;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.touch_ripple.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.touch_ripple.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TouchRipple",args);
});

cljs_react_material_ui.core.touch_ripple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.touch_ripple.cljs$lang$applyTo = (function (seq50711){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50711));
});

cljs_react_material_ui.core.typography = (function cljs_react_material_ui$core$typography(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50716 = arguments.length;
var i__4500__auto___50717 = (0);
while(true){
if((i__4500__auto___50717 < len__4499__auto___50716)){
args__4502__auto__.push((arguments[i__4500__auto___50717]));

var G__50718 = (i__4500__auto___50717 + (1));
i__4500__auto___50717 = G__50718;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.typography.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.typography.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Typography",args);
});

cljs_react_material_ui.core.typography.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.typography.cljs$lang$applyTo = (function (seq50715){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50715));
});

cljs_react_material_ui.core.zoom = (function cljs_react_material_ui$core$zoom(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50720 = arguments.length;
var i__4500__auto___50721 = (0);
while(true){
if((i__4500__auto___50721 < len__4499__auto___50720)){
args__4502__auto__.push((arguments[i__4500__auto___50721]));

var G__50722 = (i__4500__auto___50721 + (1));
i__4500__auto___50721 = G__50722;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.zoom.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.zoom.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Zoom",args);
});

cljs_react_material_ui.core.zoom.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.zoom.cljs$lang$applyTo = (function (seq50719){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50719));
});


//# sourceMappingURL=core.js.map?rel=1536503776365
