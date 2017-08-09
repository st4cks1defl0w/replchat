// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60929){
var map__60930 = p__60929;
var map__60930__$1 = ((((!((map__60930 == null)))?(((((map__60930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60930):map__60930);
var m = map__60930__$1;
var n = cljs.core.get.call(null,map__60930__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__60930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60932_60954 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60933_60955 = null;
var count__60934_60956 = (0);
var i__60935_60957 = (0);
while(true){
if((i__60935_60957 < count__60934_60956)){
var f_60958 = cljs.core._nth.call(null,chunk__60933_60955,i__60935_60957);
cljs.core.println.call(null,"  ",f_60958);


var G__60959 = seq__60932_60954;
var G__60960 = chunk__60933_60955;
var G__60961 = count__60934_60956;
var G__60962 = (i__60935_60957 + (1));
seq__60932_60954 = G__60959;
chunk__60933_60955 = G__60960;
count__60934_60956 = G__60961;
i__60935_60957 = G__60962;
continue;
} else {
var temp__5457__auto___60963 = cljs.core.seq.call(null,seq__60932_60954);
if(temp__5457__auto___60963){
var seq__60932_60964__$1 = temp__5457__auto___60963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60932_60964__$1)){
var c__4319__auto___60965 = cljs.core.chunk_first.call(null,seq__60932_60964__$1);
var G__60966 = cljs.core.chunk_rest.call(null,seq__60932_60964__$1);
var G__60967 = c__4319__auto___60965;
var G__60968 = cljs.core.count.call(null,c__4319__auto___60965);
var G__60969 = (0);
seq__60932_60954 = G__60966;
chunk__60933_60955 = G__60967;
count__60934_60956 = G__60968;
i__60935_60957 = G__60969;
continue;
} else {
var f_60970 = cljs.core.first.call(null,seq__60932_60964__$1);
cljs.core.println.call(null,"  ",f_60970);


var G__60971 = cljs.core.next.call(null,seq__60932_60964__$1);
var G__60972 = null;
var G__60973 = (0);
var G__60974 = (0);
seq__60932_60954 = G__60971;
chunk__60933_60955 = G__60972;
count__60934_60956 = G__60973;
i__60935_60957 = G__60974;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60975 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_60975);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_60975)))?cljs.core.second.call(null,arglists_60975):arglists_60975));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__60936_60976 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60937_60977 = null;
var count__60938_60978 = (0);
var i__60939_60979 = (0);
while(true){
if((i__60939_60979 < count__60938_60978)){
var vec__60940_60980 = cljs.core._nth.call(null,chunk__60937_60977,i__60939_60979);
var name_60981 = cljs.core.nth.call(null,vec__60940_60980,(0),null);
var map__60943_60982 = cljs.core.nth.call(null,vec__60940_60980,(1),null);
var map__60943_60983__$1 = ((((!((map__60943_60982 == null)))?(((((map__60943_60982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60943_60982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60943_60982):map__60943_60982);
var doc_60984 = cljs.core.get.call(null,map__60943_60983__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60985 = cljs.core.get.call(null,map__60943_60983__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_60981);

cljs.core.println.call(null," ",arglists_60985);

if(cljs.core.truth_(doc_60984)){
cljs.core.println.call(null," ",doc_60984);
} else {
}


var G__60986 = seq__60936_60976;
var G__60987 = chunk__60937_60977;
var G__60988 = count__60938_60978;
var G__60989 = (i__60939_60979 + (1));
seq__60936_60976 = G__60986;
chunk__60937_60977 = G__60987;
count__60938_60978 = G__60988;
i__60939_60979 = G__60989;
continue;
} else {
var temp__5457__auto___60990 = cljs.core.seq.call(null,seq__60936_60976);
if(temp__5457__auto___60990){
var seq__60936_60991__$1 = temp__5457__auto___60990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60936_60991__$1)){
var c__4319__auto___60992 = cljs.core.chunk_first.call(null,seq__60936_60991__$1);
var G__60993 = cljs.core.chunk_rest.call(null,seq__60936_60991__$1);
var G__60994 = c__4319__auto___60992;
var G__60995 = cljs.core.count.call(null,c__4319__auto___60992);
var G__60996 = (0);
seq__60936_60976 = G__60993;
chunk__60937_60977 = G__60994;
count__60938_60978 = G__60995;
i__60939_60979 = G__60996;
continue;
} else {
var vec__60945_60997 = cljs.core.first.call(null,seq__60936_60991__$1);
var name_60998 = cljs.core.nth.call(null,vec__60945_60997,(0),null);
var map__60948_60999 = cljs.core.nth.call(null,vec__60945_60997,(1),null);
var map__60948_61000__$1 = ((((!((map__60948_60999 == null)))?(((((map__60948_60999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60948_60999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60948_60999):map__60948_60999);
var doc_61001 = cljs.core.get.call(null,map__60948_61000__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61002 = cljs.core.get.call(null,map__60948_61000__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_60998);

cljs.core.println.call(null," ",arglists_61002);

if(cljs.core.truth_(doc_61001)){
cljs.core.println.call(null," ",doc_61001);
} else {
}


var G__61003 = cljs.core.next.call(null,seq__60936_60991__$1);
var G__61004 = null;
var G__61005 = (0);
var G__61006 = (0);
seq__60936_60976 = G__61003;
chunk__60937_60977 = G__61004;
count__60938_60978 = G__61005;
i__60939_60979 = G__61006;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__60950 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60951 = null;
var count__60952 = (0);
var i__60953 = (0);
while(true){
if((i__60953 < count__60952)){
var role = cljs.core._nth.call(null,chunk__60951,i__60953);
var temp__5457__auto___61007__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___61007__$1)){
var spec_61008 = temp__5457__auto___61007__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_61008));
} else {
}


var G__61009 = seq__60950;
var G__61010 = chunk__60951;
var G__61011 = count__60952;
var G__61012 = (i__60953 + (1));
seq__60950 = G__61009;
chunk__60951 = G__61010;
count__60952 = G__61011;
i__60953 = G__61012;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__60950);
if(temp__5457__auto____$1){
var seq__60950__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60950__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__60950__$1);
var G__61013 = cljs.core.chunk_rest.call(null,seq__60950__$1);
var G__61014 = c__4319__auto__;
var G__61015 = cljs.core.count.call(null,c__4319__auto__);
var G__61016 = (0);
seq__60950 = G__61013;
chunk__60951 = G__61014;
count__60952 = G__61015;
i__60953 = G__61016;
continue;
} else {
var role = cljs.core.first.call(null,seq__60950__$1);
var temp__5457__auto___61017__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___61017__$2)){
var spec_61018 = temp__5457__auto___61017__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_61018));
} else {
}


var G__61019 = cljs.core.next.call(null,seq__60950__$1);
var G__61020 = null;
var G__61021 = (0);
var G__61022 = (0);
seq__60950 = G__61019;
chunk__60951 = G__61020;
count__60952 = G__61021;
i__60953 = G__61022;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1536503813820
