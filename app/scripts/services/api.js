'use strict';

/**
 * @ngdoc service
 * @name directoryApp.api
 * @description
 * # api
 * Service in the directoryApp.
 */
angular.module('directoryApp')
  .service('api', function ($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    /**
     * Set API endpoint
     */
    this.setApiEndpoint = function (url) {
      Campus.setApiEndpoint(url);
    };

    /**
     * Get API endpoint
     */
    this.getApiEndpoint = function () {
      return Campus.getApiEndpoint();
    };

    /**
     * Get faculties list
     */
    this.getFaculties = function () {
      return Campus.execute('GET', 'Directory/GetFaculties').then(function (response) {
        return response.Data;
      });
    };

    /**
     *
     */
    this.getGenerycTypes = function () {
      return Campus.execute('GET', 'Directory/GetGenericKinds?subdivisionName=').then(function (response) {
        return response.Data;
      });
    };

  });
