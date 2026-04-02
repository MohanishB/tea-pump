import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

export default function TeaPumpBadgeLogo({ title = "Tea Pump", ...props }: Props) {
  const red = "#E11D48";
  const beige = "#E7E0D3";
  const black = "#111111";

  // Badge-style logo inspired by your chosen image
  // (Vector recreation — clean + scalable)
  return (
    <svg viewBox="0 0 512 512" role="img" aria-label={title} {...props}>
      <title>{title}</title>

      {/* Outer ring */}
      <circle cx="256" cy="256" r="238" fill={beige} stroke={black} strokeWidth="10" />
      <circle cx="256" cy="256" r="214" fill={beige} stroke={black} strokeWidth="6" />

      {/* Red top and bottom arcs */}
      <path
        d="M256 58
           A198 198 0 0 1 454 256
           L410 256
           A154 154 0 0 0 256 102
           A154 154 0 0 0 102 256
           L58 256
           A198 198 0 0 1 256 58Z"
        fill={red}
      />
      <path
        d="M256 454
           A198 198 0 0 1 58 256
           L102 256
           A154 154 0 0 0 256 410
           A154 154 0 0 0 410 256
           L454 256
           A198 198 0 0 1 256 454Z"
        fill={red}
      />

      {/* Middle stripe */}
      <rect x="72" y="214" width="368" height="84" rx="18" fill={beige} stroke={black} strokeWidth="0" />

      {/* Brew strip (black) with white dividers */}
      <rect x="92" y="294" width="328" height="54" rx="12" fill={black} />
      <rect x="112" y="312" width="92" height="4" fill="#FFFFFF" opacity="0.9" />
      <rect x="308" y="312" width="92" height="4" fill="#FFFFFF" opacity="0.9" />

      {/* Text: curved top */}
      <defs>
        <path
          id="topArc"
          d="M96,256 A160,160 0 0 1 416,256"
        />
        <path
          id="botArc"
          d="M416,256 A160,160 0 0 1 96,256"
        />
      </defs>

      <text
        fill="#FFFFFF"
        fontFamily="Poppins, system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        fontWeight="800"
        fontSize="48"
        letterSpacing="3"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          TEA PUMP
        </textPath>
      </text>

      <text
        fill="#FFFFFF"
        fontFamily="Poppins, system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        fontWeight="800"
        fontSize="54"
        letterSpacing="6"
      >
        <textPath href="#botArc" startOffset="50%" textAnchor="middle">
          CAFE
        </textPath>
      </text>

      {/* Side words */}
      <text
        x="120"
        y="266"
        fill={black}
        fontFamily="Poppins, system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="1"
        textAnchor="middle"
      >
        FRESH
      </text>
      <text
        x="392"
        y="266"
        fill={black}
        fontFamily="Poppins, system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="1"
        textAnchor="middle"
      >
        DAILY
      </text>

      {/* BREW • BOOST • GO */}
      <text
        x="256"
        y="332"
        fill="#FFFFFF"
        fontFamily="Poppins, system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="1.5"
        textAnchor="middle"
      >
        BREW • BOOST • GO
      </text>

      {/* Cup (black) */}
      <g transform="translate(0, -6)">
        {/* Saucer */}
        <ellipse cx="238" cy="295" rx="70" ry="16" fill={black} opacity="0.95" />
        <ellipse cx="238" cy="290" rx="84" ry="18" fill={black} opacity="0.65" />

        {/* Cup body */}
        <path
          d="M190 175
             C182 215 182 255 198 280
             C214 306 262 310 282 278
             C300 250 302 210 292 176
             Z"
          fill={black}
        />
        {/* Cup rim */}
        <ellipse cx="242" cy="176" rx="72" ry="18" fill={black} />
        <ellipse cx="242" cy="176" rx="56" ry="12" fill={beige} opacity="0.22" />

        {/* Steam */}
        <path d="M238 132 C228 122 232 110 244 100" stroke={black} strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M262 132 C252 122 256 110 268 100" stroke={black} strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Nozzle as handle (red + black) */}
        <g transform="translate(300, 190) rotate(-12)">
          <path d="M0 0 C26 0 34 18 34 36 C34 56 18 70 0 70" stroke={black} strokeWidth="10" fill="none" strokeLinecap="round"/>
          <path d="M18 12 L54 24 L44 46 L10 34 Z" fill={red} stroke={black} strokeWidth="6" />
          <path d="M52 22 L78 10" stroke={black} strokeWidth="8" strokeLinecap="round"/>
          <path d="M72 7 L90 0" stroke={black} strokeWidth="6" strokeLinecap="round"/>
        </g>
      </g>
    </svg>
  );
}
