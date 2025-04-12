const myButton = document.getElementById("menu-btn");
const Hamburger = document.getElementById("menu");

myButton.addEventListener("click",() => {
    myButton.classList.toggle('open')
    Hamburger.classList.toggle('flex')
    Hamburger.classList.toggle('hidden')
})