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
      <h1 className="text-xl">Menu</h1>
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
