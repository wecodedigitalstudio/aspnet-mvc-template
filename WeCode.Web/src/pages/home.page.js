import Vue from "vue";
import HomeComponent from "../components/home.vue";
// https://github.com/Microsoft/TypeScript-Vue-Starter
var HomePage = /** @class */ (function () {
    function HomePage() {
        console.log("Home page");
        var v = new Vue({
            el: "#page-home",
            template: "\n            <div>\n                Name: <input v-model=\"name\" type=\"text\">\n                <home-component :name=\"name\" :initialEnthusiasm=\"5\" />\n            </div>\n            ",
            data: { name: "We-Code" },
            components: {
                HomeComponent: HomeComponent
            }
        });
    }
    return HomePage;
}());
export { HomePage };
var home = new HomePage();
