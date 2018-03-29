
import { Developer } from '../models/developer.model';
import * as $ from 'jquery';

class DevsService {

    constructor() {
        console.log("Devs service");
    }

    public getDevs(): string {

        var url: string;
        url = "api/devs/Search";

        $.getJSON(url, (data: any, textStatus: string, jqXHR: JQueryXHR) => {
            //var repos: Repo[] = data;
            //...
            alert(data);
        })
        .fail(function () {
            alert("error!");
            //callback([]);
        });

        return "devs";
    }


}