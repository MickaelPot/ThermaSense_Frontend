import {parametres} from "./parametres.js";
import {authentification} from "./main.js";

export function connexionUser() {
    const btnValidation = document.getElementById("connexion_compte");
    btnValidation.addEventListener("click", ()=> {
        const message_erreur = document.getElementById("error-connexion");
        message_erreur.innerHTML = "";
        let saisie_valide = true;

        const mail = document.getElementById("mail_connexion").value;
        const mdp = document.getElementById("password_connexion").value;

        if(mdp===""){
            saisie_valide=false;
            message_erreur.innerHTML="saisie du mot de passe incorrecte";
        }

        if(mail===""){
            saisie_valide=false;
            message_erreur.innerHTML="saisie du mail incorrect";
        }

        if(saisie_valide){
            message_erreur.innerHTML="";
            const raw = JSON.stringify({
                "mail": mail,
                "password": mdp
            });

            const endpoint= "authorize/user/"
            const URL = parametres.BACKEND_URL+endpoint;
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch(URL, requestOptions)
                .then((response) => response.text())
                .then((result) => validation(result))
                .catch((error) => message_erreur.innerHTML="erreur de connexion avec le serveur");
        }
    });

    const validation= (result) =>{
        const reponse = JSON.parse(result);
        console.log(reponse);
        const message_erreur= document.getElementById("error-connexion");
        if(reponse.message === "mail existant"){
            message_erreur.innerHTML="Compte existant";
        }
        if(reponse.message === "success"){
            message_erreur.innerHTML="";
            const container = document.getElementById('container');
            //container.classList.remove("active");
            if(!reponse.token){
                message_erreur.innerHTML="Probleme de serveur. Merci d'informer les équipes de Therma-sense";
            }else{
                //Copie du token dans les cookies =>expiration dans une heure
                const temps_seconde= 3600;
                document.cookie = `mon_token=${reponse.token}; Secure; SameSite=None; expires=${new Date(Date.now() + temps_seconde * 1000).toUTCString()}`;
                authentification();
            }
        }
    }
}