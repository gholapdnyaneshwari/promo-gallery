let currentIndex = 0;
const gallery = document.getElementById("gallery");
const items = document.querySelectorAll(".gallery-item");

function showSlide(index) {
    if(index <0) index = items.length-1;
    if(index>= items.length) index = 0;
    currentIndex = index;
    gallery.style.transform =`translateX(-${index * 100}%)`;
}
function nextSlide(){
    showSlide(currentIndex +1);
}

function prevSlide(){
    showSlide(currentIndex-1)
}
setInterval(nextSlide, 4000);

