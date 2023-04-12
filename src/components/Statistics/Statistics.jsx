import React from "react";
import { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Assignment One", value: 60 },
  { name: "Assignment Two", value: 60 },
  { name: "Assignment Three", value: 59 },
  { name: "Assignment Four", value: 60 },
  { name: "Assignment Five", value: 60 },
  { name: "Assignment Six", value: 60 },
  { name: "Assignment Seven", value: 60 },
  { name: "Assignment Eight", value: 60 },
];

const Statistics = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="rgb(124 58 237)"
          label
          // #8884d8
        />

        <Tooltip />
      </PieChart>
      <div>
        <h3 className="text-2xl font-bold">My assignment Marks Chart</h3>
      </div>
    </div>
  );
};

export default Statistics;
