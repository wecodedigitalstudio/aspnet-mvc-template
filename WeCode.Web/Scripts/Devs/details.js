

function DevsDetails(id) {

    var app = new Vue({
        el: '#dev-details',
        data: {
            title: 'Devs',
            dev: {
                Id: id
            },
            categories: []
        },
        methods: {
            save: function () {
                $.ajax({
                    type: "POST",
                    url: apiUrl + "devs/save",
                    data: app.dev,
                    success: function () {
                        alert("L'utente è stato salvato correttamente!");
                    }
                });
            }
        }
    });

    Vue.config.devtools = true;

    // categories 
    $.getJSON(apiUrl + 'categories', function (result) {
        app.categories = result;

        // devs/details
        $.getJSON(apiUrl + 'devs/details', { id: app.dev.Id }, function (result) {
            if (result) {
                app.dev = result;
            }
        });

    });


}
