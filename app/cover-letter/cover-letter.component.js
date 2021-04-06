'use strict';


angular.
  module('coverLetter').
  component('coverLetter', {
    templateUrl: 'cover-letter/cover-letter.template.html',
    controller: function CoverLetterController($scope) {
        $scope.date = 'April 1, 2021';
        $scope.genderIdentifier = 'genderIdentifier';
        $scope.hmFName = 'hmFName';
        $scope.hmLName = 'hmLName';
        $scope.hmTitle = 'hmTitle';
        $scope.orgName = 'orgName';
        $scope.orgAddress = 'orgAddress';
        $scope.orgCSZC = 'orgCSZC';
        $scope.relevantCoursework ='relevantCoursework';
        $scope.position = 'position';
        $scope.myInterest = 'myInterest';
    }
  });