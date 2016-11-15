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
      var url = 'Directory/GetGenericKinds?subdivisionName=';
      return campus.execute('GET', url).then(function (response) {
        return response.Data;
      });
    };

    /**
     *
     */
    this.getCurriculum = function (name) {
      var url = 'Directory/GetCurriculum?name=' + name;
      return campus.execute('GET', url).then(function (response) {
        return response.Data;
      });
    };

<<<<<<< HEAD
    /**
     *
     */
    this.getCurriculumLocalization = function (id, language) {
      var url = 'Directory/getCurriculumLocalization?id=' + id + '&language=' + language;
      return campus.execute('GET', url).then(function (response) {

        if (!!response && !!response.Data) {
          var o = response.Data;
          return {
            title: o.Title,
            annotation: o.Annotation,
            authors: o.Authors
          };
        }

        return null;
      });
    };

    /**
     *
     */
    this.getGenericCurriculums = function (kindId, subdivision, page) {
      var size = 25; //Default page size
      var url = 'Directory/GetGenericCurriculumList?kindId=' + kindId + '&subdivision=' + subdivision + '&page=' + page + '&size=' + size;
      return campus.execute('GET', url).then(function (response) {

        debugger;

        var pagination = {
          currentPage: response.Paging.PageNumber,
          pageCount: response.Paging.PageCount,
          pageSize: response.Paging.PageSize,
          totalItemsCount: response.Paging.TotalItemCount
        };

        // debugger;

        var items = response.Data;

        if (pagination.currentPage == 1 && items.length < pagination.pageSize) {
          pagination.pageCount = 1;
          pagination.totalItemsCount = items.length;
        }

        return {
          items: items,
          pagination: pagination
        };
      });
    };

    this.getCurriculumLanguages = function (id) {
      var url = 'Directory/GetCurriculumLocalizations?id=' + id;

      return campus.execute('GET', url).then(function (response) {

        if (!!response) {
          return response.Data.map(function (o) {
            return {
              id: o.Id,
              code: o.Code,
              name: o.Name
            };
          })
        }
        return [];
      });

    };

    this.getCurriculumFiles = function (id) {

      var url = 'Ir/' + id + '/Files';

      return campus.execute('GET', url).then(function (response) {

        if (!!response) {

          var result = [];

          response.forEach(function (f) {
            result.push({downloadUrl: f.storageFileUrl, title: f.name});
          });

          return result;
        }

        return [];
      });
    };


=======
>>>>>>> kpi-ua/master
  });
