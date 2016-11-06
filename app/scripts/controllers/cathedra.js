'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:CathedraCtrl
 * @description
 * # CathedraCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('CathedraCtrl', function ($scope, $route, $location, api) {


    $scope.specialities = [];
    $scope.loading = true;
    $scope.cathedra = {};
    $scope.faculty = {};

    reload();

    function reload() {

      var name = !!$route.current.params.cathedra ? $route.current.params.cathedra : '';
      var facultyName = !!$route.current.params.faculty ? $route.current.params.faculty : '';

      api.getCathedra(name).then(function (cathedra) {

        $scope.cathedra =
        {
          title: cathedra.Title,
          name: cathedra.Name,
          description: cathedra.Description,
          content: cathedra.Content,
          url: cathedra.Url,
          logo: cathedra.Logo
        };

        $scope.facultyTitle = cathedra.FacultyTitle;

        $scope.specialities = cathedra.Specialities.map(function (o) {
          return {
            url: '/' + facultyName + '/' + cathedra.Name + '/' + o.Code,
            title: o.Title,
            description: o.Description,
            code: o.Code
          };

        });

        $scope.loading = false;
        $scope.$apply();

      });
    }

  });