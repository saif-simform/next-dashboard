"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cookie";
exports.ids = ["vendor-chunks/cookie"];
exports.modules = {

/***/ "(rsc)/./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*!\n * cookie\n * Copyright(c) 2012-2014 Roman Shtylman\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */ \n/**\n * Module exports.\n * @public\n */ exports.parse = parse;\nexports.serialize = serialize;\n/**\n * Module variables.\n * @private\n */ var __toString = Object.prototype.toString;\n/**\n * RegExp to match field-content in RFC 7230 sec 3.2\n *\n * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]\n * field-vchar   = VCHAR / obs-text\n * obs-text      = %x80-FF\n */ var fieldContentRegExp = /^[\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+$/;\n/**\n * Parse a cookie header.\n *\n * Parse the given cookie header string into an object\n * The object has the various cookies as keys(names) => values\n *\n * @param {string} str\n * @param {object} [options]\n * @return {object}\n * @public\n */ function parse(str, options) {\n    if (typeof str !== \"string\") {\n        throw new TypeError(\"argument str must be a string\");\n    }\n    var obj = {};\n    var opt = options || {};\n    var dec = opt.decode || decode;\n    var index = 0;\n    while(index < str.length){\n        var eqIdx = str.indexOf(\"=\", index);\n        // no more cookie pairs\n        if (eqIdx === -1) {\n            break;\n        }\n        var endIdx = str.indexOf(\";\", index);\n        if (endIdx === -1) {\n            endIdx = str.length;\n        } else if (endIdx < eqIdx) {\n            // backtrack on prior semicolon\n            index = str.lastIndexOf(\";\", eqIdx - 1) + 1;\n            continue;\n        }\n        var key = str.slice(index, eqIdx).trim();\n        // only assign once\n        if (undefined === obj[key]) {\n            var val = str.slice(eqIdx + 1, endIdx).trim();\n            // quoted values\n            if (val.charCodeAt(0) === 0x22) {\n                val = val.slice(1, -1);\n            }\n            obj[key] = tryDecode(val, dec);\n        }\n        index = endIdx + 1;\n    }\n    return obj;\n}\n/**\n * Serialize data into a cookie header.\n *\n * Serialize the a name value pair into a cookie string suitable for\n * http headers. An optional options object specified cookie parameters.\n *\n * serialize('foo', 'bar', { httpOnly: true })\n *   => \"foo=bar; httpOnly\"\n *\n * @param {string} name\n * @param {string} val\n * @param {object} [options]\n * @return {string}\n * @public\n */ function serialize(name, val, options) {\n    var opt = options || {};\n    var enc = opt.encode || encode;\n    if (typeof enc !== \"function\") {\n        throw new TypeError(\"option encode is invalid\");\n    }\n    if (!fieldContentRegExp.test(name)) {\n        throw new TypeError(\"argument name is invalid\");\n    }\n    var value = enc(val);\n    if (value && !fieldContentRegExp.test(value)) {\n        throw new TypeError(\"argument val is invalid\");\n    }\n    var str = name + \"=\" + value;\n    if (null != opt.maxAge) {\n        var maxAge = opt.maxAge - 0;\n        if (isNaN(maxAge) || !isFinite(maxAge)) {\n            throw new TypeError(\"option maxAge is invalid\");\n        }\n        str += \"; Max-Age=\" + Math.floor(maxAge);\n    }\n    if (opt.domain) {\n        if (!fieldContentRegExp.test(opt.domain)) {\n            throw new TypeError(\"option domain is invalid\");\n        }\n        str += \"; Domain=\" + opt.domain;\n    }\n    if (opt.path) {\n        if (!fieldContentRegExp.test(opt.path)) {\n            throw new TypeError(\"option path is invalid\");\n        }\n        str += \"; Path=\" + opt.path;\n    }\n    if (opt.expires) {\n        var expires = opt.expires;\n        if (!isDate(expires) || isNaN(expires.valueOf())) {\n            throw new TypeError(\"option expires is invalid\");\n        }\n        str += \"; Expires=\" + expires.toUTCString();\n    }\n    if (opt.httpOnly) {\n        str += \"; HttpOnly\";\n    }\n    if (opt.secure) {\n        str += \"; Secure\";\n    }\n    if (opt.partitioned) {\n        str += \"; Partitioned\";\n    }\n    if (opt.priority) {\n        var priority = typeof opt.priority === \"string\" ? opt.priority.toLowerCase() : opt.priority;\n        switch(priority){\n            case \"low\":\n                str += \"; Priority=Low\";\n                break;\n            case \"medium\":\n                str += \"; Priority=Medium\";\n                break;\n            case \"high\":\n                str += \"; Priority=High\";\n                break;\n            default:\n                throw new TypeError(\"option priority is invalid\");\n        }\n    }\n    if (opt.sameSite) {\n        var sameSite = typeof opt.sameSite === \"string\" ? opt.sameSite.toLowerCase() : opt.sameSite;\n        switch(sameSite){\n            case true:\n                str += \"; SameSite=Strict\";\n                break;\n            case \"lax\":\n                str += \"; SameSite=Lax\";\n                break;\n            case \"strict\":\n                str += \"; SameSite=Strict\";\n                break;\n            case \"none\":\n                str += \"; SameSite=None\";\n                break;\n            default:\n                throw new TypeError(\"option sameSite is invalid\");\n        }\n    }\n    return str;\n}\n/**\n * URL-decode string value. Optimized to skip native call when no %.\n *\n * @param {string} str\n * @returns {string}\n */ function decode(str) {\n    return str.indexOf(\"%\") !== -1 ? decodeURIComponent(str) : str;\n}\n/**\n * URL-encode value.\n *\n * @param {string} val\n * @returns {string}\n */ function encode(val) {\n    return encodeURIComponent(val);\n}\n/**\n * Determine if value is a Date.\n *\n * @param {*} val\n * @private\n */ function isDate(val) {\n    return __toString.call(val) === \"[object Date]\" || val instanceof Date;\n}\n/**\n * Try decoding a string using a decoding function.\n *\n * @param {string} str\n * @param {function} decode\n * @private\n */ function tryDecode(str, decode) {\n    try {\n        return decode(str);\n    } catch (e) {\n        return str;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTztnQkFDUDtZQUNGLEtBQUs7Z0JBQ0hBLE9BQU87Z0JBQ1A7WUFDRixLQUFLO2dCQUNIQSxPQUFPO2dCQUNQO1lBQ0Y7Z0JBQ0UsTUFBTSxJQUFJRSxVQUFVO1FBQ3hCO0lBQ0Y7SUFFQSxPQUFPRjtBQUNUO0FBRUE7Ozs7O0NBS0MsR0FFRCxTQUFTTSxPQUFRTixHQUFHO0lBQ2xCLE9BQU9BLElBQUlVLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFDekJnQyxtQkFBbUIxQyxPQUNuQkE7QUFDTjtBQUVBOzs7OztDQUtDLEdBRUQsU0FBU3NCLE9BQVFMLEdBQUc7SUFDbEIsT0FBTzBCLG1CQUFtQjFCO0FBQzVCO0FBRUE7Ozs7O0NBS0MsR0FFRCxTQUFTZ0IsT0FBUWhCLEdBQUc7SUFDbEIsT0FBT3RCLFdBQVdpRCxJQUFJLENBQUMzQixTQUFTLG1CQUM5QkEsZUFBZTRCO0FBQ25CO0FBRUE7Ozs7OztDQU1DLEdBRUQsU0FBUzFCLFVBQVVuQixHQUFHLEVBQUVNLE1BQU07SUFDNUIsSUFBSTtRQUNGLE9BQU9BLE9BQU9OO0lBQ2hCLEVBQUUsT0FBTzhDLEdBQUc7UUFDVixPQUFPOUM7SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzPzVkMzIiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBjb29raWVcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZXhwb3J0cy5zZXJpYWxpemUgPSBzZXJpYWxpemU7XG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIF9fdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIGZpZWxkLWNvbnRlbnQgaW4gUkZDIDcyMzAgc2VjIDMuMlxuICpcbiAqIGZpZWxkLWNvbnRlbnQgPSBmaWVsZC12Y2hhciBbIDEqKCBTUCAvIEhUQUIgKSBmaWVsZC12Y2hhciBdXG4gKiBmaWVsZC12Y2hhciAgID0gVkNIQVIgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqL1xuXG52YXIgZmllbGRDb250ZW50UmVnRXhwID0gL15bXFx1MDAwOVxcdTAwMjAtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl0rJC87XG5cbi8qKlxuICogUGFyc2UgYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb29raWUgaGVhZGVyIHN0cmluZyBpbnRvIGFuIG9iamVjdFxuICogVGhlIG9iamVjdCBoYXMgdGhlIHZhcmlvdXMgY29va2llcyBhcyBrZXlzKG5hbWVzKSA9PiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICB2YXIgb2JqID0ge31cbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcblxuICB2YXIgaW5kZXggPSAwXG4gIHdoaWxlIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICB2YXIgZXFJZHggPSBzdHIuaW5kZXhPZignPScsIGluZGV4KVxuXG4gICAgLy8gbm8gbW9yZSBjb29raWUgcGFpcnNcbiAgICBpZiAoZXFJZHggPT09IC0xKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHZhciBlbmRJZHggPSBzdHIuaW5kZXhPZignOycsIGluZGV4KVxuXG4gICAgaWYgKGVuZElkeCA9PT0gLTEpIHtcbiAgICAgIGVuZElkeCA9IHN0ci5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKGVuZElkeCA8IGVxSWR4KSB7XG4gICAgICAvLyBiYWNrdHJhY2sgb24gcHJpb3Igc2VtaWNvbG9uXG4gICAgICBpbmRleCA9IHN0ci5sYXN0SW5kZXhPZignOycsIGVxSWR4IC0gMSkgKyAxXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBrZXkgPSBzdHIuc2xpY2UoaW5kZXgsIGVxSWR4KS50cmltKClcblxuICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICBpZiAodW5kZWZpbmVkID09PSBvYmpba2V5XSkge1xuICAgICAgdmFyIHZhbCA9IHN0ci5zbGljZShlcUlkeCArIDEsIGVuZElkeCkudHJpbSgpXG5cbiAgICAgIC8vIHF1b3RlZCB2YWx1ZXNcbiAgICAgIGlmICh2YWwuY2hhckNvZGVBdCgwKSA9PT0gMHgyMikge1xuICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMSwgLTEpXG4gICAgICB9XG5cbiAgICAgIG9ialtrZXldID0gdHJ5RGVjb2RlKHZhbCwgZGVjKTtcbiAgICB9XG5cbiAgICBpbmRleCA9IGVuZElkeCArIDFcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGRhdGEgaW50byBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogU2VyaWFsaXplIHRoZSBhIG5hbWUgdmFsdWUgcGFpciBpbnRvIGEgY29va2llIHN0cmluZyBzdWl0YWJsZSBmb3JcbiAqIGh0dHAgaGVhZGVycy4gQW4gb3B0aW9uYWwgb3B0aW9ucyBvYmplY3Qgc3BlY2lmaWVkIGNvb2tpZSBwYXJhbWV0ZXJzLlxuICpcbiAqIHNlcmlhbGl6ZSgnZm9vJywgJ2JhcicsIHsgaHR0cE9ubHk6IHRydWUgfSlcbiAqICAgPT4gXCJmb289YmFyOyBodHRwT25seVwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUobmFtZSwgdmFsLCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgZW5jID0gb3B0LmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgaWYgKHR5cGVvZiBlbmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZW5jb2RlIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3QobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBuYW1lIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVuYyh2YWwpO1xuXG4gIGlmICh2YWx1ZSAmJiAhZmllbGRDb250ZW50UmVnRXhwLnRlc3QodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgdmFsIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciBzdHIgPSBuYW1lICsgJz0nICsgdmFsdWU7XG5cbiAgaWYgKG51bGwgIT0gb3B0Lm1heEFnZSkge1xuICAgIHZhciBtYXhBZ2UgPSBvcHQubWF4QWdlIC0gMDtcblxuICAgIGlmIChpc05hTihtYXhBZ2UpIHx8ICFpc0Zpbml0ZShtYXhBZ2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gbWF4QWdlIGlzIGludmFsaWQnKVxuICAgIH1cblxuICAgIHN0ciArPSAnOyBNYXgtQWdlPScgKyBNYXRoLmZsb29yKG1heEFnZSk7XG4gIH1cblxuICBpZiAob3B0LmRvbWFpbikge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LmRvbWFpbikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBkb21haW4gaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBEb21haW49JyArIG9wdC5kb21haW47XG4gIH1cblxuICBpZiAob3B0LnBhdGgpIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5wYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHBhdGggaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBQYXRoPScgKyBvcHQucGF0aDtcbiAgfVxuXG4gIGlmIChvcHQuZXhwaXJlcykge1xuICAgIHZhciBleHBpcmVzID0gb3B0LmV4cGlyZXNcblxuICAgIGlmICghaXNEYXRlKGV4cGlyZXMpIHx8IGlzTmFOKGV4cGlyZXMudmFsdWVPZigpKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGV4cGlyZXMgaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBFeHBpcmVzPScgKyBleHBpcmVzLnRvVVRDU3RyaW5nKClcbiAgfVxuXG4gIGlmIChvcHQuaHR0cE9ubHkpIHtcbiAgICBzdHIgKz0gJzsgSHR0cE9ubHknO1xuICB9XG5cbiAgaWYgKG9wdC5zZWN1cmUpIHtcbiAgICBzdHIgKz0gJzsgU2VjdXJlJztcbiAgfVxuXG4gIGlmIChvcHQucGFydGl0aW9uZWQpIHtcbiAgICBzdHIgKz0gJzsgUGFydGl0aW9uZWQnXG4gIH1cblxuICBpZiAob3B0LnByaW9yaXR5KSB7XG4gICAgdmFyIHByaW9yaXR5ID0gdHlwZW9mIG9wdC5wcmlvcml0eSA9PT0gJ3N0cmluZydcbiAgICAgID8gb3B0LnByaW9yaXR5LnRvTG93ZXJDYXNlKClcbiAgICAgIDogb3B0LnByaW9yaXR5XG5cbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICBjYXNlICdsb3cnOlxuICAgICAgICBzdHIgKz0gJzsgUHJpb3JpdHk9TG93J1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgc3RyICs9ICc7IFByaW9yaXR5PU1lZGl1bSdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICBzdHIgKz0gJzsgUHJpb3JpdHk9SGlnaCdcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBwcmlvcml0eSBpcyBpbnZhbGlkJylcbiAgICB9XG4gIH1cblxuICBpZiAob3B0LnNhbWVTaXRlKSB7XG4gICAgdmFyIHNhbWVTaXRlID0gdHlwZW9mIG9wdC5zYW1lU2l0ZSA9PT0gJ3N0cmluZydcbiAgICAgID8gb3B0LnNhbWVTaXRlLnRvTG93ZXJDYXNlKCkgOiBvcHQuc2FtZVNpdGU7XG5cbiAgICBzd2l0Y2ggKHNhbWVTaXRlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xheCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1MYXgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9Tm9uZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHNhbWVTaXRlIGlzIGludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFVSTC1kZWNvZGUgc3RyaW5nIHZhbHVlLiBPcHRpbWl6ZWQgdG8gc2tpcCBuYXRpdmUgY2FsbCB3aGVuIG5vICUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBkZWNvZGUgKHN0cikge1xuICByZXR1cm4gc3RyLmluZGV4T2YoJyUnKSAhPT0gLTFcbiAgICA/IGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgOiBzdHJcbn1cblxuLyoqXG4gKiBVUkwtZW5jb2RlIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlICh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHZhbHVlIGlzIGEgRGF0ZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0RhdGUgKHZhbCkge1xuICByZXR1cm4gX190b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJyB8fFxuICAgIHZhbCBpbnN0YW5jZW9mIERhdGVcbn1cblxuLyoqXG4gKiBUcnkgZGVjb2RpbmcgYSBzdHJpbmcgdXNpbmcgYSBkZWNvZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkZWNvZGVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJwYXJzZSIsInNlcmlhbGl6ZSIsIl9fdG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImZpZWxkQ29udGVudFJlZ0V4cCIsInN0ciIsIm9wdGlvbnMiLCJUeXBlRXJyb3IiLCJvYmoiLCJvcHQiLCJkZWMiLCJkZWNvZGUiLCJpbmRleCIsImxlbmd0aCIsImVxSWR4IiwiaW5kZXhPZiIsImVuZElkeCIsImxhc3RJbmRleE9mIiwia2V5Iiwic2xpY2UiLCJ0cmltIiwidW5kZWZpbmVkIiwidmFsIiwiY2hhckNvZGVBdCIsInRyeURlY29kZSIsIm5hbWUiLCJlbmMiLCJlbmNvZGUiLCJ0ZXN0IiwidmFsdWUiLCJtYXhBZ2UiLCJpc05hTiIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiZG9tYWluIiwicGF0aCIsImV4cGlyZXMiLCJpc0RhdGUiLCJ2YWx1ZU9mIiwidG9VVENTdHJpbmciLCJodHRwT25seSIsInNlY3VyZSIsInBhcnRpdGlvbmVkIiwicHJpb3JpdHkiLCJ0b0xvd2VyQ2FzZSIsInNhbWVTaXRlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiY2FsbCIsIkRhdGUiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/cookie/index.js\n");

/***/ })

};
;