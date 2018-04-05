
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
    props: ['options', 'value', 'value-field', 'text-field', 'disabled', 'placeholder'],
    template: '<select :disabled="disabled" class="select2-template"></select>',

    // init
    mounted: function () {
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