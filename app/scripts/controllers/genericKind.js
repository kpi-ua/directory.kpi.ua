'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:GenericUniversityCtrl
 * @description
 * # GenericCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('GenericKindCtrl', function ($scope, $route, $location, api) {

    $scope.curriculums = [];
    $scope.kind = {};
    $scope.kindId = null;
    $scope.subdivision = '';
    $scope.pagination = {};
    $scope.loading = true;

    reload();

    function reload() {

      $scope.kindId = !!$route.current.params.kind ? $route.current.params.kind : '';
      $scope.subdivision = !!$route.current.params.subdivision ? $route.current.params.subdivision : '';
      $scope.page = !!$route.current.params.page ? $route.current.params.page : '';

      api.getKind($scope.kindId, null).then(function (kind) {
        $scope.kind =
        {
          title: kind.Title,
          name: kind.Name,
          description: kind.Description
        };
      });

      var page = !!$route.current.params.page ? $route.current.params.page : 1;

      load(page);
    }

    function load(page) {
      $scope.loading = true;

      api.getGenericCurriculums($scope.kindId, $scope.subdivision, page).then(function (result) {

        $scope.pagination = result.pagination;

        $scope.curriculums = result.items.map(function (o) {
          return {
            url: '/curriculum/' + o.IrId,
            title: o.Title,
            description: o.Description,
            irName: o.IrName,
            annotation: o.Annotation,
            stamp: o.Stamp
          };

        });

        $scope.loading = false;
      });
    }

    $scope.$watch('pagination.currentPage', function (newValue, oldValue) {

      if (newValue != oldValue && !!newValue && !!oldValue) {
        $location.url = '/generic/' + $scope.subdivision + '/' + $scope.kindId + '/' + $scope.pagination.currentPage;
        $scope.pagination.currentPage = newValue;
        load($scope.pagination.currentPage);
      }
    });


  });
