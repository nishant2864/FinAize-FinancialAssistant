"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_nishantbhardwaj_Desktop_FinAize_FinancialAssistant_src_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/chat/route.ts */ \"(rsc)/./src/app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"/Users/nishantbhardwaj/Desktop/FinAize-FinancialAssistant/src/app/api/chat/route.ts\",\n    nextConfigOutput,\n    userland: _Users_nishantbhardwaj_Desktop_FinAize_FinancialAssistant_src_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/chat/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm5pc2hhbnRiaGFyZHdhaiUyRkRlc2t0b3AlMkZGaW5BaXplLUZpbmFuY2lhbEFzc2lzdGFudCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZuaXNoYW50YmhhcmR3YWolMkZEZXNrdG9wJTJGRmluQWl6ZS1GaW5hbmNpYWxBc3Npc3RhbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21DO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWl6ZS8/ZjFlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbmlzaGFudGJoYXJkd2FqL0Rlc2t0b3AvRmluQWl6ZS1GaW5hbmNpYWxBc3Npc3RhbnQvc3JjL2FwcC9hcGkvY2hhdC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2hhdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NoYXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NoYXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbmlzaGFudGJoYXJkd2FqL0Rlc2t0b3AvRmluQWl6ZS1GaW5hbmNpYWxBc3Npc3RhbnQvc3JjL2FwcC9hcGkvY2hhdC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY2hhdC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/chat/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/chat/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db/prisma */ \"(rsc)/./src/lib/db/prisma.ts\");\n/* harmony import */ var _lib_auth_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth/jwt */ \"(rsc)/./src/lib/auth/jwt.ts\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\n\n\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY || \"mock-key\",\n    baseURL: \"https://openrouter.ai/api/v1\",\n    defaultHeaders: {\n        \"HTTP-Referer\": process.env.NEXTAUTH_URL || \"http://localhost:3000\",\n        \"X-Title\": \"FinAIze\"\n    }\n});\nasync function POST(req) {\n    try {\n        const token = req.cookies.get(\"token\")?.value;\n        const user = await (0,_lib_auth_jwt__WEBPACK_IMPORTED_MODULE_2__.verifyJWT)(token || \"\");\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { message } = await req.json();\n        const userId = user.id;\n        if (!message) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Message required\"\n            }, {\n                status: 400\n            });\n        }\n        // 1. Fetch user context (expenses, budget)\n        // For a real production app, we would summarize this or use RAG.\n        // Here we fetch the last 20 expenses to give context.\n        const recentExpenses = await _lib_db_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].expense.findMany({\n            where: {\n                userId\n            },\n            orderBy: {\n                date: \"desc\"\n            },\n            take: 20\n        });\n        // 2. Construct System Prompt\n        const systemPrompt = `You are FinAIze, a smart, premium financial assistant.\n    User Context:\n    - Recent Expenses: ${JSON.stringify(recentExpenses.map((e)=>({\n                cat: e.category,\n                amt: e.amount,\n                date: e.date.toISOString().split(\"T\")[0]\n            })))}\n    \n    Answer the user's question based on this data. Be concise, helpful, and friendly.\n    If the user asks to save money, suggest specific tips.\n    `;\n        // 3. Call OpenAI\n        let aiResponseText = \"\";\n        if (process.env.OPENAI_API_KEY) {\n            console.log(\"Using API Key:\", process.env.OPENAI_API_KEY ? \"Present\" : \"Missing\");\n            const completion = await openai.chat.completions.create({\n                model: \"openai/gpt-4o-mini\",\n                messages: [\n                    {\n                        role: \"system\",\n                        content: systemPrompt\n                    },\n                    {\n                        role: \"user\",\n                        content: message\n                    }\n                ]\n            });\n            aiResponseText = completion.choices[0].message.content || \"I couldn't process that.\";\n        } else {\n            // Fallback for demo without key\n            aiResponseText = \"I see your request, but I need an OpenAI API Key to analyze your data deeply. (Mock Response)\";\n        }\n        // 4. Save Chat History\n        await _lib_db_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chatHistory.createMany({\n            data: [\n                {\n                    userId,\n                    role: \"user\",\n                    message\n                },\n                {\n                    userId,\n                    role: \"assistant\",\n                    message: aiResponseText\n                }\n            ]\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            response: aiResponseText\n        });\n    } catch (error) {\n        console.error(\"Chat error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWl6ZS8uL3NyYy9hcHAvYXBpL2NoYXQvcm91dGUudHM/NDZiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UsIE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvbGliL2RiL3ByaXNtYSdcbmltcG9ydCB7IHZlcmlmeUpXVCB9IGZyb20gJ0AvbGliL2F1dGgvand0J1xuaW1wb3J0IE9wZW5BSSBmcm9tICdvcGVuYWknXG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVkgfHwgJ21vY2sta2V5JyxcbiAgICBiYXNlVVJMOiBcImh0dHBzOi8vb3BlbnJvdXRlci5haS9hcGkvdjFcIixcbiAgICBkZWZhdWx0SGVhZGVyczoge1xuICAgICAgICBcIkhUVFAtUmVmZXJlclwiOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcbiAgICAgICAgXCJYLVRpdGxlXCI6IFwiRmluQUl6ZVwiLFxuICAgIH1cbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLmdldCgndG9rZW4nKT8udmFsdWVcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHZlcmlmeUpXVCh0b2tlbiB8fCAnJylcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGF3YWl0IHJlcS5qc29uKClcbiAgICAgICAgY29uc3QgdXNlcklkID0gKHVzZXIgYXMgYW55KS5pZFxuXG4gICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdNZXNzYWdlIHJlcXVpcmVkJyB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyAxLiBGZXRjaCB1c2VyIGNvbnRleHQgKGV4cGVuc2VzLCBidWRnZXQpXG4gICAgICAgIC8vIEZvciBhIHJlYWwgcHJvZHVjdGlvbiBhcHAsIHdlIHdvdWxkIHN1bW1hcml6ZSB0aGlzIG9yIHVzZSBSQUcuXG4gICAgICAgIC8vIEhlcmUgd2UgZmV0Y2ggdGhlIGxhc3QgMjAgZXhwZW5zZXMgdG8gZ2l2ZSBjb250ZXh0LlxuICAgICAgICBjb25zdCByZWNlbnRFeHBlbnNlcyA9IGF3YWl0IHByaXNtYS5leHBlbnNlLmZpbmRNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7IHVzZXJJZCB9LFxuICAgICAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfSxcbiAgICAgICAgICAgIHRha2U6IDIwXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gMi4gQ29uc3RydWN0IFN5c3RlbSBQcm9tcHRcbiAgICAgICAgY29uc3Qgc3lzdGVtUHJvbXB0ID0gYFlvdSBhcmUgRmluQUl6ZSwgYSBzbWFydCwgcHJlbWl1bSBmaW5hbmNpYWwgYXNzaXN0YW50LlxuICAgIFVzZXIgQ29udGV4dDpcbiAgICAtIFJlY2VudCBFeHBlbnNlczogJHtKU09OLnN0cmluZ2lmeShyZWNlbnRFeHBlbnNlcy5tYXAoKGU6IHsgY2F0ZWdvcnk6IHN0cmluZzsgYW1vdW50OiBudW1iZXI7IGRhdGU6IERhdGUgfSkgPT4gKHsgY2F0OiBlLmNhdGVnb3J5LCBhbXQ6IGUuYW1vdW50LCBkYXRlOiBlLmRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdIH0pKSl9XG4gICAgXG4gICAgQW5zd2VyIHRoZSB1c2VyJ3MgcXVlc3Rpb24gYmFzZWQgb24gdGhpcyBkYXRhLiBCZSBjb25jaXNlLCBoZWxwZnVsLCBhbmQgZnJpZW5kbHkuXG4gICAgSWYgdGhlIHVzZXIgYXNrcyB0byBzYXZlIG1vbmV5LCBzdWdnZXN0IHNwZWNpZmljIHRpcHMuXG4gICAgYFxuXG4gICAgICAgIC8vIDMuIENhbGwgT3BlbkFJXG4gICAgICAgIGxldCBhaVJlc3BvbnNlVGV4dCA9IFwiXCJcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgQVBJIEtleTpcIiwgcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVkgPyBcIlByZXNlbnRcIiA6IFwiTWlzc2luZ1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIG1vZGVsOiBcIm9wZW5haS9ncHQtNG8tbWluaVwiLCAvLyBPcGVuUm91dGVyIHJlcXVpcmVzICdwcm92aWRlci9tb2RlbCcgZm9ybWF0XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBzeXN0ZW1Qcm9tcHQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyByb2xlOiBcInVzZXJcIiwgY29udGVudDogbWVzc2FnZSB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhaVJlc3BvbnNlVGV4dCA9IGNvbXBsZXRpb24uY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQgfHwgXCJJIGNvdWxkbid0IHByb2Nlc3MgdGhhdC5cIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2sgZm9yIGRlbW8gd2l0aG91dCBrZXlcbiAgICAgICAgICAgIGFpUmVzcG9uc2VUZXh0ID0gXCJJIHNlZSB5b3VyIHJlcXVlc3QsIGJ1dCBJIG5lZWQgYW4gT3BlbkFJIEFQSSBLZXkgdG8gYW5hbHl6ZSB5b3VyIGRhdGEgZGVlcGx5LiAoTW9jayBSZXNwb25zZSlcIlxuICAgICAgICB9XG5cbiAgICAgICAgLy8gNC4gU2F2ZSBDaGF0IEhpc3RvcnlcbiAgICAgICAgYXdhaXQgcHJpc21hLmNoYXRIaXN0b3J5LmNyZWF0ZU1hbnkoe1xuICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgIHsgdXNlcklkLCByb2xlOiAndXNlcicsIG1lc3NhZ2UgfSxcbiAgICAgICAgICAgICAgICB7IHVzZXJJZCwgcm9sZTogJ2Fzc2lzdGFudCcsIG1lc3NhZ2U6IGFpUmVzcG9uc2VUZXh0IH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByZXNwb25zZTogYWlSZXNwb25zZVRleHQgfSlcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NoYXQgZXJyb3I6JywgZXJyb3IpXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsInZlcmlmeUpXVCIsIk9wZW5BSSIsIm9wZW5haSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsImJhc2VVUkwiLCJkZWZhdWx0SGVhZGVycyIsIk5FWFRBVVRIX1VSTCIsIlBPU1QiLCJyZXEiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsInVzZXIiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwidXNlcklkIiwiaWQiLCJyZWNlbnRFeHBlbnNlcyIsImV4cGVuc2UiLCJmaW5kTWFueSIsIndoZXJlIiwib3JkZXJCeSIsImRhdGUiLCJ0YWtlIiwic3lzdGVtUHJvbXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hcCIsImUiLCJjYXQiLCJjYXRlZ29yeSIsImFtdCIsImFtb3VudCIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJhaVJlc3BvbnNlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0aW9uIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwiY2hvaWNlcyIsImNoYXRIaXN0b3J5IiwiY3JlYXRlTWFueSIsImRhdGEiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth/jwt.ts":
/*!*****************************!*\
  !*** ./src/lib/auth/jwt.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signJWT: () => (/* binding */ signJWT),\n/* harmony export */   verifyJWT: () => (/* binding */ verifyJWT)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n\nconst secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || \"supersecretchangeit\");\nasync function signJWT(payload) {\n    return await new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"24h\").sign(secret);\n}\nasync function verifyJWT(token) {\n    try {\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(token, secret);\n        return payload;\n    } catch (error) {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgvand0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFFekMsTUFBTUUsU0FBUyxJQUFJQyxjQUFjQyxNQUFNLENBQ25DQyxRQUFRQyxHQUFHLENBQUNDLGVBQWUsSUFBSTtBQUc1QixlQUFlQyxRQUFRQyxPQUFZO0lBQ3RDLE9BQU8sTUFBTSxJQUFJVCx5Q0FBT0EsQ0FBQ1MsU0FDcEJDLGtCQUFrQixDQUFDO1FBQUVDLEtBQUs7SUFBUSxHQUNsQ0MsV0FBVyxHQUNYQyxpQkFBaUIsQ0FBQyxPQUNsQkMsSUFBSSxDQUFDWjtBQUNkO0FBRU8sZUFBZWEsVUFBVUMsS0FBYTtJQUN6QyxJQUFJO1FBQ0EsTUFBTSxFQUFFUCxPQUFPLEVBQUUsR0FBRyxNQUFNUiwrQ0FBU0EsQ0FBQ2UsT0FBT2Q7UUFDM0MsT0FBT087SUFDWCxFQUFFLE9BQU9RLE9BQU87UUFDWixPQUFPO0lBQ1g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmFpemUvLi9zcmMvbGliL2F1dGgvand0LnRzP2I0OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSAnam9zZSdcblxuY29uc3Qgc2VjcmV0ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFxuICAgIHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCB8fCAnc3VwZXJzZWNyZXRjaGFuZ2VpdCdcbilcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25KV1QocGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIGF3YWl0IG5ldyBTaWduSldUKHBheWxvYWQpXG4gICAgICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6ICdIUzI1NicgfSlcbiAgICAgICAgLnNldElzc3VlZEF0KClcbiAgICAgICAgLnNldEV4cGlyYXRpb25UaW1lKCcyNGgnKVxuICAgICAgICAuc2lnbihzZWNyZXQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlKV1QodG9rZW46IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgand0VmVyaWZ5KHRva2VuLCBzZWNyZXQpXG4gICAgICAgIHJldHVybiBwYXlsb2FkXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiU2lnbkpXVCIsImp3dFZlcmlmeSIsInNlY3JldCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInNpZ25KV1QiLCJwYXlsb2FkIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwic2V0SXNzdWVkQXQiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNpZ24iLCJ2ZXJpZnlKV1QiLCJ0b2tlbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth/jwt.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db/prisma.ts":
/*!******************************!*\
  !*** ./src/lib/db/prisma.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsd0JBQXdCO0lBQzFCLE9BQU8sSUFBSUQsd0RBQVlBO0FBQzNCO0FBSUEsTUFBTUUsa0JBQWtCQztBQUl4QixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSUg7QUFFekMsaUVBQWVHLE1BQU1BLEVBQUE7QUFFckIsSUFBSUMsSUFBeUIsRUFBY0gsZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWl6ZS8uL3NyYy9saWIvZGIvcHJpc21hLnRzP2I4OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYUNsaWVudFNpbmdsZXRvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByaXNtYUNsaWVudCgpXG59XG5cbnR5cGUgUHJpc21hQ2xpZW50U2luZ2xldG9uID0gUmV0dXJuVHlwZTx0eXBlb2YgcHJpc21hQ2xpZW50U2luZ2xldG9uPlxuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xuICAgIHByaXNtYTogUHJpc21hQ2xpZW50U2luZ2xldG9uIHwgdW5kZWZpbmVkXG59XG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gcHJpc21hQ2xpZW50U2luZ2xldG9uKClcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hQ2xpZW50U2luZ2xldG9uIiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/jose","vendor-chunks/form-data-encoder","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/tr46","vendor-chunks/web-streams-polyfill","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();