// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__61730__delegate = function (x__61714__auto__){
if(cljs.core.truth_(spachat.core.mount_components)){
return cljs.core.apply.call(null,spachat.core.mount_components,x__61714__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("spachat.core/mount-components"),"' is missing"].join(''));
}
};
var G__61730 = function (var_args){
var x__61714__auto__ = null;
if (arguments.length > 0) {
var G__61731__i = 0, G__61731__a = new Array(arguments.length -  0);
while (G__61731__i < G__61731__a.length) {G__61731__a[G__61731__i] = arguments[G__61731__i + 0]; ++G__61731__i;}
  x__61714__auto__ = new cljs.core.IndexedSeq(G__61731__a,0,null);
} 
return G__61730__delegate.call(this,x__61714__auto__);};
G__61730.cljs$lang$maxFixedArity = 0;
G__61730.cljs$lang$applyTo = (function (arglist__61732){
var x__61714__auto__ = cljs.core.seq(arglist__61732);
return G__61730__delegate(x__61714__auto__);
});
G__61730.cljs$core$IFn$_invoke$arity$variadic = G__61730__delegate;
return G__61730;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1536503814960
