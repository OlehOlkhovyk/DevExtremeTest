var vendorsList = [
    {"ID": 1, "vendorName": "LG" },
    {"ID": 2, "vendorName": "Sumsung" },
    {"ID": 3, "vendorName": "Meizu" },
    {"ID": 4, "vendorName": "HUAWEI" },
    {"ID": 5, "vendorName": "Lenovo" },
    {"ID": 6, "vendorName": "Microsoft" },
    {"ID": 7, "vendorName": "Apple" },
    {"ID": 9, "vendorName": "Xiaomi" },
    {"ID": 10, "vendorName": "Google" }
];
var OrderDataGrid = function (e) {
    $("#gridOrdersContainer").dxDataGrid({
        dataSource: myOrderDataSource(e),
        keyExpr: "ID",
        columns: [
            "CustomerId",
            {
                dataField: "ProductName",
                //showEditorAlways: true,
                allowResizing: true,
                cellTemplate: function (element, info) {
                    element.append("<div>" + info.text + "</div>")
                        .css("white-space", "pre-wrap");
                }
            },
            "CountProd",
            {
                dataField: "VendorID",
                caption:"Vendor",
                lookup: {
                    dataSource: vendorsList,
                    valueExpr: "ID",
                    displayExpr: "vendorName"
                }
            },
            {
                dataField: "OrderDate",
                dataType: "date"
            }
        ],
        showBorders: true,
        paging: {
            pageSize: 8
        },
        sorting: { mode: "multiple" },
        //allowColumnReordering: true,
        
        //allowColumnResizing: true,
        //wordWrapEnabled: true,
        editing: {
            mode: 'batch',
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true
        },
        onEditorPreparing: function (e) {
            if (e.dataField == "ProductName") {
                e.editorName = "dxTextArea";
                e.editorOptions.onValueChanged = function (args) {
                    e.setValue(args.value);
                }
            }
        }
    }).dxDataGrid("instance");
}