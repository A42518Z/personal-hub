const fs = require('fs');
const path = require('path');

const target = path.join(process.cwd(), 'src/pages/lab/vue-virtual-card-scroll.astro');
let content = fs.readFileSync(target, 'utf8');

const replacements = [
  ['    --viewport-bg: #020617;\n    --page-bg: #0b1220;\n    --surface-card: #172033;', '    --viewport-bg: #0b1120;\n    --page-bg: #172033;\n    --surface-card: #243247;'],
  ['    --line: #243247;\n    --line-strong: #334155;', '    --line: #3f5068;\n    --line-strong: #64748b;'],
  ['  .page-block {', '  .lab-virtual-card :global(.page-block) {'],
  ['  .page-inner {', '  .lab-virtual-card :global(.page-inner) {'],
  ['  .page-meta {', '  .lab-virtual-card :global(.page-meta) {'],
  ['  .page-start {', '  .lab-virtual-card :global(.page-start) {'],
  ['  .page-start span {', '  .lab-virtual-card :global(.page-start span) {'],
  ['  .page-start strong {', '  .lab-virtual-card :global(.page-start strong) {'],
  ['  .card-grid {', '  .lab-virtual-card :global(.card-grid) {'],
  ['  .data-card {', '  .lab-virtual-card :global(.data-card) {'],
  ['  .data-card:nth-child(3n + 2) {', '  .lab-virtual-card :global(.data-card:nth-child(3n + 2)) {'],
  ['  .data-card:nth-child(3n) {', '  .lab-virtual-card :global(.data-card:nth-child(3n)) {'],
  ['  .card-top, .card-bottom {', '  .lab-virtual-card :global(.card-top), .lab-virtual-card :global(.card-bottom) {'],
  ['  .card-index {', '  .lab-virtual-card :global(.card-index) {'],
  ['  .card-tag {', '  .lab-virtual-card :global(.card-tag) {'],
  ['  .card-title {', '  .lab-virtual-card :global(.card-title) {'],
  ['  .card-note {', '  .lab-virtual-card :global(.card-note) {'],
  ['  .card-bottom {', '  .lab-virtual-card :global(.card-bottom) {'],
  ['  .card-bottom strong {', '  .lab-virtual-card :global(.card-bottom strong) {'],
  ['  .skeleton-line {', '  .lab-virtual-card :global(.skeleton-line) {'],
  ['  .skeleton-line.short {', '  .lab-virtual-card :global(.skeleton-line.short) {'],
  ['  .skeleton-line.medium {', '  .lab-virtual-card :global(.skeleton-line.medium) {'],
  ['  .chip {', '  .lab-virtual-card :global(.chip) {'],
  ['  .chip.pending {', '  .lab-virtual-card :global(.chip.pending) {'],
];

for (const [from, to] of replacements) {
  if (!content.includes(from)) {
    console.warn(`pattern not found: ${from}`);
  }
  content = content.split(from).join(to);
}

fs.writeFileSync(target, content, 'utf8');
console.log('fixed dynamic innerHTML classes with Astro :global selectors and improved dark contrast');
