(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/fumadocs-ui@15.6.3_@types+r_e36e5897124578f92b10c25ffeb4b097/node_modules/fumadocs-ui/dist/components/dialog/search-default.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DefaultSearchDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$3_$40$types_0b02785f78f717111e2dab6de957facf$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$search$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.6.3_@types_0b02785f78f717111e2dab6de957facf/node_modules/fumadocs-core/dist/search/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$3_$40$types_0b02785f78f717111e2dab6de957facf$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2f$use$2d$on$2d$change$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.6.3_@types_0b02785f78f717111e2dab6de957facf/node_modules/fumadocs-core/dist/utils/use-on-change.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$3_$40$types_0b02785f78f717111e2dab6de957facf$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.6.3_@types_0b02785f78f717111e2dab6de957facf/node_modules/fumadocs-core/dist/chunk-EMWGTXSW.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@15.6.3_@types+r_e36e5897124578f92b10c25ffeb4b097/node_modules/fumadocs-ui/dist/contexts/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@15.6.3_@types+r_e36e5897124578f92b10c25ffeb4b097/node_modules/fumadocs-ui/dist/components/dialog/search.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function DefaultSearchDialog({ defaultTag, tags = [], api, delayMs, type = 'fetch', allowClear = false, links = [], footer, ...props }) {
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const [tag, setTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTag);
    const { search, setSearch, query } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$3_$40$types_0b02785f78f717111e2dab6de957facf$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$search$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocsSearch"])(type === 'fetch' ? {
        type: 'fetch',
        api,
        locale,
        tag,
        delayMs
    } : {
        type: 'static',
        from: api,
        locale,
        tag,
        delayMs
    });
    const defaultItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DefaultSearchDialog.useMemo[defaultItems]": ()=>{
            if (links.length === 0) return null;
            return links.map({
                "DefaultSearchDialog.useMemo[defaultItems]": ([name, link])=>({
                        type: 'page',
                        id: name,
                        content: name,
                        url: link
                    })
            }["DefaultSearchDialog.useMemo[defaultItems]"]);
        }
    }["DefaultSearchDialog.useMemo[defaultItems]"], [
        links
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$3_$40$types_0b02785f78f717111e2dab6de957facf$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"])(defaultTag, {
        "DefaultSearchDialog.useOnChange": (v)=>{
            setTag(v);
        }
    }["DefaultSearchDialog.useOnChange"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialog"], {
        search: search,
        onSearchChange: setSearch,
        isLoading: query.isLoading,
        ...props,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogOverlay"], {}),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogContent"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogHeader"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogIcon"], {}),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogInput"], {}),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogClose"], {})
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogList"], {
                        items: query.data !== 'empty' ? query.data : defaultItems
                    })
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogFooter"], {
                children: [
                    tags.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TagsList"], {
                        tag: tag,
                        onTagChange: setTag,
                        allowClear: allowClear,
                        children: tags.map((tag)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TagsListItem"], {
                                value: tag.value,
                                children: tag.name
                            }, tag.value))
                    }),
                    footer
                ]
            })
        ]
    });
}
}}),
}]);

//# sourceMappingURL=1f1fe_fumadocs-ui_dist_components_dialog_search-default_6ea96945.js.map