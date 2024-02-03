import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { setVolume } from "./FirstCompoBody";

export default function ChartForStock() {

let mainVolumn = useContext(setVolume);

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
   const options = {
    responsive: true,
    color: "#ffffff",
    plugins: {
      legend: {},
      title: {
        display: true,
        text: "Volume",
        color: "#ffffff",
      },
    },
  };
  
  const labels = [2013, 2014, 2015, 2016, 2018,2019,2020,2021,2022,2023];
  // const volume1 = useContext(setVolume);
  
  // let main = setVolume;
   const data = {
    labels,
    datasets: [
      {
        label: "Prevous Year Volume",
        data: labels.map(() => faker.datatype.number({ min: 0, max: mainVolumn })),
        backgroundColor: "gold",
        color: "#ffffff",
      },
    ],
  };



  return (
    <>
      <Bar options={options} data={data} />
      
    </>
  );
}
