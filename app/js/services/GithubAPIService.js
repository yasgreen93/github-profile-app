angular
  .module('githubProfileApp')
  .service('GithubAPIService', ['$http', 'userFactory', function($http, userFactory) {

    var self = this;

    var accessToken = '?access_token=2a001e11cc660e1d60f4a32a0a8f738a5aecaec9'

    self.getUsers = function() {
      return $http.get('https://api.github.com/users' + accessToken)
      .then(function(response) {
        return _handleResponseFromAPI(response.data);
      });
    };

    function _handleResponseFromAPI(data) {
      return data.map(function(userData) {
        var user = new userFactory();
        user.userId = userData.id;
        user.username = userData.login;

        _getUserInfo(user, userData.login);

        user.avatar = userData.avatar_url;

        return user;
      });
    };

    function _getUserInfo(user, username) {
      $http.get('https://api.github.com/users/' + username + accessToken)
      .then(function(response) {
        user.numOfFollowers = response.data.followers;
        user.numOfRepos = response.data.public_repos;
      });
    };

  }]);
