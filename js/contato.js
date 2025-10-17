try {
    const form = document.querySelector("form") ?? null;
    const nomeImput = document.querySelector("#nome");
    const assuntoSelect = document.querySelector("#assunto");
    const mensagemTextarea = document.querySelector("#mensagem");
    const enviarBtn = document.querySelector("#enviar-btn");


    function validarFormulario(evento) {
        evento.preventDefault();
        let valido = true;

        if (nomeImput.value.trim() === '') {
            valido = false;
            alert("O campo de nome não pode estar vazio.");
        }

        if (mensagemTextarea.value.trim() === '') {

            valido = false;
            alert("mensagem não pode ser vazia.");

        }

        else if (mensagemTextarea.value.trim().length > 500) {
            valido = false;
            alert("A mensagem deve ter menos de 500 caracteres.");
        }

        if (valido) {
            alert("Agradecemos seu contato");
            form.submit();
        }

    }

    enviarBtn.addEventListener('click', validarFormulario);} 


catch (exception) {
    console.log(exception.message)
}