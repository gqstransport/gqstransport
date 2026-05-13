import { getTranslations } from "next-intl/server";

type Props = {
  namespace: string;
};

export async function SitePage({ namespace }: Props) {
  const t = await getTranslations(namespace);

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-primary-navy)] sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)]">{t("description")}</p>
    </main>
  );
}
