class AdminPage {
    listOfTabsOnAdminPage = "nav[aria-label='Topbar Menu'] ul>li";
    usernameSearchBox = "div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']";
    searchButton = "button[type='submit']";
    listOfHeaders = ".oxd-table-header>div>div";
    listOfRows = ".oxd-table-body>div";

    getExpectedCellElementFromSearchedAdminUsersTable(rowNum, colNo) {
        return cy.xpath(`//div[@class='oxd-table-body']/div[${rowNum}]//div[@class='oxd-table-cell oxd-padding-cell'][${colNo}]`);
    }

    verifyListOfTabsOnAdminPage(expectedTabCount) {
        cy.get(this.listOfTabsOnAdminPage).should('have.length', expectedTabCount);
    }

    searchTheSpecificUserOnAdminPageTab(expectedUser) {
        cy.get(this.usernameSearchBox).type(expectedUser);
        cy.get(this.searchButton).trigger('mouseover').click();
    }

    verifySearchedUserDetails(expectedEmployeeNameHeader, expectedTextOnHeaderElement) {
        cy.getExpectedHeaderIndexFromListOfHeaders(this.listOfHeaders, expectedEmployeeNameHeader).then(employeNameHeader => {
            cy.get(this.listOfRows).each(($row, index) => {
                this.getExpectedCellElementFromSearchedAdminUsersTable(index + 1, employeNameHeader).invoke('text').then(text => {
                    if (text.trim() === expectedTextOnHeaderElement) {
                        cy.log("Expected Header text is matching with Actual");
                    } else {
                        cy.log("Expected Header text is not matching with the actual.");
                        assert.fail("Expected Header text is not matching with the actual.");
                    }
                });
            });
        });
    }
}

export default AdminPage;
