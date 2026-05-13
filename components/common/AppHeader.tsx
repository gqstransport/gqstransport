import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { AppHeaderNav } from "@/components/common/AppHeaderNav";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { HEADER_NAV_ENTRIES } from "@/lib/header-nav-config";
import type { ResolvedNavSection } from "@/lib/header-nav-config";

export async function AppHeader() {
  const t = await getTranslations("nav");
  const th = await getTranslations("header");
  const tMenu = await getTranslations("navMenu");

  const sections: ResolvedNavSection[] = HEADER_NAV_ENTRIES.map((entry) => {
    if (entry.kind === "link") {
      return { kind: "link", href: entry.href, label: t(entry.navKey) };
    }
    return {
      kind: "dropdown",
      id: entry.navKey,
      label: t(entry.navKey),
      indexHref: entry.indexHref,
      indexLabel: tMenu("viewAll"),
      items: entry.children.map((c) => ({
        href: c.href,
        label: tMenu(`${c.group}.${c.key}`),
      })),
    };
  });

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-white/10 bg-[var(--color-ui-topbar)] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2.5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium text-white/85">
            <a href={`tel:${th("phone").replace(/\s/g, "")}`} className="group flex items-center gap-2 transition hover:text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[color-mix(in_srgb,var(--color-accent-gold)_25%,transparent)] text-[var(--color-accent-gold)] ring-1 ring-[var(--color-accent-gold)]/35 transition group-hover:bg-[var(--color-accent-gold)]/20">
                <Phone className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
              </span>
              <span className="tracking-wide">{th("phone")}</span>
            </a>
            <a href={`mailto:${th("email")}`} className="group hidden items-center gap-2 transition hover:text-white sm:flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[color-mix(in_srgb,var(--color-accent-gold)_25%,transparent)] text-[var(--color-accent-gold)] ring-1 ring-[var(--color-accent-gold)]/35 transition group-hover:bg-[var(--color-accent-gold)]/20">
                <Mail className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
              </span>
              <span>{th("email")}</span>
            </a>
            <span className="hidden items-center gap-2 lg:inline-flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[color-mix(in_srgb,var(--color-accent-gold)_25%,transparent)] text-[var(--color-accent-gold)] ring-1 ring-[var(--color-accent-gold)]/35">
                <MapPin className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
              </span>
              <span>{th("location")}</span>
            </span>
          </div>
          <LanguageSwitcher
            className="flex items-center gap-1 rounded-full bg-black/20 p-0.5 ring-1 ring-white/10"
            inactiveClassName="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/75 transition hover:bg-white/10 hover:text-white"
            activeClassName="rounded-full bg-[var(--color-accent-gold)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary-navy)] shadow-sm"
          />
        </div>
      </div>

      <div className="border-b border-black/[0.06] bg-[var(--color-surface-card)] shadow-[0_1px_0_rgba(12,31,60,0.04)]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3.5 sm:gap-6 sm:px-6 sm:py-4 lg:px-8">
          <Link href="/" className="group flex min-w-0 max-w-[min(100%,16rem)] shrink-0 items-start gap-3 sm:max-w-md lg:max-w-lg">
            <span
              className="mt-0.5 hidden h-12 w-1 shrink-0 rounded-full bg-[var(--color-accent-gold)] shadow-[0_0_12px_rgba(226,184,68,0.35)] sm:block"
              aria-hidden
            />
            <span className="min-w-0 border-s-[3px] border-[var(--color-accent-gold)] ps-3 sm:border-s-0 sm:ps-0">
              <span className="font-heading text-2xl font-bold tracking-tight text-[var(--color-primary-navy)] transition group-hover:text-[var(--color-secondary-blue)] sm:text-[1.65rem]">
                {th("companyShort")}
              </span>
              <span className="mt-0.5 block text-[11px] font-semibold uppercase leading-snug tracking-wide text-[var(--color-secondary-blue)] sm:text-xs">
                {th("companyName")}
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-accent-gold)]">
                {th("tagline")}
              </span>
            </span>
          </Link>

          <AppHeaderNav
            sections={sections}
            quoteLabel={t("requestAQuote")}
            brand={{
              short: th("companyShort"),
              name: th("companyName"),
              tagline: th("tagline"),
            }}
            menuOpenLabel={th("openMenu")}
            menuCloseLabel={th("closeMenu")}
          />
        </div>
      </div>
    </header>
  );
}
