try {
  const form = document.querySelector("#formPoema");
  const tituloInput = document.querySelector("#titulo");
  const conteudoTextarea = document.querySelector("#conteudo");
  const publicarBtn = document.querySelector("#publicar");
  const listaPoemas = document.querySelector("#poemas");

  function publicarPoema(evento) {
    evento.preventDefault();
    let valido = true;

    if (tituloInput.value.trim() === "") {
      alert("O título não pode estar vazio!");
      valido = false;
    }

    if (conteudoTextarea.value.trim() === "") {
      alert("O poema não pode estar vazio!");
      valido = false;
    } else if (conteudoTextarea.value.trim().length > 500) {
      alert("O poema deve ter menos de 500 caracteres!");
      valido = false;
    }

    if (valido) {
      const poemaDiv = document.createElement("div");
      poemaDiv.classList.add("poema");

      const tituloEl = document.createElement("h3");
      tituloEl.textContent = tituloInput.value;

      const conteudoEl = document.createElement("p");
      conteudoEl.textContent = conteudoTextarea.value;

      poemaDiv.appendChild(tituloEl);
      poemaDiv.appendChild(conteudoEl);

      listaPoemas.appendChild(poemaDiv);

      alert("Seu poema foi publicado!");
      form.reset();
    }
    publicarBtn.addEventListener("click", publicarPoema);
  }
  publicarBtn.addEventListener("click", publicarPoema);
} catch (exception) {
  console.log("Erro no script:", exception.message);
}
localStorage.setItem("publicar", "conteudo");