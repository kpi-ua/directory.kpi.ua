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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/curriculum', {
        templateUrl: 'views/curriculum.html',
        controller: 'CurriculumCtrl',
        controllerAs: 'curriculum'
      })
      .when('/author/?uid', {
        templateUrl: 'views/author.html',
        controller: 'AuthorCtrl',
        controllerAs: 'author'
      })
      .when('/generic', {
        templateUrl: 'views/generic.html',
        controller: 'GenericCtrl',
        controllerAs: 'generic'
      })
      .when('/generic/university', {
        templateUrl: 'views/generic-university.html',
        controller: 'GenericUniversityCtrl',
        controllerAs: 'genericUniversity'
      })
      .when('/universal', {
        templateUrl: 'views/universal.html',
        controller: 'UniversalCtrl',
        controllerAs: 'universal'
      })
      .when('/:faculty', {
        templateUrl: 'views/faculty.html',
        controller: 'FacultyCtrl',
        controllerAs: 'faculty'
      })
      .when('/author/list/:page?', {
        templateUrl: 'views/author-list.html',
        controller: 'AuthorListCtrl',
        controllerAs: 'authorList'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);

      Campus.setApiEndpoint('https://api.campus.kpi.ua/');

  });
