
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/vikas-resume/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/vikas-resume/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16474, hash: 'a46523474040172e0b40c08edec1ab32b1aef8d40cc0054c91bf0ca90c9e0bd7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15863, hash: 'a82156ab3d6da0318ecca07675e4460e59cb1210dac5609853f206f5ffd0f930', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 64629, hash: '336796c7ded2a9cdde444ae4acdfd343c48032b2702ed38e4953ef6c07267263', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TDLX4ZG2.css': {size: 3919, hash: 'BK+HZd9+kNs', text: () => import('./assets-chunks/styles-TDLX4ZG2_css.mjs').then(m => m.default)}
  },
};
