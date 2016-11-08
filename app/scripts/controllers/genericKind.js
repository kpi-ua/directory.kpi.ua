'use strict';

/**
 * @ngdoc function
 * @name directoryApp.controller:GenericUniversityCtrl
 * @description
 * # GenericCtrl
 * Controller of the directoryApp
 */
angular.module('directoryApp')
  .controller('GenericKindCtrl', function ($scope, api) {


    $scope.kind = {};

    $scope.loading = true;

    reload();

    function reload() {

      var kindId = !!$route.current.params.kind ? $route.current.params.kind : '';
      var subdivision = !!$route.current.params.subdivision ? $route.current.params.subdivision : '';
      var page = !!$route.current.params.page ? $route.current.params.page : '';

      api.getGenericKinds(kindId, subdivision, page).then(function (kind) {

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
/**
 * Created by andrew on 11/4/16.
 */
