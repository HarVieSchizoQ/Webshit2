var menu = document.getElementById("menu");
var sidemenu = document.getElementById("sidemenu");

sidemenu.style.right = "-250px";
menu.onclick = function() {
    if(sidemenu.style.right == "-250px") {
        sidemenu.style.right = "0";
    }
    else {
        sidemenu.style.right = "-250px";
    }
}   
