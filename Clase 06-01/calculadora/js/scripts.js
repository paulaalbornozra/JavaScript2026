//variables globales
let pantalla = document.getElementById("pantalla");
let historial = document.getElementById("historial");
let operacionActual = " ";

//fx agregar operadores y nro en pantalla
function agregar(valor){
    if (pantalla.value === " " && ["+","-","*","/"].includes(valor)) {
        if(valor === "-"){
            pantalla.value = valor;
        }
        return;
}

let ultimoCaracter = pantalla.value.slice(-1);
if (["+","-","*","/"].includes(ultimoCaracter) && ["+","-","*","/"].includes(valor)) {
    return;
}

//evitar multiple puntos decimales
if (valor === ".") {
    let numeros= pantalla.value.split(/[\+\-\*\/]/);
    let ultimoNumero = numeros[numeros.length - 1];
    if (ultimoNumero.includes(".")) {
        return;
    }
}

pantalla.value += valor;
console.log("valor agregado:", valor);
console.log("pantalla actual:", pantalla.value);

}

function calcular(){
    try {
        if (pantalla.value === " ") {
            return;
        }
        operacionActual = pantalla.value;

        let resultado = eval(pantalla.value);


        resultado = Math.round(resultado * 100000000) / 100000000;

            console.log("===Calculo===");
            console.log("Operacion:", operacionActual);
            console.log("Resultado:", resultado);

        historial.textContent = `${operacionActual} = ${resultado}`;

        pantalla.value = resultado;


    } catch (error) {
        console.error("Error de calculo:", error);
        pantalla.value = "ERROR";
        setTimeout(() => {
            limpiar();
        }, 1500);
    }
}

function limpiar(){
    pantalla.value = " ";
    console.log("Pantalla limpia");
}

    function borrar(){
        pantalla.value = pantalla.value.slice(0, -1);
        console.log("Ultimo nro borrado");
        console.log("Pantalla actual:", pantalla.value);
    }

    //soporte teclado
    document.addEventListener("keydown", function(event){
        const tecla = event.key;
        
        if (/[0-9\+\-\*\/.]/.test(tecla)) {
            event.preventDefault();
            agregar(tecla);
        }

        if(tecla === "Enter") {
            event.preventDefault();
            calcular();
        }

        if(tecla === "Escape") {
            event.preventDefault();
            limpiar();
        }

        if (tecla === "Backspace") {
            event.preventDefault();
            borrar();
        }
    });