class ChangePassowrdPage {
    visit(){
        cy.visit('/customer/account/edit/changepass/1/')

    }

    verifySuccessAccessEditAccountPage(){
        cy.url().should('include', '/customer/account/edit/changepass/1/')
        cy.get('.page-title-wrapper .page-title .base')
        .should('be.visible')
        .and('have.text', 'Edit Account Information')
    }

    /*
    verifySidebarMenuAccountInformation(){
        cy.get('.content.block-collapsible-nav-content').contains('Account Information').should('be.visible')
    }
    */

    isAccountInformationSidebarActive(){
        return cy.get('.content.block-collapsible-nav-content')
        .contains('Account Information')
        .parent()
        .should('have.class', 'current');
    }

    getChangePasswordCheckboxStatus(){
        return cy.get('#change-password').should('be.checked')
    }


}
export default ChangePassowrdPage