'use strict';

describe('Controller: FacultyCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var FacultyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FacultyCtrl = $controller('FacultyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FacultyCtrl.awesomeThings.length).toBe(3);
  });
});
