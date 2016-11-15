'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:SpecialityCtrl
 * @description
 * # SpecialityCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('SpecialityCtrl', function ($scope, $route, $location, api) {

    $scope.speciality = {};

    $scope.loading = true;
    $scope.cathedraTitle = '';
    $scope.cathedraName = '';
    $scope.facultyTitle = '';
    $scope.facultyName = '';

    reload();

    function reload() {

      var code = !!$route.current.params.speciality ? $route.current.params.speciality : '';
      $scope.facultyName = !!$route.current.params.faculty ? $route.current.params.faculty : '';
      $scope.cathedraName = !!$route.current.params.cathedra ? $route.current.params.cathedra : '';

      $scope.cathedraUrl = '/#/' + $scope.facultyName + '/' + $scope.cathedraName;
      $scope.facultyUrl = '/#/' + $scope.facultyName;

      api.getCathedra($scope.cathedraName).then(function (cathedra) {
        $scope.cathedraTitle = cathedra.Title;
        $scope.facultyTitle = cathedra.FacultyTitle;
<<<<<<< HEAD
=======

        $scope.$apply();
>>>>>>> kpi-ua/master
      });

      api.getSpeciality(code).then(function (speciality) {

        $scope.speciality =
        {
          title: speciality.Title,
          name: speciality.Name,
          code: speciality.Code
        };


        $scope.disciplines = speciality.Disciplines.map(function (o) {
          return {
            url: '/' + $scope.facultyName + '/' + $scope.cathedraName + '/' + $scope.speciality.code + '/' + o.Id,
            title: o.Title,
            description: o.Description
          };

        });

        $scope.loading = false;
<<<<<<< HEAD
=======
        $scope.$apply();

>>>>>>> kpi-ua/master
      });
    }

  });
