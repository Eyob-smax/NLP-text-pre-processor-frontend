import React from "react";
import { MdOutlineTextFields } from "react-icons/md";

import "./index.css";

export default function Header() {
  return (
    <header className="bg-[#F9F9F9]  box-border min-h-20 px-5 flex items-center">
      <div
        onClick={() => {
          window.location.reload();
        }}
        className="cursor-pointer text-2xl p-2 rounded-full border-2"
      >
        <MdOutlineTextFields />
      </div>
      <h1 className="font-oswald text-[23px] font-semibold mx-5 tracking-wide">
        Text preprocessor dashboard
      </h1>
    </header>
  );
}
