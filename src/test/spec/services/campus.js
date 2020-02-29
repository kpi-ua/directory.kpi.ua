'use strict';

describe('Service: campus', function () {

  // load the service's module
  beforeEach(module('directoryApp'));

  // instantiate service
  var campus;
  beforeEach(inject(function (_campus_) {
    campus = _campus_;
  }));

  it('should do something', function () {
    expect(!!campus).toBe(true);
  });

});
