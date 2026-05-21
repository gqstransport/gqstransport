"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type ListPaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export function ListPagination({
  page,
  totalPages,
  onPageChange,
  className = "",
}: ListPaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | "…")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    const set = new Set([1, totalPages, page, page - 1, page + 1]);
    const sorted = [...set].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
    sorted.forEach((p, i) => {
      if (i > 0 && p - sorted[i - 1] > 1) pages.push("…");
      pages.push(p);
    });
  }

  return (
    <nav
      className={`mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center ${className}`}
      aria-label="Pagination"
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="flex items-center gap-2 rounded-sm border border-black/10 px-4 py-2.5 text-xs font-black uppercase tracking-widest text-[var(--color-primary-navy)] transition hover:border-[var(--color-accent-gold)] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </button>

      <div className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === "…" ? (
            <span key={`e-${i}`} className="px-2 text-gray-400">
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              className={`min-w-[2.5rem] rounded-sm px-3 py-2 text-sm font-bold transition ${
                p === page
                  ? "bg-[var(--color-primary-navy)] text-[var(--color-accent-gold)]"
                  : "text-gray-600 hover:bg-[var(--color-surface-soft)]"
              }`}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex items-center gap-2 rounded-sm border border-black/10 px-4 py-2.5 text-xs font-black uppercase tracking-widest text-[var(--color-primary-navy)] transition hover:border-[var(--color-accent-gold)] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}

export const PUBLIC_PAGE_SIZE = 12;
