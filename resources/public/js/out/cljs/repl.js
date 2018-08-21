// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28729){
var map__28730 = p__28729;
var map__28730__$1 = ((((!((map__28730 == null)))?(((((map__28730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28730):map__28730);
var m = map__28730__$1;
var n = cljs.core.get.call(null,map__28730__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28730__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28732_28754 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28733_28755 = null;
var count__28734_28756 = (0);
var i__28735_28757 = (0);
while(true){
if((i__28735_28757 < count__28734_28756)){
var f_28758 = cljs.core._nth.call(null,chunk__28733_28755,i__28735_28757);
cljs.core.println.call(null,"  ",f_28758);


var G__28759 = seq__28732_28754;
var G__28760 = chunk__28733_28755;
var G__28761 = count__28734_28756;
var G__28762 = (i__28735_28757 + (1));
seq__28732_28754 = G__28759;
chunk__28733_28755 = G__28760;
count__28734_28756 = G__28761;
i__28735_28757 = G__28762;
continue;
} else {
var temp__5457__auto___28763 = cljs.core.seq.call(null,seq__28732_28754);
if(temp__5457__auto___28763){
var seq__28732_28764__$1 = temp__5457__auto___28763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28732_28764__$1)){
var c__4319__auto___28765 = cljs.core.chunk_first.call(null,seq__28732_28764__$1);
var G__28766 = cljs.core.chunk_rest.call(null,seq__28732_28764__$1);
var G__28767 = c__4319__auto___28765;
var G__28768 = cljs.core.count.call(null,c__4319__auto___28765);
var G__28769 = (0);
seq__28732_28754 = G__28766;
chunk__28733_28755 = G__28767;
count__28734_28756 = G__28768;
i__28735_28757 = G__28769;
continue;
} else {
var f_28770 = cljs.core.first.call(null,seq__28732_28764__$1);
cljs.core.println.call(null,"  ",f_28770);


var G__28771 = cljs.core.next.call(null,seq__28732_28764__$1);
var G__28772 = null;
var G__28773 = (0);
var G__28774 = (0);
seq__28732_28754 = G__28771;
chunk__28733_28755 = G__28772;
count__28734_28756 = G__28773;
i__28735_28757 = G__28774;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28775 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28775);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28775)))?cljs.core.second.call(null,arglists_28775):arglists_28775));
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
var seq__28736_28776 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28737_28777 = null;
var count__28738_28778 = (0);
var i__28739_28779 = (0);
while(true){
if((i__28739_28779 < count__28738_28778)){
var vec__28740_28780 = cljs.core._nth.call(null,chunk__28737_28777,i__28739_28779);
var name_28781 = cljs.core.nth.call(null,vec__28740_28780,(0),null);
var map__28743_28782 = cljs.core.nth.call(null,vec__28740_28780,(1),null);
var map__28743_28783__$1 = ((((!((map__28743_28782 == null)))?(((((map__28743_28782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28743_28782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28743_28782):map__28743_28782);
var doc_28784 = cljs.core.get.call(null,map__28743_28783__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28785 = cljs.core.get.call(null,map__28743_28783__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28781);

cljs.core.println.call(null," ",arglists_28785);

if(cljs.core.truth_(doc_28784)){
cljs.core.println.call(null," ",doc_28784);
} else {
}


var G__28786 = seq__28736_28776;
var G__28787 = chunk__28737_28777;
var G__28788 = count__28738_28778;
var G__28789 = (i__28739_28779 + (1));
seq__28736_28776 = G__28786;
chunk__28737_28777 = G__28787;
count__28738_28778 = G__28788;
i__28739_28779 = G__28789;
continue;
} else {
var temp__5457__auto___28790 = cljs.core.seq.call(null,seq__28736_28776);
if(temp__5457__auto___28790){
var seq__28736_28791__$1 = temp__5457__auto___28790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28736_28791__$1)){
var c__4319__auto___28792 = cljs.core.chunk_first.call(null,seq__28736_28791__$1);
var G__28793 = cljs.core.chunk_rest.call(null,seq__28736_28791__$1);
var G__28794 = c__4319__auto___28792;
var G__28795 = cljs.core.count.call(null,c__4319__auto___28792);
var G__28796 = (0);
seq__28736_28776 = G__28793;
chunk__28737_28777 = G__28794;
count__28738_28778 = G__28795;
i__28739_28779 = G__28796;
continue;
} else {
var vec__28745_28797 = cljs.core.first.call(null,seq__28736_28791__$1);
var name_28798 = cljs.core.nth.call(null,vec__28745_28797,(0),null);
var map__28748_28799 = cljs.core.nth.call(null,vec__28745_28797,(1),null);
var map__28748_28800__$1 = ((((!((map__28748_28799 == null)))?(((((map__28748_28799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28748_28799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28748_28799):map__28748_28799);
var doc_28801 = cljs.core.get.call(null,map__28748_28800__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28802 = cljs.core.get.call(null,map__28748_28800__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28798);

cljs.core.println.call(null," ",arglists_28802);

if(cljs.core.truth_(doc_28801)){
cljs.core.println.call(null," ",doc_28801);
} else {
}


var G__28803 = cljs.core.next.call(null,seq__28736_28791__$1);
var G__28804 = null;
var G__28805 = (0);
var G__28806 = (0);
seq__28736_28776 = G__28803;
chunk__28737_28777 = G__28804;
count__28738_28778 = G__28805;
i__28739_28779 = G__28806;
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

var seq__28750 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28751 = null;
var count__28752 = (0);
var i__28753 = (0);
while(true){
if((i__28753 < count__28752)){
var role = cljs.core._nth.call(null,chunk__28751,i__28753);
var temp__5457__auto___28807__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28807__$1)){
var spec_28808 = temp__5457__auto___28807__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28808));
} else {
}


var G__28809 = seq__28750;
var G__28810 = chunk__28751;
var G__28811 = count__28752;
var G__28812 = (i__28753 + (1));
seq__28750 = G__28809;
chunk__28751 = G__28810;
count__28752 = G__28811;
i__28753 = G__28812;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28750);
if(temp__5457__auto____$1){
var seq__28750__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28750__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28750__$1);
var G__28813 = cljs.core.chunk_rest.call(null,seq__28750__$1);
var G__28814 = c__4319__auto__;
var G__28815 = cljs.core.count.call(null,c__4319__auto__);
var G__28816 = (0);
seq__28750 = G__28813;
chunk__28751 = G__28814;
count__28752 = G__28815;
i__28753 = G__28816;
continue;
} else {
var role = cljs.core.first.call(null,seq__28750__$1);
var temp__5457__auto___28817__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28817__$2)){
var spec_28818 = temp__5457__auto___28817__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28818));
} else {
}


var G__28819 = cljs.core.next.call(null,seq__28750__$1);
var G__28820 = null;
var G__28821 = (0);
var G__28822 = (0);
seq__28750 = G__28819;
chunk__28751 = G__28820;
count__28752 = G__28821;
i__28753 = G__28822;
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

//# sourceMappingURL=repl.js.map?rel=1534859004854
