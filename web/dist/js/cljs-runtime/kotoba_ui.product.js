goog.provide('kotoba_ui.product');
kotoba_ui.product.classes = (function kotoba_ui$product$classes(base,extra){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),((cljs.core.seq(extra))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra)].join(''):null)].join('');
});
/**
 * Compact labelled value. opts: :label, :value, :detail, :status, :id, :class.
 */
kotoba_ui.product.metric = (function kotoba_ui$product$metric(p__23087){
var map__23088 = p__23087;
var map__23088__$1 = cljs.core.__destructure_map(map__23088);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23088__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23088__$1,new cljs.core.Keyword(null,"value","value",305978217));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23088__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23088__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23088__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23088__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__23091 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__metric",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23091,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__23091;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-label hig-footnote"], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-value hig-title2"], null),value], null),(cljs.core.truth_((function (){var or__5002__auto__ = detail;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return status;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-detail hig-footnote"], null),(cljs.core.truth_(status)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__status"], null),status], null):null),detail], null):null)], null);
});
/**
 * Purposeful empty state. opts: :title, :body, :actions, :id, :class.
 */
kotoba_ui.product.empty_state = (function kotoba_ui$product$empty_state(p__23103){
var map__23104 = p__23103;
var map__23104__$1 = cljs.core.__destructure_map(map__23104);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23104__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23104__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23104__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23104__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23104__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__23111 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__empty",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23111,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__23111;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hig-headline"], null),title], null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hig-footnote kotoba-product__muted"], null),body], null):null),((cljs.core.seq(actions))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__empty-actions"], null)], null),actions):null)], null);
});
/**
 * Accessible responsive table. Columns are {:key k :label s}; rows are maps.
 *   Cell values may be hiccup. opts: :caption, :columns, :rows, :empty, :id, :class.
 */
kotoba_ui.product.data_table = (function kotoba_ui$product$data_table(p__23124){
var map__23129 = p__23124;
var map__23129__$1 = cljs.core.__destructure_map(map__23129);
var caption = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23129__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23129__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23129__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var empty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23129__$1,new cljs.core.Keyword(null,"empty","empty",767870958));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23129__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23129__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.seq(rows)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__table-scroll"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var G__23130 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__table",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23130,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__23130;
}
})(),(cljs.core.truth_(caption)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caption","caption",-855383902),caption], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5480__auto__ = (function kotoba_ui$product$data_table_$_iter__23131(s__23132){
return (new cljs.core.LazySeq(null,(function (){
var s__23132__$1 = s__23132;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23132__$1);
if(temp__5825__auto__){
var s__23132__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23132__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23132__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23134 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23133 = (0);
while(true){
if((i__23133 < size__5479__auto__)){
var map__23136 = cljs.core._nth(c__5478__auto__,i__23133);
var map__23136__$1 = cljs.core.__destructure_map(map__23136);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23136__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23136__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__23134,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),label], null));

var G__23232 = (i__23133 + (1));
i__23133 = G__23232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23134),kotoba_ui$product$data_table_$_iter__23131(cljs.core.chunk_rest(s__23132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23134),null);
}
} else {
var map__23137 = cljs.core.first(s__23132__$2);
var map__23137__$1 = cljs.core.__destructure_map(map__23137);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23137__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23137__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),label], null),kotoba_ui$product$data_table_$_iter__23131(cljs.core.rest(s__23132__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(columns);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function kotoba_ui$product$data_table_$_iter__23138(s__23139){
return (new cljs.core.LazySeq(null,(function (){
var s__23139__$1 = s__23139;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23139__$1);
if(temp__5825__auto__){
var s__23139__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23139__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23139__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23141 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23140 = (0);
while(true){
if((i__23140 < size__5479__auto__)){
var vec__23142 = cljs.core._nth(c__5478__auto__,i__23140);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23142,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23142,(1),null);
cljs.core.chunk_append(b__23141,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),(function (){var iter__5480__auto__ = ((function (i__23140,vec__23142,idx,row,c__5478__auto__,size__5479__auto__,b__23141,s__23139__$2,temp__5825__auto__,map__23129,map__23129__$1,caption,columns,rows,empty,id,class$){
return (function kotoba_ui$product$data_table_$_iter__23138_$_iter__23145(s__23146){
return (new cljs.core.LazySeq(null,((function (i__23140,vec__23142,idx,row,c__5478__auto__,size__5479__auto__,b__23141,s__23139__$2,temp__5825__auto__,map__23129,map__23129__$1,caption,columns,rows,empty,id,class$){
return (function (){
var s__23146__$1 = s__23146;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__23146__$1);
if(temp__5825__auto____$1){
var s__23146__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23146__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__23146__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__23148 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__23147 = (0);
while(true){
if((i__23147 < size__5479__auto____$1)){
var map__23167 = cljs.core._nth(c__5478__auto____$1,i__23147);
var map__23167__$1 = cljs.core.__destructure_map(map__23167);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23167__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__23148,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null));

var G__23235 = (i__23147 + (1));
i__23147 = G__23235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23148),kotoba_ui$product$data_table_$_iter__23138_$_iter__23145(cljs.core.chunk_rest(s__23146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23148),null);
}
} else {
var map__23173 = cljs.core.first(s__23146__$2);
var map__23173__$1 = cljs.core.__destructure_map(map__23173);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),kotoba_ui$product$data_table_$_iter__23138_$_iter__23145(cljs.core.rest(s__23146__$2)));
}
} else {
return null;
}
break;
}
});})(i__23140,vec__23142,idx,row,c__5478__auto__,size__5479__auto__,b__23141,s__23139__$2,temp__5825__auto__,map__23129,map__23129__$1,caption,columns,rows,empty,id,class$))
,null,null));
});})(i__23140,vec__23142,idx,row,c__5478__auto__,size__5479__auto__,b__23141,s__23139__$2,temp__5825__auto__,map__23129,map__23129__$1,caption,columns,rows,empty,id,class$))
;
return iter__5480__auto__(columns);
})()], null));

var G__23250 = (i__23140 + (1));
i__23140 = G__23250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23141),kotoba_ui$product$data_table_$_iter__23138(cljs.core.chunk_rest(s__23139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23141),null);
}
} else {
var vec__23174 = cljs.core.first(s__23139__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23174,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23174,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),(function (){var iter__5480__auto__ = ((function (vec__23174,idx,row,s__23139__$2,temp__5825__auto__,map__23129,map__23129__$1,caption,columns,rows,empty,id,class$){
return (function kotoba_ui$product$data_table_$_iter__23138_$_iter__23177(s__23178){
return (new cljs.core.LazySeq(null,(function (){
var s__23178__$1 = s__23178;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__23178__$1);
if(temp__5825__auto____$1){
var s__23178__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23178__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23178__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23180 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23179 = (0);
while(true){
if((i__23179 < size__5479__auto__)){
var map__23181 = cljs.core._nth(c__5478__auto__,i__23179);
var map__23181__$1 = cljs.core.__destructure_map(map__23181);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__23180,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null));

var G__23254 = (i__23179 + (1));
i__23179 = G__23254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23180),kotoba_ui$product$data_table_$_iter__23138_$_iter__23177(cljs.core.chunk_rest(s__23178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23180),null);
}
} else {
var map__23182 = cljs.core.first(s__23178__$2);
var map__23182__$1 = cljs.core.__destructure_map(map__23182);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),kotoba_ui$product$data_table_$_iter__23138_$_iter__23177(cljs.core.rest(s__23178__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__23174,idx,row,s__23139__$2,temp__5825__auto__,map__23129,map__23129__$1,caption,columns,rows,empty,id,class$))
;
return iter__5480__auto__(columns);
})()], null),kotoba_ui$product$data_table_$_iter__23138(cljs.core.rest(s__23139__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,rows));
})()], null)], null)], null);
} else {
var or__5002__auto__ = empty;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return kotoba_ui.product.empty_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Nothing here yet"], null));
}
}
});
kotoba_ui.product.product_css = ["@layer kotoba.hig{",".kotoba-product__metric{min-width:0;padding:var(--hig-spacing-3);border:var(--hig-hairline) solid var(--hig-color-separator);border-radius:var(--hig-radius-large);background:var(--hig-color-secondary-system-background)}",".kotoba-product__metric-label,.kotoba-product__metric-detail,.kotoba-product__muted{color:var(--hig-color-secondary-label)}",".kotoba-product__metric-value{margin:var(--hig-spacing-1) 0;overflow-wrap:anywhere}",".kotoba-product__status{display:inline-block;margin-right:var(--hig-spacing-2);color:var(--hig-color-tint);font-weight:600}",".kotoba-product__empty{text-align:center;padding:var(--hig-spacing-6);border:var(--hig-hairline) dashed var(--hig-color-separator);border-radius:var(--hig-radius-large)}",".kotoba-product__empty-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:var(--hig-spacing-2);margin-top:var(--hig-spacing-3)}",".kotoba-product__table-scroll{overflow-x:auto}",".kotoba-product__table{width:100%;border-collapse:collapse}",".kotoba-product__table caption{text-align:left;margin-bottom:var(--hig-spacing-2);font-weight:600}",".kotoba-product__table th,.kotoba-product__table td{text-align:left;vertical-align:top;padding:var(--hig-spacing-2) var(--hig-spacing-3);border-bottom:var(--hig-hairline) solid var(--hig-color-separator)}",".kotoba-product__table th{color:var(--hig-color-secondary-label);font-weight:600}","}"].join('');

//# sourceMappingURL=kotoba_ui.product.js.map
