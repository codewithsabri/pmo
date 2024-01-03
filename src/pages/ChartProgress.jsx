import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'My streaks progress',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September','October','November','December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Porn',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Faping',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Orgasm',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      backgroundColor: 'rgba(53, 162, 175, 0.5)',
    },
  ],
};

export default function ChartProgress() {
  return <div className=" "> <div  className="chart-container grid h-screen  place-items-center" style={{ position: "relative", height: "60vh", width:"100vw"}} ><Bar  options={options} data={data} /></div>; </div>
}
