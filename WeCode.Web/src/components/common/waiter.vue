<template>

    <div class="modal fade" id="waiter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Elaborazione in corso...</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                    </div>
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
    export default class Waiter extends Vue {

        public open(): void {
            console.log("modale", this.$el);
            $(this.$el).modal('show');
        }

        public close(): void {
            console.log("modale chiusa", this.$el);
            $(this.$el).modal('hide');
        }

    }

</script>
