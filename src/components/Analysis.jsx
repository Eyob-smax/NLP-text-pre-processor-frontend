import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from "victory";

const data = [
  { x: 1, y: 1786 },
  { x: 2, y: 1288 },
  { x: 3, y: 970 },
  { x: 4, y: 643 },
  { x: 5, y: 732 },
  { x: 6, y: 512 },
  { x: 7, y: 309 },
  { x: 8, y: 189 },
];

export default function Analysis() {
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
              <tr>
                <td data-label="rank">1</td>
                <td data-label="term">the</td>
                <td data-label="freaquency">1786</td>
                <td data-label="freaquency">1786</td>
              </tr>
              <tr>
                <td data-label="rank">2</td>
                <td data-label="term">of</td>
                <td data-label="freaquency">1288</td>
                <td data-label="freaquency">1288</td>
              </tr>
              <tr>
                <td data-label="rank">3</td>
                <td data-label="term">you</td>
                <td data-label="freaquency">970</td>
                <td data-label="freaquency">970</td>
              </tr>
              <tr>
                <td data-label="rank">4</td>
                <td data-label="term">the</td>
                <td data-label="freaquency">643</td>
                <td data-label="freaquency">643</td>
              </tr>
              <tr>
                <td data-label="rank">5</td>
                <td data-label="term">be</td>
                <td data-label="freaquency">732</td>
                <td data-label="freaquency">732</td>
              </tr>
              <tr>
                <td data-label="rank">6</td>
                <td data-label="term">let</td>
                <td data-label="freaquency">512</td>
                <td data-label="freaquency">512</td>
              </tr>
              <tr>
                <td data-label="rank">7</td>
                <td data-label="term">not</td>
                <td data-label="freaquency">309</td>
                <td data-label="freaquency">309</td>
              </tr>
              <tr>
                <td data-label="rank">8</td>
                <td data-label="term">in</td>
                <td data-label="freaquency">189</td>
                <td data-label="freaquency">189</td>
              </tr>
            </tbody>
          </table>
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
