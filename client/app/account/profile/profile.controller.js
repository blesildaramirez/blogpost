'use strict';

(function(){

class ProfileComponent {
  constructor($http, $state, Auth) {
    this.$http = $http;
    this.$state = $state;
    this.api = '/api/users'
    this.user = Auth.getCurrentUser();
  }

  save() {
    this.$http.put(`${this.api}/${this.user._id}`, this.user)
      .then((res) => {
        this.$state.go('main');
      });
  }
}

angular.module('blogpostApp')
  .component('profile', {
    templateUrl: 'app/account/profile/profile.html',
    controller: ProfileComponent
  });

})();
