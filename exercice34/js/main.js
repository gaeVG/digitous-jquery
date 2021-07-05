$(() => {
    $("button").click(() => {
        $.ajax(`https://restcountries.eu/rest/v2/name/${$("input").val()}`)
            .done(data => {
                $("input").hasClass("is-invalid") ? $("input").removeClass("is-invalid") : () => {};

                $("input").addClass("is-valid")
                $("#country").html(data[0].name)
                $("#capital").html(data[0].capital)
            })
            .fail(() => {

                $("input").hasClass("is-valid") ? $("input").removeClass("is-valid") : () => {};
                $("input").addClass("is-invalid")
            })
    });
});