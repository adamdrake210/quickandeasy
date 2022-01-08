import React from "react";
import Image from "next/image";

import { COMPANY_NAME } from "@/constants/constants";

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
          <a href="https://www.facebook.com/quickandeasycz" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="h-7 w-8 mt-1.5 ml-4"
              viewBox="0 0 96.123 96.123"
            >
              <g>
                <path
                  d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803
		c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654
		c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246
		c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
