import { getGoogleSheetData } from "@/services/googleSheets";
import { Salads } from "@/components/Salads";
import { Heading1 } from "@/components/ui/typography/Heading1";
import { Layout } from "@/layout/Layout";
import { Soups } from "@/components/Soups";
import { AnchorLinks } from "@/components/AnchorLinks";
import { Tortily } from "@/components/Tortily";

export async function getServerSideProps() {
  const soups = await getGoogleSheetData();

  return {
    props: {
      soups,
    },
  };
}

export default function Menu({ soups }) {
  return (
    <Layout title="Menu">
      <Heading1 className="text-xl">Menu</Heading1>
      <AnchorLinks />
      <Salads />
      <Soups soups={soups} />
      <Tortily />
    </Layout>
  );
}
