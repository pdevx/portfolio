var projectsController = angular.module('projects.controller', []);

projectsController.controller('projectsController', function () {
    var vm = {};

    vm.jobs = [
        {
            company: "FX Global, Inc.",
            img: "assets/img/fx_logo.gif",
            location: "Tualatin, OR",
            position: "Web Application Developer",
            dates: "JUNE 2016 – PRESENT",
            duties: [
                "Working on product development for print solutions in a mostly Agile environment.",
                "Served as principal developer for web application built with Angular and Angular Material.  Helped develop serverless architecture for web application using the AWS Javascript SDK, AWS DynamoDB, AWS API Gateway, AWS IoT, and AWS Lambdas.",
                "Developed multi-platform build system using Gulp, Angular, Cordova, and Electron for rapid development and creation of web, mobile, and desktop applications.",
                "Implemented user sign-up, sign-in, and data synchronization with applications using AWS Cognito and AWS DynamoDB.",
                "Added Dropbox, Google Drive, Box, and OneDrive integration to application for file browsing/saving using OAuth and REST APIs."
            ]
        }
    ];

    return vm;
});
