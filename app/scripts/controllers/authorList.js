'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:AuthorListCtrl
 * @description
 * # AuthorListCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('AuthorListCtrl', function ($scope, $route, $location, api) {

    $scope.authors = [];
    $scope.pagination = {};
    $scope.loading = true;

    reload();

    function reload() {

      var page = !!$route.current.params.page ? $route.current.params.page : 1;

      load(page);
    }

    /**
     * Load author list
     * @param page
     */
    function load(page) {

      $scope.loading = true;
      $scope.authors = [];

      api.getAuthors(page).then(function (response) {

        $scope.pagination = response.pagination;
        $scope.authors = response.items.map(function (o) {

          var delimiter = (!!o.AcademicDegree || !!o.Status) ? '–' : null;

          return {
<<<<<<< HEAD
            url: '/#/author/' + o.UserIdentifier,
=======
            url: '/author/' + o.UserIdentifier,
>>>>>>> kpi-ua/master
            name: o.FullName,
            description: toString(delimiter) + ' ' + toString(o.AcademicDegree) + ' ' + toString(o.Status)
          };

        });

        $scope.loading = false;
<<<<<<< HEAD
=======
        $scope.$apply();

>>>>>>> kpi-ua/master
      });
    }

    function toString(obj) {
      return !!obj ? obj.toString() : '';
    }

    $scope.$watch('pagination.currentPage', function (newValue, oldValue) {

      if (newValue != oldValue && !!newValue && !!oldValue) {

        $location.url = '/author/list/' + $scope.pagination.currentPage;

        $scope.pagination.currentPage = newValue;
        load($scope.pagination.currentPage);
      }
    });

  });
