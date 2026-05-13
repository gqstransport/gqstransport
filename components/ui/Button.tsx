import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[var(--color-primary-navy)] text-white hover:bg-[var(--color-secondary-blue)]",
  secondary: "bg-[var(--color-accent-gold)] text-[var(--color-primary-navy)] hover:opacity-90",
  ghost:
    "border border-white/40 bg-transparent text-white hover:border-[var(--color-accent-gold)] hover:text-[var(--color-accent-gold)]",
};

export function Button({ className, variant = "primary", type = "button", ...props }: Props) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
