import {deconnexion} from "./main.js";

export const themeDasboard = () =>{
    const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

    sideLinks.forEach(item => {
        const li = item.parentElement;
        item.addEventListener('click', () => {
            sideLinks.forEach(i => {
                i.parentElement.classList.remove('active');
            })
            li.classList.add('active');
        })
    });

    const menuBar = document.querySelector('.content nav .bx.bx-menu');
    const sideBar = document.querySelector('.sidebar');

    menuBar.addEventListener('click', () => {
        sideBar.classList.toggle('close');
    });



    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            sideBar.classList.add('close');
        } else {
            sideBar.classList.remove('close');
        }
    });

    const toggler = document.getElementById('theme-toggle');

    toggler.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });

    const deco = document.getElementById("deconnexion");
    deco.addEventListener("click",() => {
        deconnexion()
    });
}