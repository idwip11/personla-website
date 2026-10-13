import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = localFont({ src: "../public/fonts/inter-latin.woff2", display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Imam Dwi Purwanto | Data Analyst & Full-Stack Developer",
  description:
    "Imam Dwi Purwanto, Data Analyst and Full-Stack Developer. Explore production applications, business intelligence dashboards, and data analysis projects.",
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
        className={inter.variable}
      >
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
