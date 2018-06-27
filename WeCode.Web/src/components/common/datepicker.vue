<template>
    <input type="text" v-model="value" class="form-control datepicker" />
</template>

<script>


    export default {
        props: ['value'],

        // init
        mounted: function () {

            var vm = this
            $(this.$el).click(function () {

                $(this)
                    .datepicker({
                        weekStart: 1,
                        language: 'it',
                        autoclose: true
                    })
                    .on('changeDate', function () {
                        vm.$emit('update:value', this.value);
                        vm.$emit('value-changed', this.value);
                    });

                $(this).datepicker('update', $(this).val());
                $(this).datepicker('show');

            });

        }
    }


</script>

