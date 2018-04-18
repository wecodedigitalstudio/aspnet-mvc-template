import Vue from 'vue';
import Datepicker from '../../components/common/datepicker.vue';


var app = new Vue({

    el: '#datepicker-demo',
    components: { Datepicker },
    data: {
        date1: '26/04/2018',
        date2: '25/04/2018'
    },
    methods: {
        onValueChanged: function (newValue) {
            console.log("on value changed", newValue);
            console.log("on value changed", this.date);
        }
    }


});