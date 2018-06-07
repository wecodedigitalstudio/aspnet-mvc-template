<template>
    <div class="modal fade" id="validation-messages-dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
                </div>
                <div class="modal-body">

                    <div class="row form-group">
                        <dl class="col-xs-8 col-xs-offset-2 padding-top-30 padding-left-20 ">
                            <dd v-for="message in messages">
                                <h5><i class="fa fa-warning red"></i>&nbsp<strong><span class="text-danger">{{message}}</span></strong></h5>
                            </dd>
                        </dl>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
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
    export default class ValidationDialog extends Vue {

        public messages: string[] = [];

        @Prop()
        public title: string = "";

        mounted() {
            let vd = this;
            document.addEventListener("keyup", function (e: any) {
                if (e.keyCode === 27 || e.keyCode === 13) {
                    vd.close();
                }

            });
        }

        public openDialog(validationMessages: string[]): void {
            this.messages = validationMessages;
            $(this.$el).modal('show');
        }

        public close(): void {
            $(this.$el).modal('hide');
        }

    }

</script>
