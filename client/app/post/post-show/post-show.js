'use strict';

angular.module('blogpostApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post-show', {
        url: '/posts/:title',
        template: '<post-show></post-show>'
      });
  });
