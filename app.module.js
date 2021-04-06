'use strict';


angular.module('personalPage', [
  // ...which depends on the `phoneList` module
  'ngRoute',
  'homePage',
  'coverLetter',
  'contactInfo',
  'resume',
  'about'
])
.directive('highlight', function () {      
 
  return {
  restrict : 'C',
      link: function(scope, element) {
          element.bind("click" , function(e){
               element.parent().find("a").removeClass("active");
               element.addClass("active");
          });     
      }
  }
});