import {parametres} from "./parametres.js";

export function enregistrementUser() {
    const btnValidation = document.getElementById("enregistrement_compte");
    btnValidation.addEventListener("click", ()=>{
        const message_erreur= document.getElementById("error-recording");
        message_erreur.innerHTML="";
        let saisie_valide=true;

        const name= document.getElementById("name_recording").value;
        const prenom= document.getElementById("prenom_recording").value;
        const mail= document.getElementById("mail_recording").value;
        const mdp= document.getElementById("mdp_recording").value;
        const verification_mdp= document.getElementById("saisie_recording").value;

        if(verification_mdp!==mdp){
            saisie_valide=false;
            message_erreur.innerHTML="Les mots de passe saisis doivent être les mêmes";
        }

        if(verification_mdp===""){
            saisie_valide=false;
            message_erreur.innerHTML="saisie de la vérification de mot de passe incorrecte";
        }

        if(mdp===""){
            saisie_valide=false;
            message_erreur.innerHTML="saisie du mot de passe incorrecte";
        }

        if(mail===""){
            saisie_valide=false;
            message_erreur.innerHTML="saisie du mail incorrect";
        }

        if(prenom===""){
            saisie_valide=false;
            message_erreur.innerHTML="saisie du prénom incorrecte";
        }

        if(name===""){
            saisie_valide=false;
            message_erreur.innerHTML="saisie du nom incorrecte";
        }

        if(saisie_valide){
            message_erreur.innerHTML="";
            const raw = JSON.stringify({
                "first_name": name,
                "last_name": prenom,
                "mail": mail,
                "password": mdp
            });

            const endpoint= "add/user/"
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
                .catch((error) => console.log("test"));
        }
    });

    const validation= (result) =>{
        const reponse = JSON.parse(result);
        const message_erreur= document.getElementById("error-recording");
        if(reponse.message === "mail existant"){
            message_erreur.innerHTML="Compte existant";
        }
        if(reponse.message === "success"){
            message_erreur.innerHTML="";
            const container = document.getElementById('container');
            container.classList.remove("active");
        }
    }
}