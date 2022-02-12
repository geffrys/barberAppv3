$(document).ready(function () {
    $(document).on('click', "#enviar", function (e) {
        if (comprobaciones() == false) {
            e.preventDefault();
        }
    });
})


const comprobaciones = () => {
    var flagnom, flagemail, flagcontrasena, flagcel, flagusertype
    let nombre = $(".nombre").val()
    let email = $(".correo").val()
    let contrasena = $(".contrasena").val()
    let celular = $(".numero").val()
    let userType = $("#userType").val()
    if (nombre == "") {
        $(".nombre").addClass('is-invalid')
        flagnom = false
    } else {
        $(".nombre").removeClass('is-invalid')
        flagnom = true
    }
    if (email == "") {
        $(".correo").addClass('is-invalid')
        flagemail = false
    } else {
        $(".correo").removeClass('is-invalid')
        flagemail = true
    }
    if(contrasena == ""){
        $(".contrasena").addClass('is-invalid')
        flagcontrasena = false
    }else{
        $(".contrasena").removeClass('is-invalid')
        flagcontrasena = true
    }
    if(celular == ""){
        $(".numero").addClass('is-invalid')
        flagcel = false;
    }else{
        flagcel = true;
        $(".numero").removeClass('is-invalid')
    }
    if(userType ==""){
        $("#userType").addClass('is-invalid')
        flagusertype = false
    }else{
        $("#userType").removeClass('is-invalid')
        flagusertype = true;
    }
    if(flagcel && flagcontrasena && flagemail && flagemail && flagnom && flagusertype){
        return true
    }return false
}