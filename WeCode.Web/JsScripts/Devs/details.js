

function DevsDetails(id) {

    console.log("devs - details");

    //https://vuejs.org/v2/examples/select2.html
    //https://jsfiddle.net/ankurk91/zupazg2u/
    //https://jsfiddle.net/gmsa/kjj6ufcu/

    var app = new Vue({
        el: '#dev-details',
        data: {
            title: 'Devs',
            id: id,
            firstName: '',
            lastName: '',
            birthday: '',
            category: '',

            categories: []
        },
        methods: {
            save: function () {
                $.ajax({
                    type: "POST",
                    url: apiUrl + "devs/save",
                    data: {
                        Id: app.id,
                        FirstName: app.firstName,
                        LastName: app.lastName,
                        Birthday: app.birthday,
                        Category: app.category
                    },
                    dataType: 'json',
                    success: function (result) {
                        alert("Saved");
                    }
                });
            }
        }
    });

    Vue.config.devtools = true;

    // devs/details
    $.getJSON(apiUrl + 'devs/details', { id: app.id }, function (result) {
        if (result) {
            app.firstName = result.FirstName;
            app.lastName = result.LastName;
            app.birthday = result.Birthday;
            app.category = result.Category;

        }
    });

    // categories 
    $.getJSON(apiUrl + 'categories', function (result) {
        app.categories = result;
    });

}
