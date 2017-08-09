// Compiled by ClojureScript 1.10.238 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__6393){
var map__6394 = p__6393;
var map__6394__$1 = ((((!((map__6394 == null)))?(((((map__6394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6394):map__6394);
var replacement_transformers = cljs.core.get.call(null,map__6394__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__6394__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__6394__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__6394,map__6394__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_6396 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__6397 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_6396,map__6394,map__6394__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__6400,transformer){
var vec__6401 = p__6400;
var text = cljs.core.nth.call(null,vec__6401,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__6401,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_6396,map__6394,map__6394__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__3922__auto__ = replacement_transformers;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__6397,(0),null);
var new_state = cljs.core.nth.call(null,vec__6397,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_6396;
}});
;})(map__6394,map__6394__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6406 = arguments.length;
var i__4500__auto___6407 = (0);
while(true){
if((i__4500__auto___6407 < len__4499__auto___6406)){
args__4502__auto__.push((arguments[i__4500__auto___6407]));

var G__6408 = (i__4500__auto___6407 + (1));
i__4500__auto___6407 = G__6408;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.format.cljs$lang$applyTo = (function (seq6404){
var G__6405 = cljs.core.first.call(null,seq6404);
var seq6404__$1 = cljs.core.next.call(null,seq6404);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6405,seq6404__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__6409_6413 = cljs.core.seq.call(null,lines);
var chunk__6410_6414 = null;
var count__6411_6415 = (0);
var i__6412_6416 = (0);
while(true){
if((i__6412_6416 < count__6411_6415)){
var line_6417 = cljs.core._nth.call(null,chunk__6410_6414,i__6412_6416);
markdown.links.parse_reference_link.call(null,line_6417,references);


var G__6418 = seq__6409_6413;
var G__6419 = chunk__6410_6414;
var G__6420 = count__6411_6415;
var G__6421 = (i__6412_6416 + (1));
seq__6409_6413 = G__6418;
chunk__6410_6414 = G__6419;
count__6411_6415 = G__6420;
i__6412_6416 = G__6421;
continue;
} else {
var temp__5457__auto___6422 = cljs.core.seq.call(null,seq__6409_6413);
if(temp__5457__auto___6422){
var seq__6409_6423__$1 = temp__5457__auto___6422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6409_6423__$1)){
var c__4319__auto___6424 = cljs.core.chunk_first.call(null,seq__6409_6423__$1);
var G__6425 = cljs.core.chunk_rest.call(null,seq__6409_6423__$1);
var G__6426 = c__4319__auto___6424;
var G__6427 = cljs.core.count.call(null,c__4319__auto___6424);
var G__6428 = (0);
seq__6409_6413 = G__6425;
chunk__6410_6414 = G__6426;
count__6411_6415 = G__6427;
i__6412_6416 = G__6428;
continue;
} else {
var line_6429 = cljs.core.first.call(null,seq__6409_6423__$1);
markdown.links.parse_reference_link.call(null,line_6429,references);


var G__6430 = cljs.core.next.call(null,seq__6409_6423__$1);
var G__6431 = null;
var G__6432 = (0);
var G__6433 = (0);
seq__6409_6413 = G__6430;
chunk__6410_6414 = G__6431;
count__6411_6415 = G__6432;
i__6412_6416 = G__6433;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__6434_6438 = cljs.core.seq.call(null,lines);
var chunk__6435_6439 = null;
var count__6436_6440 = (0);
var i__6437_6441 = (0);
while(true){
if((i__6437_6441 < count__6436_6440)){
var line_6442 = cljs.core._nth.call(null,chunk__6435_6439,i__6437_6441);
markdown.links.parse_footnote_link.call(null,line_6442,footnotes);


var G__6443 = seq__6434_6438;
var G__6444 = chunk__6435_6439;
var G__6445 = count__6436_6440;
var G__6446 = (i__6437_6441 + (1));
seq__6434_6438 = G__6443;
chunk__6435_6439 = G__6444;
count__6436_6440 = G__6445;
i__6437_6441 = G__6446;
continue;
} else {
var temp__5457__auto___6447 = cljs.core.seq.call(null,seq__6434_6438);
if(temp__5457__auto___6447){
var seq__6434_6448__$1 = temp__5457__auto___6447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6434_6448__$1)){
var c__4319__auto___6449 = cljs.core.chunk_first.call(null,seq__6434_6448__$1);
var G__6450 = cljs.core.chunk_rest.call(null,seq__6434_6448__$1);
var G__6451 = c__4319__auto___6449;
var G__6452 = cljs.core.count.call(null,c__4319__auto___6449);
var G__6453 = (0);
seq__6434_6438 = G__6450;
chunk__6435_6439 = G__6451;
count__6436_6440 = G__6452;
i__6437_6441 = G__6453;
continue;
} else {
var line_6454 = cljs.core.first.call(null,seq__6434_6448__$1);
markdown.links.parse_footnote_link.call(null,line_6454,footnotes);


var G__6455 = cljs.core.next.call(null,seq__6434_6448__$1);
var G__6456 = null;
var G__6457 = (0);
var G__6458 = (0);
seq__6434_6438 = G__6455;
chunk__6435_6439 = G__6456;
count__6436_6440 = G__6457;
i__6437_6441 = G__6458;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__6460 = cljs.core.split_with.call(null,(function (p1__6459_SHARP_){
return cljs.core.not_empty.call(null,p1__6459_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__6460,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__6460,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_6463 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_6464 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_6463,_STAR_formatter_STAR_6464){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_6463,_STAR_formatter_STAR_6464))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__6465 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__6465,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__6465,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__6471_6478 = lines__$1;
var vec__6472_6479 = G__6471_6478;
var seq__6473_6480 = cljs.core.seq.call(null,vec__6472_6479);
var first__6474_6481 = cljs.core.first.call(null,seq__6473_6480);
var seq__6473_6482__$1 = cljs.core.next.call(null,seq__6473_6480);
var line_6483 = first__6474_6481;
var more_6484 = seq__6473_6482__$1;
var state_6485 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__6471_6486__$1 = G__6471_6478;
var state_6487__$1 = state_6485;
while(true){
var vec__6475_6488 = G__6471_6486__$1;
var seq__6476_6489 = cljs.core.seq.call(null,vec__6475_6488);
var first__6477_6490 = cljs.core.first.call(null,seq__6476_6489);
var seq__6476_6491__$1 = cljs.core.next.call(null,seq__6476_6489);
var line_6492__$1 = first__6477_6490;
var more_6493__$1 = seq__6476_6491__$1;
var state_6494__$2 = state_6487__$1;
var line_6495__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_6494__$2))?"":line_6492__$1);
var state_6496__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_6494__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_6494__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_6494__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_6494__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_6494__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_6493__$1))){
var G__6497 = more_6493__$1;
var G__6498 = cljs.core.assoc.call(null,transformer.call(null,html,line_6495__$2,cljs.core.first.call(null,more_6493__$1),cljs.core.dissoc.call(null,state_6496__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_6495__$2));
G__6471_6486__$1 = G__6497;
state_6487__$1 = G__6498;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_6496__$3))),line_6495__$2,"",cljs.core.assoc.call(null,state_6496__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_6464;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_6463;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6501 = arguments.length;
var i__4500__auto___6502 = (0);
while(true){
if((i__4500__auto___6502 < len__4499__auto___6501)){
args__4502__auto__.push((arguments[i__4500__auto___6502]));

var G__6503 = (i__4500__auto___6502 + (1));
i__4500__auto___6502 = G__6503;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq6499){
var G__6500 = cljs.core.first.call(null,seq6499);
var seq6499__$1 = cljs.core.next.call(null,seq6499);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6500,seq6499__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6506 = arguments.length;
var i__4500__auto___6507 = (0);
while(true){
if((i__4500__auto___6507 < len__4499__auto___6506)){
args__4502__auto__.push((arguments[i__4500__auto___6507]));

var G__6508 = (i__4500__auto___6507 + (1));
i__4500__auto___6507 = G__6508;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq6504){
var G__6505 = cljs.core.first.call(null,seq6504);
var seq6504__$1 = cljs.core.next.call(null,seq6504);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6505,seq6504__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6510 = arguments.length;
var i__4500__auto___6511 = (0);
while(true){
if((i__4500__auto___6511 < len__4499__auto___6510)){
args__4502__auto__.push((arguments[i__4500__auto___6511]));

var G__6512 = (i__4500__auto___6511 + (1));
i__4500__auto___6511 = G__6512;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq6509){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6509));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6514 = arguments.length;
var i__4500__auto___6515 = (0);
while(true){
if((i__4500__auto___6515 < len__4499__auto___6514)){
args__4502__auto__.push((arguments[i__4500__auto___6515]));

var G__6516 = (i__4500__auto___6515 + (1));
i__4500__auto___6515 = G__6516;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq6513){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6513));
});

