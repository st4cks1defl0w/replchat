// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
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
var _STAR_always_update_STAR_5221 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_5221){
return (function (){
var _STAR_always_update_STAR_5222 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_5222;
}});})(_STAR_always_update_STAR_5221))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_5221;
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
var G__5224 = arguments.length;
switch (G__5224) {
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

var seq__5226_5230 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__5227_5231 = null;
var count__5228_5232 = (0);
var i__5229_5233 = (0);
while(true){
if((i__5229_5233 < count__5228_5232)){
var v_5234 = cljs.core._nth.call(null,chunk__5227_5231,i__5229_5233);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_5234);


var G__5235 = seq__5226_5230;
var G__5236 = chunk__5227_5231;
var G__5237 = count__5228_5232;
var G__5238 = (i__5229_5233 + (1));
seq__5226_5230 = G__5235;
chunk__5227_5231 = G__5236;
count__5228_5232 = G__5237;
i__5229_5233 = G__5238;
continue;
} else {
var temp__5457__auto___5239 = cljs.core.seq.call(null,seq__5226_5230);
if(temp__5457__auto___5239){
var seq__5226_5240__$1 = temp__5457__auto___5239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5226_5240__$1)){
var c__4319__auto___5241 = cljs.core.chunk_first.call(null,seq__5226_5240__$1);
var G__5242 = cljs.core.chunk_rest.call(null,seq__5226_5240__$1);
var G__5243 = c__4319__auto___5241;
var G__5244 = cljs.core.count.call(null,c__4319__auto___5241);
var G__5245 = (0);
seq__5226_5230 = G__5242;
chunk__5227_5231 = G__5243;
count__5228_5232 = G__5244;
i__5229_5233 = G__5245;
continue;
} else {
var v_5246 = cljs.core.first.call(null,seq__5226_5240__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_5246);


var G__5247 = cljs.core.next.call(null,seq__5226_5240__$1);
var G__5248 = null;
var G__5249 = (0);
var G__5250 = (0);
seq__5226_5230 = G__5247;
chunk__5227_5231 = G__5248;
count__5228_5232 = G__5249;
i__5229_5233 = G__5250;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
