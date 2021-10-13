
//Initial menu display
const iconMenu = document.getElementById('icon-menu');
const menu = document.getElementById('menu');
menu.style.display = 'block';



//Toogle Menu function
function toogleMenu (){
    let menuStyle = menu.style.display;
    if (menuStyle == 'block'){
        menu.style.display = 'none';
    };
    if (menuStyle == 'none'){
        menu.style.display = 'block';
    };
}

//Adding onclick event
iconMenu.onclick = toogleMenu;

