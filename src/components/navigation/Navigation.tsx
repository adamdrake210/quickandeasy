import React from "react";
import Link from "next/link";

import {
  GALERIE,
  HOME,
  KONTAKT,
  MENU,
  ONAS,
} from "@/constants/routerConstants";
import { useRouter } from "next/router";
import { COMPANY_NAME } from "@/constants/constants";

const MenuItems = [
  {
    label: "Menu",
    url: MENU,
    active: false,
  },
  {
    label: "O Nas",
    url: ONAS,
    active: false,
  },
  {
    label: "Galerie",
    url: GALERIE,
    active: false,
  },
  {
    label: "Kontakt",
    url: KONTAKT,
    active: false,
  },
];

export const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="bg-slate-50 left-0 right-0 font-raleway shadow-md fixed z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between p-3">
          <div className="flex  items-center">
            <Link href={HOME} passHref>
              <span className="font-vollkorn text-3xl text-zinc-700 font-extrabold uppercase cursor-pointer mr-8">
                {COMPANY_NAME}
              </span>
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {MenuItems.map((item, index) => {
                return (
                  <Link href={item.url} passHref key={index}>
                    <div
                      className={`text-center border-secondary-500 cursor-pointer text-xl uppercase hover:text-green-600 hover:underline ${
                        router.asPath === item.url
                          ? "text-green-600 underline"
                          : "text-gray-500"
                      }`}
                    >
                      <p>{item.label}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};