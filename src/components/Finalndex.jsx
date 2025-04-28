import React from "react";
import { FaClipboard } from "react-icons/fa";
import { mySwal } from "./sweetAlert";

export default function FinalIndex({ handleCancel, data, title }) {
  const handleCopy = async (data) => {
    try {
      await navigator.clipboard.writeText(data);
      await mySwal.fire({
        title: "Successful!",
        text: "Text copied successfully!",
        icon: "success",
        timer: 1200,
        showConfirmButton: false,
      });
    } catch (err) {
      await mySwal.fire({
        title: "Failed!",
        text: "Failed to copy, text",
        icon: "error",
        timer: 700,
      });
      console.error(err.message);
    }
  };
  return (
    <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl  h-[300px] w-[500px] bg-[#f9f9f9] py-4 px-5 flex flex-col items-center justify-around ring-1">
      <h1 className="text-center  text-[21px] font-semibold">
        {title ? title : "Processed Index"}
      </h1>
      <div className="flex py-3 px-4 rounded-3xl resize-none w-[80%] mx-auto bg-white">
        <textarea
          value={data}
          name="finalIndex"
          readOnly
          id=""
          disabled={false}
          className="h-39 resize-none focus:outline-none flex-1"
        ></textarea>
        <div
          onClick={() => handleCopy(data)}
          className="self-end cursor-pointer bg-[#f9f9f9] p-3 ml-2 ring-1 rounded-full"
        >
          <FaClipboard />
        </div>
      </div>
      <div>
        <button
          onClick={handleCancel}
          className="bg-white py-2 px-6 rounded-3xl ring-1 cursor-pointer"
        >
          cancel
        </button>
      </div>
    </div>
  );
}
