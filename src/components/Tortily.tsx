import React from "react";

import { Heading2 } from "./ui/typography/Heading2";
import { tortily } from "@/data/tortila-data";
import { WeightAndPrice } from "./WeightAndPrice";
import { ProduceIcon } from "./ProduceIcon";

export const Tortily = () => {
  return (
    <section id="tortily">
      <Heading2>Tortily</Heading2>
      {tortily &&
        tortily.map((tortila) => {
          return (
            <div
              key={tortila.id}
              className="flex flex-col sm:flex-row justify-between mb-8"
            >
              <div className="max-w-full sm:max-w-lg">
                <header className="flex text-3xl uppercase">
                  <span className="text-zinc-500 mr-4">{tortila.id}.</span>
                  <span className="text-gray-800">{tortila.title}</span>
                </header>
                <div className="py-1 text-green-700 text-2xl">
                  {tortila.ingredients}
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <ProduceIcon icon={tortila.icon} />

                {tortila.price && tortila.size && (
                  <WeightAndPrice size={tortila.size} price={tortila.price} />
                )}
              </div>
            </div>
          );
        })}
    </section>
  );
};
