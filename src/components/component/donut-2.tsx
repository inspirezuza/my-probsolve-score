import React from "react";

interface ChartDataItem {
  name: string;
  value: number;
  color?: string;
  count?: number;
}

interface ChartProps {
  data: ChartDataItem[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);
  const totalDegrees = 360; // Total degrees in a circle
  const total_value_except_last = data
    .slice(0, -1)
    .reduce((a, b) => a + b.value, 0);
  // Calculate start and end degrees for each data item
  let startDegree = 0;
  const chartSegments = data.map((item) => {
    const percent = (item.value / totalValue) * 100;
    const degrees = (percent / 100) * totalDegrees;
    const segment = {
      ...item,
      startDegree,
      endDegree: startDegree + degrees,
    };
    startDegree += degrees;
    return segment;
  });

  // Generate CSS string for conic gradient
  const cssString = chartSegments
    .map(
      (segment) =>
        `${segment.color ?? ""} ${segment.startDegree}deg ${
          segment.endDegree
        }deg`
    )
    .join(",");

  return (
    <div className="flex flex-col gap-1 grow">
      <div className="flex flex-col grow"></div>
      <div>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full rounded-full"
        >
          <clipPath id="hole">
            <path d="M 50 0 a 50 50 0 0 1 0 100 50 50 0 0 1 0 -100 v 18 a 2 2 0 0 0 0 64 2 2 0 0 0 0 -64" />
          </clipPath>
          <foreignObject
            x="0"
            y="0"
            width="100"
            height="100"
            clipPath="url(#hole)"
          >
            <div
              className="w-full h-full"
              style={{ background: `conic-gradient(${cssString})` }}
            />
          </foreignObject>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="black"
            className="text-xs font-semibold"
          >
            {total_value_except_last}/{totalValue}
          </text>
          <text
            x="50%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="gray"
            fontSize="5px"
            className="text-gray-500 dark:text-gray-400"
          >
            Total Percent
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Chart;
