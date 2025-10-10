(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/CustomSearchDialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CustomSearchDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/CustomSearchDialog.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$3_$40$types_0b02785f78f717111e2dab6de957facf$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$search$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.6.3_@types_0b02785f78f717111e2dab6de957facf/node_modules/fumadocs-core/dist/search/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@15.6.3_@types+r_e36e5897124578f92b10c25ffeb4b097/node_modules/fumadocs-ui/dist/components/dialog/search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@15.6.3_@types+r_e36e5897124578f92b10c25ffeb4b097/node_modules/fumadocs-ui/dist/contexts/i18n.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CustomSearchDialog(props) {
    _s();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const { search, setSearch, query } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$3_$40$types_0b02785f78f717111e2dab6de957facf$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$search$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocsSearch"])({
        type: 'fetch',
        api: '/api/search',
        locale
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialog"], {
        search: search,
        onSearchChange: setSearch,
        isLoading: query.isLoading,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogOverlay"], {}, void 0, false, {
                fileName: "[project]/components/CustomSearchDialog.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogIcon"], {}, void 0, false, {
                                fileName: "[project]/components/CustomSearchDialog.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogInput"], {}, void 0, false, {
                                fileName: "[project]/components/CustomSearchDialog.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogClose"], {}, void 0, false, {
                                fileName: "[project]/components/CustomSearchDialog.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CustomSearchDialog.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$dialog$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchDialogList"], {
                        items: query.data !== 'empty' ? query.data : null
                    }, void 0, false, {
                        fileName: "[project]/components/CustomSearchDialog.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CustomSearchDialog.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CustomSearchDialog.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(CustomSearchDialog, "kLw+Z8pnOym1ZqcPdXkKlIkAbdM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$3_$40$types$2b$r_e36e5897124578f92b10c25ffeb4b097$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$3_$40$types_0b02785f78f717111e2dab6de957facf$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$search$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDocsSearch"]
    ];
});
_c = CustomSearchDialog;
var _c;
__turbopack_context__.k.register(_c, "CustomSearchDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_CustomSearchDialog_tsx_7ca4c8ed._.js.map