'use strict';

angular.module('blogpostApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post-list', {
        url: '/archives',
        template: '<post-list></post-list>'
      });
  });
