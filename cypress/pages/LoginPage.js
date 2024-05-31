class LoginPage {
    username = "input[placeholder='Username']";
    password = "input[placeholder='Password']";
    loginButton = "button[type='submit']";
    errorMessageElement = ".oxd-text.oxd-text--p.oxd-alert-content-text";




    loginToApplcation(username, password) {
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
    }

    


    verifyLoginWithCorrectCredenatils(expectedHomePageUrlEndPoint) {
        if (cy.url().should('contain', expectedHomePageUrlEndPoint)) {
            cy.log("Able to login the application using correct credentils:")
        }
        else {
            cy.log("Not able to login the application using correct credenatils.")
            assert.fail("Login unsucceeful with correct credentails.")
        }
    }

    verifyLoginWithInCorrectCredenatils(expectedErrorMessage) {
        if (cy.get(this.errorMessageElement).should('be.visible').and('have.text', expectedErrorMessage)) {
            cy.log("Not able to login the application using incorrect credentails.")
        }
        else {
            cy.log("Login to application using incorrect credentails.")
            assert.fail("Login with Incorrect credenatils is successful.!")
        }
    }
}

export default LoginPage;