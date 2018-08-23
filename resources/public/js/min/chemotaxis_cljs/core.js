// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('chemotaxis_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_();
chemotaxis_cljs.core.dim = (100);
chemotaxis_cljs.core.bacteria_cnt = (100);
chemotaxis_cljs.core.food_places_max = (16);
chemotaxis_cljs.core.food_min = (20);
chemotaxis_cljs.core.food_max = (100);
chemotaxis_cljs.core.food_scale = 50.0;
chemotaxis_cljs.core.chan_timeout_duration = (30);
chemotaxis_cljs.core.cell = (function chemotaxis_cljs$core$cell(food,bacterium){
if(!((food == null))){
} else {
throw (new Error("Assert failed: (not (nil? food))"));
}

if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,bacterium)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),bacterium.length)))){
} else {
throw (new Error("Assert failed: (or (= false bacterium) (= 3 (alength bacterium)))"));
}

if(typeof food === 'number'){
} else {
throw (new Error("Assert failed: (number? food)"));
}

var cell = [null,null];
(cell[(0)] = food);

(cell[(1)] = bacterium);

return cell;
});
chemotaxis_cljs.core.get_cell_food = (function chemotaxis_cljs$core$get_cell_food(cell){
if(!((cell == null))){
} else {
throw (new Error("Assert failed: (not (nil? cell))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cell.length)){
} else {
throw (new Error("Assert failed: (= 2 (alength cell))"));
}

var _PERCENT_ = (cell[(0)]);
if(!((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (not (nil? %))"));
}

if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
chemotaxis_cljs.core.get_cell_bacterium = (function chemotaxis_cljs$core$get_cell_bacterium(cell){
if(!((cell == null))){
} else {
throw (new Error("Assert failed: (not (nil? cell))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cell.length)){
} else {
throw (new Error("Assert failed: (= 2 (alength cell))"));
}

var _PERCENT_ = (cell[(1)]);
if(!((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (not (nil? %))"));
}

return _PERCENT_;
});
chemotaxis_cljs.core.set_cell_food = (function chemotaxis_cljs$core$set_cell_food(cell,food){
if(!((cell == null))){
} else {
throw (new Error("Assert failed: (not (nil? cell))"));
}

if(!((food == null))){
} else {
throw (new Error("Assert failed: (not (nil? food))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cell.length)){
} else {
throw (new Error("Assert failed: (= 2 (alength cell))"));
}

if(typeof food === 'number'){
} else {
throw (new Error("Assert failed: (number? food)"));
}

(cell[(0)] = (food | (0)));

return cell;
});
chemotaxis_cljs.core.set_cell_bacterium = (function chemotaxis_cljs$core$set_cell_bacterium(cell,bacterium){
if(!((cell == null))){
} else {
throw (new Error("Assert failed: (not (nil? cell))"));
}

if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cell.length)){
} else {
throw (new Error("Assert failed: (= 2 (alength cell))"));
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,bacterium)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),bacterium.length)))){
} else {
throw (new Error("Assert failed: (or (= false bacterium) (= 3 (alength bacterium)))"));
}

(cell[(1)] = bacterium);

return cell;
});
chemotaxis_cljs.core.make_world = (function chemotaxis_cljs$core$make_world(w,h){
return cljs.core.vec((function (){var iter__4292__auto__ = (function chemotaxis_cljs$core$make_world_$_iter__9095(s__9096){
return (new cljs.core.LazySeq(null,(function (){
var s__9096__$1 = s__9096;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__9096__$1);
if(temp__5457__auto__){
var s__9096__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9096__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__9096__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__9098 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__9097 = (0);
while(true){
if((i__9097 < size__4291__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__9097);
cljs.core.chunk_append(b__9098,cljs.core.vec((function (){var iter__4292__auto__ = ((function (i__9097,_,c__4290__auto__,size__4291__auto__,b__9098,s__9096__$2,temp__5457__auto__){
return (function chemotaxis_cljs$core$make_world_$_iter__9095_$_iter__9099(s__9100){
return (new cljs.core.LazySeq(null,((function (i__9097,_,c__4290__auto__,size__4291__auto__,b__9098,s__9096__$2,temp__5457__auto__){
return (function (){
var s__9100__$1 = s__9100;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__9100__$1);
if(temp__5457__auto____$1){
var s__9100__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9100__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first(s__9100__$2);
var size__4291__auto____$1 = cljs.core.count(c__4290__auto____$1);
var b__9102 = cljs.core.chunk_buffer(size__4291__auto____$1);
if((function (){var i__9101 = (0);
while(true){
if((i__9101 < size__4291__auto____$1)){
var ___$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto____$1,i__9101);
cljs.core.chunk_append(b__9102,chemotaxis_cljs.core.cell((0),false));

var G__9107 = (i__9101 + (1));
i__9101 = G__9107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9102),chemotaxis_cljs$core$make_world_$_iter__9095_$_iter__9099(cljs.core.chunk_rest(s__9100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9102),null);
}
} else {
var ___$1 = cljs.core.first(s__9100__$2);
return cljs.core.cons(chemotaxis_cljs.core.cell((0),false),chemotaxis_cljs$core$make_world_$_iter__9095_$_iter__9099(cljs.core.rest(s__9100__$2)));
}
} else {
return null;
}
break;
}
});})(i__9097,_,c__4290__auto__,size__4291__auto__,b__9098,s__9096__$2,temp__5457__auto__))
,null,null));
});})(i__9097,_,c__4290__auto__,size__4291__auto__,b__9098,s__9096__$2,temp__5457__auto__))
;
return iter__4292__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(w));
})()));

var G__9108 = (i__9097 + (1));
i__9097 = G__9108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9098),chemotaxis_cljs$core$make_world_$_iter__9095(cljs.core.chunk_rest(s__9096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9098),null);
}
} else {
var _ = cljs.core.first(s__9096__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__4292__auto__ = ((function (_,s__9096__$2,temp__5457__auto__){
return (function chemotaxis_cljs$core$make_world_$_iter__9095_$_iter__9103(s__9104){
return (new cljs.core.LazySeq(null,((function (_,s__9096__$2,temp__5457__auto__){
return (function (){
var s__9104__$1 = s__9104;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__9104__$1);
if(temp__5457__auto____$1){
var s__9104__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__9104__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__9104__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__9106 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__9105 = (0);
while(true){
if((i__9105 < size__4291__auto__)){
var ___$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__9105);
cljs.core.chunk_append(b__9106,chemotaxis_cljs.core.cell((0),false));

var G__9109 = (i__9105 + (1));
i__9105 = G__9109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9106),chemotaxis_cljs$core$make_world_$_iter__9095_$_iter__9103(cljs.core.chunk_rest(s__9104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9106),null);
}
} else {
var ___$1 = cljs.core.first(s__9104__$2);
return cljs.core.cons(chemotaxis_cljs.core.cell((0),false),chemotaxis_cljs$core$make_world_$_iter__9095_$_iter__9103(cljs.core.rest(s__9104__$2)));
}
} else {
return null;
}
break;
}
});})(_,s__9096__$2,temp__5457__auto__))
,null,null));
});})(_,s__9096__$2,temp__5457__auto__))
;
return iter__4292__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(w));
})()),chemotaxis_cljs$core$make_world_$_iter__9095(cljs.core.rest(s__9096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(h));
})());
});
if(typeof chemotaxis_cljs.core.world !== 'undefined'){
} else {
chemotaxis_cljs.core.world = chemotaxis_cljs.core.make_world(chemotaxis_cljs.core.dim,chemotaxis_cljs.core.dim);
}
chemotaxis_cljs.core.place = (function chemotaxis_cljs$core$place(p__9110){
var vec__9111 = p__9110;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9111,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9111,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chemotaxis_cljs.core.world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
});
/**
 * make an array representing a bacterium
 */
chemotaxis_cljs.core.bacterium = (function chemotaxis_cljs$core$bacterium(dir,loc,food){
if(!((dir == null))){
} else {
throw (new Error("Assert failed: (not (nil? dir))"));
}

if(!((loc == null))){
} else {
throw (new Error("Assert failed: (not (nil? loc))"));
}

if(!((food == null))){
} else {
throw (new Error("Assert failed: (not (nil? food))"));
}

if(typeof dir === 'number'){
} else {
throw (new Error("Assert failed: (number? dir)"));
}

if(typeof food === 'number'){
} else {
throw (new Error("Assert failed: (number? food)"));
}

var bacterium = [null,null,null];
(bacterium[(0)] = dir);

(bacterium[(1)] = loc);

(bacterium[(2)] = food);

return bacterium;
});
chemotaxis_cljs.core.get_bacterium_dir = (function chemotaxis_cljs$core$get_bacterium_dir(bacterium){
if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),bacterium.length)){
} else {
throw (new Error("Assert failed: (= 3 (alength bacterium))"));
}

var _PERCENT_ = (bacterium[(0)]);
if(!((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (not (nil? %))"));
}

return _PERCENT_;
});
chemotaxis_cljs.core.get_bacterium_coord = (function chemotaxis_cljs$core$get_bacterium_coord(bacterium){
if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),bacterium.length)){
} else {
throw (new Error("Assert failed: (= 3 (alength bacterium))"));
}

var _PERCENT_ = (bacterium[(1)]);
if(!((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (not (nil? %))"));
}

return _PERCENT_;
});
chemotaxis_cljs.core.get_bacterium_food = (function chemotaxis_cljs$core$get_bacterium_food(bacterium){
if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),bacterium.length)){
} else {
throw (new Error("Assert failed: (= 3 (alength bacterium))"));
}

var _PERCENT_ = (bacterium[(2)]);
if(!((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (not (nil? %))"));
}

if(typeof _PERCENT_ === 'number'){
} else {
throw (new Error("Assert failed: (number? %)"));
}

return _PERCENT_;
});
chemotaxis_cljs.core.set_bacterium_dir = (function chemotaxis_cljs$core$set_bacterium_dir(bacterium,dir){
if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(!((dir == null))){
} else {
throw (new Error("Assert failed: (not (nil? dir))"));
}

if(typeof dir === 'number'){
} else {
throw (new Error("Assert failed: (number? dir)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),bacterium.length)){
} else {
throw (new Error("Assert failed: (= 3 (alength bacterium))"));
}

(bacterium[(0)] = dir);

return bacterium;
});
chemotaxis_cljs.core.set_bacterium_loc = (function chemotaxis_cljs$core$set_bacterium_loc(bacterium,loc){
if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(!((loc == null))){
} else {
throw (new Error("Assert failed: (not (nil? loc))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),bacterium.length)){
} else {
throw (new Error("Assert failed: (= 3 (alength bacterium))"));
}

(bacterium[(1)] = loc);

return bacterium;
});
chemotaxis_cljs.core.set_bacterium_food = (function chemotaxis_cljs$core$set_bacterium_food(bacterium,food){
if(!((food == null))){
} else {
throw (new Error("Assert failed: (not (nil? food))"));
}

if(typeof food === 'number'){
} else {
throw (new Error("Assert failed: (number? food)"));
}

if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),bacterium.length)){
} else {
throw (new Error("Assert failed: (= 3 (alength bacterium))"));
}

(bacterium[(2)] = food);

return bacterium;
});
chemotaxis_cljs.core.create_bacterium = (function chemotaxis_cljs$core$create_bacterium(loc,dir){
var c = chemotaxis_cljs.core.place(loc);
var bact = chemotaxis_cljs.core.bacterium(dir,loc,(0));
chemotaxis_cljs.core.set_cell_bacterium(c,bact);

return bact;
});
chemotaxis_cljs.core.distance = (function chemotaxis_cljs$core$distance(p__9114,p__9115){
var vec__9116 = p__9114;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9116,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9116,(1),null);
var vec__9119 = p__9115;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9119,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9119,(1),null);
return Math.sqrt((Math.pow((x1 - x2),(2)) + Math.pow((y1 - y2),(2))));
});
chemotaxis_cljs.core.drop_single_food_splash = (function chemotaxis_cljs$core$drop_single_food_splash(p__9122,food_amount){
var vec__9123 = p__9122;
var center_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9123,(0),null);
var center_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9123,(1),null);
var circle_r = (((25) * (chemotaxis_cljs.core.food_max / food_amount)) | (0));
var seq__9126 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (center_x - circle_r);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(function (){var x__4009__auto__ = chemotaxis_cljs.core.dim;
var y__4010__auto__ = (center_x + circle_r);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()));
var chunk__9131 = null;
var count__9132 = (0);
var i__9133 = (0);
while(true){
if((i__9133 < count__9132)){
var x = chunk__9131.cljs$core$IIndexed$_nth$arity$2(null,i__9133);
var seq__9134_9138 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (center_y - circle_r);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(function (){var x__4009__auto__ = chemotaxis_cljs.core.dim;
var y__4010__auto__ = (center_y + circle_r);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()));
var chunk__9135_9139 = null;
var count__9136_9140 = (0);
var i__9137_9141 = (0);
while(true){
if((i__9137_9141 < count__9136_9140)){
var y_9142 = chunk__9135_9139.cljs$core$IIndexed$_nth$arity$2(null,i__9137_9141);
chemotaxis_cljs.core.set_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9142], null)),(chemotaxis_cljs.core.get_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9142], null))) + (food_amount * Math.pow(0.7,chemotaxis_cljs.core.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9142], null))))));


var G__9143 = seq__9134_9138;
var G__9144 = chunk__9135_9139;
var G__9145 = count__9136_9140;
var G__9146 = (i__9137_9141 + (1));
seq__9134_9138 = G__9143;
chunk__9135_9139 = G__9144;
count__9136_9140 = G__9145;
i__9137_9141 = G__9146;
continue;
} else {
var temp__5457__auto___9147 = cljs.core.seq(seq__9134_9138);
if(temp__5457__auto___9147){
var seq__9134_9148__$1 = temp__5457__auto___9147;
if(cljs.core.chunked_seq_QMARK_(seq__9134_9148__$1)){
var c__4319__auto___9149 = cljs.core.chunk_first(seq__9134_9148__$1);
var G__9150 = cljs.core.chunk_rest(seq__9134_9148__$1);
var G__9151 = c__4319__auto___9149;
var G__9152 = cljs.core.count(c__4319__auto___9149);
var G__9153 = (0);
seq__9134_9138 = G__9150;
chunk__9135_9139 = G__9151;
count__9136_9140 = G__9152;
i__9137_9141 = G__9153;
continue;
} else {
var y_9154 = cljs.core.first(seq__9134_9148__$1);
chemotaxis_cljs.core.set_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9154], null)),(chemotaxis_cljs.core.get_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9154], null))) + (food_amount * Math.pow(0.7,chemotaxis_cljs.core.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9154], null))))));


var G__9155 = cljs.core.next(seq__9134_9148__$1);
var G__9156 = null;
var G__9157 = (0);
var G__9158 = (0);
seq__9134_9138 = G__9155;
chunk__9135_9139 = G__9156;
count__9136_9140 = G__9157;
i__9137_9141 = G__9158;
continue;
}
} else {
}
}
break;
}

var G__9159 = seq__9126;
var G__9160 = chunk__9131;
var G__9161 = count__9132;
var G__9162 = (i__9133 + (1));
seq__9126 = G__9159;
chunk__9131 = G__9160;
count__9132 = G__9161;
i__9133 = G__9162;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__9126);
if(temp__5457__auto__){
var seq__9126__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9126__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__9126__$1);
var G__9163 = cljs.core.chunk_rest(seq__9126__$1);
var G__9164 = c__4319__auto__;
var G__9165 = cljs.core.count(c__4319__auto__);
var G__9166 = (0);
seq__9126 = G__9163;
chunk__9131 = G__9164;
count__9132 = G__9165;
i__9133 = G__9166;
continue;
} else {
var x = cljs.core.first(seq__9126__$1);
var seq__9127_9167 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (center_y - circle_r);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(function (){var x__4009__auto__ = chemotaxis_cljs.core.dim;
var y__4010__auto__ = (center_y + circle_r);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()));
var chunk__9128_9168 = null;
var count__9129_9169 = (0);
var i__9130_9170 = (0);
while(true){
if((i__9130_9170 < count__9129_9169)){
var y_9171 = chunk__9128_9168.cljs$core$IIndexed$_nth$arity$2(null,i__9130_9170);
chemotaxis_cljs.core.set_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9171], null)),(chemotaxis_cljs.core.get_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9171], null))) + (food_amount * Math.pow(0.7,chemotaxis_cljs.core.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9171], null))))));


var G__9172 = seq__9127_9167;
var G__9173 = chunk__9128_9168;
var G__9174 = count__9129_9169;
var G__9175 = (i__9130_9170 + (1));
seq__9127_9167 = G__9172;
chunk__9128_9168 = G__9173;
count__9129_9169 = G__9174;
i__9130_9170 = G__9175;
continue;
} else {
var temp__5457__auto___9176__$1 = cljs.core.seq(seq__9127_9167);
if(temp__5457__auto___9176__$1){
var seq__9127_9177__$1 = temp__5457__auto___9176__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9127_9177__$1)){
var c__4319__auto___9178 = cljs.core.chunk_first(seq__9127_9177__$1);
var G__9179 = cljs.core.chunk_rest(seq__9127_9177__$1);
var G__9180 = c__4319__auto___9178;
var G__9181 = cljs.core.count(c__4319__auto___9178);
var G__9182 = (0);
seq__9127_9167 = G__9179;
chunk__9128_9168 = G__9180;
count__9129_9169 = G__9181;
i__9130_9170 = G__9182;
continue;
} else {
var y_9183 = cljs.core.first(seq__9127_9177__$1);
chemotaxis_cljs.core.set_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9183], null)),(chemotaxis_cljs.core.get_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9183], null))) + (food_amount * Math.pow(0.7,chemotaxis_cljs.core.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9183], null))))));


var G__9184 = cljs.core.next(seq__9127_9177__$1);
var G__9185 = null;
var G__9186 = (0);
var G__9187 = (0);
seq__9127_9167 = G__9184;
chunk__9128_9168 = G__9185;
count__9129_9169 = G__9186;
i__9130_9170 = G__9187;
continue;
}
} else {
}
}
break;
}

var G__9188 = cljs.core.next(seq__9126__$1);
var G__9189 = null;
var G__9190 = (0);
var G__9191 = (0);
seq__9126 = G__9188;
chunk__9131 = G__9189;
count__9132 = G__9190;
i__9133 = G__9191;
continue;
}
} else {
return null;
}
}
break;
}
});
chemotaxis_cljs.core.drop_random_food = (function chemotaxis_cljs$core$drop_random_food(var_args){
var G__9193 = arguments.length;
switch (G__9193) {
case 0:
return chemotaxis_cljs.core.drop_random_food.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return chemotaxis_cljs.core.drop_random_food.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

chemotaxis_cljs.core.drop_random_food.cljs$core$IFn$_invoke$arity$0 = (function (){
return chemotaxis_cljs.core.drop_random_food.cljs$core$IFn$_invoke$arity$1((1));
});

chemotaxis_cljs.core.drop_random_food.cljs$core$IFn$_invoke$arity$1 = (function (min_places_cnt){
var n__4376__auto__ = (min_places_cnt + cljs.core.rand_int(((chemotaxis_cljs.core.food_places_max - min_places_cnt) + (1))));
var _ = (0);
while(true){
if((_ < n__4376__auto__)){
var coord_9195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(chemotaxis_cljs.core.dim),cljs.core.rand_int(chemotaxis_cljs.core.dim)], null);
var food_amount_9196 = (chemotaxis_cljs.core.food_min + cljs.core.rand_int(((chemotaxis_cljs.core.food_max - chemotaxis_cljs.core.food_min) + (1))));
chemotaxis_cljs.core.drop_single_food_splash(coord_9195,food_amount_9196);

var G__9197 = (_ + (1));
_ = G__9197;
continue;
} else {
return null;
}
break;
}
});

chemotaxis_cljs.core.drop_random_food.cljs$lang$maxFixedArity = 1;

chemotaxis_cljs.core.remove_all_food = (function chemotaxis_cljs$core$remove_all_food(){
var seq__9198 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(chemotaxis_cljs.core.dim));
var chunk__9203 = null;
var count__9204 = (0);
var i__9205 = (0);
while(true){
if((i__9205 < count__9204)){
var x = chunk__9203.cljs$core$IIndexed$_nth$arity$2(null,i__9205);
var seq__9206_9210 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(chemotaxis_cljs.core.dim));
var chunk__9207_9211 = null;
var count__9208_9212 = (0);
var i__9209_9213 = (0);
while(true){
if((i__9209_9213 < count__9208_9212)){
var y_9214 = chunk__9207_9211.cljs$core$IIndexed$_nth$arity$2(null,i__9209_9213);
chemotaxis_cljs.core.set_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9214], null)),(0));


var G__9215 = seq__9206_9210;
var G__9216 = chunk__9207_9211;
var G__9217 = count__9208_9212;
var G__9218 = (i__9209_9213 + (1));
seq__9206_9210 = G__9215;
chunk__9207_9211 = G__9216;
count__9208_9212 = G__9217;
i__9209_9213 = G__9218;
continue;
} else {
var temp__5457__auto___9219 = cljs.core.seq(seq__9206_9210);
if(temp__5457__auto___9219){
var seq__9206_9220__$1 = temp__5457__auto___9219;
if(cljs.core.chunked_seq_QMARK_(seq__9206_9220__$1)){
var c__4319__auto___9221 = cljs.core.chunk_first(seq__9206_9220__$1);
var G__9222 = cljs.core.chunk_rest(seq__9206_9220__$1);
var G__9223 = c__4319__auto___9221;
var G__9224 = cljs.core.count(c__4319__auto___9221);
var G__9225 = (0);
seq__9206_9210 = G__9222;
chunk__9207_9211 = G__9223;
count__9208_9212 = G__9224;
i__9209_9213 = G__9225;
continue;
} else {
var y_9226 = cljs.core.first(seq__9206_9220__$1);
chemotaxis_cljs.core.set_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9226], null)),(0));


var G__9227 = cljs.core.next(seq__9206_9220__$1);
var G__9228 = null;
var G__9229 = (0);
var G__9230 = (0);
seq__9206_9210 = G__9227;
chunk__9207_9211 = G__9228;
count__9208_9212 = G__9229;
i__9209_9213 = G__9230;
continue;
}
} else {
}
}
break;
}

var G__9231 = seq__9198;
var G__9232 = chunk__9203;
var G__9233 = count__9204;
var G__9234 = (i__9205 + (1));
seq__9198 = G__9231;
chunk__9203 = G__9232;
count__9204 = G__9233;
i__9205 = G__9234;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__9198);
if(temp__5457__auto__){
var seq__9198__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9198__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__9198__$1);
var G__9235 = cljs.core.chunk_rest(seq__9198__$1);
var G__9236 = c__4319__auto__;
var G__9237 = cljs.core.count(c__4319__auto__);
var G__9238 = (0);
seq__9198 = G__9235;
chunk__9203 = G__9236;
count__9204 = G__9237;
i__9205 = G__9238;
continue;
} else {
var x = cljs.core.first(seq__9198__$1);
var seq__9199_9239 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(chemotaxis_cljs.core.dim));
var chunk__9200_9240 = null;
var count__9201_9241 = (0);
var i__9202_9242 = (0);
while(true){
if((i__9202_9242 < count__9201_9241)){
var y_9243 = chunk__9200_9240.cljs$core$IIndexed$_nth$arity$2(null,i__9202_9242);
chemotaxis_cljs.core.set_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9243], null)),(0));


var G__9244 = seq__9199_9239;
var G__9245 = chunk__9200_9240;
var G__9246 = count__9201_9241;
var G__9247 = (i__9202_9242 + (1));
seq__9199_9239 = G__9244;
chunk__9200_9240 = G__9245;
count__9201_9241 = G__9246;
i__9202_9242 = G__9247;
continue;
} else {
var temp__5457__auto___9248__$1 = cljs.core.seq(seq__9199_9239);
if(temp__5457__auto___9248__$1){
var seq__9199_9249__$1 = temp__5457__auto___9248__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9199_9249__$1)){
var c__4319__auto___9250 = cljs.core.chunk_first(seq__9199_9249__$1);
var G__9251 = cljs.core.chunk_rest(seq__9199_9249__$1);
var G__9252 = c__4319__auto___9250;
var G__9253 = cljs.core.count(c__4319__auto___9250);
var G__9254 = (0);
seq__9199_9239 = G__9251;
chunk__9200_9240 = G__9252;
count__9201_9241 = G__9253;
i__9202_9242 = G__9254;
continue;
} else {
var y_9255 = cljs.core.first(seq__9199_9249__$1);
chemotaxis_cljs.core.set_cell_food(chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9255], null)),(0));


var G__9256 = cljs.core.next(seq__9199_9249__$1);
var G__9257 = null;
var G__9258 = (0);
var G__9259 = (0);
seq__9199_9239 = G__9256;
chunk__9200_9240 = G__9257;
count__9201_9241 = G__9258;
i__9202_9242 = G__9259;
continue;
}
} else {
}
}
break;
}

var G__9260 = cljs.core.next(seq__9198__$1);
var G__9261 = null;
var G__9262 = (0);
var G__9263 = (0);
seq__9198 = G__9260;
chunk__9203 = G__9261;
count__9204 = G__9262;
i__9205 = G__9263;
continue;
}
} else {
return null;
}
}
break;
}
});
chemotaxis_cljs.core.drop_bacteria = (function chemotaxis_cljs$core$drop_bacteria(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function chemotaxis_cljs$core$drop_bacteria_$_iter__9264(s__9265){
return (new cljs.core.LazySeq(null,(function (){
var s__9265__$1 = s__9265;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__9265__$1);
if(temp__5457__auto__){
var s__9265__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9265__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__9265__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__9267 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__9266 = (0);
while(true){
if((i__9266 < size__4291__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__9266);
cljs.core.chunk_append(b__9267,(function (){var x = cljs.core.rand_int(chemotaxis_cljs.core.dim);
var y = cljs.core.rand_int(chemotaxis_cljs.core.dim);
return chemotaxis_cljs.core.create_bacterium(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int((8)));
})());

var G__9268 = (i__9266 + (1));
i__9266 = G__9268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9267),chemotaxis_cljs$core$drop_bacteria_$_iter__9264(cljs.core.chunk_rest(s__9265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9267),null);
}
} else {
var _ = cljs.core.first(s__9265__$2);
return cljs.core.cons((function (){var x = cljs.core.rand_int(chemotaxis_cljs.core.dim);
var y = cljs.core.rand_int(chemotaxis_cljs.core.dim);
return chemotaxis_cljs.core.create_bacterium(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int((8)));
})(),chemotaxis_cljs$core$drop_bacteria_$_iter__9264(cljs.core.rest(s__9265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(chemotaxis_cljs.core.bacteria_cnt));
})());
});
chemotaxis_cljs.core.dir_delta = new cljs.core.PersistentArrayMap(null, 8, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(7),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null)], null);
/**
 * returns the location one step in the given dir.
 */
chemotaxis_cljs.core.delta_loc = (function chemotaxis_cljs$core$delta_loc(p__9269,dir){
var vec__9270 = p__9269;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9270,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9270,(1),null);
var vec__9273 = (chemotaxis_cljs.core.dir_delta.cljs$core$IFn$_invoke$arity$1 ? chemotaxis_cljs.core.dir_delta.cljs$core$IFn$_invoke$arity$1(dir) : chemotaxis_cljs.core.dir_delta.call(null,dir));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9273,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9273,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null);
});
chemotaxis_cljs.core.outside_world_QMARK_ = (function chemotaxis_cljs$core$outside_world_QMARK_(p__9276){
var vec__9277 = p__9276;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9277,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9277,(1),null);
return (((x < (0))) || ((x >= chemotaxis_cljs.core.dim)) || ((y < (0))) || ((y >= chemotaxis_cljs.core.dim)));
});
chemotaxis_cljs.core.move = (function chemotaxis_cljs$core$move(bacterium){
var coord = chemotaxis_cljs.core.get_bacterium_coord(bacterium);
var old_p = chemotaxis_cljs.core.place(coord);
var new_loc = chemotaxis_cljs.core.delta_loc(coord,chemotaxis_cljs.core.get_bacterium_dir(bacterium));
if(cljs.core.truth_(chemotaxis_cljs.core.outside_world_QMARK_(new_loc))){
return coord;
} else {
var new_p = chemotaxis_cljs.core.place(new_loc);
if(cljs.core.truth_(chemotaxis_cljs.core.get_cell_bacterium(new_p))){
return coord;
} else {
chemotaxis_cljs.core.set_cell_bacterium(new_p,bacterium);

chemotaxis_cljs.core.set_cell_bacterium(old_p,false);

chemotaxis_cljs.core.set_bacterium_loc(bacterium,new_loc);

return new_loc;
}
}
});
chemotaxis_cljs.core.behave = (function chemotaxis_cljs$core$behave(bacterium){
if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),bacterium.length)){
} else {
throw (new Error("Assert failed: (= 3 (alength bacterium))"));
}

var coord = chemotaxis_cljs.core.get_bacterium_coord(bacterium);
var occupied_cell = chemotaxis_cljs.core.place(coord);
var curr_food_amount = chemotaxis_cljs.core.get_cell_food(occupied_cell);
var prev_food_amount = chemotaxis_cljs.core.get_bacterium_food(bacterium);
var ahead_coord = chemotaxis_cljs.core.delta_loc(coord,chemotaxis_cljs.core.get_bacterium_dir(bacterium));
if(cljs.core.truth_((function (){var or__3922__auto__ = (curr_food_amount < prev_food_amount);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = chemotaxis_cljs.core.outside_world_QMARK_(ahead_coord);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return chemotaxis_cljs.core.get_cell_bacterium(chemotaxis_cljs.core.place(ahead_coord));
}
}
})())){
chemotaxis_cljs.core.set_bacterium_dir(bacterium,cljs.core.rand_int((8)));
} else {
}

chemotaxis_cljs.core.set_bacterium_food(bacterium,curr_food_amount);

chemotaxis_cljs.core.set_cell_food(occupied_cell,((function (){var G__9280 = (0.9 * curr_food_amount);
return Math.floor(G__9280);
})() | (0)));

return chemotaxis_cljs.core.move(bacterium);
});
chemotaxis_cljs.core.canvas_id = "chemotaxis-canvas";
chemotaxis_cljs.core.context = goog.dom.getElement(chemotaxis_cljs.core.canvas_id).getContext("2d");
chemotaxis_cljs.core.play_button_id = "chemotaxis-play-button";
chemotaxis_cljs.core.food_button_id = "chemotaxis-food-button";
chemotaxis_cljs.core.remove_food_button_id = "chemotaxis-remove-food-button";
chemotaxis_cljs.core.play_button = goog.dom.getElement(chemotaxis_cljs.core.play_button_id);
chemotaxis_cljs.core.food_button = goog.dom.getElement(chemotaxis_cljs.core.food_button_id);
chemotaxis_cljs.core.remove_food_button = goog.dom.getElement(chemotaxis_cljs.core.remove_food_button_id);
chemotaxis_cljs.core.scale = (5);
chemotaxis_cljs.core.fill_cell = (function chemotaxis_cljs$core$fill_cell(ctx,x,y,color){
var G__9281_9282 = ctx;
G__9281_9282.beginPath();

G__9281_9282.rect((x * chemotaxis_cljs.core.scale),(y * chemotaxis_cljs.core.scale),chemotaxis_cljs.core.scale,chemotaxis_cljs.core.scale);


ctx.fillStyle = color;

return ctx.fill();
});
chemotaxis_cljs.core.render_bacterium = (function chemotaxis_cljs$core$render_bacterium(bacterium,ctx,x,y){
var vec__9283 = (function (){var G__9287 = chemotaxis_cljs.core.get_bacterium_dir(bacterium);
var fexpr__9286 = new cljs.core.PersistentArrayMap(null, 8, [(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2),(4)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0),(0),(4)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(2),(0),(2)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(0),(0)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(2),(0)], null),(5),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(4),(0)], null),(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(2)], null),(7),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(4),(4)], null)], null);
return (fexpr__9286.cljs$core$IFn$_invoke$arity$1 ? fexpr__9286.cljs$core$IFn$_invoke$arity$1(G__9287) : fexpr__9286.call(null,G__9287));
})();
var hx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9283,(0),null);
var hy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9283,(1),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9283,(2),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9283,(3),null);
ctx.beginPath();

ctx.lineWidth = (3);

ctx.strokeStyle = "black";

var G__9288 = ctx;
G__9288.moveTo((hx + (x * chemotaxis_cljs.core.scale)),(hy + (y * chemotaxis_cljs.core.scale)));

G__9288.lineTo((tx + (x * chemotaxis_cljs.core.scale)),(ty + (y * chemotaxis_cljs.core.scale)));

G__9288.stroke();

return G__9288;
});
chemotaxis_cljs.core.render_food = (function chemotaxis_cljs$core$render_food(food_amount,ctx,x,y){
return chemotaxis_cljs.core.fill_cell(ctx,x,y,["rgba(0,255,0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((food_amount / chemotaxis_cljs.core.food_scale)),")"].join(''));
});
chemotaxis_cljs.core.render_place = (function chemotaxis_cljs$core$render_place(ctx,p,x,y){
var cell_food = chemotaxis_cljs.core.get_cell_food(p);
var cell_bacterium = chemotaxis_cljs.core.get_cell_bacterium(p);
chemotaxis_cljs.core.render_food(cell_food,ctx,x,y);

if(cljs.core.truth_(cell_bacterium)){
return chemotaxis_cljs.core.render_bacterium(cell_bacterium,ctx,x,y);
} else {
return null;
}
});
chemotaxis_cljs.core.setup_context = (function chemotaxis_cljs$core$setup_context(ctx){
ctx.width = (chemotaxis_cljs.core.dim * chemotaxis_cljs.core.scale);

ctx.height = (chemotaxis_cljs.core.dim * chemotaxis_cljs.core.scale);

ctx.beginPath();

ctx.strokeStyle = "white";

ctx.rect((0),(0),(chemotaxis_cljs.core.dim * chemotaxis_cljs.core.scale),(chemotaxis_cljs.core.dim * chemotaxis_cljs.core.scale));

ctx.fillStyle = "white";

ctx.fill();

return ctx.stroke();
});
chemotaxis_cljs.core.render = (function chemotaxis_cljs$core$render(ctx){
chemotaxis_cljs.core.setup_context(ctx);

var seq__9289 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(chemotaxis_cljs.core.dim));
var chunk__9294 = null;
var count__9295 = (0);
var i__9296 = (0);
while(true){
if((i__9296 < count__9295)){
var x = chunk__9294.cljs$core$IIndexed$_nth$arity$2(null,i__9296);
var seq__9297_9301 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(chemotaxis_cljs.core.dim));
var chunk__9298_9302 = null;
var count__9299_9303 = (0);
var i__9300_9304 = (0);
while(true){
if((i__9300_9304 < count__9299_9303)){
var y_9305 = chunk__9298_9302.cljs$core$IIndexed$_nth$arity$2(null,i__9300_9304);
chemotaxis_cljs.core.render_place(ctx,chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9305], null)),x,y_9305);


var G__9306 = seq__9297_9301;
var G__9307 = chunk__9298_9302;
var G__9308 = count__9299_9303;
var G__9309 = (i__9300_9304 + (1));
seq__9297_9301 = G__9306;
chunk__9298_9302 = G__9307;
count__9299_9303 = G__9308;
i__9300_9304 = G__9309;
continue;
} else {
var temp__5457__auto___9310 = cljs.core.seq(seq__9297_9301);
if(temp__5457__auto___9310){
var seq__9297_9311__$1 = temp__5457__auto___9310;
if(cljs.core.chunked_seq_QMARK_(seq__9297_9311__$1)){
var c__4319__auto___9312 = cljs.core.chunk_first(seq__9297_9311__$1);
var G__9313 = cljs.core.chunk_rest(seq__9297_9311__$1);
var G__9314 = c__4319__auto___9312;
var G__9315 = cljs.core.count(c__4319__auto___9312);
var G__9316 = (0);
seq__9297_9301 = G__9313;
chunk__9298_9302 = G__9314;
count__9299_9303 = G__9315;
i__9300_9304 = G__9316;
continue;
} else {
var y_9317 = cljs.core.first(seq__9297_9311__$1);
chemotaxis_cljs.core.render_place(ctx,chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9317], null)),x,y_9317);


var G__9318 = cljs.core.next(seq__9297_9311__$1);
var G__9319 = null;
var G__9320 = (0);
var G__9321 = (0);
seq__9297_9301 = G__9318;
chunk__9298_9302 = G__9319;
count__9299_9303 = G__9320;
i__9300_9304 = G__9321;
continue;
}
} else {
}
}
break;
}

var G__9322 = seq__9289;
var G__9323 = chunk__9294;
var G__9324 = count__9295;
var G__9325 = (i__9296 + (1));
seq__9289 = G__9322;
chunk__9294 = G__9323;
count__9295 = G__9324;
i__9296 = G__9325;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__9289);
if(temp__5457__auto__){
var seq__9289__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9289__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__9289__$1);
var G__9326 = cljs.core.chunk_rest(seq__9289__$1);
var G__9327 = c__4319__auto__;
var G__9328 = cljs.core.count(c__4319__auto__);
var G__9329 = (0);
seq__9289 = G__9326;
chunk__9294 = G__9327;
count__9295 = G__9328;
i__9296 = G__9329;
continue;
} else {
var x = cljs.core.first(seq__9289__$1);
var seq__9290_9330 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(chemotaxis_cljs.core.dim));
var chunk__9291_9331 = null;
var count__9292_9332 = (0);
var i__9293_9333 = (0);
while(true){
if((i__9293_9333 < count__9292_9332)){
var y_9334 = chunk__9291_9331.cljs$core$IIndexed$_nth$arity$2(null,i__9293_9333);
chemotaxis_cljs.core.render_place(ctx,chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9334], null)),x,y_9334);


var G__9335 = seq__9290_9330;
var G__9336 = chunk__9291_9331;
var G__9337 = count__9292_9332;
var G__9338 = (i__9293_9333 + (1));
seq__9290_9330 = G__9335;
chunk__9291_9331 = G__9336;
count__9292_9332 = G__9337;
i__9293_9333 = G__9338;
continue;
} else {
var temp__5457__auto___9339__$1 = cljs.core.seq(seq__9290_9330);
if(temp__5457__auto___9339__$1){
var seq__9290_9340__$1 = temp__5457__auto___9339__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9290_9340__$1)){
var c__4319__auto___9341 = cljs.core.chunk_first(seq__9290_9340__$1);
var G__9342 = cljs.core.chunk_rest(seq__9290_9340__$1);
var G__9343 = c__4319__auto___9341;
var G__9344 = cljs.core.count(c__4319__auto___9341);
var G__9345 = (0);
seq__9290_9330 = G__9342;
chunk__9291_9331 = G__9343;
count__9292_9332 = G__9344;
i__9293_9333 = G__9345;
continue;
} else {
var y_9346 = cljs.core.first(seq__9290_9340__$1);
chemotaxis_cljs.core.render_place(ctx,chemotaxis_cljs.core.place(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_9346], null)),x,y_9346);


var G__9347 = cljs.core.next(seq__9290_9340__$1);
var G__9348 = null;
var G__9349 = (0);
var G__9350 = (0);
seq__9290_9330 = G__9347;
chunk__9291_9331 = G__9348;
count__9292_9332 = G__9349;
i__9293_9333 = G__9350;
continue;
}
} else {
}
}
break;
}

var G__9351 = cljs.core.next(seq__9289__$1);
var G__9352 = null;
var G__9353 = (0);
var G__9354 = (0);
seq__9289 = G__9351;
chunk__9294 = G__9352;
count__9295 = G__9353;
i__9296 = G__9354;
continue;
}
} else {
return null;
}
}
break;
}
});
if(typeof chemotaxis_cljs.core.is_running !== 'undefined'){
} else {
chemotaxis_cljs.core.is_running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
chemotaxis_cljs.core.render_go_block = (function chemotaxis_cljs$core$render_go_block(){
var c__7149__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto__){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto__){
return (function (state_9369){
var state_val_9370 = (state_9369[(1)]);
if((state_val_9370 === (1))){
var state_9369__$1 = state_9369;
var statearr_9371_9383 = state_9369__$1;
(statearr_9371_9383[(2)] = null);

(statearr_9371_9383[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9370 === (2))){
var inst_9356 = cljs.core.deref(chemotaxis_cljs.core.is_running);
var state_9369__$1 = state_9369;
if(cljs.core.truth_(inst_9356)){
var statearr_9372_9384 = state_9369__$1;
(statearr_9372_9384[(1)] = (4));

} else {
var statearr_9373_9385 = state_9369__$1;
(statearr_9373_9385[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9370 === (3))){
var inst_9367 = (state_9369[(2)]);
var state_9369__$1 = state_9369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9369__$1,inst_9367);
} else {
if((state_val_9370 === (4))){
var inst_9358 = chemotaxis_cljs.core.render(chemotaxis_cljs.core.context);
var state_9369__$1 = state_9369;
var statearr_9374_9386 = state_9369__$1;
(statearr_9374_9386[(2)] = inst_9358);

(statearr_9374_9386[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9370 === (5))){
var state_9369__$1 = state_9369;
var statearr_9375_9387 = state_9369__$1;
(statearr_9375_9387[(2)] = null);

(statearr_9375_9387[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9370 === (6))){
var inst_9361 = (state_9369[(2)]);
var inst_9362 = cljs.core.async.timeout(chemotaxis_cljs.core.chan_timeout_duration);
var state_9369__$1 = (function (){var statearr_9376 = state_9369;
(statearr_9376[(7)] = inst_9361);

return statearr_9376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9369__$1,(7),inst_9362);
} else {
if((state_val_9370 === (7))){
var inst_9364 = (state_9369[(2)]);
var state_9369__$1 = (function (){var statearr_9377 = state_9369;
(statearr_9377[(8)] = inst_9364);

return statearr_9377;
})();
var statearr_9378_9388 = state_9369__$1;
(statearr_9378_9388[(2)] = null);

(statearr_9378_9388[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__7149__auto__))
;
return ((function (switch__7047__auto__,c__7149__auto__){
return (function() {
var chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto__ = null;
var chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto____0 = (function (){
var statearr_9379 = [null,null,null,null,null,null,null,null,null];
(statearr_9379[(0)] = chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto__);

(statearr_9379[(1)] = (1));

return statearr_9379;
});
var chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto____1 = (function (state_9369){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_9369);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e9380){if((e9380 instanceof Object)){
var ex__7051__auto__ = e9380;
var statearr_9381_9389 = state_9369;
(statearr_9381_9389[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9369);

return cljs.core.cst$kw$recur;
} else {
throw e9380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__9390 = state_9369;
state_9369 = G__9390;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto__ = function(state_9369){
switch(arguments.length){
case 0:
return chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto____0.call(this);
case 1:
return chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto____1.call(this,state_9369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto____0;
chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto____1;
return chemotaxis_cljs$core$render_go_block_$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto__))
})();
var state__7151__auto__ = (function (){var statearr_9382 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_9382[(6)] = c__7149__auto__);

return statearr_9382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto__))
);

return c__7149__auto__;
});
chemotaxis_cljs.core.behave_bacteria_go_block = (function chemotaxis_cljs$core$behave_bacteria_go_block(bacteria_seq){
var c__7149__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto__){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto__){
return (function (state_9444){
var state_val_9445 = (state_9444[(1)]);
if((state_val_9445 === (7))){
var inst_9402 = (state_9444[(7)]);
var inst_9401 = (state_9444[(8)]);
var inst_9404 = (inst_9402 < inst_9401);
var inst_9405 = inst_9404;
var state_9444__$1 = state_9444;
if(cljs.core.truth_(inst_9405)){
var statearr_9446_9480 = state_9444__$1;
(statearr_9446_9480[(1)] = (9));

} else {
var statearr_9447_9481 = state_9444__$1;
(statearr_9447_9481[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (1))){
var state_9444__$1 = state_9444;
var statearr_9448_9482 = state_9444__$1;
(statearr_9448_9482[(2)] = null);

(statearr_9448_9482[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (4))){
var inst_9398 = cljs.core.seq(bacteria_seq);
var inst_9399 = inst_9398;
var inst_9400 = null;
var inst_9401 = (0);
var inst_9402 = (0);
var state_9444__$1 = (function (){var statearr_9449 = state_9444;
(statearr_9449[(7)] = inst_9402);

(statearr_9449[(9)] = inst_9400);

(statearr_9449[(8)] = inst_9401);

(statearr_9449[(10)] = inst_9399);

return statearr_9449;
})();
var statearr_9450_9483 = state_9444__$1;
(statearr_9450_9483[(2)] = null);

(statearr_9450_9483[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (15))){
var inst_9412 = (state_9444[(11)]);
var inst_9416 = cljs.core.chunk_first(inst_9412);
var inst_9417 = cljs.core.chunk_rest(inst_9412);
var inst_9418 = cljs.core.count(inst_9416);
var inst_9399 = inst_9417;
var inst_9400 = inst_9416;
var inst_9401 = inst_9418;
var inst_9402 = (0);
var state_9444__$1 = (function (){var statearr_9451 = state_9444;
(statearr_9451[(7)] = inst_9402);

(statearr_9451[(9)] = inst_9400);

(statearr_9451[(8)] = inst_9401);

(statearr_9451[(10)] = inst_9399);

return statearr_9451;
})();
var statearr_9452_9484 = state_9444__$1;
(statearr_9452_9484[(2)] = null);

(statearr_9452_9484[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (13))){
var state_9444__$1 = state_9444;
var statearr_9453_9485 = state_9444__$1;
(statearr_9453_9485[(2)] = null);

(statearr_9453_9485[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (6))){
var inst_9436 = (state_9444[(2)]);
var inst_9437 = cljs.core.async.timeout(chemotaxis_cljs.core.chan_timeout_duration);
var state_9444__$1 = (function (){var statearr_9454 = state_9444;
(statearr_9454[(12)] = inst_9436);

return statearr_9454;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9444__$1,(18),inst_9437);
} else {
if((state_val_9445 === (17))){
var inst_9426 = (state_9444[(2)]);
var state_9444__$1 = state_9444;
var statearr_9455_9486 = state_9444__$1;
(statearr_9455_9486[(2)] = inst_9426);

(statearr_9455_9486[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (3))){
var inst_9442 = (state_9444[(2)]);
var state_9444__$1 = state_9444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9444__$1,inst_9442);
} else {
if((state_val_9445 === (12))){
var inst_9412 = (state_9444[(11)]);
var inst_9414 = cljs.core.chunked_seq_QMARK_(inst_9412);
var state_9444__$1 = state_9444;
if(inst_9414){
var statearr_9456_9487 = state_9444__$1;
(statearr_9456_9487[(1)] = (15));

} else {
var statearr_9457_9488 = state_9444__$1;
(statearr_9457_9488[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (2))){
var inst_9392 = cljs.core.deref(chemotaxis_cljs.core.is_running);
var state_9444__$1 = state_9444;
if(cljs.core.truth_(inst_9392)){
var statearr_9461_9489 = state_9444__$1;
(statearr_9461_9489[(1)] = (4));

} else {
var statearr_9462_9490 = state_9444__$1;
(statearr_9462_9490[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (11))){
var inst_9431 = (state_9444[(2)]);
var state_9444__$1 = state_9444;
var statearr_9463_9491 = state_9444__$1;
(statearr_9463_9491[(2)] = inst_9431);

(statearr_9463_9491[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (9))){
var inst_9402 = (state_9444[(7)]);
var inst_9400 = (state_9444[(9)]);
var inst_9401 = (state_9444[(8)]);
var inst_9399 = (state_9444[(10)]);
var inst_9407 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9400,inst_9402);
var inst_9408 = chemotaxis_cljs.core.behave(inst_9407);
var inst_9409 = (inst_9402 + (1));
var tmp9458 = inst_9400;
var tmp9459 = inst_9401;
var tmp9460 = inst_9399;
var inst_9399__$1 = tmp9460;
var inst_9400__$1 = tmp9458;
var inst_9401__$1 = tmp9459;
var inst_9402__$1 = inst_9409;
var state_9444__$1 = (function (){var statearr_9464 = state_9444;
(statearr_9464[(13)] = inst_9408);

(statearr_9464[(7)] = inst_9402__$1);

(statearr_9464[(9)] = inst_9400__$1);

(statearr_9464[(8)] = inst_9401__$1);

(statearr_9464[(10)] = inst_9399__$1);

return statearr_9464;
})();
var statearr_9465_9492 = state_9444__$1;
(statearr_9465_9492[(2)] = null);

(statearr_9465_9492[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (5))){
var state_9444__$1 = state_9444;
var statearr_9466_9493 = state_9444__$1;
(statearr_9466_9493[(2)] = null);

(statearr_9466_9493[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (14))){
var inst_9429 = (state_9444[(2)]);
var state_9444__$1 = state_9444;
var statearr_9467_9494 = state_9444__$1;
(statearr_9467_9494[(2)] = inst_9429);

(statearr_9467_9494[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (16))){
var inst_9412 = (state_9444[(11)]);
var inst_9421 = cljs.core.first(inst_9412);
var inst_9422 = chemotaxis_cljs.core.behave(inst_9421);
var inst_9423 = cljs.core.next(inst_9412);
var inst_9399 = inst_9423;
var inst_9400 = null;
var inst_9401 = (0);
var inst_9402 = (0);
var state_9444__$1 = (function (){var statearr_9468 = state_9444;
(statearr_9468[(7)] = inst_9402);

(statearr_9468[(9)] = inst_9400);

(statearr_9468[(8)] = inst_9401);

(statearr_9468[(10)] = inst_9399);

(statearr_9468[(14)] = inst_9422);

return statearr_9468;
})();
var statearr_9469_9495 = state_9444__$1;
(statearr_9469_9495[(2)] = null);

(statearr_9469_9495[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (10))){
var inst_9412 = (state_9444[(11)]);
var inst_9399 = (state_9444[(10)]);
var inst_9412__$1 = cljs.core.seq(inst_9399);
var state_9444__$1 = (function (){var statearr_9470 = state_9444;
(statearr_9470[(11)] = inst_9412__$1);

return statearr_9470;
})();
if(inst_9412__$1){
var statearr_9471_9496 = state_9444__$1;
(statearr_9471_9496[(1)] = (12));

} else {
var statearr_9472_9497 = state_9444__$1;
(statearr_9472_9497[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (18))){
var inst_9439 = (state_9444[(2)]);
var state_9444__$1 = (function (){var statearr_9473 = state_9444;
(statearr_9473[(15)] = inst_9439);

return statearr_9473;
})();
var statearr_9474_9498 = state_9444__$1;
(statearr_9474_9498[(2)] = null);

(statearr_9474_9498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9445 === (8))){
var inst_9433 = (state_9444[(2)]);
var state_9444__$1 = state_9444;
var statearr_9475_9499 = state_9444__$1;
(statearr_9475_9499[(2)] = inst_9433);

(statearr_9475_9499[(1)] = (6));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto__))
;
return ((function (switch__7047__auto__,c__7149__auto__){
return (function() {
var chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto__ = null;
var chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto____0 = (function (){
var statearr_9476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9476[(0)] = chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto__);

(statearr_9476[(1)] = (1));

return statearr_9476;
});
var chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto____1 = (function (state_9444){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_9444);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e9477){if((e9477 instanceof Object)){
var ex__7051__auto__ = e9477;
var statearr_9478_9500 = state_9444;
(statearr_9478_9500[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9444);

return cljs.core.cst$kw$recur;
} else {
throw e9477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__9501 = state_9444;
state_9444 = G__9501;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto__ = function(state_9444){
switch(arguments.length){
case 0:
return chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto____0.call(this);
case 1:
return chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto____1.call(this,state_9444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto____0;
chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto____1;
return chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto__))
})();
var state__7151__auto__ = (function (){var statearr_9479 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_9479[(6)] = c__7149__auto__);

return statearr_9479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto__))
);

return c__7149__auto__;
});
chemotaxis_cljs.core.listen = (function chemotaxis_cljs$core$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__9502_9505 = el;
var G__9503_9506 = type;
var G__9504_9507 = ((function (G__9502_9505,G__9503_9506,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__9502_9505,G__9503_9506,out))
;
goog.events.listen(G__9502_9505,G__9503_9506,G__9504_9507);

return out;
});
chemotaxis_cljs.core.play_pause = (function chemotaxis_cljs$core$play_pause(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(chemotaxis_cljs.core.is_running,cljs.core.not);
});
chemotaxis_cljs.core.mouse_interaction_go_block = (function chemotaxis_cljs$core$mouse_interaction_go_block(){
var play_button_clicks = chemotaxis_cljs.core.listen(chemotaxis_cljs.core.play_button,"click");
var drop_button_clicks = chemotaxis_cljs.core.listen(chemotaxis_cljs.core.food_button,"click");
var remove_food_button_clicks = chemotaxis_cljs.core.listen(chemotaxis_cljs.core.remove_food_button,"click");
var c__7149__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7149__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks){
return (function (){
var f__7150__auto__ = (function (){var switch__7047__auto__ = ((function (c__7149__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks){
return (function (state_9543){
var state_val_9544 = (state_9543[(1)]);
if((state_val_9544 === (7))){
var inst_9538 = (state_9543[(2)]);
var state_9543__$1 = (function (){var statearr_9545 = state_9543;
(statearr_9545[(7)] = inst_9538);

return statearr_9545;
})();
var statearr_9546_9567 = state_9543__$1;
(statearr_9546_9567[(2)] = null);

(statearr_9546_9567[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9544 === (1))){
var state_9543__$1 = state_9543;
var statearr_9547_9568 = state_9543__$1;
(statearr_9547_9568[(2)] = null);

(statearr_9547_9568[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9544 === (4))){
var inst_9518 = (state_9543[(8)]);
var inst_9516 = (state_9543[(2)]);
var inst_9517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9516,(0),null);
var inst_9518__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9516,(1),null);
var inst_9519 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9518__$1,play_button_clicks);
var state_9543__$1 = (function (){var statearr_9548 = state_9543;
(statearr_9548[(8)] = inst_9518__$1);

(statearr_9548[(9)] = inst_9517);

return statearr_9548;
})();
if(inst_9519){
var statearr_9549_9569 = state_9543__$1;
(statearr_9549_9569[(1)] = (5));

} else {
var statearr_9550_9570 = state_9543__$1;
(statearr_9550_9570[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9544 === (13))){
var inst_9534 = (state_9543[(2)]);
var state_9543__$1 = state_9543;
var statearr_9551_9571 = state_9543__$1;
(statearr_9551_9571[(2)] = inst_9534);

(statearr_9551_9571[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9544 === (6))){
var inst_9518 = (state_9543[(8)]);
var inst_9523 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9518,drop_button_clicks);
var state_9543__$1 = state_9543;
if(inst_9523){
var statearr_9552_9572 = state_9543__$1;
(statearr_9552_9572[(1)] = (8));

} else {
var statearr_9553_9573 = state_9543__$1;
(statearr_9553_9573[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9544 === (3))){
var inst_9541 = (state_9543[(2)]);
var state_9543__$1 = state_9543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9543__$1,inst_9541);
} else {
if((state_val_9544 === (12))){
var state_9543__$1 = state_9543;
var statearr_9554_9574 = state_9543__$1;
(statearr_9554_9574[(2)] = null);

(statearr_9554_9574[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9544 === (2))){
var inst_9512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9513 = [play_button_clicks,drop_button_clicks,remove_food_button_clicks];
var inst_9514 = (new cljs.core.PersistentVector(null,3,(5),inst_9512,inst_9513,null));
var state_9543__$1 = state_9543;
return cljs.core.async.ioc_alts_BANG_(state_9543__$1,(4),inst_9514);
} else {
if((state_val_9544 === (11))){
var inst_9530 = chemotaxis_cljs.core.remove_all_food();
var inst_9531 = chemotaxis_cljs.core.render(chemotaxis_cljs.core.context);
var state_9543__$1 = (function (){var statearr_9555 = state_9543;
(statearr_9555[(10)] = inst_9530);

return statearr_9555;
})();
var statearr_9556_9575 = state_9543__$1;
(statearr_9556_9575[(2)] = inst_9531);

(statearr_9556_9575[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9544 === (9))){
var inst_9518 = (state_9543[(8)]);
var inst_9528 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9518,remove_food_button_clicks);
var state_9543__$1 = state_9543;
if(inst_9528){
var statearr_9557_9576 = state_9543__$1;
(statearr_9557_9576[(1)] = (11));

} else {
var statearr_9558_9577 = state_9543__$1;
(statearr_9558_9577[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9544 === (5))){
var inst_9521 = chemotaxis_cljs.core.play_pause();
var state_9543__$1 = state_9543;
var statearr_9559_9578 = state_9543__$1;
(statearr_9559_9578[(2)] = inst_9521);

(statearr_9559_9578[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9544 === (10))){
var inst_9536 = (state_9543[(2)]);
var state_9543__$1 = state_9543;
var statearr_9560_9579 = state_9543__$1;
(statearr_9560_9579[(2)] = inst_9536);

(statearr_9560_9579[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9544 === (8))){
var inst_9525 = chemotaxis_cljs.core.drop_random_food.cljs$core$IFn$_invoke$arity$0();
var inst_9526 = chemotaxis_cljs.core.render(chemotaxis_cljs.core.context);
var state_9543__$1 = (function (){var statearr_9561 = state_9543;
(statearr_9561[(11)] = inst_9525);

return statearr_9561;
})();
var statearr_9562_9580 = state_9543__$1;
(statearr_9562_9580[(2)] = inst_9526);

(statearr_9562_9580[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__7149__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks))
;
return ((function (switch__7047__auto__,c__7149__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks){
return (function() {
var chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto__ = null;
var chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto____0 = (function (){
var statearr_9563 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9563[(0)] = chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto__);

(statearr_9563[(1)] = (1));

return statearr_9563;
});
var chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto____1 = (function (state_9543){
while(true){
var ret_value__7049__auto__ = (function (){try{while(true){
var result__7050__auto__ = switch__7047__auto__(state_9543);
if(cljs.core.keyword_identical_QMARK_(result__7050__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7050__auto__;
}
break;
}
}catch (e9564){if((e9564 instanceof Object)){
var ex__7051__auto__ = e9564;
var statearr_9565_9581 = state_9543;
(statearr_9565_9581[(5)] = ex__7051__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9543);

return cljs.core.cst$kw$recur;
} else {
throw e9564;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7049__auto__,cljs.core.cst$kw$recur)){
var G__9582 = state_9543;
state_9543 = G__9582;
continue;
} else {
return ret_value__7049__auto__;
}
break;
}
});
chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto__ = function(state_9543){
switch(arguments.length){
case 0:
return chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto____0.call(this);
case 1:
return chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto____1.call(this,state_9543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$0 = chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto____0;
chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto__.cljs$core$IFn$_invoke$arity$1 = chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto____1;
return chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__7048__auto__;
})()
;})(switch__7047__auto__,c__7149__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks))
})();
var state__7151__auto__ = (function (){var statearr_9566 = (f__7150__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7150__auto__.cljs$core$IFn$_invoke$arity$0() : f__7150__auto__.call(null));
(statearr_9566[(6)] = c__7149__auto__);

return statearr_9566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7151__auto__);
});})(c__7149__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks))
);

return c__7149__auto__;
});
chemotaxis_cljs.core.start = (function chemotaxis_cljs$core$start(){
chemotaxis_cljs.core.drop_random_food.cljs$core$IFn$_invoke$arity$1((10));

var bacteria = chemotaxis_cljs.core.drop_bacteria();
chemotaxis_cljs.core.render(chemotaxis_cljs.core.context);

chemotaxis_cljs.core.render_go_block();

chemotaxis_cljs.core.behave_bacteria_go_block(bacteria);

return chemotaxis_cljs.core.mouse_interaction_go_block();
});
if(typeof chemotaxis_cljs.core._ !== 'undefined'){
} else {
chemotaxis_cljs.core._ = chemotaxis_cljs.core.start();
}
