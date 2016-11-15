'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:GenericUniversityCtrl
 * @description
 * # GenericCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('GenericUniversityCtrl', function ($scope, api) {

    $scope.types = [];
    $scope.loading = true;

    reload();

    function reload() {

      api.getGenerycTypes().then(function (response) {

        $scope.types = response.map(function (o) {
          return {
            url: '/' + o.Id + '/1',
            title: o.Title
          };

        });

        $scope.loading = false;
        $scope.$apply();

      });

    }

  });
/**
 * Created by andrew on 11/4/16.
 */
