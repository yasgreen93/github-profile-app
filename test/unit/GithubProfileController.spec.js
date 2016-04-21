describe('GithubProfileController', function() {
  beforeEach(module('githubProfileApp'));

  var ctrl, userFactory;

  beforeEach(inject(function($controller, _userFactory_) {
    ctrl = $controller('GithubProfileController');
    userFactory = _userFactory_;
  }));

  it('has two users', function() {
    var user1 = new userFactory();
    user1.username = 'kyle';
    user1.numOfRepos = 10;
    user1.numOfFollowers = 20;
    user1.avatar = 'kyle.jpg';

    var user2 = new userFactory();
    user2.username = 'harsheet';
    user2.numOfRepos = 18;
    user2.numOfFollowers = 23;
    user2.avatar = 'harsheet.jpg';
    
    expect(ctrl.users).toEqual([user1, user2]);
  });

});
