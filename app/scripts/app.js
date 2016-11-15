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
<<<<<<< HEAD
        controllerAs: 'main',
        caseInsensitiveMatch: true
=======
        controllerAs: 'main'
>>>>>>> kpi-ua/master
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
<<<<<<< HEAD
        controllerAs: 'search',
        caseInsensitiveMatch: true
=======
        controllerAs: 'search'
>>>>>>> kpi-ua/master
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
<<<<<<< HEAD
        controllerAs: 'about',
        caseInsensitiveMatch: true
      })
      .when('/author/list/:page?', {
        templateUrl: 'views/authorList.html',
        controller: 'AuthorListCtrl',
        controllerAs: 'authorList',
        caseInsensitiveMatch: true
      })
      .when('/author/:uid', {
        templateUrl: 'views/author.html',
        controller: 'AuthorCtrl',
        controllerAs: 'author',
        caseInsensitiveMatch: true
      })
      .when('/curriculum/:id/:language', {
        templateUrl: 'views/curriculum-language.html',
        controller: 'CurriculumLanguageCtrl',
        controllerAs: 'curriculumLanguage',
        caseInsensitiveMatch: true
=======
        controllerAs: 'about'
>>>>>>> kpi-ua/master
      })
      .when('/curriculum/:id', {
        templateUrl: 'views/curriculum.html',
        controller: 'CurriculumCtrl',
<<<<<<< HEAD
        controllerAs: 'curriculum',
        caseInsensitiveMatch: true
      })

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
=======
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
        templateUrl: 'views/genericUniversity.html',
        controller: 'GenericUniversityCtrl',
        controllerAs: 'genericUniversity'
>>>>>>> kpi-ua/master
      })
      .when('/universal', {
        templateUrl: 'views/universal.html',
        controller: 'UniversalCtrl',
<<<<<<< HEAD
        controllerAs: 'universal',
        caseInsensitiveMatch: true
=======
        controllerAs: 'universal'
>>>>>>> kpi-ua/master
      })
      .when('/:faculty/:cathedra/:speciality/:discipline/:creditModule/:kind', {
        templateUrl: 'views/kind.html',
        controller: 'KindCtrl',
<<<<<<< HEAD
        controllerAs: 'kind',
        caseInsensitiveMatch: true
=======
        controllerAs: 'kind'
>>>>>>> kpi-ua/master
      })
      .when('/:faculty/:cathedra/:speciality/:discipline/:creditModule', {
        templateUrl: 'views/creditModule.html',
        controller: 'CreditModuleCtrl',
<<<<<<< HEAD
        controllerAs: 'creditModule',
        caseInsensitiveMatch: true
=======
        controllerAs: 'creditModule'
>>>>>>> kpi-ua/master
      })
      .when('/:faculty/:cathedra/:speciality/:discipline', {
        templateUrl: 'views/discipline.html',
        controller: 'DisciplineCtrl',
<<<<<<< HEAD
        controllerAs: 'discipline',
        caseInsensitiveMatch: true
=======
        controllerAs: 'discipline'
>>>>>>> kpi-ua/master
      })
      .when('/:faculty/:cathedra/:speciality', {
        templateUrl: 'views/speciality.html',
        controller: 'SpecialityCtrl',
<<<<<<< HEAD
        controllerAs: 'speciality',
        caseInsensitiveMatch: true
=======
        controllerAs: 'speciality'
>>>>>>> kpi-ua/master
      })
      .when('/:faculty/:cathedra', {
        templateUrl: 'views/cathedra.html',
        controller: 'CathedraCtrl',
<<<<<<< HEAD
        controllerAs: 'cathedra',
        caseInsensitiveMatch: true
=======
        controllerAs: 'cathedra'
>>>>>>> kpi-ua/master
      })
      .when('/:faculty', {
        templateUrl: 'views/faculty.html',
        controller: 'FacultyCtrl',
<<<<<<< HEAD
        controllerAs: 'faculty',
        caseInsensitiveMatch: true
=======
        controllerAs: 'faculty'
      })
      .when('/author/list/:page?', {
        templateUrl: 'views/authorList.html',
        controller: 'AuthorListCtrl',
        controllerAs: 'authorList'
>>>>>>> kpi-ua/master
      })
      .otherwise({
        redirectTo: '/'
      });

<<<<<<< HEAD
    $locationProvider.html5Mode(true);
=======
      $locationProvider.html5Mode(true);

      //Campus.setApiEndpoint('https://api.campus.kpi.ua/');
>>>>>>> kpi-ua/master

  });
