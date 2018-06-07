<template>
    <!-- https://select2.org/appearance#container-width -->
    <!-- Select2 will do its best to resolve the percent width specified via a CSS class, but it is not always possible. The best way to ensure that Select2 is using a percent based width is to inline the style declaration into the tag. -->
    <select :disabled="disabled" class="select2-template" style="width: 100%"></select>
</template>

<script>

    import select2 from 'select2';

    var select2Obj = null;

    export default {
        props: ['options', 'url', 'value', 'text', 'value-field', 'text-field', 'disabled', 'placeholder', 'dropdownparent'],

        // init
        mounted: function () {
            if (this.url) {
                this.initAjax();
            }
            else {
                this.init(this.options, this.value);
            }
        },

        // modifica esterna props
        watch: {

            value: function (value) {
                if (value != $(this.$el).val() && this.options != undefined) {
                    $(this.$el)
                        .val(value)
                        .trigger('change');

                }

            },

            text: function (text) {
                if (text) {
                    this.initAjax(this.value, this.text);
                }
            },

            options: function (options) {

                $(this.$el).empty().trigger("change");

                $(this.$el).append(new Option('', '', true, false));

                if (options) {
                    for (var i = 0; i < options.length; i++) {

                        var id = options[i][this.valueField];
                        var text = options[i][this.textField];
                        var selected = id == this.value;

                        $(this.$el).append(new Option(text, id, false, selected));
                    }

                    $(this.$el).trigger("change");
                }
            }

        },
        methods: {

            getSelectedText: function (value) {
                var vf = this.valueField;
                var tf = this.textField;
                var values = this.options.map(function (o) { return o[vf] });
                var index = values.indexOf(value);

                return index >= 0 ? this.options[index][tf] : "";
            },


            initAjax: function (v, t) {

                $(this.$el).off();

                var vm = this;

                v = v == 0 ? -1 : v;    // l'inizializzazione con 0 non funziona

                var vf = this.valueField;
                var tf = this.textField;

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
                        //vm.$emit('text-changed', vm.getSelectedText(this.value));
                    });

            },


            init: function (options, value) {

                var vm = this
                select2Obj = $(this.$el)
                    .select2({
                        dropdownParent: this.dropdownparent ? $(this.dropdownparent) : undefined,
                        placeholder: '',
                        data: tranformOptions(options, this.valueField, this.textField),
                        allowClear: true,
                        width: 'resolve'
                    })
                    .val(value).trigger('change')
                    .on('select2:select', function () {
                        this.value = $(this).val();
                        vm.$emit('update:value', this.value);
                        vm.$emit('value-changed', this.value);
                        vm.$emit('text-changed', vm.getSelectedText(this.value));
                    })
                    .on('select2:unselect', function () {
                        vm.$emit('update:value', '');
                        vm.$emit('value-changed', '');
                    });

                //this.$emit('content-loaded');

            }
        },
        destroyed: function () {
            $(this.$el).off().select2('destroy');
        }
    }

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

</script>

<style>
    @import '/Content/plugins/select2/css/select2.min.css';

    .select2-container {
        width: 100%;
    }
</style>