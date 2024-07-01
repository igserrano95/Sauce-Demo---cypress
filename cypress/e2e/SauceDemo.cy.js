import SauceDemo  from "../pages/saucedemo";
const loginPage = new SauceDemo();
describe('Login Test', () => {

    beforeEach(() => {
        loginPage.navigate()
    })
    it('login with valid credentials and verify title', () => {
      
      loginPage.enterUser('standard_user');
      loginPage.enterPassword('secret_sauce');
      loginPage.clickLoginButton();
      loginPage.verifyTitle('Swag Labs');

    });

    it('login with invalid user', () => {
      
        loginPage.enterUser('invalid_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();
        loginPage.verifyErrorMessage('Username and password do not match any user in this service');
  
      });

      it('login with invalid password', () => {
      
        loginPage.enterUser('standard_user');
        loginPage.enterPassword('invalid_sauce');
        loginPage.clickLoginButton();
        loginPage.verifyErrorMessage('Username and password do not match any user in this service');
  
      });

      it('should show error for empty credentials', () => {
        loginPage.clickLoginButton();
        loginPage.verifyErrorMessage('Username is required');
      });



    
    
  });
  