// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson048.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
mranderson048.garden.v1v3v3.garden.util.format = (function mranderson048$garden$v1v3v3$garden$util$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___54668 = arguments.length;
var i__4500__auto___54669 = (0);
while(true){
if((i__4500__auto___54669 < len__4499__auto___54668)){
args__4502__auto__.push((arguments[i__4500__auto___54669]));

var G__54670 = (i__4500__auto___54669 + (1));
i__4500__auto___54669 = G__54670;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

mranderson048.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq54666){
var G__54667 = cljs.core.first.call(null,seq54666);
var seq54666__$1 = cljs.core.next.call(null,seq54666);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54667,seq54666__$1);
});


/**
 * @interface
 */
mranderson048.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
mranderson048.garden.v1v3v3.garden.util.to_str = (function mranderson048$garden$v1v3v3$garden$util$to_str(this$){
if(((!((this$ == null))) && (!((this$.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null))))){
return this$.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson048.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (mranderson048.garden.v1v3v3.garden.util.to_str["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

goog.object.set(mranderson048.garden.v1v3v3.garden.util.ToString,"_",true);

goog.object.set(mranderson048.garden.v1v3v3.garden.util.to_str,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

goog.object.set(mranderson048.garden.v1v3v3.garden.util.ToString,"null",true);

goog.object.set(mranderson048.garden.v1v3v3.garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
mranderson048.garden.v1v3v3.garden.util.as_str = (function mranderson048$garden$v1v3v3$garden$util$as_str(var_args){
var args__4502__auto__ = [];
var len__4499__auto___54672 = arguments.length;
var i__4500__auto___54673 = (0);
while(true){
if((i__4500__auto___54673 < len__4499__auto___54672)){
args__4502__auto__.push((arguments[i__4500__auto___54673]));

var G__54674 = (i__4500__auto___54673 + (1));
i__4500__auto___54673 = G__54674;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.util.to_str,args));
});

mranderson048.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq54671){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54671));
});

/**
 * Convert a string to an integer with optional base.
 */
mranderson048.garden.v1v3v3.garden.util.string__GT_int = (function mranderson048$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___54681 = arguments.length;
var i__4500__auto___54682 = (0);
while(true){
if((i__4500__auto___54682 < len__4499__auto___54681)){
args__4502__auto__.push((arguments[i__4500__auto___54682]));

var G__54683 = (i__4500__auto___54682 + (1));
i__4500__auto___54682 = G__54683;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__54677){
var vec__54678 = p__54677;
var radix = cljs.core.nth.call(null,vec__54678,(0),null);
var radix__$1 = (function (){var or__3922__auto__ = radix;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq54675){
var G__54676 = cljs.core.first.call(null,seq54675);
var seq54675__$1 = cljs.core.next.call(null,seq54675);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54676,seq54675__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
mranderson048.garden.v1v3v3.garden.util.int__GT_string = (function mranderson048$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___54690 = arguments.length;
var i__4500__auto___54691 = (0);
while(true){
if((i__4500__auto___54691 < len__4499__auto___54690)){
args__4502__auto__.push((arguments[i__4500__auto___54691]));

var G__54692 = (i__4500__auto___54691 + (1));
i__4500__auto___54691 = G__54692;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__54686){
var vec__54687 = p__54686;
var radix = cljs.core.nth.call(null,vec__54687,(0),null);
var radix__$1 = (function (){var or__3922__auto__ = radix;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq54684){
var G__54685 = cljs.core.first.call(null,seq54684);
var seq54684__$1 = cljs.core.next.call(null,seq54684);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54685,seq54684__$1);
});

/**
 * Return a space separated list of values.
 */
mranderson048.garden.v1v3v3.garden.util.space_join = (function mranderson048$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson048.garden.v1v3v3.garden.util.comma_join = (function mranderson048$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__4292__auto__ = (function mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__54693(s__54694){
return (new cljs.core.LazySeq(null,(function (){
var s__54694__$1 = s__54694;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__54694__$1);
if(temp__5457__auto__){
var s__54694__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54694__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__54694__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__54696 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__54695 = (0);
while(true){
if((i__54695 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__54695);
cljs.core.chunk_append.call(null,b__54696,((cljs.core.sequential_QMARK_.call(null,x))?mranderson048.garden.v1v3v3.garden.util.space_join.call(null,x):mranderson048.garden.v1v3v3.garden.util.to_str.call(null,x)));

var G__54697 = (i__54695 + (1));
i__54695 = G__54697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54696),mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__54693.call(null,cljs.core.chunk_rest.call(null,s__54694__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54696),null);
}
} else {
var x = cljs.core.first.call(null,s__54694__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?mranderson048.garden.v1v3v3.garden.util.space_join.call(null,x):mranderson048.garden.v1v3v3.garden.util.to_str.call(null,x)),mranderson048$garden$v1v3v3$garden$util$comma_join_$_iter__54693.call(null,cljs.core.rest.call(null,s__54694__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
mranderson048.garden.v1v3v3.garden.util.wrap_quotes = (function mranderson048$garden$v1v3v3$garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x))));
});
/**
 * Alias to `vector?`.
 */
mranderson048.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
mranderson048.garden.v1v3v3.garden.util.declaration_QMARK_ = mranderson048.garden.v1v3v3.garden.util.hash_map_QMARK_;
mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof mranderson048.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_media_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_media_QMARK_(x){
var and__3911__auto__ = mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__3911__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
var and__3911__auto__ = mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__3911__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
mranderson048.garden.v1v3v3.garden.util.at_import_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$at_import_QMARK_(x){
var and__3911__auto__ = mranderson048.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__3911__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
mranderson048.garden.v1v3v3.garden.util.prefix = (function mranderson048$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = mranderson048.garden.v1v3v3.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
mranderson048.garden.v1v3v3.garden.util.vendor_prefix = (function mranderson048$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = mranderson048.garden.v1v3v3.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return mranderson048.garden.v1v3v3.garden.util.prefix.call(null,p__$1,s);
} else {
return mranderson048.garden.v1v3v3.garden.util.prefix.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
mranderson048.garden.v1v3v3.garden.util.natural_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_.call(null,n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
mranderson048.garden.v1v3v3.garden.util.between_QMARK_ = (function mranderson048$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4009__auto__ = a;
var y__4010__auto__ = b;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var top = (function (){var x__4006__auto__ = a;
var y__4007__auto__ = b;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
mranderson048.garden.v1v3v3.garden.util.clip = (function mranderson048$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__54698 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__54698,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__54698,(1),null);
var x__4006__auto__ = a__$1;
var y__4007__auto__ = (function (){var x__4009__auto__ = b__$1;
var y__4010__auto__ = n;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
});
/**
 * Return the average of two or more numbers.
 */
mranderson048.garden.v1v3v3.garden.util.average = (function mranderson048$garden$v1v3v3$garden$util$average(var_args){
var args__4502__auto__ = [];
var len__4499__auto___54704 = arguments.length;
var i__4500__auto___54705 = (0);
while(true){
if((i__4500__auto___54705 < len__4499__auto___54704)){
args__4502__auto__.push((arguments[i__4500__auto___54705]));

var G__54706 = (i__4500__auto___54705 + (1));
i__4500__auto___54705 = G__54706;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

mranderson048.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq54701){
var G__54702 = cljs.core.first.call(null,seq54701);
var seq54701__$1 = cljs.core.next.call(null,seq54701);
var G__54703 = cljs.core.first.call(null,seq54701__$1);
var seq54701__$2 = cljs.core.next.call(null,seq54701__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54702,G__54703,seq54701__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
mranderson048.garden.v1v3v3.garden.util.cartesian_product = (function mranderson048$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__4502__auto__ = [];
var len__4499__auto___54708 = arguments.length;
var i__4500__auto___54709 = (0);
while(true){
if((i__4500__auto___54709 < len__4499__auto___54708)){
args__4502__auto__.push((arguments[i__4500__auto___54709]));

var G__54710 = (i__4500__auto___54709 + (1));
i__4500__auto___54709 = G__54710;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function mranderson048$garden$v1v3v3$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5455__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__54711 = (i - (1));
var G__54712 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__54711;
v_seqs__$2 = G__54712;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return mranderson048$garden$v1v3v3$garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq54707){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54707));
});


//# sourceMappingURL=util.js.map?rel=1536503802185
