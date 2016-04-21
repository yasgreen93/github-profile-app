angular
  .module('githubProfileApp')
  .service('GithubAPIService', ['$http', 'userFactory', function($http, userFactory) {

    var self = this;

    var accessToken = '?access_token=9f7c60e61f6e2f7c834633828c77b74ed5343f81'

    self.getUsers = function() {
      return $http.get('https://api.github.com/users?access_token=9f7c60e61f6e2f7c834633828c77b74ed5343f81')
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
