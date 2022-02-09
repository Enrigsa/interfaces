
//Initial menu display
const iconMenu = document.getElementById('icon-menu');
const menu = document.getElementById('menu');
let toogle = true;



//Toogle Menu function
function toogleMenu (){
    if (toogle == true){
        menu.style.display = 'none';
        toogle = false;
    } else if (toogle == false){
        menu.style.display = 'block';
        toogle = true;
    };
}

//Adding onclick event
iconMenu.onclick = toogleMenu;

