'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:CurriculumLanguageCtrl
 * @description
 * # CurriculumLanguageCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('CurriculumLanguageCtrl', function ($scope, $route, $location, api) {

    $scope.loading = true;
    $scope.curriculum = {};
    $scope.language = '';
    $scope.curriculumUrl = '';

    reload();

    function reload() {

      var id = $route.current.params.id;

      $scope.language = $route.current.params.language;
      $scope.curriculumUrl = '/#/curriculum' + id;

      api.getCurriculumLocalization(id, $scope.language).then(function (response) {
        $scope.curriculum = response;
        $scope.loading = false;
      });


    }

  });
