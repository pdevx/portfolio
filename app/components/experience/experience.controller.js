var experienceController = angular.module('experience.controller', []);

experienceController.controller('experienceController', function () {
    var vm = {};

    vm.jobs = [
        {
            company: "FX Global, Inc.",
            location: "Tualatin, OR",
            position: "Web Application Developer",
            dates: "JUNE 2016 – PRESENT",
            duties:[
                "Working on product development for print solutions in a mostly Agile environment.",
                "Served as principal developer for web application built with Angular and Angular Material.  Helped develop serverless architecture for web application using the AWS Javascript SDK, AWS DynamoDB, AWS API Gateway, AWS IoT, and AWS Lambdas.",
                "Developed multi-platform build system using Gulp, Angular, Cordova, and Electron for rapid development and creation of web, mobile, and desktop applications.",
                "Implemented user sign-up, sign-in, and data synchronization with applications using AWS Cognito and AWS DynamoDB.",
                "Added Dropbox, Google Drive, Box, and OneDrive integration to application for file browsing/saving using OAuth and REST APIs."
            ]
        },
        {
            company: "NAVEX Global",
            location: "Lake Oswego, OR",
            position: "Web Developer",
            dates: "JUNE 2015 – JUNE 2016",
            duties:[
                "Created web intake sites for online reports using jQuery, HTML, Javascript, and CSS with a strong focus on cross-browser compatibility.",
                "Worked on automated tool for extracting text and contextual inline HTML tags from static HTML, Javascript, and CSS files using an API built on an Express server.",
                "Set up user authentication using Passwordless.",
                "Implemented SCRUM and Agile development with team for working on additional projects outside normal case work. Acted as SCRUM master.",
                "Built tools for scraping data from internal web applications."
            ]
        },
        {
            company: "Axis Clinical Software",
            location: "Portland, OR",
            position: "Junior Software Engineer",
            dates: "SEPTEMBER 2014 – JUNE 2015",
            duties:[
                "Worked on Agile team developing Axis’ Patient Analysis & Tracking System using a variety of technologies.",
                "Responsible for build process across entire application suite utilizing Grunt, including front-end unit testing of AngularJS code using Karma and Jasmine.",
                "Worked on development of new web-based application using AngularJS on the front-end, Node.js on the back-end, and EWD.js to interface with a Cache database.",
                "Created reporting tools for flagship application using .NET, C#, VB, and MUMPS."
            ]
        },
        {
            company: "The Tech Academy",
            location: "Portland, OR",
            position: "Software Development Student",
            dates: "JUNE 2014 – SEPTEMBER 2014",
            duties:[
                "Learned the fundamentals of software development through The Tech Academy’s Software Developer Boot Camp.",
                "Created websites using HTML, CSS and JavaScript to demonstrate knowledge of web technologies. ",
                "Studied .NET framework, including basic syntax of C# language. Obtained Microsoft Technology Associate Software Development Fundamentals certification"
            ]
        }
    ];

    return vm;
});
