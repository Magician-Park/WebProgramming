(() => {
  'use strict';
  const section = document.getElementById('achievements');
  if (!section) return;
  const controls = section.querySelector('[data-achievement-filters]');
  const table = section.querySelector('[data-achievements-table]');
  const status = section.querySelector('[data-achievement-status]');
  if (!controls || !table || !status) return;
  const rows = Array.from(table.querySelectorAll('tbody tr[data-achievement-category]'));
  const buttons = Array.from(controls.querySelectorAll('[data-achievement-filter]'));
  if (!rows.length || !buttons.length) return;
  const caption = table.querySelector('caption');
  const surface = table.closest('.table-scroll');
  const reducedMotion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: true };
  let requested = buttons.find(button => button.dataset.achievementFilter === 'all') || buttons[0];
  let revision = 0;
  let animation = null;
  const matches = (row, category) => category === 'all' || row.dataset.achievementCategory === category;
  buttons.forEach(button => {
    const count = button.querySelector('[data-filter-count]');
    if (count) count.textContent = String(rows.filter(row => matches(row, button.dataset.achievementFilter)).length);
  });
  const markSelected = active => {
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button === active)));
    controls.dataset.filterIndex = String(buttons.indexOf(active));
  };
  const show = active => {
    const category = active.dataset.achievementFilter;
    let count = 0;
    rows.forEach(row => {
      row.hidden = !matches(row, category);
      if (!row.hidden) count++;
    });
    const label = category === 'all' ? '전체' : category;
    status.textContent = label + ' ' + count + '건 표시 중 · 최신순';
    if (caption) caption.textContent = label + ' 실적 ' + count + '건, 최신순. 시기, 분류, 내용, 본인 역할. 사진 아이콘으로 관련 자료를 확인할 수 있음.';
  };
  const choose = async active => {
    if (active === requested) return;
    requested = active;
    const ticket = ++revision;
    // Capture the current frame before cancelling an interrupted transition.
    const current = surface && window.getComputedStyle ? window.getComputedStyle(surface) : null;
    const startOpacity = current ? current.opacity : '1';
    const startTransform = current ? current.transform : 'none';
    const startHeight = surface ? surface.getBoundingClientRect().height : 0;
    if (animation) animation.cancel();
    animation = null;
    markSelected(active);
    if (!surface || typeof surface.animate !== 'function' || reducedMotion.matches) {
      show(active);
      if (surface) surface.removeAttribute('aria-busy');
      return;
    }
    surface.setAttribute('aria-busy', 'true');
    try {
      const outgoing = surface.animate([
        { opacity: startOpacity, transform: startTransform },
        { opacity: 0, transform: 'translateY(6px)' }
      ], { duration: 110, easing: 'ease-out', fill: 'forwards' });
      animation = outgoing;
      await outgoing.finished;
      if (ticket !== revision) return;
      outgoing.cancel();
      show(active);
      const endHeight = surface.getBoundingClientRect().height;
      const incoming = surface.animate([
        { opacity: 0, transform: 'translateY(10px)', height: startHeight + 'px' },
        { opacity: 1, transform: 'translateY(0)', height: endHeight + 'px' }
      ], { duration: 280, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' });
      animation = incoming;
      await incoming.finished;
    } catch {
      // Cancellation is expected on rapid changes; only the latest choice may render.
      if (ticket === revision) show(active);
    } finally {
      if (ticket === revision) {
        if (animation) animation.cancel();
        animation = null;
        surface.removeAttribute('aria-busy');
      }
    }
  };
  buttons.forEach(button => button.addEventListener('click', () => { void choose(button); }));
  if (typeof reducedMotion.addEventListener === 'function') reducedMotion.addEventListener('change', () => {
    if (!reducedMotion.matches) return;
    revision++;
    if (animation) animation.cancel();
    animation = null;
    show(requested);
    if (surface) surface.removeAttribute('aria-busy');
  });
  markSelected(requested);
  show(requested);
  // Without JavaScript the controls remain hidden and every source row stays visible.
  controls.hidden = false;
})();
