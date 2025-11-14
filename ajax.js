 const url = "https://jsonplaceholder.typicode.com/todos/1";
 const output = document.getElementById("output");
 const status = document.getElementById("status");
 function setLoading(on){
 status.innerHTML = on
 ? 'Carregando <span class="spinner" aria-hidden="true"></span>';
 : "";
 
}

document
 .getElementById("btn-fetch")
 .addEventListener("click", async () => {
    output.textContent = " "
    
 }