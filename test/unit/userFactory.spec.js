describe('userFactory', function(){
  beforeEach(module('githubProfileApp'));

  var user;

  beforeEach(inject(function(userFactory){
    user = new userFactory;
  }));

  it('should allow properties to be set', function(){
    user.username = 'test_user'
    expect(user.username).toEqual('test_user');
  });
});
