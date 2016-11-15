'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:KindCtrl
 * @description
 * # KindCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('KindCtrl', function ($scope, $route, $location, api) {

    $scope.kind = {};

    $scope.loading = true;
    $scope.cathedraTitle = '';
    $scope.cathedraName = '';
    $scope.facultyTitle = '';
    $scope.facultyName = '';
    $scope.specialityTitle = '';
    $scope.specialityCode = '';
    $scope.disciplineTitle = '';
    $scope.disciplineId = '';
    $scope.creditModuleTitle = '';
    $scope.creditModuleId = '';

    reload();

    function reload() {

      var id = !!$route.current.params.kind ? $route.current.params.kind : '';
      $scope.creditModuleId = !!$route.current.params.creditModule ? $route.current.params.creditModule : '';
      $scope.disciplineId = !!$route.current.params.discipline ? $route.current.params.discipline : '';
      $scope.specialityCode = !!$route.current.params.speciality ? $route.current.params.speciality : '';
      $scope.facultyName = !!$route.current.params.faculty ? $route.current.params.faculty : '';
      $scope.cathedraName = !!$route.current.params.cathedra ? $route.current.params.cathedra : '';

      $scope.creditModuleUrl = '/#/' + $scope.facultyName + '/' + $scope.cathedraName + '/' + $scope.specialityCode + '/' + $scope.disciplineId + '/' + $scope.creditModule;
      $scope.disciplineUrl = '/#/' + $scope.facultyName + '/' + $scope.cathedraName + '/' + $scope.specialityCode + '/' + $scope.disciplineId;
      $scope.specialityUrl = '/#/' + $scope.facultyName + '/' + $scope.cathedraName + '/' + $scope.specialityCode;
      $scope.cathedraUrl = '/#/' + $scope.facultyName + '/' + $scope.cathedraName;
      $scope.facultyUrl = '/#/' + $scope.facultyName;

      api.getCathedra($scope.cathedraName).then(function (cathedra) {
        $scope.cathedraTitle = cathedra.Title;
        $scope.facultyTitle = cathedra.FacultyTitle;
      });

      api.getSpeciality($scope.specialityCode).then(function (speciality) {
        $scope.specialityTitle = speciality.Title;
        $scope.specialityCode = speciality.Code;
      });

      api.getDiscipline($scope.disciplineId, $scope.cathedraName).then(function (discipline) {
        $scope.disciplineTitle = discipline.Title;
      });

      api.getCreditModule($scope.creditModuleId, $scope.cathedraName).then(function (creditModule) {
        $scope.creditModuleTitle = creditModule.Title;
      });

      api.getKind(id, $scope.creditModuleId).then(function (kind) {

        $scope.kind =
        {
          title: kind.Title,
          name: kind.Name,
          description: kind.Description,
        };


        $scope.eirs = kind.Items.map(function (o) {
          return {
            url: '/curriculum/' + o.IrId,
            title: o.Title,
            description: o.Description,
            irName: o.IrName,
            annotation: o.Annotation,
            stamp: o.Stamp,
          };

        });

        $scope.loading = false;
      });
    }

  });
