// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__60261_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__60261_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__60262 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__60263 = null;
var count__60264 = (0);
var i__60265 = (0);
while(true){
if((i__60265 < count__60264)){
var n = cljs.core._nth.call(null,chunk__60263,i__60265);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__60266 = seq__60262;
var G__60267 = chunk__60263;
var G__60268 = count__60264;
var G__60269 = (i__60265 + (1));
seq__60262 = G__60266;
chunk__60263 = G__60267;
count__60264 = G__60268;
i__60265 = G__60269;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__60262);
if(temp__5457__auto__){
var seq__60262__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60262__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__60262__$1);
var G__60270 = cljs.core.chunk_rest.call(null,seq__60262__$1);
var G__60271 = c__4319__auto__;
var G__60272 = cljs.core.count.call(null,c__4319__auto__);
var G__60273 = (0);
seq__60262 = G__60270;
chunk__60263 = G__60271;
count__60264 = G__60272;
i__60265 = G__60273;
continue;
} else {
var n = cljs.core.first.call(null,seq__60262__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__60274 = cljs.core.next.call(null,seq__60262__$1);
var G__60275 = null;
var G__60276 = (0);
var G__60277 = (0);
seq__60262 = G__60274;
chunk__60263 = G__60275;
count__60264 = G__60276;
i__60265 = G__60277;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__60278){
var vec__60279 = p__60278;
var _ = cljs.core.nth.call(null,vec__60279,(0),null);
var v = cljs.core.nth.call(null,vec__60279,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__60282){
var vec__60283 = p__60282;
var k = cljs.core.nth.call(null,vec__60283,(0),null);
var v = cljs.core.nth.call(null,vec__60283,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__60295_60303 = cljs.core.seq.call(null,deps);
var chunk__60296_60304 = null;
var count__60297_60305 = (0);
var i__60298_60306 = (0);
while(true){
if((i__60298_60306 < count__60297_60305)){
var dep_60307 = cljs.core._nth.call(null,chunk__60296_60304,i__60298_60306);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_60307;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_60307));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_60307,(depth + (1)),state);
} else {
}


var G__60308 = seq__60295_60303;
var G__60309 = chunk__60296_60304;
var G__60310 = count__60297_60305;
var G__60311 = (i__60298_60306 + (1));
seq__60295_60303 = G__60308;
chunk__60296_60304 = G__60309;
count__60297_60305 = G__60310;
i__60298_60306 = G__60311;
continue;
} else {
var temp__5457__auto___60312 = cljs.core.seq.call(null,seq__60295_60303);
if(temp__5457__auto___60312){
var seq__60295_60313__$1 = temp__5457__auto___60312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60295_60313__$1)){
var c__4319__auto___60314 = cljs.core.chunk_first.call(null,seq__60295_60313__$1);
var G__60315 = cljs.core.chunk_rest.call(null,seq__60295_60313__$1);
var G__60316 = c__4319__auto___60314;
var G__60317 = cljs.core.count.call(null,c__4319__auto___60314);
var G__60318 = (0);
seq__60295_60303 = G__60315;
chunk__60296_60304 = G__60316;
count__60297_60305 = G__60317;
i__60298_60306 = G__60318;
continue;
} else {
var dep_60319 = cljs.core.first.call(null,seq__60295_60313__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_60319;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_60319));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_60319,(depth + (1)),state);
} else {
}


var G__60320 = cljs.core.next.call(null,seq__60295_60313__$1);
var G__60321 = null;
var G__60322 = (0);
var G__60323 = (0);
seq__60295_60303 = G__60320;
chunk__60296_60304 = G__60321;
count__60297_60305 = G__60322;
i__60298_60306 = G__60323;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__60299){
var vec__60300 = p__60299;
var seq__60301 = cljs.core.seq.call(null,vec__60300);
var first__60302 = cljs.core.first.call(null,seq__60301);
var seq__60301__$1 = cljs.core.next.call(null,seq__60301);
var x = first__60302;
var xs = seq__60301__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__60300,seq__60301,first__60302,seq__60301__$1,x,xs,get_deps__$1){
return (function (p1__60286_SHARP_){
return clojure.set.difference.call(null,p1__60286_SHARP_,x);
});})(vec__60300,seq__60301,first__60302,seq__60301__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__60324 = cljs.core.seq.call(null,provides);
var chunk__60325 = null;
var count__60326 = (0);
var i__60327 = (0);
while(true){
if((i__60327 < count__60326)){
var prov = cljs.core._nth.call(null,chunk__60325,i__60327);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__60328_60336 = cljs.core.seq.call(null,requires);
var chunk__60329_60337 = null;
var count__60330_60338 = (0);
var i__60331_60339 = (0);
while(true){
if((i__60331_60339 < count__60330_60338)){
var req_60340 = cljs.core._nth.call(null,chunk__60329_60337,i__60331_60339);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_60340,prov);


var G__60341 = seq__60328_60336;
var G__60342 = chunk__60329_60337;
var G__60343 = count__60330_60338;
var G__60344 = (i__60331_60339 + (1));
seq__60328_60336 = G__60341;
chunk__60329_60337 = G__60342;
count__60330_60338 = G__60343;
i__60331_60339 = G__60344;
continue;
} else {
var temp__5457__auto___60345 = cljs.core.seq.call(null,seq__60328_60336);
if(temp__5457__auto___60345){
var seq__60328_60346__$1 = temp__5457__auto___60345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60328_60346__$1)){
var c__4319__auto___60347 = cljs.core.chunk_first.call(null,seq__60328_60346__$1);
var G__60348 = cljs.core.chunk_rest.call(null,seq__60328_60346__$1);
var G__60349 = c__4319__auto___60347;
var G__60350 = cljs.core.count.call(null,c__4319__auto___60347);
var G__60351 = (0);
seq__60328_60336 = G__60348;
chunk__60329_60337 = G__60349;
count__60330_60338 = G__60350;
i__60331_60339 = G__60351;
continue;
} else {
var req_60352 = cljs.core.first.call(null,seq__60328_60346__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_60352,prov);


var G__60353 = cljs.core.next.call(null,seq__60328_60346__$1);
var G__60354 = null;
var G__60355 = (0);
var G__60356 = (0);
seq__60328_60336 = G__60353;
chunk__60329_60337 = G__60354;
count__60330_60338 = G__60355;
i__60331_60339 = G__60356;
continue;
}
} else {
}
}
break;
}


var G__60357 = seq__60324;
var G__60358 = chunk__60325;
var G__60359 = count__60326;
var G__60360 = (i__60327 + (1));
seq__60324 = G__60357;
chunk__60325 = G__60358;
count__60326 = G__60359;
i__60327 = G__60360;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__60324);
if(temp__5457__auto__){
var seq__60324__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60324__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__60324__$1);
var G__60361 = cljs.core.chunk_rest.call(null,seq__60324__$1);
var G__60362 = c__4319__auto__;
var G__60363 = cljs.core.count.call(null,c__4319__auto__);
var G__60364 = (0);
seq__60324 = G__60361;
chunk__60325 = G__60362;
count__60326 = G__60363;
i__60327 = G__60364;
continue;
} else {
var prov = cljs.core.first.call(null,seq__60324__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__60332_60365 = cljs.core.seq.call(null,requires);
var chunk__60333_60366 = null;
var count__60334_60367 = (0);
var i__60335_60368 = (0);
while(true){
if((i__60335_60368 < count__60334_60367)){
var req_60369 = cljs.core._nth.call(null,chunk__60333_60366,i__60335_60368);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_60369,prov);


var G__60370 = seq__60332_60365;
var G__60371 = chunk__60333_60366;
var G__60372 = count__60334_60367;
var G__60373 = (i__60335_60368 + (1));
seq__60332_60365 = G__60370;
chunk__60333_60366 = G__60371;
count__60334_60367 = G__60372;
i__60335_60368 = G__60373;
continue;
} else {
var temp__5457__auto___60374__$1 = cljs.core.seq.call(null,seq__60332_60365);
if(temp__5457__auto___60374__$1){
var seq__60332_60375__$1 = temp__5457__auto___60374__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60332_60375__$1)){
var c__4319__auto___60376 = cljs.core.chunk_first.call(null,seq__60332_60375__$1);
var G__60377 = cljs.core.chunk_rest.call(null,seq__60332_60375__$1);
var G__60378 = c__4319__auto___60376;
var G__60379 = cljs.core.count.call(null,c__4319__auto___60376);
var G__60380 = (0);
seq__60332_60365 = G__60377;
chunk__60333_60366 = G__60378;
count__60334_60367 = G__60379;
i__60335_60368 = G__60380;
continue;
} else {
var req_60381 = cljs.core.first.call(null,seq__60332_60375__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_60381,prov);


var G__60382 = cljs.core.next.call(null,seq__60332_60375__$1);
var G__60383 = null;
var G__60384 = (0);
var G__60385 = (0);
seq__60332_60365 = G__60382;
chunk__60333_60366 = G__60383;
count__60334_60367 = G__60384;
i__60335_60368 = G__60385;
continue;
}
} else {
}
}
break;
}


var G__60386 = cljs.core.next.call(null,seq__60324__$1);
var G__60387 = null;
var G__60388 = (0);
var G__60389 = (0);
seq__60324 = G__60386;
chunk__60325 = G__60387;
count__60326 = G__60388;
i__60327 = G__60389;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__60390_60394 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__60391_60395 = null;
var count__60392_60396 = (0);
var i__60393_60397 = (0);
while(true){
if((i__60393_60397 < count__60392_60396)){
var ns_60398 = cljs.core._nth.call(null,chunk__60391_60395,i__60393_60397);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_60398);


var G__60399 = seq__60390_60394;
var G__60400 = chunk__60391_60395;
var G__60401 = count__60392_60396;
var G__60402 = (i__60393_60397 + (1));
seq__60390_60394 = G__60399;
chunk__60391_60395 = G__60400;
count__60392_60396 = G__60401;
i__60393_60397 = G__60402;
continue;
} else {
var temp__5457__auto___60403 = cljs.core.seq.call(null,seq__60390_60394);
if(temp__5457__auto___60403){
var seq__60390_60404__$1 = temp__5457__auto___60403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60390_60404__$1)){
var c__4319__auto___60405 = cljs.core.chunk_first.call(null,seq__60390_60404__$1);
var G__60406 = cljs.core.chunk_rest.call(null,seq__60390_60404__$1);
var G__60407 = c__4319__auto___60405;
var G__60408 = cljs.core.count.call(null,c__4319__auto___60405);
var G__60409 = (0);
seq__60390_60394 = G__60406;
chunk__60391_60395 = G__60407;
count__60392_60396 = G__60408;
i__60393_60397 = G__60409;
continue;
} else {
var ns_60410 = cljs.core.first.call(null,seq__60390_60404__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_60410);


var G__60411 = cljs.core.next.call(null,seq__60390_60404__$1);
var G__60412 = null;
var G__60413 = (0);
var G__60414 = (0);
seq__60390_60394 = G__60411;
chunk__60391_60395 = G__60412;
count__60392_60396 = G__60413;
i__60393_60397 = G__60414;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__60415__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__60415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60416__i = 0, G__60416__a = new Array(arguments.length -  0);
while (G__60416__i < G__60416__a.length) {G__60416__a[G__60416__i] = arguments[G__60416__i + 0]; ++G__60416__i;}
  args = new cljs.core.IndexedSeq(G__60416__a,0,null);
} 
return G__60415__delegate.call(this,args);};
G__60415.cljs$lang$maxFixedArity = 0;
G__60415.cljs$lang$applyTo = (function (arglist__60417){
var args = cljs.core.seq(arglist__60417);
return G__60415__delegate(args);
});
G__60415.cljs$core$IFn$_invoke$arity$variadic = G__60415__delegate;
return G__60415;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__60418_SHARP_,p2__60419_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60418_SHARP_)].join('')),p2__60419_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__60420_SHARP_,p2__60421_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60420_SHARP_)].join(''),p2__60421_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__60422 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__60422.addCallback(((function (G__60422){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__60422))
);

G__60422.addErrback(((function (G__60422){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__60422))
);

return G__60422;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e60423){if((e60423 instanceof Error)){
var e = e60423;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e60423;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e60424){if((e60424 instanceof Error)){
var e = e60424;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e60424;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__60425 = cljs.core._EQ_;
var expr__60426 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__60425.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__60426))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__60425.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__60426))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__60425.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__60426))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__60425,expr__60426){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__60425,expr__60426))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__60428,callback){
var map__60429 = p__60428;
var map__60429__$1 = ((((!((map__60429 == null)))?(((((map__60429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60429):map__60429);
var file_msg = map__60429__$1;
var request_url = cljs.core.get.call(null,map__60429__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__60429,map__60429__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__60429,map__60429__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__58254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto__){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto__){
return (function (state_60467){
var state_val_60468 = (state_60467[(1)]);
if((state_val_60468 === (7))){
var inst_60463 = (state_60467[(2)]);
var state_60467__$1 = state_60467;
var statearr_60469_60495 = state_60467__$1;
(statearr_60469_60495[(2)] = inst_60463);

(statearr_60469_60495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (1))){
var state_60467__$1 = state_60467;
var statearr_60470_60496 = state_60467__$1;
(statearr_60470_60496[(2)] = null);

(statearr_60470_60496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (4))){
var inst_60433 = (state_60467[(7)]);
var inst_60433__$1 = (state_60467[(2)]);
var state_60467__$1 = (function (){var statearr_60471 = state_60467;
(statearr_60471[(7)] = inst_60433__$1);

return statearr_60471;
})();
if(cljs.core.truth_(inst_60433__$1)){
var statearr_60472_60497 = state_60467__$1;
(statearr_60472_60497[(1)] = (5));

} else {
var statearr_60473_60498 = state_60467__$1;
(statearr_60473_60498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (15))){
var inst_60448 = (state_60467[(8)]);
var inst_60446 = (state_60467[(9)]);
var inst_60450 = inst_60448.call(null,inst_60446);
var state_60467__$1 = state_60467;
var statearr_60474_60499 = state_60467__$1;
(statearr_60474_60499[(2)] = inst_60450);

(statearr_60474_60499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (13))){
var inst_60457 = (state_60467[(2)]);
var state_60467__$1 = state_60467;
var statearr_60475_60500 = state_60467__$1;
(statearr_60475_60500[(2)] = inst_60457);

(statearr_60475_60500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (6))){
var state_60467__$1 = state_60467;
var statearr_60476_60501 = state_60467__$1;
(statearr_60476_60501[(2)] = null);

(statearr_60476_60501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (17))){
var inst_60454 = (state_60467[(2)]);
var state_60467__$1 = state_60467;
var statearr_60477_60502 = state_60467__$1;
(statearr_60477_60502[(2)] = inst_60454);

(statearr_60477_60502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (3))){
var inst_60465 = (state_60467[(2)]);
var state_60467__$1 = state_60467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60467__$1,inst_60465);
} else {
if((state_val_60468 === (12))){
var state_60467__$1 = state_60467;
var statearr_60478_60503 = state_60467__$1;
(statearr_60478_60503[(2)] = null);

(statearr_60478_60503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (2))){
var state_60467__$1 = state_60467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60467__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_60468 === (11))){
var inst_60438 = (state_60467[(10)]);
var inst_60444 = figwheel.client.file_reloading.blocking_load.call(null,inst_60438);
var state_60467__$1 = state_60467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60467__$1,(14),inst_60444);
} else {
if((state_val_60468 === (9))){
var inst_60438 = (state_60467[(10)]);
var state_60467__$1 = state_60467;
if(cljs.core.truth_(inst_60438)){
var statearr_60479_60504 = state_60467__$1;
(statearr_60479_60504[(1)] = (11));

} else {
var statearr_60480_60505 = state_60467__$1;
(statearr_60480_60505[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (5))){
var inst_60433 = (state_60467[(7)]);
var inst_60439 = (state_60467[(11)]);
var inst_60438 = cljs.core.nth.call(null,inst_60433,(0),null);
var inst_60439__$1 = cljs.core.nth.call(null,inst_60433,(1),null);
var state_60467__$1 = (function (){var statearr_60481 = state_60467;
(statearr_60481[(10)] = inst_60438);

(statearr_60481[(11)] = inst_60439__$1);

return statearr_60481;
})();
if(cljs.core.truth_(inst_60439__$1)){
var statearr_60482_60506 = state_60467__$1;
(statearr_60482_60506[(1)] = (8));

} else {
var statearr_60483_60507 = state_60467__$1;
(statearr_60483_60507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (14))){
var inst_60438 = (state_60467[(10)]);
var inst_60448 = (state_60467[(8)]);
var inst_60446 = (state_60467[(2)]);
var inst_60447 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_60448__$1 = cljs.core.get.call(null,inst_60447,inst_60438);
var state_60467__$1 = (function (){var statearr_60484 = state_60467;
(statearr_60484[(8)] = inst_60448__$1);

(statearr_60484[(9)] = inst_60446);

return statearr_60484;
})();
if(cljs.core.truth_(inst_60448__$1)){
var statearr_60485_60508 = state_60467__$1;
(statearr_60485_60508[(1)] = (15));

} else {
var statearr_60486_60509 = state_60467__$1;
(statearr_60486_60509[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (16))){
var inst_60446 = (state_60467[(9)]);
var inst_60452 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_60446);
var state_60467__$1 = state_60467;
var statearr_60487_60510 = state_60467__$1;
(statearr_60487_60510[(2)] = inst_60452);

(statearr_60487_60510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (10))){
var inst_60459 = (state_60467[(2)]);
var state_60467__$1 = (function (){var statearr_60488 = state_60467;
(statearr_60488[(12)] = inst_60459);

return statearr_60488;
})();
var statearr_60489_60511 = state_60467__$1;
(statearr_60489_60511[(2)] = null);

(statearr_60489_60511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60468 === (8))){
var inst_60439 = (state_60467[(11)]);
var inst_60441 = eval(inst_60439);
var state_60467__$1 = state_60467;
var statearr_60490_60512 = state_60467__$1;
(statearr_60490_60512[(2)] = inst_60441);

(statearr_60490_60512[(1)] = (10));


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
});})(c__58254__auto__))
;
return ((function (switch__58164__auto__,c__58254__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__58165__auto__ = null;
var figwheel$client$file_reloading$state_machine__58165__auto____0 = (function (){
var statearr_60491 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60491[(0)] = figwheel$client$file_reloading$state_machine__58165__auto__);

(statearr_60491[(1)] = (1));

return statearr_60491;
});
var figwheel$client$file_reloading$state_machine__58165__auto____1 = (function (state_60467){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_60467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e60492){if((e60492 instanceof Object)){
var ex__58168__auto__ = e60492;
var statearr_60493_60513 = state_60467;
(statearr_60493_60513[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60514 = state_60467;
state_60467 = G__60514;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__58165__auto__ = function(state_60467){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__58165__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__58165__auto____1.call(this,state_60467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__58165__auto____0;
figwheel$client$file_reloading$state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__58165__auto____1;
return figwheel$client$file_reloading$state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto__))
})();
var state__58256__auto__ = (function (){var statearr_60494 = f__58255__auto__.call(null);
(statearr_60494[(6)] = c__58254__auto__);

return statearr_60494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto__))
);

return c__58254__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__60516 = arguments.length;
switch (G__60516) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__60518,callback){
var map__60519 = p__60518;
var map__60519__$1 = ((((!((map__60519 == null)))?(((((map__60519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60519):map__60519);
var file_msg = map__60519__$1;
var namespace = cljs.core.get.call(null,map__60519__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__60519,map__60519__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__60519,map__60519__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__60521){
var map__60522 = p__60521;
var map__60522__$1 = ((((!((map__60522 == null)))?(((((map__60522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60522):map__60522);
var file_msg = map__60522__$1;
var namespace = cljs.core.get.call(null,map__60522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__60524){
var map__60525 = p__60524;
var map__60525__$1 = ((((!((map__60525 == null)))?(((((map__60525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60525):map__60525);
var file_msg = map__60525__$1;
var namespace = cljs.core.get.call(null,map__60525__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__60527,callback){
var map__60528 = p__60527;
var map__60528__$1 = ((((!((map__60528 == null)))?(((((map__60528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60528):map__60528);
var file_msg = map__60528__$1;
var request_url = cljs.core.get.call(null,map__60528__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__60528__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__58254__auto___60578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto___60578,out){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto___60578,out){
return (function (state_60563){
var state_val_60564 = (state_60563[(1)]);
if((state_val_60564 === (1))){
var inst_60537 = cljs.core.seq.call(null,files);
var inst_60538 = cljs.core.first.call(null,inst_60537);
var inst_60539 = cljs.core.next.call(null,inst_60537);
var inst_60540 = files;
var state_60563__$1 = (function (){var statearr_60565 = state_60563;
(statearr_60565[(7)] = inst_60539);

(statearr_60565[(8)] = inst_60540);

(statearr_60565[(9)] = inst_60538);

return statearr_60565;
})();
var statearr_60566_60579 = state_60563__$1;
(statearr_60566_60579[(2)] = null);

(statearr_60566_60579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60564 === (2))){
var inst_60546 = (state_60563[(10)]);
var inst_60540 = (state_60563[(8)]);
var inst_60545 = cljs.core.seq.call(null,inst_60540);
var inst_60546__$1 = cljs.core.first.call(null,inst_60545);
var inst_60547 = cljs.core.next.call(null,inst_60545);
var inst_60548 = (inst_60546__$1 == null);
var inst_60549 = cljs.core.not.call(null,inst_60548);
var state_60563__$1 = (function (){var statearr_60567 = state_60563;
(statearr_60567[(11)] = inst_60547);

(statearr_60567[(10)] = inst_60546__$1);

return statearr_60567;
})();
if(inst_60549){
var statearr_60568_60580 = state_60563__$1;
(statearr_60568_60580[(1)] = (4));

} else {
var statearr_60569_60581 = state_60563__$1;
(statearr_60569_60581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60564 === (3))){
var inst_60561 = (state_60563[(2)]);
var state_60563__$1 = state_60563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60563__$1,inst_60561);
} else {
if((state_val_60564 === (4))){
var inst_60546 = (state_60563[(10)]);
var inst_60551 = figwheel.client.file_reloading.reload_js_file.call(null,inst_60546);
var state_60563__$1 = state_60563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60563__$1,(7),inst_60551);
} else {
if((state_val_60564 === (5))){
var inst_60557 = cljs.core.async.close_BANG_.call(null,out);
var state_60563__$1 = state_60563;
var statearr_60570_60582 = state_60563__$1;
(statearr_60570_60582[(2)] = inst_60557);

(statearr_60570_60582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60564 === (6))){
var inst_60559 = (state_60563[(2)]);
var state_60563__$1 = state_60563;
var statearr_60571_60583 = state_60563__$1;
(statearr_60571_60583[(2)] = inst_60559);

(statearr_60571_60583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60564 === (7))){
var inst_60547 = (state_60563[(11)]);
var inst_60553 = (state_60563[(2)]);
var inst_60554 = cljs.core.async.put_BANG_.call(null,out,inst_60553);
var inst_60540 = inst_60547;
var state_60563__$1 = (function (){var statearr_60572 = state_60563;
(statearr_60572[(12)] = inst_60554);

(statearr_60572[(8)] = inst_60540);

return statearr_60572;
})();
var statearr_60573_60584 = state_60563__$1;
(statearr_60573_60584[(2)] = null);

(statearr_60573_60584[(1)] = (2));


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
});})(c__58254__auto___60578,out))
;
return ((function (switch__58164__auto__,c__58254__auto___60578,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto____0 = (function (){
var statearr_60574 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60574[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto__);

(statearr_60574[(1)] = (1));

return statearr_60574;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto____1 = (function (state_60563){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_60563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e60575){if((e60575 instanceof Object)){
var ex__58168__auto__ = e60575;
var statearr_60576_60585 = state_60563;
(statearr_60576_60585[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60586 = state_60563;
state_60563 = G__60586;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto__ = function(state_60563){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto____1.call(this,state_60563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto___60578,out))
})();
var state__58256__auto__ = (function (){var statearr_60577 = f__58255__auto__.call(null);
(statearr_60577[(6)] = c__58254__auto___60578);

return statearr_60577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto___60578,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__60587,opts){
var map__60588 = p__60587;
var map__60588__$1 = ((((!((map__60588 == null)))?(((((map__60588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60588):map__60588);
var eval_body = cljs.core.get.call(null,map__60588__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__60588__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e60590){var e = e60590;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__60591_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__60591_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__60592){
var vec__60593 = p__60592;
var k = cljs.core.nth.call(null,vec__60593,(0),null);
var v = cljs.core.nth.call(null,vec__60593,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__60596){
var vec__60597 = p__60596;
var k = cljs.core.nth.call(null,vec__60597,(0),null);
var v = cljs.core.nth.call(null,vec__60597,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__60603,p__60604){
var map__60605 = p__60603;
var map__60605__$1 = ((((!((map__60605 == null)))?(((((map__60605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60605):map__60605);
var opts = map__60605__$1;
var before_jsload = cljs.core.get.call(null,map__60605__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__60605__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__60605__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__60606 = p__60604;
var map__60606__$1 = ((((!((map__60606 == null)))?(((((map__60606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60606):map__60606);
var msg = map__60606__$1;
var files = cljs.core.get.call(null,map__60606__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__60606__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__60606__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__58254__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__58255__auto__ = (function (){var switch__58164__auto__ = ((function (c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_60760){
var state_val_60761 = (state_60760[(1)]);
if((state_val_60761 === (7))){
var inst_60621 = (state_60760[(7)]);
var inst_60620 = (state_60760[(8)]);
var inst_60623 = (state_60760[(9)]);
var inst_60622 = (state_60760[(10)]);
var inst_60628 = cljs.core._nth.call(null,inst_60621,inst_60623);
var inst_60629 = figwheel.client.file_reloading.eval_body.call(null,inst_60628,opts);
var inst_60630 = (inst_60623 + (1));
var tmp60762 = inst_60621;
var tmp60763 = inst_60620;
var tmp60764 = inst_60622;
var inst_60620__$1 = tmp60763;
var inst_60621__$1 = tmp60762;
var inst_60622__$1 = tmp60764;
var inst_60623__$1 = inst_60630;
var state_60760__$1 = (function (){var statearr_60765 = state_60760;
(statearr_60765[(7)] = inst_60621__$1);

(statearr_60765[(11)] = inst_60629);

(statearr_60765[(8)] = inst_60620__$1);

(statearr_60765[(9)] = inst_60623__$1);

(statearr_60765[(10)] = inst_60622__$1);

return statearr_60765;
})();
var statearr_60766_60849 = state_60760__$1;
(statearr_60766_60849[(2)] = null);

(statearr_60766_60849[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (20))){
var inst_60663 = (state_60760[(12)]);
var inst_60671 = figwheel.client.file_reloading.sort_files.call(null,inst_60663);
var state_60760__$1 = state_60760;
var statearr_60767_60850 = state_60760__$1;
(statearr_60767_60850[(2)] = inst_60671);

(statearr_60767_60850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (27))){
var state_60760__$1 = state_60760;
var statearr_60768_60851 = state_60760__$1;
(statearr_60768_60851[(2)] = null);

(statearr_60768_60851[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (1))){
var inst_60612 = (state_60760[(13)]);
var inst_60609 = before_jsload.call(null,files);
var inst_60610 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_60611 = (function (){return ((function (inst_60612,inst_60609,inst_60610,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60600_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__60600_SHARP_);
});
;})(inst_60612,inst_60609,inst_60610,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60612__$1 = cljs.core.filter.call(null,inst_60611,files);
var inst_60613 = cljs.core.not_empty.call(null,inst_60612__$1);
var state_60760__$1 = (function (){var statearr_60769 = state_60760;
(statearr_60769[(14)] = inst_60610);

(statearr_60769[(15)] = inst_60609);

(statearr_60769[(13)] = inst_60612__$1);

return statearr_60769;
})();
if(cljs.core.truth_(inst_60613)){
var statearr_60770_60852 = state_60760__$1;
(statearr_60770_60852[(1)] = (2));

} else {
var statearr_60771_60853 = state_60760__$1;
(statearr_60771_60853[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (24))){
var state_60760__$1 = state_60760;
var statearr_60772_60854 = state_60760__$1;
(statearr_60772_60854[(2)] = null);

(statearr_60772_60854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (39))){
var inst_60713 = (state_60760[(16)]);
var state_60760__$1 = state_60760;
var statearr_60773_60855 = state_60760__$1;
(statearr_60773_60855[(2)] = inst_60713);

(statearr_60773_60855[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (46))){
var inst_60755 = (state_60760[(2)]);
var state_60760__$1 = state_60760;
var statearr_60774_60856 = state_60760__$1;
(statearr_60774_60856[(2)] = inst_60755);

(statearr_60774_60856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (4))){
var inst_60657 = (state_60760[(2)]);
var inst_60658 = cljs.core.List.EMPTY;
var inst_60659 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_60658);
var inst_60660 = (function (){return ((function (inst_60657,inst_60658,inst_60659,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60601_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__60601_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__60601_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__60601_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_60657,inst_60658,inst_60659,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60661 = cljs.core.filter.call(null,inst_60660,files);
var inst_60662 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_60663 = cljs.core.concat.call(null,inst_60661,inst_60662);
var state_60760__$1 = (function (){var statearr_60775 = state_60760;
(statearr_60775[(17)] = inst_60657);

(statearr_60775[(18)] = inst_60659);

(statearr_60775[(12)] = inst_60663);

return statearr_60775;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_60776_60857 = state_60760__$1;
(statearr_60776_60857[(1)] = (16));

} else {
var statearr_60777_60858 = state_60760__$1;
(statearr_60777_60858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (15))){
var inst_60647 = (state_60760[(2)]);
var state_60760__$1 = state_60760;
var statearr_60778_60859 = state_60760__$1;
(statearr_60778_60859[(2)] = inst_60647);

(statearr_60778_60859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (21))){
var inst_60673 = (state_60760[(19)]);
var inst_60673__$1 = (state_60760[(2)]);
var inst_60674 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_60673__$1);
var state_60760__$1 = (function (){var statearr_60779 = state_60760;
(statearr_60779[(19)] = inst_60673__$1);

return statearr_60779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60760__$1,(22),inst_60674);
} else {
if((state_val_60761 === (31))){
var inst_60758 = (state_60760[(2)]);
var state_60760__$1 = state_60760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60760__$1,inst_60758);
} else {
if((state_val_60761 === (32))){
var inst_60713 = (state_60760[(16)]);
var inst_60718 = inst_60713.cljs$lang$protocol_mask$partition0$;
var inst_60719 = (inst_60718 & (64));
var inst_60720 = inst_60713.cljs$core$ISeq$;
var inst_60721 = (cljs.core.PROTOCOL_SENTINEL === inst_60720);
var inst_60722 = ((inst_60719) || (inst_60721));
var state_60760__$1 = state_60760;
if(cljs.core.truth_(inst_60722)){
var statearr_60780_60860 = state_60760__$1;
(statearr_60780_60860[(1)] = (35));

} else {
var statearr_60781_60861 = state_60760__$1;
(statearr_60781_60861[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (40))){
var inst_60735 = (state_60760[(20)]);
var inst_60734 = (state_60760[(2)]);
var inst_60735__$1 = cljs.core.get.call(null,inst_60734,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_60736 = cljs.core.get.call(null,inst_60734,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_60737 = cljs.core.not_empty.call(null,inst_60735__$1);
var state_60760__$1 = (function (){var statearr_60782 = state_60760;
(statearr_60782[(20)] = inst_60735__$1);

(statearr_60782[(21)] = inst_60736);

return statearr_60782;
})();
if(cljs.core.truth_(inst_60737)){
var statearr_60783_60862 = state_60760__$1;
(statearr_60783_60862[(1)] = (41));

} else {
var statearr_60784_60863 = state_60760__$1;
(statearr_60784_60863[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (33))){
var state_60760__$1 = state_60760;
var statearr_60785_60864 = state_60760__$1;
(statearr_60785_60864[(2)] = false);

(statearr_60785_60864[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (13))){
var inst_60633 = (state_60760[(22)]);
var inst_60637 = cljs.core.chunk_first.call(null,inst_60633);
var inst_60638 = cljs.core.chunk_rest.call(null,inst_60633);
var inst_60639 = cljs.core.count.call(null,inst_60637);
var inst_60620 = inst_60638;
var inst_60621 = inst_60637;
var inst_60622 = inst_60639;
var inst_60623 = (0);
var state_60760__$1 = (function (){var statearr_60786 = state_60760;
(statearr_60786[(7)] = inst_60621);

(statearr_60786[(8)] = inst_60620);

(statearr_60786[(9)] = inst_60623);

(statearr_60786[(10)] = inst_60622);

return statearr_60786;
})();
var statearr_60787_60865 = state_60760__$1;
(statearr_60787_60865[(2)] = null);

(statearr_60787_60865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (22))){
var inst_60681 = (state_60760[(23)]);
var inst_60676 = (state_60760[(24)]);
var inst_60677 = (state_60760[(25)]);
var inst_60673 = (state_60760[(19)]);
var inst_60676__$1 = (state_60760[(2)]);
var inst_60677__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_60676__$1);
var inst_60678 = (function (){var all_files = inst_60673;
var res_SINGLEQUOTE_ = inst_60676__$1;
var res = inst_60677__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_60681,inst_60676,inst_60677,inst_60673,inst_60676__$1,inst_60677__$1,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60602_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__60602_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_60681,inst_60676,inst_60677,inst_60673,inst_60676__$1,inst_60677__$1,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60679 = cljs.core.filter.call(null,inst_60678,inst_60676__$1);
var inst_60680 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_60681__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_60680);
var inst_60682 = cljs.core.not_empty.call(null,inst_60681__$1);
var state_60760__$1 = (function (){var statearr_60788 = state_60760;
(statearr_60788[(26)] = inst_60679);

(statearr_60788[(23)] = inst_60681__$1);

(statearr_60788[(24)] = inst_60676__$1);

(statearr_60788[(25)] = inst_60677__$1);

return statearr_60788;
})();
if(cljs.core.truth_(inst_60682)){
var statearr_60789_60866 = state_60760__$1;
(statearr_60789_60866[(1)] = (23));

} else {
var statearr_60790_60867 = state_60760__$1;
(statearr_60790_60867[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (36))){
var state_60760__$1 = state_60760;
var statearr_60791_60868 = state_60760__$1;
(statearr_60791_60868[(2)] = false);

(statearr_60791_60868[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (41))){
var inst_60735 = (state_60760[(20)]);
var inst_60739 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_60740 = cljs.core.map.call(null,inst_60739,inst_60735);
var inst_60741 = cljs.core.pr_str.call(null,inst_60740);
var inst_60742 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60741)].join('');
var inst_60743 = figwheel.client.utils.log.call(null,inst_60742);
var state_60760__$1 = state_60760;
var statearr_60792_60869 = state_60760__$1;
(statearr_60792_60869[(2)] = inst_60743);

(statearr_60792_60869[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (43))){
var inst_60736 = (state_60760[(21)]);
var inst_60746 = (state_60760[(2)]);
var inst_60747 = cljs.core.not_empty.call(null,inst_60736);
var state_60760__$1 = (function (){var statearr_60793 = state_60760;
(statearr_60793[(27)] = inst_60746);

return statearr_60793;
})();
if(cljs.core.truth_(inst_60747)){
var statearr_60794_60870 = state_60760__$1;
(statearr_60794_60870[(1)] = (44));

} else {
var statearr_60795_60871 = state_60760__$1;
(statearr_60795_60871[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (29))){
var inst_60679 = (state_60760[(26)]);
var inst_60681 = (state_60760[(23)]);
var inst_60713 = (state_60760[(16)]);
var inst_60676 = (state_60760[(24)]);
var inst_60677 = (state_60760[(25)]);
var inst_60673 = (state_60760[(19)]);
var inst_60709 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_60712 = (function (){var all_files = inst_60673;
var res_SINGLEQUOTE_ = inst_60676;
var res = inst_60677;
var files_not_loaded = inst_60679;
var dependencies_that_loaded = inst_60681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60679,inst_60681,inst_60713,inst_60676,inst_60677,inst_60673,inst_60709,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60711){
var map__60796 = p__60711;
var map__60796__$1 = ((((!((map__60796 == null)))?(((((map__60796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60796):map__60796);
var namespace = cljs.core.get.call(null,map__60796__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60679,inst_60681,inst_60713,inst_60676,inst_60677,inst_60673,inst_60709,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60713__$1 = cljs.core.group_by.call(null,inst_60712,inst_60679);
var inst_60715 = (inst_60713__$1 == null);
var inst_60716 = cljs.core.not.call(null,inst_60715);
var state_60760__$1 = (function (){var statearr_60798 = state_60760;
(statearr_60798[(16)] = inst_60713__$1);

(statearr_60798[(28)] = inst_60709);

return statearr_60798;
})();
if(inst_60716){
var statearr_60799_60872 = state_60760__$1;
(statearr_60799_60872[(1)] = (32));

} else {
var statearr_60800_60873 = state_60760__$1;
(statearr_60800_60873[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (44))){
var inst_60736 = (state_60760[(21)]);
var inst_60749 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_60736);
var inst_60750 = cljs.core.pr_str.call(null,inst_60749);
var inst_60751 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60750)].join('');
var inst_60752 = figwheel.client.utils.log.call(null,inst_60751);
var state_60760__$1 = state_60760;
var statearr_60801_60874 = state_60760__$1;
(statearr_60801_60874[(2)] = inst_60752);

(statearr_60801_60874[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (6))){
var inst_60654 = (state_60760[(2)]);
var state_60760__$1 = state_60760;
var statearr_60802_60875 = state_60760__$1;
(statearr_60802_60875[(2)] = inst_60654);

(statearr_60802_60875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (28))){
var inst_60679 = (state_60760[(26)]);
var inst_60706 = (state_60760[(2)]);
var inst_60707 = cljs.core.not_empty.call(null,inst_60679);
var state_60760__$1 = (function (){var statearr_60803 = state_60760;
(statearr_60803[(29)] = inst_60706);

return statearr_60803;
})();
if(cljs.core.truth_(inst_60707)){
var statearr_60804_60876 = state_60760__$1;
(statearr_60804_60876[(1)] = (29));

} else {
var statearr_60805_60877 = state_60760__$1;
(statearr_60805_60877[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (25))){
var inst_60677 = (state_60760[(25)]);
var inst_60693 = (state_60760[(2)]);
var inst_60694 = cljs.core.not_empty.call(null,inst_60677);
var state_60760__$1 = (function (){var statearr_60806 = state_60760;
(statearr_60806[(30)] = inst_60693);

return statearr_60806;
})();
if(cljs.core.truth_(inst_60694)){
var statearr_60807_60878 = state_60760__$1;
(statearr_60807_60878[(1)] = (26));

} else {
var statearr_60808_60879 = state_60760__$1;
(statearr_60808_60879[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (34))){
var inst_60729 = (state_60760[(2)]);
var state_60760__$1 = state_60760;
if(cljs.core.truth_(inst_60729)){
var statearr_60809_60880 = state_60760__$1;
(statearr_60809_60880[(1)] = (38));

} else {
var statearr_60810_60881 = state_60760__$1;
(statearr_60810_60881[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (17))){
var state_60760__$1 = state_60760;
var statearr_60811_60882 = state_60760__$1;
(statearr_60811_60882[(2)] = recompile_dependents);

(statearr_60811_60882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (3))){
var state_60760__$1 = state_60760;
var statearr_60812_60883 = state_60760__$1;
(statearr_60812_60883[(2)] = null);

(statearr_60812_60883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (12))){
var inst_60650 = (state_60760[(2)]);
var state_60760__$1 = state_60760;
var statearr_60813_60884 = state_60760__$1;
(statearr_60813_60884[(2)] = inst_60650);

(statearr_60813_60884[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (2))){
var inst_60612 = (state_60760[(13)]);
var inst_60619 = cljs.core.seq.call(null,inst_60612);
var inst_60620 = inst_60619;
var inst_60621 = null;
var inst_60622 = (0);
var inst_60623 = (0);
var state_60760__$1 = (function (){var statearr_60814 = state_60760;
(statearr_60814[(7)] = inst_60621);

(statearr_60814[(8)] = inst_60620);

(statearr_60814[(9)] = inst_60623);

(statearr_60814[(10)] = inst_60622);

return statearr_60814;
})();
var statearr_60815_60885 = state_60760__$1;
(statearr_60815_60885[(2)] = null);

(statearr_60815_60885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (23))){
var inst_60679 = (state_60760[(26)]);
var inst_60681 = (state_60760[(23)]);
var inst_60676 = (state_60760[(24)]);
var inst_60677 = (state_60760[(25)]);
var inst_60673 = (state_60760[(19)]);
var inst_60684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_60686 = (function (){var all_files = inst_60673;
var res_SINGLEQUOTE_ = inst_60676;
var res = inst_60677;
var files_not_loaded = inst_60679;
var dependencies_that_loaded = inst_60681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60679,inst_60681,inst_60676,inst_60677,inst_60673,inst_60684,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60685){
var map__60816 = p__60685;
var map__60816__$1 = ((((!((map__60816 == null)))?(((((map__60816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60816):map__60816);
var request_url = cljs.core.get.call(null,map__60816__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60679,inst_60681,inst_60676,inst_60677,inst_60673,inst_60684,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60687 = cljs.core.reverse.call(null,inst_60681);
var inst_60688 = cljs.core.map.call(null,inst_60686,inst_60687);
var inst_60689 = cljs.core.pr_str.call(null,inst_60688);
var inst_60690 = figwheel.client.utils.log.call(null,inst_60689);
var state_60760__$1 = (function (){var statearr_60818 = state_60760;
(statearr_60818[(31)] = inst_60684);

return statearr_60818;
})();
var statearr_60819_60886 = state_60760__$1;
(statearr_60819_60886[(2)] = inst_60690);

(statearr_60819_60886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (35))){
var state_60760__$1 = state_60760;
var statearr_60820_60887 = state_60760__$1;
(statearr_60820_60887[(2)] = true);

(statearr_60820_60887[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (19))){
var inst_60663 = (state_60760[(12)]);
var inst_60669 = figwheel.client.file_reloading.expand_files.call(null,inst_60663);
var state_60760__$1 = state_60760;
var statearr_60821_60888 = state_60760__$1;
(statearr_60821_60888[(2)] = inst_60669);

(statearr_60821_60888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (11))){
var state_60760__$1 = state_60760;
var statearr_60822_60889 = state_60760__$1;
(statearr_60822_60889[(2)] = null);

(statearr_60822_60889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (9))){
var inst_60652 = (state_60760[(2)]);
var state_60760__$1 = state_60760;
var statearr_60823_60890 = state_60760__$1;
(statearr_60823_60890[(2)] = inst_60652);

(statearr_60823_60890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (5))){
var inst_60623 = (state_60760[(9)]);
var inst_60622 = (state_60760[(10)]);
var inst_60625 = (inst_60623 < inst_60622);
var inst_60626 = inst_60625;
var state_60760__$1 = state_60760;
if(cljs.core.truth_(inst_60626)){
var statearr_60824_60891 = state_60760__$1;
(statearr_60824_60891[(1)] = (7));

} else {
var statearr_60825_60892 = state_60760__$1;
(statearr_60825_60892[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (14))){
var inst_60633 = (state_60760[(22)]);
var inst_60642 = cljs.core.first.call(null,inst_60633);
var inst_60643 = figwheel.client.file_reloading.eval_body.call(null,inst_60642,opts);
var inst_60644 = cljs.core.next.call(null,inst_60633);
var inst_60620 = inst_60644;
var inst_60621 = null;
var inst_60622 = (0);
var inst_60623 = (0);
var state_60760__$1 = (function (){var statearr_60826 = state_60760;
(statearr_60826[(7)] = inst_60621);

(statearr_60826[(8)] = inst_60620);

(statearr_60826[(9)] = inst_60623);

(statearr_60826[(10)] = inst_60622);

(statearr_60826[(32)] = inst_60643);

return statearr_60826;
})();
var statearr_60827_60893 = state_60760__$1;
(statearr_60827_60893[(2)] = null);

(statearr_60827_60893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (45))){
var state_60760__$1 = state_60760;
var statearr_60828_60894 = state_60760__$1;
(statearr_60828_60894[(2)] = null);

(statearr_60828_60894[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (26))){
var inst_60679 = (state_60760[(26)]);
var inst_60681 = (state_60760[(23)]);
var inst_60676 = (state_60760[(24)]);
var inst_60677 = (state_60760[(25)]);
var inst_60673 = (state_60760[(19)]);
var inst_60696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_60698 = (function (){var all_files = inst_60673;
var res_SINGLEQUOTE_ = inst_60676;
var res = inst_60677;
var files_not_loaded = inst_60679;
var dependencies_that_loaded = inst_60681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60679,inst_60681,inst_60676,inst_60677,inst_60673,inst_60696,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60697){
var map__60829 = p__60697;
var map__60829__$1 = ((((!((map__60829 == null)))?(((((map__60829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60829):map__60829);
var namespace = cljs.core.get.call(null,map__60829__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__60829__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60679,inst_60681,inst_60676,inst_60677,inst_60673,inst_60696,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60699 = cljs.core.map.call(null,inst_60698,inst_60677);
var inst_60700 = cljs.core.pr_str.call(null,inst_60699);
var inst_60701 = figwheel.client.utils.log.call(null,inst_60700);
var inst_60702 = (function (){var all_files = inst_60673;
var res_SINGLEQUOTE_ = inst_60676;
var res = inst_60677;
var files_not_loaded = inst_60679;
var dependencies_that_loaded = inst_60681;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60679,inst_60681,inst_60676,inst_60677,inst_60673,inst_60696,inst_60698,inst_60699,inst_60700,inst_60701,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60679,inst_60681,inst_60676,inst_60677,inst_60673,inst_60696,inst_60698,inst_60699,inst_60700,inst_60701,state_val_60761,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60703 = setTimeout(inst_60702,(10));
var state_60760__$1 = (function (){var statearr_60831 = state_60760;
(statearr_60831[(33)] = inst_60701);

(statearr_60831[(34)] = inst_60696);

return statearr_60831;
})();
var statearr_60832_60895 = state_60760__$1;
(statearr_60832_60895[(2)] = inst_60703);

(statearr_60832_60895[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (16))){
var state_60760__$1 = state_60760;
var statearr_60833_60896 = state_60760__$1;
(statearr_60833_60896[(2)] = reload_dependents);

(statearr_60833_60896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (38))){
var inst_60713 = (state_60760[(16)]);
var inst_60731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60713);
var state_60760__$1 = state_60760;
var statearr_60834_60897 = state_60760__$1;
(statearr_60834_60897[(2)] = inst_60731);

(statearr_60834_60897[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (30))){
var state_60760__$1 = state_60760;
var statearr_60835_60898 = state_60760__$1;
(statearr_60835_60898[(2)] = null);

(statearr_60835_60898[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (10))){
var inst_60633 = (state_60760[(22)]);
var inst_60635 = cljs.core.chunked_seq_QMARK_.call(null,inst_60633);
var state_60760__$1 = state_60760;
if(inst_60635){
var statearr_60836_60899 = state_60760__$1;
(statearr_60836_60899[(1)] = (13));

} else {
var statearr_60837_60900 = state_60760__$1;
(statearr_60837_60900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (18))){
var inst_60667 = (state_60760[(2)]);
var state_60760__$1 = state_60760;
if(cljs.core.truth_(inst_60667)){
var statearr_60838_60901 = state_60760__$1;
(statearr_60838_60901[(1)] = (19));

} else {
var statearr_60839_60902 = state_60760__$1;
(statearr_60839_60902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (42))){
var state_60760__$1 = state_60760;
var statearr_60840_60903 = state_60760__$1;
(statearr_60840_60903[(2)] = null);

(statearr_60840_60903[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (37))){
var inst_60726 = (state_60760[(2)]);
var state_60760__$1 = state_60760;
var statearr_60841_60904 = state_60760__$1;
(statearr_60841_60904[(2)] = inst_60726);

(statearr_60841_60904[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60761 === (8))){
var inst_60633 = (state_60760[(22)]);
var inst_60620 = (state_60760[(8)]);
var inst_60633__$1 = cljs.core.seq.call(null,inst_60620);
var state_60760__$1 = (function (){var statearr_60842 = state_60760;
(statearr_60842[(22)] = inst_60633__$1);

return statearr_60842;
})();
if(inst_60633__$1){
var statearr_60843_60905 = state_60760__$1;
(statearr_60843_60905[(1)] = (10));

} else {
var statearr_60844_60906 = state_60760__$1;
(statearr_60844_60906[(1)] = (11));

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
});})(c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__58164__auto__,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto____0 = (function (){
var statearr_60845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60845[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto__);

(statearr_60845[(1)] = (1));

return statearr_60845;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto____1 = (function (state_60760){
while(true){
var ret_value__58166__auto__ = (function (){try{while(true){
var result__58167__auto__ = switch__58164__auto__.call(null,state_60760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__58167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58167__auto__;
}
break;
}
}catch (e60846){if((e60846 instanceof Object)){
var ex__58168__auto__ = e60846;
var statearr_60847_60907 = state_60760;
(statearr_60847_60907[(5)] = ex__58168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__58166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60908 = state_60760;
state_60760 = G__60908;
continue;
} else {
return ret_value__58166__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto__ = function(state_60760){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto____1.call(this,state_60760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__58165__auto__;
})()
;})(switch__58164__auto__,c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__58256__auto__ = (function (){var statearr_60848 = f__58255__auto__.call(null);
(statearr_60848[(6)] = c__58254__auto__);

return statearr_60848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58256__auto__);
});})(c__58254__auto__,map__60605,map__60605__$1,opts,before_jsload,on_jsload,reload_dependents,map__60606,map__60606__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__58254__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__60911,link){
var map__60912 = p__60911;
var map__60912__$1 = ((((!((map__60912 == null)))?(((((map__60912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60912):map__60912);
var file = cljs.core.get.call(null,map__60912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__60912,map__60912__$1,file){
return (function (p1__60909_SHARP_,p2__60910_SHARP_){
if(cljs.core._EQ_.call(null,p1__60909_SHARP_,p2__60910_SHARP_)){
return p1__60909_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__60912,map__60912__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__60915){
var map__60916 = p__60915;
var map__60916__$1 = ((((!((map__60916 == null)))?(((((map__60916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60916):map__60916);
var match_length = cljs.core.get.call(null,map__60916__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__60916__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__60914_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__60914_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__60918_SHARP_,p2__60919_SHARP_){
return cljs.core.assoc.call(null,p1__60918_SHARP_,cljs.core.get.call(null,p2__60919_SHARP_,key),p2__60919_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_60920 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_60920);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_60920);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__60921,p__60922){
var map__60923 = p__60921;
var map__60923__$1 = ((((!((map__60923 == null)))?(((((map__60923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60923):map__60923);
var on_cssload = cljs.core.get.call(null,map__60923__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__60924 = p__60922;
var map__60924__$1 = ((((!((map__60924 == null)))?(((((map__60924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60924):map__60924);
var files_msg = map__60924__$1;
var files = cljs.core.get.call(null,map__60924__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1536503813678
