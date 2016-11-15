'use strict';

describe('Controller: DisciplineCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var DisciplineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DisciplineCtrl = $controller('DisciplineCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DisciplineCtrl.awesomeThings.length).toBe(3);
  });
});
