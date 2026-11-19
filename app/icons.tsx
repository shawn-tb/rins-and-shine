type P = { size?: number; className?: string; stroke?: string; width?: number };

function S({
  size = 24,
  className = "",
  stroke = "currentColor",
  width = 2,
  children,
}: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function Flame({ size = 34, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      aria-hidden
    >
      <g fill="currentColor">
        <path d="M9 36 C3 30 5 24 9 19 C12 15 12 11 9 7 C16 11 17 17 13 23 C10 28 11 32 13 36 Z" />
        <path d="M19 37 C12 30 14 22 19 16 C23 11 23 6 20 1 C28 6 29 14 24 21 C20 27 20 32 22 37 Z" />
        <path d="M29 36 C24 30 26 25 29 21 C32 17 32 14 30 10 C36 14 37 19 34 24 C31 28 31 32 33 36 Z" />
      </g>
    </svg>
  );
}

export const Shield = (p: P) => (
  <S {...p}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </S>
);

export const Grid = (p: P) => (
  <S {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
  </S>
);

export const Timer = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l3 2M9 2h6" />
  </S>
);

export const Droplet = (p: P) => (
  <S {...p}>
    <path d="M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z" />
  </S>
);

export const Refresh = (p: P) => (
  <S {...p}>
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <path d="M21 4v5h-5" />
  </S>
);

export const Target = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
  </S>
);

export const Tick = (p: P) => (
  <S width={3} {...p}>
    <path d="M5 12l5 5 9-10" />
  </S>
);

export const Weave = (p: P) => (
  <S {...p}>
    <path d="M3 21L21 3M3 15l12-12M9 21L21 9M3 9l6-6M15 21l6-6" />
  </S>
);

export const Layers = (p: P) => (
  <S {...p}>
    <path d="M12 2l9 5-9 5-9-5z" />
    <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
  </S>
);

export const Hex = (p: P) => (
  <S {...p}>
    <path d="M12 2l8.7 5v10L12 22l-8.7-5V7z" />
    <circle cx="12" cy="12" r="3" />
  </S>
);

export const GridLarge = (p: P) => (
  <S {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 7h.01M12 7h.01M17 7h.01M7 12h.01M12 12h.01M17 12h.01M7 17h.01M12 17h.01M17 17h.01" />
  </S>
);

export const Pin = (p: P) => (
  <S {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </S>
);
