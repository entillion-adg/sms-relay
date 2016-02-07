'use strict';

angular.module('smsRelayApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: 'app/landingPage/landingPage.html',
        controller: 'LandingPageCtrl'
      });
  });
