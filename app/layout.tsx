import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { secrets } from "@/config/secrets";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
         (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${secrets.clarityId}");`,
          }}
        />
        ;
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />
          <div className="relative flex flex-col h-screen">
            <main className="w-full flex-grow">{children}</main>
            <footer className="w-full flex items-center justify-center py-3">
              <p className="flex">
                Website desenvolvido por
                <a
                  className="ml-4"
                  href="https://www.instagram.com/andrepozzan.eng/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt=""
                    className="w-32"
                    src="https://raw.githubusercontent.com/andrepozzan/andrepozzan/main/assets/img/ap-design-kit/aplogo-footer-min.svg"
                  />
                </a>
              </p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
