$(document).ready(function () {
    let query = window.location.search;
    let params = new URLSearchParams(query)
    let cabello = params.get('cabello')
    let barba = params.get('barba')
    let cejas = params.get('cejas')
    let limpieza = params.get('limpieza')
    let perfilado = params.get('perfilado')
    // localStorage.removeItem('servicios')
    localStorage.removeItem('cabello')
    localStorage.removeItem('barba')
    localStorage.removeItem('cejas')
    localStorage.removeItem('limpieza')
    localStorage.removeItem('perfilado')

    localStorage.setItem('cabello', cabello)
    localStorage.setItem('barba', barba)
    localStorage.setItem('cejas', cejas)
    localStorage.setItem('limpieza', limpieza)
    localStorage.setItem('perfilado', perfilado)


    for (let i = 1; i <= 30; i++) {
        $('#dias').append('<option class="selectorDias" value=' + i + '>' + i + '</option>');
    }
    $('.metodoPago').on('change', function () {
        const pse = $('#pse').prop('checked')
        const efectivo = $('#efectivo').prop('checked')
        if (pse == true) {
            $('#pse').val('Si')
            $('#efectivo').val('No')
            $('#efectivo').prop('checked', false)
        }
        if (efectivo == true) {
            $('#efectivo').val('Si')
            $('#pse').val('No')
            $('#pse').prop('checked', false)
        }
    });
    $(document).on('submit', function (e) {
        let condicion = comprobaciones()
        if (condicion == false) {
            e.preventDefault()
        } else {
            
        }
    })
})

const comprobaciones = () => {
    const mes = $('#mes')
    const lugar = $('#lugar')
    const nbarbero = $('#barbero')
    const dia = $('#dias')
    const hora = $('#hora')
    const selectorEfectivo = $('#efectivo')
    const selectorOnline = $('#pse')
    let flagmes
    let flaglugar
    let flagnbarbero
    let flagdia
    let flaghora
    let flagselectores
    if (mes.val() != "") {
        flagmes = true
        mes.removeClass('is-invalid')
    } else {
        flagmes = false
        mes.addClass('is-invalid')
    }
    if (lugar.val() != "") {
        flaglugar = true
        lugar.removeClass('is-invalid')
    } else {
        flaglugar = false
        lugar.addClass('is-invalid')
    }
    if (nbarbero.val() != "") {
        flagnbarbero = true
        nbarbero.removeClass('is-invalid')
    } else {
        flagnbarbero = false
        nbarbero.addClass('is-invalid')
    }
    if (dia.val() != "") {
        dia.removeClass('is-invalid')
        flagdia = true
    } else {
        flagdia = false
        dia.addClass('is-invalid')
    }
    if (hora.val() != "") {
        flaghora = true
        hora.removeClass('is-invalid')
    } else {
        flaghora = false
        hora.addClass('is-invalid')
    }
    if (selectorEfectivo != "" || selectorOnline != "") {
        flagselectores = true
    } else {
        if (selectorOnline.val() == "" && selectorEfectivo.val() == "") {
            flagselectores = false
            $('.metodos').css('text-decoration', 'underline')
            $('.metodos').css('color', 'red')
        }
    }
    if (flagmes && flaglugar && flagnbarbero && flagdia && flaghora && flagselectores) {
        return true
    } else {
        return false
    }
}