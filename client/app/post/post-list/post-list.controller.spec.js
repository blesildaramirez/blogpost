'use strict';

describe('Component: PostListComponent', function () {

  // load the controller's module
  beforeEach(module('blogpostApp'));

  var PostListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PostListComponent = $componentController('post-list', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
