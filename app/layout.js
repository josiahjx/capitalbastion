import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/funnel-display/latin-500.css";
import "@fontsource/funnel-display/latin-600.css";
import "@fontsource/funnel-display/latin-700.css";
import Script from "next/script";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Tawk.to → Administration → Channels → Chat Widget
// Embed URL: https://embed.tawk.to/PROPERTY_ID/WIDGET_ID
const TAWK_PROPERTY_ID = "";
const TAWK_WIDGET_ID = "";

export const metadata = {
  title: "CapitalBastion Forensics — Crypto Recovery & Blockchain Investigation",
  description:
    "CapitalBastion Forensics traces and recovers lost or stolen cryptocurrency. Blockchain forensics, asset tracing, and recovery support for complex cases.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
        {TAWK_PROPERTY_ID && TAWK_WIDGET_ID ? (
          <Script id="tawk-to" strategy="lazyOnload">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src="https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}";
                s1.charset="UTF-8";
                s1.setAttribute("crossorigin","*");
                s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
