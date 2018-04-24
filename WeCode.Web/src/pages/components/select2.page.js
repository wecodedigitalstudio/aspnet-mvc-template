import Vue from "vue";
import Select3 from "../../components/common/select3.vue";
var Select2Page = /** @class */ (function () {
    function Select2Page() {
        console.log("Select2 page");
        var v = new Vue({
            el: "#select2-demo",
            components: { Select3: Select3 },
            data: {
                selectedCategory: 'aa',
                categories: [],
                selectedCountry: '4'
            },
            methods: {
                onCategoryChanged: function (newValue) {
                    console.log("new selected category", this.selectedCategory);
                },
                onCountryChanged: function (newValue) {
                    console.log("new selected country", this.selectedCountry);
                },
                onContentLoaded: function () {
                    console.log("categories loaed");
                }
            }
        });
    }
    return Select2Page;
}());
export { Select2Page };
var page = new Select2Page();
