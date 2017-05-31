var menuController = angular.module('menu.controller', []);

menuController.controller('menuController', function($mdMedia, $mdSidenav) {
    var vm = this;

    vm.$mdMedia = $mdMedia;

    vm.menu = [{
            link: '#!/app/about',
            title: "ABOUT",
            icon: 'info_outlineskill'
        },
        {
            link: '#!/app/contact',
            title: "CONTACT",
            icon: 'chat'
        },
        {
            link: '#!/app/experience',
            title: "EXPERIENCE",
            icon: 'business'
        },
        {
            link: '#!/app/projects',
            title: "PROJECTS",
            icon: 'code'
        },
        {
            link: '#!/app/music',
            title: "MUSIC",
            icon: 'music_note'
        },
        {
            link: '#!/app/youtube',
            title: "YOUTUBE",
            icon: 'tv'
        },
    ];

    vm.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };

    return vm;
});