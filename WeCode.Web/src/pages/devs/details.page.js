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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Vue from 'vue';
import Component from "vue-class-component";
import Select2 from '../../components/common/select2.vue';
import Datepicker from '../../components/common/datepicker.vue';
import Waiter from '../../components/common/waiter.vue';
import NotificationDialog from "../../components/common/notificationDialog.vue";
import { Developer } from '../../models/developer.model';
import { DevsService } from '../../services/devs.service';
import { DropdownItem } from "../../models/dropdown.model";
var DevsEditPage = /** @class */ (function (_super) {
    __extends(DevsEditPage, _super);
    function DevsEditPage() {
        var _this = _super.call(this) || this;
        _this.optionSkills = [];
        _this.id = $('#id').val();
        _this.devsService = new DevsService();
        _this.dev = new Developer;
        _this.title = "";
        return _this;
    }
    DevsEditPage.prototype.mounted = function () {
        var _this = this;
        this.loadDev(function (dev) {
            _this.optionSkills = _this.getDevSkills();
            _this.title = _this.dev.FirstName + " " + _this.dev.LastName;
        });
    };
    // load dev
    DevsEditPage.prototype.loadDev = function (done) {
        var _this = this;
        this.devsService.getDetails(this.id)
            .then(function (response) {
            _this.dev = response.data;
            done(_this.dev);
        });
    };
    // load skills devs
    DevsEditPage.prototype.getDevSkills = function () {
        var skillsOption = [];
        skillsOption.push(new DropdownItem("BackEnd", "Back-End"));
        skillsOption.push(new DropdownItem("FrontEnd", "Front-End"));
        skillsOption.push(new DropdownItem("FullStack", "Full-Stack"));
        return skillsOption;
    };
    // update details dev
    DevsEditPage.prototype.onSave = function () {
        var _this = this;
        this.$refs.waiter.open();
        this.devsService.update(this.dev)
            .then(function (response) {
            console.log("response");
            _this.closeWaiter();
            //if (response.data != undefined) {
            //    // TOSO: msg di validazione
            //    this.$refs.waiter.close();
            //} else {
            //    // save OK !!
            //    this.dev = response.data;
            //    this.$refs.waiter.close();
            //}
        });
        //setInterval(() => this.$refs.waiter.close(), 1000);
    };
    DevsEditPage.prototype.closeWaiter = function () {
        this.$refs.waiter.close();
    };
    DevsEditPage = __decorate([
        Component({
            el: '#dev-details',
            components: {
                Select2: Select2,
                Datepicker: Datepicker,
                Waiter: Waiter,
                NotificationDialog: NotificationDialog
            }
        }),
        __metadata("design:paramtypes", [])
    ], DevsEditPage);
    return DevsEditPage;
}(Vue));
export default DevsEditPage;
var page = new DevsEditPage();
Vue.config.devtools = true;
