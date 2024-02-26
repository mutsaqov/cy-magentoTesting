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


}
export default EditPorfilePage