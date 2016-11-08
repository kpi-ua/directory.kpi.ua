'use strict';

describe('Controller: UniversalKindCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var UniversalKindCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UniversalKindCtrl = $controller('UniversalKindCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UniversalKindCtrl.awesomeThings.length).toBe(3);
  });
});
