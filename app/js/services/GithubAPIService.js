angular
  .module('githubProfileApp')
  .service('GithubAPIService', function($http, userFactory) {

    var self = this;

    self.getUsers = function() {
      return $http.get('https://api.github.com/users')
      .then(function(response) {
        return _handleResponseFromAPI(response.data);
      });
    };

    function _handleResponseFromAPI(data) {
      return data.map(function(userData) {
        var user = new userFactory();
        console.log(userData);
        user.userId = userData.id;
        console.log(user);
        user.username = userData.login;
        user.numOfFollowers = userData.followers_url;
        user.numOfRepos = userData.repos_url;
        user.avatar = userData.avatar_url;

        return user;
      });
    }
  });
