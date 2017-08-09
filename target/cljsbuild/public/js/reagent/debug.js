// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__4830__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__4830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4831__i = 0, G__4831__a = new Array(arguments.length -  0);
while (G__4831__i < G__4831__a.length) {G__4831__a[G__4831__i] = arguments[G__4831__i + 0]; ++G__4831__i;}
  args = new cljs.core.IndexedSeq(G__4831__a,0,null);
} 
return G__4830__delegate.call(this,args);};
G__4830.cljs$lang$maxFixedArity = 0;
G__4830.cljs$lang$applyTo = (function (arglist__4832){
var args = cljs.core.seq(arglist__4832);
return G__4830__delegate(args);
});
G__4830.cljs$core$IFn$_invoke$arity$variadic = G__4830__delegate;
return G__4830;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__4833__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__4833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4834__i = 0, G__4834__a = new Array(arguments.length -  0);
while (G__4834__i < G__4834__a.length) {G__4834__a[G__4834__i] = arguments[G__4834__i + 0]; ++G__4834__i;}
  args = new cljs.core.IndexedSeq(G__4834__a,0,null);
} 
return G__4833__delegate.call(this,args);};
G__4833.cljs$lang$maxFixedArity = 0;
G__4833.cljs$lang$applyTo = (function (arglist__4835){
var args = cljs.core.seq(arglist__4835);
return G__4833__delegate(args);
});
G__4833.cljs$core$IFn$_invoke$arity$variadic = G__4833__delegate;
return G__4833;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
