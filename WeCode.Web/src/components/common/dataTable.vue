<template>

    <table class="table table-striped table-bordered" >
        <thead>
            <slot name="thead">
                <th v-for="col in thead">
                    {{col}}
                </th>
            </slot>
        </thead>
        <tbody></tbody>
    </table>

</template>

<script>

    var table = null;

    export default {

        props: ['columns', 'rows'],

        mounted: function () { },

        watch: {

            columns: function (columns) {
                this.init(columns);
            },

            rows: function (rows) {
                table.clear();
                table.rows.add(rows);
                table.draw();
            }

        },

        methods: {

            init: function (columns) {

                table = $(this.$el).DataTable({
                    processing: true,
                    serverSide: false,
                    paging: true,
                    lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
                    pageLength: 10,
                    columns: columns

                });

            }

        }

    }



</script>
