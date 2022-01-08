import { LocationMap } from "@/components/LocationMap";
import { Heading1 } from "@/components/ui/typography/Heading1";
import { Layout } from "@/layout/Layout";

export default function Kontakt() {
  return (
    <Layout title="Kontakt">
      <Heading1>Kontakt</Heading1>
      <LocationMap isMarkerShown />
    </Layout>
  );
}
