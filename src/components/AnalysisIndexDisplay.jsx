import { memo } from "react";
import useOutput from "./custom-hooks/useOutput";

function AnalysisIndexDisplay({ indexData }) {
  const { showOutput } = useOutput();

  return (
    <div className="analysisIndexDisplay flex items-start justify-center my-10 min-h-[100px]">
      <div className=" w-[33%] text-center">
        <h2 className="font-semibold mb-3  border-[#4ade80]">
          Before text processing
        </h2>
        <p className="text-[14px] text-center w-[60%] mx-auto">
          Initially we have{" "}
          <span className="text-[#4ade80] font-bold">
            {indexData.initialLength}
          </span>{" "}
          characters. With each markup syntax and symbols included. We should
          filter these long characters and get descriptive strings only for the
          document.
        </p>
      </div>
      <div className=" w-[33%] text-center">
        <h2 className="mb-3 font-semibold">In text processing</h2>
        <p className="text-[14px] text-center w-[60%] mx-auto">
          We perform different text processing steps like tokenization, markup
          removal, stop word removal, normalization and stemming. With each step
          completed we get an index that will describe the document very well.
        </p>
      </div>
      <div className=" w-[33%]  text-center">
        <h2 className="mb-3 font-semibold">After text processing</h2>
        <p className="text-[14px] text-center w-[60%] mx-auto">
          After all these text operation processes we finally get index string.
          We reduce{" "}
          <span className="text-[#4ade80] font-bold">
            {indexData.totalReducedLength}
          </span>{" "}
          characters. Finally we ended up with only{" "}
          <span className="text-[#4ade80] font-bold">
            {indexData.finalLength} characters.
          </span>
        </p>
        <button
          onClick={() =>
            showOutput(indexData.indexString, "Final Index String")
          }
          className="cursor-pointer py-2 px-4 mt-4 bg-white rounded-[23px] border-[2px] border-[#4ade80] text-[16px] font-semibold"
        >
          show index string
        </button>
      </div>
    </div>
  );
}

export default memo(AnalysisIndexDisplay);
