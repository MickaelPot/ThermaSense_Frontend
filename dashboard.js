import './dashboard.css';
import {themeDasboard} from "./themeDashboard.js";
import {courbe} from "./courbe.js";
import {affichageTemperature} from "./affichageTemperature.js";
import {deconnexion} from "./main.js";


export const dashboard= ()=>{
    //Nom des menus
    const nom_menu_principal = "Accueil";
    const nom_menu_logements = "Logements";
    const nom_menu_capteurs = "Capteurs";
    const nom_menu_compte = "Mon compte";
    const nom_menu_deconnexion = "Déconnexion";

    //Nom des widgets
    const nom_widget_temperature= "Temperature actuelle";
    const nom_widget_courbe= "Courbe des temperatures";

    document.querySelector('#app').innerHTML = `
   <div class="sidebar">
        <a href="#" class="logo">
            <i class='bx bx-code-alt'></i>
            <div class="logo-name">
                <img src="public/logo.png">
            </div>
        </a>
        <ul class="side-menu">
            <li class="active"><a href="#"><i class='bx bxs-dashboard'></i>${nom_menu_principal}</a></li>
            <li><a href="#"><i class='bx bx-store-alt'></i>${nom_menu_logements}</a></li>
            <li><a href="#"><i class='bx bx-message-square-dots'></i>${nom_menu_capteurs}</a></li>
            <li><a href="#"><i class='bx bx-cog'></i>${nom_menu_compte}</a></li>
        </ul>
        <ul class="side-menu" id="deconnexion">
            <li>
                <a href="#" class="logout">
                    <i class='bx bx-log-out-circle'></i>
                    ${nom_menu_deconnexion}
                </a>
            </li>
        </ul>
    </div>
    <!-- End of Sidebar -->

    <!-- Main Content -->
    <div class="content">
        <!-- Navbar -->
        <nav>
            <i class='bx bx-menu'></i>
            <form action="#">
                <div class="form-input">
                    <img src="public/nom.png">
                </div>
            </form>
            <input type="checkbox" id="theme-toggle" hidden>
            <label for="theme-toggle" class="theme-toggle"></label>
        </nav>

        <!-- End of Navbar -->

        <main>
            <div class="header">
                <div class="left">
                    <h1>${nom_menu_principal}</h1>
                </div>
            </div>
            
            <div class="bottom-data">
                <div class="orders">
                    <div class="header">
                        <i class='bx bx-receipt'></i>
                        <h3>${nom_widget_temperature}</h3>
                        <i class='bx bx-filter'></i>
                        <i class='bx bx-search'></i>
                    </div>
                    <div class="tmp"><H4 id="temperature"></H4></div>
                </div>

                <!-- Reminders -->
                <div class="reminders">
                    <div class="header">
                        <i class='bx bx-note'></i>
                        <h3>${nom_widget_courbe}</h3>
                        <i class='bx bx-filter'></i>
                        <i class='bx bx-plus'></i>
                    </div>
                    <canvas id="acquisitions">
                </div>

                <!-- End of Reminders-->

            </div>

        </main>

    </div>
`;
    themeDasboard();
    courbe();
    affichageTemperature();
    // Lancer la requête toutes les 10 seco(((((((((ndes
    setInterval(affichageTemperature, 30000);
}