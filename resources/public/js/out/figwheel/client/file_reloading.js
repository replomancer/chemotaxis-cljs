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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27256_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27256_SHARP_));
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
var seq__27257 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27258 = null;
var count__27259 = (0);
var i__27260 = (0);
while(true){
if((i__27260 < count__27259)){
var n = cljs.core._nth.call(null,chunk__27258,i__27260);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27261 = seq__27257;
var G__27262 = chunk__27258;
var G__27263 = count__27259;
var G__27264 = (i__27260 + (1));
seq__27257 = G__27261;
chunk__27258 = G__27262;
count__27259 = G__27263;
i__27260 = G__27264;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27257);
if(temp__5457__auto__){
var seq__27257__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27257__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27257__$1);
var G__27265 = cljs.core.chunk_rest.call(null,seq__27257__$1);
var G__27266 = c__4319__auto__;
var G__27267 = cljs.core.count.call(null,c__4319__auto__);
var G__27268 = (0);
seq__27257 = G__27265;
chunk__27258 = G__27266;
count__27259 = G__27267;
i__27260 = G__27268;
continue;
} else {
var n = cljs.core.first.call(null,seq__27257__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27269 = cljs.core.next.call(null,seq__27257__$1);
var G__27270 = null;
var G__27271 = (0);
var G__27272 = (0);
seq__27257 = G__27269;
chunk__27258 = G__27270;
count__27259 = G__27271;
i__27260 = G__27272;
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
return cljs.core.some.call(null,(function (p__27273){
var vec__27274 = p__27273;
var _ = cljs.core.nth.call(null,vec__27274,(0),null);
var v = cljs.core.nth.call(null,vec__27274,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__27277){
var vec__27278 = p__27277;
var k = cljs.core.nth.call(null,vec__27278,(0),null);
var v = cljs.core.nth.call(null,vec__27278,(1),null);
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

var seq__27290_27298 = cljs.core.seq.call(null,deps);
var chunk__27291_27299 = null;
var count__27292_27300 = (0);
var i__27293_27301 = (0);
while(true){
if((i__27293_27301 < count__27292_27300)){
var dep_27302 = cljs.core._nth.call(null,chunk__27291_27299,i__27293_27301);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_27302;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27302));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27302,(depth + (1)),state);
} else {
}


var G__27303 = seq__27290_27298;
var G__27304 = chunk__27291_27299;
var G__27305 = count__27292_27300;
var G__27306 = (i__27293_27301 + (1));
seq__27290_27298 = G__27303;
chunk__27291_27299 = G__27304;
count__27292_27300 = G__27305;
i__27293_27301 = G__27306;
continue;
} else {
var temp__5457__auto___27307 = cljs.core.seq.call(null,seq__27290_27298);
if(temp__5457__auto___27307){
var seq__27290_27308__$1 = temp__5457__auto___27307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27290_27308__$1)){
var c__4319__auto___27309 = cljs.core.chunk_first.call(null,seq__27290_27308__$1);
var G__27310 = cljs.core.chunk_rest.call(null,seq__27290_27308__$1);
var G__27311 = c__4319__auto___27309;
var G__27312 = cljs.core.count.call(null,c__4319__auto___27309);
var G__27313 = (0);
seq__27290_27298 = G__27310;
chunk__27291_27299 = G__27311;
count__27292_27300 = G__27312;
i__27293_27301 = G__27313;
continue;
} else {
var dep_27314 = cljs.core.first.call(null,seq__27290_27308__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_27314;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27314));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27314,(depth + (1)),state);
} else {
}


var G__27315 = cljs.core.next.call(null,seq__27290_27308__$1);
var G__27316 = null;
var G__27317 = (0);
var G__27318 = (0);
seq__27290_27298 = G__27315;
chunk__27291_27299 = G__27316;
count__27292_27300 = G__27317;
i__27293_27301 = G__27318;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27294){
var vec__27295 = p__27294;
var seq__27296 = cljs.core.seq.call(null,vec__27295);
var first__27297 = cljs.core.first.call(null,seq__27296);
var seq__27296__$1 = cljs.core.next.call(null,seq__27296);
var x = first__27297;
var xs = seq__27296__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27295,seq__27296,first__27297,seq__27296__$1,x,xs,get_deps__$1){
return (function (p1__27281_SHARP_){
return clojure.set.difference.call(null,p1__27281_SHARP_,x);
});})(vec__27295,seq__27296,first__27297,seq__27296__$1,x,xs,get_deps__$1))
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
var seq__27319 = cljs.core.seq.call(null,provides);
var chunk__27320 = null;
var count__27321 = (0);
var i__27322 = (0);
while(true){
if((i__27322 < count__27321)){
var prov = cljs.core._nth.call(null,chunk__27320,i__27322);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27323_27331 = cljs.core.seq.call(null,requires);
var chunk__27324_27332 = null;
var count__27325_27333 = (0);
var i__27326_27334 = (0);
while(true){
if((i__27326_27334 < count__27325_27333)){
var req_27335 = cljs.core._nth.call(null,chunk__27324_27332,i__27326_27334);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27335,prov);


var G__27336 = seq__27323_27331;
var G__27337 = chunk__27324_27332;
var G__27338 = count__27325_27333;
var G__27339 = (i__27326_27334 + (1));
seq__27323_27331 = G__27336;
chunk__27324_27332 = G__27337;
count__27325_27333 = G__27338;
i__27326_27334 = G__27339;
continue;
} else {
var temp__5457__auto___27340 = cljs.core.seq.call(null,seq__27323_27331);
if(temp__5457__auto___27340){
var seq__27323_27341__$1 = temp__5457__auto___27340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27323_27341__$1)){
var c__4319__auto___27342 = cljs.core.chunk_first.call(null,seq__27323_27341__$1);
var G__27343 = cljs.core.chunk_rest.call(null,seq__27323_27341__$1);
var G__27344 = c__4319__auto___27342;
var G__27345 = cljs.core.count.call(null,c__4319__auto___27342);
var G__27346 = (0);
seq__27323_27331 = G__27343;
chunk__27324_27332 = G__27344;
count__27325_27333 = G__27345;
i__27326_27334 = G__27346;
continue;
} else {
var req_27347 = cljs.core.first.call(null,seq__27323_27341__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27347,prov);


var G__27348 = cljs.core.next.call(null,seq__27323_27341__$1);
var G__27349 = null;
var G__27350 = (0);
var G__27351 = (0);
seq__27323_27331 = G__27348;
chunk__27324_27332 = G__27349;
count__27325_27333 = G__27350;
i__27326_27334 = G__27351;
continue;
}
} else {
}
}
break;
}


var G__27352 = seq__27319;
var G__27353 = chunk__27320;
var G__27354 = count__27321;
var G__27355 = (i__27322 + (1));
seq__27319 = G__27352;
chunk__27320 = G__27353;
count__27321 = G__27354;
i__27322 = G__27355;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27319);
if(temp__5457__auto__){
var seq__27319__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27319__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__27319__$1);
var G__27356 = cljs.core.chunk_rest.call(null,seq__27319__$1);
var G__27357 = c__4319__auto__;
var G__27358 = cljs.core.count.call(null,c__4319__auto__);
var G__27359 = (0);
seq__27319 = G__27356;
chunk__27320 = G__27357;
count__27321 = G__27358;
i__27322 = G__27359;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27319__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27327_27360 = cljs.core.seq.call(null,requires);
var chunk__27328_27361 = null;
var count__27329_27362 = (0);
var i__27330_27363 = (0);
while(true){
if((i__27330_27363 < count__27329_27362)){
var req_27364 = cljs.core._nth.call(null,chunk__27328_27361,i__27330_27363);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27364,prov);


var G__27365 = seq__27327_27360;
var G__27366 = chunk__27328_27361;
var G__27367 = count__27329_27362;
var G__27368 = (i__27330_27363 + (1));
seq__27327_27360 = G__27365;
chunk__27328_27361 = G__27366;
count__27329_27362 = G__27367;
i__27330_27363 = G__27368;
continue;
} else {
var temp__5457__auto___27369__$1 = cljs.core.seq.call(null,seq__27327_27360);
if(temp__5457__auto___27369__$1){
var seq__27327_27370__$1 = temp__5457__auto___27369__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27327_27370__$1)){
var c__4319__auto___27371 = cljs.core.chunk_first.call(null,seq__27327_27370__$1);
var G__27372 = cljs.core.chunk_rest.call(null,seq__27327_27370__$1);
var G__27373 = c__4319__auto___27371;
var G__27374 = cljs.core.count.call(null,c__4319__auto___27371);
var G__27375 = (0);
seq__27327_27360 = G__27372;
chunk__27328_27361 = G__27373;
count__27329_27362 = G__27374;
i__27330_27363 = G__27375;
continue;
} else {
var req_27376 = cljs.core.first.call(null,seq__27327_27370__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27376,prov);


var G__27377 = cljs.core.next.call(null,seq__27327_27370__$1);
var G__27378 = null;
var G__27379 = (0);
var G__27380 = (0);
seq__27327_27360 = G__27377;
chunk__27328_27361 = G__27378;
count__27329_27362 = G__27379;
i__27330_27363 = G__27380;
continue;
}
} else {
}
}
break;
}


var G__27381 = cljs.core.next.call(null,seq__27319__$1);
var G__27382 = null;
var G__27383 = (0);
var G__27384 = (0);
seq__27319 = G__27381;
chunk__27320 = G__27382;
count__27321 = G__27383;
i__27322 = G__27384;
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
var seq__27385_27389 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27386_27390 = null;
var count__27387_27391 = (0);
var i__27388_27392 = (0);
while(true){
if((i__27388_27392 < count__27387_27391)){
var ns_27393 = cljs.core._nth.call(null,chunk__27386_27390,i__27388_27392);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27393);


var G__27394 = seq__27385_27389;
var G__27395 = chunk__27386_27390;
var G__27396 = count__27387_27391;
var G__27397 = (i__27388_27392 + (1));
seq__27385_27389 = G__27394;
chunk__27386_27390 = G__27395;
count__27387_27391 = G__27396;
i__27388_27392 = G__27397;
continue;
} else {
var temp__5457__auto___27398 = cljs.core.seq.call(null,seq__27385_27389);
if(temp__5457__auto___27398){
var seq__27385_27399__$1 = temp__5457__auto___27398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27385_27399__$1)){
var c__4319__auto___27400 = cljs.core.chunk_first.call(null,seq__27385_27399__$1);
var G__27401 = cljs.core.chunk_rest.call(null,seq__27385_27399__$1);
var G__27402 = c__4319__auto___27400;
var G__27403 = cljs.core.count.call(null,c__4319__auto___27400);
var G__27404 = (0);
seq__27385_27389 = G__27401;
chunk__27386_27390 = G__27402;
count__27387_27391 = G__27403;
i__27388_27392 = G__27404;
continue;
} else {
var ns_27405 = cljs.core.first.call(null,seq__27385_27399__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27405);


var G__27406 = cljs.core.next.call(null,seq__27385_27399__$1);
var G__27407 = null;
var G__27408 = (0);
var G__27409 = (0);
seq__27385_27389 = G__27406;
chunk__27386_27390 = G__27407;
count__27387_27391 = G__27408;
i__27388_27392 = G__27409;
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
var G__27410__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27411__i = 0, G__27411__a = new Array(arguments.length -  0);
while (G__27411__i < G__27411__a.length) {G__27411__a[G__27411__i] = arguments[G__27411__i + 0]; ++G__27411__i;}
  args = new cljs.core.IndexedSeq(G__27411__a,0,null);
} 
return G__27410__delegate.call(this,args);};
G__27410.cljs$lang$maxFixedArity = 0;
G__27410.cljs$lang$applyTo = (function (arglist__27412){
var args = cljs.core.seq(arglist__27412);
return G__27410__delegate(args);
});
G__27410.cljs$core$IFn$_invoke$arity$variadic = G__27410__delegate;
return G__27410;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__27413_SHARP_,p2__27414_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27413_SHARP_)].join('')),p2__27414_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__27415_SHARP_,p2__27416_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27415_SHARP_)].join(''),p2__27416_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27417 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27417.addCallback(((function (G__27417){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27417))
);

G__27417.addErrback(((function (G__27417){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27417))
);

return G__27417;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27418){if((e27418 instanceof Error)){
var e = e27418;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27418;

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
}catch (e27419){if((e27419 instanceof Error)){
var e = e27419;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27419;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27420 = cljs.core._EQ_;
var expr__27421 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27420.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27421))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27420.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27421))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27420.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27421))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27420,expr__27421){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27420,expr__27421))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27423,callback){
var map__27424 = p__27423;
var map__27424__$1 = ((((!((map__27424 == null)))?(((((map__27424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27424):map__27424);
var file_msg = map__27424__$1;
var request_url = cljs.core.get.call(null,map__27424__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27424,map__27424__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27424,map__27424__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__){
return (function (state_27462){
var state_val_27463 = (state_27462[(1)]);
if((state_val_27463 === (7))){
var inst_27458 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27464_27490 = state_27462__$1;
(statearr_27464_27490[(2)] = inst_27458);

(statearr_27464_27490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (1))){
var state_27462__$1 = state_27462;
var statearr_27465_27491 = state_27462__$1;
(statearr_27465_27491[(2)] = null);

(statearr_27465_27491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (4))){
var inst_27428 = (state_27462[(7)]);
var inst_27428__$1 = (state_27462[(2)]);
var state_27462__$1 = (function (){var statearr_27466 = state_27462;
(statearr_27466[(7)] = inst_27428__$1);

return statearr_27466;
})();
if(cljs.core.truth_(inst_27428__$1)){
var statearr_27467_27492 = state_27462__$1;
(statearr_27467_27492[(1)] = (5));

} else {
var statearr_27468_27493 = state_27462__$1;
(statearr_27468_27493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (15))){
var inst_27443 = (state_27462[(8)]);
var inst_27441 = (state_27462[(9)]);
var inst_27445 = inst_27443.call(null,inst_27441);
var state_27462__$1 = state_27462;
var statearr_27469_27494 = state_27462__$1;
(statearr_27469_27494[(2)] = inst_27445);

(statearr_27469_27494[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (13))){
var inst_27452 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27470_27495 = state_27462__$1;
(statearr_27470_27495[(2)] = inst_27452);

(statearr_27470_27495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (6))){
var state_27462__$1 = state_27462;
var statearr_27471_27496 = state_27462__$1;
(statearr_27471_27496[(2)] = null);

(statearr_27471_27496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (17))){
var inst_27449 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27472_27497 = state_27462__$1;
(statearr_27472_27497[(2)] = inst_27449);

(statearr_27472_27497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (3))){
var inst_27460 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27462__$1,inst_27460);
} else {
if((state_val_27463 === (12))){
var state_27462__$1 = state_27462;
var statearr_27473_27498 = state_27462__$1;
(statearr_27473_27498[(2)] = null);

(statearr_27473_27498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (2))){
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27462__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27463 === (11))){
var inst_27433 = (state_27462[(10)]);
var inst_27439 = figwheel.client.file_reloading.blocking_load.call(null,inst_27433);
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27462__$1,(14),inst_27439);
} else {
if((state_val_27463 === (9))){
var inst_27433 = (state_27462[(10)]);
var state_27462__$1 = state_27462;
if(cljs.core.truth_(inst_27433)){
var statearr_27474_27499 = state_27462__$1;
(statearr_27474_27499[(1)] = (11));

} else {
var statearr_27475_27500 = state_27462__$1;
(statearr_27475_27500[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (5))){
var inst_27428 = (state_27462[(7)]);
var inst_27434 = (state_27462[(11)]);
var inst_27433 = cljs.core.nth.call(null,inst_27428,(0),null);
var inst_27434__$1 = cljs.core.nth.call(null,inst_27428,(1),null);
var state_27462__$1 = (function (){var statearr_27476 = state_27462;
(statearr_27476[(10)] = inst_27433);

(statearr_27476[(11)] = inst_27434__$1);

return statearr_27476;
})();
if(cljs.core.truth_(inst_27434__$1)){
var statearr_27477_27501 = state_27462__$1;
(statearr_27477_27501[(1)] = (8));

} else {
var statearr_27478_27502 = state_27462__$1;
(statearr_27478_27502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (14))){
var inst_27443 = (state_27462[(8)]);
var inst_27433 = (state_27462[(10)]);
var inst_27441 = (state_27462[(2)]);
var inst_27442 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27443__$1 = cljs.core.get.call(null,inst_27442,inst_27433);
var state_27462__$1 = (function (){var statearr_27479 = state_27462;
(statearr_27479[(8)] = inst_27443__$1);

(statearr_27479[(9)] = inst_27441);

return statearr_27479;
})();
if(cljs.core.truth_(inst_27443__$1)){
var statearr_27480_27503 = state_27462__$1;
(statearr_27480_27503[(1)] = (15));

} else {
var statearr_27481_27504 = state_27462__$1;
(statearr_27481_27504[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (16))){
var inst_27441 = (state_27462[(9)]);
var inst_27447 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27441);
var state_27462__$1 = state_27462;
var statearr_27482_27505 = state_27462__$1;
(statearr_27482_27505[(2)] = inst_27447);

(statearr_27482_27505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (10))){
var inst_27454 = (state_27462[(2)]);
var state_27462__$1 = (function (){var statearr_27483 = state_27462;
(statearr_27483[(12)] = inst_27454);

return statearr_27483;
})();
var statearr_27484_27506 = state_27462__$1;
(statearr_27484_27506[(2)] = null);

(statearr_27484_27506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (8))){
var inst_27434 = (state_27462[(11)]);
var inst_27436 = eval(inst_27434);
var state_27462__$1 = state_27462;
var statearr_27485_27507 = state_27462__$1;
(statearr_27485_27507[(2)] = inst_27436);

(statearr_27485_27507[(1)] = (10));


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
});})(c__23152__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23063__auto__ = null;
var figwheel$client$file_reloading$state_machine__23063__auto____0 = (function (){
var statearr_27486 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27486[(0)] = figwheel$client$file_reloading$state_machine__23063__auto__);

(statearr_27486[(1)] = (1));

return statearr_27486;
});
var figwheel$client$file_reloading$state_machine__23063__auto____1 = (function (state_27462){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_27462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e27487){if((e27487 instanceof Object)){
var ex__23066__auto__ = e27487;
var statearr_27488_27508 = state_27462;
(statearr_27488_27508[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27509 = state_27462;
state_27462 = G__27509;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23063__auto__ = function(state_27462){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23063__auto____1.call(this,state_27462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23063__auto____0;
figwheel$client$file_reloading$state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23063__auto____1;
return figwheel$client$file_reloading$state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__))
})();
var state__23154__auto__ = (function (){var statearr_27489 = f__23153__auto__.call(null);
(statearr_27489[(6)] = c__23152__auto__);

return statearr_27489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__))
);

return c__23152__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27511 = arguments.length;
switch (G__27511) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27513,callback){
var map__27514 = p__27513;
var map__27514__$1 = ((((!((map__27514 == null)))?(((((map__27514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27514):map__27514);
var file_msg = map__27514__$1;
var namespace = cljs.core.get.call(null,map__27514__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27514,map__27514__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27514,map__27514__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27516){
var map__27517 = p__27516;
var map__27517__$1 = ((((!((map__27517 == null)))?(((((map__27517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27517):map__27517);
var file_msg = map__27517__$1;
var namespace = cljs.core.get.call(null,map__27517__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27519){
var map__27520 = p__27519;
var map__27520__$1 = ((((!((map__27520 == null)))?(((((map__27520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27520):map__27520);
var file_msg = map__27520__$1;
var namespace = cljs.core.get.call(null,map__27520__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27522,callback){
var map__27523 = p__27522;
var map__27523__$1 = ((((!((map__27523 == null)))?(((((map__27523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27523):map__27523);
var file_msg = map__27523__$1;
var request_url = cljs.core.get.call(null,map__27523__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27523__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23152__auto___27573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto___27573,out){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto___27573,out){
return (function (state_27558){
var state_val_27559 = (state_27558[(1)]);
if((state_val_27559 === (1))){
var inst_27532 = cljs.core.seq.call(null,files);
var inst_27533 = cljs.core.first.call(null,inst_27532);
var inst_27534 = cljs.core.next.call(null,inst_27532);
var inst_27535 = files;
var state_27558__$1 = (function (){var statearr_27560 = state_27558;
(statearr_27560[(7)] = inst_27535);

(statearr_27560[(8)] = inst_27534);

(statearr_27560[(9)] = inst_27533);

return statearr_27560;
})();
var statearr_27561_27574 = state_27558__$1;
(statearr_27561_27574[(2)] = null);

(statearr_27561_27574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (2))){
var inst_27535 = (state_27558[(7)]);
var inst_27541 = (state_27558[(10)]);
var inst_27540 = cljs.core.seq.call(null,inst_27535);
var inst_27541__$1 = cljs.core.first.call(null,inst_27540);
var inst_27542 = cljs.core.next.call(null,inst_27540);
var inst_27543 = (inst_27541__$1 == null);
var inst_27544 = cljs.core.not.call(null,inst_27543);
var state_27558__$1 = (function (){var statearr_27562 = state_27558;
(statearr_27562[(11)] = inst_27542);

(statearr_27562[(10)] = inst_27541__$1);

return statearr_27562;
})();
if(inst_27544){
var statearr_27563_27575 = state_27558__$1;
(statearr_27563_27575[(1)] = (4));

} else {
var statearr_27564_27576 = state_27558__$1;
(statearr_27564_27576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (3))){
var inst_27556 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27558__$1,inst_27556);
} else {
if((state_val_27559 === (4))){
var inst_27541 = (state_27558[(10)]);
var inst_27546 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27541);
var state_27558__$1 = state_27558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27558__$1,(7),inst_27546);
} else {
if((state_val_27559 === (5))){
var inst_27552 = cljs.core.async.close_BANG_.call(null,out);
var state_27558__$1 = state_27558;
var statearr_27565_27577 = state_27558__$1;
(statearr_27565_27577[(2)] = inst_27552);

(statearr_27565_27577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (6))){
var inst_27554 = (state_27558[(2)]);
var state_27558__$1 = state_27558;
var statearr_27566_27578 = state_27558__$1;
(statearr_27566_27578[(2)] = inst_27554);

(statearr_27566_27578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27559 === (7))){
var inst_27542 = (state_27558[(11)]);
var inst_27548 = (state_27558[(2)]);
var inst_27549 = cljs.core.async.put_BANG_.call(null,out,inst_27548);
var inst_27535 = inst_27542;
var state_27558__$1 = (function (){var statearr_27567 = state_27558;
(statearr_27567[(12)] = inst_27549);

(statearr_27567[(7)] = inst_27535);

return statearr_27567;
})();
var statearr_27568_27579 = state_27558__$1;
(statearr_27568_27579[(2)] = null);

(statearr_27568_27579[(1)] = (2));


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
});})(c__23152__auto___27573,out))
;
return ((function (switch__23062__auto__,c__23152__auto___27573,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____0 = (function (){
var statearr_27569 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27569[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__);

(statearr_27569[(1)] = (1));

return statearr_27569;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____1 = (function (state_27558){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_27558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e27570){if((e27570 instanceof Object)){
var ex__23066__auto__ = e27570;
var statearr_27571_27580 = state_27558;
(statearr_27571_27580[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27581 = state_27558;
state_27558 = G__27581;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__ = function(state_27558){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____1.call(this,state_27558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto___27573,out))
})();
var state__23154__auto__ = (function (){var statearr_27572 = f__23153__auto__.call(null);
(statearr_27572[(6)] = c__23152__auto___27573);

return statearr_27572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto___27573,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27582,opts){
var map__27583 = p__27582;
var map__27583__$1 = ((((!((map__27583 == null)))?(((((map__27583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27583):map__27583);
var eval_body = cljs.core.get.call(null,map__27583__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27583__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27585){var e = e27585;
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
return (function (p1__27586_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27586_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27587){
var vec__27588 = p__27587;
var k = cljs.core.nth.call(null,vec__27588,(0),null);
var v = cljs.core.nth.call(null,vec__27588,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27591){
var vec__27592 = p__27591;
var k = cljs.core.nth.call(null,vec__27592,(0),null);
var v = cljs.core.nth.call(null,vec__27592,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27598,p__27599){
var map__27600 = p__27598;
var map__27600__$1 = ((((!((map__27600 == null)))?(((((map__27600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27600):map__27600);
var opts = map__27600__$1;
var before_jsload = cljs.core.get.call(null,map__27600__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27600__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27600__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27601 = p__27599;
var map__27601__$1 = ((((!((map__27601 == null)))?(((((map__27601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27601):map__27601);
var msg = map__27601__$1;
var files = cljs.core.get.call(null,map__27601__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27601__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27601__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27755){
var state_val_27756 = (state_27755[(1)]);
if((state_val_27756 === (7))){
var inst_27617 = (state_27755[(7)]);
var inst_27616 = (state_27755[(8)]);
var inst_27615 = (state_27755[(9)]);
var inst_27618 = (state_27755[(10)]);
var inst_27623 = cljs.core._nth.call(null,inst_27616,inst_27618);
var inst_27624 = figwheel.client.file_reloading.eval_body.call(null,inst_27623,opts);
var inst_27625 = (inst_27618 + (1));
var tmp27757 = inst_27617;
var tmp27758 = inst_27616;
var tmp27759 = inst_27615;
var inst_27615__$1 = tmp27759;
var inst_27616__$1 = tmp27758;
var inst_27617__$1 = tmp27757;
var inst_27618__$1 = inst_27625;
var state_27755__$1 = (function (){var statearr_27760 = state_27755;
(statearr_27760[(7)] = inst_27617__$1);

(statearr_27760[(11)] = inst_27624);

(statearr_27760[(8)] = inst_27616__$1);

(statearr_27760[(9)] = inst_27615__$1);

(statearr_27760[(10)] = inst_27618__$1);

return statearr_27760;
})();
var statearr_27761_27844 = state_27755__$1;
(statearr_27761_27844[(2)] = null);

(statearr_27761_27844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (20))){
var inst_27658 = (state_27755[(12)]);
var inst_27666 = figwheel.client.file_reloading.sort_files.call(null,inst_27658);
var state_27755__$1 = state_27755;
var statearr_27762_27845 = state_27755__$1;
(statearr_27762_27845[(2)] = inst_27666);

(statearr_27762_27845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (27))){
var state_27755__$1 = state_27755;
var statearr_27763_27846 = state_27755__$1;
(statearr_27763_27846[(2)] = null);

(statearr_27763_27846[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (1))){
var inst_27607 = (state_27755[(13)]);
var inst_27604 = before_jsload.call(null,files);
var inst_27605 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27606 = (function (){return ((function (inst_27607,inst_27604,inst_27605,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27595_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27595_SHARP_);
});
;})(inst_27607,inst_27604,inst_27605,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27607__$1 = cljs.core.filter.call(null,inst_27606,files);
var inst_27608 = cljs.core.not_empty.call(null,inst_27607__$1);
var state_27755__$1 = (function (){var statearr_27764 = state_27755;
(statearr_27764[(13)] = inst_27607__$1);

(statearr_27764[(14)] = inst_27605);

(statearr_27764[(15)] = inst_27604);

return statearr_27764;
})();
if(cljs.core.truth_(inst_27608)){
var statearr_27765_27847 = state_27755__$1;
(statearr_27765_27847[(1)] = (2));

} else {
var statearr_27766_27848 = state_27755__$1;
(statearr_27766_27848[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (24))){
var state_27755__$1 = state_27755;
var statearr_27767_27849 = state_27755__$1;
(statearr_27767_27849[(2)] = null);

(statearr_27767_27849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (39))){
var inst_27708 = (state_27755[(16)]);
var state_27755__$1 = state_27755;
var statearr_27768_27850 = state_27755__$1;
(statearr_27768_27850[(2)] = inst_27708);

(statearr_27768_27850[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (46))){
var inst_27750 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27769_27851 = state_27755__$1;
(statearr_27769_27851[(2)] = inst_27750);

(statearr_27769_27851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (4))){
var inst_27652 = (state_27755[(2)]);
var inst_27653 = cljs.core.List.EMPTY;
var inst_27654 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27653);
var inst_27655 = (function (){return ((function (inst_27652,inst_27653,inst_27654,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27596_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27596_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27596_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27596_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_27652,inst_27653,inst_27654,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27656 = cljs.core.filter.call(null,inst_27655,files);
var inst_27657 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27658 = cljs.core.concat.call(null,inst_27656,inst_27657);
var state_27755__$1 = (function (){var statearr_27770 = state_27755;
(statearr_27770[(12)] = inst_27658);

(statearr_27770[(17)] = inst_27652);

(statearr_27770[(18)] = inst_27654);

return statearr_27770;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27771_27852 = state_27755__$1;
(statearr_27771_27852[(1)] = (16));

} else {
var statearr_27772_27853 = state_27755__$1;
(statearr_27772_27853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (15))){
var inst_27642 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27773_27854 = state_27755__$1;
(statearr_27773_27854[(2)] = inst_27642);

(statearr_27773_27854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (21))){
var inst_27668 = (state_27755[(19)]);
var inst_27668__$1 = (state_27755[(2)]);
var inst_27669 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27668__$1);
var state_27755__$1 = (function (){var statearr_27774 = state_27755;
(statearr_27774[(19)] = inst_27668__$1);

return statearr_27774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27755__$1,(22),inst_27669);
} else {
if((state_val_27756 === (31))){
var inst_27753 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27755__$1,inst_27753);
} else {
if((state_val_27756 === (32))){
var inst_27708 = (state_27755[(16)]);
var inst_27713 = inst_27708.cljs$lang$protocol_mask$partition0$;
var inst_27714 = (inst_27713 & (64));
var inst_27715 = inst_27708.cljs$core$ISeq$;
var inst_27716 = (cljs.core.PROTOCOL_SENTINEL === inst_27715);
var inst_27717 = ((inst_27714) || (inst_27716));
var state_27755__$1 = state_27755;
if(cljs.core.truth_(inst_27717)){
var statearr_27775_27855 = state_27755__$1;
(statearr_27775_27855[(1)] = (35));

} else {
var statearr_27776_27856 = state_27755__$1;
(statearr_27776_27856[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (40))){
var inst_27730 = (state_27755[(20)]);
var inst_27729 = (state_27755[(2)]);
var inst_27730__$1 = cljs.core.get.call(null,inst_27729,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27731 = cljs.core.get.call(null,inst_27729,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27732 = cljs.core.not_empty.call(null,inst_27730__$1);
var state_27755__$1 = (function (){var statearr_27777 = state_27755;
(statearr_27777[(21)] = inst_27731);

(statearr_27777[(20)] = inst_27730__$1);

return statearr_27777;
})();
if(cljs.core.truth_(inst_27732)){
var statearr_27778_27857 = state_27755__$1;
(statearr_27778_27857[(1)] = (41));

} else {
var statearr_27779_27858 = state_27755__$1;
(statearr_27779_27858[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (33))){
var state_27755__$1 = state_27755;
var statearr_27780_27859 = state_27755__$1;
(statearr_27780_27859[(2)] = false);

(statearr_27780_27859[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (13))){
var inst_27628 = (state_27755[(22)]);
var inst_27632 = cljs.core.chunk_first.call(null,inst_27628);
var inst_27633 = cljs.core.chunk_rest.call(null,inst_27628);
var inst_27634 = cljs.core.count.call(null,inst_27632);
var inst_27615 = inst_27633;
var inst_27616 = inst_27632;
var inst_27617 = inst_27634;
var inst_27618 = (0);
var state_27755__$1 = (function (){var statearr_27781 = state_27755;
(statearr_27781[(7)] = inst_27617);

(statearr_27781[(8)] = inst_27616);

(statearr_27781[(9)] = inst_27615);

(statearr_27781[(10)] = inst_27618);

return statearr_27781;
})();
var statearr_27782_27860 = state_27755__$1;
(statearr_27782_27860[(2)] = null);

(statearr_27782_27860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (22))){
var inst_27676 = (state_27755[(23)]);
var inst_27668 = (state_27755[(19)]);
var inst_27672 = (state_27755[(24)]);
var inst_27671 = (state_27755[(25)]);
var inst_27671__$1 = (state_27755[(2)]);
var inst_27672__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27671__$1);
var inst_27673 = (function (){var all_files = inst_27668;
var res_SINGLEQUOTE_ = inst_27671__$1;
var res = inst_27672__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27676,inst_27668,inst_27672,inst_27671,inst_27671__$1,inst_27672__$1,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27597_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27597_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27676,inst_27668,inst_27672,inst_27671,inst_27671__$1,inst_27672__$1,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27674 = cljs.core.filter.call(null,inst_27673,inst_27671__$1);
var inst_27675 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27676__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27675);
var inst_27677 = cljs.core.not_empty.call(null,inst_27676__$1);
var state_27755__$1 = (function (){var statearr_27783 = state_27755;
(statearr_27783[(26)] = inst_27674);

(statearr_27783[(23)] = inst_27676__$1);

(statearr_27783[(24)] = inst_27672__$1);

(statearr_27783[(25)] = inst_27671__$1);

return statearr_27783;
})();
if(cljs.core.truth_(inst_27677)){
var statearr_27784_27861 = state_27755__$1;
(statearr_27784_27861[(1)] = (23));

} else {
var statearr_27785_27862 = state_27755__$1;
(statearr_27785_27862[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (36))){
var state_27755__$1 = state_27755;
var statearr_27786_27863 = state_27755__$1;
(statearr_27786_27863[(2)] = false);

(statearr_27786_27863[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (41))){
var inst_27730 = (state_27755[(20)]);
var inst_27734 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27735 = cljs.core.map.call(null,inst_27734,inst_27730);
var inst_27736 = cljs.core.pr_str.call(null,inst_27735);
var inst_27737 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27736)].join('');
var inst_27738 = figwheel.client.utils.log.call(null,inst_27737);
var state_27755__$1 = state_27755;
var statearr_27787_27864 = state_27755__$1;
(statearr_27787_27864[(2)] = inst_27738);

(statearr_27787_27864[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (43))){
var inst_27731 = (state_27755[(21)]);
var inst_27741 = (state_27755[(2)]);
var inst_27742 = cljs.core.not_empty.call(null,inst_27731);
var state_27755__$1 = (function (){var statearr_27788 = state_27755;
(statearr_27788[(27)] = inst_27741);

return statearr_27788;
})();
if(cljs.core.truth_(inst_27742)){
var statearr_27789_27865 = state_27755__$1;
(statearr_27789_27865[(1)] = (44));

} else {
var statearr_27790_27866 = state_27755__$1;
(statearr_27790_27866[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (29))){
var inst_27708 = (state_27755[(16)]);
var inst_27674 = (state_27755[(26)]);
var inst_27676 = (state_27755[(23)]);
var inst_27668 = (state_27755[(19)]);
var inst_27672 = (state_27755[(24)]);
var inst_27671 = (state_27755[(25)]);
var inst_27704 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27707 = (function (){var all_files = inst_27668;
var res_SINGLEQUOTE_ = inst_27671;
var res = inst_27672;
var files_not_loaded = inst_27674;
var dependencies_that_loaded = inst_27676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27708,inst_27674,inst_27676,inst_27668,inst_27672,inst_27671,inst_27704,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27706){
var map__27791 = p__27706;
var map__27791__$1 = ((((!((map__27791 == null)))?(((((map__27791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27791):map__27791);
var namespace = cljs.core.get.call(null,map__27791__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27708,inst_27674,inst_27676,inst_27668,inst_27672,inst_27671,inst_27704,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27708__$1 = cljs.core.group_by.call(null,inst_27707,inst_27674);
var inst_27710 = (inst_27708__$1 == null);
var inst_27711 = cljs.core.not.call(null,inst_27710);
var state_27755__$1 = (function (){var statearr_27793 = state_27755;
(statearr_27793[(16)] = inst_27708__$1);

(statearr_27793[(28)] = inst_27704);

return statearr_27793;
})();
if(inst_27711){
var statearr_27794_27867 = state_27755__$1;
(statearr_27794_27867[(1)] = (32));

} else {
var statearr_27795_27868 = state_27755__$1;
(statearr_27795_27868[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (44))){
var inst_27731 = (state_27755[(21)]);
var inst_27744 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27731);
var inst_27745 = cljs.core.pr_str.call(null,inst_27744);
var inst_27746 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27745)].join('');
var inst_27747 = figwheel.client.utils.log.call(null,inst_27746);
var state_27755__$1 = state_27755;
var statearr_27796_27869 = state_27755__$1;
(statearr_27796_27869[(2)] = inst_27747);

(statearr_27796_27869[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (6))){
var inst_27649 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27797_27870 = state_27755__$1;
(statearr_27797_27870[(2)] = inst_27649);

(statearr_27797_27870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (28))){
var inst_27674 = (state_27755[(26)]);
var inst_27701 = (state_27755[(2)]);
var inst_27702 = cljs.core.not_empty.call(null,inst_27674);
var state_27755__$1 = (function (){var statearr_27798 = state_27755;
(statearr_27798[(29)] = inst_27701);

return statearr_27798;
})();
if(cljs.core.truth_(inst_27702)){
var statearr_27799_27871 = state_27755__$1;
(statearr_27799_27871[(1)] = (29));

} else {
var statearr_27800_27872 = state_27755__$1;
(statearr_27800_27872[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (25))){
var inst_27672 = (state_27755[(24)]);
var inst_27688 = (state_27755[(2)]);
var inst_27689 = cljs.core.not_empty.call(null,inst_27672);
var state_27755__$1 = (function (){var statearr_27801 = state_27755;
(statearr_27801[(30)] = inst_27688);

return statearr_27801;
})();
if(cljs.core.truth_(inst_27689)){
var statearr_27802_27873 = state_27755__$1;
(statearr_27802_27873[(1)] = (26));

} else {
var statearr_27803_27874 = state_27755__$1;
(statearr_27803_27874[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (34))){
var inst_27724 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
if(cljs.core.truth_(inst_27724)){
var statearr_27804_27875 = state_27755__$1;
(statearr_27804_27875[(1)] = (38));

} else {
var statearr_27805_27876 = state_27755__$1;
(statearr_27805_27876[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (17))){
var state_27755__$1 = state_27755;
var statearr_27806_27877 = state_27755__$1;
(statearr_27806_27877[(2)] = recompile_dependents);

(statearr_27806_27877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (3))){
var state_27755__$1 = state_27755;
var statearr_27807_27878 = state_27755__$1;
(statearr_27807_27878[(2)] = null);

(statearr_27807_27878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (12))){
var inst_27645 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27808_27879 = state_27755__$1;
(statearr_27808_27879[(2)] = inst_27645);

(statearr_27808_27879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (2))){
var inst_27607 = (state_27755[(13)]);
var inst_27614 = cljs.core.seq.call(null,inst_27607);
var inst_27615 = inst_27614;
var inst_27616 = null;
var inst_27617 = (0);
var inst_27618 = (0);
var state_27755__$1 = (function (){var statearr_27809 = state_27755;
(statearr_27809[(7)] = inst_27617);

(statearr_27809[(8)] = inst_27616);

(statearr_27809[(9)] = inst_27615);

(statearr_27809[(10)] = inst_27618);

return statearr_27809;
})();
var statearr_27810_27880 = state_27755__$1;
(statearr_27810_27880[(2)] = null);

(statearr_27810_27880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (23))){
var inst_27674 = (state_27755[(26)]);
var inst_27676 = (state_27755[(23)]);
var inst_27668 = (state_27755[(19)]);
var inst_27672 = (state_27755[(24)]);
var inst_27671 = (state_27755[(25)]);
var inst_27679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27681 = (function (){var all_files = inst_27668;
var res_SINGLEQUOTE_ = inst_27671;
var res = inst_27672;
var files_not_loaded = inst_27674;
var dependencies_that_loaded = inst_27676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27674,inst_27676,inst_27668,inst_27672,inst_27671,inst_27679,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27680){
var map__27811 = p__27680;
var map__27811__$1 = ((((!((map__27811 == null)))?(((((map__27811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27811):map__27811);
var request_url = cljs.core.get.call(null,map__27811__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27674,inst_27676,inst_27668,inst_27672,inst_27671,inst_27679,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27682 = cljs.core.reverse.call(null,inst_27676);
var inst_27683 = cljs.core.map.call(null,inst_27681,inst_27682);
var inst_27684 = cljs.core.pr_str.call(null,inst_27683);
var inst_27685 = figwheel.client.utils.log.call(null,inst_27684);
var state_27755__$1 = (function (){var statearr_27813 = state_27755;
(statearr_27813[(31)] = inst_27679);

return statearr_27813;
})();
var statearr_27814_27881 = state_27755__$1;
(statearr_27814_27881[(2)] = inst_27685);

(statearr_27814_27881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (35))){
var state_27755__$1 = state_27755;
var statearr_27815_27882 = state_27755__$1;
(statearr_27815_27882[(2)] = true);

(statearr_27815_27882[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (19))){
var inst_27658 = (state_27755[(12)]);
var inst_27664 = figwheel.client.file_reloading.expand_files.call(null,inst_27658);
var state_27755__$1 = state_27755;
var statearr_27816_27883 = state_27755__$1;
(statearr_27816_27883[(2)] = inst_27664);

(statearr_27816_27883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (11))){
var state_27755__$1 = state_27755;
var statearr_27817_27884 = state_27755__$1;
(statearr_27817_27884[(2)] = null);

(statearr_27817_27884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (9))){
var inst_27647 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27818_27885 = state_27755__$1;
(statearr_27818_27885[(2)] = inst_27647);

(statearr_27818_27885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (5))){
var inst_27617 = (state_27755[(7)]);
var inst_27618 = (state_27755[(10)]);
var inst_27620 = (inst_27618 < inst_27617);
var inst_27621 = inst_27620;
var state_27755__$1 = state_27755;
if(cljs.core.truth_(inst_27621)){
var statearr_27819_27886 = state_27755__$1;
(statearr_27819_27886[(1)] = (7));

} else {
var statearr_27820_27887 = state_27755__$1;
(statearr_27820_27887[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (14))){
var inst_27628 = (state_27755[(22)]);
var inst_27637 = cljs.core.first.call(null,inst_27628);
var inst_27638 = figwheel.client.file_reloading.eval_body.call(null,inst_27637,opts);
var inst_27639 = cljs.core.next.call(null,inst_27628);
var inst_27615 = inst_27639;
var inst_27616 = null;
var inst_27617 = (0);
var inst_27618 = (0);
var state_27755__$1 = (function (){var statearr_27821 = state_27755;
(statearr_27821[(7)] = inst_27617);

(statearr_27821[(8)] = inst_27616);

(statearr_27821[(9)] = inst_27615);

(statearr_27821[(10)] = inst_27618);

(statearr_27821[(32)] = inst_27638);

return statearr_27821;
})();
var statearr_27822_27888 = state_27755__$1;
(statearr_27822_27888[(2)] = null);

(statearr_27822_27888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (45))){
var state_27755__$1 = state_27755;
var statearr_27823_27889 = state_27755__$1;
(statearr_27823_27889[(2)] = null);

(statearr_27823_27889[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (26))){
var inst_27674 = (state_27755[(26)]);
var inst_27676 = (state_27755[(23)]);
var inst_27668 = (state_27755[(19)]);
var inst_27672 = (state_27755[(24)]);
var inst_27671 = (state_27755[(25)]);
var inst_27691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27693 = (function (){var all_files = inst_27668;
var res_SINGLEQUOTE_ = inst_27671;
var res = inst_27672;
var files_not_loaded = inst_27674;
var dependencies_that_loaded = inst_27676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27674,inst_27676,inst_27668,inst_27672,inst_27671,inst_27691,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27692){
var map__27824 = p__27692;
var map__27824__$1 = ((((!((map__27824 == null)))?(((((map__27824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27824):map__27824);
var namespace = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27674,inst_27676,inst_27668,inst_27672,inst_27671,inst_27691,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27694 = cljs.core.map.call(null,inst_27693,inst_27672);
var inst_27695 = cljs.core.pr_str.call(null,inst_27694);
var inst_27696 = figwheel.client.utils.log.call(null,inst_27695);
var inst_27697 = (function (){var all_files = inst_27668;
var res_SINGLEQUOTE_ = inst_27671;
var res = inst_27672;
var files_not_loaded = inst_27674;
var dependencies_that_loaded = inst_27676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27674,inst_27676,inst_27668,inst_27672,inst_27671,inst_27691,inst_27693,inst_27694,inst_27695,inst_27696,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27674,inst_27676,inst_27668,inst_27672,inst_27671,inst_27691,inst_27693,inst_27694,inst_27695,inst_27696,state_val_27756,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27698 = setTimeout(inst_27697,(10));
var state_27755__$1 = (function (){var statearr_27826 = state_27755;
(statearr_27826[(33)] = inst_27691);

(statearr_27826[(34)] = inst_27696);

return statearr_27826;
})();
var statearr_27827_27890 = state_27755__$1;
(statearr_27827_27890[(2)] = inst_27698);

(statearr_27827_27890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (16))){
var state_27755__$1 = state_27755;
var statearr_27828_27891 = state_27755__$1;
(statearr_27828_27891[(2)] = reload_dependents);

(statearr_27828_27891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (38))){
var inst_27708 = (state_27755[(16)]);
var inst_27726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27708);
var state_27755__$1 = state_27755;
var statearr_27829_27892 = state_27755__$1;
(statearr_27829_27892[(2)] = inst_27726);

(statearr_27829_27892[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (30))){
var state_27755__$1 = state_27755;
var statearr_27830_27893 = state_27755__$1;
(statearr_27830_27893[(2)] = null);

(statearr_27830_27893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (10))){
var inst_27628 = (state_27755[(22)]);
var inst_27630 = cljs.core.chunked_seq_QMARK_.call(null,inst_27628);
var state_27755__$1 = state_27755;
if(inst_27630){
var statearr_27831_27894 = state_27755__$1;
(statearr_27831_27894[(1)] = (13));

} else {
var statearr_27832_27895 = state_27755__$1;
(statearr_27832_27895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (18))){
var inst_27662 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
if(cljs.core.truth_(inst_27662)){
var statearr_27833_27896 = state_27755__$1;
(statearr_27833_27896[(1)] = (19));

} else {
var statearr_27834_27897 = state_27755__$1;
(statearr_27834_27897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (42))){
var state_27755__$1 = state_27755;
var statearr_27835_27898 = state_27755__$1;
(statearr_27835_27898[(2)] = null);

(statearr_27835_27898[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (37))){
var inst_27721 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27836_27899 = state_27755__$1;
(statearr_27836_27899[(2)] = inst_27721);

(statearr_27836_27899[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (8))){
var inst_27628 = (state_27755[(22)]);
var inst_27615 = (state_27755[(9)]);
var inst_27628__$1 = cljs.core.seq.call(null,inst_27615);
var state_27755__$1 = (function (){var statearr_27837 = state_27755;
(statearr_27837[(22)] = inst_27628__$1);

return statearr_27837;
})();
if(inst_27628__$1){
var statearr_27838_27900 = state_27755__$1;
(statearr_27838_27900[(1)] = (10));

} else {
var statearr_27839_27901 = state_27755__$1;
(statearr_27839_27901[(1)] = (11));

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
});})(c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23062__auto__,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____0 = (function (){
var statearr_27840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27840[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__);

(statearr_27840[(1)] = (1));

return statearr_27840;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____1 = (function (state_27755){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_27755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e27841){if((e27841 instanceof Object)){
var ex__23066__auto__ = e27841;
var statearr_27842_27902 = state_27755;
(statearr_27842_27902[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27903 = state_27755;
state_27755 = G__27903;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__ = function(state_27755){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____1.call(this,state_27755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23154__auto__ = (function (){var statearr_27843 = f__23153__auto__.call(null);
(statearr_27843[(6)] = c__23152__auto__);

return statearr_27843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,map__27600,map__27600__$1,opts,before_jsload,on_jsload,reload_dependents,map__27601,map__27601__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23152__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27906,link){
var map__27907 = p__27906;
var map__27907__$1 = ((((!((map__27907 == null)))?(((((map__27907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27907):map__27907);
var file = cljs.core.get.call(null,map__27907__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__27907,map__27907__$1,file){
return (function (p1__27904_SHARP_,p2__27905_SHARP_){
if(cljs.core._EQ_.call(null,p1__27904_SHARP_,p2__27905_SHARP_)){
return p1__27904_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__27907,map__27907__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27910){
var map__27911 = p__27910;
var map__27911__$1 = ((((!((map__27911 == null)))?(((((map__27911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27911):map__27911);
var match_length = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27909_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27909_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27913_SHARP_,p2__27914_SHARP_){
return cljs.core.assoc.call(null,p1__27913_SHARP_,cljs.core.get.call(null,p2__27914_SHARP_,key),p2__27914_SHARP_);
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
var loaded_f_datas_27915 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_27915);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_27915);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27916,p__27917){
var map__27918 = p__27916;
var map__27918__$1 = ((((!((map__27918 == null)))?(((((map__27918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27918):map__27918);
var on_cssload = cljs.core.get.call(null,map__27918__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__27919 = p__27917;
var map__27919__$1 = ((((!((map__27919 == null)))?(((((map__27919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27919):map__27919);
var files_msg = map__27919__$1;
var files = cljs.core.get.call(null,map__27919__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1534859001881
