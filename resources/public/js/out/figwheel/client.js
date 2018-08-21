// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e29011){if((e29011 instanceof Error)){
var e = e29011;
return "Error: Unable to stringify";
} else {
throw e29011;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29014 = arguments.length;
switch (G__29014) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29012_SHARP_){
if(typeof p1__29012_SHARP_ === 'string'){
return p1__29012_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29012_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29017 = arguments.length;
var i__4500__auto___29018 = (0);
while(true){
if((i__4500__auto___29018 < len__4499__auto___29017)){
args__4502__auto__.push((arguments[i__4500__auto___29018]));

var G__29019 = (i__4500__auto___29018 + (1));
i__4500__auto___29018 = G__29019;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29016){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29016));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29021 = arguments.length;
var i__4500__auto___29022 = (0);
while(true){
if((i__4500__auto___29022 < len__4499__auto___29021)){
args__4502__auto__.push((arguments[i__4500__auto___29022]));

var G__29023 = (i__4500__auto___29022 + (1));
i__4500__auto___29022 = G__29023;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29020){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29020));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29024){
var map__29025 = p__29024;
var map__29025__$1 = ((((!((map__29025 == null)))?(((((map__29025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29025):map__29025);
var message = cljs.core.get.call(null,map__29025__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29025__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23152__auto___29104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___29104,ch){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___29104,ch){
return (function (state_29076){
var state_val_29077 = (state_29076[(1)]);
if((state_val_29077 === (7))){
var inst_29072 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29078_29105 = state_29076__$1;
(statearr_29078_29105[(2)] = inst_29072);

(statearr_29078_29105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (1))){
var state_29076__$1 = state_29076;
var statearr_29079_29106 = state_29076__$1;
(statearr_29079_29106[(2)] = null);

(statearr_29079_29106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (4))){
var inst_29029 = (state_29076[(7)]);
var inst_29029__$1 = (state_29076[(2)]);
var state_29076__$1 = (function (){var statearr_29080 = state_29076;
(statearr_29080[(7)] = inst_29029__$1);

return statearr_29080;
})();
if(cljs.core.truth_(inst_29029__$1)){
var statearr_29081_29107 = state_29076__$1;
(statearr_29081_29107[(1)] = (5));

} else {
var statearr_29082_29108 = state_29076__$1;
(statearr_29082_29108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (15))){
var inst_29036 = (state_29076[(8)]);
var inst_29051 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29036);
var inst_29052 = cljs.core.first.call(null,inst_29051);
var inst_29053 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29052);
var inst_29054 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29053)].join('');
var inst_29055 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29054);
var state_29076__$1 = state_29076;
var statearr_29083_29109 = state_29076__$1;
(statearr_29083_29109[(2)] = inst_29055);

(statearr_29083_29109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (13))){
var inst_29060 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29084_29110 = state_29076__$1;
(statearr_29084_29110[(2)] = inst_29060);

(statearr_29084_29110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (6))){
var state_29076__$1 = state_29076;
var statearr_29085_29111 = state_29076__$1;
(statearr_29085_29111[(2)] = null);

(statearr_29085_29111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (17))){
var inst_29058 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29086_29112 = state_29076__$1;
(statearr_29086_29112[(2)] = inst_29058);

(statearr_29086_29112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (3))){
var inst_29074 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29076__$1,inst_29074);
} else {
if((state_val_29077 === (12))){
var inst_29035 = (state_29076[(9)]);
var inst_29049 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29035,opts);
var state_29076__$1 = state_29076;
if(cljs.core.truth_(inst_29049)){
var statearr_29087_29113 = state_29076__$1;
(statearr_29087_29113[(1)] = (15));

} else {
var statearr_29088_29114 = state_29076__$1;
(statearr_29088_29114[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (2))){
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29076__$1,(4),ch);
} else {
if((state_val_29077 === (11))){
var inst_29036 = (state_29076[(8)]);
var inst_29041 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29042 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29036);
var inst_29043 = cljs.core.async.timeout.call(null,(1000));
var inst_29044 = [inst_29042,inst_29043];
var inst_29045 = (new cljs.core.PersistentVector(null,2,(5),inst_29041,inst_29044,null));
var state_29076__$1 = state_29076;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29076__$1,(14),inst_29045);
} else {
if((state_val_29077 === (9))){
var inst_29036 = (state_29076[(8)]);
var inst_29062 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29063 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29036);
var inst_29064 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29063);
var inst_29065 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29064)].join('');
var inst_29066 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29065);
var state_29076__$1 = (function (){var statearr_29089 = state_29076;
(statearr_29089[(10)] = inst_29062);

return statearr_29089;
})();
var statearr_29090_29115 = state_29076__$1;
(statearr_29090_29115[(2)] = inst_29066);

(statearr_29090_29115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (5))){
var inst_29029 = (state_29076[(7)]);
var inst_29031 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29032 = (new cljs.core.PersistentArrayMap(null,2,inst_29031,null));
var inst_29033 = (new cljs.core.PersistentHashSet(null,inst_29032,null));
var inst_29034 = figwheel.client.focus_msgs.call(null,inst_29033,inst_29029);
var inst_29035 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29034);
var inst_29036 = cljs.core.first.call(null,inst_29034);
var inst_29037 = figwheel.client.autoload_QMARK_.call(null);
var state_29076__$1 = (function (){var statearr_29091 = state_29076;
(statearr_29091[(9)] = inst_29035);

(statearr_29091[(8)] = inst_29036);

return statearr_29091;
})();
if(cljs.core.truth_(inst_29037)){
var statearr_29092_29116 = state_29076__$1;
(statearr_29092_29116[(1)] = (8));

} else {
var statearr_29093_29117 = state_29076__$1;
(statearr_29093_29117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (14))){
var inst_29047 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29094_29118 = state_29076__$1;
(statearr_29094_29118[(2)] = inst_29047);

(statearr_29094_29118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (16))){
var state_29076__$1 = state_29076;
var statearr_29095_29119 = state_29076__$1;
(statearr_29095_29119[(2)] = null);

(statearr_29095_29119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (10))){
var inst_29068 = (state_29076[(2)]);
var state_29076__$1 = (function (){var statearr_29096 = state_29076;
(statearr_29096[(11)] = inst_29068);

return statearr_29096;
})();
var statearr_29097_29120 = state_29076__$1;
(statearr_29097_29120[(2)] = null);

(statearr_29097_29120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29077 === (8))){
var inst_29035 = (state_29076[(9)]);
var inst_29039 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29035,opts);
var state_29076__$1 = state_29076;
if(cljs.core.truth_(inst_29039)){
var statearr_29098_29121 = state_29076__$1;
(statearr_29098_29121[(1)] = (11));

} else {
var statearr_29099_29122 = state_29076__$1;
(statearr_29099_29122[(1)] = (12));

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
});})(c__23152__auto___29104,ch))
;
return ((function (switch__23062__auto__,c__23152__auto___29104,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_29100 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29100[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__);

(statearr_29100[(1)] = (1));

return statearr_29100;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____1 = (function (state_29076){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_29076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e29101){if((e29101 instanceof Object)){
var ex__23066__auto__ = e29101;
var statearr_29102_29123 = state_29076;
(statearr_29102_29123[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29124 = state_29076;
state_29076 = G__29124;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__ = function(state_29076){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____1.call(this,state_29076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23063__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___29104,ch))
})();
var state__23154__auto__ = (function (){var statearr_29103 = f__23153__auto__.call(null);
(statearr_29103[(6)] = c__23152__auto___29104);

return statearr_29103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___29104,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29125_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29125_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29129 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29129){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29127 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29128 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29127,_STAR_print_fn_STAR_29128,sb,base_path_29129){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_29127,_STAR_print_fn_STAR_29128,sb,base_path_29129))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29128;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29127;
}}catch (e29126){if((e29126 instanceof Error)){
var e = e29126;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29129], null));
} else {
var e = e29126;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29129))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29130){
var map__29131 = p__29130;
var map__29131__$1 = ((((!((map__29131 == null)))?(((((map__29131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29131):map__29131);
var opts = map__29131__$1;
var build_id = cljs.core.get.call(null,map__29131__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29131,map__29131__$1,opts,build_id){
return (function (p__29133){
var vec__29134 = p__29133;
var seq__29135 = cljs.core.seq.call(null,vec__29134);
var first__29136 = cljs.core.first.call(null,seq__29135);
var seq__29135__$1 = cljs.core.next.call(null,seq__29135);
var map__29137 = first__29136;
var map__29137__$1 = ((((!((map__29137 == null)))?(((((map__29137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29137):map__29137);
var msg = map__29137__$1;
var msg_name = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29135__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29134,seq__29135,first__29136,seq__29135__$1,map__29137,map__29137__$1,msg,msg_name,_,map__29131,map__29131__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29134,seq__29135,first__29136,seq__29135__$1,map__29137,map__29137__$1,msg,msg_name,_,map__29131,map__29131__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29131,map__29131__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29139){
var vec__29140 = p__29139;
var seq__29141 = cljs.core.seq.call(null,vec__29140);
var first__29142 = cljs.core.first.call(null,seq__29141);
var seq__29141__$1 = cljs.core.next.call(null,seq__29141);
var map__29143 = first__29142;
var map__29143__$1 = ((((!((map__29143 == null)))?(((((map__29143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29143):map__29143);
var msg = map__29143__$1;
var msg_name = cljs.core.get.call(null,map__29143__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29141__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29145){
var map__29146 = p__29145;
var map__29146__$1 = ((((!((map__29146 == null)))?(((((map__29146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29146):map__29146);
var on_compile_warning = cljs.core.get.call(null,map__29146__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29146__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29146,map__29146__$1,on_compile_warning,on_compile_fail){
return (function (p__29148){
var vec__29149 = p__29148;
var seq__29150 = cljs.core.seq.call(null,vec__29149);
var first__29151 = cljs.core.first.call(null,seq__29150);
var seq__29150__$1 = cljs.core.next.call(null,seq__29150);
var map__29152 = first__29151;
var map__29152__$1 = ((((!((map__29152 == null)))?(((((map__29152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29152):map__29152);
var msg = map__29152__$1;
var msg_name = cljs.core.get.call(null,map__29152__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29150__$1;
var pred__29154 = cljs.core._EQ_;
var expr__29155 = msg_name;
if(cljs.core.truth_(pred__29154.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29155))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29154.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29155))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29146,map__29146__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,msg_hist,msg_names,msg){
return (function (state_29244){
var state_val_29245 = (state_29244[(1)]);
if((state_val_29245 === (7))){
var inst_29164 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29164)){
var statearr_29246_29293 = state_29244__$1;
(statearr_29246_29293[(1)] = (8));

} else {
var statearr_29247_29294 = state_29244__$1;
(statearr_29247_29294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (20))){
var inst_29238 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29248_29295 = state_29244__$1;
(statearr_29248_29295[(2)] = inst_29238);

(statearr_29248_29295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (27))){
var inst_29234 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29249_29296 = state_29244__$1;
(statearr_29249_29296[(2)] = inst_29234);

(statearr_29249_29296[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (1))){
var inst_29157 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29157)){
var statearr_29250_29297 = state_29244__$1;
(statearr_29250_29297[(1)] = (2));

} else {
var statearr_29251_29298 = state_29244__$1;
(statearr_29251_29298[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (24))){
var inst_29236 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29252_29299 = state_29244__$1;
(statearr_29252_29299[(2)] = inst_29236);

(statearr_29252_29299[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (4))){
var inst_29242 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29244__$1,inst_29242);
} else {
if((state_val_29245 === (15))){
var inst_29240 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29253_29300 = state_29244__$1;
(statearr_29253_29300[(2)] = inst_29240);

(statearr_29253_29300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (21))){
var inst_29193 = (state_29244[(2)]);
var inst_29194 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29195 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29194);
var state_29244__$1 = (function (){var statearr_29254 = state_29244;
(statearr_29254[(7)] = inst_29193);

return statearr_29254;
})();
var statearr_29255_29301 = state_29244__$1;
(statearr_29255_29301[(2)] = inst_29195);

(statearr_29255_29301[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (31))){
var inst_29223 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29223)){
var statearr_29256_29302 = state_29244__$1;
(statearr_29256_29302[(1)] = (34));

} else {
var statearr_29257_29303 = state_29244__$1;
(statearr_29257_29303[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (32))){
var inst_29232 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29258_29304 = state_29244__$1;
(statearr_29258_29304[(2)] = inst_29232);

(statearr_29258_29304[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (33))){
var inst_29219 = (state_29244[(2)]);
var inst_29220 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29221 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29220);
var state_29244__$1 = (function (){var statearr_29259 = state_29244;
(statearr_29259[(8)] = inst_29219);

return statearr_29259;
})();
var statearr_29260_29305 = state_29244__$1;
(statearr_29260_29305[(2)] = inst_29221);

(statearr_29260_29305[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (13))){
var inst_29178 = figwheel.client.heads_up.clear.call(null);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(16),inst_29178);
} else {
if((state_val_29245 === (22))){
var inst_29199 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29200 = figwheel.client.heads_up.append_warning_message.call(null,inst_29199);
var state_29244__$1 = state_29244;
var statearr_29261_29306 = state_29244__$1;
(statearr_29261_29306[(2)] = inst_29200);

(statearr_29261_29306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (36))){
var inst_29230 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29262_29307 = state_29244__$1;
(statearr_29262_29307[(2)] = inst_29230);

(statearr_29262_29307[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (29))){
var inst_29210 = (state_29244[(2)]);
var inst_29211 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29212 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29211);
var state_29244__$1 = (function (){var statearr_29263 = state_29244;
(statearr_29263[(9)] = inst_29210);

return statearr_29263;
})();
var statearr_29264_29308 = state_29244__$1;
(statearr_29264_29308[(2)] = inst_29212);

(statearr_29264_29308[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (6))){
var inst_29159 = (state_29244[(10)]);
var state_29244__$1 = state_29244;
var statearr_29265_29309 = state_29244__$1;
(statearr_29265_29309[(2)] = inst_29159);

(statearr_29265_29309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (28))){
var inst_29206 = (state_29244[(2)]);
var inst_29207 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29208 = figwheel.client.heads_up.display_warning.call(null,inst_29207);
var state_29244__$1 = (function (){var statearr_29266 = state_29244;
(statearr_29266[(11)] = inst_29206);

return statearr_29266;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(29),inst_29208);
} else {
if((state_val_29245 === (25))){
var inst_29204 = figwheel.client.heads_up.clear.call(null);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(28),inst_29204);
} else {
if((state_val_29245 === (34))){
var inst_29225 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(37),inst_29225);
} else {
if((state_val_29245 === (17))){
var inst_29184 = (state_29244[(2)]);
var inst_29185 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29186 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29185);
var state_29244__$1 = (function (){var statearr_29267 = state_29244;
(statearr_29267[(12)] = inst_29184);

return statearr_29267;
})();
var statearr_29268_29310 = state_29244__$1;
(statearr_29268_29310[(2)] = inst_29186);

(statearr_29268_29310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (3))){
var inst_29176 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29176)){
var statearr_29269_29311 = state_29244__$1;
(statearr_29269_29311[(1)] = (13));

} else {
var statearr_29270_29312 = state_29244__$1;
(statearr_29270_29312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (12))){
var inst_29172 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29271_29313 = state_29244__$1;
(statearr_29271_29313[(2)] = inst_29172);

(statearr_29271_29313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (2))){
var inst_29159 = (state_29244[(10)]);
var inst_29159__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29244__$1 = (function (){var statearr_29272 = state_29244;
(statearr_29272[(10)] = inst_29159__$1);

return statearr_29272;
})();
if(cljs.core.truth_(inst_29159__$1)){
var statearr_29273_29314 = state_29244__$1;
(statearr_29273_29314[(1)] = (5));

} else {
var statearr_29274_29315 = state_29244__$1;
(statearr_29274_29315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (23))){
var inst_29202 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29202)){
var statearr_29275_29316 = state_29244__$1;
(statearr_29275_29316[(1)] = (25));

} else {
var statearr_29276_29317 = state_29244__$1;
(statearr_29276_29317[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (35))){
var state_29244__$1 = state_29244;
var statearr_29277_29318 = state_29244__$1;
(statearr_29277_29318[(2)] = null);

(statearr_29277_29318[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (19))){
var inst_29197 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29197)){
var statearr_29278_29319 = state_29244__$1;
(statearr_29278_29319[(1)] = (22));

} else {
var statearr_29279_29320 = state_29244__$1;
(statearr_29279_29320[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (11))){
var inst_29168 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29280_29321 = state_29244__$1;
(statearr_29280_29321[(2)] = inst_29168);

(statearr_29280_29321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (9))){
var inst_29170 = figwheel.client.heads_up.clear.call(null);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(12),inst_29170);
} else {
if((state_val_29245 === (5))){
var inst_29161 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29244__$1 = state_29244;
var statearr_29281_29322 = state_29244__$1;
(statearr_29281_29322[(2)] = inst_29161);

(statearr_29281_29322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (14))){
var inst_29188 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29188)){
var statearr_29282_29323 = state_29244__$1;
(statearr_29282_29323[(1)] = (18));

} else {
var statearr_29283_29324 = state_29244__$1;
(statearr_29283_29324[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (26))){
var inst_29214 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29214)){
var statearr_29284_29325 = state_29244__$1;
(statearr_29284_29325[(1)] = (30));

} else {
var statearr_29285_29326 = state_29244__$1;
(statearr_29285_29326[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (16))){
var inst_29180 = (state_29244[(2)]);
var inst_29181 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29182 = figwheel.client.heads_up.display_exception.call(null,inst_29181);
var state_29244__$1 = (function (){var statearr_29286 = state_29244;
(statearr_29286[(13)] = inst_29180);

return statearr_29286;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(17),inst_29182);
} else {
if((state_val_29245 === (30))){
var inst_29216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29217 = figwheel.client.heads_up.display_warning.call(null,inst_29216);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(33),inst_29217);
} else {
if((state_val_29245 === (10))){
var inst_29174 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29287_29327 = state_29244__$1;
(statearr_29287_29327[(2)] = inst_29174);

(statearr_29287_29327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (18))){
var inst_29190 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29191 = figwheel.client.heads_up.display_exception.call(null,inst_29190);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(21),inst_29191);
} else {
if((state_val_29245 === (37))){
var inst_29227 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29288_29328 = state_29244__$1;
(statearr_29288_29328[(2)] = inst_29227);

(statearr_29288_29328[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (8))){
var inst_29166 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(11),inst_29166);
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
});})(c__23152__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23062__auto__,c__23152__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____0 = (function (){
var statearr_29289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29289[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__);

(statearr_29289[(1)] = (1));

return statearr_29289;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____1 = (function (state_29244){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_29244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e29290){if((e29290 instanceof Object)){
var ex__23066__auto__ = e29290;
var statearr_29291_29329 = state_29244;
(statearr_29291_29329[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29330 = state_29244;
state_29244 = G__29330;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__ = function(state_29244){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____1.call(this,state_29244);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,msg_hist,msg_names,msg))
})();
var state__23154__auto__ = (function (){var statearr_29292 = f__23153__auto__.call(null);
(statearr_29292[(6)] = c__23152__auto__);

return statearr_29292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,msg_hist,msg_names,msg))
);

return c__23152__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23152__auto___29359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___29359,ch){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___29359,ch){
return (function (state_29345){
var state_val_29346 = (state_29345[(1)]);
if((state_val_29346 === (1))){
var state_29345__$1 = state_29345;
var statearr_29347_29360 = state_29345__$1;
(statearr_29347_29360[(2)] = null);

(statearr_29347_29360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (2))){
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29345__$1,(4),ch);
} else {
if((state_val_29346 === (3))){
var inst_29343 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29345__$1,inst_29343);
} else {
if((state_val_29346 === (4))){
var inst_29333 = (state_29345[(7)]);
var inst_29333__$1 = (state_29345[(2)]);
var state_29345__$1 = (function (){var statearr_29348 = state_29345;
(statearr_29348[(7)] = inst_29333__$1);

return statearr_29348;
})();
if(cljs.core.truth_(inst_29333__$1)){
var statearr_29349_29361 = state_29345__$1;
(statearr_29349_29361[(1)] = (5));

} else {
var statearr_29350_29362 = state_29345__$1;
(statearr_29350_29362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (5))){
var inst_29333 = (state_29345[(7)]);
var inst_29335 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29333);
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29345__$1,(8),inst_29335);
} else {
if((state_val_29346 === (6))){
var state_29345__$1 = state_29345;
var statearr_29351_29363 = state_29345__$1;
(statearr_29351_29363[(2)] = null);

(statearr_29351_29363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (7))){
var inst_29341 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
var statearr_29352_29364 = state_29345__$1;
(statearr_29352_29364[(2)] = inst_29341);

(statearr_29352_29364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (8))){
var inst_29337 = (state_29345[(2)]);
var state_29345__$1 = (function (){var statearr_29353 = state_29345;
(statearr_29353[(8)] = inst_29337);

return statearr_29353;
})();
var statearr_29354_29365 = state_29345__$1;
(statearr_29354_29365[(2)] = null);

(statearr_29354_29365[(1)] = (2));


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
});})(c__23152__auto___29359,ch))
;
return ((function (switch__23062__auto__,c__23152__auto___29359,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_29355 = [null,null,null,null,null,null,null,null,null];
(statearr_29355[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23063__auto__);

(statearr_29355[(1)] = (1));

return statearr_29355;
});
var figwheel$client$heads_up_plugin_$_state_machine__23063__auto____1 = (function (state_29345){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_29345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e29356){if((e29356 instanceof Object)){
var ex__23066__auto__ = e29356;
var statearr_29357_29366 = state_29345;
(statearr_29357_29366[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29367 = state_29345;
state_29345 = G__29367;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23063__auto__ = function(state_29345){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23063__auto____1.call(this,state_29345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23063__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23063__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___29359,ch))
})();
var state__23154__auto__ = (function (){var statearr_29358 = f__23153__auto__.call(null);
(statearr_29358[(6)] = c__23152__auto___29359);

return statearr_29358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___29359,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__){
return (function (state_29373){
var state_val_29374 = (state_29373[(1)]);
if((state_val_29374 === (1))){
var inst_29368 = cljs.core.async.timeout.call(null,(3000));
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29373__$1,(2),inst_29368);
} else {
if((state_val_29374 === (2))){
var inst_29370 = (state_29373[(2)]);
var inst_29371 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29373__$1 = (function (){var statearr_29375 = state_29373;
(statearr_29375[(7)] = inst_29370);

return statearr_29375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29373__$1,inst_29371);
} else {
return null;
}
}
});})(c__23152__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_29376 = [null,null,null,null,null,null,null,null];
(statearr_29376[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__);

(statearr_29376[(1)] = (1));

return statearr_29376;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____1 = (function (state_29373){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_29373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e29377){if((e29377 instanceof Object)){
var ex__23066__auto__ = e29377;
var statearr_29378_29380 = state_29373;
(statearr_29378_29380[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29381 = state_29373;
state_29373 = G__29381;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__ = function(state_29373){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____1.call(this,state_29373);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23063__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__))
})();
var state__23154__auto__ = (function (){var statearr_29379 = f__23153__auto__.call(null);
(statearr_29379[(6)] = c__23152__auto__);

return statearr_29379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__))
);

return c__23152__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,figwheel_version,temp__5457__auto__){
return (function (state_29388){
var state_val_29389 = (state_29388[(1)]);
if((state_val_29389 === (1))){
var inst_29382 = cljs.core.async.timeout.call(null,(2000));
var state_29388__$1 = state_29388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29388__$1,(2),inst_29382);
} else {
if((state_val_29389 === (2))){
var inst_29384 = (state_29388[(2)]);
var inst_29385 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29386 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29385);
var state_29388__$1 = (function (){var statearr_29390 = state_29388;
(statearr_29390[(7)] = inst_29384);

return statearr_29390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29388__$1,inst_29386);
} else {
return null;
}
}
});})(c__23152__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____0 = (function (){
var statearr_29391 = [null,null,null,null,null,null,null,null];
(statearr_29391[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__);

(statearr_29391[(1)] = (1));

return statearr_29391;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____1 = (function (state_29388){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_29388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e29392){if((e29392 instanceof Object)){
var ex__23066__auto__ = e29392;
var statearr_29393_29395 = state_29388;
(statearr_29393_29395[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29396 = state_29388;
state_29388 = G__29396;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__ = function(state_29388){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____1.call(this,state_29388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23154__auto__ = (function (){var statearr_29394 = f__23153__auto__.call(null);
(statearr_29394[(6)] = c__23152__auto__);

return statearr_29394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,figwheel_version,temp__5457__auto__))
);

return c__23152__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29397){
var map__29398 = p__29397;
var map__29398__$1 = ((((!((map__29398 == null)))?(((((map__29398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29398):map__29398);
var file = cljs.core.get.call(null,map__29398__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29398__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29398__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29400 = "";
var G__29400__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29400),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29400);
var G__29400__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29400__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29400__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29400__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29400__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29401){
var map__29402 = p__29401;
var map__29402__$1 = ((((!((map__29402 == null)))?(((((map__29402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29402):map__29402);
var ed = map__29402__$1;
var formatted_exception = cljs.core.get.call(null,map__29402__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29402__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29402__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29404_29408 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29405_29409 = null;
var count__29406_29410 = (0);
var i__29407_29411 = (0);
while(true){
if((i__29407_29411 < count__29406_29410)){
var msg_29412 = cljs.core._nth.call(null,chunk__29405_29409,i__29407_29411);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29412);


var G__29413 = seq__29404_29408;
var G__29414 = chunk__29405_29409;
var G__29415 = count__29406_29410;
var G__29416 = (i__29407_29411 + (1));
seq__29404_29408 = G__29413;
chunk__29405_29409 = G__29414;
count__29406_29410 = G__29415;
i__29407_29411 = G__29416;
continue;
} else {
var temp__5457__auto___29417 = cljs.core.seq.call(null,seq__29404_29408);
if(temp__5457__auto___29417){
var seq__29404_29418__$1 = temp__5457__auto___29417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29404_29418__$1)){
var c__4319__auto___29419 = cljs.core.chunk_first.call(null,seq__29404_29418__$1);
var G__29420 = cljs.core.chunk_rest.call(null,seq__29404_29418__$1);
var G__29421 = c__4319__auto___29419;
var G__29422 = cljs.core.count.call(null,c__4319__auto___29419);
var G__29423 = (0);
seq__29404_29408 = G__29420;
chunk__29405_29409 = G__29421;
count__29406_29410 = G__29422;
i__29407_29411 = G__29423;
continue;
} else {
var msg_29424 = cljs.core.first.call(null,seq__29404_29418__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29424);


var G__29425 = cljs.core.next.call(null,seq__29404_29418__$1);
var G__29426 = null;
var G__29427 = (0);
var G__29428 = (0);
seq__29404_29408 = G__29425;
chunk__29405_29409 = G__29426;
count__29406_29410 = G__29427;
i__29407_29411 = G__29428;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29429){
var map__29430 = p__29429;
var map__29430__$1 = ((((!((map__29430 == null)))?(((((map__29430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29430):map__29430);
var w = map__29430__$1;
var message = cljs.core.get.call(null,map__29430__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29432 = cljs.core.seq.call(null,plugins);
var chunk__29433 = null;
var count__29434 = (0);
var i__29435 = (0);
while(true){
if((i__29435 < count__29434)){
var vec__29436 = cljs.core._nth.call(null,chunk__29433,i__29435);
var k = cljs.core.nth.call(null,vec__29436,(0),null);
var plugin = cljs.core.nth.call(null,vec__29436,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29442 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29432,chunk__29433,count__29434,i__29435,pl_29442,vec__29436,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29442.call(null,msg_hist);
});})(seq__29432,chunk__29433,count__29434,i__29435,pl_29442,vec__29436,k,plugin))
);
} else {
}


var G__29443 = seq__29432;
var G__29444 = chunk__29433;
var G__29445 = count__29434;
var G__29446 = (i__29435 + (1));
seq__29432 = G__29443;
chunk__29433 = G__29444;
count__29434 = G__29445;
i__29435 = G__29446;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29432);
if(temp__5457__auto__){
var seq__29432__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29432__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29432__$1);
var G__29447 = cljs.core.chunk_rest.call(null,seq__29432__$1);
var G__29448 = c__4319__auto__;
var G__29449 = cljs.core.count.call(null,c__4319__auto__);
var G__29450 = (0);
seq__29432 = G__29447;
chunk__29433 = G__29448;
count__29434 = G__29449;
i__29435 = G__29450;
continue;
} else {
var vec__29439 = cljs.core.first.call(null,seq__29432__$1);
var k = cljs.core.nth.call(null,vec__29439,(0),null);
var plugin = cljs.core.nth.call(null,vec__29439,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29451 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29432,chunk__29433,count__29434,i__29435,pl_29451,vec__29439,k,plugin,seq__29432__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29451.call(null,msg_hist);
});})(seq__29432,chunk__29433,count__29434,i__29435,pl_29451,vec__29439,k,plugin,seq__29432__$1,temp__5457__auto__))
);
} else {
}


var G__29452 = cljs.core.next.call(null,seq__29432__$1);
var G__29453 = null;
var G__29454 = (0);
var G__29455 = (0);
seq__29432 = G__29452;
chunk__29433 = G__29453;
count__29434 = G__29454;
i__29435 = G__29455;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29457 = arguments.length;
switch (G__29457) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29458_29463 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29459_29464 = null;
var count__29460_29465 = (0);
var i__29461_29466 = (0);
while(true){
if((i__29461_29466 < count__29460_29465)){
var msg_29467 = cljs.core._nth.call(null,chunk__29459_29464,i__29461_29466);
figwheel.client.socket.handle_incoming_message.call(null,msg_29467);


var G__29468 = seq__29458_29463;
var G__29469 = chunk__29459_29464;
var G__29470 = count__29460_29465;
var G__29471 = (i__29461_29466 + (1));
seq__29458_29463 = G__29468;
chunk__29459_29464 = G__29469;
count__29460_29465 = G__29470;
i__29461_29466 = G__29471;
continue;
} else {
var temp__5457__auto___29472 = cljs.core.seq.call(null,seq__29458_29463);
if(temp__5457__auto___29472){
var seq__29458_29473__$1 = temp__5457__auto___29472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29458_29473__$1)){
var c__4319__auto___29474 = cljs.core.chunk_first.call(null,seq__29458_29473__$1);
var G__29475 = cljs.core.chunk_rest.call(null,seq__29458_29473__$1);
var G__29476 = c__4319__auto___29474;
var G__29477 = cljs.core.count.call(null,c__4319__auto___29474);
var G__29478 = (0);
seq__29458_29463 = G__29475;
chunk__29459_29464 = G__29476;
count__29460_29465 = G__29477;
i__29461_29466 = G__29478;
continue;
} else {
var msg_29479 = cljs.core.first.call(null,seq__29458_29473__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29479);


var G__29480 = cljs.core.next.call(null,seq__29458_29473__$1);
var G__29481 = null;
var G__29482 = (0);
var G__29483 = (0);
seq__29458_29463 = G__29480;
chunk__29459_29464 = G__29481;
count__29460_29465 = G__29482;
i__29461_29466 = G__29483;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29488 = arguments.length;
var i__4500__auto___29489 = (0);
while(true){
if((i__4500__auto___29489 < len__4499__auto___29488)){
args__4502__auto__.push((arguments[i__4500__auto___29489]));

var G__29490 = (i__4500__auto___29489 + (1));
i__4500__auto___29489 = G__29490;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29485){
var map__29486 = p__29485;
var map__29486__$1 = ((((!((map__29486 == null)))?(((((map__29486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29486):map__29486);
var opts = map__29486__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29484){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29484));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29491){if((e29491 instanceof Error)){
var e = e29491;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29491;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29492){
var map__29493 = p__29492;
var map__29493__$1 = ((((!((map__29493 == null)))?(((((map__29493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29493):map__29493);
var msg_name = cljs.core.get.call(null,map__29493__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1534859005808
