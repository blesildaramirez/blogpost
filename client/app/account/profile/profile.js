'use strict';

angular.module('blogpostApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/account',
        authenticate: true,
        template: '<profile></profile>'
      });
  });
