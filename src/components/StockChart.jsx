import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Chart from "react-apexcharts";
import { FaArrowLeft } from "react-icons/fa";

export const StockChart = ({ chartData, symbol }) => {
  const [dateFormat, setDateFormat] = useState("24h");
  const { day, week, year } = chartData;
  const navigate = useNavigate();

  const determineTimeFormat = () => {
    switch (dateFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1yr":
        return year;
      default:
        return day;
    }
  };

  const color =
    determineTimeFormat()[determineTimeFormat().length - 1].y -
      determineTimeFormat()[0].y >
    0
      ? "#36C281"
      : "#ed3419";

  const options = {
    colors: [color],
    title: {
      text: symbol,
      align: "center",
      style: {
        fontSize: "24px",
      },
    },
    chart: {
      id: "stock data",
      animations: {
        speed: 1300,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        datatimeUTC: false,
      },
    },
    tooltip: {
      x: {
        format: "MMM dd HH:MM",
      },
    },
  };

  const series = [
    {
      name: symbol,
      data: determineTimeFormat(),
    },
  ];

  const renderBtnSelect = (button) => {
    const classes = "btn m-1 ";
    if (button === dateFormat) {
      return classes + "btn-primary";
    } else {
      return classes + "btn-outline-primary";
    }
  };

  const navigateBack = () => {
    navigate(`/`);
  }

  return (
    <div className="mt-5 p-4 shadow-sm bg-white">
      <button className="btn btn-outline-primary" onClick={() => navigateBack()}>
        <FaArrowLeft />
      </button>
      <Chart options={options} series={series} type="area" width="1000px" />
      <div>
        <button
          className={renderBtnSelect("24h")}
          onClick={() => setDateFormat("24h")}
        >
          24h
        </button>
        <button
          className={renderBtnSelect("7d")}
          onClick={() => setDateFormat("7d")}
        >
          7d
        </button>
        <button
          className={renderBtnSelect("1yr")}
          onClick={() => setDateFormat("1yr")}
        >
          1yr
        </button>
      </div>
    </div>
  );
};
