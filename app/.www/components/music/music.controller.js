var musicController = angular.module('music.controller', []);

musicController.controller('musicController', function() {
    var vm = {};

    vm.youtubeVideos = [{
            title: "Intro",
            url: "https://www.youtube.com/embed/1KrIGHGzx4c"
        },
        {
            title: "Portraits",
            url: "https://www.youtube.com/embed/xCHWLouEcJU"
        },
        {
            title: "First Blood",
            url: "https://www.youtube.com/embed/4Mr5xBnsWs4"
        },
        {
            title: "The Calm",
            url: "https://www.youtube.com/embed/FxES9pUJKl0"
        },
        {
            title: "The Storm",
            url: "https://www.youtube.com/embed/XhxLTj7DBZI"
        },
        {
            title: "Chemical Waves",
            url: "https://www.youtube.com/embed/_nlc-dE6A0U"
        },
        {
            title: "Unmasked",
            url: "https://www.youtube.com/embed/fyVAWIwRlf8"
        }
    ];

    return vm;
});