// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        execution: {
            afm: {
                measures: [
                    {
                        localIdentifier: "m1",
                        definition: {
                            measure: {
                                item: { uri: "/gdc/md/" + projectId + "/obj/78576" },
                                aggregation: "min",
                            },
                        },
                        alias: "Min Paid",
                        format: "#,##0.00",
                    },
                    {
                        localIdentifier: "m2",
                        definition: {
                            measure: {
                                item: { uri: "/gdc/md/" + projectId + "/obj/78575" },
                                aggregation: "sum",
                            },
                        },
                        alias: "Sum of Salary",
                        format: "#,##0.00",
                    },
                ],
                attributes: [
                    {
                        displayForm: { uri: "/gdc/md/" + projectId + "/obj/78625" },
                        localIdentifier: "a1",
                    },
                ],
            },
            resultSpec: {
                dimensions: [{ itemIdentifiers: ["measureGroup"] }, { itemIdentifiers: ["a1"] }],
                sorts: [],
            },
        },
    };
};
