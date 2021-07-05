$(() => {
    $("button").click(() => {
        ($("input").val()).length > 5 ?
            $("input").addClass("is-valid") : $("input").addClass("is-invalid");
    });
});