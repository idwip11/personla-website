import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imam Dwi Purwanto | Data Analyst & Full-Stack Developer",
  description:
    "Portfolio of Imam Dwi Purwanto, featuring data analytics dashboards, full-stack applications, and spreadsheet templates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xudyhbbyrm");
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
