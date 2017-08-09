// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__56378 = arguments.length;
switch (G__56378) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__56380 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__56381 = null;
var count__56382 = (0);
var i__56383 = (0);
while(true){
if((i__56383 < count__56382)){
var k = cljs.core._nth.call(null,chunk__56381,i__56383);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__56384 = seq__56380;
var G__56385 = chunk__56381;
var G__56386 = count__56382;
var G__56387 = (i__56383 + (1));
seq__56380 = G__56384;
chunk__56381 = G__56385;
count__56382 = G__56386;
i__56383 = G__56387;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__56380);
if(temp__5457__auto__){
var seq__56380__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56380__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__56380__$1);
var G__56388 = cljs.core.chunk_rest.call(null,seq__56380__$1);
var G__56389 = c__4319__auto__;
var G__56390 = cljs.core.count.call(null,c__4319__auto__);
var G__56391 = (0);
seq__56380 = G__56388;
chunk__56381 = G__56389;
count__56382 = G__56390;
i__56383 = G__56391;
continue;
} else {
var k = cljs.core.first.call(null,seq__56380__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__56392 = cljs.core.next.call(null,seq__56380__$1);
var G__56393 = null;
var G__56394 = (0);
var G__56395 = (0);
seq__56380 = G__56392;
chunk__56381 = G__56393;
count__56382 = G__56394;
i__56383 = G__56395;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1536503807095
