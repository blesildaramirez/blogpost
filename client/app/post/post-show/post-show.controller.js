'use strict';

(function(){

class PostShowComponent {
  constructor($http, $stateParams, Auth) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.isLoggedIn = Auth.isLoggedIn;
    this.api = '/api/posts/title';
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
  }
}

angular.module('blogpostApp')
  .component('postShow', {
    templateUrl: 'app/post/post-show/post-show.html',
    controller: PostShowComponent
  });

})();
