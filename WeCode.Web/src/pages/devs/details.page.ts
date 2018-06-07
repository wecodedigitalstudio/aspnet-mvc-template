﻿import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch, Emit } from "vue-property-decorator";
import Select2 from '../../components/common/select2.vue';
//import Datepicker from '../../components/common/datepicker.vue';
import Waiter from '../../components/common/waiter.vue';
import NotificationDialog from "../../components/common/notificationDialog.vue";
import { Developer } from '../../models/developer.model';
import { DevsService } from '../../services/devs.service';
import { Options } from '../../models/options-dtpicker.model';
import { Dropdown, DropdownItem } from "../../models/dropdown.model";
import datePicker from "vue-bootstrap-datetimepicker";



@Component({
    el: '#dev-details',
    components: {
        Select2,
  //      Datepicker,
        Waiter,
        NotificationDialog,
    }
})

export default class DevsEditPage extends Vue {

    // reference childComponents
    $refs: {
        waiter: Vue,
        notificationDialog: Vue
    }

    public id: string;
    private devsService: DevsService;
    public dev: Developer;
    public title: string;
    public optionSkills: DropdownItem[] = [];
    public options: Options;

    constructor() {
        super();
        this.id = $('#id').val() as string;
        this.devsService = new DevsService();
        this.dev = new Developer;
        this.title = "";
        this.options = new Options();
    }

    public mounted() {
        this.loadDev((dev: Developer) => {
            this.optionSkills = this.getDevSkills();
            console.log("id Number: ", this.id);
            this.title = this.dev.FirstName + " " + this.dev.LastName;
        });
    }

    // load dev
    public loadDev(done: (dev: Developer) => void) {
        this.devsService.getDetails(this.id)
            .then(response => {
                this.dev = response.data;
                done(this.dev);
            });
    }

    // load skills devs
    private getDevSkills(): DropdownItem[] {
        let skillsOption: DropdownItem[] = [];
        skillsOption.push(new DropdownItem("BackEnd", "Back-End"));
        skillsOption.push(new DropdownItem("FrontEnd", "Front-End"));
        skillsOption.push(new DropdownItem("FullStack", "Full-Stack"));
        return skillsOption;
    }

    // update details dev
    public onSave() {
        this.devsService.update(this.dev);
    }
}

let page = new DevsEditPage();
Vue.config.devtools = true;