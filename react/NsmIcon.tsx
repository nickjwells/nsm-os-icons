// The NSM icon set: 19 hand-drawn outline icons on one 24 x 24 grid.
// Import ./nsm-icons.css once in your app. The hover motion lives there and is triggered by a
// parent with class `nsm-icon-host` (or by hovering the icon), so the icons hold no state.

import type { CSSProperties, ReactElement } from "react";

export type NsmIconName = "home" | "dashboard" | "packaging" | "production" | "keystone" | "inspiration" | "network" | "improvements" | "tracking" | "requests" | "prints" | "updates" | "settings" | "collapse" | "sun" | "moon" | "stages" | "more" | "macro";

export type NsmIconProps = {
  name: NsmIconName;
  size?: number;
  className?: string;
  /** Mirror the icon, for the sidebar handle when the sidebar is collapsed. */
  flip?: boolean;
};

const PARTS: Record<NsmIconName, ReactElement> = {
  home: (
    <>
      <path d="M3.5 11.5 11.1 5a1.4 1.4 0 0 1 1.8 0l7.6 6.5"/>
      <path d="M5.75 9.75V18.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2V9.75"/>
      <path className="nsm-home-glow nsm-acc nsm-hide-rest" d="M9.75 20.5V15.5a2.25 2.25 0 0 1 4.5 0V20.5Z"/>
      <path className="nsm-home-door" d="M9.75 20.5V15.5a2.25 2.25 0 0 1 4.5 0V20.5"/>
    </>
  ),
  dashboard: (
    <>
      <line className="nsm-dashboard-bar nsm-dashboard-bar1" strokeWidth="2.9" x1="5.5" y1="19" x2="5.5" y2="15.5"/>
      <line className="nsm-dashboard-bar nsm-dashboard-bar2" strokeWidth="2.9" x1="12" y1="19" x2="12" y2="11.5"/>
      <line className="nsm-dashboard-bar nsm-dashboard-bar3" strokeWidth="2.9" x1="18.5" y1="19" x2="18.5" y2="8.5"/>
      <circle className="nsm-dashboard-dot nsm-acc" cx="18.5" cy="3.4" r="1.1"/>
    </>
  ),
  packaging: (
    <>
      <path d="M5.5 9v9.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V9"/>
      <circle className="nsm-dot" cx="9.25" cy="14.3" r=".95"/>
      <circle className="nsm-dot" cx="14.75" cy="14.3" r=".95"/>
      <path d="M9.6 17.1q2.4 2 4.8 0"/>
      <path className="nsm-packaging-spark nsm-acc nsm-hide-rest" d="M12 9.1 12.75 10.05 13.7 10.8 12.75 11.55 12 12.5 11.25 11.55 10.3 10.8 11.25 10.05Z"/>
      <rect className="nsm-packaging-lid" x="3.5" y="5.5" width="17" height="3.5" rx="1.25"/>
    </>
  ),
  production: (
    <>
      <path d="M4 9.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.5"/>
      <path className="nsm-production-play nsm-acc" d="M10.75 12.9v4.2l3.6-2.1z"/>
      <g className="nsm-production-stick"><rect x="4" y="5.5" width="16" height="4" rx="1.25"/>
      <path d="M8 9.5l2.25-4M13.5 9.5l2.25-4"/></g>
    </>
  ),
  keystone: (
    <>
      <path d="M4.5 20.5V12a7.5 7.5 0 0 1 15 0v8.5"/>
      <path className="nsm-keystone-stone nsm-acc" d="M10.55 5.6h2.9l.6 3.5h-4.1z"/>
    </>
  ),
  inspiration: (
    <>
      <path className="nsm-inspiration-star" d="M11.6 4.3L13.89 9.74L19.78 10.24L15.31 14.11L16.65 19.86L11.6 16.8L6.55 19.86L7.89 14.11L3.42 10.24L9.31 9.74Z"/>
      <path className="nsm-inspiration-spark nsm-acc" d="M19.4 2.6 19.95 3.85 21.2 4.4 19.95 4.95 19.4 6.2 18.85 4.95 17.6 4.4 18.85 3.85Z"/>
    </>
  ),
  network: (
    <>
      <path d="M9.67 9.87L6.98 7.18M14.33 9.87L17.02 7.18M12 15.5L12 17.2"/>
      <circle className="nsm-network-hub nsm-acc" cx="12" cy="12.2" r="2.6"/>
      <circle className="nsm-network-sat nsm-network-sat1" cx="5" cy="5.2" r="2.1"/>
      <circle className="nsm-network-sat nsm-network-sat2" cx="19" cy="5.2" r="2.1"/>
      <circle className="nsm-network-sat nsm-network-sat3" cx="12" cy="20" r="2.1"/>
    </>
  ),
  improvements: (
    <>
      <path d="M4 6.5h16M4 12h16M4 17.5h16"/>
      <circle className="nsm-improvements-k nsm-improvements-k1 nsm-dot" cx="15.5" cy="6.5" r="2.15"/>
      <circle className="nsm-improvements-k nsm-improvements-k2 nsm-acc" cx="8.5" cy="12" r="2.15"/>
      <circle className="nsm-improvements-k nsm-improvements-k3 nsm-dot" cx="13.5" cy="17.5" r="2.15"/>
    </>
  ),
  tracking: (
    <>
      <g transform="rotate(-45 12 12)">
      <rect className="nsm-tracking-a" x="3" y="8.25" width="10.5" height="7.5" rx="3.75"/>
      <rect className="nsm-tracking-b nsm-acc-s" x="10.5" y="8.25" width="10.5" height="7.5" rx="3.75"/></g>
    </>
  ),
  requests: (
    <>
      <path d="M6 4h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 16h-6.25l-4.1 3.7a.6.6 0 0 1-1-.45V16H6a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 6 4z"/>
      <path className="nsm-requests-plus nsm-acc-s" d="M12 7.5v5.5M9.25 10.25h5.5"/>
    </>
  ),
  prints: (
    <>
      <path d="M12 3.5 19.5 7.75v8.5L12 20.5l-7.5-4.25v-8.5z"/>
      <path className="nsm-prints-inner nsm-acc-s" pathLength="1" d="M4.5 7.75 12 12l7.5-4.25M12 12v8.5"/>
    </>
  ),
  updates: (
    <>
      <g className="nsm-updates-bell"><path d="M6 16V10.5a6 6 0 0 1 12 0V16l1.7 2.25H4.3z"/><path d="M12 3.1v1.4"/></g>
      <circle className="nsm-updates-clap nsm-acc" cx="12" cy="21" r="1.15"/>
    </>
  ),
  settings: (
    <>
      <path className="nsm-settings-gear" d="M9.92 5.21L10.37 2.74L13.63 2.74L14.08 5.21L15.33 5.73L17.39 4.3L19.7 6.61L18.27 8.67L18.79 9.92L21.26 10.37L21.26 13.63L18.79 14.08L18.27 15.33L19.7 17.39L17.39 19.7L15.33 18.27L14.08 18.79L13.63 21.26L10.37 21.26L9.92 18.79L8.67 18.27L6.61 19.7L4.3 17.39L5.73 15.33L5.21 14.08L2.74 13.63L2.74 10.37L5.21 9.92L5.73 8.67L4.3 6.61L6.61 4.3L8.67 5.73Z"/>
      <circle className="nsm-acc-s" cx="12" cy="12" r="2.6"/>
    </>
  ),
  collapse: (
    <>
      <path className="nsm-acc-s" d="M5.5 6.5v11"/>
      <path className="nsm-collapse-chev" d="M15.75 7.25 11 12l4.75 4.75"/>
    </>
  ),
  sun: (
    <>
      <path className="nsm-sun-rays" d="M12 5.1L12 2.7M16.88 7.12L18.58 5.42M18.9 12L21.3 12M16.88 16.88L18.58 18.58M12 18.9L12 21.3M7.12 16.88L5.42 18.58M5.1 12L2.7 12M7.12 7.12L5.42 5.42"/>
      <circle className="nsm-sun-core nsm-acc-s" cx="12" cy="12" r="3.6"/>
    </>
  ),
  moon: (
    <>
      <path className="nsm-moon-crescent" d="M20.2 13.9A8.6 8.6 0 1 1 10.1 3.8a7.4 7.4 0 0 0 10.1 10.1z"/>
      <circle className="nsm-moon-star nsm-moon-star1 nsm-acc" cx="17.6" cy="5.4" r=".95"/>
      <circle className="nsm-moon-star nsm-moon-star2 nsm-acc" cx="20.4" cy="9.4" r=".65"/>
    </>
  ),
  stages: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5"/>
      <path d="M9 4v16M15 4v16"/>
      <rect className="nsm-stages-card nsm-acc" x="4.7" y="6.6" width="2.6" height="2.6" rx=".8"/>
    </>
  ),
  more: (
    <>
      <circle className="nsm-more-d nsm-more-d1 nsm-dot" cx="5" cy="12" r="1.9"/>
      <circle className="nsm-more-d nsm-more-d2 nsm-acc" cx="12" cy="12" r="1.9"/>
      <circle className="nsm-more-d nsm-more-d3 nsm-dot" cx="19" cy="12" r="1.9"/>
    </>
  ),
  macro: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2"/>
      <rect className="nsm-macro-tr nsm-acc-s" x="13.5" y="3.5" width="7" height="7" rx="2"/>
      <rect x="3.5" y="13.5" width="7" height="7" rx="2"/>
      <rect className="nsm-macro-br" x="13.5" y="13.5" width="7" height="7" rx="2"/>
    </>
  ),
};

export function NsmIcon({ name, size = 16, className, flip }: NsmIconProps) {
  return (
    <svg
      className={className ? `nsm-icon ${className}` : "nsm-icon"}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-flip={flip ? "" : undefined}
      style={{ "--nsm-sw": `${(1.75 * size) / 24}px` } as CSSProperties}
    >
      {PARTS[name]}
    </svg>
  );
}
