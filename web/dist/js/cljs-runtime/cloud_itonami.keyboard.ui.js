goog.provide('cloud_itonami.keyboard.ui');
cloud_itonami.keyboard.ui.css_text = "\n.kbd-app { min-height: 100vh; padding: 24px; background: var(--liquid-glass-bg, #11161d); color: var(--liquid-glass-fg, #eef4f8); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }\n.kbd-top { margin-bottom: 18px; }\n.kbd-top p, .kbd-top span, .kbd-muted, .kbd-app h2, .kbd-facts span { color: #96a6b8; }\n.kbd-top p { margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; }\n.kbd-app h1, .kbd-app h2, .kbd-app p { margin: 0; }\n.kbd-app h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; }\n.kbd-top span { display: block; margin-top: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.kbd-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }\n.kbd-facts > div, .kbd-panel { border: 1px solid #2b3948; border-radius: 8px; background: #171f28; }\n.kbd-facts > div { padding: 14px; }\n.kbd-facts span { display: block; margin-bottom: 8px; font-size: 12px; }\n.kbd-facts strong { overflow-wrap: anywhere; }\n.kbd-panel { margin-bottom: 12px; padding: 16px; }\n.kbd-app h2 { margin-bottom: 12px; font-size: 13px; text-transform: uppercase; }\n.kbd-app ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }\n.kbd-app li, .kbd-path p { border: 1px solid #263443; border-radius: 6px; background: #101720; padding: 9px 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.kbd-chips { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }\n@media (max-width: 760px) { .kbd-app { padding: 18px; } .kbd-facts { grid-template-columns: 1fr; } }\n";
cloud_itonami.keyboard.ui.panel = (function cloud_itonami$keyboard$ui$panel(title,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.kbd-panel","section.kbd-panel",-1576741282),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),body], null);
});
cloud_itonami.keyboard.ui.facts = (function cloud_itonami$keyboard$ui$facts(app){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.kbd-facts","section.kbd-facts",-1378862499),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Routes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"route-count","route-count",-1535759193).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"XRPC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(cljs.core.truth_(new cljs.core.Keyword(null,"xrpc?","xrpc?",938402752).cljs$core$IFn$_invoke$arity$1(app))?"enabled":"not configured")], null)], null)], null);
});
cloud_itonami.keyboard.ui.public_routes = (function cloud_itonami$keyboard$ui$public_routes(p__23489){
var map__23491 = p__23489;
var map__23491__$1 = cljs.core.__destructure_map(map__23491);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23491__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.keyboard.ui.panel,"Public Routes",((cljs.core.seq(routes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function cloud_itonami$keyboard$ui$public_routes_$_iter__23492(s__23493){
return (new cljs.core.LazySeq(null,(function (){
var s__23493__$1 = s__23493;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23493__$1);
if(temp__5825__auto__){
var s__23493__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23493__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23493__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23495 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23494 = (0);
while(true){
if((i__23494 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__23494);
cljs.core.chunk_append(b__23495,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)));

var G__23522 = (i__23494 + (1));
i__23494 = G__23522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23495),cloud_itonami$keyboard$ui$public_routes_$_iter__23492(cljs.core.chunk_rest(s__23493__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23495),null);
}
} else {
var r = cljs.core.first(s__23493__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)),cloud_itonami$keyboard$ui$public_routes_$_iter__23492(cljs.core.rest(s__23493__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(routes);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kbd-muted","p.kbd-muted",-1488048772),"No public route is declared next to this app surface."], null))], null);
});
cloud_itonami.keyboard.ui.runtime_bindings = (function cloud_itonami$keyboard$ui$runtime_bindings(p__23496){
var map__23498 = p__23496;
var map__23498__$1 = cljs.core.__destructure_map(map__23498);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23498__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.keyboard.ui.panel,"Runtime Bindings",((cljs.core.seq(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.kbd-chips","ul.kbd-chips",201927278),(function (){var iter__5480__auto__ = (function cloud_itonami$keyboard$ui$runtime_bindings_$_iter__23499(s__23500){
return (new cljs.core.LazySeq(null,(function (){
var s__23500__$1 = s__23500;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23500__$1);
if(temp__5825__auto__){
var s__23500__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23500__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23500__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23502 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23501 = (0);
while(true){
if((i__23501 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23501);
cljs.core.chunk_append(b__23502,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__23527 = (i__23501 + (1));
i__23501 = G__23527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23502),cloud_itonami$keyboard$ui$runtime_bindings_$_iter__23499(cljs.core.chunk_rest(s__23500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23502),null);
}
} else {
var k = cljs.core.first(s__23500__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),cloud_itonami$keyboard$ui$runtime_bindings_$_iter__23499(cljs.core.rest(s__23500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(vars);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.kbd-muted","p.kbd-muted",-1488048772),"No public vars are declared in the nearest wrangler config."], null))], null);
});
cloud_itonami.keyboard.ui.source = (function cloud_itonami$keyboard$ui$source(p__23507){
var map__23512 = p__23507;
var map__23512__$1 = cljs.core.__destructure_map(map__23512);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23512__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.kbd-panel.kbd-path","section.kbd-panel.kbd-path",1870223007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),relative_path], null)], null);
});
cloud_itonami.keyboard.ui.root = (function cloud_itonami$keyboard$ui$root(){
var map__23513 = cljs.core.deref(cloud_itonami.keyboard.state.state);
var map__23513__$1 = cljs.core.__destructure_map(map__23513);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23513__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cloud_itonami.keyboard.ui.css_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.kbd-app","main.kbd-app",341316695),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.kbd-top","section.kbd-top",-209374812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Cloudflare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(app))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.keyboard.ui.facts,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.keyboard.ui.public_routes,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.keyboard.ui.runtime_bindings,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.keyboard.ui.source,app], null)], null)], null)], null);
});

//# sourceMappingURL=cloud_itonami.keyboard.ui.js.map
