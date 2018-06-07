import Vue from 'vue';
import Component from "vue-class-component";
import { Prop, Watch, Emit } from "vue-property-decorator";
import Select2 from '../../components/common/select2.vue';
import Datepicker from '../../components/common/datepicker.vue';
import Waiter from '../../components/common/waiter.vue';
import NotificationDialog from "../../components/notificationDialog.vue";
import { Developer } from '../../models/developer.model';
import { DevsService } from '../../services/devs.service';
import { Dropdown, DropdownItem } from "../../models/dropdown.model";

@Component({
    el: '#dev-details',
    components: {
        Select2,
        Datepicker,
        Waiter,
        NotificationDialog
    }
})

export default class DevsEditPage extends Vue {

    $refs: {
        waiter: Vue,
    }

    public id: number;
    private devsService: DevsService;
    public dev: Developer;
    public title: string;
    public optionSkills: DropdownItem[] = [];

    constructor() {
        super();

        this.id = $('#id').val() as number;
        this.devsService = new DevsService();
        this.dev = new Developer;
        this.title = "";
    }

    public mounted () {
        this.loadDev(id, (dev: Developer) => {
            this.optionSkills = this.getDevSkills();
            this.title = this.dev.FirstName + " " + this.dev.LastName;
        });
    }

    // load dev
    public loadDev(id: number, done: (dev: Developer) => void) {
        this.devsService.getDetails(id)
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

    public onSave() {
        console.log("ciao");
        this.devsService.update(this.dev);
    }
}

let page = new DevsEditPage();
Vue.config.devtools = true;