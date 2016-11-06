'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:KindCtrl
 * @description
 * # KindCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('KindCtrl', function ($scope, $route, $location, api) {

    $scope.kind = {};

    $scope.loading = true;
    $scope.cathedraTitle = '';
    $scope.cathedraName = '';
    $scope.facultyTitle = '';
    $scope.facultyName = '';
    $scope.specialityTitle = {};
    $scope.specialityCode = {};
    $scope.disciplineTitle = {};
    $scope.disciplineId = {};
    $scope.creditModuleTitle = {};
    $scope.creditModuleId = {};

  });
