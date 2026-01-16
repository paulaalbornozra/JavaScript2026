//DOM completamente cargado
document.addEventListener("DOMContentLoaded", function(){

    //referencias a los elementos DOM
    const formulario = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');
    const mensaje = document.getElementById('mensaje');

    //escuchar el evento submit del formulario
    formulario.addEventListener('submit', function(evento)  {
        //prevenir el comportamiento por defecto del formulario
        evento.preventDefault();

        //Declaramos las variables y asignacion de valores
        //captura d estas
        let nombre=document.getElementById('nombre').value;
        let edad=document.getElementById('edad').value;

        //mostrar los valores por consola
        console.log('=====DATOS RECIBIDOS=====');
        console.log('Nombre: ' , nombre);
        console.log('Edad: ' , edad);
        console.log('tipo de Datos - nombre: ' , typeof nombre);
        console.log('tipo de Datos - edad: ' , typeof edad);

        //convertir la edad a numeros
        edad = parseInt(edad);
        console.log('Edad convertida a numero');
        console.log('tipo de Dato - edad (convertido): ' , typeof edad);

        //mensaje de bienvenida
        let mensaje = `¡Hola ${nombre}! Bienvenido. Veo que tienes ${edad} años`;

        //mensaje consola
        console.log('=====Mensaje de bienvenida=====');
        console.log(mensaje);

        //validacion de edad
        let infoAdicional;
        if (edad < 18) {
            infoAdicional = "Eres menor de edad.";
        } else if (edad >= 18 && edad < 65) {
            infoAdicional = "Eres mayor de edad.";
        } else {
            infoAdicional = "Eres adulto mayor.";
        }

        console.log('Información adicional: ' , infoAdicional);

        mensaje.textContent = `${mensaje} ${infoAdicional}`;
        resultado.classList.remove('oculto');

        console.log('=================================');
        console.log('Formulario terminado exitosamente.');
        console.log('=================================');

    })

    console.log('Aplicación iniciada. Esperando datos de usuario');

})