import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main className="mx-auto flex max-w-lg flex-1 flex-col items-start gap-4 px-4 py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-gold)]">404</p>
      <h1 className="font-heading text-3xl text-[var(--color-primary-navy)]">{t("title")}</h1>
      <p className="text-[var(--color-text-muted)]">{t("description")}</p>
      <Link href="/" className="text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary-blue)] underline-offset-4 hover:underline">
        {t("cta")}
      </Link>
    </main>
  );
}
