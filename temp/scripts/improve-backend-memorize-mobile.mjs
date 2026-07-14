import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const pagePath = join(process.cwd(), 'src', 'pages', 'learn', 'backend-memorize.astro');
let content = readFileSync(pagePath, 'utf8');

const replacements = [
  [
    'class="memorize-shell mx-auto max-w-[1520px] px-4 py-8 sm:px-6 lg:px-8"',
    'class="memorize-shell mx-auto max-w-[1520px] px-3 py-4 sm:px-6 sm:py-8 lg:px-8"',
  ],
  [
    'class="mb-8 rounded-[1.75rem] border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/90 sm:p-8"',
    'class="mb-4 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/90 sm:mb-8 sm:rounded-[1.75rem] sm:p-8"',
  ],
  [
    'class="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl"',
    'class="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl"',
  ],
  [
    'class="grid grid-cols-3 gap-3"',
    'class="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3"',
  ],
  [
    'class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-slate-950"',
    'class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950 sm:block sm:rounded-2xl sm:py-4"',
  ],
  [
    'class="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 dark:border-emerald-500/20 dark:bg-emerald-500/10"',
    'class="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 dark:border-emerald-500/20 dark:bg-emerald-500/10 sm:block sm:rounded-2xl sm:py-4"',
  ],
  [
    'class="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 dark:border-amber-500/20 dark:bg-amber-500/10"',
    'class="flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-500/20 dark:bg-amber-500/10 sm:block sm:rounded-2xl sm:py-4"',
  ],
  [
    'class="grid items-start gap-6 xl:grid-cols-[280px_minmax(0,1fr)]"',
    'class="grid items-start gap-4 sm:gap-6 xl:grid-cols-[280px_minmax(0,1fr)]"',
  ],
  [
    'class="rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900"',
    'class="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:rounded-[1.5rem] sm:p-3"',
  ],
  [
    'class="directory-scroll flex gap-2 overflow-x-auto pb-1 xl:block xl:space-y-1 xl:overflow-visible"',
    'class="directory-scroll grid grid-cols-2 gap-2 xl:block xl:space-y-1 xl:overflow-visible"',
  ],
  [
    'class="directory-link group flex min-w-[220px] items-center gap-3 rounded-2xl px-3 py-3 text-left transition xl:min-w-0"',
    'class="directory-link group flex min-w-0 items-center gap-2 rounded-xl px-2.5 py-2.5 text-left transition sm:gap-3 sm:rounded-2xl sm:px-3 sm:py-3 xl:min-w-0"',
  ],
  [
    'class="min-w-0 space-y-6"',
    'class="min-w-0 space-y-4 sm:space-y-6"',
  ],
  [
    'class="scroll-mt-24 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"',
    'class="scroll-mt-20 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:scroll-mt-24 sm:rounded-[1.75rem]"',
  ],
  [
    'class="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-5 py-3 dark:border-slate-800 dark:bg-slate-950/60 sm:px-8"',
    'class="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/60 sm:px-8"',
  ],
  [
    'class="memorize-markdown prose prose-slate max-w-none px-5 py-7 dark:prose-invert sm:px-8 sm:py-10 lg:px-12"',
    'class="memorize-markdown prose prose-slate max-w-none overflow-hidden px-4 py-6 dark:prose-invert sm:px-8 sm:py-10 lg:px-12"',
  ],
  [
    'class="answer-modal fixed inset-0 z-[100] hidden items-center justify-center p-3 sm:p-6"',
    'class="answer-modal fixed inset-0 z-[100] hidden items-end justify-center p-0 sm:items-center sm:p-6"',
  ],
  [
    'class="answer-panel relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"',
    'class="answer-panel relative z-10 flex max-h-[94dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-[1.5rem] border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 sm:max-h-[92vh] sm:rounded-[1.75rem]"',
  ],
  [
    'class="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 dark:border-slate-800 sm:px-7"',
    'class="flex items-start justify-between gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-800 sm:gap-4 sm:px-7 sm:py-4"',
  ],
  [
    'class="mt-1 pr-4 text-xl font-black text-slate-950 dark:text-white sm:text-2xl"',
    'class="mt-1 break-words pr-2 text-lg font-black leading-snug text-slate-950 dark:text-white sm:pr-4 sm:text-2xl"',
  ],
  [
    'class="mt-2 truncate text-xs text-slate-400"',
    'class="mt-2 break-all text-[11px] leading-5 text-slate-400 sm:text-xs"',
  ],
  [
    'class="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8"',
    'class="min-w-0 overflow-y-auto overscroll-contain px-4 py-5 sm:px-8 sm:py-8"',
  ],
];

for (const [from, to] of replacements) {
  if (!content.includes(from)) {
    throw new Error(`Expected snippet not found:\n${from}`);
  }
  content = content.replace(from, to);
}

const marker = '  @media (max-width: 1279px) { .directory-scroll { scrollbar-width: thin; } }';
const mobileCss = `  @media (max-width: 639px) {
    :global(.memorize-markdown),
    :global(.memorize-answer) {
      font-size: 0.94rem;
      line-height: 1.72;
      overflow-wrap: anywhere;
    }

    :global(.memorize-markdown > h1:first-child) {
      font-size: 1.65rem;
      line-height: 1.18;
    }

    :global(.memorize-markdown h2),
    :global(.memorize-answer h2) {
      margin-top: 1.75rem;
      font-size: 1.08rem;
    }

    :global(.memorize-markdown pre),
    :global(.memorize-answer pre) {
      max-width: 100%;
      overflow-x: auto;
      border-radius: 0.85rem;
      font-size: 0.78rem;
    }

    :global(.memorize-markdown table),
    :global(.memorize-answer table) {
      display: block;
      width: 100%;
      min-width: 0;
      max-width: 100%;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }

    :global(.memorize-markdown table th),
    :global(.memorize-markdown table td),
    :global(.memorize-answer table th),
    :global(.memorize-answer table td) {
      padding: 0.62rem 0.72rem;
    }

    :global(.question-trigger) {
      padding: 0.18rem 0.34rem;
      line-height: 1.65;
      touch-action: manipulation;
    }

    .directory-link.is-active {
      box-shadow: inset 0 -3px 0 rgb(16 185 129);
    }
  }

  ${marker}`;

if (!content.includes(marker)) {
  throw new Error('Expected CSS marker not found.');
}
content = content.replace(marker, mobileCss);

writeFileSync(pagePath, content, 'utf8');
console.log('Improved mobile layout for backend memorization page.');
