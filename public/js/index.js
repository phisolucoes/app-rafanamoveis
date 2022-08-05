var menu = document.getElementById("nav-menu");

function opemMenu() {
    menu.style.display = "flex";
    menu.style.width = "100%";
}

function closeMenu() {
    menu.style.display = "none";
    menu.style.width = "0";
}

function bases() {
    var basesCaminho = [
        "./images/baseAlureDupla/cinamomo.png",
        "./images/baseAlureDupla/cinamomo.png",
        "./images/baseAlureDupla/cinamomo.png",
    ];

    basesCaminho.forEach(element => {
        var img = document.createElement('img');
        img.removeAttribute("src");
        img.setAttribute("id", "img");
        img.setAttribute("src", element);
        document.querySelector("#miniaturas").append(img);
    });

}
function tampos() {
    var tamposCaminho = [
        "./images/tampoAlure/nogueira.png",
        "./images/tampoAlure/nogueira.png",
        "./images/tampoAlure/nogueira.png",
    ];

    tamposCaminho.forEach(element => {
        var img = document.createElement('img');
        img.setAttribute("id", "img");
        img.setAttribute("src", element);
        document.querySelector("#miniaturas").append(img);
    });

}

