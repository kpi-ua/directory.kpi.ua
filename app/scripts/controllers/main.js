'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('MainCtrl', function ($scope, api) {

    $scope.faculties = [];
    $scope.loading = true;

    reload();

    function reload() {

      api.getFaculties().then(function (response) {

        $scope.faculties = response.map(function (o) {
          return {
            url: '/' + o.Name,
            title: o.Title,
            description: o.Description
          };

        });

        $scope.loading = false;
      });

    }
  });
