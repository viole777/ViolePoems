try {
    const form = document.querySelector("form");
    const nomeInput = document.querySelector("#nome");
    const mensagemTextarea = document.querySelector("#mensagem");
    const status = document.querySelector("#contato-status");

    function validarFormulario(evento) {
        evento.preventDefault();
        const nome = nomeInput.value.trim();
        const mensagem = mensagemTextarea.value.trim();

        if (nome === "" || mensagem === "") {
            if (status) {
                status.textContent = "Preencha seu nome e sua mensagem antes de enviar.";
                status.classList.add("erro");
            }
            return;
        }

        if (status) {
            status.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
            status.classList.remove("erro");
        } else {
            alert("Agradecemos seu contato");
        }
        form.reset();
    }

    form.addEventListener("submit", validarFormulario);
}
catch (exception) {
    console.log("Erro no formulário:", exception.message);
}