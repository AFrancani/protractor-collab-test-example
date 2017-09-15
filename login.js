
describe('Collaboratory', function() {

  const USERNAME = 'My username';
  const PASSWORD = 'My-password';

  const TIMEOUT = 10000;

  const until = protractor.ExpectedConditions;

  const usernameInput = element(by.id('j_username')),
        passwordInput = element(by.id('j_password')),
        loginButton   = element(by.name('submit'));

  it('should login', function() {
    // Since the login page of the Collaboratory is not an angular page, you
    // nned to tell protractor NOT to synchronize with angular:
    browser.ignoreSynchronization = true;

    // Go to the Collaboratory
    browser.get('https://collab.humanbrainproject.eu');

    // Wait until the username input is present
    browser.wait(until.presenceOf(usernameInput), TIMEOUT, 'Element taking too long to appear in the DOM');

    // Type the username in the username input
    usernameInput.sendKeys(USERNAME);
    // and the password in its input
    passwordInput.sendKeys(PASSWORD);

    // Click on login
    loginButton.click();

    // Wait in order to see the login result in the browser
    browser.wait(_ => false, TIMEOUT);
  });

});
