const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
    updateImage();
})

function updateImage() {
    bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
    // window.pageYOffset returns the number of pixels the document is currently scrolled along the vertical axis (from 0.0)
    // For example if you scroll 375px down, the result will be = 1 - (375/900)
    // So 1 - 0.4166 =  0.5833 scrolling down tends to 0 opacity
}