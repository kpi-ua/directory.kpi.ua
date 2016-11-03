'use strict';

describe('Controller: GenericCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var GenericCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GenericCtrl = $controller('GenericCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GenericCtrl.awesomeThings.length).toBe(3);
  });
});
