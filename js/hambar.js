const bars = document.getElementById("bars");
const menu = document.getElementById("menu");
const close = document.getElementById("cross")

bars.addEventListener("click", () => {
    menu.classList.add("open")
})

close.addEventListener("click", () => {
    menu.classList.remove("open")
})