import {loginPage} from "./loginPage.js";
import {dashboard} from "./dashboard.js";
import {parametres} from "./parametres.js";

// Fonction pour lire la valeur d'un cookie en fonction de son nom
function getCookie(name) {
    // Séparez les cookies individuels en utilisant le point-virgule comme séparateur
    const cookies = document.cookie.split(';');
    console.log(cookies)

    // Parcourez tous les cookies pour trouver celui avec le nom spécifié
    for (let cookie of cookies) {
        // Supprimez les espaces en début et fin de chaîne
        cookie = cookie.trim();

        // Si le cookie commence par le nom recherché suivi du signe égal
        if (cookie.startsWith(name + '=')) {
            // Retournez la valeur du cookie
            return cookie.substring(name.length + 1);
        }
    }

    // Si aucun cookie avec le nom spécifié n'est trouvé, retournez null
    return null;
}
export function authentification(){
    const tokenValue = getCookie('mon_token');
    if(tokenValue != null){
        dashboard()
    }else{
        loginPage()
    }
}

export function deconnexion(){
    document.cookie = 'mon_token' + "=;Secure; SameSite=None; expires=Thu, 01 Jan 1970 00:00:00 UTC; ;";
    authentification();
}

authentification();






