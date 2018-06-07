<template>

    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
                </div>
                <div class="modal-body">
                    {{message}}
                </div>
                <div class="modal-footer">
                    <button type="button" v-on:click="$emit('ok')" class="btn btn-default ok" data-dismiss="modal">Ok</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">

    import Vue from "vue";
    import Component from "vue-class-component"
    import { Prop, Watch, Emit } from "vue-property-decorator"

    @Component
    export default class NotificationDialog extends Vue {

        @Prop()
        public title: string = "";

        @Prop()
        public message: string = "";

        mounted() {
            let nd = this;
            document.addEventListener("keyup", function (e: any) {

                if ($(nd.$el).hasClass('in')) {
                    if (e.keyCode === 27 || e.keyCode === 13) {
                        nd.$emit('ok');
                    }
                }

            });
        }

        public open(): void {
            $(this.$el).modal('show');
        }

        public close(): void {
            $(this.$el).modal('hide');
        }

    }

</script>
