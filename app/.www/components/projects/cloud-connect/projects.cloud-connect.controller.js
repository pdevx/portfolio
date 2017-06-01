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
                title: "Print From Dashboard",
                img: "assets/img/cloudconnect_dashboard.png",
                description: "View available printers on your network and receive updated on status, toner levels, capabilities, etc."
            },
            {
                title: "Device Management",
                img: "assets/img/cloudconnect_devices.png",
                description: "Manage and interface with Cloud Connect devices through the app."
            },
            {
                title: "Print Without Drivers",
                img: "assets/img/cloudconnect_print.png",
                description: "Print without installing drivers. The Cloud Connect device does all the work for you."
            },
            {
                title: "Scan Without Drivers",
                img: "assets/img/cloudconnect_scan.png",
                description: "Scan from multi-function printers on your network and upload to cloud services like Dropbox, Google Drive, Box, and OneDrive."
            },
            {
                title: "Cognito User Authentication",
                img: "assets/img/cloudconnect_login.gif",
                description: "Implemented user sign-up, sign-in, and data synchronization with applications using AWS Cognito and AWS DynamoDB."
            },
            {
                title: "Angular + Material Design",
                img: "assets/img/cloudconnect_material.gif",
                description: "Using the Angular Material library to create UI elements that are responsive and beautiful."
            },
            {
                title: "User Management",
                img: "assets/img/cloudconnect_users.gif",
                description: "Admins can manage other user accounts and send invites to join the service."
            },
            {
                title: "DynamoDB For Data",
                img: "assets/img/cloudconnect_user_profile.gif",
                description: "Data is stored securely in DynamoDB, a fast and flexible NoSQL database service for applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models."
            },
            {
                title: "Device Registration",
                img: "assets/img/cloudconnect_device_register.gif",
                description: "Register your device through the app using the device registration wizard."
            }
        ]
    };

    return vm;
});