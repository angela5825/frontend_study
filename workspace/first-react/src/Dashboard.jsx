import { useRef, useEffect } from "react";
import styles from "./Dashboard.module.css";

import { Chart } from "chart.js/auto";

const ChartComponent = ({ type, options, data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type,
        data,
        options,
      });
    }

    // 왼쪽에는 요소, type과 value들
  }, []);

  return (
    <div className="chart-box">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

const Dashboard = ({}) => {
  const charts = [
    {
      type: "bar",
      data: {
        labels: ["기술력", "디자인", "마케팅", "가격", "서비스"],
        datasets: [
          {
            label: "월별 판매량",
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: "rgba(0, 192, 255, 0.8)",
            borderColor: "rgba(0, 192, 255, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: { responsive: true },
    },
    {
      type: "line",
      data: {
        labels: ["기술력", "디자인", "마케팅", "가격", "서비스"],
        datasets: [
          {
            label: "매출 변화",
            data: [65, 59, 80, 81, 56, 55],
            borderColor: "#ff6384",
            borderWidth: 3,
            fill: false,
          },
        ],
      },
      options: { responsive: true },
    },
    {
      type: "pie",
      data: {
        labels: ["A제품", "B제품", "C제품"],
        datasets: [
          {
            data: [30, 45, 25],
            backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
          },
        ],
      },
      options: { responsive: true },
    },
    {
      type: "doughnut",
      data: {
        labels: ["서울", "부산", "대구", "광주"],
        datasets: [
          {
            data: [40, 25, 20, 15],
            backgroundColor: ["#ff6384", "#36a2eb", "#4bc0c0", "#ff9f40"],
          },
        ],
      },
      options: { responsive: true },
    },
    {
      type: "radar",
      data: {
        labels: ["기술력", "디자인", "마케팅", "가격", "서비스"],
        datasets: [
          {
            label: "제품 평가",
            data: [80, 90, 75, 85, 95],
            borderColor: "#36a2eb",
            backgroundColor: "rgba(54, 162, 235, 0.3)",
          },
        ],
      },
      options: { responsive: true },
    },
  ];

  return (
    <div>
      <h2>📊 Chart.js 대시보드</h2>

      <div className="dashboard">
        {charts.map((chart, index) => (
          <ChartComponent
            key={index}
            type={chart.type}
            options={chart.options}
            data={chart.data}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
