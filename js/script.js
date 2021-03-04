const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener("click", () => {
    window.scrollTo(0, 0)
});

document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

const modalPortfolioImg = document.getElementById("modal-portfolio-img");
const modalPortfolioTitle = document.getElementById("modal-portfolio-title");

$("#modal-portfolio").on("show.bs.modal", (ev) => {
    console.log(ev.relatedTarget.dataset.img);
    modalPortfolioImg.src = `img/portfolio/${ev.relatedTarget.dataset.img}`;
    modalPortfolioTitle.innerText = ev.relatedTarget.dataset.title;
});