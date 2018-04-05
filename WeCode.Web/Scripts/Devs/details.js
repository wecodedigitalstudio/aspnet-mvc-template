

function DevsDetails(id) {

    //https://vuejs.org/v2/examples/select2.html
    //https://jsfiddle.net/ankurk91/zupazg2u/
    //https://jsfiddle.net/gmsa/kjj6ufcu/


    Vue.component('date-picker', VueBootstrapDatetimePicker.default);

    var app = new Vue({
        el: '#dev-details',
        data: {
            title: 'Devs',
            dev: {
                Id: id
            },
            config: {
                format: 'DD/MM/YYYY',
                useCurrent: false,
                showClear: true,
                showClose: false
            },
            categories: [],
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
