import { Heading1 } from "@/components/ui/typography/Heading1";
import { Layout } from "@/layout/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Heading1>
        Welcome to <span className="text-gray-700">Quick & Easy</span>
      </Heading1>
    </Layout>
  );
}
