'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:FacultyCtrl
 * @description
 * # FacultyCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('FacultyCtrl', function ($scope, $route, $location, api) {

    $scope.cathedras = [];
    $scope.loading = true;
    $scope.faculty = {};

    reload();

    function reload() {

      var name = !!$route.current.params.faculty ? $route.current.params.faculty : '';

      api.getFaculty(name).then(function (faculty) {

        $scope.faculty =
        {
          title: faculty.Title,
          name: faculty.Name,
          description: faculty.Description,
          content: faculty.Content,
          url: faculty.Url,
          logo: faculty.Logo
        };

        $scope.cathedras = faculty.Cathedras.map(function (o) {
          return {
            url: '/' + faculty.Name + '/' + o.Name,
            title: o.Title,
            description: o.Description
          };

        });

        $scope.loading = false;
        $scope.$apply();

      });
    }


  });
