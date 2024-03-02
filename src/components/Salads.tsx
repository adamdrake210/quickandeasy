import React from "react";

import { salads } from "@/data/salad-data";
import { Heading2 } from "./ui/typography/Heading2";
import { WeightAndPrice } from "./WeightAndPrice";
import ProduceIcon from "./ProduceIcon";

export const Salads = () => {
  return (
    <section id="salads">
      <Heading2>Saláty</Heading2>
      {salads?.map((salad) => {
        return (
          <div
            key={salad.id}
            className="flex flex-col sm:flex-row justify-between mb-8"
          >
            <div className="max-w-full sm:max-w-lg">
              <header className="flex text-2xl sm:text-3xl uppercase">
                <span className="text-zinc-500 mr-4">{salad.id}.</span>
                <div>
                  <span className="text-gray-800">{salad.title}</span>
                  {salad.extraTitle && (
                    <span className="text-gray-800 text-xl">
                      {salad.extraTitle}
                    </span>
                  )}
                </div>
              </header>
              <div className="py-1 text-green-700 text-xl sm:text-2xl">
                {salad.ingredients}
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <ProduceIcon icon={salad.icon} />
              {salad.smallPrice && salad.smallSize && (
                <WeightAndPrice
                  title="Malý"
                  size={salad.smallSize}
                  price={salad.smallPrice}
                />
              )}
              {salad.bigPrice && salad.bigSize && (
                <WeightAndPrice
                  title="Velký"
                  size={salad.bigSize}
                  price={salad.bigPrice}
                />
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};
