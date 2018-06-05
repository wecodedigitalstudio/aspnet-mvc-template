<template>

    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
                </div>
                <div class="modal-body">
                    {{message}}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default cancel" data-dismiss="modal">No</button>
                    <button type="submit" v-on:click="$emit('confirmed')" class="btn btn-primary" data-dismiss="modal">Si</button>
                </div>
            </div>
        </div>
    </div>

</template>


<script lang="ts">

    import Vue from "vue";
    import Component from "vue-class-component";
    import { Prop, Watch, Emit } from "vue-property-decorator";

    @Component
    export default class ConfirmDialog extends Vue {

        @Prop()
        public title: string = "";

        @Prop()
        public message: string = "";

        mounted() {
            let cd = this;
            document.addEventListener("keyup", function (e: any) {

                if ($(cd.$el).hasClass('in')) {
                    if (e.keyCode === 27) {
                        cd.close();
                    } else if (e.keyCode === 13) {
                        cd.$emit('confirmed');
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
