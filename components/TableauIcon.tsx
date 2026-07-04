import type { SVGProps } from 'react';

type TableauIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export default function TableauIcon({ size = 24, ...props }: TableauIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 3v4" />
      <path d="M10 5h4" />
      <path d="M12 17v4" />
      <path d="M10 19h4" />
      <path d="M3 12h4" />
      <path d="M5 10v4" />
      <path d="M17 12h4" />
      <path d="M19 10v4" />
      <path d="M8 8l2.8 2.8" />
      <path d="M10.8 8L8 10.8" />
      <path d="M13.2 13.2l2.8 2.8" />
      <path d="M16 13.2L13.2 16" />
      <path d="M13.2 10.8L16 8" />
      <path d="M13.2 8l2.8 2.8" />
      <path d="M8 16l2.8-2.8" />
      <path d="M8 13.2l2.8 2.8" />
    </svg>
  );
}
