'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:DisciplineCtrl
 * @description
 * # DisciplineCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('DisciplineCtrl', function ($scope, $route, $location, api) {

    $scope.discipline = {};

    $scope.loading = true;
    $scope.cathedraTitle = '';
    $scope.cathedraName = '';
    $scope.facultyTitle = '';
    $scope.facultyName = '';
    $scope.specialityTitle = '';
    $scope.specialityCode = '';

    reload();

    function reload() {

      var id = !!$route.current.params.discipline ? $route.current.params.discipline : '';
      $scope.specialityCode = !!$route.current.params.speciality ? $route.current.params.speciality : '';
      $scope.facultyName = !!$route.current.params.faculty ? $route.current.params.faculty : '';
      $scope.cathedraName = !!$route.current.params.cathedra ? $route.current.params.cathedra : '';

      $scope.specialityUrl = '/#/' + $scope.facultyName + '/' + $scope.cathedraName + '/' + $scope.specialityCode;
      $scope.cathedraUrl = '/#/' + $scope.facultyName + '/' + $scope.cathedraName;
      $scope.facultyUrl = '/#/' + $scope.facultyName;

      api.getCathedra($scope.cathedraName).then(function (cathedra) {
        $scope.cathedraTitle = cathedra.Title;
        $scope.facultyTitle = cathedra.FacultyTitle;

        $scope.$apply();
      });

      api.getSpeciality($scope.specialityCode).then(function (speciality) {
        $scope.specialityTitle = speciality.Title;
        $scope.specialityCode = speciality.Code;
      });

      api.getDiscipline(id, $scope.cathedraName).then(function (discipline) {

        $scope.discipline =
        {
          title: discipline.Title,
          name: discipline.Name,
          code: discipline.Code
        };


        $scope.creditModules = discipline.CreditModules.map(function (o) {
          return {
            url: '/' + $scope.facultyName + '/' + $scope.cathedraName + '/' + $scope.specialityCode + '/' + discipline.Id + '/' + o.Id,
            title: o.Title,
            description: o.Description
          };

        });

        $scope.loading = false;
        $scope.$apply();

      });
    }

  });
