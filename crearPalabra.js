


let palabras = ["MANZANA", "PERA", "BANANO", "MANGO", "UVA",
    "PAPAYA", "NARANJA", "FRESAS", "SANDIA", "MORA",localStorage.getItem("nuevaPalabra")]

let nuevaPalabra = "";

function crearPalabra() {
  
    let numeroAleatorio = Math.round(Math.random() * palabras.length);
    let numero;
    numero = numeroAleatorio;
    return palabras[numero];
}

function verPalabras() {
    return palabras;
}



let textoPalabra = document.getElementById("textPalabra")
let botonPalabra = document.getElementById("botonCrear")



botonPalabra.addEventListener("click", function (e) {
    localStorage.setItem('nuevaPalabra',textoPalabra.value);

})


