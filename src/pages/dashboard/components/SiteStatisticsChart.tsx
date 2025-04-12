import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SiteStatisticsChart: React.FC = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 10,
        },
      },
    },
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Social',
        data: [220, 140, 350, 120, 500, 680, 120, 350, 1150, 240, 140, 100],
        backgroundColor: '#FF0000',
        borderRadius: 6,
      },
      {
        label: 'Connect',
        data: [650, 1150, 650, 650, 650, 950, 650, 250, 550, 350, 500, 950],
        backgroundColor: '#0000FF',
        borderRadius: 6,
      },
      {
        label: 'Market',
        data: [650, 1150, 650, 650, 650, 950, 650, 250, 550, 350, 500, 950],
        backgroundColor: '#008000',
        borderRadius: 6,
      },
      {
        label: 'Gym Hub',
        data: [650, 1150, 650, 650, 650, 950, 650, 250, 550, 350, 500, 950],
        backgroundColor: '#800080',
        borderRadius: 6,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default SiteStatisticsChart;