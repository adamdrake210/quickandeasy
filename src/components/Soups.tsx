import React from "react";
import { Heading2 } from "./ui/typography/Heading2";

type SoupsProps = {
  soups: any;
  centered?: boolean;
};

export const Soups = ({ soups, centered }: SoupsProps) => {
  return (
    <section
      id="soups"
      className={`flex flex-col mb-8 py-4 px-2 ${
        centered && "items-center text-center md:text-left"
      }`}
    >
      <Heading2>Polévky</Heading2>
      <p className="text-2xl text-zinc-700 mb-2 font-raleway">
        Polévka (dle denní nabídky) – 55Kč
      </p>

      {soups && (
        <ul>
          {Object.keys(soups).map((soup) => {
            return (
              <li className="text-2xl sm:text-3xl mb-2" key={soup}>
                {soup} - {soups[soup]}
              </li>
            );
          })}
        </ul>
      )}

      <p className="text-2xl text-green-700 italic mb-2 font-raleway">
        Polévky podáváme od 10:30 do 15:00
      </p>
    </section>
  );
};
