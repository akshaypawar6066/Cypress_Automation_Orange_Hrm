import AdminPage from "../../pages/AdminPage";
import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";

describe('Verify the functionalities ofAdmin Page', () => {

    let loginData;
    let adminPageData;
    before("Hook to get the login data", () => {
        cy.fixture("LoginData.json").then((data) => {
            loginData = data;
        });

        cy.fixture("AdminPageData.json").then((data) => {
            adminPageData = data;
        })
    });

    beforeEach('Visit the application url', () => {
        cy.VistToApplication();
    });


    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    const adminPage = new AdminPage();

    it('Verify No of tabs count onto the Admin page', () => {
        // Increase the viewport size, for example, 1440x900
        cy.viewport(1440, 900);
        loginPage.loginToApplcation(loginData.CorrectUsername, loginData.CorrectPassword);
        loginPage.verifyLoginWithCorrectCredenatils(loginData.expectedHomePageUrl);
        dashboardPage.navigetToExpectedTabOnDashBoardPage("Admin");
        dashboardPage.verifyUserAbleToNavigateOnExpectedTabOnDashboardPage("admin");
        adminPage.verifyListOfTabsOnAdminPage(adminPageData.expectedCountOfTabs);

    });

    it.skip('Verify the Search Admin user Functionality on Admin Page', ()=>
    {
        loginPage.loginToApplcation(loginData.CorrectUsername, loginData.CorrectPassword);
        loginPage.verifyLoginWithCorrectCredenatils(loginData.expectedHomePageUrl);
        dashboardPage.navigetToExpectedTabOnDashBoardPage("Admin");
        dashboardPage.verifyUserAbleToNavigateOnExpectedTabOnDashboardPage("admin");
        adminPage.searchTheSpecificUserOnAdminPageTab(adminPageData.userToBeSaeched);
        adminPage.verifySearchedUserDetails(adminPageData.expectedHedaer, adminPageData.expectedHedaerValue)

    })
})