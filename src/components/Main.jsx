import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Card from "./Card";
import Analysis from "./Analysis";
// import FinalIndex from "./FinalIndex";
import { getMarkupRemovedText } from "../service/api";
import { createContext } from "react";
import useTokenized from "./custom-hooks/useTokenized";
import useStemmed from "./custom-hooks/useStemmed";
import useNormalization from "./custom-hooks/useNormalization";
import useStopping from "./custom-hooks/useStopping";

const SendContext = createContext();
const AnalysisDataContext = createContext();
export default function Main() {
  const [markupData, setMarkUpData] = useState({});
  const [sendPressed, setPressedButton] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await getMarkupRemovedText();
      if (!result.success) {
        console.log(result.message);
        return;
      }
      setMarkUpData(result.data);
    })();
  }, [sendPressed]);

  const { tokenizedData } = useTokenized({ sendPressed });
  const { stemmedData } = useStemmed({ sendPressed });
  const { normalizedData } = useNormalization({ sendPressed });
  const { stoppedData } = useStopping({ sendPressed });

  return (
    <SendContext value={[setPressedButton]}>
      <main className="flex-1 flex flex-col max-h-[85%] justify-center">
        <div className="overflow-y-scroll">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-7 px-5 justify-center items-center  my-2 py-2">
            <Card cardData={markupData} type={"markup"} />
            <Card cardData={tokenizedData} type={"tokenization"} />
            <Card cardData={normalizedData} type={"normalize"} />
            <Card cardData={stoppedData} type={"stopwords"} />
            <Card cardData={stemmedData} type={"stemming"} />
          </div>
          {normalizedData && <Analysis sendPressed={sendPressed} />}
        </div>
        <div className="text-center flex justify-center">
          <InputField />
        </div>
      </main>
    </SendContext>
  );
}

export { SendContext };
