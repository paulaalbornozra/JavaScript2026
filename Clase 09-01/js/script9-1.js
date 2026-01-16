$(document).ready(function(){
    $("#btnCalcular").click(function(){
        calcularPrestamo()
    });


//calcular al presionar enter
$(".form-control").keypress(function(e){
    if(e.which == 13){
        calcularPrestamo();
    }
})

function calcularPrestamo(){
    const monto =parseFloat($("#monto").val());
    const tasaAnual =parseFloat($("#interes").val());
    const plazoMeses =parseFloat($("#plazo").val());


    $("#errorMessage").hide();
    $("#resultContainer").hide();


    if(isNaN(monto) || monto <= 0){
        mostrarError("Por favor, ingrese un monto válido mayor a 0");
        return;
    }

        if(isNaN(tasaAnual) || tasaAnual <= 0){
        mostrarError("Por favor, ingrese un monto válido mayor a 0");
        return;
    }

        if(isNaN(plazoMeses) || plazoMeses <= 0){
        mostrarError("Por favor, ingrese un monto válido mayor a 0");
        return;
    }

    const tasaMensual = tasaAnual / 100 /12;
    let cuotaMensual;

    if(tasaMensual === 0){
        cuotaMensual=monto / plazoMeses;
    }else{
        cuotaMensual= monto * (tasaMensual * Math.pow(1+tasaMensual, plazoMeses)) / (Math.pow(1 + tasaMensual, plazoMeses) -1);
    }

    const totalPagar = cuotaMensual + plazoMeses;
    const totalIntereses = totalPagar - monto;

    $('#cuotaMensual').text('$' + cuotaMensual.toFixed(2));
    $('#totalPagar').text('$' + totalPagar.toFixed(2));
    $('#totalIntereses').text('$' + totalIntereses.toFixed(2));

    $('#resultContainer').slideDown(400);
}

function monstrarError(mensaje){
    $('#errorMessage').text(mensaje).slideDown(300);
}

});

