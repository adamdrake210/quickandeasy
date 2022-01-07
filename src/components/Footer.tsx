import React from "react";

import { COMPANY_NAME } from "@/constants/constants";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-end p-4 bg-green-900 left-0 right-0 font-staatliches shadow-md h-16">
      <p className="text-white text-sm">
        &copy; {new Date().getFullYear()} - {COMPANY_NAME} s.r.o.
      </p>
    </footer>
  );
};
