var angular = require('angular');

var pdevx = angular.module('pdevx', [require('angular-animate'), require('angular-cookies'), require('angular-material'), require('angular-material-icons'), require('angular-messages'), require('angular-storage'), require('angular-translate'), require('angular-ui-router'), 'pdevx.about', 'pdevx.contact', 'pdevx.projects', 'pdevx.experience', 'pdevx.main', 'pdevx.menu', 'pdevx.music', 'pdevx.youtube', 'templates', 'translations']);

pdevx.filter('capitalize', function () {
    return function (token) {
        return token.charAt(0).toUpperCase() + token.slice(1);
    };
});

pdevx.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

pdevx.config(["$translateProvider", function ($translateProvider) {
    $translateProvider.translations("developer", {});
}]);

pdevx.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.preferredLanguage('en');
}]);

pdevx.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('grey', {
            'default': '400', // by default use shade 400 from the grey palette for primary intentions
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('blue', {
            'default': '600' // use shade 200 for default, and keep all other shades the same
        });
    $mdThemingProvider.theme('dark', 'default')
        .dark();
    $mdThemingProvider.theme('buttons')
        .primaryPalette('blue', {
            'default': '500'
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('green', {
            'default': '500' // use shade 200 for default, and keep all other shades the same
        })
        .warnPalette('yellow', {
            'default': '500' // use shade 200 for default, and keep all other shades the same
        });
    $mdThemingProvider.theme('colors')
        .primaryPalette('purple', {
            'default': '300'
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('orange', {
            'default': '500' // use shade 200 for default, and keep all other shades the same
        })
        .warnPalette('pink', {
            'default': '500' // use shade 200 for default, and keep all other shades the same
        });
});

pdevx.config(function (storeProvider) {
    // could be localStorage or cookieStorage but we'll user sessionStorage
    storeProvider.setStore('localStorage');
});

pdevx.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            views: {
                'appContent': {
                    templateUrl: 'components/main/main.view.html',
                    controller: 'mainController as vm'
                }
            }
        })

        .state('app.main', {
            url: '/app',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'components/menu/menu.view.html',
                    controller: 'menuController as vm'
                }
            }
        })

        .state('app.main.about', {
            url: '/about',
            views: {
                'mainContent': {
                    templateUrl: 'components/about/about.view.html',
                    controller: 'aboutController as vm'
                }
            }
        })

        .state('app.main.contact', {
            url: '/contact',
            views: {
                'mainContent': {
                    templateUrl: 'components/contact/contact.view.html',
                    controller: 'contactController as vm'
                }
            }
        })

        .state('app.main.projects', {
            url: '/projects',
            views: {
                'mainContent': {
                    templateUrl: 'components/projects/projects.view.html',
                    controller: 'projectsController as vm'
                }
            }
        })

        .state('app.main.projects-cloud-connect', {
            url: '/projects/cloud-connect',
            views: {
                'mainContent': {
                    templateUrl: 'components/projects/cloud-connect/projects.cloud-connect.view.html',
                    controller: 'projectsCloudConnectController as vm'
                }
            }
        })

        .state('app.main.projects-ethicspoint', {
            url: '/projects/ethicspoint',
            views: {
                'mainContent': {
                    templateUrl: 'components/projects/ethicspoint/projects.ethicspoint.view.html',
                    controller: 'projectsEthicsPointController as vm'
                }
            }
        })

        .state('app.main.projects-pats', {
            url: '/projects/pats',
            views: {
                'mainContent': {
                    templateUrl: 'components/projects/pats/projects.pats.view.html',
                    controller: 'projectsPatsController as vm'
                }
            }
        })

        .state('app.main.experience', {
            url: '/experience',
            views: {
                'mainContent': {
                    templateUrl: 'components/experience/experience.view.html',
                    controller: 'experienceController as vm'
                }
            }
        })

        .state('app.main.music', {
            url: '/music',
            views: {
                'mainContent': {
                    templateUrl: 'components/music/music.view.html',
                    controller: 'musicController as vm'
                }
            }
        })

        .state('app.main.youtube', {
            url: '/youtube',
            views: {
                'mainContent': {
                    templateUrl: 'components/youtube/youtube.view.html',
                    controller: 'youtubeController as vm'
                }
            }
        });
        
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/about');
});
