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
    $(document).ready(function () {
        function configurarBotaoCompra(idBotao) {
          $(idBotao).on("click", function (event) {
            event.preventDefault();
            const produto = $(this).closest(".promo-card").find("h5").text();
            alert("Você clicou para comprar: " + produto);
          });
        }
      
        configurarBotaoCompra("#botao1");
        configurarBotaoCompra("#botao2");
        configurarBotaoCompra("#botao3");
        configurarBotaoCompra("#botao4");
      });
});