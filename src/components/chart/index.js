import React, { useRef, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Select, Option } from "@material-tailwind/react";

// static temp chart data
let temp = {
  options: {
    chart: {
      type: "line",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: [
        2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
        2018, 2019, 2020, 2021, 2022, 2023,
      ],
    },
    tooltip: {
      custom: function () {
        return (
          '<div class="tooltip-div">' +
          '<h6 class="text-18 text-green">Title Change</h6>' +
          "<p>JUN-10-2023 @ 20.43</p> " +
          "<div><br />" +
          '3 in 1 <span class="text-green">Portable</span> Wireless Charging' +
          "Station for Apple <br /> Devices, Premium" +
          '<span class="text-red">15w </span>Fast Wireless Mag-Safe <br />Charger' +
          'Stand with QC 3.0 <span class="text-green">Pro</span>' +
          "Adapter for iPhone <br />14/13/12/ Pro/Max / Plus / Pro / Mini, iWatch" +
          'Ultra/8/<br /> 7/SE/6/5/4/3/2, <span class="text-red">AirPods</span>' +
          "</div>" +
          "</div>"
        );
      },
    },
  },
  series: [
    {
      name: "series-1",
      data: [
        535, 944, 1834, 1542, 657, 368, 532, 337, 1103, 195, 1048, 1859, 1365,
        741, 333, 902, 806, 1828,
      ],
      color: "#f8a4b4",
    },
    {
      name: "series-2",
      data: [
        1312, 769, 1526, 1741, 108, 525, 512, 949, 658, 1702, 1780, 1109, 1482,
        1853, 1370, 1597, 1330, 1134,
      ],
      color: "#c9c2fa",
    },
    {
      name: "series-3",
      data: [
        1128, 1134, 1509, 1116, 1401, 380, 252, 717, 1225, 109, 1915, 1387,
        1707, 341, 1187, 821, 160, 1552,
      ],
      color: "#3ccb7f",
    },
    {
      name: "series-4",
      data: [
        1755, 1567, 1657, 35, 430, 1711, 1559, 1880, 1004, 1055, 144, 1749, 920,
        1524, 21, 1724, 172, 174,
      ],
      color: "#f49663",
    },
  ],
};

// chart components
const ChartComponent = () => {
  const [chartData, setChartData] = useState(temp);
  const [chartType, setChartType] = useState("line");
  const chartRef = useRef(null);

  useEffect(() => {
    console.log(chartType);
    setChartData({
      ...chartData,
      options: {
        ...chartData.options,
        chart: {
          ...chartData.options.chart,
          type: chartType,
        },
      },
    });
  }, [chartType]);

  console.log(chartData);

  return (
    <div className="apax-chart md:mt-0 mt-[20px]">
      <div className="flex ">
        <SelectDefault
          value={chartType}
          onChange={(value) => setChartType(value)}
          label={"View"}
        />
        <SelectDefault
          onChange={(value) => setChartType(value)}
          label={"Result"}
        />
        <SelectDefault
          onChange={(value) => setChartType(value)}
          label={"Range"}
        />
      </div>
      <div className="mt-4 mixed-chart  border p-5 rounded-[20px] border-solid border-[#dde0e7] bg-[#f9fafb]">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type={chartData.options.chart.type}
          height={400}
          ref={chartRef}
        />
      </div>
    </div>
  );
};

export default ChartComponent;

const SelectDefault = (props) => {
  const { value, onChange, label } = props;
  return (
    <div className="mr-2 w-[120px] chart-select-option">
      <Select label={label} onChange={onChange} value={value}>
        <Option value="line">Line Chart</Option>
        <Option value="bar">Bar Chart</Option>
        <Option value="area">Area Chart</Option>
      </Select>
    </div>
  );
};
