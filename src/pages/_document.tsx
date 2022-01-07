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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
