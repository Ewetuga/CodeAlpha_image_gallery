const prevEl=document.getElementById("prev");
const nextEl = document.getElementById("next");
const showEl = document.getElementById("show");

let imageSlide = ["images/one.jpg",
"images/two.jpg","images/three.jpg","images/four.jpg","images/five.jpg","images/six.jpg","images/seven.jpg","images/eight.jpg","images/last.jpg", 
]

let currentIndex = 0;

function updateImage(){
    showEl.querySelector("img").src=imageSlide[currentIndex];
}
prevEl.addEventListener("click",()=>{
    currentIndex = (currentIndex > 0) ? currentIndex -1 : imageSlide.length - 1;
    updateImage();
});
nextEl.addEventListener("click",()=>{
    currentIndex = (currentIndex < imageSlide.length-1) ? currentIndex + 1 : 0;
    updateImage();
})

updateImage();


const homeEl = document.getElementById("home");
const galleryEl = document.getElementById("gallery");
const showedEl = document.getElementById("show");

homeEl.addEventListener("click", () => {
    showedEl.classList.remove("active");  // Hide the gallery smoothly
});

galleryEl.addEventListener("click", () => {
    showedEl.classList.add("active");  // Show the gallery smoothly
});

