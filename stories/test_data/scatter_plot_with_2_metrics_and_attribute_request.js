// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        execution: {
            afm: {
                measures: [
                    {
                        localIdentifier: "33bd337ed5534fd383861f11ff657b23",
                        definition: {
                            measure: {
                                item: {
                                    uri: "/gdc/md/" + projectId + "/obj/1144",
                                },
                                aggregation: "sum",
                            },
                        },
                        alias: "Sum of Amount",
                    },
                    {
                        localIdentifier: "88291f6f6fef47a7b9c5ad709af2b45b",
                        definition: {
                            measure: {
                                item: {
                                    uri: "/gdc/md/" + projectId + "/obj/13465",
                                },
                            },
                        },
                        alias: "# of Open Opps.",
                    },
                ],
                attributes: [
                    {
                        displayForm: {
                            uri: "/gdc/md/" + projectId + "/obj/952",
                        },
                        localIdentifier: "7369345339414eceaaf67ba05dfe6724",
                    },
                ],
            },
            resultSpec: {
                dimensions: [
                    {
                        itemIdentifiers: ["7369345339414eceaaf67ba05dfe6724"],
                    },
                    {
                        itemIdentifiers: ["measureGroup"],
                    },
                ],
                sorts: [],
            },
        },
    };
};
