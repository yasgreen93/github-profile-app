describe('GithubAPIService', function(){
  beforeEach(module('githubProfileApp'));

  var GithubAPIService, httpBackend;

  var usersData = [{ id: 1, login: 'kyle', repos_url: 4, followers_url: 0, avatar_url: 'kyle.png' },
                   { id: 2, login: 'harsheet', repos_url: 10, followers_url: 2, avatar_url: 'harsheet.png' }];

  beforeEach(inject(function(_GithubAPIService_,_userFactory_,$httpBackend) {
    GithubAPIService = _GithubAPIService_;
    userFactory = _userFactory_;
    httpBackend = $httpBackend;
  }));

  it('fetches a list of users', function(){
    httpBackend.expectGET("https://api.github.com/users").respond(usersData);

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

    GithubAPIService.getUsers().then(function(usersData){
      expect(usersData).toEqual([user1,user2]);
    });

    httpBackend.flush();
  });
});
