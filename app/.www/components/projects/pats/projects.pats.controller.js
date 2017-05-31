var projectsPatsController = angular.module('projects.pats.controller', []);

projectsPatsController.controller('projectsPatsController', function($state) {
    var vm = {};

    vm.back = function() {
        $state.go('app.main.projects');
    };

    vm.patsData = {
        name: "PATS",
        company: "Axis Clinical Software",
        img: "assets/img/axis_square.png",
        description: "Worked on development of new web-based application using AngularJS on the front-end, Node.js on the back-end, and EWD.js to interface with a Cache database.",
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