import React, { Suspense, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import { createContext } from "react";
const OutputContext = createContext();

const FinalIndex = React.lazy(() => import("./Finalndex"));
export default function App() {
  const [result, setResult] = useState({});
  function showOutput(data, title) {
    setResult({ data, title, setVisible: true });
  }
  return (
    <>
      <OutputContext value={[showOutput]}>
        <div className="flex flex-col h-full w-full box-border">
          <Header />
          <Main />
          {result.setVisible && (
            <Suspense fallback={<div>Loading</div>}>
              <FinalIndex
                title={result.title}
                data={result.data}
                handleCancel={() =>
                  setResult((prev) => ({ ...prev, setVisible: false }))
                }
              />
            </Suspense>
          )}
        </div>
      </OutputContext>
    </>
  );
}

export { OutputContext };
