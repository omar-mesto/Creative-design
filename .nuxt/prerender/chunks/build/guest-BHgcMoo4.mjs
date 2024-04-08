import { d as defineNuxtRouteMiddleware, a as useRouter } from './server.mjs';
import { u as useAuthStore } from './auth-BpZIaV-_.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/vue/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/devalue/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/Omar/Desktop/creaticve%20Design/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/unified/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/mdast-util-to-string/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/micromark/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/unist-util-stringify-position/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/micromark-util-character/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/micromark-util-chunked/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/micromark-util-resolve-all/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/slugify/slugify.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/remark-parse/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/remark-rehype/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/github-slugger/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/detab/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/remark-emoji/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/remark-gfm/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/rehype-raw/index.js';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file://C:/Users/Omar/Desktop/creaticve%20Design/node_modules/cookie-es/dist/index.mjs';
import './cookie-C__dP6IS.mjs';

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

export { guest as default };
//# sourceMappingURL=guest-BHgcMoo4.mjs.map
