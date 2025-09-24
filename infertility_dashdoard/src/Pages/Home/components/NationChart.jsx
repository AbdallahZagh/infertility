import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTranslation } from 'react-i18next';

ChartJS.register(ArcElement, Tooltip, Legend);

const NationChart = () => {
            const { t, i18n } = useTranslation();
  

  const data = {
    labels: ["مصرية", "سورية", "سعودية", "أخرى"],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: ["#f4b4af", "#4CB7A5", "#4A90E2", "#d6d6d6"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: { legend: { display: false } },
  };


  return (
     <div className="p-4 rounded-xl shadow-md shadow-gray-500 flex flex-col items-center w-[45%] h-">
      <h3 className="mb-3 text-md font-semibold">{t("nation")}</h3>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm" style={{ background: "#f4b4af" }}></span> مصرية
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm" style={{ background: "#d6d6d6" }}></span> أخرى
          </div>
        </div>

        <div className="w-[45%]">
          <Doughnut data={data} options={options} />
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm" style={{ background: "#4CB7A5" }}></span> سورية
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm" style={{ background: "#4A90E2" }}></span> سعودية
          </div>
        </div>
      </div>
    </div>
  )
}

export default NationChart