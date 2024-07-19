import React from "react";

import { COMPANY_NAME } from "@/constants/constants";
import { Heading3 } from "./ui/typography/Heading3";
import { Heading2 } from "./ui/typography/Heading2";

export const ContactUsDetails = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <Heading2>Kontaktujte nás</Heading2>
        <div className="text-2xl">
          <p>
            Tel:{" "}
            <a className="underline" href="tel:608910315">
              608 910 315
            </a>
          </p>
          <p>
            Mail:{" "}
            <a
              className="underline"
              target="_blank"
              href="mailto:arachnesro@gmail.com"
            >
              Napište nám
            </a>
          </p>
        </div>
      </div>
      <div className="mb-6">
        <Heading2>Otevírací doba</Heading2>
        <div className="text-2xl">
          <p>Pondělí – Pátek:</p>
          <p>10.30 – 15.00</p>
        </div>
      </div>
      <div className="mb-6">
        <Heading3>{COMPANY_NAME}</Heading3>
        <div className="text-xl">
          <p>Sokolovská 120/62</p>
          <p>Praha 8 – Karlín</p>
        </div>
      </div>
    </div>
  );
};
