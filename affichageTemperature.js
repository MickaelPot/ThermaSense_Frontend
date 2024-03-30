import {parametres} from "./parametres.js";

export const affichageTemperature = () =>{
    const htmlTemperature = document.getElementById("temperature");

    const endpoint= "get/temperature/"
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
        .then((result) => validation(result))
        .catch((error) => message_erreur.innerHTML="erreur de connexion avec le serveur");


    const validation = (result) => {
        const reponse = JSON.parse(result);
        const temperatureRelevee = reponse.temperature;
        htmlTemperature.innerHTML= temperatureRelevee+"°C";
    }


}