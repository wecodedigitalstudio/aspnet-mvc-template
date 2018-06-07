import Vue from 'vue';
import Component from "vue-class-component";
import { Prop, Watch, Emit } from "vue-property-decorator";
import Select2 from '../../components/common/select2.vue';
import Datepicker from '../../components/common/datepicker.vue';
import { Developer } from '../../models/developer.model';
import { DevsService } from '../../services/devs.service';

@Component({
    el: '#devs-details',
    components: {
        Select2,
        Datepicker,
    }
})

export default class DevsEditPage extends Vue {

    private devsService: DevsService;
    public dev: Developer;
    public title: string;

    constructor() {
        super();
        this.devsService = new DevsService();
        this.dev = new Developer;
        this.title = "";
    }

    public onDevSelected(id: number): void {
        this.devsService.getDetails(id)
            .then(response => {
                this.dev = response.data;
            });
        this.title = this.dev.FirstName + " " + this.dev.LastName; 
    }
}

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

let page = new DevsEditPage();
Vue.config.devtools = true;