angular
  .module('githubProfileApp')
  .controller('GithubProfileController', ['$http', 'GithubAPIService', 'userFactory', function($http, GithubAPIService, userFactory) {

    var self = this;
    var user1, user2;

    GithubAPIService.getUsers().then(function(users) {
      self.users = users;
    });

  }]);
