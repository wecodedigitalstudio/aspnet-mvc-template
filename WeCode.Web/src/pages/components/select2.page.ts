import Vue from "vue";
import Select3 from "../../components/common/select3.vue";

export class Select2Page {


    constructor() {

        console.log("Select2 page");

        let v = new Vue({
            el: "#select2-demo",
            components: { Select3 },
            data: {
                selectedCategory: 'aa',
                categories: [],

                selectedCountry: '4'
            },
            methods: {
                onCategoryChanged(newValue: any) {
                    console.log("new selected category", this.selectedCategory);
                },
                onCountryChanged(newValue: any) {
                    console.log("new selected country", this.selectedCountry);
                },
                onContentLoaded() {
                    console.log("categories loaed");
                }
            }
        });

    }

}


var page = new Select2Page();