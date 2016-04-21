describe('GithubProfileController', function() {
  beforeEach(module('githubProfileApp'));

  var ctrl, userFactory, httpBackend, GithubAPIService;
  var usersData = [{ id: 1, login: 'kyle', repos_url: 4, followers_url: 0, avatar_url: 'kyle.png' },
                   { id: 2, login: 'harsheet', repos_url: 10, followers_url: 2, avatar_url: 'harsheet.png' }];

  beforeEach(inject(function($controller, _userFactory_, $httpBackend) {
    ctrl = $controller('GithubProfileController');
    userFactory = _userFactory_;
    httpBackend = $httpBackend;

    httpBackend.expectGET("https://api.github.com/users?access_token=3444a3707c527571bed704e5df863f35a523f78d").respond(usersData);
    httpBackend.flush();
  }));

  it('has two users', function() {
    var user1 = new userFactory();
    user1.userId = 1;
    user1.username = 'kyle';
    user1.numOfRepos = 4;
    user1.numOfFollowers = 0;
    user1.avatar = 'kyle.png';

    var user2 = new userFactory();
    user2.userId = 2;
    user2.username = 'harsheet';
    user2.numOfRepos = 10;
    user2.numOfFollowers = 2;
    user2.avatar = 'harsheet.png';

    expect(ctrl.users).toEqual([user1, user2]);
  });

  it('gets search text on each keystroke', function() {
    expect(ctrl.getSearchText('kyle')).toEqual(usersData[0])
  });
});
