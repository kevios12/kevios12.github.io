import './../scss/style.scss'


//splash animation//
const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 1520);
})

//navbar//
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle")
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

//gallery//
const ACTIVECLASS = 'active';
const IMAGES = document.querySelectorAll('.flex-card-container');
IMAGES[0].classList.add(ACTIVECLASS);
function removeActiveClass() {
    const elm = document.querySelector(`.${ACTIVECLASS}`)
    if (elm) {
        elm.classList.remove(ACTIVECLASS);
    }
}
function addClass($event) {
    $event.stopPropagation();
    removeActiveClass();
    const target = $event.currentTarget;
    target.classList.add(ACTIVECLASS);
}
IMAGES.forEach(image => {
    image.addEventListener('click', addClass);
});