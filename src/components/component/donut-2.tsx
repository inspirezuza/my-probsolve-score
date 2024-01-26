"use server";

import React from "react";

interface ChartDataItem {
  name: string;
  value: number;
  color?: string;
  count?: number; // Add count property
  start_value?: number; // Add start_value property
  end_value?: number; // Add end_value property
  start_percent?: number; // Add start_percent property
  end_percent?: number; // Add end_percent property
  start_degrees?: number; // Add start_degrees property
  end_degrees?: number; // Add end_degrees property
}

interface ChartProps {
  data: ChartDataItem[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const total_value = data.reduce((a, b) => a + b.value, 0);
  console.log(data);
  const total_value_except_last = data
    .slice(0, -1)
    .reduce((a, b) => a + b.value, 0);
  const convertToPercent = (num: number): number =>
    Math.round((num / total_value) * 100);
  const convertToDegrees = (num: number): number =>
    Math.round((num / 100) * 360);

  const css_string = data
    .reduce((items: ChartDataItem[], item, index, array) => {
      items.push(item);

      item.count = item.count || 0;
      item.count += array[index - 1]?.count || item.count;
      item.start_value = array[index - 1]?.count ? array[index - 1].count : 0;
      item.end_value = item.count += item.value;
      item.start_percent = convertToPercent(item.start_value || 0);
      item.end_percent = convertToPercent(item.end_value || 0);
      item.start_degrees = convertToDegrees(item.start_percent || 0);
      item.end_degrees = convertToDegrees(item.end_percent || 0);

      return items;
    }, [])
    .map((chart) => {
      const { color, start_degrees, end_degrees } = chart;
      return ` ${color ?? ""} ${start_degrees}deg ${end_degrees}deg`;
    })
    .join();

  return (
    <div className=" flex flex-col gap-1 grow">
      <div className="flex flex-col grow"></div>
      <div>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full rounded-full "
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
              style={{
                background: `conic-gradient(${css_string})`,
              }}
            />
          </foreignObject>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="black"
            // fontSize="16px"
            className="text-xs font-semibold"
          >
            {total_value_except_last}/{total_value}
          </text>
          <text
            x="50%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="gray"
            fontSize="7px"
            className=" text-gray-500 dark:text-gray-400 "
          >
            percent
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Chart;
