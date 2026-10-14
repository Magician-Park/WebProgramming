(() => {
  'use strict';
  const layer = document.querySelector('[data-page-loader]');
  if (!layer) return;
  const main = document.querySelector('main');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const originalBusy = main ? main.getAttribute('aria-busy') : null;
  let visibleSince = 0;
  let finishTimer;
  let fadeTimer;
  let fallbackTimer;

  const restoreBusy = () => {
    if (!main) return;
    if (originalBusy === null) main.removeAttribute('aria-busy');
    else main.setAttribute('aria-busy', originalBusy);
  };
  const clearTimers = () => {
    window.clearTimeout(finishTimer);
    window.clearTimeout(fadeTimer);
    window.clearTimeout(fallbackTimer);
  };
  const hide = (immediate = false) => {
    clearTimers();
    layer.classList.remove('is-visible');
    restoreBusy();
    const delay = immediate || reducedMotion.matches ? 0 : 160;
    if (delay === 0) layer.hidden = true;
    else fadeTimer = window.setTimeout(() => { layer.hidden = true; }, delay);
  };
  const show = () => {
    clearTimers();
    visibleSince = performance.now();
    layer.hidden = false;
    layer.classList.add('is-visible');
    if (main) main.setAttribute('aria-busy', 'true');
    // A slow or failed resource must not leave the page covered indefinitely.
    fallbackTimer = window.setTimeout(() => hide(true), 4000);
  };
  const finish = () => {
    const minimum = reducedMotion.matches ? 0 : 280;
    const remaining = Math.max(0, minimum - (performance.now() - visibleSince));
    window.clearTimeout(finishTimer);
    if (remaining === 0) hide();
    else finishTimer = window.setTimeout(() => hide(), remaining);
  };

  // Observe links without cancelling the browser's normal navigation.
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link || link.hasAttribute('download') || (link.target && link.target.toLowerCase() !== '_self')) return;
    if (document.querySelector('[data-editor-field][contenteditable="true"]')) return;
    let target;
    try { target = new URL(link.href, location.href); } catch { return; }
    const current = new URL(location.href);
    if (!['http:', 'https:', 'file:'].includes(target.protocol)) return;
    if (target.protocol !== current.protocol || target.host !== current.host) return;
    if (target.pathname === current.pathname && target.search === current.search) return;
    const siteBase = new URL('.', document.currentScript ? document.currentScript.src : scriptURL);
    if (!target.pathname.startsWith(siteBase.pathname)) return;
    if (!/\.html$/i.test(target.pathname)) return;
    show();
  });

  const scriptURL = Array.from(document.scripts).find(script => /\/page-loader\.js(?:[?#]|$)/.test(script.src))?.src || location.href;
  window.addEventListener('pageshow', event => { if (event.persisted) hide(true); });
  show();
  if (document.readyState === 'complete') finish();
  else window.addEventListener('load', finish, { once: true });
})();
