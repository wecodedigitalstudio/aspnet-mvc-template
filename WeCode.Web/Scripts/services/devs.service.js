import * as $ from 'jquery';
var DevsService = /** @class */ (function () {
    function DevsService() {
        console.log("Devs service");
    }
    DevsService.prototype.getDevs = function () {
        var url;
        url = "api/devs/Search";
        $.getJSON(url, function (data, textStatus, jqXHR) {
            //var repos: Repo[] = data;
            //...
            alert(data);
        })
            .fail(function () {
            alert("error!");
            //callback([]);
        });
        return "devs";
    };
    return DevsService;
}());
