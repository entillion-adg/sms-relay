'use strict';

describe('Controller: LandingPageCtrl', function () {

  // load the controller's module
  beforeEach(module('smsRelayApp'));

  var LandingPageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LandingPageCtrl = $controller('LandingPageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
