// Minimal line-art SVG icons matching the editorial reference.

const common = {
  width: 96,
  height: 96,
  viewBox: '0 0 96 96',
  fill: 'none',
  stroke: '#0a0a0a',
  strokeWidth: 1.25,
  xmlns: 'http://www.w3.org/2000/svg',
};

export function TargetIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="48" cy="48" r="30" />
      <circle cx="48" cy="48" r="19" />
      <circle cx="48" cy="48" r="8" />
      <circle cx="48" cy="48" r="2" fill="#e63329" stroke="#e63329" />
      <line x1="48" y1="6" x2="48" y2="90" stroke="#0a0a0a" strokeWidth="0.75" />
      <line x1="6" y1="48" x2="90" y2="48" stroke="#0a0a0a" strokeWidth="0.75" />
    </svg>
  );
}

export function VennIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="38" cy="40" r="22" />
      <circle cx="58" cy="40" r="22" />
      <circle cx="48" cy="58" r="22" />
    </svg>
  );
}

export function ChecklistIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="22" y="14" width="52" height="68" rx="3" />
      <path d="M30 34 l5 5 l9 -11" stroke="#e63329" strokeWidth="1.5" />
      <line x1="48" y1="35" x2="66" y2="35" />
      <path d="M30 54 l5 5 l9 -11" stroke="#e63329" strokeWidth="1.5" />
      <line x1="48" y1="55" x2="66" y2="55" />
      <path d="M30 74 l5 5 l9 -11" />
      <line x1="48" y1="75" x2="66" y2="75" />
    </svg>
  );
}

