// Compiled by ClojureScript 1.10.238 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__48972){
var map__48973 = p__48972;
var map__48973__$1 = ((((!((map__48973 == null)))?(((((map__48973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48973):map__48973);
var replacement_transformers = cljs.core.get.call(null,map__48973__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__48973__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__48973__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__48973,map__48973__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_48975 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__48976 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_48975,map__48973,map__48973__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__48979,transformer){
var vec__48980 = p__48979;
var text = cljs.core.nth.call(null,vec__48980,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__48980,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_48975,map__48973,map__48973__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__3922__auto__ = replacement_transformers;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__48976,(0),null);
var new_state = cljs.core.nth.call(null,vec__48976,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_48975;
}});
;})(map__48973,map__48973__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___48985 = arguments.length;
var i__4500__auto___48986 = (0);
while(true){
if((i__4500__auto___48986 < len__4499__auto___48985)){
args__4502__auto__.push((arguments[i__4500__auto___48986]));

var G__48987 = (i__4500__auto___48986 + (1));
i__4500__auto___48986 = G__48987;
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
markdown.core.format.cljs$lang$applyTo = (function (seq48983){
var G__48984 = cljs.core.first.call(null,seq48983);
var seq48983__$1 = cljs.core.next.call(null,seq48983);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48984,seq48983__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__48988_48992 = cljs.core.seq.call(null,lines);
var chunk__48989_48993 = null;
var count__48990_48994 = (0);
var i__48991_48995 = (0);
while(true){
if((i__48991_48995 < count__48990_48994)){
var line_48996 = cljs.core._nth.call(null,chunk__48989_48993,i__48991_48995);
markdown.links.parse_reference_link.call(null,line_48996,references);


var G__48997 = seq__48988_48992;
var G__48998 = chunk__48989_48993;
var G__48999 = count__48990_48994;
var G__49000 = (i__48991_48995 + (1));
seq__48988_48992 = G__48997;
chunk__48989_48993 = G__48998;
count__48990_48994 = G__48999;
i__48991_48995 = G__49000;
continue;
} else {
var temp__5457__auto___49001 = cljs.core.seq.call(null,seq__48988_48992);
if(temp__5457__auto___49001){
var seq__48988_49002__$1 = temp__5457__auto___49001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48988_49002__$1)){
var c__4319__auto___49003 = cljs.core.chunk_first.call(null,seq__48988_49002__$1);
var G__49004 = cljs.core.chunk_rest.call(null,seq__48988_49002__$1);
var G__49005 = c__4319__auto___49003;
var G__49006 = cljs.core.count.call(null,c__4319__auto___49003);
var G__49007 = (0);
seq__48988_48992 = G__49004;
chunk__48989_48993 = G__49005;
count__48990_48994 = G__49006;
i__48991_48995 = G__49007;
continue;
} else {
var line_49008 = cljs.core.first.call(null,seq__48988_49002__$1);
markdown.links.parse_reference_link.call(null,line_49008,references);


var G__49009 = cljs.core.next.call(null,seq__48988_49002__$1);
var G__49010 = null;
var G__49011 = (0);
var G__49012 = (0);
seq__48988_48992 = G__49009;
chunk__48989_48993 = G__49010;
count__48990_48994 = G__49011;
i__48991_48995 = G__49012;
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
var seq__49013_49017 = cljs.core.seq.call(null,lines);
var chunk__49014_49018 = null;
var count__49015_49019 = (0);
var i__49016_49020 = (0);
while(true){
if((i__49016_49020 < count__49015_49019)){
var line_49021 = cljs.core._nth.call(null,chunk__49014_49018,i__49016_49020);
markdown.links.parse_footnote_link.call(null,line_49021,footnotes);


var G__49022 = seq__49013_49017;
var G__49023 = chunk__49014_49018;
var G__49024 = count__49015_49019;
var G__49025 = (i__49016_49020 + (1));
seq__49013_49017 = G__49022;
chunk__49014_49018 = G__49023;
count__49015_49019 = G__49024;
i__49016_49020 = G__49025;
continue;
} else {
var temp__5457__auto___49026 = cljs.core.seq.call(null,seq__49013_49017);
if(temp__5457__auto___49026){
var seq__49013_49027__$1 = temp__5457__auto___49026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49013_49027__$1)){
var c__4319__auto___49028 = cljs.core.chunk_first.call(null,seq__49013_49027__$1);
var G__49029 = cljs.core.chunk_rest.call(null,seq__49013_49027__$1);
var G__49030 = c__4319__auto___49028;
var G__49031 = cljs.core.count.call(null,c__4319__auto___49028);
var G__49032 = (0);
seq__49013_49017 = G__49029;
chunk__49014_49018 = G__49030;
count__49015_49019 = G__49031;
i__49016_49020 = G__49032;
continue;
} else {
var line_49033 = cljs.core.first.call(null,seq__49013_49027__$1);
markdown.links.parse_footnote_link.call(null,line_49033,footnotes);


var G__49034 = cljs.core.next.call(null,seq__49013_49027__$1);
var G__49035 = null;
var G__49036 = (0);
var G__49037 = (0);
seq__49013_49017 = G__49034;
chunk__49014_49018 = G__49035;
count__49015_49019 = G__49036;
i__49016_49020 = G__49037;
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
var vec__49039 = cljs.core.split_with.call(null,(function (p1__49038_SHARP_){
return cljs.core.not_empty.call(null,p1__49038_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__49039,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__49039,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_49042 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_49043 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_49042,_STAR_formatter_STAR_49043){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_49042,_STAR_formatter_STAR_49043))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__49044 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__49044,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__49044,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__49050_49057 = lines__$1;
var vec__49051_49058 = G__49050_49057;
var seq__49052_49059 = cljs.core.seq.call(null,vec__49051_49058);
var first__49053_49060 = cljs.core.first.call(null,seq__49052_49059);
var seq__49052_49061__$1 = cljs.core.next.call(null,seq__49052_49059);
var line_49062 = first__49053_49060;
var more_49063 = seq__49052_49061__$1;
var state_49064 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__49050_49065__$1 = G__49050_49057;
var state_49066__$1 = state_49064;
while(true){
var vec__49054_49067 = G__49050_49065__$1;
var seq__49055_49068 = cljs.core.seq.call(null,vec__49054_49067);
var first__49056_49069 = cljs.core.first.call(null,seq__49055_49068);
var seq__49055_49070__$1 = cljs.core.next.call(null,seq__49055_49068);
var line_49071__$1 = first__49056_49069;
var more_49072__$1 = seq__49055_49070__$1;
var state_49073__$2 = state_49066__$1;
var line_49074__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_49073__$2))?"":line_49071__$1);
var state_49075__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_49073__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_49073__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_49073__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_49073__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_49073__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_49072__$1))){
var G__49076 = more_49072__$1;
var G__49077 = cljs.core.assoc.call(null,transformer.call(null,html,line_49074__$2,cljs.core.first.call(null,more_49072__$1),cljs.core.dissoc.call(null,state_49075__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_49074__$2));
G__49050_49065__$1 = G__49076;
state_49066__$1 = G__49077;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_49075__$3))),line_49074__$2,"",cljs.core.assoc.call(null,state_49075__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_49043;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_49042;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___49080 = arguments.length;
var i__4500__auto___49081 = (0);
while(true){
if((i__4500__auto___49081 < len__4499__auto___49080)){
args__4502__auto__.push((arguments[i__4500__auto___49081]));

var G__49082 = (i__4500__auto___49081 + (1));
i__4500__auto___49081 = G__49082;
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
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq49078){
var G__49079 = cljs.core.first.call(null,seq49078);
var seq49078__$1 = cljs.core.next.call(null,seq49078);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49079,seq49078__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___49085 = arguments.length;
var i__4500__auto___49086 = (0);
while(true){
if((i__4500__auto___49086 < len__4499__auto___49085)){
args__4502__auto__.push((arguments[i__4500__auto___49086]));

var G__49087 = (i__4500__auto___49086 + (1));
i__4500__auto___49086 = G__49087;
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
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq49083){
var G__49084 = cljs.core.first.call(null,seq49083);
var seq49083__$1 = cljs.core.next.call(null,seq49083);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49084,seq49083__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4502__auto__ = [];
var len__4499__auto___49089 = arguments.length;
var i__4500__auto___49090 = (0);
while(true){
if((i__4500__auto___49090 < len__4499__auto___49089)){
args__4502__auto__.push((arguments[i__4500__auto___49090]));

var G__49091 = (i__4500__auto___49090 + (1));
i__4500__auto___49090 = G__49091;
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
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq49088){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49088));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___49093 = arguments.length;
var i__4500__auto___49094 = (0);
while(true){
if((i__4500__auto___49094 < len__4499__auto___49093)){
args__4502__auto__.push((arguments[i__4500__auto___49094]));

var G__49095 = (i__4500__auto___49094 + (1));
i__4500__auto___49094 = G__49095;
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
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq49092){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49092));
});


//# sourceMappingURL=core.js.map?rel=1536503771820
