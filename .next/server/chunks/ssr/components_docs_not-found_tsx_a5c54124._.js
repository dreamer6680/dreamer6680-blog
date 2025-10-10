module.exports = {

"[project]/components/docs/not-found.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotFound)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
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
        })();
    }, [
        pathname,
        router
    ]);
    return null;
}
}}),

};

//# sourceMappingURL=components_docs_not-found_tsx_a5c54124._.js.map