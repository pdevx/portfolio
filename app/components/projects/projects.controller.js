var projectsController = angular.module('projects.controller', []);

projectsController.controller('projectsController', function () {
    var vm = {};

    vm.projects = [
        {
            name: "Cloud Connect Portal",
            company: "FX Global, Inc.",
            img: "assets/img/cloud-connect_square.png",
            description: " Served as principal developer for web application built with Angular and Angular Material. Helped develop serverless architecture for web application using the AWS Javascript SDK, AWS DynamoDB, AWS API Gateway, AWS IoT, and AWS Lambdas.",
            features: [
                {
                    title: "Cognito User Authentication",
                    img: "assets/img/cloud-connect-login.png",
                    description: ""
                },
                {
                    title: "",
                    img: "",
                    description: ""
                },
                {
                    title: "",
                    img: "",
                    description: ""
                },
                {
                    title: "",
                    img: "",
                    description: ""
                }
            ]
        },
        // {
        //     name: "HTML String Extraction",
        //     company: "NAVEX Global",
        //     description: "",
        //     features: []
        // },
        {
            name: "EthicsPoint",
            company: "NAVEX Global",
            img: "assets/img/navex_square.png",
            description: "Created web intake sites for online reports using jQuery, HTML, Javascript, and CSS with a strong focus on cross-browser compatibility.",
            features: [
                {
                    title: "",
                    img: "",
                    description: ""
                },
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
            img: "assets/img/axis_square.png",
            description: "Worked on development of new web-based application using AngularJS on the front-end, Node.js on the back-end, and EWD.js to interface with a Cache database.",
            features: [
                {

                }
            ]
        }
    ];

    return vm;
});
