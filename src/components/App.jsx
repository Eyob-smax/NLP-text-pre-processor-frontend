import React, { lazy, Suspense } from "react";
import Header from "./Header";
const Main = lazy(() => import("./Main"));
import useOutput from "./custom-hooks/useOutput";

const FinalIndex = React.lazy(() => import("./Finalndex"));
export default function App() {
  const { result, setResult } = useOutput();
  return (
    <>
      <div className="flex flex-col h-full w-full box-border bg-[white] bg-cover min-h-screen">
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
    </>
  );
}
