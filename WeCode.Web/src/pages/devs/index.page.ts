﻿import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch, Emit } from "vue-property-decorator";
import { DevsService } from '../../services/devs.service';
import { Developer } from '../../models/developer.model';

export class DevsIndexPage {

    private devs: Developer[] = [];

    constructor() {

        console.log("Devs index");

        let devsService: DevsService = new DevsService();

        devsService.getDevs()
            .then(response => {
                this.devs = response.data;

                console.log("devs", this.devs);
                console.log("count", this.devs.length);
            })
            .catch(e => {
                console.log("error", e);
            });

    }

    public mounted() {
        this.loadDevs()
    }

    private loadDevs() {
        this.DevsService.getDevs()
            .then(response => {
                
            })
        
    }

}


var devsIndex = new DevsIndexPage();