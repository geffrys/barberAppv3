$(document).ready(function () {
    let query = window.location.search;
    let params = new URLSearchParams(query)
    // let nombre = params.get('usuario');
    let nombre = localStorage.getItem('user')
    $("#Saludo").append('<b style=" font-size: 45px">' + nombre + '</b>');

    $(document).on('change', function () {
        comprobaciones()
    });

    $('#enviar').on('click', function (e) {
        if (comprobaciones2() == true) {
            console.log("todo melo")
            // $("#formulario").append('<input name="usuario" value='+nombre+'>')
        } else {
            e.preventDefault()
            // console.log('no ha seleccionado ningun item')
            alert('Seleccione por lo menos un servicio')
        }
    })



})


const comprobaciones = () => {
    if ($('#cabello').prop("checked") == true) {
        $('.contenedorCabello').css('background-color', 'black')
        $('.contenedorCabello').css('color', 'white')
        $('#cabello').val('Si');
    } else {
        $('.contenedorCabello').css('background-color', 'darkgray')
        $('.contenedorCabello').css('color', 'black')
        $('#cabello').val('No');
    }
    if ($('#barba').prop("checked") == true) {
        $('.contenedorBarba').css('background-color', 'black')
        $('.contenedorBarba').css('color', 'white')
        $('#barba').val('Si');
    } else {
        $('#barba').val('No');
        $('.contenedorBarba').css('background-color', 'darkgray')
        $('.contenedorBarba').css('color', 'black')
    }
    if ($('.cejas').prop("checked")) {
        $('#cejas').val('Si');
        $('.contenedorCejas').css('background-color', 'black')
        $('.contenedorCejas').css('color', 'white')
    } else {
        $('#cejas').val('No');
        $('.contenedorCejas').css('background-color', 'darkgray')
        $('.contenedorCejas').css('color', 'black')
    }
    if ($('.limpieza').prop("checked")) {
        $('#limpieza').val('Si');
        $('.contenedorLimpieza').css('background-color', 'black')
        $('.contenedorLimpieza').css('color', 'white')
    } else {
        $('#limpieza').val('No');
        $('.contenedorLimpieza').css('background-color', 'darkgray')
        $('.contenedorLimpieza').css('color', 'black')
    }
    if ($('.perfilado').prop("checked")) {
        $('#perfilado').val('Si');

        $('.contenedorPerfilado').css('background-color', 'black')
        $('.contenedorPerfilado').css('color', 'white')
    } else {
        $('#perfilado').val('No');
        $('.contenedorPerfilado').css('background-color', 'darkgray')
        $('.contenedorPerfilado').css('color', 'black')
    }
}

const comprobaciones2 = () => {
    let cabello = $('#cabello').prop('checked')
    let barba = $('#barba').prop('checked')
    let cejas = $('#cejas').prop('checked')
    let perfilado = $('#perfilado').prop('checked')
    let limpieza = $('#limpieza').prop('checked')
    if (cabello || barba || cejas || perfilado || limpieza) {
        console.log("todo right")
        return true
    }else{
        if(cabello == false && barba == false && cejas == false && perfilado == false && limpieza == false){
            return false
        }
    }
}