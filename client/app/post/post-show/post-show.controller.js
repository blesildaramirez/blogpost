'use strict';

(function(){

class PostShowComponent {
  constructor($http, $location, $stateParams, Auth, Modal) {
    this.$http = $http;
    this.link = $location.absUrl();
    this.$stateParams = $stateParams;
    this.Modal = Modal;
    this.isLoggedIn = Auth.isLoggedIn;
    this.api = '/api/posts';
    this.user = {};
    this.post = {};
    this.fetching = {};
    this.comment = {};
  }

  $onInit() {
    this.fetching.post =  true;
    this.$http.get(`${this.api}/title/${this.$stateParams.title}`)
      .then(res => {
        this.post = res.data;
      })
      .finally(() => this.fetching.post = false);

    this.$http.get('/api/users/owner')
      .then(res => {
        this.user = res.data;
      });
  }

  postComment() {
    this.submitted = true;
    if (this.comment.comment) {
      if (this.isLoggedIn()) {
        this.comment.commentedBy = this.user._id;
      } else if (!this.comment.commentedBy || this.comment.anonymous) {
        this.comment.commentedBy = 'Anonymous';
      }
      this.$http.post(`${this.api}/comment/${this.post._id}`, this.comment)
        .then((res) => {
          this.post = res.data;
          this.submitted = false;
          this.comment = {};
        });
    }
  }

  editComment(i) {
    var c = this.post.comments[i];
    if (c.newcomment && c.newcomment !== c.comment) {
      c.comment = c.newcomment;
      c.updatedAt = new Date();
      this.$http.put(`${this.api}/${this.post._id}`, this.post)
        .then((res) => {
          this.post = res.data;
          c.edit = false;
        });
    }
  }

  deleteComment(i) {
    this.Modal.confirm.delete(() => {
      this.post.comments.splice(i, 1);
      this.$http.put(`${this.api}/${this.post._id}`, this.post);
    })(`this comment <i>${this.post.comments[i].comment}</i>`);
  }
}

angular.module('blogpostApp')
  .component('postShow', {
    templateUrl: 'app/post/post-show/post-show.html',
    controller: PostShowComponent
  });

})();
