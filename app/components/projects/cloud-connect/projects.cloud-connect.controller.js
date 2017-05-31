var projectsCloudConnectController = angular.module('projects.cloud-connect.controller', []);

projectsCloudConnectController.controller('projectsCloudConnectController', function ($state) {
    var vm = {};

    vm.back = function () {
        $state.go('app.main.projects');
    };

    vm.cloudConnectData = {
        name: "Cloud Connect Portal",
        company: "FX Global, Inc.",
        img: "assets/img/cloud-connect_square.png",
        description: " Served as principal developer for web application built with Angular and Angular Material. Helped develop serverless architecture for web application using the AWS Javascript SDK, AWS DynamoDB, AWS API Gateway, AWS IoT, and AWS Lambdas.",
        features: [
            // {
            //     title: "",
            //     image: "",
            //     description: ""
            // }
        ]
    };

    return vm;
});
