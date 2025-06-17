
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("JJRVJ70geXKhXyYhR"); // Sua Public Key
    
    const form = document.getElementById('contact-form');
    
    if (!form) {
        console.error("Formulário não encontrado!");
        return;
    }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailjs.sendForm("service_t1s5dav", "template_r85pbfa", form)
            .then(function(response) {
                console.log("E-mail enviado com sucesso!", response);
            }, function(error) {
                console.log("Erro no envio do e-mail", error);
            });
    });
});
