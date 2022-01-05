import React, { ReactNode } from "react";
import Head from "next/head";

import { Navigation } from "@/components/navigation/Navigation";
import { COMPANY_NAME } from "@/constants/constants";
import { Footer } from "@/components/Footer";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>
          {title} | {COMPANY_NAME}
        </title>
      </Head>
      <Navigation />
      <main className="flex flex-col font-raleway p-4 py-16 mx-auto container max-w-6xl min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};
