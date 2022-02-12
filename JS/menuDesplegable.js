$(document).ready(function () {
    let counter = 0;

    $("#btnmenu").on('click', function () {
        counter += 1
        if (counter % 2 == 0) {
            $(".submenu").css("display", "none")
            $("#btnmenu").removeClass("bg-dark");

        } else {
            $(".submenu").css("display", "flex")
            $("#btnmenu").addClass("bg-dark");
        }
    });
})