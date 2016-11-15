'use strict';

describe('Controller: CurriculumLanguageCtrl', function () {

  // load the controller's module
  beforeEach(module('directoryApp'));

  var CurriculumLanguageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurriculumLanguageCtrl = $controller('CurriculumLanguageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CurriculumLanguageCtrl.awesomeThings.length).toBe(3);
  });
});
