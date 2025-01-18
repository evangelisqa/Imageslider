
let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', ()=>{
    currentIndex = (currentIndex + 1) %totalSlides;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click',()=>{
    currentIndex = (currentIndex - 1 + %totalSlides)% totalSlides;
    updateSlider();
})

function updateSlider(){
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = 'translateX(${offset}%)';
}
// Auto slide
setInterval(()=>{
    currentIndex = (currentIndex + 1) %totalSlides;
    updateSlider();
}, 3000);
// Update last modified time
const lastModifiedElement = document.getElementById('last-modified');
lastModifiedElement.textContent = document.lastModified;

// Toggle menu
function toggleMenu(){
    const header = document.querySelector('header');
    header.classList.toggle('responsive');
}