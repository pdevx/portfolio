var youtubeController = angular.module('youtube.controller', []);

youtubeController.controller('youtubeController', function() {
    var vm = {};

    vm.youtubeVideos = [{
            title: "VLOG 001 - Drone Crash in the Snow",
            url: "https://www.youtube.com/embed/bNGsgUILY8Y"
        },
        {
            title: "VLOG 004 - Rewind, Drones at Work",
            url: "https://www.youtube.com/embed/nNC29YQX62U"
        },
        {
            title: "VLOG 008 - Landing on a Frozen Lake",
            url: "https://www.youtube.com/embed/ox0A4ntMFtM"
        },
        {
            title: "VLOG 009 - Heavy Snow",
            url: "https://www.youtube.com/embed/WJl7GK9FTlo"
        },
        {
            title: "Unboxing - Pokemon Go Plus",
            url: "https://www.youtube.com/embed/oXg9qXvgi2M"
        },
        {
            title: "Quick Flight - Yuneec Typhoon G on a Frozen Lake",
            url: "https://www.youtube.com/embed/Zz2x71651IU"
        },
        {
            title: "First Flight - Yuneec Typhoon G",
            url: "https://www.youtube.com/embed/2olW19Sv9cU"
        },
        {
            title: "Quick Flight - Drone In The Fog",
            url: "https://www.youtube.com/embed/J9eKYAushno"
        }
    ];

    return vm;
});