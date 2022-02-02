



function dibujarLetra(letra1){

let letraEquivocada = document.getElementById("letraEquivocada");

console.log("es",letraEquivocada);

let letra = document.createElement("span");

letra.classList.add("letra")

letra.innerHTML = letra1

letraEquivocada.appendChild(letra);


}
