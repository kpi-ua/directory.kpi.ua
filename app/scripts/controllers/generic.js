'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:UniversalKindCtrl
 * @description
 * # UniversalKindCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('GenericCtrl', function ($scope, $route, $location, api) {

    $scope.types = [];
    $scope.loading = true;

    $scope.title = '';
    $scope.description = '';

    $scope.subdivisionTitle = '';
    $scope.subdivisionDescription = '';

    reload();

    function reload() {

      var subdivisionType = $route.current.params.subdivisionType.toLowerCase();
      var subdivision = !!$route.current.params.subdivision ? $route.current.params.subdivision : 'university';


      if (subdivisionType == 'university') {
        $scope.title = 'Загальноуніверситетські ЕІР';
        $scope.description = 'Ресурси, що ґрунтується на ідеях і знаннях, нагромаджених у результаті науково-технічної діяльності для співробітників та студентів університету.';

        $scope.subdivisionTitle = '';
        $scope.subdivisionDescription = '';

      } else if (subdivisionType == 'cathedra') {

        $scope.title = 'ЕІР кафедри';
        $scope.description = 'Ресурси, що ґрунтується на ідеях і знаннях, нагромаджених у результаті науково-технічної діяльності для співробітників та студентів кафедри.';

        api.getCathedra(subdivision).then(function (cathedra) {
          $scope.subdivisionTitle = cathedra.Title;
          $scope.subdivisionDescription = cathedra.Description;
        });

      }
      else if (subdivisionType == 'faculty') {

        $scope.title = 'ЕІР Факультету/Інституту';
        $scope.description = 'Ресурси, що ґрунтується на ідеях і знаннях, нагромаджених у результаті науково-технічної діяльності для співробітників та студентів факультету/Інституту.';

        api.getFaculty(subdivision).then(function (faculty) {
          $scope.subdivisionTitle = faculty.Title;
          $scope.subdivisionDescription = faculty.Description;
        });
      }


      api.getGenerycTypes(subdivision).then(function (response) {

        $scope.types = response.map(function (o) {
          var url = '/generic/' + subdivision + '/' + o.Id + '/1';

          return {
            url: url,
            title: o.Title
          };

        });

        $scope.loading = false;
      });

    }

  });
