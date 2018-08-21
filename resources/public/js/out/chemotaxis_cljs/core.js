// Compiled by ClojureScript 1.10.238 {}
goog.provide('chemotaxis_cljs.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
chemotaxis_cljs.core.dim = (100);
chemotaxis_cljs.core.bacteria_cnt = (100);
chemotaxis_cljs.core.food_places_max = (16);
chemotaxis_cljs.core.food_min = (20);
chemotaxis_cljs.core.food_max = (100);
chemotaxis_cljs.core.food_scale = 50.0;
chemotaxis_cljs.core.chan_timeout_duration = (30);
chemotaxis_cljs.core.food_dropping_min_interval = (15000);
chemotaxis_cljs.core.food_dropping_max_interval = (90000);
chemotaxis_cljs.core.cell = (function chemotaxis_cljs$core$cell(food,bacterium){
if(!((food == null))){
} else {
throw (new Error("Assert failed: (not (nil? food))"));
}

if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(((cljs.core._EQ_.call(null,false,bacterium)) || (cljs.core._EQ_.call(null,(3),bacterium.length)))){
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

if(cljs.core._EQ_.call(null,(2),cell.length)){
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

if(cljs.core._EQ_.call(null,(2),cell.length)){
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

if(cljs.core._EQ_.call(null,(2),cell.length)){
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

if(cljs.core._EQ_.call(null,(2),cell.length)){
} else {
throw (new Error("Assert failed: (= 2 (alength cell))"));
}

if(((cljs.core._EQ_.call(null,false,bacterium)) || (cljs.core._EQ_.call(null,(3),bacterium.length)))){
} else {
throw (new Error("Assert failed: (or (= false bacterium) (= 3 (alength bacterium)))"));
}

(cell[(1)] = bacterium);

return cell;
});
chemotaxis_cljs.core.make_world = (function chemotaxis_cljs$core$make_world(w,h){
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function chemotaxis_cljs$core$make_world_$_iter__25094(s__25095){
return (new cljs.core.LazySeq(null,(function (){
var s__25095__$1 = s__25095;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25095__$1);
if(temp__5457__auto__){
var s__25095__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25095__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25095__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25097 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25096 = (0);
while(true){
if((i__25096 < size__4291__auto__)){
var _ = cljs.core._nth.call(null,c__4290__auto__,i__25096);
cljs.core.chunk_append.call(null,b__25097,cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (i__25096,_,c__4290__auto__,size__4291__auto__,b__25097,s__25095__$2,temp__5457__auto__){
return (function chemotaxis_cljs$core$make_world_$_iter__25094_$_iter__25098(s__25099){
return (new cljs.core.LazySeq(null,((function (i__25096,_,c__4290__auto__,size__4291__auto__,b__25097,s__25095__$2,temp__5457__auto__){
return (function (){
var s__25099__$1 = s__25099;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__25099__$1);
if(temp__5457__auto____$1){
var s__25099__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25099__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__25099__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__25101 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__25100 = (0);
while(true){
if((i__25100 < size__4291__auto____$1)){
var ___$1 = cljs.core._nth.call(null,c__4290__auto____$1,i__25100);
cljs.core.chunk_append.call(null,b__25101,chemotaxis_cljs.core.cell.call(null,(0),false));

var G__25106 = (i__25100 + (1));
i__25100 = G__25106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25101),chemotaxis_cljs$core$make_world_$_iter__25094_$_iter__25098.call(null,cljs.core.chunk_rest.call(null,s__25099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25101),null);
}
} else {
var ___$1 = cljs.core.first.call(null,s__25099__$2);
return cljs.core.cons.call(null,chemotaxis_cljs.core.cell.call(null,(0),false),chemotaxis_cljs$core$make_world_$_iter__25094_$_iter__25098.call(null,cljs.core.rest.call(null,s__25099__$2)));
}
} else {
return null;
}
break;
}
});})(i__25096,_,c__4290__auto__,size__4291__auto__,b__25097,s__25095__$2,temp__5457__auto__))
,null,null));
});})(i__25096,_,c__4290__auto__,size__4291__auto__,b__25097,s__25095__$2,temp__5457__auto__))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,w));
})()));

var G__25107 = (i__25096 + (1));
i__25096 = G__25107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25097),chemotaxis_cljs$core$make_world_$_iter__25094.call(null,cljs.core.chunk_rest.call(null,s__25095__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25097),null);
}
} else {
var _ = cljs.core.first.call(null,s__25095__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (_,s__25095__$2,temp__5457__auto__){
return (function chemotaxis_cljs$core$make_world_$_iter__25094_$_iter__25102(s__25103){
return (new cljs.core.LazySeq(null,((function (_,s__25095__$2,temp__5457__auto__){
return (function (){
var s__25103__$1 = s__25103;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__25103__$1);
if(temp__5457__auto____$1){
var s__25103__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25103__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25103__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25105 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25104 = (0);
while(true){
if((i__25104 < size__4291__auto__)){
var ___$1 = cljs.core._nth.call(null,c__4290__auto__,i__25104);
cljs.core.chunk_append.call(null,b__25105,chemotaxis_cljs.core.cell.call(null,(0),false));

var G__25108 = (i__25104 + (1));
i__25104 = G__25108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25105),chemotaxis_cljs$core$make_world_$_iter__25094_$_iter__25102.call(null,cljs.core.chunk_rest.call(null,s__25103__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25105),null);
}
} else {
var ___$1 = cljs.core.first.call(null,s__25103__$2);
return cljs.core.cons.call(null,chemotaxis_cljs.core.cell.call(null,(0),false),chemotaxis_cljs$core$make_world_$_iter__25094_$_iter__25102.call(null,cljs.core.rest.call(null,s__25103__$2)));
}
} else {
return null;
}
break;
}
});})(_,s__25095__$2,temp__5457__auto__))
,null,null));
});})(_,s__25095__$2,temp__5457__auto__))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,w));
})()),chemotaxis_cljs$core$make_world_$_iter__25094.call(null,cljs.core.rest.call(null,s__25095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,h));
})());
});
if(typeof chemotaxis_cljs.core.world !== 'undefined'){
} else {
chemotaxis_cljs.core.world = chemotaxis_cljs.core.make_world.call(null,chemotaxis_cljs.core.dim,chemotaxis_cljs.core.dim);
}
chemotaxis_cljs.core.place = (function chemotaxis_cljs$core$place(p__25109){
var vec__25110 = p__25109;
var x = cljs.core.nth.call(null,vec__25110,(0),null);
var y = cljs.core.nth.call(null,vec__25110,(1),null);
return cljs.core.get_in.call(null,chemotaxis_cljs.core.world,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
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

if(cljs.core._EQ_.call(null,(3),bacterium.length)){
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

if(cljs.core._EQ_.call(null,(3),bacterium.length)){
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

if(cljs.core._EQ_.call(null,(3),bacterium.length)){
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

if(cljs.core._EQ_.call(null,(3),bacterium.length)){
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

if(cljs.core._EQ_.call(null,(3),bacterium.length)){
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

if(cljs.core._EQ_.call(null,(3),bacterium.length)){
} else {
throw (new Error("Assert failed: (= 3 (alength bacterium))"));
}

(bacterium[(2)] = food);

return bacterium;
});
chemotaxis_cljs.core.create_bacterium = (function chemotaxis_cljs$core$create_bacterium(loc,dir){
var c = chemotaxis_cljs.core.place.call(null,loc);
var bact = chemotaxis_cljs.core.bacterium.call(null,dir,loc,(0));
chemotaxis_cljs.core.set_cell_bacterium.call(null,c,bact);

return bact;
});
chemotaxis_cljs.core.distance = (function chemotaxis_cljs$core$distance(p__25113,p__25114){
var vec__25115 = p__25113;
var x1 = cljs.core.nth.call(null,vec__25115,(0),null);
var y1 = cljs.core.nth.call(null,vec__25115,(1),null);
var vec__25118 = p__25114;
var x2 = cljs.core.nth.call(null,vec__25118,(0),null);
var y2 = cljs.core.nth.call(null,vec__25118,(1),null);
return Math.sqrt((Math.pow((x1 - x2),(2)) + Math.pow((y1 - y2),(2))));
});
chemotaxis_cljs.core.drop_single_food_splash = (function chemotaxis_cljs$core$drop_single_food_splash(p__25121,food_amount){
var vec__25122 = p__25121;
var center_x = cljs.core.nth.call(null,vec__25122,(0),null);
var center_y = cljs.core.nth.call(null,vec__25122,(1),null);
var circle_r = (((25) * (chemotaxis_cljs.core.food_max / food_amount)) | (0));
var seq__25125 = cljs.core.seq.call(null,cljs.core.range.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (center_x - circle_r);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(function (){var x__4009__auto__ = chemotaxis_cljs.core.dim;
var y__4010__auto__ = (center_x + circle_r);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()));
var chunk__25130 = null;
var count__25131 = (0);
var i__25132 = (0);
while(true){
if((i__25132 < count__25131)){
var x = cljs.core._nth.call(null,chunk__25130,i__25132);
var seq__25133_25137 = cljs.core.seq.call(null,cljs.core.range.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (center_y - circle_r);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(function (){var x__4009__auto__ = chemotaxis_cljs.core.dim;
var y__4010__auto__ = (center_y + circle_r);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()));
var chunk__25134_25138 = null;
var count__25135_25139 = (0);
var i__25136_25140 = (0);
while(true){
if((i__25136_25140 < count__25135_25139)){
var y_25141 = cljs.core._nth.call(null,chunk__25134_25138,i__25136_25140);
chemotaxis_cljs.core.set_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25141], null)),(chemotaxis_cljs.core.get_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25141], null))) + (food_amount * Math.pow(0.7,chemotaxis_cljs.core.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25141], null))))));


var G__25142 = seq__25133_25137;
var G__25143 = chunk__25134_25138;
var G__25144 = count__25135_25139;
var G__25145 = (i__25136_25140 + (1));
seq__25133_25137 = G__25142;
chunk__25134_25138 = G__25143;
count__25135_25139 = G__25144;
i__25136_25140 = G__25145;
continue;
} else {
var temp__5457__auto___25146 = cljs.core.seq.call(null,seq__25133_25137);
if(temp__5457__auto___25146){
var seq__25133_25147__$1 = temp__5457__auto___25146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25133_25147__$1)){
var c__4319__auto___25148 = cljs.core.chunk_first.call(null,seq__25133_25147__$1);
var G__25149 = cljs.core.chunk_rest.call(null,seq__25133_25147__$1);
var G__25150 = c__4319__auto___25148;
var G__25151 = cljs.core.count.call(null,c__4319__auto___25148);
var G__25152 = (0);
seq__25133_25137 = G__25149;
chunk__25134_25138 = G__25150;
count__25135_25139 = G__25151;
i__25136_25140 = G__25152;
continue;
} else {
var y_25153 = cljs.core.first.call(null,seq__25133_25147__$1);
chemotaxis_cljs.core.set_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25153], null)),(chemotaxis_cljs.core.get_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25153], null))) + (food_amount * Math.pow(0.7,chemotaxis_cljs.core.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25153], null))))));


var G__25154 = cljs.core.next.call(null,seq__25133_25147__$1);
var G__25155 = null;
var G__25156 = (0);
var G__25157 = (0);
seq__25133_25137 = G__25154;
chunk__25134_25138 = G__25155;
count__25135_25139 = G__25156;
i__25136_25140 = G__25157;
continue;
}
} else {
}
}
break;
}

var G__25158 = seq__25125;
var G__25159 = chunk__25130;
var G__25160 = count__25131;
var G__25161 = (i__25132 + (1));
seq__25125 = G__25158;
chunk__25130 = G__25159;
count__25131 = G__25160;
i__25132 = G__25161;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25125);
if(temp__5457__auto__){
var seq__25125__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25125__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25125__$1);
var G__25162 = cljs.core.chunk_rest.call(null,seq__25125__$1);
var G__25163 = c__4319__auto__;
var G__25164 = cljs.core.count.call(null,c__4319__auto__);
var G__25165 = (0);
seq__25125 = G__25162;
chunk__25130 = G__25163;
count__25131 = G__25164;
i__25132 = G__25165;
continue;
} else {
var x = cljs.core.first.call(null,seq__25125__$1);
var seq__25126_25166 = cljs.core.seq.call(null,cljs.core.range.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (center_y - circle_r);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(function (){var x__4009__auto__ = chemotaxis_cljs.core.dim;
var y__4010__auto__ = (center_y + circle_r);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()));
var chunk__25127_25167 = null;
var count__25128_25168 = (0);
var i__25129_25169 = (0);
while(true){
if((i__25129_25169 < count__25128_25168)){
var y_25170 = cljs.core._nth.call(null,chunk__25127_25167,i__25129_25169);
chemotaxis_cljs.core.set_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25170], null)),(chemotaxis_cljs.core.get_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25170], null))) + (food_amount * Math.pow(0.7,chemotaxis_cljs.core.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25170], null))))));


var G__25171 = seq__25126_25166;
var G__25172 = chunk__25127_25167;
var G__25173 = count__25128_25168;
var G__25174 = (i__25129_25169 + (1));
seq__25126_25166 = G__25171;
chunk__25127_25167 = G__25172;
count__25128_25168 = G__25173;
i__25129_25169 = G__25174;
continue;
} else {
var temp__5457__auto___25175__$1 = cljs.core.seq.call(null,seq__25126_25166);
if(temp__5457__auto___25175__$1){
var seq__25126_25176__$1 = temp__5457__auto___25175__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25126_25176__$1)){
var c__4319__auto___25177 = cljs.core.chunk_first.call(null,seq__25126_25176__$1);
var G__25178 = cljs.core.chunk_rest.call(null,seq__25126_25176__$1);
var G__25179 = c__4319__auto___25177;
var G__25180 = cljs.core.count.call(null,c__4319__auto___25177);
var G__25181 = (0);
seq__25126_25166 = G__25178;
chunk__25127_25167 = G__25179;
count__25128_25168 = G__25180;
i__25129_25169 = G__25181;
continue;
} else {
var y_25182 = cljs.core.first.call(null,seq__25126_25176__$1);
chemotaxis_cljs.core.set_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25182], null)),(chemotaxis_cljs.core.get_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25182], null))) + (food_amount * Math.pow(0.7,chemotaxis_cljs.core.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25182], null))))));


var G__25183 = cljs.core.next.call(null,seq__25126_25176__$1);
var G__25184 = null;
var G__25185 = (0);
var G__25186 = (0);
seq__25126_25166 = G__25183;
chunk__25127_25167 = G__25184;
count__25128_25168 = G__25185;
i__25129_25169 = G__25186;
continue;
}
} else {
}
}
break;
}

var G__25187 = cljs.core.next.call(null,seq__25125__$1);
var G__25188 = null;
var G__25189 = (0);
var G__25190 = (0);
seq__25125 = G__25187;
chunk__25130 = G__25188;
count__25131 = G__25189;
i__25132 = G__25190;
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
var G__25192 = arguments.length;
switch (G__25192) {
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
return chemotaxis_cljs.core.drop_random_food.call(null,(1));
});

chemotaxis_cljs.core.drop_random_food.cljs$core$IFn$_invoke$arity$1 = (function (min_places_cnt){
var n__4376__auto__ = (min_places_cnt + cljs.core.rand_int.call(null,((chemotaxis_cljs.core.food_places_max - min_places_cnt) + (1))));
var _ = (0);
while(true){
if((_ < n__4376__auto__)){
var coord_25194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,chemotaxis_cljs.core.dim),cljs.core.rand_int.call(null,chemotaxis_cljs.core.dim)], null);
var food_amount_25195 = (chemotaxis_cljs.core.food_min + cljs.core.rand_int.call(null,((chemotaxis_cljs.core.food_max - chemotaxis_cljs.core.food_min) + (1))));
chemotaxis_cljs.core.drop_single_food_splash.call(null,coord_25194,food_amount_25195);

var G__25196 = (_ + (1));
_ = G__25196;
continue;
} else {
return null;
}
break;
}
});

chemotaxis_cljs.core.drop_random_food.cljs$lang$maxFixedArity = 1;

chemotaxis_cljs.core.remove_all_food = (function chemotaxis_cljs$core$remove_all_food(){
var seq__25197 = cljs.core.seq.call(null,cljs.core.range.call(null,chemotaxis_cljs.core.dim));
var chunk__25202 = null;
var count__25203 = (0);
var i__25204 = (0);
while(true){
if((i__25204 < count__25203)){
var x = cljs.core._nth.call(null,chunk__25202,i__25204);
var seq__25205_25209 = cljs.core.seq.call(null,cljs.core.range.call(null,chemotaxis_cljs.core.dim));
var chunk__25206_25210 = null;
var count__25207_25211 = (0);
var i__25208_25212 = (0);
while(true){
if((i__25208_25212 < count__25207_25211)){
var y_25213 = cljs.core._nth.call(null,chunk__25206_25210,i__25208_25212);
chemotaxis_cljs.core.set_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25213], null)),(0));


var G__25214 = seq__25205_25209;
var G__25215 = chunk__25206_25210;
var G__25216 = count__25207_25211;
var G__25217 = (i__25208_25212 + (1));
seq__25205_25209 = G__25214;
chunk__25206_25210 = G__25215;
count__25207_25211 = G__25216;
i__25208_25212 = G__25217;
continue;
} else {
var temp__5457__auto___25218 = cljs.core.seq.call(null,seq__25205_25209);
if(temp__5457__auto___25218){
var seq__25205_25219__$1 = temp__5457__auto___25218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25205_25219__$1)){
var c__4319__auto___25220 = cljs.core.chunk_first.call(null,seq__25205_25219__$1);
var G__25221 = cljs.core.chunk_rest.call(null,seq__25205_25219__$1);
var G__25222 = c__4319__auto___25220;
var G__25223 = cljs.core.count.call(null,c__4319__auto___25220);
var G__25224 = (0);
seq__25205_25209 = G__25221;
chunk__25206_25210 = G__25222;
count__25207_25211 = G__25223;
i__25208_25212 = G__25224;
continue;
} else {
var y_25225 = cljs.core.first.call(null,seq__25205_25219__$1);
chemotaxis_cljs.core.set_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25225], null)),(0));


var G__25226 = cljs.core.next.call(null,seq__25205_25219__$1);
var G__25227 = null;
var G__25228 = (0);
var G__25229 = (0);
seq__25205_25209 = G__25226;
chunk__25206_25210 = G__25227;
count__25207_25211 = G__25228;
i__25208_25212 = G__25229;
continue;
}
} else {
}
}
break;
}

var G__25230 = seq__25197;
var G__25231 = chunk__25202;
var G__25232 = count__25203;
var G__25233 = (i__25204 + (1));
seq__25197 = G__25230;
chunk__25202 = G__25231;
count__25203 = G__25232;
i__25204 = G__25233;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25197);
if(temp__5457__auto__){
var seq__25197__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25197__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25197__$1);
var G__25234 = cljs.core.chunk_rest.call(null,seq__25197__$1);
var G__25235 = c__4319__auto__;
var G__25236 = cljs.core.count.call(null,c__4319__auto__);
var G__25237 = (0);
seq__25197 = G__25234;
chunk__25202 = G__25235;
count__25203 = G__25236;
i__25204 = G__25237;
continue;
} else {
var x = cljs.core.first.call(null,seq__25197__$1);
var seq__25198_25238 = cljs.core.seq.call(null,cljs.core.range.call(null,chemotaxis_cljs.core.dim));
var chunk__25199_25239 = null;
var count__25200_25240 = (0);
var i__25201_25241 = (0);
while(true){
if((i__25201_25241 < count__25200_25240)){
var y_25242 = cljs.core._nth.call(null,chunk__25199_25239,i__25201_25241);
chemotaxis_cljs.core.set_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25242], null)),(0));


var G__25243 = seq__25198_25238;
var G__25244 = chunk__25199_25239;
var G__25245 = count__25200_25240;
var G__25246 = (i__25201_25241 + (1));
seq__25198_25238 = G__25243;
chunk__25199_25239 = G__25244;
count__25200_25240 = G__25245;
i__25201_25241 = G__25246;
continue;
} else {
var temp__5457__auto___25247__$1 = cljs.core.seq.call(null,seq__25198_25238);
if(temp__5457__auto___25247__$1){
var seq__25198_25248__$1 = temp__5457__auto___25247__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25198_25248__$1)){
var c__4319__auto___25249 = cljs.core.chunk_first.call(null,seq__25198_25248__$1);
var G__25250 = cljs.core.chunk_rest.call(null,seq__25198_25248__$1);
var G__25251 = c__4319__auto___25249;
var G__25252 = cljs.core.count.call(null,c__4319__auto___25249);
var G__25253 = (0);
seq__25198_25238 = G__25250;
chunk__25199_25239 = G__25251;
count__25200_25240 = G__25252;
i__25201_25241 = G__25253;
continue;
} else {
var y_25254 = cljs.core.first.call(null,seq__25198_25248__$1);
chemotaxis_cljs.core.set_cell_food.call(null,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25254], null)),(0));


var G__25255 = cljs.core.next.call(null,seq__25198_25248__$1);
var G__25256 = null;
var G__25257 = (0);
var G__25258 = (0);
seq__25198_25238 = G__25255;
chunk__25199_25239 = G__25256;
count__25200_25240 = G__25257;
i__25201_25241 = G__25258;
continue;
}
} else {
}
}
break;
}

var G__25259 = cljs.core.next.call(null,seq__25197__$1);
var G__25260 = null;
var G__25261 = (0);
var G__25262 = (0);
seq__25197 = G__25259;
chunk__25202 = G__25260;
count__25203 = G__25261;
i__25204 = G__25262;
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
return cljs.core.doall.call(null,(function (){var iter__4292__auto__ = (function chemotaxis_cljs$core$drop_bacteria_$_iter__25263(s__25264){
return (new cljs.core.LazySeq(null,(function (){
var s__25264__$1 = s__25264;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25264__$1);
if(temp__5457__auto__){
var s__25264__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25264__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25264__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25266 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25265 = (0);
while(true){
if((i__25265 < size__4291__auto__)){
var _ = cljs.core._nth.call(null,c__4290__auto__,i__25265);
cljs.core.chunk_append.call(null,b__25266,(function (){var x = cljs.core.rand_int.call(null,chemotaxis_cljs.core.dim);
var y = cljs.core.rand_int.call(null,chemotaxis_cljs.core.dim);
return chemotaxis_cljs.core.create_bacterium.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int.call(null,(8)));
})());

var G__25267 = (i__25265 + (1));
i__25265 = G__25267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25266),chemotaxis_cljs$core$drop_bacteria_$_iter__25263.call(null,cljs.core.chunk_rest.call(null,s__25264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25266),null);
}
} else {
var _ = cljs.core.first.call(null,s__25264__$2);
return cljs.core.cons.call(null,(function (){var x = cljs.core.rand_int.call(null,chemotaxis_cljs.core.dim);
var y = cljs.core.rand_int.call(null,chemotaxis_cljs.core.dim);
return chemotaxis_cljs.core.create_bacterium.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.rand_int.call(null,(8)));
})(),chemotaxis_cljs$core$drop_bacteria_$_iter__25263.call(null,cljs.core.rest.call(null,s__25264__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,chemotaxis_cljs.core.bacteria_cnt));
})());
});
chemotaxis_cljs.core.dir_delta = new cljs.core.PersistentArrayMap(null, 8, [(0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),(7),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null)], null);
/**
 * returns the location one step in the given dir.
 */
chemotaxis_cljs.core.delta_loc = (function chemotaxis_cljs$core$delta_loc(p__25268,dir){
var vec__25269 = p__25268;
var x = cljs.core.nth.call(null,vec__25269,(0),null);
var y = cljs.core.nth.call(null,vec__25269,(1),null);
var vec__25272 = chemotaxis_cljs.core.dir_delta.call(null,dir);
var dx = cljs.core.nth.call(null,vec__25272,(0),null);
var dy = cljs.core.nth.call(null,vec__25272,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null);
});
chemotaxis_cljs.core.outside_world_QMARK_ = (function chemotaxis_cljs$core$outside_world_QMARK_(p__25275){
var vec__25276 = p__25275;
var x = cljs.core.nth.call(null,vec__25276,(0),null);
var y = cljs.core.nth.call(null,vec__25276,(1),null);
return (((x < (0))) || ((x >= chemotaxis_cljs.core.dim)) || ((y < (0))) || ((y >= chemotaxis_cljs.core.dim)));
});
chemotaxis_cljs.core.move = (function chemotaxis_cljs$core$move(bacterium){
var coord = chemotaxis_cljs.core.get_bacterium_coord.call(null,bacterium);
var old_p = chemotaxis_cljs.core.place.call(null,coord);
var new_loc = chemotaxis_cljs.core.delta_loc.call(null,coord,chemotaxis_cljs.core.get_bacterium_dir.call(null,bacterium));
if(cljs.core.truth_(chemotaxis_cljs.core.outside_world_QMARK_.call(null,new_loc))){
return coord;
} else {
var new_p = chemotaxis_cljs.core.place.call(null,new_loc);
if(cljs.core.truth_(chemotaxis_cljs.core.get_cell_bacterium.call(null,new_p))){
return coord;
} else {
chemotaxis_cljs.core.set_cell_bacterium.call(null,new_p,bacterium);

chemotaxis_cljs.core.set_cell_bacterium.call(null,old_p,false);

chemotaxis_cljs.core.set_bacterium_loc.call(null,bacterium,new_loc);

return new_loc;
}
}
});
chemotaxis_cljs.core.behave = (function chemotaxis_cljs$core$behave(bacterium){
if(!((bacterium == null))){
} else {
throw (new Error("Assert failed: (not (nil? bacterium))"));
}

if(cljs.core._EQ_.call(null,(3),bacterium.length)){
} else {
throw (new Error("Assert failed: (= 3 (alength bacterium))"));
}

var coord = chemotaxis_cljs.core.get_bacterium_coord.call(null,bacterium);
var occupied_cell = chemotaxis_cljs.core.place.call(null,coord);
var curr_food_amount = chemotaxis_cljs.core.get_cell_food.call(null,occupied_cell);
var prev_food_amount = chemotaxis_cljs.core.get_bacterium_food.call(null,bacterium);
var ahead_coord = chemotaxis_cljs.core.delta_loc.call(null,coord,chemotaxis_cljs.core.get_bacterium_dir.call(null,bacterium));
if(cljs.core.truth_((function (){var or__3922__auto__ = (curr_food_amount < prev_food_amount);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = chemotaxis_cljs.core.outside_world_QMARK_.call(null,ahead_coord);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return chemotaxis_cljs.core.get_cell_bacterium.call(null,chemotaxis_cljs.core.place.call(null,ahead_coord));
}
}
})())){
chemotaxis_cljs.core.set_bacterium_dir.call(null,bacterium,cljs.core.rand_int.call(null,(8)));
} else {
}

chemotaxis_cljs.core.set_bacterium_food.call(null,bacterium,curr_food_amount);

chemotaxis_cljs.core.set_cell_food.call(null,occupied_cell,(Math.floor((0.9 * curr_food_amount)) | (0)));

return chemotaxis_cljs.core.move.call(null,bacterium);
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
var G__25279_25280 = ctx;
G__25279_25280.beginPath();

G__25279_25280.rect((x * chemotaxis_cljs.core.scale),(y * chemotaxis_cljs.core.scale),chemotaxis_cljs.core.scale,chemotaxis_cljs.core.scale);


ctx.fillStyle = color;

return ctx.fill();
});
chemotaxis_cljs.core.render_bacterium = (function chemotaxis_cljs$core$render_bacterium(bacterium,ctx,x,y){
var vec__25281 = new cljs.core.PersistentArrayMap(null, 8, [(0),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2),(4)], null),(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0),(0),(4)], null),(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(2),(0),(2)], null),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(0),(0)], null),(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(2),(0)], null),(5),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(4),(0)], null),(6),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(2)], null),(7),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(4),(4)], null)], null).call(null,chemotaxis_cljs.core.get_bacterium_dir.call(null,bacterium));
var hx = cljs.core.nth.call(null,vec__25281,(0),null);
var hy = cljs.core.nth.call(null,vec__25281,(1),null);
var tx = cljs.core.nth.call(null,vec__25281,(2),null);
var ty = cljs.core.nth.call(null,vec__25281,(3),null);
ctx.beginPath();

ctx.lineWidth = (3);

ctx.strokeStyle = "black";

var G__25284 = ctx;
G__25284.moveTo((hx + (x * chemotaxis_cljs.core.scale)),(hy + (y * chemotaxis_cljs.core.scale)));

G__25284.lineTo((tx + (x * chemotaxis_cljs.core.scale)),(ty + (y * chemotaxis_cljs.core.scale)));

G__25284.stroke();

return G__25284;
});
chemotaxis_cljs.core.render_food = (function chemotaxis_cljs$core$render_food(food_amount,ctx,x,y){
return chemotaxis_cljs.core.fill_cell.call(null,ctx,x,y,["rgba(0,255,0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((food_amount / chemotaxis_cljs.core.food_scale)),")"].join(''));
});
chemotaxis_cljs.core.render_place = (function chemotaxis_cljs$core$render_place(ctx,p,x,y){
var cell_food = chemotaxis_cljs.core.get_cell_food.call(null,p);
var cell_bacterium = chemotaxis_cljs.core.get_cell_bacterium.call(null,p);
chemotaxis_cljs.core.render_food.call(null,cell_food,ctx,x,y);

if(cljs.core.truth_(cell_bacterium)){
return chemotaxis_cljs.core.render_bacterium.call(null,cell_bacterium,ctx,x,y);
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
chemotaxis_cljs.core.setup_context.call(null,ctx);

var seq__25285 = cljs.core.seq.call(null,cljs.core.range.call(null,chemotaxis_cljs.core.dim));
var chunk__25290 = null;
var count__25291 = (0);
var i__25292 = (0);
while(true){
if((i__25292 < count__25291)){
var x = cljs.core._nth.call(null,chunk__25290,i__25292);
var seq__25293_25297 = cljs.core.seq.call(null,cljs.core.range.call(null,chemotaxis_cljs.core.dim));
var chunk__25294_25298 = null;
var count__25295_25299 = (0);
var i__25296_25300 = (0);
while(true){
if((i__25296_25300 < count__25295_25299)){
var y_25301 = cljs.core._nth.call(null,chunk__25294_25298,i__25296_25300);
chemotaxis_cljs.core.render_place.call(null,ctx,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25301], null)),x,y_25301);


var G__25302 = seq__25293_25297;
var G__25303 = chunk__25294_25298;
var G__25304 = count__25295_25299;
var G__25305 = (i__25296_25300 + (1));
seq__25293_25297 = G__25302;
chunk__25294_25298 = G__25303;
count__25295_25299 = G__25304;
i__25296_25300 = G__25305;
continue;
} else {
var temp__5457__auto___25306 = cljs.core.seq.call(null,seq__25293_25297);
if(temp__5457__auto___25306){
var seq__25293_25307__$1 = temp__5457__auto___25306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25293_25307__$1)){
var c__4319__auto___25308 = cljs.core.chunk_first.call(null,seq__25293_25307__$1);
var G__25309 = cljs.core.chunk_rest.call(null,seq__25293_25307__$1);
var G__25310 = c__4319__auto___25308;
var G__25311 = cljs.core.count.call(null,c__4319__auto___25308);
var G__25312 = (0);
seq__25293_25297 = G__25309;
chunk__25294_25298 = G__25310;
count__25295_25299 = G__25311;
i__25296_25300 = G__25312;
continue;
} else {
var y_25313 = cljs.core.first.call(null,seq__25293_25307__$1);
chemotaxis_cljs.core.render_place.call(null,ctx,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25313], null)),x,y_25313);


var G__25314 = cljs.core.next.call(null,seq__25293_25307__$1);
var G__25315 = null;
var G__25316 = (0);
var G__25317 = (0);
seq__25293_25297 = G__25314;
chunk__25294_25298 = G__25315;
count__25295_25299 = G__25316;
i__25296_25300 = G__25317;
continue;
}
} else {
}
}
break;
}

var G__25318 = seq__25285;
var G__25319 = chunk__25290;
var G__25320 = count__25291;
var G__25321 = (i__25292 + (1));
seq__25285 = G__25318;
chunk__25290 = G__25319;
count__25291 = G__25320;
i__25292 = G__25321;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25285);
if(temp__5457__auto__){
var seq__25285__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25285__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25285__$1);
var G__25322 = cljs.core.chunk_rest.call(null,seq__25285__$1);
var G__25323 = c__4319__auto__;
var G__25324 = cljs.core.count.call(null,c__4319__auto__);
var G__25325 = (0);
seq__25285 = G__25322;
chunk__25290 = G__25323;
count__25291 = G__25324;
i__25292 = G__25325;
continue;
} else {
var x = cljs.core.first.call(null,seq__25285__$1);
var seq__25286_25326 = cljs.core.seq.call(null,cljs.core.range.call(null,chemotaxis_cljs.core.dim));
var chunk__25287_25327 = null;
var count__25288_25328 = (0);
var i__25289_25329 = (0);
while(true){
if((i__25289_25329 < count__25288_25328)){
var y_25330 = cljs.core._nth.call(null,chunk__25287_25327,i__25289_25329);
chemotaxis_cljs.core.render_place.call(null,ctx,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25330], null)),x,y_25330);


var G__25331 = seq__25286_25326;
var G__25332 = chunk__25287_25327;
var G__25333 = count__25288_25328;
var G__25334 = (i__25289_25329 + (1));
seq__25286_25326 = G__25331;
chunk__25287_25327 = G__25332;
count__25288_25328 = G__25333;
i__25289_25329 = G__25334;
continue;
} else {
var temp__5457__auto___25335__$1 = cljs.core.seq.call(null,seq__25286_25326);
if(temp__5457__auto___25335__$1){
var seq__25286_25336__$1 = temp__5457__auto___25335__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25286_25336__$1)){
var c__4319__auto___25337 = cljs.core.chunk_first.call(null,seq__25286_25336__$1);
var G__25338 = cljs.core.chunk_rest.call(null,seq__25286_25336__$1);
var G__25339 = c__4319__auto___25337;
var G__25340 = cljs.core.count.call(null,c__4319__auto___25337);
var G__25341 = (0);
seq__25286_25326 = G__25338;
chunk__25287_25327 = G__25339;
count__25288_25328 = G__25340;
i__25289_25329 = G__25341;
continue;
} else {
var y_25342 = cljs.core.first.call(null,seq__25286_25336__$1);
chemotaxis_cljs.core.render_place.call(null,ctx,chemotaxis_cljs.core.place.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_25342], null)),x,y_25342);


var G__25343 = cljs.core.next.call(null,seq__25286_25336__$1);
var G__25344 = null;
var G__25345 = (0);
var G__25346 = (0);
seq__25286_25326 = G__25343;
chunk__25287_25327 = G__25344;
count__25288_25328 = G__25345;
i__25289_25329 = G__25346;
continue;
}
} else {
}
}
break;
}

var G__25347 = cljs.core.next.call(null,seq__25285__$1);
var G__25348 = null;
var G__25349 = (0);
var G__25350 = (0);
seq__25285 = G__25347;
chunk__25290 = G__25348;
count__25291 = G__25349;
i__25292 = G__25350;
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
chemotaxis_cljs.core.is_running = cljs.core.atom.call(null,false);
}
chemotaxis_cljs.core.render_go_block = (function chemotaxis_cljs$core$render_go_block(){
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__){
return (function (state_25365){
var state_val_25366 = (state_25365[(1)]);
if((state_val_25366 === (1))){
var state_25365__$1 = state_25365;
var statearr_25367_25379 = state_25365__$1;
(statearr_25367_25379[(2)] = null);

(statearr_25367_25379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (2))){
var inst_25352 = cljs.core.deref.call(null,chemotaxis_cljs.core.is_running);
var state_25365__$1 = state_25365;
if(cljs.core.truth_(inst_25352)){
var statearr_25368_25380 = state_25365__$1;
(statearr_25368_25380[(1)] = (4));

} else {
var statearr_25369_25381 = state_25365__$1;
(statearr_25369_25381[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (3))){
var inst_25363 = (state_25365[(2)]);
var state_25365__$1 = state_25365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25365__$1,inst_25363);
} else {
if((state_val_25366 === (4))){
var inst_25354 = chemotaxis_cljs.core.render.call(null,chemotaxis_cljs.core.context);
var state_25365__$1 = state_25365;
var statearr_25370_25382 = state_25365__$1;
(statearr_25370_25382[(2)] = inst_25354);

(statearr_25370_25382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (5))){
var state_25365__$1 = state_25365;
var statearr_25371_25383 = state_25365__$1;
(statearr_25371_25383[(2)] = null);

(statearr_25371_25383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (6))){
var inst_25357 = (state_25365[(2)]);
var inst_25358 = cljs.core.async.timeout.call(null,chemotaxis_cljs.core.chan_timeout_duration);
var state_25365__$1 = (function (){var statearr_25372 = state_25365;
(statearr_25372[(7)] = inst_25357);

return statearr_25372;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25365__$1,(7),inst_25358);
} else {
if((state_val_25366 === (7))){
var inst_25360 = (state_25365[(2)]);
var state_25365__$1 = (function (){var statearr_25373 = state_25365;
(statearr_25373[(8)] = inst_25360);

return statearr_25373;
})();
var statearr_25374_25384 = state_25365__$1;
(statearr_25374_25384[(2)] = null);

(statearr_25374_25384[(1)] = (2));


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
});})(c__23152__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__){
return (function() {
var chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto__ = null;
var chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto____0 = (function (){
var statearr_25375 = [null,null,null,null,null,null,null,null,null];
(statearr_25375[(0)] = chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto__);

(statearr_25375[(1)] = (1));

return statearr_25375;
});
var chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto____1 = (function (state_25365){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25376){if((e25376 instanceof Object)){
var ex__23066__auto__ = e25376;
var statearr_25377_25385 = state_25365;
(statearr_25377_25385[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25386 = state_25365;
state_25365 = G__25386;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto__ = function(state_25365){
switch(arguments.length){
case 0:
return chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto____0.call(this);
case 1:
return chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto____1.call(this,state_25365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto____0;
chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto____1;
return chemotaxis_cljs$core$render_go_block_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__))
})();
var state__23154__auto__ = (function (){var statearr_25378 = f__23153__auto__.call(null);
(statearr_25378[(6)] = c__23152__auto__);

return statearr_25378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__))
);

return c__23152__auto__;
});
chemotaxis_cljs.core.behave_bacteria_go_block = (function chemotaxis_cljs$core$behave_bacteria_go_block(bacteria_seq){
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__){
return (function (state_25440){
var state_val_25441 = (state_25440[(1)]);
if((state_val_25441 === (7))){
var inst_25397 = (state_25440[(7)]);
var inst_25398 = (state_25440[(8)]);
var inst_25400 = (inst_25398 < inst_25397);
var inst_25401 = inst_25400;
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25401)){
var statearr_25442_25476 = state_25440__$1;
(statearr_25442_25476[(1)] = (9));

} else {
var statearr_25443_25477 = state_25440__$1;
(statearr_25443_25477[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (1))){
var state_25440__$1 = state_25440;
var statearr_25444_25478 = state_25440__$1;
(statearr_25444_25478[(2)] = null);

(statearr_25444_25478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (4))){
var inst_25394 = cljs.core.seq.call(null,bacteria_seq);
var inst_25395 = inst_25394;
var inst_25396 = null;
var inst_25397 = (0);
var inst_25398 = (0);
var state_25440__$1 = (function (){var statearr_25445 = state_25440;
(statearr_25445[(9)] = inst_25396);

(statearr_25445[(7)] = inst_25397);

(statearr_25445[(8)] = inst_25398);

(statearr_25445[(10)] = inst_25395);

return statearr_25445;
})();
var statearr_25446_25479 = state_25440__$1;
(statearr_25446_25479[(2)] = null);

(statearr_25446_25479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (15))){
var inst_25408 = (state_25440[(11)]);
var inst_25412 = cljs.core.chunk_first.call(null,inst_25408);
var inst_25413 = cljs.core.chunk_rest.call(null,inst_25408);
var inst_25414 = cljs.core.count.call(null,inst_25412);
var inst_25395 = inst_25413;
var inst_25396 = inst_25412;
var inst_25397 = inst_25414;
var inst_25398 = (0);
var state_25440__$1 = (function (){var statearr_25447 = state_25440;
(statearr_25447[(9)] = inst_25396);

(statearr_25447[(7)] = inst_25397);

(statearr_25447[(8)] = inst_25398);

(statearr_25447[(10)] = inst_25395);

return statearr_25447;
})();
var statearr_25448_25480 = state_25440__$1;
(statearr_25448_25480[(2)] = null);

(statearr_25448_25480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (13))){
var state_25440__$1 = state_25440;
var statearr_25449_25481 = state_25440__$1;
(statearr_25449_25481[(2)] = null);

(statearr_25449_25481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (6))){
var inst_25432 = (state_25440[(2)]);
var inst_25433 = cljs.core.async.timeout.call(null,chemotaxis_cljs.core.chan_timeout_duration);
var state_25440__$1 = (function (){var statearr_25450 = state_25440;
(statearr_25450[(12)] = inst_25432);

return statearr_25450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25440__$1,(18),inst_25433);
} else {
if((state_val_25441 === (17))){
var inst_25422 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25451_25482 = state_25440__$1;
(statearr_25451_25482[(2)] = inst_25422);

(statearr_25451_25482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (3))){
var inst_25438 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25440__$1,inst_25438);
} else {
if((state_val_25441 === (12))){
var inst_25408 = (state_25440[(11)]);
var inst_25410 = cljs.core.chunked_seq_QMARK_.call(null,inst_25408);
var state_25440__$1 = state_25440;
if(inst_25410){
var statearr_25452_25483 = state_25440__$1;
(statearr_25452_25483[(1)] = (15));

} else {
var statearr_25453_25484 = state_25440__$1;
(statearr_25453_25484[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (2))){
var inst_25388 = cljs.core.deref.call(null,chemotaxis_cljs.core.is_running);
var state_25440__$1 = state_25440;
if(cljs.core.truth_(inst_25388)){
var statearr_25457_25485 = state_25440__$1;
(statearr_25457_25485[(1)] = (4));

} else {
var statearr_25458_25486 = state_25440__$1;
(statearr_25458_25486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (11))){
var inst_25427 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25459_25487 = state_25440__$1;
(statearr_25459_25487[(2)] = inst_25427);

(statearr_25459_25487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (9))){
var inst_25396 = (state_25440[(9)]);
var inst_25397 = (state_25440[(7)]);
var inst_25398 = (state_25440[(8)]);
var inst_25395 = (state_25440[(10)]);
var inst_25403 = cljs.core._nth.call(null,inst_25396,inst_25398);
var inst_25404 = chemotaxis_cljs.core.behave.call(null,inst_25403);
var inst_25405 = (inst_25398 + (1));
var tmp25454 = inst_25396;
var tmp25455 = inst_25397;
var tmp25456 = inst_25395;
var inst_25395__$1 = tmp25456;
var inst_25396__$1 = tmp25454;
var inst_25397__$1 = tmp25455;
var inst_25398__$1 = inst_25405;
var state_25440__$1 = (function (){var statearr_25460 = state_25440;
(statearr_25460[(9)] = inst_25396__$1);

(statearr_25460[(13)] = inst_25404);

(statearr_25460[(7)] = inst_25397__$1);

(statearr_25460[(8)] = inst_25398__$1);

(statearr_25460[(10)] = inst_25395__$1);

return statearr_25460;
})();
var statearr_25461_25488 = state_25440__$1;
(statearr_25461_25488[(2)] = null);

(statearr_25461_25488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (5))){
var state_25440__$1 = state_25440;
var statearr_25462_25489 = state_25440__$1;
(statearr_25462_25489[(2)] = null);

(statearr_25462_25489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (14))){
var inst_25425 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25463_25490 = state_25440__$1;
(statearr_25463_25490[(2)] = inst_25425);

(statearr_25463_25490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (16))){
var inst_25408 = (state_25440[(11)]);
var inst_25417 = cljs.core.first.call(null,inst_25408);
var inst_25418 = chemotaxis_cljs.core.behave.call(null,inst_25417);
var inst_25419 = cljs.core.next.call(null,inst_25408);
var inst_25395 = inst_25419;
var inst_25396 = null;
var inst_25397 = (0);
var inst_25398 = (0);
var state_25440__$1 = (function (){var statearr_25464 = state_25440;
(statearr_25464[(9)] = inst_25396);

(statearr_25464[(14)] = inst_25418);

(statearr_25464[(7)] = inst_25397);

(statearr_25464[(8)] = inst_25398);

(statearr_25464[(10)] = inst_25395);

return statearr_25464;
})();
var statearr_25465_25491 = state_25440__$1;
(statearr_25465_25491[(2)] = null);

(statearr_25465_25491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (10))){
var inst_25408 = (state_25440[(11)]);
var inst_25395 = (state_25440[(10)]);
var inst_25408__$1 = cljs.core.seq.call(null,inst_25395);
var state_25440__$1 = (function (){var statearr_25466 = state_25440;
(statearr_25466[(11)] = inst_25408__$1);

return statearr_25466;
})();
if(inst_25408__$1){
var statearr_25467_25492 = state_25440__$1;
(statearr_25467_25492[(1)] = (12));

} else {
var statearr_25468_25493 = state_25440__$1;
(statearr_25468_25493[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (18))){
var inst_25435 = (state_25440[(2)]);
var state_25440__$1 = (function (){var statearr_25469 = state_25440;
(statearr_25469[(15)] = inst_25435);

return statearr_25469;
})();
var statearr_25470_25494 = state_25440__$1;
(statearr_25470_25494[(2)] = null);

(statearr_25470_25494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25441 === (8))){
var inst_25429 = (state_25440[(2)]);
var state_25440__$1 = state_25440;
var statearr_25471_25495 = state_25440__$1;
(statearr_25471_25495[(2)] = inst_25429);

(statearr_25471_25495[(1)] = (6));


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
});})(c__23152__auto__))
;
return ((function (switch__23062__auto__,c__23152__auto__){
return (function() {
var chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto__ = null;
var chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto____0 = (function (){
var statearr_25472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25472[(0)] = chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto__);

(statearr_25472[(1)] = (1));

return statearr_25472;
});
var chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto____1 = (function (state_25440){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25473){if((e25473 instanceof Object)){
var ex__23066__auto__ = e25473;
var statearr_25474_25496 = state_25440;
(statearr_25474_25496[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25497 = state_25440;
state_25440 = G__25497;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto__ = function(state_25440){
switch(arguments.length){
case 0:
return chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto____0.call(this);
case 1:
return chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto____1.call(this,state_25440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto____0;
chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto____1;
return chemotaxis_cljs$core$behave_bacteria_go_block_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__))
})();
var state__23154__auto__ = (function (){var statearr_25475 = f__23153__auto__.call(null);
(statearr_25475[(6)] = c__23152__auto__);

return statearr_25475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__))
);

return c__23152__auto__;
});
chemotaxis_cljs.core.listen = (function chemotaxis_cljs$core$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
chemotaxis_cljs.core.play_pause = (function chemotaxis_cljs$core$play_pause(){
return cljs.core.swap_BANG_.call(null,chemotaxis_cljs.core.is_running,cljs.core.not);
});
chemotaxis_cljs.core.mouse_interaction_go_block = (function chemotaxis_cljs$core$mouse_interaction_go_block(){
var play_button_clicks = chemotaxis_cljs.core.listen.call(null,chemotaxis_cljs.core.play_button,"click");
var drop_button_clicks = chemotaxis_cljs.core.listen.call(null,chemotaxis_cljs.core.food_button,"click");
var remove_food_button_clicks = chemotaxis_cljs.core.listen.call(null,chemotaxis_cljs.core.remove_food_button,"click");
var c__23152__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23152__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks){
return (function (){
var f__23153__auto__ = (function (){var switch__23062__auto__ = ((function (c__23152__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks){
return (function (state_25533){
var state_val_25534 = (state_25533[(1)]);
if((state_val_25534 === (7))){
var inst_25528 = (state_25533[(2)]);
var state_25533__$1 = (function (){var statearr_25535 = state_25533;
(statearr_25535[(7)] = inst_25528);

return statearr_25535;
})();
var statearr_25536_25557 = state_25533__$1;
(statearr_25536_25557[(2)] = null);

(statearr_25536_25557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (1))){
var state_25533__$1 = state_25533;
var statearr_25537_25558 = state_25533__$1;
(statearr_25537_25558[(2)] = null);

(statearr_25537_25558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (4))){
var inst_25508 = (state_25533[(8)]);
var inst_25506 = (state_25533[(2)]);
var inst_25507 = cljs.core.nth.call(null,inst_25506,(0),null);
var inst_25508__$1 = cljs.core.nth.call(null,inst_25506,(1),null);
var inst_25509 = cljs.core._EQ_.call(null,inst_25508__$1,play_button_clicks);
var state_25533__$1 = (function (){var statearr_25538 = state_25533;
(statearr_25538[(9)] = inst_25507);

(statearr_25538[(8)] = inst_25508__$1);

return statearr_25538;
})();
if(inst_25509){
var statearr_25539_25559 = state_25533__$1;
(statearr_25539_25559[(1)] = (5));

} else {
var statearr_25540_25560 = state_25533__$1;
(statearr_25540_25560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (13))){
var inst_25524 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25541_25561 = state_25533__$1;
(statearr_25541_25561[(2)] = inst_25524);

(statearr_25541_25561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (6))){
var inst_25508 = (state_25533[(8)]);
var inst_25513 = cljs.core._EQ_.call(null,inst_25508,drop_button_clicks);
var state_25533__$1 = state_25533;
if(inst_25513){
var statearr_25542_25562 = state_25533__$1;
(statearr_25542_25562[(1)] = (8));

} else {
var statearr_25543_25563 = state_25533__$1;
(statearr_25543_25563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (3))){
var inst_25531 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25533__$1,inst_25531);
} else {
if((state_val_25534 === (12))){
var state_25533__$1 = state_25533;
var statearr_25544_25564 = state_25533__$1;
(statearr_25544_25564[(2)] = null);

(statearr_25544_25564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (2))){
var inst_25502 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25503 = [play_button_clicks,drop_button_clicks,remove_food_button_clicks];
var inst_25504 = (new cljs.core.PersistentVector(null,3,(5),inst_25502,inst_25503,null));
var state_25533__$1 = state_25533;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25533__$1,(4),inst_25504);
} else {
if((state_val_25534 === (11))){
var inst_25520 = chemotaxis_cljs.core.remove_all_food.call(null);
var inst_25521 = chemotaxis_cljs.core.render.call(null,chemotaxis_cljs.core.context);
var state_25533__$1 = (function (){var statearr_25545 = state_25533;
(statearr_25545[(10)] = inst_25520);

return statearr_25545;
})();
var statearr_25546_25565 = state_25533__$1;
(statearr_25546_25565[(2)] = inst_25521);

(statearr_25546_25565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (9))){
var inst_25508 = (state_25533[(8)]);
var inst_25518 = cljs.core._EQ_.call(null,inst_25508,remove_food_button_clicks);
var state_25533__$1 = state_25533;
if(inst_25518){
var statearr_25547_25566 = state_25533__$1;
(statearr_25547_25566[(1)] = (11));

} else {
var statearr_25548_25567 = state_25533__$1;
(statearr_25548_25567[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (5))){
var inst_25511 = chemotaxis_cljs.core.play_pause.call(null);
var state_25533__$1 = state_25533;
var statearr_25549_25568 = state_25533__$1;
(statearr_25549_25568[(2)] = inst_25511);

(statearr_25549_25568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (10))){
var inst_25526 = (state_25533[(2)]);
var state_25533__$1 = state_25533;
var statearr_25550_25569 = state_25533__$1;
(statearr_25550_25569[(2)] = inst_25526);

(statearr_25550_25569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25534 === (8))){
var inst_25515 = chemotaxis_cljs.core.drop_random_food.call(null);
var inst_25516 = chemotaxis_cljs.core.render.call(null,chemotaxis_cljs.core.context);
var state_25533__$1 = (function (){var statearr_25551 = state_25533;
(statearr_25551[(11)] = inst_25515);

return statearr_25551;
})();
var statearr_25552_25570 = state_25533__$1;
(statearr_25552_25570[(2)] = inst_25516);

(statearr_25552_25570[(1)] = (10));


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
});})(c__23152__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks))
;
return ((function (switch__23062__auto__,c__23152__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks){
return (function() {
var chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto__ = null;
var chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto____0 = (function (){
var statearr_25553 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25553[(0)] = chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto__);

(statearr_25553[(1)] = (1));

return statearr_25553;
});
var chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto____1 = (function (state_25533){
while(true){
var ret_value__23064__auto__ = (function (){try{while(true){
var result__23065__auto__ = switch__23062__auto__.call(null,state_25533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23065__auto__;
}
break;
}
}catch (e25554){if((e25554 instanceof Object)){
var ex__23066__auto__ = e25554;
var statearr_25555_25571 = state_25533;
(statearr_25555_25571[(5)] = ex__23066__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25572 = state_25533;
state_25533 = G__25572;
continue;
} else {
return ret_value__23064__auto__;
}
break;
}
});
chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto__ = function(state_25533){
switch(arguments.length){
case 0:
return chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto____0.call(this);
case 1:
return chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto____1.call(this,state_25533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$0 = chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto____0;
chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto__.cljs$core$IFn$_invoke$arity$1 = chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto____1;
return chemotaxis_cljs$core$mouse_interaction_go_block_$_state_machine__23063__auto__;
})()
;})(switch__23062__auto__,c__23152__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks))
})();
var state__23154__auto__ = (function (){var statearr_25556 = f__23153__auto__.call(null);
(statearr_25556[(6)] = c__23152__auto__);

return statearr_25556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23154__auto__);
});})(c__23152__auto__,play_button_clicks,drop_button_clicks,remove_food_button_clicks))
);

return c__23152__auto__;
});
chemotaxis_cljs.core.start = (function chemotaxis_cljs$core$start(){
chemotaxis_cljs.core.drop_random_food.call(null,(10));

var bacteria = chemotaxis_cljs.core.drop_bacteria.call(null);
chemotaxis_cljs.core.render.call(null,chemotaxis_cljs.core.context);

chemotaxis_cljs.core.render_go_block.call(null);

chemotaxis_cljs.core.behave_bacteria_go_block.call(null,bacteria);

return chemotaxis_cljs.core.mouse_interaction_go_block.call(null);
});
if(typeof chemotaxis_cljs.core._ !== 'undefined'){
} else {
chemotaxis_cljs.core._ = chemotaxis_cljs.core.start.call(null);
}

//# sourceMappingURL=core.js.map?rel=1534858994955
