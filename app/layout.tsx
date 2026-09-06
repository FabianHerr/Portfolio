import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, IBM_Plex_Mono, Rouge_Script } from "next/font/google";
import localFont from "next/font/local";
import { profile } from "@/content/profile";
import { SITE_URL } from "@/lib/site";
import { Nav } from "@/components/Nav";
import "./globals.css";

// One grotesque superfamily, nothing borrowed from another site. Body + headings
// (headings are the same face at 600). Condensed carries the dense dial micro-text.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
  weight: ["400", "600"],
});
const plexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-condensed",
  weight: ["500"],
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
  weight: ["400"],
});

// Rouge Script, the homepage signature only. A bold, flowing signature script —
// enough weight to read as confident/professional, still clearly hand-signed.
const rougeScript = Rouge_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-signature-mark",
  weight: "400",
});

// DSEG7 Classic, 7-segment LCD numerals only (index digits, small counts).
// SIL OFL 1.1, vendored in app/fonts/ (see DSEG-LICENSE.txt).
const dseg = localFont({
  src: "./fonts/DSEG7Classic-Regular.woff2",
  display: "swap",
  variable: "--font-dseg",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name}, ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: `${profile.name}. ${profile.tagline}`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: profile.name,
    title: `${profile.name}, ${profile.role}`,
    description: profile.tagline,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable} ${rougeScript.variable} ${dseg.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col md:flex-row">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main
          id="main"
          className="flex flex-1 flex-col items-center px-4 py-8 sm:py-12 md:min-w-0"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
