var projectsController = angular.module('projects.controller', []);

projectsController.controller('projectsController', function () {
    var vm = {};

    vm.projects = [
        {
            name: "Cloud Connect Portal",
            company: "FX Global, Inc.",
            description: "",
            features: [
                {

                }
            ]
        },
        // {
        //     name: "HTML String Extraction",
        //     company: "NAVEX Global",
        //     description: "",
        //     features: [
        //         {

        //         }
        //     ]
        // },
        {
            name: "EthicsPoint",
            company: "NAVEX Global",
            description: "",
            features: [
                {
                    // American Express - https://secure.ethicspoint.com/domain/media/en/gui/41310/
                    // MGM China - https://secure.ethicspoint.com/domain/media/en/gui/46070/
                    // Bupa - https://secure.ethicspoint.eu/domain/media/en/gui/102918/
                    // BP - https://secure.ethicspoint.com/domain/media/en/gui/41794/
                    // Enel - https://secure.ethicspoint.eu/domain/media/en/gui/102504/
                }
            ]
        },
        {
            name: "PATS",
            company: "Axis Clinical Software",
            description: "",
            features: [
                {

                }
            ]
        }
    ];

    return vm;
});
