/* Abre e fecha menu lateral - modo mobile */
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list-ul") 
  ? menuMobile.classList.replace("bi-list-ul", "bi-x")
  : menuMobile.classList.replace("bi-x", "bi-list-ul");

  body.classList.toggle("menu-nav-active");
});

/* Fechar o menu quando selecionado alguma ancoragem */
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
        body.classList.remove("menu-nav-active")
        menuMobile.classList.replace("bi-x", "bi-list");
    }
  })
})