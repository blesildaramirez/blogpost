'use strict';

(function(){

class PostListComponent {
  constructor($http) {
    this.$http = $http;
    this.api = '/api/posts';
    this.posts = [];
    this.fetching = {};
    this.total = 0;
    this.params = {
      max: 3,
      start: 0,
      page: 0
    };
  }

  $onInit() {
    this.fetching.posts =  true;
    this.$http.get(this.api, { params: this.params })
      .then(res => {
        this.posts = res.data.data;
        this.total = res.data.count;
      })
      .finally(() => this.fetching.posts = false);
  }

  loadMore() {
    if (this.posts.length < this.total) {
      this.fetching.more = true;
      this.params.page++;
      this.params.start = this.params.page * this.params.max;
      this.$http.get(this.api, { params: this.params })
        .then(res => {
          for (var x = 0; x < res.data.data.length; x++) {
            this.posts.push(res.data.data[x]);
          }
        })
        .finally(() => this.fetching.more = false);
    }
  }
}

angular.module('blogpostApp')
  .component('postList', {
    templateUrl: 'app/post/post-list/post-list.html',
    controller: PostListComponent
  });

})();
