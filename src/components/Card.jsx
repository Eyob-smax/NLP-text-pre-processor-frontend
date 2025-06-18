import { VictoryPie, VictoryTheme, VictoryLabel } from "victory";
import { memo } from "react";
import useOutput from "./custom-hooks/useOutput";
function Card({ cardData, type }) {
  const { showOutput } = useOutput();
  return (
    <div
      id="chart-card"
      className="h-[250px] mx-auto w-[500px] relative bg-white  rounded-2xl shadow-2xl shadow-slate-900/5 py-2 px-3"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[19px] font-semibold">
          {type === "markup"
            ? cardData.reducedBy === 0
              ? "Markup Already Removed"
              : "Markup removal"
            : type === "tokenization"
            ? "Tokenization"
            : type === "stemming"
            ? "Stemming"
            : type === "normalize"
            ? "Normalization"
            : type === "stopwords"
            ? "Stopwords Removal"
            : ""}
        </h2>
        <h2 className="text-[19px] font-semibold">
          Initial characters:{" "}
          <span className="font-bold text-[#00be49]">
            {cardData.initialLength}
          </span>
        </h2>
      </div>
      <div className="flex">
        <svg className="cursor-pointer w-[50%]" viewBox="0 0 400 400">
          <VictoryPie
            standalone={false}
            width={400}
            height={400}
            innerRadius={80}
            data={[
              {
                x: "initial",
                y: 100 - Math.ceil(cardData.reducedBy),
              },
              { x: "final", y: Math.ceil(cardData.reducedBy) },
            ]}
            theme={VictoryTheme.clean}
            labels={() => null}
            colorScale={["#4ade80", "#f87171"]}
          />
          <VictoryLabel
            text={`${Math.floor(cardData.reducedBy)}%`}
            x={200}
            y={200}
            textAnchor="middle"
            style={{ fontSize: 42, fontWeight: "bold" }}
          />
        </svg>
        <div className="max-w-[50%] flex flex-col items-center justify-center font-semibold">
          <h3 className="text-[12px] text-justify mb-5">
            {type === "markup"
              ? "Markup removal means stripping tags like HTML/XML to get plain text for better indexing and search."
              : type === "tokenization"
              ? "Tokenization is the process of breaking text into smaller pieces, called tokens, which can be words, phrases, or symbols. It helps in understanding the structure and meaning of the text."
              : type === "stemming"
              ? " Stemming is the process of reducing words to their root form, which helps in improving search and indexing by grouping similar words together."
              : type === "normalize"
              ? " Normalization is the process of converting text to a standard format, such as lowercasing or removing punctuation, to improve consistency and accuracy in text processing."
              : type === "stopwords"
              ? " Stopwords are common words that are often removed from text data during preprocessing, as they do not carry significant meaning and can clutter the analysis."
              : ""}
          </h3>
          <div>
            <button
              onClick={() =>
                showOutput(
                  type === "markup"
                    ? cardData.cleanedText
                    : type === "tokenization"
                    ? JSON.stringify(cardData.tokenizedArray)
                    : type === "stemming"
                    ? JSON.stringify(cardData.stemmedArray)
                    : type === "normalize"
                    ? JSON.stringify(cardData.normalizedArray)
                    : type === "stopwords"
                    ? JSON.stringify(cardData.removeStopWordsArray)
                    : type === "",
                  type === "markup"
                    ? "Markup Removal"
                    : type === "tokenization"
                    ? "Tokenization"
                    : type === "stemming"
                    ? "Stemming"
                    : type === "normalize"
                    ? "Normalization"
                    : type === "stopwords"
                    ? "Stopwords Removal"
                    : null
                )
              }
              className="bg-[#f9f9f9] ring-2 ring-slate-400/5 shadow-slate-900/25 py-2 px-5 rounded-full cursor-pointer"
            >
              {" "}
              Show Output
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
