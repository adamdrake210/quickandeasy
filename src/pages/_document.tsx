import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html dir="ltr" lang="cs" className="scroll-smooth">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,400;1,200;1,400&family=Staatliches&display=swap"
            rel="stylesheet"
          />
          <meta
            name="og:title"
            content="Quick & Easy Saláty, domácí polévky a tortily!"
          />
          <meta
            name="og:description"
            content="Našim zákazníkům nabízíme denně ta nejchutnější jídla! Nabízíme čerstvé saláty, tortilla wrapy a domácí polévky. Všechny naše produkty jsou vyrobeny z místních surovin od důvěryhodných dodavatelů."
          />
          <meta
            name="og:image"
            content="https://res.cloudinary.com/dmiizmobu/image/upload/v1641566890/quickandeasy/_id19.jpg"
          />
          <meta name="og:site_name" content="quickandeasy.cz" />
          <meta name="og:locale" content="cs" />
          <meta name="og:type" content="website" />
          <meta
            name="description"
            content="Našim zákazníkům nabízíme denně ta nejchutnější jídla! Nabízíme čerstvé saláty, tortilla wrapy a domácí polévky. Všechny naše produkty jsou vyrobeny z místních surovin od důvěryhodných dodavatelů."
          />
          <meta
            name="image"
            content="https://res.cloudinary.com/dmiizmobu/image/upload/v1641566890/quickandeasy/_id19.jpg"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
