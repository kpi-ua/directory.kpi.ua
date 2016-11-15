'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:AuthorCtrl
 * @description
 * # AuthorCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('AuthorCtrl', function () {
<<<<<<< HEAD

    $scope.eirs = [];
    $scope.author = {};

    reload();

    function reload() {

      var uid = $route.current.params.uid;

      api.getAuthor(uid).then(function (author) {

        if (!!author) {
          $scope.author = {
            scientificInterest: author.ScientificInterest,
            status: author.Status,

          };
        }

        $scope.loading = false;
      });
    }
=======
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
>>>>>>> kpi-ua/master
  });
