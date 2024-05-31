import LoginPage from "../../pages/LoginPage";

describe('Login Page Automation', () => {
    let loginData;

    before("Hook to reda the Login Data", () => {
        cy.fixture("LoginData.json").then((data) => {
            loginData = data;
        })
    });

    beforeEach('Visit the application url', () => {
        cy.VistToApplication();
    });


    const loginPage = new LoginPage();


    it('Verify Login to application functionality using correct credenatils.', () => {
        loginPage.loginToApplcation(loginData.CorrectUsername, loginData.CorrectPassword);
        loginPage.verifyLoginWithCorrectCredenatils(loginData.expectedHomePageUrl);

    });


    it("verify Login to Application functionlity using incorrect credenatils", ()=>
    {
        loginPage.loginToApplcation(loginData.IncorectUsername, loginData.incorrectPaddword);
        loginPage.verifyLoginWithInCorrectCredenatils(loginData.expectedErrorMessage);
    })
})