import React, { ReactNode } from "react";
import Head from "next/head";

import { Navigation } from "@/components/navigation/Navigation";
import { COMPANY_NAME } from "@/constants/constants";
import { Footer } from "@/components/Footer";

type LayoutProps = {
  children: ReactNode;
  title: string;
  className?: string;
};

export const Layout = ({ children, title, className }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>
          {title} | {COMPANY_NAME}
        </title>
      </Head>
      <Navigation />
      <main
        className={`flex flex-col font-staatliches p-4 py-20 mx-auto container max-w-screen-lg min-h-screen ${
          className || ""
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
