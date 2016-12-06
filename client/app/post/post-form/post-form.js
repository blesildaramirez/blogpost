'use strict';

angular.module('blogpostApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post-form', {
        url: '/posts/add',
        template: '<post-form></post-form>',
        authenticate: true
      })
      .state('edit-post-form', {
        url: '/posts/edit/:id',
        template: '<post-form></post-form>',
        authenticate: true
      });
  });
