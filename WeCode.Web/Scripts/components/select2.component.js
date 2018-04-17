
// Trasformazione delle options in origine nel formato (id, text) supportato da select2
function tranformOptions(originalOptions, valueField, textField) {
    var innerOptions = [];
    for (var i = 0; i < originalOptions.length; i++) {
        innerOptions.push({
            id: originalOptions[i][valueField],
            text: originalOptions[i][textField]
        });
    }

    return innerOptions;
}

// Componente
Vue.component('select2', {
    props: ['options', 'url', 'value', 'text', 'value-field', 'text-field', 'disabled', 'placeholder'],
    template: '<select :disabled="disabled" class="select2-template"></select>',

    // init
    mounted: function () {

        console.log("mounted", this.url);
        if (this.url)
            this.initAjax();
        else
            this.init(this.options, this.value);
    },

    // modifica esterna props
    watch: {

        value: function (value) {

            if (value != $(this.$el).val()) {
                $(this.$el)
                    .val(value)
                    .trigger('change');
            }

        },
        options: function (options) {
            $(this.$el).off().select2('destroy');
            this.init(options, this.value);
        }

    },
    methods: {

        initAjax: function () {
            
            var vm = this

            var vf = this.valueField;
            var tf = this.textField;

            var v = this.value;
            var t = this.text;

            $(this.$el)
                .select2({
                    placeholder: this.placeholder,
                    minimumInputLength: 2,
                    allowClear: true,
                    initSelection: function (element, callback) {
                        callback({ 'id': v, 'text': t });
                    },
                    ajax: {
                        url: this.url,
                        data: function (term) {
                            return { fullText: term.term };
                        },
                        processResults: function (data) {

                            var items = [];
                            for (var i = 0; i < data.length; i++) {
                                items.push({
                                    id: data[i][vf],
                                    text: data[i][tf]
                                });
                            }
                            return { results: items };
                        },
                        dataType: 'json'
                    }
                })
                .on('change', function () {
                    this.value = $(this).val();
                    vm.$emit('update:value', this.value);
                    vm.$emit('value-changed', this.value);
                });

        },

        init: function (options, value) {

            var vm = this
            $(this.$el)
                .select2({
                    placeholder: this.placeholder,
                    data: tranformOptions(options, this.valueField, this.textField),
                    allowClear: true
                })
                .val(value)
                .trigger('change')
                .on('change', function () {
                    this.value = $(this).val();
                    vm.$emit('update:value', this.value);
                    vm.$emit('value-changed', this.value);
                });

            this.$emit('content-loaded');

        },
    },
    destroyed: function () {
        $(this.$el).off().select2('destroy')
    }
})