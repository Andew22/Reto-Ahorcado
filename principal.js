




let botonPrincipal = document.getElementById("iniciar");
let palabra = crearPalabra();
if (palabra == undefined) {
    console.log("1 unide")
    location.reload();
} else {
    crearGuiones(palabra.length);
}

let contadorErrores = 0;
campos = [];


document.addEventListener('keydown', function (e) {
    if (e.key == "a" || e.key=="b" || e.key=="c" || e.key=="d" || e.key=="e" || e.key=="f" || e.key=="g"|| e.key=="h"|| e.key=="i"|| e.key=="j" || e.key=="k" ||
    e.key == "l" || e.key=="m" || e.key=="n" || e.key=="ñ" || e.key=="o" || e.key=="p" || e.key=="q"|| e.key=="r"|| e.key=="s"|| e.key=="t" || e.key=="u" ||
    e.key == "v" || e.key=="w" || e.key=="x" || e.key=="y" || e.key=="z" || e.key == "A" || e.key=="B" || e.key=="C" || e.key=="D" || e.key=="E" || e.key=="F" || e.key=="G"|| e.key=="H"|| e.key=="I"|| e.key=="J" || e.key=="K" ||
    e.key == "L" || e.key=="M" || e.key=="N" || e.key=="Ñ" || e.key=="O" || e.key=="P" || e.key=="Q"|| e.key=="R"|| e.key=="S"|| e.key=="T" || e.key=="U" ||
    e.key == "V" || e.key=="W" || e.key=="X" || e.key=="Y" || e.key=="Z" ){
    
    letra = e.key;
    letra1 = letra.toUpperCase();
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == letra1) {
            console.log("son iguales")
            campos.push(i);
        }

    }
    if (!palabra.includes(letra1)) {
        dibujarLetra(letra1);
        primeralinea();

        contadorErrores += 1;

    }
    for (let i = 0; i < campos.length; i++) {
        console.log("CAMPOS SON", campos[i])


        llenarLetra(campos[i], letra1);

    }
    if (contadorErrores == 1) {
        primeralinea();

    }
    else if (contadorErrores == 2) {
        segundaLinea();

    }
    else if (contadorErrores == 3) {
        terceraLinea();

    }
    else if (contadorErrores == 4) {
        cuerpo();

    }
    else if (contadorErrores == 5) {
        pies();

    }
    else if (contadorErrores == 6) {
        brazoisque();

    }
    else if (contadorErrores == 7) {
        brazodere();

    }
    else if (contadorErrores == 8) {
        cabeza();

    }
    else if (contadorErrores == 9) {
        cuerda();
        console.log("PERDIO EL JUEGO")
        swal("Oops!", "Perdiste", "error");
    }

    let guiones1 = document.querySelectorAll(".estilosGuion");
    let palabraEscrita = "";
    for (let i = 0; i < guiones1.length; i++) {
        palabraEscrita += guiones1[i].value;
    }

    if (palabraEscrita == palabra) {
        console.log("GANASTE WOW")
        swal("Good job!", "Felicidades Ganaste", "success");
    }

    
    console.log(verPalabras())

}


});

function llenarLetra(numero, letra) {

    let campos = document.querySelectorAll(".estilosGuion")


    if (campos[numero].value == "") {
        campos[numero].value = letra
    }







}













