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
setInterval(showSlides,4000);

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slide");
//   let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// ------------ Change search icon on hover -> Search box --------
const searchIcon = document.getElementById("search-icon");
console.log(searchIcon)
function hover() {
    searchIcon.src ='./media/search-white.png';
  }
  
  function unhover() {
    searchIcon.src = './media/search-red.png';
  }

  // ------------------- To top of page handler --------------
  function toTop(){
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
