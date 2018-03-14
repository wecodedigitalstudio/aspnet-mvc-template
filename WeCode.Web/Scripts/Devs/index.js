
function DevsIndex() {

    $('#devs-table').DataTable({
        processing: true,
        serverSide: true,
        paging: true,
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
        pageLength: 10,
        ajax: {
            type: "GET",
            url: "api/devs/Search"
        },
        columns: [
            { "data": "Id" },
            { "data": "FirstName" },
            { "data": "LastName" },
            { "data": "Category" },
            {
                "data": null,
                "render": function (data, type, row) {
                    return '<a class="edit" href="/devs/details?id=' + row.Id + '" >details</a>';
                }
            }
        ]

    });

}

