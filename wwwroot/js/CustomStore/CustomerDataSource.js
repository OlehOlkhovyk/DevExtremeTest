﻿    function isNotEmpty(value) {
        return value !== undefined && value !== null && value !== "";
    }
    var myCustomerDataSource = new DevExpress.data.CustomStore({
        key: "ID",
        load: function (loadOptions) {
            var deferred = $.Deferred(),
                args = {};

            [
                "skip",
                "take",
                "requireTotalCount",
                "requireGroupCount",
                "sort",
                "filter",
                "totalSummary",
                "group",
                "groupSummary"
            ].forEach(function (i) {
                if (i in loadOptions && isNotEmpty(loadOptions[i]))
                    args[i] = JSON.stringify(loadOptions[i]);
            });
            $.ajax({
                url: "http://localhost:63871/api/DataService",
                dataType: "json",
                data: args,
                success: function (result) {
                    deferred.resolve(result.data, {
                        totalCount: result.totalCount,
                        summary: result.summary,
                        groupCount: result.groupCount
                    });
                },
                error: function () {
                    deferred.reject("Data Loading Error");
                },
                timeout: 5000
            });

            return deferred.promise();
        },
        update: function (key, values) {
            return $.ajax({
                url: "http://localhost:63871/api/DataService/" + encodeURIComponent(key),
                method: "PUT",
                data: values
            })
        }
    });
