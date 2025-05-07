$(document).ready(function() {

      // Quando o formulário for enviado
      $("#cadastroForm").on("submit", function(event) {
        // Previne o envio padrão do formulário (para não recarregar a página)
        event.preventDefault();
        
        // Exibe um alerta de sucesso
        alert("Cadastro realizado com sucesso!");
    
        // Opcional: Limpar o formulário após o envio 
        $(this)[0].reset();
      });
  
  
  
  
    });