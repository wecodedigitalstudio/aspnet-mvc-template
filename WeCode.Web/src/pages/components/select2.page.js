import Vue from 'vue';
import Select2 from '../../components/common/select2.vue';



var app = new Vue({
    el: '#select2-demo',
    components: { Select2 },
    data: {
        selectedCategory: '',
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
})

// categories
$.getJSON('http://localhost:50510/api/Categories', function (result) {
    app.categories = result;

    app.$refs.childComponent.$on('content-loaded', function () {
        app.selectedCategory = result[2].Code;
    });

});