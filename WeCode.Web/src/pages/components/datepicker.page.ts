import Vue from "vue";
import Datepicker from '../../components/common/datepicker.vue';

export class DatepickerPage {


    constructor() {

        console.log("Datepicker page");

        let v = new Vue({
            el: "#datepicker-demo",
            components: { Datepicker },
            data: {
                date1: '26/04/2018',
                date2: '25/04/2018'
            },
            methods: {
                onValueChanged: function (newValue: any) {
                    console.log("on value changed", newValue);
                }
            }
        });

    }

}


var page = new DatepickerPage();