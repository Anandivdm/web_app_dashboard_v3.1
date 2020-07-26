let trafficChart =  document.getElementById('traffic-chart');

var myChart = new Chart(trafficChart, {
  type: 'line',
  data: {
      labels: ['16-22', '23-29', '30-5', '16-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets: [{
        label: '',
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderColor:'rgba(116, 119, 191, 1)',
        borderWidth: 1,
        borderCapStyle: 'square',
        lineTension: 0,
        pointBackgroundColor:'rgba(255, 255, 255, 1)',
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointBorderWidth: 2,
        pointRadius: 4,
      }]
  },
  options: {
    responsive: true,
    aspectRatio: 3.5,
    animation: {
      duration: 0
      },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend : {
      display: false
    }
  },
});
