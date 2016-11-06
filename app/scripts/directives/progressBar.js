'use strict';

/**
 * @ngdoc directive
 * @name directoryApp.directive:progressBar
 * @description
 * # progressBar
 */
angular.module('directoryApp')
  .directive('progressBar', function () {
    return {
      template: '\
      <div class="progress">\
        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">\
        </div>\
      </div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


      }
    };
  });
