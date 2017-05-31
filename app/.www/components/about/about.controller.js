var aboutController = angular.module('about.controller', []);

aboutController.controller('aboutController', function() {
    var vm = {};

    vm.bio = {
        "Name": "James Kaeo Hester",
        "Location": "Beaverton, Oregon",
        "Profession": "Web Application Developer"
    };

    vm.links = [
        "https://www.linkedin.com/in/jameskaeohester",
        "https://github.com/pdevx"
    ];

    vm.skills = [
        "Angular", "Angular Material", "Node", "Grunt", "Gulp", "Sass", "Pug", "HTML", "Javascript", "CSS", "Jasmine", "Karma", "Mocha", "Protractor", "OAuth", "Cordova", "Electron", "REST", "AWS Cognito", "AWS Dynamodb", "AWS Lambda", "AWS API Gateway", "AWS IoT", "SCRUM", "JIRA", ".NET", "C#"
    ];

    return vm;
});