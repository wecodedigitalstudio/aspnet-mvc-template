import Vue from "vue";
import Select2 from "../../components/common/select2.vue";

export class Select2Page {


    constructor() {

        console.log("Select2 page");

        let v = new Vue({
            el: "#select2-demo",
            components: { Select2 },
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