import { Heading1 } from "@/components/ui/typography/Heading1";
import { Layout } from "@/layout/Layout";
import { getGoogleSheetData } from "@/services/googleSheets";

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
      {soups && (
        <ul>
          {Object.keys(soups).map((soup) => {
            return (
              <li key={soup}>
                {soup} - {soups[soup]}
              </li>
            );
          })}
        </ul>
      )}
    </Layout>
  );
}
