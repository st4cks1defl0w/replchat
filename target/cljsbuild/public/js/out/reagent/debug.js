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
var G__43656__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43657__i = 0, G__43657__a = new Array(arguments.length -  0);
while (G__43657__i < G__43657__a.length) {G__43657__a[G__43657__i] = arguments[G__43657__i + 0]; ++G__43657__i;}
  args = new cljs.core.IndexedSeq(G__43657__a,0,null);
} 
return G__43656__delegate.call(this,args);};
G__43656.cljs$lang$maxFixedArity = 0;
G__43656.cljs$lang$applyTo = (function (arglist__43658){
var args = cljs.core.seq(arglist__43658);
return G__43656__delegate(args);
});
G__43656.cljs$core$IFn$_invoke$arity$variadic = G__43656__delegate;
return G__43656;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__43659__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43660__i = 0, G__43660__a = new Array(arguments.length -  0);
while (G__43660__i < G__43660__a.length) {G__43660__a[G__43660__i] = arguments[G__43660__i + 0]; ++G__43660__i;}
  args = new cljs.core.IndexedSeq(G__43660__a,0,null);
} 
return G__43659__delegate.call(this,args);};
G__43659.cljs$lang$maxFixedArity = 0;
G__43659.cljs$lang$applyTo = (function (arglist__43661){
var args = cljs.core.seq(arglist__43661);
return G__43659__delegate(args);
});
G__43659.cljs$core$IFn$_invoke$arity$variadic = G__43659__delegate;
return G__43659;
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

//# sourceMappingURL=debug.js.map?rel=1536503751675
