$(document).ready(function(){

    //Evento click btn
    $("#btnCalcular").on("click",function(){
        //Limpiar Errores
        $("#errorMessage").hide().text("");

        //obtener datos
        const monto = parseFloat($("monto").val());
        const tasaAnual = parseFloat($("#interes").val());
        const plazo = parseInt($("#plazo").val());

        //Validación Campos

        if(isNaN(monto) || monto <=0){
            mostrarError("Por favor ingrese un nro meyor a cero");
            return;
        }
    
        if(isNaN(tasaAnual) || tasaAnual <=0){
            mostrarError("Por favor ingrese un nro meyor a cero");
            return;
        }

            if(isNaN(plazo) || plazo <=0){
            mostrarError("Por favor ingrese un plazo válido");
            return;
        }

        //Calcular préstamo
        calcularPrestamo(monto, tasaAnual, plazo);
    });

    //Funciones pdtes
    function mostrarError(mensaje){
        $("#errorMessage").text(mensaje).show().css("display", "block");
        $("#resultContainer").hide();
    }

    function calcularPrestamo(monto, tasaAnual, plazo){
        const tasaMensual = (tasaAnual / 100)/12;

        let cuotaMensual;

        if (tasaMensual === 0){
            cuotaMensual = monto / plazo;
        } else {
            const numerador = tasaMensual * Math.pow(1+tasaMensual, plazo);
            const denominador = Math.pow(1 + tasaMensual, plazo)-1;
            cuotaMensual = monto * (numerador / denominador);
        }

        //Calcular Totales
        const totalPagar = cuotaMensual * plazo;
        const totalInteres = totalPagar - monto;
    }

    //mostrar los resultados
    $("#cuotaMensual").text("$" + formatearNumero(cuotaMensual));
    $("#totalPagar").text("$" + formatearNumero(totalPagar));
    $("#totalInteres").text("$" + formatearNumero(totalInteres));

    $("#resultContainer").slideDown("slow");

    function formatearNumero(numero){
        return numero.toFixed(2).replace(/\B(?=(\d{3})+?!\d))/g, ",")
    }

    $(".form-control").on("keypress", function(e){
        if(e.which === 13) {
            $("btnCalcular").click();
        }
        })

    })


});
