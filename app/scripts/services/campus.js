'use strict';

/**
 * @ngdoc service
 * @name directoryApp.campus
 * @description
 * # campus
 * Service in the directoryApp.
 */
angular.module('directoryApp')
  .service('campus', function ($http) {

    this.ApiEndpoint = 'https://api.campus.kpi.ua/';
    //this.ApiEndpoint = 'http://api-campus-kpi-ua.azurewebsites.net/';

    /**
     * Set auth token
     */
    this.setToken = function (token) {
      localStorage["campus-access-token"] = token;
    };

    /**
     * Return current auth token
     */
    this.getToken = function () {
      var token = localStorage["campus-access-token"];
      return token == "null" ? null : token;
    };

    /**
     * Set API endpoint
     */
    this.setApiEndpoint = function (url) {
      this.ApiEndpoint = url;
    };

    /**
     * Get API endpoint
     */
    this.getApiEndpoint = function () {
      return this.ApiEndpoint;
    };

    /**
     * Save current user
     */
    this.setCurrentUser = function (data) {
      localStorage["campus-current-user"] = JSON.stringify(data);
    };

    /**
     * Get information about current logged user
     */
    this.getCurrentUser = function () {
      return JSON.parse(localStorage["campus-current-user"]);
    }

    /**
     * Logout and clear current auth token
     */
    this.logout = function () {
      this.setToken(null);
      this.setCurrentUser(null);
    };

    /**
     * Execute API method
     */
    this.execute = function (method, path, payload) {

      var self = this;

      var url = self.ApiEndpoint + path;

      payload = $.isEmptyObject(payload) ? null : payload;

      if (method == "POST" /* || method == "POST" */) {
        payload = !!payload ? JSON.stringify(payload) : payload;
      }

      return $http({
        url: url,
        method: method,
        data: payload,
        processData: true,
        contentType: false,
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Accept", "application/json");
          xhr.setRequestHeader("Content-Type", "application/json");

          if (!!self.getToken()) {
            xhr.setRequestHeader("Authorization", "Bearer " + self.getToken());
          }
        },
        success: function () {
          //console.info('Request to campus API success: ', response);
        },
        error: function (jqXHR, status, error) {
          console.warn('Error occured: ', status, error);
        }
      }).then(function (response) {
        return response.data;
      });
    };

    /**
     * Authorize and save auth token
     */
    this.auth = function (login, password) {

      var payload = {
        username: login,
        password: password,
        grant_type: 'password'
      };

      var self = this;

      payload = $.param(payload);

      return $http({
        url: self.ApiEndpoint + 'oauth/token',
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        crossDomain: true,
        data: payload,
        success: function (response) {
          self.setToken(response.access_token);

          self.execute("GET", "Account/Info").then(function (response) {
            //get current user details
            self.setCurrentUser(response);
            d.resolve(self.getToken());
          });
        },
        error: function (xhr, status, err) {
          console.warn(xhr, status, err.toString());

          self.logout();
          d.resolve(null);
        }
      }).then(function (response) {
        return response.data;
      });
    };


  });
