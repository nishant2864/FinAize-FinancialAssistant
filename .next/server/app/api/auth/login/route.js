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
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_nishantbhardwaj_Desktop_FinAize_FinancialAssistant_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/login/route.ts */ \"(rsc)/./src/app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"/Users/nishantbhardwaj/Desktop/FinAize-FinancialAssistant/src/app/api/auth/login/route.ts\",\n    nextConfigOutput,\n    userland: _Users_nishantbhardwaj_Desktop_FinAize_FinancialAssistant_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm5pc2hhbnRiaGFyZHdhaiUyRkRlc2t0b3AlMkZGaW5BaXplLUZpbmFuY2lhbEFzc2lzdGFudCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZuaXNoYW50YmhhcmR3YWolMkZEZXNrdG9wJTJGRmluQWl6ZS1GaW5hbmNpYWxBc3Npc3RhbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3lDO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWl6ZS8/MmFlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbmlzaGFudGJoYXJkd2FqL0Rlc2t0b3AvRmluQWl6ZS1GaW5hbmNpYWxBc3Npc3RhbnQvc3JjL2FwcC9hcGkvYXV0aC9sb2dpbi9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbmlzaGFudGJoYXJkd2FqL0Rlc2t0b3AvRmluQWl6ZS1GaW5hbmNpYWxBc3Npc3RhbnQvc3JjL2FwcC9hcGkvYXV0aC9sb2dpbi9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/login/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/auth/login/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db/prisma */ \"(rsc)/./src/lib/db/prisma.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth/jwt */ \"(rsc)/./src/lib/auth/jwt.ts\");\n\n\n\n\nasync function POST(req) {\n    try {\n        const { email, password } = await req.json();\n        if (!email || !password) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing credentials\"\n            }, {\n                status: 400\n            });\n        }\n        const user = await _lib_db_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid credentials\"\n            }, {\n                status: 401\n            });\n        }\n        const isValid = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);\n        if (!isValid) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid credentials\"\n            }, {\n                status: 401\n            });\n        }\n        const token = await (0,_lib_auth_jwt__WEBPACK_IMPORTED_MODULE_3__.signJWT)({\n            id: user.id,\n            email: user.email\n        });\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: {\n                id: user.id,\n                email: user.email,\n                name: user.name\n            },\n            token\n        });\n        response.cookies.set(\"token\", token, {\n            httpOnly: true,\n            secure: \"development\" === \"production\",\n            maxAge: 60 * 60 * 24,\n            path: \"/\"\n        });\n        return response;\n    } catch (error) {\n        console.error(\"Login error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUNOO0FBQ1Q7QUFDYTtBQUVqQyxlQUFlSSxLQUFLQyxHQUFZO0lBQ25DLElBQUk7UUFDQSxNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtRQUUxQyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsVUFBVTtZQUNyQixPQUFPUCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXNCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM3RTtRQUVBLE1BQU1DLE9BQU8sTUFBTVYsc0RBQU1BLENBQUNVLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQ3RDQyxPQUFPO2dCQUFFUDtZQUFNO1FBQ25CO1FBRUEsSUFBSSxDQUFDSyxNQUFNO1lBQ1AsT0FBT1gscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDN0U7UUFFQSxNQUFNSSxVQUFVLE1BQU1aLHFEQUFjLENBQUNLLFVBQVVJLEtBQUtKLFFBQVE7UUFFNUQsSUFBSSxDQUFDTyxTQUFTO1lBQ1YsT0FBT2QscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDN0U7UUFFQSxNQUFNTSxRQUFRLE1BQU1iLHNEQUFPQSxDQUFDO1lBQUVjLElBQUlOLEtBQUtNLEVBQUU7WUFBRVgsT0FBT0ssS0FBS0wsS0FBSztRQUFDO1FBRTdELE1BQU1ZLFdBQVdsQixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQy9CRyxNQUFNO2dCQUFFTSxJQUFJTixLQUFLTSxFQUFFO2dCQUFFWCxPQUFPSyxLQUFLTCxLQUFLO2dCQUFFYSxNQUFNUixLQUFLUSxJQUFJO1lBQUM7WUFDeERIO1FBQ0o7UUFFQUUsU0FBU0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBU0wsT0FBTztZQUNqQ00sVUFBVTtZQUNWQyxRQUFRQyxrQkFBeUI7WUFDakNDLFFBQVEsS0FBSyxLQUFLO1lBQ2xCQyxNQUFNO1FBQ1Y7UUFFQSxPQUFPUjtJQUVYLEVBQUUsT0FBT1QsT0FBTztRQUNaa0IsUUFBUWxCLEtBQUssQ0FBQyxnQkFBZ0JBO1FBQzlCLE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWl6ZS8uL3NyYy9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUudHM/ZDMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCBwcmlzbWEgZnJvbSAnQC9saWIvZGIvcHJpc21hJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgeyBzaWduSldUIH0gZnJvbSAnQC9saWIvYXV0aC9qd3QnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBhd2FpdCByZXEuanNvbigpXG5cbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWlzc2luZyBjcmVkZW50aWFscycgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW52YWxpZCBjcmVkZW50aWFscycgfSwgeyBzdGF0dXM6IDQwMSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIGNyZWRlbnRpYWxzJyB9LCB7IHN0YXR1czogNDAxIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHNpZ25KV1QoeyBpZDogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwgfSlcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIHVzZXI6IHsgaWQ6IHVzZXIuaWQsIGVtYWlsOiB1c2VyLmVtYWlsLCBuYW1lOiB1c2VyLm5hbWUgfSxcbiAgICAgICAgICAgIHRva2VuXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmVzcG9uc2UuY29va2llcy5zZXQoJ3Rva2VuJywgdG9rZW4sIHtcbiAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQsIC8vIDEgZGF5XG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdMb2dpbiBlcnJvcjonLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiYmNyeXB0Iiwic2lnbkpXVCIsIlBPU1QiLCJyZXEiLCJlbWFpbCIsInBhc3N3b3JkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzVmFsaWQiLCJjb21wYXJlIiwidG9rZW4iLCJpZCIsInJlc3BvbnNlIiwibmFtZSIsImNvb2tpZXMiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJtYXhBZ2UiLCJwYXRoIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/login/route.ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fnishantbhardwaj%2FDesktop%2FFinAize-FinancialAssistant&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();