import './login.css';
import {foldFormulaire} from "./fold.js";
import {enregistrementUser} from "./enregistrementUser.js";
import {connexionUser} from "./connexionUser.js";

export const loginPage= () =>{
    //Intitulés dans les formulaires
    const intitule_nom="Nom";
    const intitule_prenom="Prenom";
    const intitule_mail="Mail";

//Titres
    const creation_compte= "Créer son compte";
    const connexion_compte= "Connexion";
    const titre_toggle_left= "Déja inscrit ?";
    const titre_toggle_right= "S'inscrire";

//Boutons
    const btn_validation = "Valider";
    const btn_toggle_left = "Se connecter";
    const btn_toggle_right = "S'enregistrer";

//Strings
    const text_toggle_left="Saisissez vos identifiants pour vous connecter"
    const text_toggle_right="Pas encore inscrit ?"


    document.querySelector('#app').innerHTML = `
<div class="principal">
   <div class="fenetre" id="fenetre">
        <div class="form-container sign-up">
            <div class="formulaire">
                <h1>${creation_compte}</h1>
                  <input type="text"
                            id="name_recording"
                            placeholder=${intitule_nom}
                              />
                  <input type="text"
                            id="prenom_recording"
                            placeholder=${intitule_prenom} />
                  <input type="text"
                            id="mail_recording"
                            placeholder=mail />
                  <input type="password"
                            id="mdp_recording"
                            placeholder="Mot de passe" />
                  <input type="password"
                            id="saisie_recording"
                            placeholder= "Saisissez à nouveau votre mot de passe" />
                  <button id="enregistrement_compte">${btn_toggle_right}</button>
                  <p id="error-recording"></p>
            </div>
        </div>
        <div class="form-container sign-in">
            <div class="formulaire">
                <h1>${connexion_compte}</h1>
                  <input type="text"
                            id="mail_connexion"
                             =${intitule_mail} />
                  <input type="password"
                            id="password_connexion"
                            placeholder="Mot de passe" />
                  <button id="connexion_compte">${btn_validation}</button>
                  <p id="error-connexion"></p>
            </div>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>${titre_toggle_left}</h1>
                      <p>${text_toggle_left}</p>
                      <button className="hidden" id="login">${btn_toggle_left}</button>
                </div>
                <div class="toggle-panel toggle-right">
                     <h1>${titre_toggle_right}</h1>
                      <p>${text_toggle_right}</p>
                      <button className="hidden" id="register">${btn_toggle_right}</button>
                </div>
            </div>
        </div>
    </div>
</div>
`
    foldFormulaire();
    enregistrementUser();
    connexionUser();
}