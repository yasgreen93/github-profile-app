angular
  .module('githubProfileApp')
  .service('GithubAPIService', ['$http', 'userFactory', function($http, userFactory) {

    var self = this;

    var accessToken = '?access_token=3444a3707c527571bed704e5df863f35a523f78d'

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
        user.avatar = userData.avatar_url;


        _getUserInfo(user, userData.login);

        console.log(user);
        return user;
      });
    };

    function _getUserInfo(user, username) {
      $http.get('https://api.github.com/users/' + username + accessToken)
      .then(function(response) {
        user.numOfFollowers = response.data.followers;
        user.numOfRepos = response.data.public_repos;
        console.log("This should come first")
        console.log(user);
      });
    };

  }]);
