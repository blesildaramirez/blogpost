'use strict';

(function(){

class PostShowComponent {
  constructor($http, $location, $stateParams, Auth) {
    this.$http = $http;
    this.link = $location.absUrl();
    this.$stateParams = $stateParams;
    this.isLoggedIn = Auth.isLoggedIn;
    this.api = '/api/posts/title';
    this.user = {};
    this.post = {};
    this.fetching = {};
  }

  $onInit() {
    this.fetching.post =  true;
    this.$http.get(`${this.api}/${this.$stateParams.title}`)
      .then(res => {
        this.post = res.data;
      })
      .finally(() => this.fetching.post = false);

    this.$http.get('/api/users/owner')
      .then(res => {
        this.user = res.data;
      });
  }
}

angular.module('blogpostApp')
  .component('postShow', {
    templateUrl: 'app/post/post-show/post-show.html',
    controller: PostShowComponent
  });

})();
