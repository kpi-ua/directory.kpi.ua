'use strict';

/**
 * @ngdoc service
 * @name directoryApp.api
 * @description
 * # api
 * Service in the directoryApp.
 */
angular.module('directoryApp')
  .service('api', function (campus) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    /**
     * Set API endpoint
     */
    this.setApiEndpoint = function (url) {
      campus.setApiEndpoint(url);
    };

    /**
     * Get API endpoint
     */
    this.getApiEndpoint = function () {
      return campus.getApiEndpoint();
    };

    /**
     * Get faculties list
     */
    this.getFaculties = function () {
      return campus.execute('GET', 'Directory/GetFaculties').then(function (response) {
        return response.Data;
      });
    };

    /**
     * Get authors list
     */
    this.getAuthors = function (page) {

      var size = 25;

      return campus.execute('GET', 'Directory/GetAuthors?page=' + page + '&size=' + size).then(function (response) {

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
     * Get faculty information
     */
    this.getFaculty = function (name) {
      var url = 'Directory/GetFaculty?name=' + name + '&light=false';
      return campus.execute('GET', url).then(function (response) {
        return response.Data;
      });
    };

    /**
     * Get faculty information
     */
    this.getCathedra = function (name) {
      var url = 'Directory/GetCathedra?name=' + name + '&light=false';
      return campus.execute('GET', url).then(function (response) {
        return response.Data;
      });
    };

    /**
     * Get speciality information
     */
    this.getSpeciality = function (name) {
      var url = 'Directory/GetSpeciality?name=' + name + '&light=false';
      return campus.execute('GET', url).then(function (response) {
        return response.Data;
      });
    };

    /**
     * Get discipline information
     */
    this.getDiscipline = function (id, cathedra) {
      var url = 'Directory/GetDiscipline?id=' + id + '&cathedra=' + cathedra + '&light=false';
      return campus.execute('GET', url).then(function (response) {
        return response.Data;
      });
    };

    /**
     * Get credit module information
     */
    this.getCreditModule = function (id, subdivision) {
      var url = 'Directory/GetCreditModule?id=' + id + '&subdivision=' + subdivision + '&light=false';
      return campus.execute('GET', url).then(function (response) {
        return response.Data;
      });
    };

    /**
     * Get kind information
     */
    this.getKind = function (id, creditModuleId) {
      var url = 'Directory/GetKind?id=' + id + '&creditModuleId=' + creditModuleId + '&light=false';
      return campus.execute('GET', url).then(function (response) {
        return response.Data;
      });
    };

    /**
     *
     */
    this.getGenerycTypes = function () {
      return campus.execute('GET', 'Directory/GetGenericKinds?subdivisionName=').then(function (response) {
        return response.Data;
      });
    };

  });
