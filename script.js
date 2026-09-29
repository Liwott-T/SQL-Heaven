let caderninho = document.getElementById("caderninho");
let menu_caderninho = document.getElementById("menu-caderninho");
let close_button = document.querySelector(".close-button");

caderninho.addEventListener("click", mostrar_menu)

function mostrar_menu() {
    menu_caderninho.style.display = "flex"
}

close_button.addEventListener("click", esconder_menu)

function esconder_menu() {
    menu_caderninho.style.display = "none"
}
