
var dataTablesOptions = {
    //"retrieve": true,
    //"bPaginate": true,
    "language": {
        "sEmptyTable": "Nessun dato presente nella tabella",
        "sInfo": "Vista da _START_ a _END_ di _TOTAL_ righe",
        "sInfoEmpty": "Vista da 0 a 0 di 0 righe",
        "sInfoFiltered": "(filtrati da _MAX_ righe totali)",
        "sInfoPostFix": "",
        "sInfoThousands": ",",
        "sLengthMenu": "Visualizza _MENU_ righe",
        "sLoadingRecords": "Caricamento...",
        "sProcessing": "Elaborazione...",
        "sSearch": "Cerca:",
        "sZeroRecords": "La ricerca non ha portato alcun risultato.",
        "oPaginate": {
            "sFirst": "Inizio",
            "sPrevious": "Precedente",
            "sNext": "Successivo",
            "sLast": "Fine"
        },
        "oAria": {
            "sSortAscending": ": attiva per ordinare la colonna in ordine crescente",
            "sSortDescending": ": attiva per ordinare la colonna in ordine decrescente"
        }
    },
    "columns": []
}

function bindTable(tableId, columns, url, callback) {

    dataTablesOptions.ajax = {
        "processing": true,
        "serverSide": true,
        "url": url,
        "dataSrc": ""
    };

    //dataTablesOptions.columns = columns;
    dataTablesOptions.drawCallback = callback;

    $(tableId).DataTable(dataTablesOptions);
  
}