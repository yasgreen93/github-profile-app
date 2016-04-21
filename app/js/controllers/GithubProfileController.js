angular
  .module('githubProfileApp')
  .controller('GithubProfileController', ['$http', 'GithubAPIService', 'userFactory', function($http, GithubAPIService, userFactory) {

    var self = this;
    var user1, user2;

    GithubAPIService.getUsers().then(function(users) {
      self.users = users;
    });

    // self.users = [user1 = new userFactory(), user2 = new userFactory()];
    //
    // user1.userId = 1;
    // user1.username = 'kyle';
    // user1.numOfRepos = 4;
    // user1.numOfFollowers = 0;
    // user1.avatar = 'kyle.png';
    //
    // user2.userId = 2;
    // user2.username = 'harsheet';
    // user2.numOfRepos = 10;
    // user2.numOfFollowers = 2;
    // user2.avatar = 'harsheet.png';
  }]);
