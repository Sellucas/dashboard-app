import { months } from "@/helper/Util";

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Online sales",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 87],
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

export const doughnutChartDataUserType = {
  labels: ["Person", "Company", "Industry", "Commerce", "Personal Sales"],
  datasets: [
    {
      label: "Transactions Dataset",
      data: [200, 50, 400, 480, 90],
      backgroundColor: [
        "rgb(0,171,197)",
        "rgb(178,229,237)",
        "rgb(255,255,0)",
        "rgb(255,146,72)",
        "rgb(214,45,32)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartDataRevenue = {
  labels: ["Earn", "Spend"],
  datasets: [
    {
      label: "Transactions Dataset",
      data: [80, 20],
      backgroundColor: ["rgb(0,171,197)", "rgb(255,255,0)"],
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartDataCountry = {
  labels: ["Brazil", "France", "China", "Japan", "USA"],
  datasets: [
    {
      label: "Transactions Dataset",
      data: [100, 50, 210, 330, 190],
      backgroundColor: [
        "rgb(0,171,197)",
        "rgb(178,229,237)",
        "rgb(255,255,0)",
        "rgb(255,146,72)",
        "rgb(214,45,32)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartDataCustomerRetention = {
  labels: ["Loyal Customers", "Non-Loyal Customers"],
  datasets: [
    {
      label: "Transactions Dataset",
      data: [70, 30],
      backgroundColor: ["rgb(0,171,197)", "rgb(178,229,237)"],
      hoverOffset: 4,
    },
  ],
};
