// Compiled by ClojureScript 1.10.238 {}
goog.provide('spachat.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('re_frame.core');
spachat.ajax.local_uri_QMARK_ = (function spachat$ajax$local_uri_QMARK_(p__7169){
var map__7170 = p__7169;
var map__7170__$1 = ((((!((map__7170 == null)))?(((((map__7170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7170):map__7170);
var uri = cljs.core.get.call(null,map__7170__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not.call(null,cljs.core.re_find.call(null,/^\w+?:\/\//,uri));
});
spachat.ajax.default_headers = (function spachat$ajax$default_headers(request){
if(cljs.core.truth_(spachat.ajax.local_uri_QMARK_.call(null,request))){
return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__7172_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__7172_SHARP_);
}));
} else {
return request;
}
});
spachat.ajax.load_interceptors_BANG_ = (function spachat$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),spachat.ajax.default_headers], null)));
});
spachat.ajax.http_methods = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),ajax.core.GET,new cljs.core.Keyword(null,"post","post",269697687),ajax.core.POST,new cljs.core.Keyword(null,"put","put",1299772570),ajax.core.PUT,new cljs.core.Keyword(null,"delete","delete",-1768633620),ajax.core.DELETE], null);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http","http",382524695),(function (p__7173){
var map__7174 = p__7173;
var map__7174__$1 = ((((!((map__7174 == null)))?(((((map__7174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7174):map__7174);
var method = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"url","url",276297046));
var success_event = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"success-event","success-event",2038143820));
var error_event = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"error-event","error-event",495696414),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","set-error","common/set-error",-1337739361)], null));
var params = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ajax_map = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"ajax-map","ajax-map",-1156716416),cljs.core.PersistentArrayMap.EMPTY);
return spachat.ajax.http_methods.call(null,method).call(null,url,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__7174,map__7174__$1,method,url,success_event,error_event,params,ajax_map){
return (function (response){
if(cljs.core.truth_(success_event)){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,success_event,response));
} else {
return null;
}
});})(map__7174,map__7174__$1,method,url,success_event,error_event,params,ajax_map))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (map__7174,map__7174__$1,method,url,success_event,error_event,params,ajax_map){
return (function (error){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,error_event,error));
});})(map__7174,map__7174__$1,method,url,success_event,error_event,params,ajax_map))
], null),ajax_map));
}));
