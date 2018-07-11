
function DevsIndex() {

    var table = $('#devs-table').DataTable({
        processing: true,
        serverSide: false,
        paging: true,
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
        pageLength: 10,
        columns: [
            { "data": "Id" },
            { "data": "FirstName" },
            { "data": "LastName" },
            { "data": "Category" },
            { "data": "Birthday" },
            {
                "data": null,
                "render": function (data, type, row) {
                    return '<a class="edit" href="/devs/details?id=' + row.Id + '" >Details</a>';
                }
            }
        ]

    });



    $.getJSON("/api/devs", function (result) {

        table.clear();
        table.rows.add(result);
        table.draw();

    });

}