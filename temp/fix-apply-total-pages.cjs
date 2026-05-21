const fs = require('fs');
const path = require('path');

const target = path.join(process.cwd(), 'src/pages/lab/vue-virtual-card-scroll.astro');
let content = fs.readFileSync(target, 'utf8');

content = content.replace(
  '<button type="button" data-jump="1000">最后一页</button>',
  '<button type="button" data-jump-last>最后一页</button>'
);

content = content.replace(
`      totalPagesInput: root.querySelector('[data-total-pages]'),
      jumpPageInput: root.querySelector('[data-jump-page]'),`,
`      totalPagesInput: root.querySelector('[data-total-pages]'),
      jumpPageInput: root.querySelector('[data-jump-page]'),
      jumpLast: root.querySelector('[data-jump-last]'),`
);

content = content.replace(
`    function applyTotalPages() {
      const nextTotal = clamp(toPositiveInteger(els.totalPagesInput.value, 1), 1, 100000);
      abortAllRequests();
      state.totalPages = nextTotal;
      state.requestEpoch += 1;
      state.cache.clear();
      state.pending.clear();
      state.notice = '';
      state.lastRequestText = '等待首次加载';
      els.rangePage.max = String(nextTotal);
      els.jumpPageInput.max = String(nextTotal);
      scrollToPage(clamp(state.currentPage, 1, state.totalPages), false);
    }`,
`    function syncTotalPageControls() {
      const total = String(state.totalPages);
      els.totalPagesInput.value = total;
      els.rangePage.max = total;
      els.jumpPageInput.max = total;
      if (els.jumpLast) {
        els.jumpLast.dataset.jump = total;
        els.jumpLast.textContent = '最后一页';
      }
    }
    function applyTotalPages() {
      const nextTotal = clamp(toPositiveInteger(els.totalPagesInput.value, state.totalPages), 1, 100000);
      abortAllRequests();
      state.totalPages = nextTotal;
      state.requestEpoch += 1;
      state.cache.clear();
      state.pending.clear();
      state.notice = '';
      state.lastRequestText = '等待首次加载';
      syncTotalPageControls();
      refreshViewportHeight();
      const nextPage = clamp(state.currentPage, 1, state.totalPages);
      state.currentPage = nextPage;
      state.scrollTop = Math.max(0, (nextPage - 1) * state.pageHeight);
      render();
      window.requestAnimationFrame(() => scrollToPage(nextPage, false));
    }`
);

content = content.replace(
`    els.viewport.addEventListener('scroll', handleScroll, { passive: true });
    els.viewport.addEventListener('wheel', handleWheel, { passive: true });
    els.rangePage.addEventListener('input', (event) => scrollToPage(event.target.value, true));
    root.querySelector('[data-apply-total]').addEventListener('click', applyTotalPages);
    root.querySelector('[data-jump-input]').addEventListener('click', () => scrollToPage(els.jumpPageInput.value, false));
    root.querySelector('[data-clear-cache]').addEventListener('click', clearCache);
    root.querySelectorAll('[data-jump]').forEach((button) => button.addEventListener('click', () => scrollToPage(button.dataset.jump, false)));
    root.querySelectorAll('[data-nudge]').forEach((button) => button.addEventListener('click', () => nudgePage(Number(button.dataset.nudge))));
    window.addEventListener('resize', handleResize);

    refreshViewportHeight();
    loadPageWindow(state.currentPage, 1);
    render();`,
`    els.viewport.addEventListener('scroll', handleScroll, { passive: true });
    els.viewport.addEventListener('wheel', handleWheel, { passive: true });
    els.rangePage.addEventListener('input', (event) => scrollToPage(event.target.value, true));
    els.totalPagesInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') applyTotalPages();
    });
    root.addEventListener('click', (event) => {
      const target = event.target instanceof Element ? event.target.closest('button') : null;
      if (!target || !root.contains(target)) return;
      if (target.matches('[data-apply-total]')) applyTotalPages();
      else if (target.matches('[data-jump-input]')) scrollToPage(els.jumpPageInput.value, false);
      else if (target.matches('[data-clear-cache]')) clearCache();
      else if (target.matches('[data-jump-last]')) scrollToPage(state.totalPages, false);
      else if (target.matches('[data-jump]')) scrollToPage(target.dataset.jump, false);
      else if (target.matches('[data-nudge]')) nudgePage(Number(target.dataset.nudge));
    });
    window.addEventListener('resize', handleResize);

    refreshViewportHeight();
    syncTotalPageControls();
    loadPageWindow(state.currentPage, 1);
    render();`
);

fs.writeFileSync(target, content, 'utf8');
console.log('fixed total page application and delegated button handling');
