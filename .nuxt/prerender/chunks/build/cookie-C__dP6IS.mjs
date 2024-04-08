import { ref } from 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/vue/index.mjs';
import { parse } from 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/cookie-es/dist/index.mjs';
import { getRequestHeader, setCookie, getCookie, deleteCookie } from 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/h3/dist/index.mjs';
import destr from 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/destr/dist/index.mjs';
import { isEqual } from 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/ohash/dist/index.mjs';
import { klona } from 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/klona/dist/index.mjs';
import { g as useNuxtApp } from './server.mjs';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : (_a2 = cookies[name]) != null ? _a2 : (_a = opts.default) == null ? void 0 : _a.call(opts));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}

export { useRequestEvent as a, useCookie as u };
//# sourceMappingURL=cookie-C__dP6IS.mjs.map
