// ------------- SlideShow ----------------

// const slides = document.querySelectorAll(".slide");
// console.log(slides);
// var count = 0;
// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });
// function slideImage() {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${count * 100}%)`;
//   });
// }
// function goPrev() {
//   count--;
//   slideImage();
// }
// function goNext() {
//   count++;
//   slideImage();
// }

//  ------ Easy Option -------------
let slideIndex = 0;
setInterval(showSlides, 4000);

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slide");
  //   let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  //   setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// ------------ Change search icon on hover -> Search box --------
const searchIcon = document.getElementById("search-icon");
// console.log(searchIcon)
function hover() {
  searchIcon.src = "./media/search-white.png";
}

function unhover() {
  searchIcon.src = "./media/search-red.png";
}

// ------------------- To top of page handler --------------
function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ----------------- Itinerary -------------------------------
const accordionItem = document.getElementsByClassName("trip-accordion-item");
const accordionLabel = document.getElementsByClassName("trip-accordion-label");
for (let i = 0; i < accordionItem.length; i++) {
  accordionLabel[i].addEventListener("click", function () {
    accordionItem[i].classList.toggle("active");
  });
}
const itineraryItem = document.getElementsByClassName("trip-itinerary-item");
const itineraryLabel = document.getElementsByClassName("trip-itinerary-label");
for (let i = 0; i < itineraryItem.length; i++) {
  itineraryLabel[i].addEventListener("click", function () {
    itineraryItem[i].classList.toggle("active");
  });
}

// ---------- Book Now ------------------
// const bookNowContent = document.getElementsByClassName("book-now-main-container");
// const bookNowLabel = document.getElementsByClassName("book-now-label");
// console.log(bookNowLabel);
//   bookNowLabel[0].addEventListener("click", function () {
//     bookNowContent[0].classList.toggle("active");
//   });

// Book Now Handler
const bookNowCover = document.getElementsByClassName(
  "book-now-cover-container"
);
const bookNowLabel = document.getElementsByClassName("book-now-label");
const bookNowCross = document.getElementsByClassName("close-icon");
const bookNowDark = document.getElementsByClassName("book-now-dark-area");

// const bookNowDark = document.getElementsByClassName("book-now-label");

console.log(bookNowLabel);

bookNowLabel[0].addEventListener("click", function () {
  bookNowCover[0].classList.toggle("active");
});

bookNowCross[0].addEventListener("click", function () {
  bookNowCover[0].classList.toggle("active");
});
bookNowDark[0].addEventListener("click", function () {
  bookNowCover[0].classList.toggle("active");
});
