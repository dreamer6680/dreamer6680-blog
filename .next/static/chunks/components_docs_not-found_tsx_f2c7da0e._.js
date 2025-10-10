(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/docs/not-found.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotFound)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const exactMap = {
    '/docs': '/docs/introduction',
    '/docs/intro': '/docs/introduction',
    '/docs/guide/dashboard/workflow/coreferenceresolution': '/docs/introduction/guide/dashboard/workflow/coreferenceResolution',
    '/docs/guide/admin/sso_dingtalk': '/docs/introduction/guide/admin/sso#/docs/introduction/guide/admin/sso#钉钉',
    '/docs/guide/knowledge_base/rag': '/docs/introduction/guide/knowledge_base/RAG',
    '/docs/commercial/intro/': '/docs/introduction/commercial',
    '/docs/upgrading/intro/': '/docs/upgrading',
    '/docs/introduction/shopping_cart/intro/': '/docs/introduction/commercial'
};
const prefixMap = {
    '/docs/development': '/docs/introduction/development',
    '/docs/FAQ': '/docs/faq',
    '/docs/guide': '/docs/introduction/guide',
    '/docs/shopping_cart': '/docs/introduction/shopping_cart',
    '/docs/agreement': '/docs/protocol'
};
const fallbackRedirect = '/docs/introduction';
function NotFound() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotFound.useEffect": ()=>{
            ({
                "NotFound.useEffect": async ()=>{
                    if (exactMap[pathname]) {
                        window.location.replace(exactMap[pathname]);
                        return;
                    }
                    for (const [oldPrefix, newPrefix] of Object.entries(prefixMap)){
                        if (pathname.startsWith(oldPrefix)) {
                            const rest = pathname.slice(oldPrefix.length);
                            window.location.replace(newPrefix + rest);
                            return;
                        }
                    }
                    try {
                        const basePath = pathname.replace(/\/$/, '');
                        const res = await fetch(`/api/meta?path=${basePath}`);
                        console.log('res', res);
                        if (!res.ok) throw new Error('meta API not found');
                        const validPage = await res.json();
                        if (validPage) {
                            console.log('validPage', validPage);
                            window.location.replace(validPage);
                            return;
                        }
                    } catch (e) {
                        console.warn('meta.json fallback failed:', e);
                    }
                    window.location.replace(fallbackRedirect);
                }
            })["NotFound.useEffect"]();
        }
    }["NotFound.useEffect"], [
        pathname,
        router
    ]);
    return null;
}
_s(NotFound, "qIbXzL/glMgPmW/TFWAi/FqCkIk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NotFound;
var _c;
__turbopack_context__.k.register(_c, "NotFound");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_docs_not-found_tsx_f2c7da0e._.js.map