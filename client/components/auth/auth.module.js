'use strict';

angular.module('smsRelayApp.auth', [
  'smsRelayApp.constants',
  'smsRelayApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
