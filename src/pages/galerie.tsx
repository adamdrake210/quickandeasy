import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import SimpleReactLightbox from "simple-react-lightbox";

import { Heading1 } from "@/components/ui/typography/Heading1";
import { Layout } from "@/layout/Layout";

import { photos } from "@/data/photos-data";

const options = {
  settings: {
    overlayColor: "rgba(21,128,61,0.7)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(126, 172, 139, 0.8)",
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
};

export default function Galerie() {
  return (
    <Layout title="Galerie">
      <Heading1>Galerie</Heading1>
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center flex-wrap">
            {photos.map((photo) => {
              return (
                <a className="mr-2" key={photo.src} href={photo.src}>
                  <Image
                    src={photo.thumbnail}
                    alt={photo.alt}
                    width={300}
                    height={200}
                  />
                </a>
              );
            })}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Layout>
  );
}
