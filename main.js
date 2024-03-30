import {loginPage} from "./loginPage.js";
import {dashboard} from "./dashboard.js";

const authentifie= true;
if (authentifie){
    dashboard()
}else{
    loginPage();
}




