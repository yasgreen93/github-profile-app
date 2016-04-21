describe('GithubProfileController', function() {
  beforeEach(module('githubProfileApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GithubProfileController');
  }));

  it('has two users', function() {
    var user1 = {username: 'kyle', numOfRepos: 10, numOfFollowers: 20, avatar: 'kyle.jpg'};
    var user2 = {username: 'harsheet', numOfRepos: 18, numOfFollowers: 23, avatar: 'harsheet.jpg'};
    expect(ctrl.users).toEqual([user1, user2]);
  });
});
