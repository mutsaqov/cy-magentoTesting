class EditPorfilePage {
    visit(){
        cy.visit('/customer/account/edit/')

    }

    verifySuccessAccessEditAccountPage(){
        cy.url().should('include', 'customer/account/edit/')
        cy.get('.page-title-wrapper .page-title .base')
        .should('be.visible')
        .and('have.text', 'Edit Account Information')
    }

    isAccountInformationSidebarActive(){
        return cy.get('.content.block-collapsible-nav-content')
        .contains('Account Information')
        .parent()
        .should('have.class', 'current');
    }



}
export default EditPorfilePage