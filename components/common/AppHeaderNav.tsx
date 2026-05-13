"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import type { ResolvedNavDropdown, ResolvedNavSection } from "@/lib/header-nav-config";

type BrandCopy = {
  short: string;
  name: string;
  tagline: string;
};

type Props = {
  sections: ResolvedNavSection[];
  quoteLabel: string;
  brand: BrandCopy;
  menuOpenLabel: string;
  menuCloseLabel: string;
};

function isRouteActive(pathname: string | null, href: string) {
  const p = pathname ?? "/";
  if (href === "/") return p === "/" || p === "";
  return p === href || p.startsWith(`${href}/`);
}

function isDropdownActive(pathname: string | null, d: ResolvedNavDropdown) {
  if (isRouteActive(pathname, d.indexHref)) return true;
  return d.items.some((item) => isRouteActive(pathname, item.href));
}

export function AppHeaderNav({ sections, quoteLabel, brand, menuOpenLabel, menuCloseLabel }: Props) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [mobileAccordionId, setMobileAccordionId] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const setDropdownRef = useCallback((id: string) => {
    return (el: HTMLDivElement | null) => {
      dropdownRefs.current[id] = el;
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdownId(null);
    setMobileAccordionId(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (openDropdownId === null) return;
    const onDoc = (e: MouseEvent) => {
      const el = dropdownRefs.current[openDropdownId];
      if (el && !el.contains(e.target as Node)) {
        setOpenDropdownId(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdownId(null);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDropdownId]);

  return (
    <>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-4 lg:gap-6">
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {sections.map((section) => {
            if (section.kind === "link") {
              const active = isRouteActive(pathname, section.href);
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className={cn(
                    "group relative px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors xl:px-2.5 xl:text-[11px] xl:tracking-[0.12em]",
                    active
                      ? "text-[var(--color-primary-navy)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-primary-navy)]",
                  )}
                >
                  {section.label}
                  <span
                    className={cn(
                      "absolute inset-x-1.5 bottom-0 h-[3px] rounded-t-sm bg-[var(--color-accent-gold)] transition-opacity duration-200",
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-50",
                    )}
                    aria-hidden
                  />
                </Link>
              );
            }

            const d = section;
            const panelOpen = openDropdownId === d.id;
            const active = isDropdownActive(pathname, d);

            return (
              <div key={d.id} className="relative" ref={setDropdownRef(d.id)}>
                <button
                  type="button"
                  className={cn(
                    "group flex items-center gap-0.5 px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors xl:gap-1 xl:px-2.5 xl:text-[11px] xl:tracking-[0.12em]",
                    active || panelOpen
                      ? "text-[var(--color-primary-navy)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-primary-navy)]",
                  )}
                  aria-expanded={panelOpen}
                  aria-haspopup="true"
                  aria-controls={`nav-panel-${d.id}`}
                  id={`nav-trigger-${d.id}`}
                  onClick={() => setOpenDropdownId((cur) => (cur === d.id ? null : d.id))}
                >
                  <span className="relative">
                    {d.label}
                    <span
                      className={cn(
                        "absolute inset-x-0 -bottom-0.5 h-[3px] rounded-t-sm bg-[var(--color-accent-gold)] transition-opacity duration-200",
                        active ? "opacity-100" : "opacity-0 group-hover:opacity-50",
                      )}
                      aria-hidden
                    />
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 shrink-0 text-[var(--color-accent-gold)] transition-transform duration-200",
                      panelOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>

                {panelOpen ? (
                  <div
                    id={`nav-panel-${d.id}`}
                    role="region"
                    aria-labelledby={`nav-trigger-${d.id}`}
                    className="absolute start-0 top-full z-50 mt-1.5 min-w-[13.5rem] max-w-[min(calc(100vw-2rem),20rem)] overflow-hidden rounded-sm border border-black/8 bg-[var(--color-surface-card)] py-1.5 shadow-xl ring-1 ring-black/[0.03]"
                  >
                    <Link
                      href={d.indexHref}
                      className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-navy)] transition hover:bg-[color-mix(in_srgb,var(--color-accent-gold)_14%,transparent)]"
                      onClick={() => setOpenDropdownId(null)}
                    >
                      {d.indexLabel}
                    </Link>
                    <div className="mx-2 border-t border-black/6" />
                    <ul className="max-h-[min(70vh,20rem)] overflow-y-auto py-1">
                      {d.items.map((item) => {
                        const itemActive = isRouteActive(pathname, item.href);
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={cn(
                                "block px-4 py-2 text-[11px] font-medium leading-snug tracking-wide transition-colors",
                                itemActive
                                  ? "bg-[color-mix(in_srgb,var(--color-accent-gold)_18%,transparent)] text-[var(--color-primary-navy)]"
                                  : "text-[var(--color-text-muted)] hover:bg-black/[0.04] hover:text-[var(--color-primary-navy)]",
                              )}
                              onClick={() => setOpenDropdownId(null)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center rounded-sm bg-[var(--color-accent-gold)] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-primary-navy)] shadow-sm transition hover:brightness-105 active:scale-[0.98] xl:px-5 xl:text-[11px] xl:tracking-[0.14em]"
          >
            {quoteLabel}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[color-mix(in_srgb,var(--color-primary-navy)_12%,transparent)] text-[var(--color-primary-navy)] transition hover:border-[var(--color-accent-gold)] hover:bg-[color-mix(in_srgb,var(--color-accent-gold)_12%,transparent)] lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-primary-nav"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden />
          <span className="sr-only">{menuOpenLabel}</span>
        </button>
      </div>

      <div
        id="mobile-primary-nav"
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-[100] bg-[color-mix(in_srgb,var(--color-primary-navy)_55%,black)] backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button type="button" className="absolute inset-0 cursor-default" aria-label={menuCloseLabel} onClick={() => setMobileOpen(false)} />
        <div
          className={cn(
            "absolute inset-y-0 z-[1] flex w-[min(100%,22rem)] max-w-full flex-col bg-[var(--color-surface-card)] shadow-2xl transition-transform duration-300 ease-out start-0",
            mobileOpen ? "translate-x-0" : "ltr:-translate-x-full rtl:translate-x-full",
          )}
        >
          <div className="flex items-start justify-between gap-4 border-b border-black/5 px-5 py-5">
            <Link href="/" className="min-w-0 text-start" onClick={() => setMobileOpen(false)}>
              <span className="font-heading text-2xl font-bold tracking-tight text-[var(--color-primary-navy)]">{brand.short}</span>
              <span className="mt-1 block text-[11px] font-semibold uppercase leading-snug tracking-wide text-[var(--color-text-muted)]">
                {brand.name}
              </span>
              <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-wider text-[var(--color-accent-gold)]">{brand.tagline}</span>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-[var(--color-primary-navy)] transition hover:bg-black/5"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" aria-hidden />
              <span className="sr-only">{menuCloseLabel}</span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-3" aria-label="Mobile main">
            {sections.map((section) => {
              if (section.kind === "link") {
                const active = isRouteActive(pathname, section.href);
                return (
                  <Link
                    key={section.href}
                    href={section.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-sm px-3 py-3 text-sm font-semibold uppercase tracking-wide transition-colors",
                      active
                        ? "bg-[color-mix(in_srgb,var(--color-accent-gold)_22%,transparent)] text-[var(--color-primary-navy)]"
                        : "text-[var(--color-text-muted)] hover:bg-black/[0.04] hover:text-[var(--color-primary-navy)]",
                    )}
                  >
                    {section.label}
                  </Link>
                );
              }

              const d = section;
              const expanded = mobileAccordionId === d.id;
              const active = isDropdownActive(pathname, d);

              return (
                <div key={d.id} className="rounded-sm border border-black/[0.06] bg-[color-mix(in_srgb,var(--color-surface-soft)_80%,white)]">
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between gap-2 px-3 py-3 text-start text-sm font-semibold uppercase tracking-wide transition-colors",
                      active ? "text-[var(--color-primary-navy)]" : "text-[var(--color-text-muted)]",
                    )}
                    aria-expanded={expanded}
                    onClick={() => setMobileAccordionId((cur) => (cur === d.id ? null : d.id))}
                  >
                    {d.label}
                    <ChevronDown className={cn("h-4 w-4 shrink-0 text-[var(--color-accent-gold)] transition-transform", expanded && "rotate-180")} />
                  </button>
                  {expanded ? (
                    <div className="border-t border-black/6 px-2 pb-2 pt-0">
                      <Link
                        href={d.indexHref}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-sm px-3 py-2 text-xs font-bold uppercase tracking-wide text-[var(--color-primary-navy)] hover:bg-black/[0.04]"
                      >
                        {d.indexLabel}
                      </Link>
                      <ul className="mt-1 space-y-0.5 border-s-2 border-[var(--color-accent-gold)] ps-2">
                        {d.items.map((item) => {
                          const itemActive = isRouteActive(pathname, item.href);
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                  "block rounded-sm px-2 py-2 text-xs font-medium leading-snug transition-colors",
                                  itemActive
                                    ? "bg-[color-mix(in_srgb,var(--color-accent-gold)_18%,transparent)] text-[var(--color-primary-navy)]"
                                    : "text-[var(--color-text-muted)] hover:bg-black/[0.04] hover:text-[var(--color-primary-navy)]",
                                )}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="border-t border-black/5 p-4">
            <Link
              href="/request-a-quote"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-sm bg-[var(--color-accent-gold)] py-3.5 text-sm font-bold uppercase tracking-wide text-[var(--color-primary-navy)] shadow-sm transition hover:brightness-105"
            >
              {quoteLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
