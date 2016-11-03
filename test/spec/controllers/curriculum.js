'use strict';

describe('Controller: CurriculumCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var CurriculumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurriculumCtrl = $controller('CurriculumCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CurriculumCtrl.awesomeThings.length).toBe(3);
  });
});
