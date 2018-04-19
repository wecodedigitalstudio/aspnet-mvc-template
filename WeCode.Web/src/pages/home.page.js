import Vue from "vue";
import HelloComponent from "../components/hello";
import PippoComponent from "../components/hello2.vue";
var HomePage = /** @class */ (function () {
    function HomePage() {
        console.log("Home");
        var v = new Vue({
            el: "#page-home",
            template: "\n            <div>\n                Name: <input v-model=\"name\" type=\"text\">\n                <hello-component :name=\"name\" :initialEnthusiasm=\"5\" />\n                <pippo-component :name=\"name\" :initialEnthusiasm=\"5\" />\n            </div>\n            ",
            data: { name: "World" },
            components: {
                HelloComponent: HelloComponent,
                PippoComponent: PippoComponent
            }
        });
    }
    return HomePage;
}());
export { HomePage };
var home = new HomePage();
