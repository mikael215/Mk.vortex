const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    datasets: [{
      label: 'BTC/USD',
      data: [30000, 31000, 30500, 31500, 32000],
      borderColor: '#00c853',
      borderWidth: 2,
      fill: false,
      tension: 0.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#fff' }
      },
      y: {
        ticks: { color: '#fff' }
      }
    }
  }
});