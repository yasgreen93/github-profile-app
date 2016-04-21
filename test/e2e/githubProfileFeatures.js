describe('Github Profile App', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Github Profile');
  });

  it('displays a list of users', function() {
    browser.get('/');
    var users = $$("#users ul li ul");
    expect(users.first().getText()).toMatch("Avatar: kyle.jpg\nkyle\nRepositories: 10\nFollowers: 20");
    expect(users.last().getText()).toMatch("Avatar: harsheet.jpg\nharsheet\nRepositories: 18\nFollowers: 23");
  });

  it('searches user by username and returns the user', function() {
    browser.get('/');
    $("#search-by-username").sendKeys("kyle");
    var users = $$("#users ul li ul");
    expect(users.getText()).toMatch("Avatar: kyle.jpg\nkyle\nRepositories: 10\nFollowers: 20");
    expect(users.getText()).not.toMatch("Avatar: harsheet.jpg\nharsheet\nRepositories: 18\nFollowers: 23");
  });
});
