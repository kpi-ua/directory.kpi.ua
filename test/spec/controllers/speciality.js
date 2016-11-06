'use strict';

describe('Controller: SpecialityCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var SpecialityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpecialityCtrl = $controller('SpecialityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpecialityCtrl.awesomeThings.length).toBe(3);
  });
});
