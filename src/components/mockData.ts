import { months } from "@/helper/Util";

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Online sales",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Face-to-face sales",
      data: [32, 44, 89, 110, 30, 23, 45, 49, 84, 10, 37, 41],
      fill: false,
      borderColor: "rgb(75, 192, 98)",
      tension: 0.1,
    },
  ],
};

export const doughnutChartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Transactions Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(244, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
