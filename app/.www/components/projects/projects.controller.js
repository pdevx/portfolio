var projectsController = angular.module('projects.controller', []);

projectsController.controller('projectsController', function($state) {
    var vm = {};

    vm.navigate = function(location) {
        console.log(location);
        $state.go(location);
    };

    vm.projects = [{
            name: "Cloud Connect Portal",
            company: "FX Global, Inc.",
            img: "assets/img/cloud-connect_square.png",
            description: " Served as principal developer for web application built with Angular and Angular Material. Helped develop serverless architecture for web application using the AWS Javascript SDK, AWS DynamoDB, AWS API Gateway, AWS IoT, and AWS Lambdas.",
            link: 'app.main.projects-cloud-connect'
        },
        // {
        //     name: "HTML String Extraction",
        //     company: "NAVEX Global",
        //     img: "",
        //     description: "",
        //     link: ""
        // },
        {
            name: "EthicsPoint",
            company: "NAVEX Global",
            img: "assets/img/navex_square.png",
            description: "Created web intake sites for online reports using jQuery, HTML, Javascript, and CSS with a strong focus on cross-browser compatibility.",
            link: 'app.main.projects-ethicspoint'
        },
        {
            name: "PATS",
            company: "Axis Clinical Software",
            img: "assets/img/axis_square.png",
            description: "Worked on development of new web-based application using AngularJS on the front-end, Node.js on the back-end, and EWD.js to interface with a Cache database.",
            link: 'app.main.projects-pats'
        }
    ];

    return vm;
});