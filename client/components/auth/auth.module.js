'use strict';

angular.module('blogpostApp.auth', ['blogpostApp.constants', 'blogpostApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
