var menuController = angular.module('menu.controller', []);

menuController.controller('menuController', function ($mdMedia, $mdSidenav) {
    var vm = this;

    vm.$mdMedia = $mdMedia;

    vm.menu = [
        {
            link: '#!/app/about',
            title: "ABOUT",
            icon: 'dashboard'
        },
        {
            link: '#!/app/contact',
            title: "CONTACT",
            icon: 'dashboard'
        },
        {
            link: '#!/app/examples',
            title: "EXAMPLES",
            icon: 'dashboard'
        },
        {
            link: '#!/app/experience',
            title: "EXPERIENCE",
            icon: 'dashboard'
        },
        {
            link: '#!/app/music',
            title: "MUSIC",
            icon: 'dashboard'
        },
        {
            link: '#!/app/youtube',
            title: "YOUTUBE",
            icon: 'dashboard'
        },
    ];

    vm.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
    
    return vm;
});
