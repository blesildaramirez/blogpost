'use strict';

(function(){

class PostFormComponent {
  constructor($http, $state, $stateParams, Modal) {
    this.$http = $http;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.Modal = Modal;
    this.api = '/api/posts';
    this.fetching = {};
    this.post = {
      contents: [{}]
    };
  }

  $onInit() {
    if (this.$stateParams.id) {
      this.fetching.post =  true;
      this.$http.get(`${this.api}/${this.$stateParams.id}`)
        .then(res => {
          this.post = res.data;
          console.log(this.post);
        })
        .finally(() => this.fetching.post = false);
    }
  }

  save(form) {
    this.submitted = true;
    if (form.$valid) {
      if (this.post._id) {
        this.$http.put(`${this.api}/${this.post._id}`, this.post)
          .then((res) => {
            console.log(res);
            this.$state.go('post-show', { title: res.data.headline.split(' ').join('-').toLowerCase() });
          });
      } else {
        this.$http.post(this.api, this.post)
          .then((res) => {
            console.log(res);
            this.$state.go('post-show', { title: res.data.headline.split(' ').join('-').toLowerCase() });
          });
      }
    }
  }

  addContent() {
    this.post.contents.push({});
  }

  removeContent(i) {
    this.post.contents.splice(i, 1);
  }

  deletePost() {
    console.log('whatatt');
    this.Modal.confirm.delete(() => {
      this.$http.delete(`${this.api}/${this.post._id}`)
        .then(() => this.$state.go('post-list'));
    })(`this post - ${this.post.headline}`);
  }

}

angular.module('blogpostApp')
  .component('postForm', {
    templateUrl: 'app/post/post-form/post-form.html',
    controller: PostFormComponent
  });

})();
