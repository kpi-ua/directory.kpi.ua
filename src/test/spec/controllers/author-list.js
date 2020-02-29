'use strict';

describe('Controller: AuthorListCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var AuthorListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthorListCtrl = $controller('AuthorListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AuthorListCtrl.awesomeThings.length).toBe(3);
  });
});
