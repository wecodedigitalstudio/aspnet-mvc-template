﻿import Vue from 'vue';
import Component from "vue-class-component";
import { Prop, Watch, Emit } from "vue-property-decorator";
import DataTable from '../../components/common/dataTable.vue';
//import { ColumnOption } from '../../components/common/column.option';

declare module 'vue/types/vue' {
    interface Vue {
        open(): void
        close(): void
    }
}

@Component({
    el: '#index-devs-page',
    components: {
        DataTable
    }
})

export default class DevsIndexPage extends Vue {

    public title: string = "devs";

    public columnOptions: any[] = [];

    constructor() {
        super();
    }

    public mounted() {

        this.columnOptions.push({ data: "Id" });
        this.columnOptions.push({ data: "FirstName" });
        this.columnOptions.push({ data: "LastName" });
        this.columnOptions.push({ data: "Category" });
        this.columnOptions.push({ data: "Birthday" });
        this.columnOptions.push({
            render: function (data: any, type: any, row: any) {
                return '<a class="edit" href="/devs/details?id=' + row.Id + '" >Details</a>';
            } });


    }
    

}

let page = new DevsIndexPage();
Vue.config.devtools = true;