'use strict';

/**
 * @ngdoc overview
 * @name directoryApp
 * @description
 * # directoryApp
 *
 * Main module of the application.
 */
angular
  .module('directoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap.pagination'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        caseInsensitiveMatch: true
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search',
        caseInsensitiveMatch: true
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        caseInsensitiveMatch: true
      })
      .when('/curriculum/:id', {
        templateUrl: 'views/curriculum.html',
        controller: 'CurriculumCtrl',
        controllerAs: 'curriculum',
        caseInsensitiveMatch: true
      })
      .when('/author/?uid', {
        templateUrl: 'views/author.html',
        controller: 'AuthorCtrl',
        controllerAs: 'author',
        caseInsensitiveMatch: true
      })
    //http://localhost:9000/Generic/University/1/1
      .when('/generic/:subdivisionType/:subdivision?', {
        templateUrl: 'views/generic.html',
        controller: 'GenericCtrl',
        controllerAs: 'generic',
        caseInsensitiveMatch: true
      })
      .when('/generic/:subdivision/:kind/:page?', {
        templateUrl: 'views/generic-kind.html',
        controller: 'GenericKindCtrl',
        controllerAs: 'generic',
        caseInsensitiveMatch: true
      })
      .when('/universal', {
        templateUrl: 'views/universal.html',
        controller: 'UniversalCtrl',
        controllerAs: 'universal',
        caseInsensitiveMatch: true
      })
      .when('/:faculty/:cathedra/:speciality/:discipline/:creditModule/:kind', {
        templateUrl: 'views/kind.html',
        controller: 'KindCtrl',
        controllerAs: 'kind',
        caseInsensitiveMatch: true
      })
      .when('/:faculty/:cathedra/:speciality/:discipline/:creditModule', {
        templateUrl: 'views/creditModule.html',
        controller: 'CreditModuleCtrl',
        controllerAs: 'creditModule',
        caseInsensitiveMatch: true
      })
      .when('/:faculty/:cathedra/:speciality/:discipline', {
        templateUrl: 'views/discipline.html',
        controller: 'DisciplineCtrl',
        controllerAs: 'discipline',
        caseInsensitiveMatch: true
      })
      .when('/:faculty/:cathedra/:speciality', {
        templateUrl: 'views/speciality.html',
        controller: 'SpecialityCtrl',
        controllerAs: 'speciality',
        caseInsensitiveMatch: true
      })
      .when('/:faculty/:cathedra', {
        templateUrl: 'views/cathedra.html',
        controller: 'CathedraCtrl',
        controllerAs: 'cathedra',
        caseInsensitiveMatch: true
      })
      .when('/:faculty', {
        templateUrl: 'views/faculty.html',
        controller: 'FacultyCtrl',
        controllerAs: 'faculty',
        caseInsensitiveMatch: true
      })
      .when('/author/list/:page?', {
        templateUrl: 'views/authorList.html',
        controller: 'AuthorListCtrl',
        controllerAs: 'authorList',
        caseInsensitiveMatch: true
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    //Campus.setApiEndpoint('https://api.campus.kpi.ua/');

  });
