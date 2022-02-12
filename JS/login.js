$(document).ready(function () {
    $(document).on('change', "#userType", function (e) {
        seleccionado();

    });
    $(document).on('click', "#enviar", function (e) {
        localStorage.removeItem('user')
        let nombre = $("#floatingInput").val()
        localStorage.setItem('user', nombre)
        if (comprobaciones() == false) {
            e.preventDefault();
        }
    });
})


// $("#enviar").click(function (e) { 
//     e.preventDefault();
//     let flag = comprobaciones()
//     console.log(e);
// });

const seleccionado = () => {
    let seleccion = $("#userType").val();
    console.log(seleccion);
    if (seleccion == "") {
        alert("seleccione un usuario valido")
    }
    if (seleccion == "barbero") {
        $("#formulariologin").attr('action', "./mainPageBarber.html");


    }
    if (seleccion == "cliente") {
        $("#formulariologin").attr('action', "./mainPageCustomer.html");
    }
}

const comprobaciones = () => {
    let flagusuario
    let flagpassword
    let user = $("#floatingInput").val()
    let password = $("#floatingPassword").val()
    if (user == "") {
        $("#floatingInput").addClass("is-invalid");
        flagusuario = false;
    } else {
        $("#floatingInput").removeClass("is-invalid");
        flagusuario = true
    }
    if (password == "") {
        $("#floatingPassword").addClass("is-invalid");
        flagpassword = false
    } else {
        $("#floatingPassword").removeClass("is-invalid")
        flagpassword = true
    }
    if (flagpassword && flagusuario) {
        return true;
    } else {
        return false;
    }
}