const fs = require('fs');
const path = require('path');

const target = path.join(process.cwd(), 'src/pages/lab/vue-virtual-card-scroll.astro');
let content = fs.readFileSync(target, 'utf8');

// Remove custom visual scrollbar DOM.
content = content.replace(
`          <div class="viewport" data-viewport>
            <div class="spacer" data-spacer></div>
            <div data-pages></div>
          </div>
          <div class="jump-scrollbar" data-jump-scrollbar aria-label="按位置跳转的虚拟滚动条" role="scrollbar" aria-orientation="vertical" aria-valuemin="1" aria-valuemax="1000" aria-valuenow="1" tabindex="0">
            <div class="jump-scrollbar-track" data-jump-track>
              <div class="jump-scrollbar-thumb" data-jump-thumb></div>
            </div>
          </div>`,
`          <div class="viewport" data-viewport>
            <div class="spacer" data-spacer></div>
            <div data-pages></div>
          </div>`
);

// Remove custom scrollbar styles, keep viewport-wrap.
content = content.replace(
`  .viewport { position: relative; height: min(68vh, 660px); min-height: 460px; overflow: auto; background: var(--viewport-bg); scrollbar-gutter: stable; }
  .viewport-wrap { position: relative; }
  .jump-scrollbar { position: absolute; top: 52px; right: 6px; bottom: 10px; z-index: 6; width: 18px; display: flex; justify-content: center; pointer-events: none; }
  .jump-scrollbar-track { position: relative; width: 10px; height: 100%; border: 1px solid var(--line); border-radius: 999px; background: color-mix(in srgb, var(--surface-soft) 78%, transparent); box-shadow: inset 0 0 0 1px var(--soft-shadow); pointer-events: auto; cursor: pointer; }
  .jump-scrollbar-track:hover { border-color: var(--accent); background: var(--button-hover); }
  .jump-scrollbar-thumb { position: absolute; left: 1px; right: 1px; top: 0; min-height: 34px; border-radius: 999px; background: linear-gradient(180deg, var(--accent-strong), var(--accent)); box-shadow: 0 6px 16px var(--hud-shadow); cursor: grab; touch-action: none; }
  .jump-scrollbar-thumb:active { cursor: grabbing; }
  .jump-scrollbar:focus-visible .jump-scrollbar-track { outline: 3px solid color-mix(in srgb, var(--accent) 35%, transparent); outline-offset: 3px; }`,
`  .viewport { position: relative; height: min(68vh, 660px); min-height: 460px; overflow: auto; background: var(--viewport-bg); scrollbar-gutter: stable; }
  .viewport-wrap { position: relative; }`
);

// Remove custom scrollbar element references.
content = content.replace(
`      viewport: root.querySelector('[data-viewport]'),
      spacer: root.querySelector('[data-spacer]'),
      pages: root.querySelector('[data-pages]'),
      jumpScrollbar: root.querySelector('[data-jump-scrollbar]'),
      jumpTrack: root.querySelector('[data-jump-track]'),
      jumpThumb: root.querySelector('[data-jump-thumb]'),`,
`      viewport: root.querySelector('[data-viewport]'),
      spacer: root.querySelector('[data-spacer]'),
      pages: root.querySelector('[data-pages]'),`
);

// Remove custom dragging state.
content = content.replace(
`      timers: {},
      isJumpThumbDragging: false,
      jumpThumbGrabOffset: 0,
    };`,
`      timers: {},
    };`
);

// Replace helper block with native scrollbar helpers.
content = content.replace(
`    function nudgePage(delta) { scrollToPage(clamp(state.currentPage + delta, 1, state.totalPages), false); }
    function maxScrollTop() {
      return Math.max(0, scrollSpacerHeight() - state.viewportHeight);
    }
    function scrollToRatio(ratio, keepDragging = false) {
      const maxTop = maxScrollTop();
      const targetTop = clamp(ratio, 0, 1) * maxTop;
      const targetPage = pageFromScroll(targetTop);
      scrollToPage(targetPage, keepDragging);
    }
    function pageFromTrackClientY(clientY, thumbOffset = 0) {
      const rect = els.jumpTrack.getBoundingClientRect();
      const thumbHeight = els.jumpThumb.offsetHeight || 34;
      const travel = Math.max(1, rect.height - thumbHeight);
      const y = clamp(clientY - rect.top - thumbOffset, 0, travel);
      const ratio = y / travel;
      return pageFromScroll(ratio * maxScrollTop());
    }
    function jumpToTrackClientY(clientY, thumbOffset = 0, keepDragging = false) {
      const page = pageFromTrackClientY(clientY, thumbOffset);
      scrollToPage(page, keepDragging);
    }
    function updateJumpScrollbar() {
      if (!els.jumpTrack || !els.jumpThumb || !els.jumpScrollbar) return;
      const totalHeight = Math.max(1, scrollSpacerHeight());
      const trackHeight = Math.max(1, els.jumpTrack.clientHeight);
      const maxTop = maxScrollTop();
      const thumbHeight = clamp((state.viewportHeight / totalHeight) * trackHeight, 34, trackHeight);
      const travel = Math.max(0, trackHeight - thumbHeight);
      const top = maxTop > 0 ? (state.scrollTop / maxTop) * travel : 0;
      els.jumpThumb.style.height = \`\${thumbHeight}px\`; 
      els.jumpThumb.style.transform = \`translateY(\${top}px)\`;
      els.jumpScrollbar.setAttribute('aria-valuemax', String(state.totalPages));
      els.jumpScrollbar.setAttribute('aria-valuenow', String(state.currentPage));
    }
    function handleWheel(event) {`,
`    function nudgePage(delta) { scrollToPage(clamp(state.currentPage + delta, 1, state.totalPages), false); }
    function maxScrollTop() {
      return Math.max(0, scrollSpacerHeight() - state.viewportHeight);
    }
    function handleNativeScrollbarPointerDown(event) {
      if (event.button !== 0) return;
      const scrollbarWidth = els.viewport.offsetWidth - els.viewport.clientWidth;
      if (scrollbarWidth <= 0) return;
      const rect = els.viewport.getBoundingClientRect();
      const isVerticalScrollbar = event.clientX >= rect.right - scrollbarWidth && event.clientX <= rect.right;
      if (!isVerticalScrollbar) return;

      const maxTop = maxScrollTop();
      if (maxTop <= 0) return;

      const viewportHeight = els.viewport.clientHeight;
      const scrollHeight = Math.max(1, els.viewport.scrollHeight);
      const thumbHeight = clamp((viewportHeight / scrollHeight) * viewportHeight, 24, viewportHeight);
      const thumbTravel = Math.max(1, viewportHeight - thumbHeight);
      const thumbTop = (els.viewport.scrollTop / maxTop) * thumbTravel;
      const y = clamp(event.clientY - rect.top, 0, viewportHeight);
      const clickedOnNativeThumb = y >= thumbTop && y <= thumbTop + thumbHeight;

      // 保留拖动原生滑块的默认行为；只把点击轨道改成“按位置直接跳转”。
      if (clickedOnNativeThumb) return;

      event.preventDefault();
      event.stopPropagation();
      const ratio = clamp(y / viewportHeight, 0, 1);
      const targetPage = pageFromScroll(ratio * maxTop);
      scrollToPage(targetPage, false);
    }
    function handleWheel(event) {`
);

// Remove updateJumpScrollbar call from renderStatus.
content = content.replace(
`      els.lastRequest.textContent = state.lastRequestText;
      els.notice.textContent = state.notice;
      updateJumpScrollbar();
      renderChipList(els.cachedPages, Array.from(state.cache.keys()).sort((a, b) => a - b));`,
`      els.lastRequest.textContent = state.lastRequestText;
      els.notice.textContent = state.notice;
      renderChipList(els.cachedPages, Array.from(state.cache.keys()).sort((a, b) => a - b));`
);

// Remove custom handlers block.
content = content.replace(
`    function handleJumpTrackPointerDown(event) {
      if (event.button !== 0) return;
      event.preventDefault();
      const isThumb = event.target === els.jumpThumb;
      state.isJumpThumbDragging = true;
      state.jumpThumbGrabOffset = isThumb ? event.clientY - els.jumpThumb.getBoundingClientRect().top : (els.jumpThumb.offsetHeight || 34) / 2;
      jumpToTrackClientY(event.clientY, state.jumpThumbGrabOffset, true);
      els.jumpTrack.setPointerCapture?.(event.pointerId);
    }
    function handleJumpTrackPointerMove(event) {
      if (!state.isJumpThumbDragging) return;
      event.preventDefault();
      jumpToTrackClientY(event.clientY, state.jumpThumbGrabOffset, true);
    }
    function handleJumpTrackPointerUp(event) {
      if (!state.isJumpThumbDragging) return;
      event.preventDefault();
      state.isJumpThumbDragging = false;
      els.jumpTrack.releasePointerCapture?.(event.pointerId);
      scrollToPage(state.currentPage, false);
    }
    function handleJumpScrollbarKeydown(event) {
      if (event.key === 'Home') { event.preventDefault(); scrollToPage(1, false); }
      else if (event.key === 'End') { event.preventDefault(); scrollToPage(state.totalPages, false); }
      else if (event.key === 'PageUp') { event.preventDefault(); nudgePage(-10); }
      else if (event.key === 'PageDown') { event.preventDefault(); nudgePage(10); }
      else if (event.key === 'ArrowUp') { event.preventDefault(); nudgePage(-1); }
      else if (event.key === 'ArrowDown') { event.preventDefault(); nudgePage(1); }
    }
    function handleResize() {`,
`    function handleResize() {`
);

// Replace event listeners.
content = content.replace(
`    els.viewport.addEventListener('scroll', handleScroll, { passive: true });
    els.viewport.addEventListener('wheel', handleWheel, { passive: true });
    els.rangePage.addEventListener('input', (event) => scrollToPage(event.target.value, true));
    els.jumpTrack.addEventListener('pointerdown', handleJumpTrackPointerDown);
    els.jumpTrack.addEventListener('pointermove', handleJumpTrackPointerMove);
    els.jumpTrack.addEventListener('pointerup', handleJumpTrackPointerUp);
    els.jumpTrack.addEventListener('pointercancel', handleJumpTrackPointerUp);
    els.jumpScrollbar.addEventListener('keydown', handleJumpScrollbarKeydown);`,
`    els.viewport.addEventListener('pointerdown', handleNativeScrollbarPointerDown, { capture: true });
    els.viewport.addEventListener('scroll', handleScroll, { passive: true });
    els.viewport.addEventListener('wheel', handleWheel, { passive: true });
    els.rangePage.addEventListener('input', (event) => scrollToPage(event.target.value, true));`
);

fs.writeFileSync(target, content, 'utf8');
console.log('removed custom scrollbar and implemented direct jump on native scrollbar track');
