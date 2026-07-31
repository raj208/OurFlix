import "./globals.css";
import { site } from "@/content";

export const metadata = {
  title: site.title,
  description: "A limited series about us.",
  // Keeps the title out of search results / link-preview scrapers if the
  // Vercel URL ever leaks — keeps it a little private.
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@400;600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-ink text-cream antialiased select-none">
        {children}
      </body>
    </html>
  );
}
