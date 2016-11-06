'use strict';

describe('Controller: CathedraCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var CathedraCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CathedraCtrl = $controller('CathedraCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CathedraCtrl.awesomeThings.length).toBe(3);
  });
});
