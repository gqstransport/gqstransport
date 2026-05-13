"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

const locales = [
  { code: "en" as const, label: "languageEnglish" as const },
  { code: "ar" as const, label: "languageArabic" as const },
];

type Props = {
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
};

export function LanguageSwitcher({
  className,
  activeClassName,
  inactiveClassName,
}: Props) {
  const pathname = usePathname();
  const active = useLocale();
  const t = useTranslations("common");

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {locales.map(({ code, label }) => {
        const isActive = active === code;
        return (
          <Link
            key={code}
            href={pathname ?? "/"}
            locale={code}
            prefetch={false}
            className={cn(
              isActive
                ? (activeClassName ??
                    "rounded-sm bg-[var(--color-accent-gold)] px-2 py-1 text-xs font-medium uppercase tracking-wide text-[var(--color-primary-navy)]")
                : (inactiveClassName ??
                    "rounded-sm px-2 py-1 text-xs font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white"),
            )}
          >
            {t(label)}
          </Link>
        );
      })}
    </div>
  );
}
