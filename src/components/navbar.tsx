import React from "react";
import { BackButton } from "./back-button";

const Navbar = ({
  label,
  children,
}: {
  label?: string;
  children?: React.ReactNode;
}) => {
  return (
    <nav className="z-[1] min-h-16 sticky top-0 backdrop-blur-2xl w-full items-center flex gap-3 p-3 border-b">
      <div className="lg:absolute sm:block">
        <BackButton />
      </div>
      <div className="w-full flex justify-center lg:px-72">
        {label && (
          <label className="flex-1 text-center font-bold text-[1.5em]">
            {label}
          </label>
        )}
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
