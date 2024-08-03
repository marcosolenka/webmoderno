const columnChart = document.getElementById("column-chart");
const barChartLabels = ["Brasil", "Argetina", "Uruguay", "Paraguay"];
const barChartValues = [10, 20, 30, 40];

new Chart(columnChart, {
  type: "bar",
  data: {
    labels: barChartLabels,
    datasets: [
      {
        label: "# of Votes",
        data: barChartValues,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//-----------------------------------------------------------------------------------------//
const text = document.querySelector("#texto");
const endpoint = "texto.txt";

fetch(endpoint)
  .then((res) => res.text())
  .then((res) => {
    console.log(res);
    res = JSON.parse(res);
    console.log(res.id);
    console.log(res.nome);
    console.log(res.sobrenome);
  });
