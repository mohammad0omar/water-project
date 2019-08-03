
var ctx = document.getElementById("bar").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["12/19/18", "12/20/18"],
        datasets: [{
            label: 'Readings',
            data: [198, 692],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById("barperZone").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Rmeil"],
        datasets: [{
            label: '# of Tasks',
            data: [164],
            backgroundColor: [

                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [

                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

new Chart(document.getElementById("myChart2"),
{
    "type": "pie", "data": {
        "labels": ["Reading", "removal"],
        "datasets":
        [{
            "label": "My First Dataset",
            "data": [300, 50],
            "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)"
            ]
        }]
    }
});

new Chart(document.getElementById("myChart3"),
{
    "type": "doughnut", "data": {
        "labels": ["Assinged"],
        "datasets":
        [{
            "label": "My First Dataset",
            "data": [100, 0],
            "backgroundColor": ["rgb(255, 205, 86)"
            ]
        }]
    }
});

new Chart(document.getElementById("myChart4"),
{
    "type": "polarArea", "data": {
        "labels": ["Assigned", "Not Done", "Done"],
        "datasets": [{
            "label": "My First Dataset", "data": [100, 20, 50],
            "backgroundColor": ["rgb(75, 192, 192)", "rgb(255, 205, 86)", "rgb(54, 162, 235)"]
        }]
    }
});

new Chart(document.getElementById("myChart5"), {
    "type": "radar",
    "data": {
        "labels": ["Closed after deadline", "Closed before deadline", "Expired"],
        "datasets": [{
            "label": "My First Dataset", "data": [100, 20, 2],
            "fill": true,
            "backgroundColor": "rgba(255, 99, 132, 0.2)", "borderColor": "rgb(255, 99, 132)",
            "pointBackgroundColor": "rgb(255, 99, 132)", "pointBorderColor": "#fff",
            "pointHoverBackgroundColor": "#fff", "pointHoverBorderColor": "rgb(255, 99, 132)"
        },
        ]
    },
    "options": { "elements": { "line": { "tension": 0, "borderWidth": 3 } } }
});