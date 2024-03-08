"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/app/auth.config.ts":
/*!********************************!*\
  !*** ./src/app/auth.config.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    providers: [],\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        authorized: async ({ auth, request })=>{\n            const isLoggedIn = !!auth?.user;\n            const isOnDashboard = request.nextUrl.pathname.startsWith(\"/dashboard\");\n            if (isOnDashboard && !isLoggedIn) {\n                return Response.redirect(new URL(\"/login\", request.nextUrl));\n            }\n            if (!isOnDashboard && isLoggedIn) {\n                return Response.redirect(new URL(\"/dashboard\", request.nextUrl));\n            }\n            return true;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2FwcC9hdXRoLmNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTUEsYUFBYTtJQUN4QkMsV0FBVyxFQUFFO0lBQ2JDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFdBQVc7UUFDVEMsWUFBWSxPQUFPLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO1lBQ2xDLE1BQU1DLGFBQWEsQ0FBQyxDQUFDRixNQUFNRztZQUUzQixNQUFNQyxnQkFBZ0JILFFBQVFJLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUM7WUFFMUQsSUFBSUgsaUJBQWlCLENBQUNGLFlBQVk7Z0JBQ2hDLE9BQU9NLFNBQVNDLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFVBQVVULFFBQVFJLE9BQU87WUFDNUQ7WUFFQSxJQUFJLENBQUNELGlCQUFpQkYsWUFBWTtnQkFDaEMsT0FBT00sU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksY0FBY1QsUUFBUUksT0FBTztZQUNoRTtZQUNBLE9BQU87UUFDVDtJQUNGO0FBQ0YsRUFBMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRoLmNvbmZpZy50cz9lMGFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEF1dGhDb25maWcgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoQ29uZmlnID0ge1xuICBwcm92aWRlcnM6IFtdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXV0aG9yaXplZDogYXN5bmMgKHsgYXV0aCwgcmVxdWVzdCB9KSA9PiB7XG4gICAgICBjb25zdCBpc0xvZ2dlZEluID0gISFhdXRoPy51c2VyO1xuXG4gICAgICBjb25zdCBpc09uRGFzaGJvYXJkID0gcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvZGFzaGJvYXJkXCIpO1xuXG4gICAgICBpZiAoaXNPbkRhc2hib2FyZCAmJiAhaXNMb2dnZWRJbikge1xuICAgICAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9sb2dpblwiLCByZXF1ZXN0Lm5leHRVcmwpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc09uRGFzaGJvYXJkICYmIGlzTG9nZ2VkSW4pIHtcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvZGFzaGJvYXJkXCIsIHJlcXVlc3QubmV4dFVybCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgfSxcbn0gc2F0aXNmaWVzIE5leHRBdXRoQ29uZmlnO1xuIl0sIm5hbWVzIjpbImF1dGhDb25maWciLCJwcm92aWRlcnMiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImF1dGhvcml6ZWQiLCJhdXRoIiwicmVxdWVzdCIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwiaXNPbkRhc2hib2FyZCIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJSZXNwb25zZSIsInJlZGlyZWN0IiwiVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/app/auth.config.ts\n");

/***/ })

});