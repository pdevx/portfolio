angular.module("translations", ['pascalprecht.translate']).config(["$translateProvider", function($translateProvider) {
$translateProvider.translations("en", {
  "ABOUT": "About",
  "ABOUT_ABOUT_ME": "About Me",
  "ABOUT_LINKS": "Links",
  "ABOUT_SKILLS": "Skills",
  "ABOUT_TEXT": "I'm determined Software Developer with an aptitude for problem solving, a passion for technology, and the tenacity to overcome challenges. I have experience building web applications using Angular, Node, AWS, HTML, Javascript and CSS.",
  "CONTACT": "Contact",
  "EXPERIENCE": "Experience",
  "LINKS": "Links",
  "MUSIC": "Music",
  "PROJECTS": "Projects",
  "YOUTUBE": "Youtube",
  "YOUTUBE_ABOUT": "PDEVX is my YouTube channel where I make videos about technology including drones, phones, cameras, video games, software and apps, etc."
});
}]);