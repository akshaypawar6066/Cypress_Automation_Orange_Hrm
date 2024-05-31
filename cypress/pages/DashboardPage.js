class DashboardPage {

    dashboradHeaderList = ".orangehrm-dashboard-widget-name p";

    getExpectedTabOnDashBoardPage(expectedTabText) {
        return cy.xpath(`//span[normalize-space()='${expectedTabText}']`)
    }




    verifyNoOfSheetsPresentOntoTheDashBoradSheet(expectedSheetCount) {
        cy.get(this.dashboradHeaderList).should('have.length', expectedSheetCount);
    }

    verifyTextPresentOntoTheSheetsOnDashBoardPage(expectedTextsList) {

        cy.iterateTextFromListOfWebElementsAndReturnAsList(this.dashboradHeaderList).should('deep.equal', expectedTextsList);

    }


    navigetToExpectedTabOnDashBoardPage(expectedTabText) {
        this.getExpectedTabOnDashBoardPage(expectedTabText).click();
    }


    verifyUserAbleToNavigateOnExpectedTabOnDashboardPage(expectedTabUrlPart) {
        if (cy.url().should('contain', expectedTabUrlPart)) {
            cy.log("Successfully navigated on Expected Tab:" + expectedTabUrlPart)
        }
        else {
            cy.log("Not able to navigate on expected Tab.")
            assert.fail("Not able to navigate on expected Tab...!!!")
        }
    }

}


export default DashboardPage;