describe('Github Profile App', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Github Profile');
  });

  it('displays a list of users', function() {
    browser.get('/');
    var users = $$("#users ul li");
    expect(users.first().getText()).toEqual("Username: kyle, Repositories: 10, Followers: 20, Avatar: kyle.jpg");
    expect(users.last().getText()).toEqual("Username: harsheet, Repositories: 18, Followers: 23, Avatar: harsheet.jpg");
  });
});
