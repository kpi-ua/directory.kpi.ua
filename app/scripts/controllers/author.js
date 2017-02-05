'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:AuthorCtrl
 * @description
 * # AuthorCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('AuthorCtrl', function ($scope, $route, $location, api) {

    $scope.eirs = [];
    $scope.author = {};

    reload();

    function reload() {

      var uid = $route.current.params.uid;

      api.getAuthor(uid).then(function (author) {

        if (!!author) {
          $scope.author = {
            fullName: author.FullName,
            scientificInterest: author.ScientificInterest,
            status: author.Status,
            isConfirmed: author.IsConfirmed,
            url: 'https://intellect.kpi.ua/profile/' + uid
          };

          $scope.eirs = author.Items.map(function (o) {
            return {
              url: '/Curriculum/' + o.Ir.Id,
              name: o.Ir.Name,
              annotation: o.Annotation,
              stamp: o.Stamp
            };
          });
        }

        $scope.loading = false;
      });
    }
  });
