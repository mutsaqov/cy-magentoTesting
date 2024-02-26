//Checking Access Registration page via homepage

class HomePage {
    visit() {
        cy.visit('/')
    }
    
    clickProfileDropdown(){
        cy.get('.customer-welcome active').eq(0).click()
    }

    selectMyAccountMenu(){
        cy.contains('.customer-menu').should('be.visible').click()
    }
}

export default HomePage