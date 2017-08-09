// Compiled by ClojureScript 1.10.238 {}
goog.provide('spachat.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
spachat.events.log_ex = (function spachat$events$log_ex(handler){
return (function spachat$events$log_ex_$_log_ex_handler(db,v){
try{return handler.call(null,db,v);
}catch (e7178){var e = e7178;
console.error(e.stack);

throw e;
}});
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (db,p__7179){
var vec__7180 = p__7179;
var _ = cljs.core.nth.call(null,vec__7180,(0),null);
var page = cljs.core.nth.call(null,vec__7180,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page","page",849072397),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"resetSignInError","resetSignInError",-1500033649),(function (db,_){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"signInError","signInError",-1529544213));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"signupUserValue","signupUserValue",-899384225),(function (db,p__7183){
var vec__7184 = p__7183;
var _ = cljs.core.nth.call(null,vec__7184,(0),null);
var v = cljs.core.nth.call(null,vec__7184,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"signupUserValue","signupUserValue",-899384225),v);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sendMessage","sendMessage",-1142792625),(function (db,p__7187){
var vec__7188 = p__7187;
var _ = cljs.core.nth.call(null,vec__7188,(0),null);
var v = cljs.core.nth.call(null,vec__7188,(1),null);
cljs.core.println.call(null,"called sendMessage",v);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sendMessage","sendMessage",-1142792625),v);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"signupPasswordValue","signupPasswordValue",729512633),(function (db,p__7191){
var vec__7192 = p__7191;
var _ = cljs.core.nth.call(null,vec__7192,(0),null);
var v = cljs.core.nth.call(null,vec__7192,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"signupPasswordValue","signupPasswordValue",729512633),v);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page","page",849072397),(function (db,_){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"signInError","signInError",-1529544213),(function (db,_){
return new cljs.core.Keyword(null,"signInError","signInError",-1529544213).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"spaCookie","spaCookie",1049478327),(function (db,_){
return new cljs.core.Keyword(null,"spaCookie","spaCookie",1049478327).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"chats","chats",518672204),(function (db,_){
return new cljs.core.Keyword(null,"chats","chats",518672204).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"lastchat","lastchat",-1683899726),(function (db,_){
return new cljs.core.Keyword(null,"lastchat","lastchat",-1683899726).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"signupUserValue","signupUserValue",-899384225),(function (db,_){
return new cljs.core.Keyword(null,"signupUserValue","signupUserValue",-899384225).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"sendMessage","sendMessage",-1142792625),(function (db,_){
return new cljs.core.Keyword(null,"sendMessage","sendMessage",-1142792625).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"signupPasswordValue","signupPasswordValue",729512633),(function (db,_){
return new cljs.core.Keyword(null,"signupPasswordValue","signupPasswordValue",729512633).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"onlineUsersNow","onlineUsersNow",-671319875),(function (db,_){
return new cljs.core.Keyword(null,"onlineUsersNow","onlineUsersNow",-671319875).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"signupGo","signupGo",1262262284),(function (db,_){
ajax.core.POST.call(null,"/API/signupGo",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.get.call(null,db,new cljs.core.Keyword(null,"signupUserValue","signupUserValue",-899384225)),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.get.call(null,db,new cljs.core.Keyword(null,"signupPasswordValue","signupPasswordValue",729512633))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__7195_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"signupGotResponse","signupGotResponse",1964772830),p1__7195_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__7196_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"signupGotResponseBad","signupGotResponseBad",-1677466766),p1__7196_SHARP_], null));
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"signupGotResponse","signupGotResponse",1964772830),(function (db,p__7197){
var vec__7198 = p__7197;
var _ = cljs.core.nth.call(null,vec__7198,(0),null);
var response = cljs.core.nth.call(null,vec__7198,(1),null);
cljs.core.println.call(null,response);

if(cljs.core.truth_(cljs.core.get.call(null,response,new cljs.core.Keyword(null,"ok","ok",967785236)))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"lastchat","lastchat",-1683899726),(0),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"chat","chat",-518268339),new cljs.core.Keyword(null,"spaCookie","spaCookie",1049478327),cljs.core.get.call(null,response,new cljs.core.Keyword(null,"okCookie","okCookie",-1398724461)));
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"signupPasswordValue","signupPasswordValue",729512633),""),new cljs.core.Keyword(null,"signInError","signInError",-1529544213),cljs.core.get.call(null,response,new cljs.core.Keyword(null,"errorText","errorText",642279900)));
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"signupGotResponseBad","signupGotResponseBad",-1677466766),(function (db,p__7201){
var vec__7202 = p__7201;
var _ = cljs.core.nth.call(null,vec__7202,(0),null);
var response = cljs.core.nth.call(null,vec__7202,(1),null);
cljs.core.println.call(null,"chats server down notice");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"noserver","noserver",-190794482),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"getChats","getChats",998849692),(function (db,_){
ajax.core.POST.call(null,"/API/getChat",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__7205_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"getChatsGotResponse","getChatsGotResponse",722389202),p1__7205_SHARP_], null));
}));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"getChatsGotResponse","getChatsGotResponse",722389202),(function (db,p__7206){
var vec__7207 = p__7206;
var _ = cljs.core.nth.call(null,vec__7207,(0),null);
var response = cljs.core.nth.call(null,vec__7207,(1),null);
spachat.events.chatsSeq = cljs.core.get.call(null,response,new cljs.core.Keyword(null,"okChats","okChats",-900611264));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"lastchat","lastchat",-1683899726),cljs.core.get.call(null,cljs.core.last.call(null,spachat.events.chatsSeq),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"chats","chats",518672204),spachat.events.chatsSeq);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sendMessageGo","sendMessageGo",1549492293),(function (db,_){
ajax.core.POST.call(null,"/API/putChat",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.get.call(null,db,new cljs.core.Keyword(null,"sendMessage","sendMessage",-1142792625)),new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.get.call(null,db,new cljs.core.Keyword(null,"signupUserValue","signupUserValue",-899384225)),new cljs.core.Keyword(null,"cookie","cookie",1772025619),cljs.core.get.call(null,db,new cljs.core.Keyword(null,"spaCookie","spaCookie",1049478327))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__7210_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sendMessageGotResponse","sendMessageGotResponse",429953550),p1__7210_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__7211_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sendMessageGotResponseBad","sendMessageGotResponseBad",-285779577),p1__7211_SHARP_], null));
})], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sendMessage","sendMessage",-1142792625),"");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sendMessageGotResponse","sendMessageGotResponse",429953550),(function (db,p__7212){
var vec__7213 = p__7212;
var _ = cljs.core.nth.call(null,vec__7213,(0),null);
var response = cljs.core.nth.call(null,vec__7213,(1),null);
if(cljs.core.truth_(cljs.core.get.call(null,response,new cljs.core.Keyword(null,"ok","ok",967785236)))){
cljs.core.println.call(null,"got ok sendmessages response");

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"getChats","getChats",998849692)], null));

return db;
} else {
cljs.core.println.call(null,"got BAD sendmessages response");

return db;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sendMessageGotResponseBad","sendMessageGotResponseBad",-285779577),(function (db,p__7216){
var vec__7217 = p__7216;
var _ = cljs.core.nth.call(null,vec__7217,(0),null);
var response = cljs.core.nth.call(null,vec__7217,(1),null);
cljs.core.println.call(null,"chats server down notice");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"noserver","noserver",-190794482),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pingingChatUser","pingingChatUser",-737360412),(function (db,_){
if(cljs.core.truth_(cljs.core.get.call(null,db,new cljs.core.Keyword(null,"spaCookie","spaCookie",1049478327)))){
cljs.core.println.call(null,"pinging with cookie ",cljs.core.get.call(null,db,new cljs.core.Keyword(null,"spaCookie","spaCookie",1049478327)));

ajax.core.POST.call(null,"/API/ping",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lastchat","lastchat",-1683899726),cljs.core.get.call(null,db,new cljs.core.Keyword(null,"lastchat","lastchat",-1683899726)),new cljs.core.Keyword(null,"cookie","cookie",1772025619),cljs.core.get.call(null,db,new cljs.core.Keyword(null,"spaCookie","spaCookie",1049478327))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__7220_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pingingGotResponse","pingingGotResponse",-864720428),p1__7220_SHARP_], null));
})], null));
} else {
}

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pingingGotResponse","pingingGotResponse",-864720428),(function (db,p__7221){
var vec__7222 = p__7221;
var _ = cljs.core.nth.call(null,vec__7222,(0),null);
var response = cljs.core.nth.call(null,vec__7222,(1),null);
if(cljs.core.truth_(cljs.core.get.call(null,response,new cljs.core.Keyword(null,"updateneeded","updateneeded",1780474306)))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"getChats","getChats",998849692)], null));
} else {
}

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"onlineUsersNow","onlineUsersNow",-671319875),cljs.core.get.call(null,response,new cljs.core.Keyword(null,"onlineUsersNow","onlineUsersNow",-671319875)));
}));
