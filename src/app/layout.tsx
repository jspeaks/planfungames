import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { canonicalOrigin } from "@/sites";
import { currentSite } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await currentSite();
  const origin = canonicalOrigin(site);
  const icon =
    site.visual.kind === "image"
      ? site.visual.src
      : site.visual.kind === "mascot"
        ? "/icon.png"
        : "/icon.png";

  return {
    title: site.seo.title,
    description: site.seo.description,
    metadataBase: new URL(origin),
    alternates: { canonical: origin },
    openGraph: {
      title: site.seo.title,
      description: site.seo.description,
      url: origin,
      siteName: "PlanFunGames",
      type: "website",
    },
    icons: { icon },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const site = await currentSite();

  return (
    <html
      lang="en"
      data-site={site.slug}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
