
import Vue from "vue";
import HelloComponent from "../components/hello";
import PippoComponent from "../components/hello2.vue";

export class HomePage {


    constructor() {

        console.log("Home");

        let v = new Vue({
            el: "#page-home",
            template: `
            <div>
                Name: <input v-model="name" type="text">
                <hello-component :name="name" :initialEnthusiasm="5" />
                <pippo-component :name="name" :initialEnthusiasm="5" />
            </div>
            `,
            data: { name: "World" },
            components: {
                HelloComponent,
                PippoComponent
            }
        });

    }

}


var home = new HomePage();