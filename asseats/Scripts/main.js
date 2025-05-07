$(document).ready(function () {
    let index = 0;
    const slides = $(".slide");
  
    function showSlide(i) {
      slides.removeClass("ativo");
      slides.eq(i).addClass("ativo");
    }
  
    setInterval(function () {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 3000);
});