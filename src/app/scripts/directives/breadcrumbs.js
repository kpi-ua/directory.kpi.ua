'use strict';

/**
 * @ngdoc directive
 * @name directoryApp.directive:breadcrumbs
 * @description
 * # breadcrumbs
 */
angular.module('directoryApp')
  .directive('breadcrumbs', function () {
    return {
      templateUrl: 'views/breadcrumbs.html',
      restrict: 'E',
      transclude: true,
      link: function postLink(scope, element, attrs) {

      }
    };
  });
