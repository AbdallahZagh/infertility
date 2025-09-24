import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTranslation } from "react-i18next";

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderChart = () => {

              const { t, i18n } = useTranslation();
  

      const data = {
    labels: ["إناث", "ذكور"],
    datasets: [
      {
        data: [60, 40], // female %, male %
        backgroundColor: ["#f4b4af", "#4A90E2"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%", // thickness of donut
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
        },
      },
    },
  };

  return (
     <div className="p-4 rounded-xl shadow-md shadow-gray-500 flex flex-col items-center w-[40%] ">
      <h3 className="text-md font-semibold mb-4">{t("genderPercent")}</h3>
      <div className="w-[100%] flex justify-evenly items-center">
      <div className="w-[50%]">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex justify-center flex-col gap-4 mt-4 text-sm">
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ background: "#f4b4af" }}></span> إناث
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-sm" style={{ background: "#4A90E2" }}></span> ذكور
        </div>
      </div>
      </div>
    </div>
  )
}

export default GenderChart