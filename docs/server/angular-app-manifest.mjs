
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/vikas-resume/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/vikas-resume"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3940, hash: '6c769d36b9dedb746b49b0557ea0058ced7eb3b29bc3b332cf1fe8b422dfa444', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3580, hash: 'a4ed792a46ecc613c68fae9ef266e74cc3d3f5527cd01c9684a919f5f146cd91', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33224, hash: 'ed11534e509bb285cdc5b26a18f4f40fbedb1f6d5e1894119b3b06d9c3795f9e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZRGMGVVY.css': {size: 1314, hash: 'E5ZIXQM3+00', text: () => import('./assets-chunks/styles-ZRGMGVVY_css.mjs').then(m => m.default)}
  },
};
