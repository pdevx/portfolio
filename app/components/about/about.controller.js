var aboutController = angular.module('about.controller', []);

aboutController.controller('aboutController', function () {
    var vm = {};

    vm.links= [
        "www.linkedin.com/in/jameskaeohester",
        "https://github.com/pdevx"
    ];

    return vm;
});
