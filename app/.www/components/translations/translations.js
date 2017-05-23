angular.module("translations", ['pascalprecht.translate']).config(["$translateProvider", function($translateProvider) {
$translateProvider.translations("en", {
  "ABOUT": "About",
  "ABOUT_TEXT": "Determined Software Developer with an aptitude for problem solving, a passion for technology, and the tenacity to overcome challenges. Experience building web applications using Angular, Node, AWS, HTML, Javascript and CSS.",
  "CONTACT": "Contact",
  "EXAMPLES": "Examples",
  "EXPERIENCE": "Experience",
  "LINKS": "Links",
  "MUSIC": "Music",
  "YOUTUBE": "Youtube",
  "YOUTUBE_ABOUT": "PDEVX is my YouTube channel where I make videos about technology including drones, phones, cameras, video games, software and apps, etc."
});
}]);
