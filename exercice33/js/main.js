$(() => {
    $("button").click(() => {
        $.ajax("https://restcountries.eu/rest/v2/name/france")
            .done(data => {
                $("#country").append(data[0].name)
                $("#capital").append(data[0].capital)
            });
    })
});