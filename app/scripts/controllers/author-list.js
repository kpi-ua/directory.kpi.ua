'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:AuthorListCtrl
 * @description
 * # AuthorListCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('AuthorListCtrl', function ($scope, $route, api) {

    $scope.authors = [];
    $scope.currentPage = 1;
    $scope.maxSize = 100;
    $scope.totalItems = 1000;
    $scope.totalPages = 20;

    reload();

    function reload() {

      var page = 1;

      api.getAuthors(page).then(function (response) {


        $scope.authors = response.Data.map(function (o) {

          var delimiter = (!!o.AcademicDegree || !!o.Status) ? '–' : null;

          return {
            url: '/author/' + o.UserIdentifier,
            name: o.FullName,
            description: toString(delimiter) + ' ' + toString(o.AcademicDegree) + ' ' + toString(o.Status)
          };

        });

        $scope.$apply();

      });

    }

    function toString(obj) {
      return !!obj ? obj.toString() : '';
    }

  });
