import type { Metadata } from "next";
import { Amiri, IBM_Plex_Sans_Arabic, Outfit, Poppins } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/common/AppHeader";
import { AppFooter } from "@/components/common/AppFooter";
import { routing } from "@/i18n/routing";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading-en",
  weight: ["500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body-en",
  weight: ["400", "500", "600"],
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-heading-ar",
  weight: ["400", "700"],
});

const plexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-body-ar",
  weight: ["400", "500", "600"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const isArabic = locale === "ar";
  const fontVariables = `${outfit.variable} ${poppins.variable} ${amiri.variable} ${plexSansArabic.variable}`;

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${fontVariables} min-h-dvh bg-[var(--color-surface-soft)] text-[var(--color-text-primary)] antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <AppHeader />
          <div className="flex min-h-dvh flex-col">{children}</div>
          <AppFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
