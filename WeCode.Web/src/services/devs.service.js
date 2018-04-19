import axios from 'axios';
// https://alligator.io/vuejs/rest-api-axios/
var DevsService = /** @class */ (function () {
    function DevsService() {
        console.log("Devs service");
    }
    DevsService.prototype.test = function () {
        return "ok";
    };
    DevsService.prototype.getDevs = function () {
        return axios.get('api/devs');
    };
    DevsService.prototype.update = function (dev) {
        return axios.post('api/devs/save', {
            body: dev
        });
    };
    return DevsService;
}());
export { DevsService };
