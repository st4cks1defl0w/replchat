// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_44047 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_44047){
return (function (){
var _STAR_always_update_STAR_44048 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_44048;
}});})(_STAR_always_update_STAR_44047))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_44047;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__44050 = arguments.length;
switch (G__44050) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__44052_44056 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__44053_44057 = null;
var count__44054_44058 = (0);
var i__44055_44059 = (0);
while(true){
if((i__44055_44059 < count__44054_44058)){
var v_44060 = cljs.core._nth.call(null,chunk__44053_44057,i__44055_44059);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_44060);


var G__44061 = seq__44052_44056;
var G__44062 = chunk__44053_44057;
var G__44063 = count__44054_44058;
var G__44064 = (i__44055_44059 + (1));
seq__44052_44056 = G__44061;
chunk__44053_44057 = G__44062;
count__44054_44058 = G__44063;
i__44055_44059 = G__44064;
continue;
} else {
var temp__5457__auto___44065 = cljs.core.seq.call(null,seq__44052_44056);
if(temp__5457__auto___44065){
var seq__44052_44066__$1 = temp__5457__auto___44065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44052_44066__$1)){
var c__4319__auto___44067 = cljs.core.chunk_first.call(null,seq__44052_44066__$1);
var G__44068 = cljs.core.chunk_rest.call(null,seq__44052_44066__$1);
var G__44069 = c__4319__auto___44067;
var G__44070 = cljs.core.count.call(null,c__4319__auto___44067);
var G__44071 = (0);
seq__44052_44056 = G__44068;
chunk__44053_44057 = G__44069;
count__44054_44058 = G__44070;
i__44055_44059 = G__44071;
continue;
} else {
var v_44072 = cljs.core.first.call(null,seq__44052_44066__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_44072);


var G__44073 = cljs.core.next.call(null,seq__44052_44066__$1);
var G__44074 = null;
var G__44075 = (0);
var G__44076 = (0);
seq__44052_44056 = G__44073;
chunk__44053_44057 = G__44074;
count__44054_44058 = G__44075;
i__44055_44059 = G__44076;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1536503754786
