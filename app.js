const slides = document.querySelectorAll(".mySlides");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slideDots = document.querySelectorAll(".dot");
const currentCounter = document.querySelector(".current__counter");
const totalCounter = document.querySelector(".total__counter");

let currentImage = 0;
currentCounter.textContent = currentImage + 1
totalCounter.textContent = slides.length;
slideDots[currentImage].classList.add("active")

nextBtn.addEventListener("click", ()=>{
    removeClass(slides[currentImage], "active");
    removeClass(slideDots[currentImage], "active");
    currentImage++;
    if (currentImage > slides.length - 1) {
        currentImage = 0
    }
    addClass(slides[currentImage], "active");
    addClass(slideDots[currentImage], "active");
    currentCounter.textContent = currentImage + 1;
});

prevBtn.addEventListener("click", ()=>{
    removeClass(slides[currentImage], "active");
    removeClass(slideDots[currentImage], "active");
    currentImage--;
    if (currentImage < 0) {
        currentImage = slides.length - 1 
    }
    addClass(slides[currentImage], "active");
    addClass(slideDots[currentImage], "active");
    currentCounter.textContent = currentImage + 1
});


removeClass = (el, cla) =>{
    el.classList.remove(cla);
};
addClass = (el,cla) =>{
    el.classList.add(cla);
};

