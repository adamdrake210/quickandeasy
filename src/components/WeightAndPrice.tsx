import React from "react";

type WeightAndPriceProps = {
  size: string;
  price: string;
  title: string;
};

export const WeightAndPrice = ({ title, size, price }: WeightAndPriceProps) => {
  return (
    <div className="flex flex-col items-center p-2 bg-zinc-400/40 min-w-[120px] rounded-lg shadow-lg">
      <p className="text-2xl">{title}</p>
      <p className="text-green-700">
        <span>CCA</span>
        <span className="text-2xl mx-1">{size}</span>
        <span>G</span>
      </p>
      <p className="text-2xl">{price} Kč</p>
    </div>
  );
};
