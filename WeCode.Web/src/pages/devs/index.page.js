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
import DataTable from '../../components/common/dataTable.vue';
import { DevsService } from '../../services/devs.service';
var DevsIndexPage = /** @class */ (function (_super) {
    __extends(DevsIndexPage, _super);
    function DevsIndexPage() {
        var _this = _super.call(this) || this;
        _this.title = "devs";
        _this.columnOptions = [];
        _this.devs = [];
        _this.devsService = new DevsService();
        return _this;
    }
    DevsIndexPage.prototype.mounted = function () {
        var _this = this;
        this.columnOptions.push({ data: "Id" });
        this.columnOptions.push({ data: "FirstName" });
        this.columnOptions.push({ data: "LastName" });
        this.columnOptions.push({ data: "Category" });
        this.columnOptions.push({ data: "Birthday" });
        this.columnOptions.push({
            render: function (data, type, row) {
                return '<a class="edit" href="/devs/details?id=' + row.Id + '" >Details</a>';
            }
        });
        this.devsService.getDevs()
            .then(function (response) {
            _this.devs = response.data;
        });
    };
    DevsIndexPage = __decorate([
        Component({
            el: '#index-devs-page',
            components: {
                DataTable: DataTable
            }
        }),
        __metadata("design:paramtypes", [])
    ], DevsIndexPage);
    return DevsIndexPage;
}(Vue));
export default DevsIndexPage;
var page = new DevsIndexPage();
Vue.config.devtools = true;
