import { ContactUsDetails } from "@/components/ContactUsDetails";
import { ContactUsForm } from "@/components/ContactUsForm";
import { LocationMap } from "@/components/LocationMap";
import { Heading1 } from "@/components/ui/typography/Heading1";
import { Heading2 } from "@/components/ui/typography/Heading2";
import { Layout } from "@/layout/Layout";

export default function Kontakt() {
  return (
    <Layout title="Kontakt">
      <Heading1>Kontakt</Heading1>
      <LocationMap isMarkerShown />
      <section className="flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <Heading2>KONTAKTNÍ FORMULÁŘ</Heading2>
          <ContactUsForm />
        </div>
        <div className="flex-1">
          <ContactUsDetails />
        </div>
      </section>
    </Layout>
  );
}
