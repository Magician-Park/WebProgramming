(() => {
  'use strict';
  const root = document.documentElement;
  const states = new Map();
  const releaseScroll = () => {
    if (!Array.from(states.keys()).some(dialog => dialog.open)) root.classList.remove('certificate-open');
  };
  document.querySelectorAll('[data-certificate-trigger]').forEach(trigger => {
    const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!dialog || typeof dialog.showModal !== 'function') return;
    if (!states.has(dialog)) {
      const state = { returnFocus: null };
      states.set(dialog, state);
      dialog.querySelector('[data-certificate-close]')?.addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', event => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
      });
      // Native dialog handles Escape and keyboard focus inside each modal.
      dialog.addEventListener('close', () => {
        releaseScroll();
        if (state.returnFocus?.isConnected) state.returnFocus.focus({ preventScroll: true });
        state.returnFocus = null;
      });
    }
    trigger.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (dialog.open) { event.preventDefault(); return; }
      try { dialog.showModal(); } catch { return; }
      event.preventDefault();
      states.get(dialog).returnFocus = trigger;
      root.classList.add('certificate-open');
    });
  });
})();
