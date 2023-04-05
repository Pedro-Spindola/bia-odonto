const menuMobile = document.querySelector(".menu_itens ul");
const botao = document.querySelector(".icon_menu img");

botao.addEventListener('click',function(){
    menuMobile.classList.toggle("active");
})