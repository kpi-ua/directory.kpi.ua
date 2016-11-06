'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:CreditmoduleCtrl
 * @description
 * # CreditmoduleCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('CreditModuleCtrl', function ($scope, $route, $location, api) {

      $scope.creditModule = {};

      $scope.loading = true;
      $scope.cathedraTitle = '';
      $scope.cathedraName = '';
      $scope.facultyTitle = '';
      $scope.facultyName = '';
      $scope.specialityTitle = '';
      $scope.specialityCode = '';
      $scope.disciplineTitle = '';
      $scope.disciplineId = '';

      reload();

      function reload() {

        var id = !!$route.current.params.creditModule ? $route.current.params.creditModule : '';
        $scope.disciplineId = !!$route.current.params.discipline ? $route.current.params.discipline : '';
        $scope.specialityCode = !!$route.current.params.speciality ? $route.current.params.speciality : '';
        $scope.facultyName = !!$route.current.params.faculty ? $route.current.params.faculty : '';
        $scope.cathedraName = !!$route.current.params.cathedra ? $route.current.params.cathedra : '';

        $scope.disciplineUrl = '/#/' + $scope.facultyName + '/' + $scope.cathedraName + '/' + $scope.specialityCode + '/' + $scope.disciplineId;
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

        // api.getDiscipline($scope.specialityCode).then(function (speciality) {
        //   $scope.specialityTitle = speciality.Title;
        //   $scope.specialityCode = speciality.Code;
        // });

        api.getCreditModule(id, $scope.cathedraName).then(function (creditModule) {

          $scope.creditModule =
          {
            title: creditModule.Title,
            name: creditModule.Name,
            code: creditModule.Code
          };


          $scope.kinds = creditModule.Kinds.map(function (o) {
            return {
              url: '/' + $scope.facultyName + '/' + $scope.cathedraName + '/' + $scope.specialityCode + '/' + $scope.disciplineId + '/' + creditModule.Id + '/' + o.Id,
              title: o.Title,
              description: o.Description
            };

          });

          $scope.loading = false;
          $scope.$apply();

        });

      }

    }
  );
