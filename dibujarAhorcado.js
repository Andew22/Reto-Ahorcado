

function primeralinea(){

    let tablero = document.getElementById("dibujarCanvas");

    let contexto = tablero.getContext("2d");

    contexto.strokeStyle="#0A3871"
    contexto.lineWidth =10;
    contexto.beginPath();
    contexto.moveTo(0,150)
    contexto.lineTo(170,150);
    contexto.stroke();
    return console.log("hola");

}

function segundaLinea(){

    let tablero = document.getElementById("dibujarCanvas");
    let contexto = tablero.getContext("2d");

    contexto.strokeStyle="#0A3871"
    contexto.lineWidth =10;
    contexto.beginPath();
    contexto.moveTo(0,0)
    contexto.lineTo(0,150);
    contexto.stroke();
    return console.log("hola");
}

function terceraLinea(){

    let tablero = document.getElementById("dibujarCanvas");
    let contexto = tablero.getContext("2d");

    contexto.strokeStyle="#0A3871"
    contexto.lineWidth =10;
    contexto.beginPath();
    contexto.moveTo(0,0)
    contexto.lineTo(100,0);
    contexto.stroke();

    contexto.strokeStyle="#0A3871"
    contexto.lineWidth =5;
    contexto.beginPath();
    contexto.moveTo(30,0)
    contexto.lineTo(0,30);
    contexto.stroke();
    return console.log("hola");
}

function cuerpo(){

    let tablero = document.getElementById("dibujarCanvas");
    let contexto = tablero.getContext("2d");

    
    contexto.strokeStyle="#0A3871"
    contexto.lineWidth =4;
    contexto.beginPath();
    contexto.moveTo(100,50)
    contexto.lineTo(100,100);
    contexto.stroke();
}

function pies(){

    let tablero = document.getElementById("dibujarCanvas");
    let contexto = tablero.getContext("2d");

    
    contexto.strokeStyle="#0A3871"
    contexto.lineWidth =4;
    contexto.beginPath();

    contexto.moveTo(100,100)
    contexto.lineTo(90,120);

    contexto.stroke();

    contexto.strokeStyle="#0A3871"
    contexto.lineWidth =4;
    contexto.beginPath();

    contexto.moveTo(100,100)
    contexto.lineTo(110,120);

    contexto.stroke();
}

function brazoisque(){

    let tablero = document.getElementById("dibujarCanvas");
    let contexto = tablero.getContext("2d");
    contexto.strokeStyle="#0A3871"
    contexto.lineWidth =4;
    contexto.beginPath();
    contexto.moveTo(100,70)
    contexto.lineTo(120,80);
    contexto.stroke();
}

function brazodere(){

    let tablero = document.getElementById("dibujarCanvas");
    let contexto = tablero.getContext("2d");
    contexto.strokeStyle="#0A3871"
    contexto.lineWidth =4;
    contexto.beginPath();
    contexto.moveTo(100,70)
    contexto.lineTo(80,80);
    contexto.stroke();
}

function cabeza(){

    let tablero = document.getElementById("dibujarCanvas");
    let contexto = tablero.getContext("2d");
    contexto.strokeStyle="#0A3871"
    contexto.lineWidth =4;
    contexto.beginPath();
    contexto.arc(100,40,12, 0, 2*Math.PI);
    contexto.stroke();
}

function cuerda(){

    let tablero = document.getElementById("dibujarCanvas");
    let contexto = tablero.getContext("2d");
    contexto.strokeStyle="red"
    contexto.lineWidth =4;
    contexto.beginPath();
    contexto.moveTo(100,0)
    contexto.lineTo(100,30);
    contexto.stroke();
}






