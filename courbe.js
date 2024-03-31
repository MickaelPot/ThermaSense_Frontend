import Chart from 'chart.js/auto'
import {parametres} from "./parametres.js";

const mois = {
    "1": "janvier",
    "2": "février",
    "3": "mars",
    "4": "avril",
    "5": "mai",
    "6": "juin",
    "7": "juillet",
    "8": "août",
    "9": "septembre",
    "10": "octobre",
    "11": "novembre",
    "12": "décembre",
}

let monChart;

export const getTemperatureByDay = () => {
    const endpoint= "get/today/"
    const URL = parametres.BACKEND_URL+endpoint;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    fetch(URL, requestOptions)
        .then((response) => response.text())
        .then((result) => validationDay(result))
}

async function  validationDay (result) {
    const reponse = JSON.parse(result);
    if(monChart != null){
        monChart.destroy()
    }
        monChart =  new Chart(
            document.getElementById('acquisitions'),
            {
                type: 'line',
                data: {
                    labels: reponse.reponse.map(row => (row.heure + " h")),
                    datasets: [
                        {
                            label: 'températures en degrés',
                            data: reponse.reponse.map(row => row.cumul)
                        }
                    ]
                }
            }
        );
}

export const getTemperatureByWeek = () => {
    const endpoint= "get/week/"
    const URL = parametres.BACKEND_URL+endpoint;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    fetch(URL, requestOptions)
        .then((response) => response.text())
        .then((result) => validationWeek(result))
}

async function  validationWeek (result) {
    const reponse = JSON.parse(result);
    if(monChart != null){
        monChart.destroy()
    }
    monChart = new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'line',
            data: {
                labels: reponse.reponse.map(row => (row.jour.split( " ")[0] + " " + mois[row.jour.split( " ")[1]])),
                datasets: [
                    {
                        label: 'températures en degrés',
                        data: reponse.reponse.map(row => row.cumul)
                    }
                ]
            }
        }
    );
}

export const selecteurTemperature = () => {
    const bouton = document.getElementById("changeMode");
    bouton.addEventListener("click", () => {
        console.log(bouton.textContent);
        if(bouton.textContent === "Sur 5 jours"){
            bouton.textContent = "Aujourd'hui";
            getTemperatureByDay();
        }else{
            bouton.textContent = "Sur 5 jours";
            getTemperatureByWeek();
        }
    })
}