let trafficChart =  document.getElementById('traffic-chart');
let dailyTrafficChart = document.getElementById('daily-traffic-chart');
let mobileUsersChart = document.getElementById('mobile-users-chart');


// Traffic

let traffic = new Chart(trafficChart, {
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

// Daily Traffic

let dailyTraffic = new Chart(dailyTrafficChart, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1,
      maxBarThickness: 20,
      }]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
    legend : {
      display: false
    }
  },
});

// Mobile Users

let mobileUsers = new Chart(mobileUsersChart, {
  type: 'doughnut',
  data: {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
      ]
    }]
  },
  options: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
  }
});x