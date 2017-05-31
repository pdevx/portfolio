var projectsEthicsPointController = angular.module('projects.ethicspoint.controller', []);

projectsEthicsPointController.controller('projectsEthicsPointController', function ($state, $window) {
    var vm = {};

    vm.back = function () {
        $state.go('app.main.projects');
    };

    vm.redirect = function(target){
        $window.open(target, '_blank');
    };

    vm.ethicsPointData = {
        name: "EthicsPoint",
        company: "NAVEX Global",
        img: "assets/img/navex_square.png",
        description: "Created web intake sites for online reports using jQuery, HTML, Javascript, and CSS with a strong focus on cross-browser compatibility. Used provided assets and assets from existing sites to try to recreate look and feel of customer's brand. Took input through account manager to make adjustments according to customer's wants and needs. NOTE: Please don't submit reports through the intake sites. Thanks!",
        features: [
            {
                title: "BP",
                img: "assets/img/ethicspoint_bp.png",
                description: "Bright and colorful site with a multi-step intake process. Several pages compared to other intake sites.",
                link: "https://secure.ethicspoint.com/domain/media/en/gui/41794/"
            },
            {
                title: "American Express",
                img: "assets/img/ethicspoint_amex.png",
                description: "Needed a FAQ page that would work in older versions of Internet Explorer.",
                link: "https://secure.ethicspoint.com/domain/media/en/gui/41310/"
            },
            {
                title: "Bupa",
                img: "assets/img/ethicspoint_bupa.png",
                description: "Customer wanted similar layout to BP while maintaining their own style.",
                link: "https://secure.ethicspoint.eu/domain/media/en/gui/102918/"
            },
            {
                title: "Enel",
                img: "assets/img/ethicspoint_enel.png",
                description: "Hand-traced map for hover selection of reporting intake location using jQuery.",
                link: "https://secure.ethicspoint.eu/domain/media/en/gui/102504/"
            },
            {
                title: "MGM China",
                img: "assets/img/ethicspoint_mgm.png",
                description: "Standard web intake site for EthicsPoint system.",
                link: "https://secure.ethicspoint.com/domain/media/en/gui/46070/"
            },
        ]
    };

    return vm;
});
