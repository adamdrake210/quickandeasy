import { ProduceType, salads, Salads } from "@/data/salad-data";
import Image from "next/image";
import React, { memo } from "react";

type ProduceIconProps = {
  icon: ProduceType;
};

const ProduceIcon = ({ icon }: ProduceIconProps) => {
  return (
    <>
      {icon && icon === "chicken" && (
        <Image width="60" height="60" src="/icons/chicken.svg" />
      )}
      {icon && icon === "fish" && (
        <Image width="70" height="60" src="/icons/fish.svg" />
      )}
      {icon && icon === "beef" && (
        <Image width="60" height="60" src="/icons/beef.svg" />
      )}
      {icon && icon === "vegan" && (
        <Image width="90" height="60" src="/icons/vegan.svg" />
      )}
      {icon && icon === "vegetarian" && (
        <Image width="130" height="60" src="/icons/vegetarian.svg" />
      )}
      {icon && icon === "pepper" && (
        <Image width="60" height="60" src="/icons/pepper.svg" />
      )}
    </>
  );
};

export default memo(ProduceIcon);
