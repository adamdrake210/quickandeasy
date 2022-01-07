import React from "react";

export const AnchorLinks = () => {
  return (
    <div className="flex space-x-2 text-2xl italic mb-4 text-zinc-700">
      <a className="underline" href="#salads">
        Saláty
      </a>
      <span> / </span>
      <a className="underline" href="#soups">
        Polévky
      </a>
      <span> / </span>
      <a className="underline" href="#tortily">
        Tortily
      </a>
    </div>
  );
};
