export default `<!doctype html>
<html lang="en" data-beasties-container="">
<head>
  <meta charset="utf-8">
  <title>VikasResume</title>
  <base href="/vikas-resume/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <!-- Inline theme init: sets .dark on <html> early to prevent flash -->
  <script>
    (function () {
      try {
        const stored = localStorage.getItem('theme'); // 'dark' | 'light' | null
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (stored === 'dark' || (stored === null && prefersDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        /* ignore errors (e.g., private mode) */
      }
    })();
  </script>

  <!-- Minimal initial CSS so first paint respects theme variables -->
  <style>
    /* Core variables used by the app; these will be overridden by compiled styles */
    :root {
      --page-width: 980px;
      --text-color: #111111;
      --muted-color: #7d7d80;
      --muted-color-strong: #3f3f45;
      --surface-color: #f5f5f7;
      --background-color: #ffffff;
    }

    :root.dark {
      --text-color: #f5f5f7;
      --muted-color: #a1a1a6;
      --muted-color-strong: #e5e5ea;
      --surface-color: #1c1c1e;
      --background-color: #000000;
    }

    /* apply immediately to avoid white flash while external CSS loads */
    html, body {
      background: var(--background-color);
      color: var(--text-color);
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      min-height: 100%;
    }

    /* avoid transitions on first paint (prevents flicker) */
    * {
      transition: none !important;
    }

    /* restore transitions after 1s (when app has likely loaded) */
    @media (prefers-reduced-motion: no-preference) {
      :root {
        --_restore-transitions: 1s;
      }
    }
  </style>

  <!-- Let browsers choose appropriate chrome color -->
  <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
<style>:root{--page-width:980px;--text-color:#111111;--muted-color:#7d7d80;--muted-color-strong:#3f3f45;--surface-color:#f5f5f7;--background-color:#ffffff;--font-sans:-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, -system-ui, "Segoe UI", sans-serif}*,*:before,*:after{box-sizing:border-box}html,body{margin:0;padding:0}body{font-family:var(--font-sans);background:var(--background-color);color:var(--text-color);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}html{scroll-behavior:smooth}@media(prefers-color-scheme:dark){:root{--text-color:#f5f5f7;--muted-color:#a1a1a6;--muted-color-strong:#e5e5ea;--surface-color:#1c1c1e;--background-color:#000000}body{background:radial-gradient(circle at top,#1c1c1e 0,#000 60%,#111)}}</style><link rel="stylesheet" href="styles-ZRGMGVVY.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-ZRGMGVVY.css"></noscript></head>
<body ngcm="">
  <app-root></app-root>

  <!-- optional: small script to re-enable transitions after app load (prevents sudden motion) -->
  <script>
    (function () {
      try {
        // Re-enable CSS transitions a moment after load to avoid first-paint jank
        window.addEventListener('load', function () {
          setTimeout(function () {
            const style = document.createElement('style');
            style.innerHTML = '* { transition: initial !important; }';
            document.head.appendChild(style);
          }, 800);
        }, { once: true });
      } catch (e) {}
    })();
  </script>
<script src="main-YBH2YXVO.js" type="module"></script></body>
</html>
`;