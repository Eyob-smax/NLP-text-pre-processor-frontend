import React, { useEffect, useState } from "react";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from "victory";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { getNormalized } from "../service/api";

export default function Analysis({ sendPressed }) {
  const [normalizedData, setNormalizedData] = useState([]);
  const [start, setStart] = useState(0);
  const [last, setLast] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const data = normalizedData.map(({ count, index }) => {
    return { x: index, y: count };
  });
  function handleNext() {
    if (last <= normalizedData.length) {
      setStart((prev) => prev + 10);
      setLast((prev) => prev + 10);
      setCurrentPage(currentPage + 1);
    }
  }
  function handlePrev() {
    if (start > 0 && currentPage > 0) {
      setStart((prev) => prev - 10);
      setLast((prev) => prev - 10);
      setCurrentPage(currentPage - 1);
    }
  }

  useEffect(() => {
    (async () => {
      const result = await getNormalized();
      console.log(result.data.normalizedArray);
      !result.success
        ? console.log(result.message)
        : setNormalizedData(
            result.data.normalizedArray.map(({ data, count }, index) => ({
              data,
              count,
              index,
            }))
          );
    })();
  }, [sendPressed]);
  return (
    <div id="analysis" className="my-10 mx-5">
      <h1 className="text-center text-4xl font-semibold">Analysis</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7 px-5 justify-center items-center  my-2 py-2">
        <div id="table" className="mt-5 min-w-[40%]">
          <table id="data-table">
            <thead>
              <tr>
                <th className="rank-column" data-id="name">
                  Rank <i className="fas fa-sort" id="rank"></i>
                </th>
                <th className="term-column" data-id="term">
                  Term
                </th>
                <th className="frequncy-column" data-id="frequency">
                  Frequency
                </th>
                <th className="frequncy-column" data-id="frequency">
                  Fr*Rank
                </th>
              </tr>
            </thead>
            <tbody className="table-body">
              {Array.from(normalizedData)
                .slice(start, last)
                .map(({ data, count, index }) => (
                  <tr key={index}>
                    <td data-label="rank">{index + 1}</td>
                    <td data-label="term">{data}</td>
                    <td data-label="frequency">{count}</td>
                    <td data-label="frequency">{(index + 1) * count}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex items-center justify-center gap-5 text-[17px] text-[#4ade80] font-semibold ">
            <div
              onClick={() => handlePrev()}
              className="bg-[#f9f9f9] px-[10px] py-[6px] rounded-md shadow-2xl shadow-slate-900/5 cursor-pointer hover:scale-90 duration-100 hover:ring-1"
            >
              <AiOutlineLeft />
            </div>
            <div className=" text-black">{currentPage}</div>
            <div
              onClick={() => handleNext()}
              className="bg-[#f9f9f9] px-[10px] py-[6px] rounded-md shadow-2xl shadow-slate-900/5 cursor-pointer hover:scale-90 duration-100 hover:ring-1"
            >
              <AiOutlineRight />
            </div>
          </div>
        </div>
        <div
          id="graph"
          className="cursor-pointer min-w-[40%] justify-center flex items-center"
        >
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={30}
            width={300}
            height={300}
          >
            <VictoryAxis label="Rank" style={{ axisLabel: { padding: 35 } }} />
            <VictoryAxis
              dependentAxis
              label="Frequency"
              style={{ axisLabel: { padding: 30 } }}
            />
            <VictoryLine
              data={data}
              style={{
                data: { stroke: "#4f46e5", strokeWidth: 1 },
              }}
            />
          </VictoryChart>
        </div>
      </div>
    </div>
  );
}
