var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Vue from 'vue';
var DevsEditPage = /** @class */ (function (_super) {
    __extends(DevsEditPage, _super);
    function DevsEditPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DevsEditPage;
}(Vue));
export default DevsEditPage;
//var app = new Vue({
//    el: '#dev-details',
//    //components: { Datepicker, Select2 },
//    data: {
//        title: 'Devs',
//        dev: {
//            Id: $('#request-id').val()
//        },
//        categories: []
//    },
//    methods: {
//        save: function () {
//            $.ajax({
//                type: "POST",
//                url: apiUrl + "devs/save",
//                data: app.dev,
//                success: function () {
//                    alert("L'utente è stato salvato correttamente!");
//                }
//            });
//        }
//    }
//})
//Vue.config.devtools = true;
//// categories 
//$.getJSON(apiUrl + 'categories', function (result) {
//    app.categories = result;
//    // devs/details
//    $.getJSON(apiUrl + 'devs/details', { id: app.dev.Id }, function (result) {
//        if (result) {
//            app.dev = result;
//        }
//    });
//});
Vue.config.devtools = true;
