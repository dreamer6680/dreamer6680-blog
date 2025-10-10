(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__d9209f22._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/i18n/en/common.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"Documentation\":\"Documentation\",\"nav\":{\"home\":\"Home\",\"docs\":\"Docs\",\"blog\":\"Blog\",\"about\":\"About\"},\"footer\":{\"links\":\"Links\",\"community\":\"Community\",\"resources\":\"Resources\"},\"introduction\":\"Introduction\",\"use-cases\":\"Use Cases\",\"api\":\"API\",\"protocol\":\"Protocol\",\"upgrading\":\"Upgrading\",\"faq\":\"FAQ\"}"));}}),
"[project]/i18n/zh-CN/common.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"Documentation\":\"文档\",\"nav\":{\"home\":\"首页\",\"docs\":\"文档\",\"blog\":\"博客\",\"about\":\"关于\"},\"footer\":{\"links\":\"链接\",\"community\":\"社区\",\"resources\":\"资源\"},\"introduction\":\"使用文档\",\"use-cases\":\"使用场景\",\"api\":\"API 手册\",\"protocol\":\"协议\",\"upgrading\":\"更新日志\",\"faq\":\"常见问题\"}"));}}),
"[project]/lib/i18n.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTranslations": (()=>getTranslations),
    "i18n": (()=>i18n),
    "t": (()=>t)
});
const i18n = {
    defaultLanguage: 'zh-CN',
    languages: [
        'zh-CN',
        'en'
    ],
    hideLocale: 'default-locale'
};
async function getTranslations(locale) {
    const translations = await __turbopack_context__.f({
        "@/i18n/en/common.json": {
            id: ()=>"[project]/i18n/en/common.json (json)",
            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/i18n/en/common.json (json)"))
        },
        "@/i18n/zh-CN/common.json": {
            id: ()=>"[project]/i18n/zh-CN/common.json (json)",
            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/i18n/zh-CN/common.json (json)"))
        }
    }).import(`@/i18n/${locale}/common.json`);
    return translations.default;
}
function t(key, locale) {
    const keys = key.split(':');
    const namespace = keys[0];
    const path = keys[1].split('.');
    try {
        const translations = __turbopack_context__.f({
            "@/i18n/en/common.json": {
                id: ()=>"[project]/i18n/en/common.json (json)",
                module: ()=>__turbopack_context__.r("[project]/i18n/en/common.json (json)")
            },
            "@/i18n/zh-CN/common.json": {
                id: ()=>"[project]/i18n/zh-CN/common.json (json)",
                module: ()=>__turbopack_context__.r("[project]/i18n/zh-CN/common.json (json)")
            }
        })(`@/i18n/${locale || i18n.defaultLanguage}/common.json`);
        let result = translations;
        for (const p of path){
            result = result[p];
        }
        return result || key;
    } catch (error) {
        return key;
    }
}
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$3_$40$types_0b02785f78f717111e2dab6de957facf$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$i18n$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.6.3_@types_0b02785f78f717111e2dab6de957facf/node_modules/fumadocs-core/dist/i18n/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$3_$40$types_0b02785f78f717111e2dab6de957facf$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$i18n$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createI18nMiddleware"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i18n"]);
const config = {
    // matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png).*)']
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png|deploy/.*).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__d9209f22._.js.map