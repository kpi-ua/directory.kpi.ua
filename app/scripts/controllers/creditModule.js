'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:CreditmoduleCtrl
 * @description
 * # CreditmoduleCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('CreditModuleCtrl', function ($scope, $route, $location, api) {

    $scope.creditModule = {};

    $scope.loading = true;
    $scope.cathedraTitle = '';
    $scope.cathedraName = '';
    $scope.facultyTitle = '';
    $scope.facultyName = '';
    $scope.specialityTitle = {};
    $scope.specialityCode = {};
    $scope.disciplineTitle = {};
    $scope.disciplineId = {};

  });
