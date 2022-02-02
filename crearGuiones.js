




function crearGuiones(numero){

let base = document.getElementById("guiones");

if(base!=null){
    for (let i = 0; i <numero;i++){
        let input1 = document.createElement("input")
        input1.type="text"
        input1.disabled="true"
        input1.value=""
        input1.classList.add("estilosGuion")
        base.appendChild(input1);
        
        }

}





}


