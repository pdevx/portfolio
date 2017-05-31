var projectsCloudConnectController = angular.module('projects.cloud-connect.controller', []);

projectsCloudConnectController.controller('projectsCloudConnectController', function($state) {
    var vm = {};

    vm.back = function() {
        $state.go('app.main.projects');
    };

    vm.cloudConnectData = {
        name: "Cloud Connect Portal",
        company: "FX Global, Inc.",
        img: "assets/img/cloud-connect_square.png",
        description: " Served as principal developer for web application built with Angular and Angular Material. Helped develop serverless architecture for web application using the AWS Javascript SDK, AWS DynamoDB, AWS API Gateway, AWS IoT, and AWS Lambdas.",
        features: [{
                title: "Printer From Dashboard",
                img: "assets/img/cloudconnect_dashboard.png",
                description: ""
            },
            {
                title: "Device Management",
                img: "assets/img/cloudconnect_devices.png",
                description: ""
            },
            {
                title: "Print Without Drivers",
                img: "assets/img/cloudconnect_print.png",
                description: ""
            },
            {
                title: "Scan Without Drivers",
                img: "assets/img/cloudconnect_scan.png",
                description: ""
            },
            {
                title: "Cognito User Authentication",
                img: "assets/img/cloudconnect_login.gif",
                description: ""
            },
            {
                title: "Angular + Material Design",
                img: "assets/img/cloudconnect_material.gif",
                description: ""
            },
            {
                title: "User Management",
                img: "assets/img/cloudconnect_users.gif",
                description: ""
            },
            {
                title: "DynamoDB For Data",
                img: "assets/img/cloudconnect_user_profile.gif",
                description: ""
            },
            {
                title: "Device Registration",
                img: "assets/img/cloudconnect_device_register.gif",
                description: ""
            }
        ]
    };

    return vm;
});