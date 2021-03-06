import Vue from "vue";
import Datepicker from '../../components/common/datepicker.vue';
var DatepickerPage = /** @class */ (function () {
    function DatepickerPage() {
        console.log("Datepicker page");
        var v = new Vue({
            el: "#datepicker-demo",
            components: { Datepicker: Datepicker },
            data: {
                date1: '26/04/2018',
                date2: '25/04/2018'
            },
            methods: {
                onValueChanged: function (newValue) {
                    console.log("on value changed", newValue);
                }
            }
        });
    }
    return DatepickerPage;
}());
export { DatepickerPage };
var page = new DatepickerPage();
