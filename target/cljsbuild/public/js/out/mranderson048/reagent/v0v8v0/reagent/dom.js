// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.reagent.v0v8v0.reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.template');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v8v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('mranderson048.reagent.v0v8v0.reagent.interop');
mranderson048.reagent.v0v8v0.reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof mranderson048.reagent.v0v8v0.reagent.dom.imported !== 'undefined'){
} else {
mranderson048.reagent.v0v8v0.reagent.dom.imported = null;
}
if(typeof mranderson048.reagent.v0v8v0.reagent.dom.roots !== 'undefined'){
} else {
mranderson048.reagent.v0v8v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mranderson048.reagent.v0v8v0.reagent.dom.unmount_comp = (function mranderson048$reagent$v0v8v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.dom.roots,cljs.core.dissoc,container);

return mranderson048.reagent.v0v8v0.reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
mranderson048.reagent.v0v8v0.reagent.dom.render_comp = (function mranderson048$reagent$v0v8v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_52412 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = true;

try{return mranderson048.reagent.v0v8v0.reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_52412){
return (function (){
var _STAR_always_update_STAR_52413 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson048.reagent.v0v8v0.reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_52413;
}});})(_STAR_always_update_STAR_52412))
);
}finally {mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_52412;
}});
mranderson048.reagent.v0v8v0.reagent.dom.re_render_component = (function mranderson048$reagent$v0v8v0$reagent$dom$re_render_component(comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson048.reagent.v0v8v0.reagent.dom.render = (function mranderson048$reagent$v0v8v0$reagent$dom$render(var_args){
var G__52415 = arguments.length;
switch (G__52415) {
case 2:
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render.call(null,comp,container,null);
});

mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return mranderson048.reagent.v0v8v0.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return mranderson048.reagent.v0v8v0.reagent.dom.render_comp.call(null,f,container,callback);
});

mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson048.reagent.v0v8v0.reagent.dom.unmount_component_at_node = (function mranderson048$reagent$v0v8v0$reagent$dom$unmount_component_at_node(container){
return mranderson048.reagent.v0v8v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson048.reagent.v0v8v0.reagent.dom.dom_node = (function mranderson048$reagent$v0v8v0$reagent$dom$dom_node(this$){
return mranderson048.reagent.v0v8v0.reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node = mranderson048.reagent.v0v8v0.reagent.dom.dom_node;
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
mranderson048.reagent.v0v8v0.reagent.dom.force_update_all = (function mranderson048$reagent$v0v8v0$reagent$dom$force_update_all(){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_.call(null);

var seq__52417_52421 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson048.reagent.v0v8v0.reagent.dom.roots)));
var chunk__52418_52422 = null;
var count__52419_52423 = (0);
var i__52420_52424 = (0);
while(true){
if((i__52420_52424 < count__52419_52423)){
var v_52425 = cljs.core._nth.call(null,chunk__52418_52422,i__52420_52424);
cljs.core.apply.call(null,mranderson048.reagent.v0v8v0.reagent.dom.re_render_component,v_52425);


var G__52426 = seq__52417_52421;
var G__52427 = chunk__52418_52422;
var G__52428 = count__52419_52423;
var G__52429 = (i__52420_52424 + (1));
seq__52417_52421 = G__52426;
chunk__52418_52422 = G__52427;
count__52419_52423 = G__52428;
i__52420_52424 = G__52429;
continue;
} else {
var temp__5457__auto___52430 = cljs.core.seq.call(null,seq__52417_52421);
if(temp__5457__auto___52430){
var seq__52417_52431__$1 = temp__5457__auto___52430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52417_52431__$1)){
var c__4319__auto___52432 = cljs.core.chunk_first.call(null,seq__52417_52431__$1);
var G__52433 = cljs.core.chunk_rest.call(null,seq__52417_52431__$1);
var G__52434 = c__4319__auto___52432;
var G__52435 = cljs.core.count.call(null,c__4319__auto___52432);
var G__52436 = (0);
seq__52417_52421 = G__52433;
chunk__52418_52422 = G__52434;
count__52419_52423 = G__52435;
i__52420_52424 = G__52436;
continue;
} else {
var v_52437 = cljs.core.first.call(null,seq__52417_52431__$1);
cljs.core.apply.call(null,mranderson048.reagent.v0v8v0.reagent.dom.re_render_component,v_52437);


var G__52438 = cljs.core.next.call(null,seq__52417_52431__$1);
var G__52439 = null;
var G__52440 = (0);
var G__52441 = (0);
seq__52417_52421 = G__52438;
chunk__52418_52422 = G__52439;
count__52419_52423 = G__52440;
i__52420_52424 = G__52441;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1536503788651
