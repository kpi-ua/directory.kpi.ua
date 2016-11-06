'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:CurriculumCtrl
 * @description
 * # CurriculumCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('CurriculumCtrl', function ($scope, $route, $location, api) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
