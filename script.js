(function(){
    emailjs.init("lqou_8kiq2x_h9rRcjFhg"); // Substitua YOUR_USER_ID pelo seu ID de usuário do EmailJS

    document.getElementById('contact-form').addEventListener('submit', function(event) {
       event.preventDefault();
       emailjs.sendForm('lqou_8kiq2x_h9rRcjFhg', 'lqou_8kiq2x_h9rRcjFhg', this)
          .then(function() {
             alert('E-mail enviado com sucesso!');
          }, function(error) {
             alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.');
          });
    });
 })();