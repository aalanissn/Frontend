<<<<<<< HEAD

const botones = document.querySelectorAll("button");


//Obtener valor del campo input

const campoEntrada = document.getElementById("resultado");

for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", () => {
        const valorBoton = botones[i].textContent;

        //Validaciones

        if(valorBoton === "C"){
            borrarResultado();
        }else if (valorBoton === "="){
            calcularResultado();
        }else {
            anexarValor(valorBoton);
        }


    });
}

function borrarResultado(){
    campoEntrada.value = "";
}


function anexarValor(valorBoton){
    campoEntrada.value += valorBoton;
}


function calcularResultado(){

    try{
    campoEntrada.value = eval (campoEntrada.value);
    }catch(error){
        campoEntrada.value = "Error";
    }
}
=======

const botones = document.querySelectorAll("button");


//Obtener valor del campo input

const campoEntrada = document.getElementById("resultado");

for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", () => {
        const valorBoton = botones[i].textContent;

        //Validaciones

        if(valorBoton === "C"){
            borrarResultado();
        }else if (valorBoton === "="){
            calcularResultado();
        }else {
            anexarValor(valorBoton);
        }


    });
}

function borrarResultado(){
    campoEntrada.value = "";
}


function anexarValor(valorBoton){
    campoEntrada.value += valorBoton;
}


function calcularResultado(){

    try{
    campoEntrada.value = eval (campoEntrada.value);
    }catch(error){
        campoEntrada.value = "Error";
    }
}
>>>>>>> 4d62a5c9ea4ff51c8b9ae28e81550198db7b0609
