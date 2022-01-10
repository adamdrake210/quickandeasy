import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/navigation/Navigation";
import { Soups } from "@/components/Soups";
import { Button } from "@/components/ui/Button";
import { Heading1 } from "@/components/ui/typography/Heading1";
import { Heading2 } from "@/components/ui/typography/Heading2";
import { COMPANY_NAME } from "@/constants/constants";
import { MENU } from "@/constants/routerConstants";
import { Layout } from "@/layout/Layout";
import { getGoogleSheetData } from "@/services/googleSheets";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const soups = await getGoogleSheetData();

  return {
    props: {
      soups,
    },
  };
}

export default function Home({ soups }) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(MENU);
  };

  return (
    <>
      <Head>
        <title>HOME | {COMPANY_NAME}</title>
      </Head>
      <Navigation />
      <main className={`flex flex-col font-staatliches p-0 pb-20 min-h-screen`}>
        <header
          className="flex items-center p-0 min-h-[600px] bg-green-700 text-white 
          bg-[url('https://res.cloudinary.com/dmiizmobu/image/upload/e_improve,w_400,h_600,c_thumb,g_auto/v1641818294/quickandeasy/header_bg_image.jpg')] 
          bg-no-repeat 
          bg-center
          bg-cover
          md:bg-[url('https://res.cloudinary.com/dmiizmobu/image/upload/v1641818294/quickandeasy/header_bg_image.jpg')]
          shadow-[inset_0_0_0_600px_rgba(0,0,0,.3)]
          "
        >
          <div className="w-2/3 py-3 px-2 md:py-6 md:px-3 lg:py-8 lg:px-6 text-center md:text-left mx-auto max-w-screen-lg">
            <Heading1 className="text-white">
              Vítejte v <span className="text-white">Quick & Easy</span>
            </Heading1>
            <Button onClick={handleButtonClick} btnText="OBJEVTE NAŠE MENU" />
          </div>
        </header>

        <Soups centered soups={soups} />

        {/* Parallal */}
        <div
          className="flex items-center justify-center h-[500px] mb-12 bg-fixed bg-center bg-cover bg-[url('https://res.cloudinary.com/dmiizmobu/image/upload/v1641820482/quickandeasy/homepage_large_b_w.jpg')] 
          shadow-[inset_0_0_0_600px_rgba(0,0,0,.3)]
        "
        >
          <div className="flex flex-col text-center p-8">
            <Heading2 className="text-white mb-16">
              domácí dresinky / homemade dressings
            </Heading2>
            <Heading2 className="text-white mb-16">
              čerstvé saláty a tortily / fresh salads and wraps
            </Heading2>
            <Heading2 className="text-white">
              čerstvé jídlo sebou / tel. 608 326 018
            </Heading2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
