const url = "https://jsonplaceholder.typicode.com/todos/1"; //endpoint
const output = document.getElementById("output");
const status = document.getElementById("status");
function setLoading(on) {
  status.innerHTML = on
    ? 'Carregando <span class="spinner" aria-hidden="true"></span>'
    : "";
}
// --- exemplo com fetch (promises / async) ---
document
  .getElementById("btn-fetch")
  .addEventListener("click", async () => {
    output.textContent = "";
    setLoading(true);
    try {
      // fetch retorna uma Promise que resolve para Response
      const res = await fetch(url, { method: "GET" });
      if (!res.ok) throw new Error("Status HTTP: " + res.status);
      const data = await res.json(); //parse JSON automaticamente
      output.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
      output.textContent = "Erro: " + err.message;
      output.classList.add("error");
    } finally {
      setLoading(false);
    }
  });