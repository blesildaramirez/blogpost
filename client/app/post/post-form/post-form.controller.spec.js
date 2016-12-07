'use strict';

describe('Component: PostFormComponent', function () {

  // load the controller's module
  beforeEach(module('blogpostApp'));

  var PostFormComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PostFormComponent = $componentController('post-form', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
