angular
  .module('githubProfileApp')
  .controller('GithubProfileController', function() {

    var self = this;

    self.users = [{username: 'kyle', numOfRepos: 10, numOfFollowers: 20, avatar: 'kyle.jpg'},
                  {username: 'harsheet', numOfRepos: 18, numOfFollowers: 23, avatar: 'harsheet.jpg'}];
  });
