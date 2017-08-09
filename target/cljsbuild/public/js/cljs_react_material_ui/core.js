// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('goog.object');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__7772){
var vec__7773 = p__7772;
var k = cljs.core.nth.call(null,vec__7773,(0),null);
var v = cljs.core.nth.call(null,vec__7773,(1),null);
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
var G__7777 = arguments.length;
switch (G__7777) {
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
var G__7780 = arguments.length;
switch (G__7780) {
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
var len__4499__auto___7783 = arguments.length;
var i__4500__auto___7784 = (0);
while(true){
if((i__4500__auto___7784 < len__4499__auto___7783)){
args__4502__auto__.push((arguments[i__4500__auto___7784]));

var G__7785 = (i__4500__auto___7784 + (1));
i__4500__auto___7784 = G__7785;
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
cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq7782){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7782));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7787 = arguments.length;
var i__4500__auto___7788 = (0);
while(true){
if((i__4500__auto___7788 < len__4499__auto___7787)){
args__4502__auto__.push((arguments[i__4500__auto___7788]));

var G__7789 = (i__4500__auto___7788 + (1));
i__4500__auto___7788 = G__7789;
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
cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq7786){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7786));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7791 = arguments.length;
var i__4500__auto___7792 = (0);
while(true){
if((i__4500__auto___7792 < len__4499__auto___7791)){
args__4502__auto__.push((arguments[i__4500__auto___7792]));

var G__7793 = (i__4500__auto___7792 + (1));
i__4500__auto___7792 = G__7793;
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
cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq7790){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7790));
});

cljs_react_material_ui.core.backdrop = (function cljs_react_material_ui$core$backdrop(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7795 = arguments.length;
var i__4500__auto___7796 = (0);
while(true){
if((i__4500__auto___7796 < len__4499__auto___7795)){
args__4502__auto__.push((arguments[i__4500__auto___7796]));

var G__7797 = (i__4500__auto___7796 + (1));
i__4500__auto___7796 = G__7797;
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
cljs_react_material_ui.core.backdrop.cljs$lang$applyTo = (function (seq7794){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7794));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7799 = arguments.length;
var i__4500__auto___7800 = (0);
while(true){
if((i__4500__auto___7800 < len__4499__auto___7799)){
args__4502__auto__.push((arguments[i__4500__auto___7800]));

var G__7801 = (i__4500__auto___7800 + (1));
i__4500__auto___7800 = G__7801;
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
cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq7798){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7798));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7803 = arguments.length;
var i__4500__auto___7804 = (0);
while(true){
if((i__4500__auto___7804 < len__4499__auto___7803)){
args__4502__auto__.push((arguments[i__4500__auto___7804]));

var G__7805 = (i__4500__auto___7804 + (1));
i__4500__auto___7804 = G__7805;
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
cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq7802){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7802));
});

cljs_react_material_ui.core.bottom_navigation_action = (function cljs_react_material_ui$core$bottom_navigation_action(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7807 = arguments.length;
var i__4500__auto___7808 = (0);
while(true){
if((i__4500__auto___7808 < len__4499__auto___7807)){
args__4502__auto__.push((arguments[i__4500__auto___7808]));

var G__7809 = (i__4500__auto___7808 + (1));
i__4500__auto___7808 = G__7809;
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
cljs_react_material_ui.core.bottom_navigation_action.cljs$lang$applyTo = (function (seq7806){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7806));
});

cljs_react_material_ui.core.button = (function cljs_react_material_ui$core$button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7811 = arguments.length;
var i__4500__auto___7812 = (0);
while(true){
if((i__4500__auto___7812 < len__4499__auto___7811)){
args__4502__auto__.push((arguments[i__4500__auto___7812]));

var G__7813 = (i__4500__auto___7812 + (1));
i__4500__auto___7812 = G__7813;
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
cljs_react_material_ui.core.button.cljs$lang$applyTo = (function (seq7810){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7810));
});

cljs_react_material_ui.core.button_base = (function cljs_react_material_ui$core$button_base(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7815 = arguments.length;
var i__4500__auto___7816 = (0);
while(true){
if((i__4500__auto___7816 < len__4499__auto___7815)){
args__4502__auto__.push((arguments[i__4500__auto___7816]));

var G__7817 = (i__4500__auto___7816 + (1));
i__4500__auto___7816 = G__7817;
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
cljs_react_material_ui.core.button_base.cljs$lang$applyTo = (function (seq7814){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7814));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7819 = arguments.length;
var i__4500__auto___7820 = (0);
while(true){
if((i__4500__auto___7820 < len__4499__auto___7819)){
args__4502__auto__.push((arguments[i__4500__auto___7820]));

var G__7821 = (i__4500__auto___7820 + (1));
i__4500__auto___7820 = G__7821;
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
cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq7818){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7818));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7823 = arguments.length;
var i__4500__auto___7824 = (0);
while(true){
if((i__4500__auto___7824 < len__4499__auto___7823)){
args__4502__auto__.push((arguments[i__4500__auto___7824]));

var G__7825 = (i__4500__auto___7824 + (1));
i__4500__auto___7824 = G__7825;
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
cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq7822){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7822));
});

cljs_react_material_ui.core.card_content = (function cljs_react_material_ui$core$card_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7827 = arguments.length;
var i__4500__auto___7828 = (0);
while(true){
if((i__4500__auto___7828 < len__4499__auto___7827)){
args__4502__auto__.push((arguments[i__4500__auto___7828]));

var G__7829 = (i__4500__auto___7828 + (1));
i__4500__auto___7828 = G__7829;
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
cljs_react_material_ui.core.card_content.cljs$lang$applyTo = (function (seq7826){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7826));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7831 = arguments.length;
var i__4500__auto___7832 = (0);
while(true){
if((i__4500__auto___7832 < len__4499__auto___7831)){
args__4502__auto__.push((arguments[i__4500__auto___7832]));

var G__7833 = (i__4500__auto___7832 + (1));
i__4500__auto___7832 = G__7833;
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
cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq7830){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7830));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7835 = arguments.length;
var i__4500__auto___7836 = (0);
while(true){
if((i__4500__auto___7836 < len__4499__auto___7835)){
args__4502__auto__.push((arguments[i__4500__auto___7836]));

var G__7837 = (i__4500__auto___7836 + (1));
i__4500__auto___7836 = G__7837;
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
cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq7834){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7834));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7839 = arguments.length;
var i__4500__auto___7840 = (0);
while(true){
if((i__4500__auto___7840 < len__4499__auto___7839)){
args__4502__auto__.push((arguments[i__4500__auto___7840]));

var G__7841 = (i__4500__auto___7840 + (1));
i__4500__auto___7840 = G__7841;
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
cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq7838){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7838));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7843 = arguments.length;
var i__4500__auto___7844 = (0);
while(true){
if((i__4500__auto___7844 < len__4499__auto___7843)){
args__4502__auto__.push((arguments[i__4500__auto___7844]));

var G__7845 = (i__4500__auto___7844 + (1));
i__4500__auto___7844 = G__7845;
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
cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq7842){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7842));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7847 = arguments.length;
var i__4500__auto___7848 = (0);
while(true){
if((i__4500__auto___7848 < len__4499__auto___7847)){
args__4502__auto__.push((arguments[i__4500__auto___7848]));

var G__7849 = (i__4500__auto___7848 + (1));
i__4500__auto___7848 = G__7849;
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
cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq7846){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7846));
});

cljs_react_material_ui.core.click_away_listener = (function cljs_react_material_ui$core$click_away_listener(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7851 = arguments.length;
var i__4500__auto___7852 = (0);
while(true){
if((i__4500__auto___7852 < len__4499__auto___7851)){
args__4502__auto__.push((arguments[i__4500__auto___7852]));

var G__7853 = (i__4500__auto___7852 + (1));
i__4500__auto___7852 = G__7853;
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
cljs_react_material_ui.core.click_away_listener.cljs$lang$applyTo = (function (seq7850){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7850));
});

cljs_react_material_ui.core.collapse = (function cljs_react_material_ui$core$collapse(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7855 = arguments.length;
var i__4500__auto___7856 = (0);
while(true){
if((i__4500__auto___7856 < len__4499__auto___7855)){
args__4502__auto__.push((arguments[i__4500__auto___7856]));

var G__7857 = (i__4500__auto___7856 + (1));
i__4500__auto___7856 = G__7857;
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
cljs_react_material_ui.core.collapse.cljs$lang$applyTo = (function (seq7854){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7854));
});

cljs_react_material_ui.core.css_baseline = (function cljs_react_material_ui$core$css_baseline(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7859 = arguments.length;
var i__4500__auto___7860 = (0);
while(true){
if((i__4500__auto___7860 < len__4499__auto___7859)){
args__4502__auto__.push((arguments[i__4500__auto___7860]));

var G__7861 = (i__4500__auto___7860 + (1));
i__4500__auto___7860 = G__7861;
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
cljs_react_material_ui.core.css_baseline.cljs$lang$applyTo = (function (seq7858){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7858));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7863 = arguments.length;
var i__4500__auto___7864 = (0);
while(true){
if((i__4500__auto___7864 < len__4499__auto___7863)){
args__4502__auto__.push((arguments[i__4500__auto___7864]));

var G__7865 = (i__4500__auto___7864 + (1));
i__4500__auto___7864 = G__7865;
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
cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq7862){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7862));
});

cljs_react_material_ui.core.dialog_actions = (function cljs_react_material_ui$core$dialog_actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7867 = arguments.length;
var i__4500__auto___7868 = (0);
while(true){
if((i__4500__auto___7868 < len__4499__auto___7867)){
args__4502__auto__.push((arguments[i__4500__auto___7868]));

var G__7869 = (i__4500__auto___7868 + (1));
i__4500__auto___7868 = G__7869;
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
cljs_react_material_ui.core.dialog_actions.cljs$lang$applyTo = (function (seq7866){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7866));
});

cljs_react_material_ui.core.dialog_content = (function cljs_react_material_ui$core$dialog_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7871 = arguments.length;
var i__4500__auto___7872 = (0);
while(true){
if((i__4500__auto___7872 < len__4499__auto___7871)){
args__4502__auto__.push((arguments[i__4500__auto___7872]));

var G__7873 = (i__4500__auto___7872 + (1));
i__4500__auto___7872 = G__7873;
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
cljs_react_material_ui.core.dialog_content.cljs$lang$applyTo = (function (seq7870){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7870));
});

cljs_react_material_ui.core.dialog_content_text = (function cljs_react_material_ui$core$dialog_content_text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7875 = arguments.length;
var i__4500__auto___7876 = (0);
while(true){
if((i__4500__auto___7876 < len__4499__auto___7875)){
args__4502__auto__.push((arguments[i__4500__auto___7876]));

var G__7877 = (i__4500__auto___7876 + (1));
i__4500__auto___7876 = G__7877;
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
cljs_react_material_ui.core.dialog_content_text.cljs$lang$applyTo = (function (seq7874){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7874));
});

cljs_react_material_ui.core.dialog_title = (function cljs_react_material_ui$core$dialog_title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7879 = arguments.length;
var i__4500__auto___7880 = (0);
while(true){
if((i__4500__auto___7880 < len__4499__auto___7879)){
args__4502__auto__.push((arguments[i__4500__auto___7880]));

var G__7881 = (i__4500__auto___7880 + (1));
i__4500__auto___7880 = G__7881;
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
cljs_react_material_ui.core.dialog_title.cljs$lang$applyTo = (function (seq7878){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7878));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7883 = arguments.length;
var i__4500__auto___7884 = (0);
while(true){
if((i__4500__auto___7884 < len__4499__auto___7883)){
args__4502__auto__.push((arguments[i__4500__auto___7884]));

var G__7885 = (i__4500__auto___7884 + (1));
i__4500__auto___7884 = G__7885;
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
cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq7882){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7882));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7887 = arguments.length;
var i__4500__auto___7888 = (0);
while(true){
if((i__4500__auto___7888 < len__4499__auto___7887)){
args__4502__auto__.push((arguments[i__4500__auto___7888]));

var G__7889 = (i__4500__auto___7888 + (1));
i__4500__auto___7888 = G__7889;
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
cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq7886){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7886));
});

cljs_react_material_ui.core.expansion_panel = (function cljs_react_material_ui$core$expansion_panel(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7891 = arguments.length;
var i__4500__auto___7892 = (0);
while(true){
if((i__4500__auto___7892 < len__4499__auto___7891)){
args__4502__auto__.push((arguments[i__4500__auto___7892]));

var G__7893 = (i__4500__auto___7892 + (1));
i__4500__auto___7892 = G__7893;
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
cljs_react_material_ui.core.expansion_panel.cljs$lang$applyTo = (function (seq7890){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7890));
});

cljs_react_material_ui.core.expansion_panel_actions = (function cljs_react_material_ui$core$expansion_panel_actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7895 = arguments.length;
var i__4500__auto___7896 = (0);
while(true){
if((i__4500__auto___7896 < len__4499__auto___7895)){
args__4502__auto__.push((arguments[i__4500__auto___7896]));

var G__7897 = (i__4500__auto___7896 + (1));
i__4500__auto___7896 = G__7897;
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
cljs_react_material_ui.core.expansion_panel_actions.cljs$lang$applyTo = (function (seq7894){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7894));
});

cljs_react_material_ui.core.expansion_panel_details = (function cljs_react_material_ui$core$expansion_panel_details(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7899 = arguments.length;
var i__4500__auto___7900 = (0);
while(true){
if((i__4500__auto___7900 < len__4499__auto___7899)){
args__4502__auto__.push((arguments[i__4500__auto___7900]));

var G__7901 = (i__4500__auto___7900 + (1));
i__4500__auto___7900 = G__7901;
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
cljs_react_material_ui.core.expansion_panel_details.cljs$lang$applyTo = (function (seq7898){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7898));
});

cljs_react_material_ui.core.expansion_panel_summary = (function cljs_react_material_ui$core$expansion_panel_summary(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7903 = arguments.length;
var i__4500__auto___7904 = (0);
while(true){
if((i__4500__auto___7904 < len__4499__auto___7903)){
args__4502__auto__.push((arguments[i__4500__auto___7904]));

var G__7905 = (i__4500__auto___7904 + (1));
i__4500__auto___7904 = G__7905;
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
cljs_react_material_ui.core.expansion_panel_summary.cljs$lang$applyTo = (function (seq7902){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7902));
});

cljs_react_material_ui.core.fade = (function cljs_react_material_ui$core$fade(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7907 = arguments.length;
var i__4500__auto___7908 = (0);
while(true){
if((i__4500__auto___7908 < len__4499__auto___7907)){
args__4502__auto__.push((arguments[i__4500__auto___7908]));

var G__7909 = (i__4500__auto___7908 + (1));
i__4500__auto___7908 = G__7909;
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
cljs_react_material_ui.core.fade.cljs$lang$applyTo = (function (seq7906){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7906));
});

cljs_react_material_ui.core.form_control = (function cljs_react_material_ui$core$form_control(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7911 = arguments.length;
var i__4500__auto___7912 = (0);
while(true){
if((i__4500__auto___7912 < len__4499__auto___7911)){
args__4502__auto__.push((arguments[i__4500__auto___7912]));

var G__7913 = (i__4500__auto___7912 + (1));
i__4500__auto___7912 = G__7913;
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
cljs_react_material_ui.core.form_control.cljs$lang$applyTo = (function (seq7910){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7910));
});

cljs_react_material_ui.core.form_control_label = (function cljs_react_material_ui$core$form_control_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7915 = arguments.length;
var i__4500__auto___7916 = (0);
while(true){
if((i__4500__auto___7916 < len__4499__auto___7915)){
args__4502__auto__.push((arguments[i__4500__auto___7916]));

var G__7917 = (i__4500__auto___7916 + (1));
i__4500__auto___7916 = G__7917;
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
cljs_react_material_ui.core.form_control_label.cljs$lang$applyTo = (function (seq7914){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7914));
});

cljs_react_material_ui.core.form_group = (function cljs_react_material_ui$core$form_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7919 = arguments.length;
var i__4500__auto___7920 = (0);
while(true){
if((i__4500__auto___7920 < len__4499__auto___7919)){
args__4502__auto__.push((arguments[i__4500__auto___7920]));

var G__7921 = (i__4500__auto___7920 + (1));
i__4500__auto___7920 = G__7921;
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
cljs_react_material_ui.core.form_group.cljs$lang$applyTo = (function (seq7918){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7918));
});

cljs_react_material_ui.core.form_helper_text = (function cljs_react_material_ui$core$form_helper_text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7923 = arguments.length;
var i__4500__auto___7924 = (0);
while(true){
if((i__4500__auto___7924 < len__4499__auto___7923)){
args__4502__auto__.push((arguments[i__4500__auto___7924]));

var G__7925 = (i__4500__auto___7924 + (1));
i__4500__auto___7924 = G__7925;
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
cljs_react_material_ui.core.form_helper_text.cljs$lang$applyTo = (function (seq7922){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7922));
});

cljs_react_material_ui.core.form_label = (function cljs_react_material_ui$core$form_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7927 = arguments.length;
var i__4500__auto___7928 = (0);
while(true){
if((i__4500__auto___7928 < len__4499__auto___7927)){
args__4502__auto__.push((arguments[i__4500__auto___7928]));

var G__7929 = (i__4500__auto___7928 + (1));
i__4500__auto___7928 = G__7929;
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
cljs_react_material_ui.core.form_label.cljs$lang$applyTo = (function (seq7926){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7926));
});

cljs_react_material_ui.core.grid = (function cljs_react_material_ui$core$grid(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7931 = arguments.length;
var i__4500__auto___7932 = (0);
while(true){
if((i__4500__auto___7932 < len__4499__auto___7931)){
args__4502__auto__.push((arguments[i__4500__auto___7932]));

var G__7933 = (i__4500__auto___7932 + (1));
i__4500__auto___7932 = G__7933;
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
cljs_react_material_ui.core.grid.cljs$lang$applyTo = (function (seq7930){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7930));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7935 = arguments.length;
var i__4500__auto___7936 = (0);
while(true){
if((i__4500__auto___7936 < len__4499__auto___7935)){
args__4502__auto__.push((arguments[i__4500__auto___7936]));

var G__7937 = (i__4500__auto___7936 + (1));
i__4500__auto___7936 = G__7937;
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
cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq7934){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7934));
});

cljs_react_material_ui.core.grid_list_tile = (function cljs_react_material_ui$core$grid_list_tile(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7939 = arguments.length;
var i__4500__auto___7940 = (0);
while(true){
if((i__4500__auto___7940 < len__4499__auto___7939)){
args__4502__auto__.push((arguments[i__4500__auto___7940]));

var G__7941 = (i__4500__auto___7940 + (1));
i__4500__auto___7940 = G__7941;
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
cljs_react_material_ui.core.grid_list_tile.cljs$lang$applyTo = (function (seq7938){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7938));
});

cljs_react_material_ui.core.grid_list_tile_bar = (function cljs_react_material_ui$core$grid_list_tile_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7943 = arguments.length;
var i__4500__auto___7944 = (0);
while(true){
if((i__4500__auto___7944 < len__4499__auto___7943)){
args__4502__auto__.push((arguments[i__4500__auto___7944]));

var G__7945 = (i__4500__auto___7944 + (1));
i__4500__auto___7944 = G__7945;
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
cljs_react_material_ui.core.grid_list_tile_bar.cljs$lang$applyTo = (function (seq7942){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7942));
});

cljs_react_material_ui.core.grow = (function cljs_react_material_ui$core$grow(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7947 = arguments.length;
var i__4500__auto___7948 = (0);
while(true){
if((i__4500__auto___7948 < len__4499__auto___7947)){
args__4502__auto__.push((arguments[i__4500__auto___7948]));

var G__7949 = (i__4500__auto___7948 + (1));
i__4500__auto___7948 = G__7949;
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
cljs_react_material_ui.core.grow.cljs$lang$applyTo = (function (seq7946){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7946));
});

cljs_react_material_ui.core.hidden = (function cljs_react_material_ui$core$hidden(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7951 = arguments.length;
var i__4500__auto___7952 = (0);
while(true){
if((i__4500__auto___7952 < len__4499__auto___7951)){
args__4502__auto__.push((arguments[i__4500__auto___7952]));

var G__7953 = (i__4500__auto___7952 + (1));
i__4500__auto___7952 = G__7953;
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
cljs_react_material_ui.core.hidden.cljs$lang$applyTo = (function (seq7950){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7950));
});

cljs_react_material_ui.core.icon = (function cljs_react_material_ui$core$icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7955 = arguments.length;
var i__4500__auto___7956 = (0);
while(true){
if((i__4500__auto___7956 < len__4499__auto___7955)){
args__4502__auto__.push((arguments[i__4500__auto___7956]));

var G__7957 = (i__4500__auto___7956 + (1));
i__4500__auto___7956 = G__7957;
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
cljs_react_material_ui.core.icon.cljs$lang$applyTo = (function (seq7954){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7954));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7959 = arguments.length;
var i__4500__auto___7960 = (0);
while(true){
if((i__4500__auto___7960 < len__4499__auto___7959)){
args__4502__auto__.push((arguments[i__4500__auto___7960]));

var G__7961 = (i__4500__auto___7960 + (1));
i__4500__auto___7960 = G__7961;
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
cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq7958){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7958));
});

cljs_react_material_ui.core.input = (function cljs_react_material_ui$core$input(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7963 = arguments.length;
var i__4500__auto___7964 = (0);
while(true){
if((i__4500__auto___7964 < len__4499__auto___7963)){
args__4502__auto__.push((arguments[i__4500__auto___7964]));

var G__7965 = (i__4500__auto___7964 + (1));
i__4500__auto___7964 = G__7965;
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
cljs_react_material_ui.core.input.cljs$lang$applyTo = (function (seq7962){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7962));
});

cljs_react_material_ui.core.input_adornment = (function cljs_react_material_ui$core$input_adornment(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7967 = arguments.length;
var i__4500__auto___7968 = (0);
while(true){
if((i__4500__auto___7968 < len__4499__auto___7967)){
args__4502__auto__.push((arguments[i__4500__auto___7968]));

var G__7969 = (i__4500__auto___7968 + (1));
i__4500__auto___7968 = G__7969;
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
cljs_react_material_ui.core.input_adornment.cljs$lang$applyTo = (function (seq7966){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7966));
});

cljs_react_material_ui.core.input_label = (function cljs_react_material_ui$core$input_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7971 = arguments.length;
var i__4500__auto___7972 = (0);
while(true){
if((i__4500__auto___7972 < len__4499__auto___7971)){
args__4502__auto__.push((arguments[i__4500__auto___7972]));

var G__7973 = (i__4500__auto___7972 + (1));
i__4500__auto___7972 = G__7973;
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
cljs_react_material_ui.core.input_label.cljs$lang$applyTo = (function (seq7970){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7970));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7975 = arguments.length;
var i__4500__auto___7976 = (0);
while(true){
if((i__4500__auto___7976 < len__4499__auto___7975)){
args__4502__auto__.push((arguments[i__4500__auto___7976]));

var G__7977 = (i__4500__auto___7976 + (1));
i__4500__auto___7976 = G__7977;
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
cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq7974){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7974));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7979 = arguments.length;
var i__4500__auto___7980 = (0);
while(true){
if((i__4500__auto___7980 < len__4499__auto___7979)){
args__4502__auto__.push((arguments[i__4500__auto___7980]));

var G__7981 = (i__4500__auto___7980 + (1));
i__4500__auto___7980 = G__7981;
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
cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq7978){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7978));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7983 = arguments.length;
var i__4500__auto___7984 = (0);
while(true){
if((i__4500__auto___7984 < len__4499__auto___7983)){
args__4502__auto__.push((arguments[i__4500__auto___7984]));

var G__7985 = (i__4500__auto___7984 + (1));
i__4500__auto___7984 = G__7985;
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
cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq7982){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7982));
});

cljs_react_material_ui.core.list_item_avatar = (function cljs_react_material_ui$core$list_item_avatar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7987 = arguments.length;
var i__4500__auto___7988 = (0);
while(true){
if((i__4500__auto___7988 < len__4499__auto___7987)){
args__4502__auto__.push((arguments[i__4500__auto___7988]));

var G__7989 = (i__4500__auto___7988 + (1));
i__4500__auto___7988 = G__7989;
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
cljs_react_material_ui.core.list_item_avatar.cljs$lang$applyTo = (function (seq7986){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7986));
});

cljs_react_material_ui.core.list_item_icon = (function cljs_react_material_ui$core$list_item_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7991 = arguments.length;
var i__4500__auto___7992 = (0);
while(true){
if((i__4500__auto___7992 < len__4499__auto___7991)){
args__4502__auto__.push((arguments[i__4500__auto___7992]));

var G__7993 = (i__4500__auto___7992 + (1));
i__4500__auto___7992 = G__7993;
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
cljs_react_material_ui.core.list_item_icon.cljs$lang$applyTo = (function (seq7990){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7990));
});

cljs_react_material_ui.core.list_item_secondary_action = (function cljs_react_material_ui$core$list_item_secondary_action(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7995 = arguments.length;
var i__4500__auto___7996 = (0);
while(true){
if((i__4500__auto___7996 < len__4499__auto___7995)){
args__4502__auto__.push((arguments[i__4500__auto___7996]));

var G__7997 = (i__4500__auto___7996 + (1));
i__4500__auto___7996 = G__7997;
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
cljs_react_material_ui.core.list_item_secondary_action.cljs$lang$applyTo = (function (seq7994){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7994));
});

cljs_react_material_ui.core.list_item_text = (function cljs_react_material_ui$core$list_item_text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7999 = arguments.length;
var i__4500__auto___8000 = (0);
while(true){
if((i__4500__auto___8000 < len__4499__auto___7999)){
args__4502__auto__.push((arguments[i__4500__auto___8000]));

var G__8001 = (i__4500__auto___8000 + (1));
i__4500__auto___8000 = G__8001;
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
cljs_react_material_ui.core.list_item_text.cljs$lang$applyTo = (function (seq7998){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7998));
});

cljs_react_material_ui.core.list_subheader = (function cljs_react_material_ui$core$list_subheader(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8003 = arguments.length;
var i__4500__auto___8004 = (0);
while(true){
if((i__4500__auto___8004 < len__4499__auto___8003)){
args__4502__auto__.push((arguments[i__4500__auto___8004]));

var G__8005 = (i__4500__auto___8004 + (1));
i__4500__auto___8004 = G__8005;
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
cljs_react_material_ui.core.list_subheader.cljs$lang$applyTo = (function (seq8002){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8002));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8007 = arguments.length;
var i__4500__auto___8008 = (0);
while(true){
if((i__4500__auto___8008 < len__4499__auto___8007)){
args__4502__auto__.push((arguments[i__4500__auto___8008]));

var G__8009 = (i__4500__auto___8008 + (1));
i__4500__auto___8008 = G__8009;
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
cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq8006){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8006));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8011 = arguments.length;
var i__4500__auto___8012 = (0);
while(true){
if((i__4500__auto___8012 < len__4499__auto___8011)){
args__4502__auto__.push((arguments[i__4500__auto___8012]));

var G__8013 = (i__4500__auto___8012 + (1));
i__4500__auto___8012 = G__8013;
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
cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq8010){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8010));
});

cljs_react_material_ui.core.menu_list = (function cljs_react_material_ui$core$menu_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8015 = arguments.length;
var i__4500__auto___8016 = (0);
while(true){
if((i__4500__auto___8016 < len__4499__auto___8015)){
args__4502__auto__.push((arguments[i__4500__auto___8016]));

var G__8017 = (i__4500__auto___8016 + (1));
i__4500__auto___8016 = G__8017;
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
cljs_react_material_ui.core.menu_list.cljs$lang$applyTo = (function (seq8014){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8014));
});

cljs_react_material_ui.core.mobile_stepper = (function cljs_react_material_ui$core$mobile_stepper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8019 = arguments.length;
var i__4500__auto___8020 = (0);
while(true){
if((i__4500__auto___8020 < len__4499__auto___8019)){
args__4502__auto__.push((arguments[i__4500__auto___8020]));

var G__8021 = (i__4500__auto___8020 + (1));
i__4500__auto___8020 = G__8021;
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
cljs_react_material_ui.core.mobile_stepper.cljs$lang$applyTo = (function (seq8018){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8018));
});

cljs_react_material_ui.core.modal = (function cljs_react_material_ui$core$modal(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8023 = arguments.length;
var i__4500__auto___8024 = (0);
while(true){
if((i__4500__auto___8024 < len__4499__auto___8023)){
args__4502__auto__.push((arguments[i__4500__auto___8024]));

var G__8025 = (i__4500__auto___8024 + (1));
i__4500__auto___8024 = G__8025;
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
cljs_react_material_ui.core.modal.cljs$lang$applyTo = (function (seq8022){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8022));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8027 = arguments.length;
var i__4500__auto___8028 = (0);
while(true){
if((i__4500__auto___8028 < len__4499__auto___8027)){
args__4502__auto__.push((arguments[i__4500__auto___8028]));

var G__8029 = (i__4500__auto___8028 + (1));
i__4500__auto___8028 = G__8029;
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
cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq8026){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8026));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8031 = arguments.length;
var i__4500__auto___8032 = (0);
while(true){
if((i__4500__auto___8032 < len__4499__auto___8031)){
args__4502__auto__.push((arguments[i__4500__auto___8032]));

var G__8033 = (i__4500__auto___8032 + (1));
i__4500__auto___8032 = G__8033;
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
cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq8030){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8030));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8035 = arguments.length;
var i__4500__auto___8036 = (0);
while(true){
if((i__4500__auto___8036 < len__4499__auto___8035)){
args__4502__auto__.push((arguments[i__4500__auto___8036]));

var G__8037 = (i__4500__auto___8036 + (1));
i__4500__auto___8036 = G__8037;
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
cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq8034){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8034));
});

cljs_react_material_ui.core.portal = (function cljs_react_material_ui$core$portal(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8039 = arguments.length;
var i__4500__auto___8040 = (0);
while(true){
if((i__4500__auto___8040 < len__4499__auto___8039)){
args__4502__auto__.push((arguments[i__4500__auto___8040]));

var G__8041 = (i__4500__auto___8040 + (1));
i__4500__auto___8040 = G__8041;
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
cljs_react_material_ui.core.portal.cljs$lang$applyTo = (function (seq8038){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8038));
});

cljs_react_material_ui.core.radio = (function cljs_react_material_ui$core$radio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8043 = arguments.length;
var i__4500__auto___8044 = (0);
while(true){
if((i__4500__auto___8044 < len__4499__auto___8043)){
args__4502__auto__.push((arguments[i__4500__auto___8044]));

var G__8045 = (i__4500__auto___8044 + (1));
i__4500__auto___8044 = G__8045;
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
cljs_react_material_ui.core.radio.cljs$lang$applyTo = (function (seq8042){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8042));
});

cljs_react_material_ui.core.radio_group = (function cljs_react_material_ui$core$radio_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8047 = arguments.length;
var i__4500__auto___8048 = (0);
while(true){
if((i__4500__auto___8048 < len__4499__auto___8047)){
args__4502__auto__.push((arguments[i__4500__auto___8048]));

var G__8049 = (i__4500__auto___8048 + (1));
i__4500__auto___8048 = G__8049;
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
cljs_react_material_ui.core.radio_group.cljs$lang$applyTo = (function (seq8046){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8046));
});

cljs_react_material_ui.core.root_ref = (function cljs_react_material_ui$core$root_ref(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8051 = arguments.length;
var i__4500__auto___8052 = (0);
while(true){
if((i__4500__auto___8052 < len__4499__auto___8051)){
args__4502__auto__.push((arguments[i__4500__auto___8052]));

var G__8053 = (i__4500__auto___8052 + (1));
i__4500__auto___8052 = G__8053;
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
cljs_react_material_ui.core.root_ref.cljs$lang$applyTo = (function (seq8050){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8050));
});

cljs_react_material_ui.core.select = (function cljs_react_material_ui$core$select(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8055 = arguments.length;
var i__4500__auto___8056 = (0);
while(true){
if((i__4500__auto___8056 < len__4499__auto___8055)){
args__4502__auto__.push((arguments[i__4500__auto___8056]));

var G__8057 = (i__4500__auto___8056 + (1));
i__4500__auto___8056 = G__8057;
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
cljs_react_material_ui.core.select.cljs$lang$applyTo = (function (seq8054){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8054));
});

cljs_react_material_ui.core.slide = (function cljs_react_material_ui$core$slide(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8059 = arguments.length;
var i__4500__auto___8060 = (0);
while(true){
if((i__4500__auto___8060 < len__4499__auto___8059)){
args__4502__auto__.push((arguments[i__4500__auto___8060]));

var G__8061 = (i__4500__auto___8060 + (1));
i__4500__auto___8060 = G__8061;
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
cljs_react_material_ui.core.slide.cljs$lang$applyTo = (function (seq8058){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8058));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8063 = arguments.length;
var i__4500__auto___8064 = (0);
while(true){
if((i__4500__auto___8064 < len__4499__auto___8063)){
args__4502__auto__.push((arguments[i__4500__auto___8064]));

var G__8065 = (i__4500__auto___8064 + (1));
i__4500__auto___8064 = G__8065;
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
cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq8062){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8062));
});

cljs_react_material_ui.core.snackbar_content = (function cljs_react_material_ui$core$snackbar_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8067 = arguments.length;
var i__4500__auto___8068 = (0);
while(true){
if((i__4500__auto___8068 < len__4499__auto___8067)){
args__4502__auto__.push((arguments[i__4500__auto___8068]));

var G__8069 = (i__4500__auto___8068 + (1));
i__4500__auto___8068 = G__8069;
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
cljs_react_material_ui.core.snackbar_content.cljs$lang$applyTo = (function (seq8066){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8066));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8071 = arguments.length;
var i__4500__auto___8072 = (0);
while(true){
if((i__4500__auto___8072 < len__4499__auto___8071)){
args__4502__auto__.push((arguments[i__4500__auto___8072]));

var G__8073 = (i__4500__auto___8072 + (1));
i__4500__auto___8072 = G__8073;
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
cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq8070){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8070));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8075 = arguments.length;
var i__4500__auto___8076 = (0);
while(true){
if((i__4500__auto___8076 < len__4499__auto___8075)){
args__4502__auto__.push((arguments[i__4500__auto___8076]));

var G__8077 = (i__4500__auto___8076 + (1));
i__4500__auto___8076 = G__8077;
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
cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq8074){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8074));
});

cljs_react_material_ui.core.step_connector = (function cljs_react_material_ui$core$step_connector(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8079 = arguments.length;
var i__4500__auto___8080 = (0);
while(true){
if((i__4500__auto___8080 < len__4499__auto___8079)){
args__4502__auto__.push((arguments[i__4500__auto___8080]));

var G__8081 = (i__4500__auto___8080 + (1));
i__4500__auto___8080 = G__8081;
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
cljs_react_material_ui.core.step_connector.cljs$lang$applyTo = (function (seq8078){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8078));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8083 = arguments.length;
var i__4500__auto___8084 = (0);
while(true){
if((i__4500__auto___8084 < len__4499__auto___8083)){
args__4502__auto__.push((arguments[i__4500__auto___8084]));

var G__8085 = (i__4500__auto___8084 + (1));
i__4500__auto___8084 = G__8085;
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
cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq8082){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8082));
});

cljs_react_material_ui.core.step_icon = (function cljs_react_material_ui$core$step_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8087 = arguments.length;
var i__4500__auto___8088 = (0);
while(true){
if((i__4500__auto___8088 < len__4499__auto___8087)){
args__4502__auto__.push((arguments[i__4500__auto___8088]));

var G__8089 = (i__4500__auto___8088 + (1));
i__4500__auto___8088 = G__8089;
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
cljs_react_material_ui.core.step_icon.cljs$lang$applyTo = (function (seq8086){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8086));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8091 = arguments.length;
var i__4500__auto___8092 = (0);
while(true){
if((i__4500__auto___8092 < len__4499__auto___8091)){
args__4502__auto__.push((arguments[i__4500__auto___8092]));

var G__8093 = (i__4500__auto___8092 + (1));
i__4500__auto___8092 = G__8093;
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
cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq8090){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8090));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8095 = arguments.length;
var i__4500__auto___8096 = (0);
while(true){
if((i__4500__auto___8096 < len__4499__auto___8095)){
args__4502__auto__.push((arguments[i__4500__auto___8096]));

var G__8097 = (i__4500__auto___8096 + (1));
i__4500__auto___8096 = G__8097;
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
cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq8094){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8094));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8099 = arguments.length;
var i__4500__auto___8100 = (0);
while(true){
if((i__4500__auto___8100 < len__4499__auto___8099)){
args__4502__auto__.push((arguments[i__4500__auto___8100]));

var G__8101 = (i__4500__auto___8100 + (1));
i__4500__auto___8100 = G__8101;
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
cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq8098){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8098));
});

cljs_react_material_ui.core.swipeable_drawer = (function cljs_react_material_ui$core$swipeable_drawer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8103 = arguments.length;
var i__4500__auto___8104 = (0);
while(true){
if((i__4500__auto___8104 < len__4499__auto___8103)){
args__4502__auto__.push((arguments[i__4500__auto___8104]));

var G__8105 = (i__4500__auto___8104 + (1));
i__4500__auto___8104 = G__8105;
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
cljs_react_material_ui.core.swipeable_drawer.cljs$lang$applyTo = (function (seq8102){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8102));
});

cljs_react_material_ui.core.switch$ = (function cljs_react_material_ui$core$switch(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8107 = arguments.length;
var i__4500__auto___8108 = (0);
while(true){
if((i__4500__auto___8108 < len__4499__auto___8107)){
args__4502__auto__.push((arguments[i__4500__auto___8108]));

var G__8109 = (i__4500__auto___8108 + (1));
i__4500__auto___8108 = G__8109;
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
cljs_react_material_ui.core.switch$.cljs$lang$applyTo = (function (seq8106){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8106));
});

cljs_react_material_ui.core.switch_base = (function cljs_react_material_ui$core$switch_base(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8111 = arguments.length;
var i__4500__auto___8112 = (0);
while(true){
if((i__4500__auto___8112 < len__4499__auto___8111)){
args__4502__auto__.push((arguments[i__4500__auto___8112]));

var G__8113 = (i__4500__auto___8112 + (1));
i__4500__auto___8112 = G__8113;
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
cljs_react_material_ui.core.switch_base.cljs$lang$applyTo = (function (seq8110){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8110));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8115 = arguments.length;
var i__4500__auto___8116 = (0);
while(true){
if((i__4500__auto___8116 < len__4499__auto___8115)){
args__4502__auto__.push((arguments[i__4500__auto___8116]));

var G__8117 = (i__4500__auto___8116 + (1));
i__4500__auto___8116 = G__8117;
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
cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq8114){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8114));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8119 = arguments.length;
var i__4500__auto___8120 = (0);
while(true){
if((i__4500__auto___8120 < len__4499__auto___8119)){
args__4502__auto__.push((arguments[i__4500__auto___8120]));

var G__8121 = (i__4500__auto___8120 + (1));
i__4500__auto___8120 = G__8121;
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
cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq8118){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8118));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8123 = arguments.length;
var i__4500__auto___8124 = (0);
while(true){
if((i__4500__auto___8124 < len__4499__auto___8123)){
args__4502__auto__.push((arguments[i__4500__auto___8124]));

var G__8125 = (i__4500__auto___8124 + (1));
i__4500__auto___8124 = G__8125;
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
cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq8122){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8122));
});

cljs_react_material_ui.core.table_cell = (function cljs_react_material_ui$core$table_cell(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8127 = arguments.length;
var i__4500__auto___8128 = (0);
while(true){
if((i__4500__auto___8128 < len__4499__auto___8127)){
args__4502__auto__.push((arguments[i__4500__auto___8128]));

var G__8129 = (i__4500__auto___8128 + (1));
i__4500__auto___8128 = G__8129;
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
cljs_react_material_ui.core.table_cell.cljs$lang$applyTo = (function (seq8126){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8126));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8131 = arguments.length;
var i__4500__auto___8132 = (0);
while(true){
if((i__4500__auto___8132 < len__4499__auto___8131)){
args__4502__auto__.push((arguments[i__4500__auto___8132]));

var G__8133 = (i__4500__auto___8132 + (1));
i__4500__auto___8132 = G__8133;
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
cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq8130){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8130));
});

cljs_react_material_ui.core.table_head = (function cljs_react_material_ui$core$table_head(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8135 = arguments.length;
var i__4500__auto___8136 = (0);
while(true){
if((i__4500__auto___8136 < len__4499__auto___8135)){
args__4502__auto__.push((arguments[i__4500__auto___8136]));

var G__8137 = (i__4500__auto___8136 + (1));
i__4500__auto___8136 = G__8137;
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
cljs_react_material_ui.core.table_head.cljs$lang$applyTo = (function (seq8134){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8134));
});

cljs_react_material_ui.core.table_pagination = (function cljs_react_material_ui$core$table_pagination(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8139 = arguments.length;
var i__4500__auto___8140 = (0);
while(true){
if((i__4500__auto___8140 < len__4499__auto___8139)){
args__4502__auto__.push((arguments[i__4500__auto___8140]));

var G__8141 = (i__4500__auto___8140 + (1));
i__4500__auto___8140 = G__8141;
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
cljs_react_material_ui.core.table_pagination.cljs$lang$applyTo = (function (seq8138){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8138));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8143 = arguments.length;
var i__4500__auto___8144 = (0);
while(true){
if((i__4500__auto___8144 < len__4499__auto___8143)){
args__4502__auto__.push((arguments[i__4500__auto___8144]));

var G__8145 = (i__4500__auto___8144 + (1));
i__4500__auto___8144 = G__8145;
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
cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq8142){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8142));
});

cljs_react_material_ui.core.table_sort_label = (function cljs_react_material_ui$core$table_sort_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8147 = arguments.length;
var i__4500__auto___8148 = (0);
while(true){
if((i__4500__auto___8148 < len__4499__auto___8147)){
args__4502__auto__.push((arguments[i__4500__auto___8148]));

var G__8149 = (i__4500__auto___8148 + (1));
i__4500__auto___8148 = G__8149;
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
cljs_react_material_ui.core.table_sort_label.cljs$lang$applyTo = (function (seq8146){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8146));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8151 = arguments.length;
var i__4500__auto___8152 = (0);
while(true){
if((i__4500__auto___8152 < len__4499__auto___8151)){
args__4502__auto__.push((arguments[i__4500__auto___8152]));

var G__8153 = (i__4500__auto___8152 + (1));
i__4500__auto___8152 = G__8153;
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
cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq8150){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8150));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8155 = arguments.length;
var i__4500__auto___8156 = (0);
while(true){
if((i__4500__auto___8156 < len__4499__auto___8155)){
args__4502__auto__.push((arguments[i__4500__auto___8156]));

var G__8157 = (i__4500__auto___8156 + (1));
i__4500__auto___8156 = G__8157;
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
cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq8154){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8154));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8159 = arguments.length;
var i__4500__auto___8160 = (0);
while(true){
if((i__4500__auto___8160 < len__4499__auto___8159)){
args__4502__auto__.push((arguments[i__4500__auto___8160]));

var G__8161 = (i__4500__auto___8160 + (1));
i__4500__auto___8160 = G__8161;
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
cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq8158){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8158));
});

cljs_react_material_ui.core.tooltip = (function cljs_react_material_ui$core$tooltip(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8163 = arguments.length;
var i__4500__auto___8164 = (0);
while(true){
if((i__4500__auto___8164 < len__4499__auto___8163)){
args__4502__auto__.push((arguments[i__4500__auto___8164]));

var G__8165 = (i__4500__auto___8164 + (1));
i__4500__auto___8164 = G__8165;
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
cljs_react_material_ui.core.tooltip.cljs$lang$applyTo = (function (seq8162){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8162));
});

cljs_react_material_ui.core.touch_ripple = (function cljs_react_material_ui$core$touch_ripple(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8167 = arguments.length;
var i__4500__auto___8168 = (0);
while(true){
if((i__4500__auto___8168 < len__4499__auto___8167)){
args__4502__auto__.push((arguments[i__4500__auto___8168]));

var G__8169 = (i__4500__auto___8168 + (1));
i__4500__auto___8168 = G__8169;
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
cljs_react_material_ui.core.touch_ripple.cljs$lang$applyTo = (function (seq8166){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8166));
});

cljs_react_material_ui.core.typography = (function cljs_react_material_ui$core$typography(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8171 = arguments.length;
var i__4500__auto___8172 = (0);
while(true){
if((i__4500__auto___8172 < len__4499__auto___8171)){
args__4502__auto__.push((arguments[i__4500__auto___8172]));

var G__8173 = (i__4500__auto___8172 + (1));
i__4500__auto___8172 = G__8173;
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
cljs_react_material_ui.core.typography.cljs$lang$applyTo = (function (seq8170){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8170));
});

cljs_react_material_ui.core.zoom = (function cljs_react_material_ui$core$zoom(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8175 = arguments.length;
var i__4500__auto___8176 = (0);
while(true){
if((i__4500__auto___8176 < len__4499__auto___8175)){
args__4502__auto__.push((arguments[i__4500__auto___8176]));

var G__8177 = (i__4500__auto___8176 + (1));
i__4500__auto___8176 = G__8177;
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
cljs_react_material_ui.core.zoom.cljs$lang$applyTo = (function (seq8174){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8174));
});

