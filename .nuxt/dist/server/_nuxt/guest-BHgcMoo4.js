import { d as defineNuxtRouteMiddleware, a as useRouter } from "../server.mjs";
import { u as useAuthStore } from "./auth-BpZIaV-_.js";
import "vue";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "@intlify/core-base";
import "js-cookie";
import "cookie-es";
import "vue/server-renderer";
import "./cookie-C__dP6IS.js";
import "ohash";
const guest = defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();
  const router = useRouter();
  if (auth.loggedIn) {
    return router.push({
      path: "/dashboard",
      query: {
        from: to.path
      }
    });
  }
});
export {
  guest as default
};
//# sourceMappingURL=guest-BHgcMoo4.js.map
