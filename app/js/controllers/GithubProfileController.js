angular
  .module('githubProfileApp')
  .controller('GithubProfileController', ['userFactory', function(userFactory) {

    var self = this;
    var user1, user2;

    self.users = [user1 = new userFactory(), user2 = new userFactory()];

    user1.username = 'kyle';
    user1.numOfRepos = 10;
    user1.numOfFollowers = 20;
    user1.avatar = 'kyle.jpg';

    user2.username = 'harsheet';
    user2.numOfRepos = 18;
    user2.numOfFollowers = 23;
    user2.avatar = 'harsheet.jpg';

  }]);
