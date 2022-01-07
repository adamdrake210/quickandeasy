import React from "react";

import { salads } from "@/data/salad-data";
import { Heading2 } from "./ui/typography/Heading2";
import { WeightAndPrice } from "./WeightAndPrice";

export const Salads = () => {
  return (
    <section id="salads">
      <Heading2>Saláty</Heading2>
      {salads &&
        salads.map((salad) => {
          return (
            <div className="flex flex-col sm:flex-row justify-between mb-8">
              <div className="max-w-full sm:max-w-lg">
                <header className="flex text-3xl uppercase">
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
                <div className="py-1 text-green-700 text-2xl">
                  {salad.ingredients}
                </div>
              </div>
              <div className="flex space-x-4">
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
