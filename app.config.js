angular.
  module('personalPage').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/cover-letter', {
          template: '<cover-letter></cover-letter>'
        }).
        when('/resume', {
          template: '<resume></resume>'
        }).
        when('/home', {
            template: '<home-page></home-page>'
        }).
        when('/contact-info', {
            template: '<contact-info></contact-info>'
        }).
        when('/about', {
            template: '<about></about>'
        }).
        otherwise('/home');
    }
  ]);