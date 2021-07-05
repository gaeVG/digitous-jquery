$(() => {
    $("button").click(() => {
        $.ajax("https://restcountries.eu/rest/v2/name/france")
            .done(data => {
                console.log(data[0].name)
                console.log(data[0].capital)
            })

    });
})