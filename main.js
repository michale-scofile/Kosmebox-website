// Lấy đối tượng thẻ <span> dựa trên lớp hoặc ID
var cartCount = document.getElementById('cart-count');

// Giả sử số lượng trong giỏ hàng là 5
var quantityInCart = 5;

// Gán giá trị số lượng vào thẻ <span>
cartCount.textContent = quantityInCart;
// ...slider
// JavaScript cho slider
var slideIndex = 0;
showSlides();

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  var slides = document.getElementsByClassName("slider-content-top");
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  slides[slideIndex].classList.add("active");
}

// Sự kiện bấm chuyển động
var prevButton = document.querySelector(".fa-chevron-left");
var nextButton = document.querySelector(".fa-chevron-right");

prevButton.addEventListener("click", function() {
  plusSlides(-1);
});

nextButton.addEventListener("click", function() {
  plusSlides(1);
});
