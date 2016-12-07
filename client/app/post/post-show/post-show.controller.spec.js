'use strict';

describe('Component: PostShowComponent', function () {

  // load the controller's module
  beforeEach(module('blogpostApp'));

  var PostShowComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PostShowComponent = $componentController('post-show', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
