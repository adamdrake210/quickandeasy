import React from "react";
import Image from "next/image";

import { COMPANY_NAME } from "@/constants/constants";
import { FacebookSvg } from "./ui/FacebookSvg";

export const Footer = () => {
  return (
    <footer className="bg-green-900 left-0 right-0 font-staatliches shadow-md">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center h-56 md:h-28 max-w-screen-lg mx-auto p-4">
        {/* Company name */}
        <div>
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} - {COMPANY_NAME} s.r.o.
          </p>
          <p className="text-xs font-raleway text-white">
            Designed by{" "}
            <a
              className="underline"
              href="https://adamdrake.cz"
              target="_blank"
            >
              Adam Drake
            </a>
          </p>
        </div>

        {/* Business details */}
        <div className="flex flex-col font-raleway items-center justify-center text-white text-xs">
          <p className="mb-1 text-center">
            Provozovatel: Quick & Easy: Arachné s.r.o., C152497 vedená u
            Městského soudu v Praze.
          </p>
          <p className="text-center">
            Sídlo společnosti: Kovářovice 5, 251 67 Pyšely, ICO:28908856
          </p>
        </div>

        {/* Social */}
        <div className="flex">
          <a target="_blank" href="mailto:arachnesro@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
          <FacebookSvg />
        </div>
      </div>
    </footer>
  );
};
