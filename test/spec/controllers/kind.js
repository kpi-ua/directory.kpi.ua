'use strict';

describe('Controller: KindCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var KindCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KindCtrl = $controller('KindCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KindCtrl.awesomeThings.length).toBe(3);
  });
});
