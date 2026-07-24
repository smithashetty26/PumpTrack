import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function AdminCharts({ stations }) {

  // =========================
  // Status Counts
  // =========================

  const openStations = stations.filter(
    (s) => s.status === "Open"
  ).length;

  const closedStations = stations.filter(
    (s) => s.status === "Closed"
  ).length;

  const busyStations = stations.filter(
    (s) =>
      s.queue === "Medium" ||
      s.queue === "High"
  ).length;

  // =========================
  // Queue Counts
  // =========================

  const lowQueue = stations.filter(
    (s) => s.queue === "Low"
  ).length;

  const mediumQueue = stations.filter(
    (s) => s.queue === "Medium"
  ).length;

  const highQueue = stations.filter(
    (s) => s.queue === "High"
  ).length;

  // =========================
  // Pie Chart
  // =========================

  const pieData = {
    labels: ["Open", "Busy", "Closed"],

    datasets: [
      {
        data: [
          openStations,
          busyStations,
          closedStations,
        ],

        backgroundColor: [
          "#22c55e",
          "#f59e0b",
          "#ef4444",
        ],

        borderColor: "#ffffff",
        borderWidth: 3,
      },
    ],
  };

  // =========================
  // Bar Chart
  // =========================

  const barData = {
    labels: [
      "Low",
      "Medium",
      "High",
    ],

    datasets: [
      {
        label: "Stations",

        data: [
          lowQueue,
          mediumQueue,
          highQueue,
        ],

        backgroundColor: [
          "#22c55e",
          "#f59e0b",
          "#ef4444",
        ],

        borderRadius: 8,

        maxBarThickness: 55,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          font: {
            size: 13,
          },

          padding: 15,
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          stepSize: 1,
        },

        grid: {
          color: "#e5e7eb",
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="admin-chart-grid">

      <div className="admin-chart-card">

        <h2>📊 PMP Status Distribution</h2>

        <div className="pie-wrapper">

          <Pie
            data={pieData}
            options={pieOptions}
          />

        </div>

      </div>

      <div className="admin-chart-card">

        <h2>📈 Queue Status Analysis</h2>

        <div className="bar-wrapper">

          <Bar
            data={barData}
            options={barOptions}
          />

        </div>

      </div>

    </div>
  );
}

export default AdminCharts;