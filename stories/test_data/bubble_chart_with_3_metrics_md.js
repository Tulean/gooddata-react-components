// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        buckets: [
            {
                localIdentifier: "measures",
                items: [
                    {
                        localIdentifier: "784a5018a51049078e8f7e86247e08a3",
                        title: "_Snapshot [EOP-2]",
                        definition: {
                            measureDefinition: {
                                item: {
                                    uri: "/gdc/md/" + projectId + "/obj/67097",
                                },
                            },
                        },
                    },
                ],
            },
            {
                localIdentifier: "secondary_measures",
                items: [
                    {
                        localIdentifier: "9e5c3cd9a93f4476a93d3494cedc6010",
                        title: "# of Open Opps.",
                        definition: {
                            measureDefinition: {
                                item: {
                                    uri: "/gdc/md/" + projectId + "/obj/13465",
                                },
                            },
                        },
                    },
                ],
            },
            {
                localIdentifier: "tertiary_measures",
                items: [
                    {
                        localIdentifier: "71d50cf1d13746099b7f506576d78e4a",
                        definition: {
                            measureDefinition: {
                                item: {
                                    uri: "/gdc/md/" + projectId + "/obj/1543",
                                },
                            },
                        },
                        title: "Remaining Quota",
                    },
                ],
            },
        ],
    };
};
