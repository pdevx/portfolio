angular.module("translations", ['pascalprecht.translate']).config(["$translateProvider", function($translateProvider) {
$translateProvider.translations("en", {
  "ABOUT": "About",
  "CONTACT": "Contact",
  "EXAMPLES": "Examples",
  "EXPERIENCE": "Experience",
  "MUSIC": "Music",
  "YOUTUBE": "Youtube"
});
}]);
