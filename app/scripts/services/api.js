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
     * Get authors list
     */
    this.getAuthors = function (page) {

      var size = 25;

      return Campus.execute('GET', 'Directory/GetAuthors?page=' + page + '&size=' + size).then(function (response) {

        var pagination = {
          currentPage: response.Paging.PageNumber,
          pageCount: 10,
          pageSize: response.Paging.PageSize,
          totalItemsCount: response.Paging.TotalItemCount
        };

        var items = response.Data;

        return {
          items: items,
          pagination: pagination
        };
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
