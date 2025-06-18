import { MdOutlineTextFields } from "react-icons/md";

import "./index.css";
import { memo } from "react";

function Header() {
  return (
    <header className="bg-[#f9f9f927] z-1000 backdrop-blur-[20px] box-border min-h-20 px-5 flex items-center">
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

export default memo(Header);
