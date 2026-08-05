import { cn } from "@/lib/utils";

const ICONS = {
  ibm: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className="h-7 w-7">
      <rect x="6" y="10" width="36" height="4" rx="1" fill="#38BDF8" />
      <rect x="10" y="18" width="28" height="4" rx="1" fill="#38BDF8" opacity="0.8" />
      <rect x="8" y="26" width="32" height="4" rx="1" fill="#38BDF8" opacity="0.65" />
      <rect x="12" y="34" width="24" height="4" rx="1" fill="#38BDF8" opacity="0.5" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className="h-7 w-7">
      <path
        d="M10 30c6 5 14 8 28 4"
        stroke="#F97316"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 14h6l2 12h-4l-.5-3h-3l-.5 3h-4l4-12zm4.2 6.5h2l-.7-4.2-.6 4.2h-0.7zM28 14h4c3 0 5 1.6 5 4.2 0 2.8-2.2 4.3-5.2 4.3H32v5h-4V14zm4 5.5h.8c1.2 0 2-.6 2-1.5s-.7-1.5-1.9-1.5H32v3z"
        fill="#F97316"
      />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className="h-7 w-7">
      <circle cx="24" cy="24" r="7" stroke="#38BDF8" strokeWidth="2.2" />
      <circle cx="24" cy="10" r="3" fill="#38BDF8" />
      <circle cx="24" cy="38" r="3" fill="#F97316" />
      <circle cx="10" cy="24" r="3" fill="#38BDF8" opacity="0.7" />
      <circle cx="38" cy="24" r="3" fill="#F97316" opacity="0.8" />
      <path d="M24 13v4M24 31v4M13 24h4M31 24h4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    </svg>
  ),
} as const;

export type CertificateIconKey = keyof typeof ICONS;

interface CertificateIconProps {
  name: CertificateIconKey;
  className?: string;
}

export function CertificateIcon({ name, className }: CertificateIconProps) {
  return (
    <div
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.02]",
        className
      )}
      aria-hidden
    >
      {ICONS[name]}
    </div>
  );
}
