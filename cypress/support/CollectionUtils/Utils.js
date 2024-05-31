Cypress.Commands.add('iterateTextFromListOfWebElementsAndReturnAsList', (listOfLocator) => {
    let listOfTexts = [];

    cy.get(listOfLocator).each(($ele) => {
        cy.wrap($ele).invoke('text').then((text) => {
            listOfTexts.push(text.trim());
        });
    }).then(() => {
        return cy.wrap(listOfTexts);
    });
});


Cypress.Commands.add('getExpectedHeaderIndexFromListOfHeaders', (listOfHeaders, expectedHeaderText) => {
    return cy.get(listOfHeaders).then($headers => {
        let headerIndex = -1;
        debugger;
        $headers.each((index, header) => {
            const headerText = Cypress.$(header).text().trim();
            if (headerText === expectedHeaderText) {
                headerIndex = index + 1; // 1-based index
                return false; // Break the loop
            }
        });
        if (headerIndex === -1) {
            throw new Error(`Header with text "${expectedHeaderText}" not found.`);
        }
        return headerIndex;
    });
});

