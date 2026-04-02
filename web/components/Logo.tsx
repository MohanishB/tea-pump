import * as React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
  title?: string;
};

/**
 * A) Pump nozzle + tea drop
 */
export function LogoNozzleDrop({ className, title = "Tea Pump", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      {/* nozzle body */}
      <path
        d="M18 14c0-2.2 1.8-4 4-4h10c4.4 0 8 3.6 8 8v6c0 3.3 2.7 6 6 6h2c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4v-2c0-1.1-.9-2-2-2H24c-3.3 0-6-2.7-6-6V14Z"
        fill="currentColor"
      />
      {/* hose */}
      <path
        d="M18 30h-2c-3.3 0-6 2.7-6 6v6c0 6.6 5.4 12 12 12h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* nozzle tip cutout */}
      <path
        d="M44 22h6"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* tea drop */}
      <path
        d="M46 49c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-4.8 5.3-10.1 7.3-12a1 1 0 0 1 1.4 0c2 1.9 7.3 7.2 7.3 12Z"
        fill="#fff"
        opacity="0.92"
      />
      {/* drop highlight */}
      <path
        d="M36 46c-.6 1.2-.8 2.2-.8 3.1 0 1.9 1 3.7 2.5 4.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
}

/**
 * B) Fuel meter + tea cup
 */
export function LogoMeterCup({ className, title = "Tea Pump", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      {/* outer meter */}
      <path
        d="M32 10c12.2 0 22 9.8 22 22 0 8.3-4.6 15.6-11.4 19.4-2.9 1.6-6.2 2.6-9.8 2.6s-6.9-1-9.8-2.6C14.6 47.6 10 40.3 10 32 10 19.8 19.8 10 32 10Z"
        fill="currentColor"
      />
      {/* meter cutout */}
      <path
        d="M32 16c8.8 0 16 7.2 16 16 0 6.1-3.5 11.4-8.6 14-2.2 1.2-4.7 2-7.4 2s-5.2-.7-7.4-2C19.5 43.4 16 38.1 16 32c0-8.8 7.2-16 16-16Z"
        fill="#fff"
        opacity="0.92"
      />
      {/* needle */}
      <path
        d="M32 32l10-6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" />
      {/* tea cup */}
      <path
        d="M22 40h18c0 6-4.5 10-9 10s-9-4-9-10Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* cup handle */}
      <path
        d="M40 42h3c2.2 0 4 1.8 4 4s-1.8 4-4 4h-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* steam lines */}
      <path
        d="M26 22c0 3 3 3 3 6M32 22c0 3 3 3 3 6M38 22c0 3 3 3 3 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/**
 * C) TP monogram in pump-badge
 */
export function LogoTPBadge({ className, title = "Tea Pump", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      {/* badge */}
      <path
        d="M18 10h28a8 8 0 0 1 8 8v22a14 14 0 0 1-14 14H24A14 14 0 0 1 10 40V18a8 8 0 0 1 8-8Z"
        fill="currentColor"
      />
      {/* inner panel */}
      <path
        d="M20 16h24a6 6 0 0 1 6 6v16a12 12 0 0 1-12 12H26a12 12 0 0 1-12-12V22a6 6 0 0 1 6-6Z"
        fill="#fff"
        opacity="0.9"
      />
      {/* TP letters */}
      <path
        d="M23 25h18v5h-6v14h-6V30h-6v-5Z"
        fill="currentColor"
      />
      <path
        d="M43 25h6c4 0 7 3 7 7s-3 7-7 7h-1v5h-5V25Zm5 10h1c1.6 0 2.5-1.2 2.5-3s-.9-3-2.5-3h-1v6Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* tiny “fuel tick” */}
      <path
        d="M16 44h8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}
