
import Vue from "vue";
//import HomeComponent from "../components/home.vue";

// https://github.com/Microsoft/TypeScript-Vue-Starter

export class HomePage {


    constructor() {

        console.log("Home page");

        let v = new Vue({
            el: "#page-home",
            template: `
            <div>
                Name: <input v-model="name" type="text">
                //<home-component :name="name" :initialEnthusiasm="5" />
            </div>
            `,
            data: { name: "We-Code" },
            //components: {
            //    HomeComponent
            //}
        });

    }

}


var home = new HomePage();