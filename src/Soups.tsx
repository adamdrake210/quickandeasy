import React from "react";
import { Heading2 } from "./components/ui/typography/Heading2";

type SoupsProps = {
  soups: any;
};

export const Soups = ({ soups }: SoupsProps) => {
  return (
    <section className="flex flex-col">
      <Heading2>Polévky</Heading2>
      <div>
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
      </div>
    </section>
  );
};
