import { DevsService } from '../../services/devs.service';
var DevsIndexPage = /** @class */ (function () {
    function DevsIndexPage() {
        var _this = this;
        this.devs = [];
        console.log("Devs index");
        var devsService = new DevsService();
        devsService.getDevs()
            .then(function (response) {
            _this.devs = response.data;
            console.log("devs", _this.devs);
            console.log("count", _this.devs.length);
        })
            .catch(function (e) {
            console.log("error", e);
        });
    }
    DevsIndexPage.prototype.mounted = function () {
        this.loadDevs();
    };
    DevsIndexPage.prototype.loadDevs = function () {
        this.DevsService.getDevs()
            .then(function (response) {
        });
    };
    return DevsIndexPage;
}());
export { DevsIndexPage };
var devsIndex = new DevsIndexPage();
