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
        controllerAs: 'main'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/curriculum/:id', {
        templateUrl: 'views/curriculum.html',
        controller: 'CurriculumCtrl',
        controllerAs: 'curriculum'
      })
      .when('/author/?uid', {
        templateUrl: 'views/author.html',
        controller: 'AuthorCtrl',
        controllerAs: 'author'
      })
      .when('/generic/:subdivisionType/:subdivision?', {
        templateUrl: 'views/generic.html',
        controller: 'GenericCtrl',
        controllerAs: 'generic'
      })
      .when('/generic/:subdivision/:kind/:page?', {
        templateUrl: 'views/generic-kind.html',
        controller: 'GenericKindCtrl',
        controllerAs: 'generic'
      })
      .when('/universal', {
        templateUrl: 'views/universal.html',
        controller: 'UniversalCtrl',
        controllerAs: 'universal'
      })
      .when('/:faculty/:cathedra/:speciality/:discipline/:creditModule/:kind', {
        templateUrl: 'views/kind.html',
        controller: 'KindCtrl',
        controllerAs: 'kind'
      })
      .when('/:faculty/:cathedra/:speciality/:discipline/:creditModule', {
        templateUrl: 'views/creditModule.html',
        controller: 'CreditModuleCtrl',
        controllerAs: 'creditModule'
      })
      .when('/:faculty/:cathedra/:speciality/:discipline', {
        templateUrl: 'views/discipline.html',
        controller: 'DisciplineCtrl',
        controllerAs: 'discipline'
      })
      .when('/:faculty/:cathedra/:speciality', {
        templateUrl: 'views/speciality.html',
        controller: 'SpecialityCtrl',
        controllerAs: 'speciality'
      })
      .when('/:faculty/:cathedra', {
        templateUrl: 'views/cathedra.html',
        controller: 'CathedraCtrl',
        controllerAs: 'cathedra'
      })
      .when('/:faculty', {
        templateUrl: 'views/faculty.html',
        controller: 'FacultyCtrl',
        controllerAs: 'faculty'
      })
      .when('/author/list/:page?', {
        templateUrl: 'views/authorList.html',
        controller: 'AuthorListCtrl',
        controllerAs: 'authorList'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    //Campus.setApiEndpoint('https://api.campus.kpi.ua/');

  });
