import axios from 'axios';
// https://alligator.io/vuejs/rest-api-axios/
var DevsService = /** @class */ (function () {
    function DevsService() {
    }
    DevsService.prototype.getDevs = function () {
        return axios.get('/api/devs');
    };
    DevsService.prototype.update = function (dev) {
        return axios.post('/api/devs/save', dev);
    };
    DevsService.prototype.getDetails = function (id) {
        return axios.get('/api/devs/details?id=' + id);
    };
    return DevsService;
}());
export { DevsService };
