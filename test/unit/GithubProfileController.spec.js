describe('GithubProfileController', function() {
  beforeEach(module('githubProfileApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GithubProfileController');
  }));

  it('has a user', function() {
    expect(ctrl.user).toEqual('Kyle');
  });
});
