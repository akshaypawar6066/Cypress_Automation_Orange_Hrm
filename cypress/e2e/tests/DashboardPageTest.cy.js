import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";

describe('Validate Diff functionalities on dashBoard Page', () => {

    let DashboardPageTestData;
    let loginData;
    before("Hook to get the expected Test data of Dashboard Page", () => {
        cy.fixture("DashboradPageData.json").then((data) => {
            DashboardPageTestData = data;
        });

        cy.fixture("LoginData.json").then((data)=>
        {
            loginData = data;
        })
    })


    beforeEach("Visting to the application", () => {
        cy.VistToApplication()
    });


    const loginPage = new LoginPage();
    const dashBoardPage = new DashboardPage();


    it("Validate Count of No of sheets onto the Dashboard page", () => {
        loginPage.loginToApplcation(loginData.CorrectUsername, loginData.CorrectPassword);
        loginPage.verifyLoginWithCorrectCredenatils("dashboard/index");
        dashBoardPage.verifyNoOfSheetsPresentOntoTheDashBoradSheet(DashboardPageTestData.expectedSheets);
    });


    it('Validate text present onto the each section of the sheet', () => {
        loginPage.loginToApplcation(loginData.CorrectUsername, loginData.CorrectPassword);
        loginPage.verifyLoginWithCorrectCredenatils("dashboard/index");
        dashBoardPage.verifyTextPresentOntoTheSheetsOnDashBoardPage(DashboardPageTestData.expectedTexts);
    });

    it("verify click functonality of Admin Tab", () => {
        loginPage.loginToApplcation(loginData.CorrectUsername, loginData.CorrectPassword);
        loginPage.verifyLoginWithCorrectCredenatils("dashboard/index");
        dashBoardPage.navigetToExpectedTabOnDashBoardPage("Admin");
        dashBoardPage.verifyUserAbleToNavigateOnExpectedTabOnDashboardPage("admin");
    })



    it("verify click functonality of PIM Tab", () => {
        loginPage.loginToApplcation(loginData.CorrectUsername, loginData.CorrectPassword);
        loginPage.verifyLoginWithCorrectCredenatils("dashboard/index");
        dashBoardPage.navigetToExpectedTabOnDashBoardPage("PIM");
        dashBoardPage.verifyUserAbleToNavigateOnExpectedTabOnDashboardPage("pim");
    });

    it("verify click functonality of Directory Tab", () => {
        loginPage.loginToApplcation(loginData.CorrectUsername, loginData.CorrectPassword);
        loginPage.verifyLoginWithCorrectCredenatils("dashboard/index");
        dashBoardPage.navigetToExpectedTabOnDashBoardPage("Directory");
        dashBoardPage.verifyUserAbleToNavigateOnExpectedTabOnDashboardPage("directory");
    })

})




