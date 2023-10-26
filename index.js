function menuClose() {
    this.classList.toggle("transform");
    const links = document.getElementById("links");
    links.classList.toggle("transform");
}
document.getElementById("menu").addEventListener("click", menuClose);