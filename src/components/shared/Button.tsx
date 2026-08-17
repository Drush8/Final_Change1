import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  icon?: boolean;
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        px-8
        py-3.5
        text-lg
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:hover:translate-y-0
        disabled:hover:scale-100

        ${
          variant === "primary"
            ? "bg-[#D4A63A] text-[#081D3A] hover:bg-[#E5B94B]"
            : "border border-[#D4A63A] bg-transparent text-[#D4A63A]"
        }

        ${className}
      `}
    >
      {children}
    </button>
  );
}