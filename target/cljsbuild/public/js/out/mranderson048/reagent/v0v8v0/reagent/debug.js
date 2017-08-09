// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v8v0.reagent.debug.has_console = typeof console !== 'undefined';
mranderson048.reagent.v0v8v0.reagent.debug.tracking = false;
if(typeof mranderson048.reagent.v0v8v0.reagent.debug.warnings !== 'undefined'){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof mranderson048.reagent.v0v8v0.reagent.debug.track_console !== 'undefined'){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__51714__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__51714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51715__i = 0, G__51715__a = new Array(arguments.length -  0);
while (G__51715__i < G__51715__a.length) {G__51715__a[G__51715__i] = arguments[G__51715__i + 0]; ++G__51715__i;}
  args = new cljs.core.IndexedSeq(G__51715__a,0,null);
} 
return G__51714__delegate.call(this,args);};
G__51714.cljs$lang$maxFixedArity = 0;
G__51714.cljs$lang$applyTo = (function (arglist__51716){
var args = cljs.core.seq(arglist__51716);
return G__51714__delegate(args);
});
G__51714.cljs$core$IFn$_invoke$arity$variadic = G__51714__delegate;
return G__51714;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__51717__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__51717 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51718__i = 0, G__51718__a = new Array(arguments.length -  0);
while (G__51718__i < G__51718__a.length) {G__51718__a[G__51718__i] = arguments[G__51718__i + 0]; ++G__51718__i;}
  args = new cljs.core.IndexedSeq(G__51718__a,0,null);
} 
return G__51717__delegate.call(this,args);};
G__51717.cljs$lang$maxFixedArity = 0;
G__51717.cljs$lang$applyTo = (function (arglist__51719){
var args = cljs.core.seq(arglist__51719);
return G__51717__delegate(args);
});
G__51717.cljs$core$IFn$_invoke$arity$variadic = G__51717__delegate;
return G__51717;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v8v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v8v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v8v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v8v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v8v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1536503783295
