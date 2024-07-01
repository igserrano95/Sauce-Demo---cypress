class SauceDemo {
    
    navigate(){
        cy.visit('https://www.saucedemo.com/')
    }

    enterUser(username){
        cy.get('[data-test="username"]').type(username);
    }

    enterPassword(password){
        cy.get('[data-test="password"]').type(password);
    }

    clickLoginButton(){
        cy.get('[data-test="login-button"]').click();
    }

    verifyTitle(title){
        cy.contains('Swag Labs').should('exist');
    }

    verifyErrorMessage(errorMessage) {
        cy.get('[data-test="error"]').should('contain.text', errorMessage);
      }
    
}

export default SauceDemo