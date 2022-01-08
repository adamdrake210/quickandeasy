import React, { useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-slate-50/95 left-0 right-0 font-raleway shadow-md fixed z-10">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between p-3">
          <div className="flex grow items-center">
            <Link href={HOME} passHref>
              <span className="font-staatliches text-5xl text-green-700 font-extrabold uppercase cursor-pointer mr-8">
                {COMPANY_NAME}
              </span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {MenuItems.map((item, index) => {
              return (
                <Link href={item.url} passHref key={index}>
                  <div
                    className={`font-staatliches text-center border-secondary-500 cursor-pointer text-2xl uppercase hover:text-green-600 hover:underline ${
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

          {/* Mobile Hamburger icon */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {showMenu && (
          <div className="flex flex-col pb-2">
            {MenuItems.map((item, index) => {
              return (
                <Link href={item.url} passHref key={index}>
                  <div
                    className={`text-3xl font-staatliches uppercase hover:text-green-600 hover:underline py-3 px-4 ${
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
        )}
      </div>
    </nav>
  );
};
