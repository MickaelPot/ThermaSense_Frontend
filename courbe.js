import Chart from 'chart.js/auto'

export const courbe= () =>{


    (async function() {
        const data = [
            { jour: "20 Mars", count: 19 },
            { jour: "21 Mars", count: 21 },
            { jour: "22 Mars", count: 19 },
            { jour: "23 Mars", count: 20 },
            { jour: "24 Mars", count: 15 },
            { jour: "25 Mars", count: 19 },
        ];

        new Chart(
            document.getElementById('acquisitions'),
            {
                type: 'line',
                data: {
                    labels: data.map(row => row.jour),
                    datasets: [
                        {
                            label: 'températures en degrés',
                            data: data.map(row => row.count)
                        }
                    ]
                }
            }
        );
    })();
}