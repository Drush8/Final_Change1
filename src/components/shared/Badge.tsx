import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Badge({
  children,
}: Props) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-[#D4A63A]/30
      bg-[#FFF8E8]
      px-5
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[3px]
      text-[#D4A63A]
    "
    >
      {children}
    </span>
  );
}