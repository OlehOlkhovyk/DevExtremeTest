$(function () {
    $("#gridСustomersContainer").dxDataGrid({
        dataSource: myCustomerDataSource,
        columns: [
            "CompanyName",
            "City",
            "State",
            "Phone",
            "Fax",
            {
                dataField: "Address",
                width: 250
            }
        ],
        showBorders: true,
        paging: {
            pageSize: 8
        },
        sorting: { mode: "multiple" },
        allowColumnReordering: true,
        allowColumnResizing: true,
        //filterRow: { visible: true },
        headerFilter: {
            visible: true
        },
        selection: { mode: "multiple" },
        groupPanel: { visible: true },
        editing: {
            mode: 'row',
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true
        },
        onRowClick: function (e) {
            OrderDataGrid(e);
        }
    });
});