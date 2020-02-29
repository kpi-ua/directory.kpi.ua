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

    $scope.loading = true;
    $scope.curriculum = {};
    $scope.files = [];
    $scope.languages = [];

    reload();

    function reload() {

      var id = $route.current.params.id;

      api.getCurriculum(id).then(function (response) {

        $scope.curriculum = response;
        $scope.loading = false;
      });

      api.getCurriculumFiles(id).then(function (response) {
        $scope.files = response;
      });

      api.getCurriculumLanguages(id).then(function (response) {
        $scope.languages = response.map(function (o) {
          return {
            code: o.code,
            url: '/curriculum/' + id + '/' + o.name
          }
        });
      });
    }

  });
