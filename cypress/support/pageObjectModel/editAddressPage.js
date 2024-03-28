class EditAddressPage {
    visit(){
        cy.visit('/customer/address/edit/')

    }

    verifySuccessAccessEditAddressPage(){
        cy.url().should('include', '/customer/address/edit/')
        cy.get('.page-title-wrapper .page-title .base')
        .should('be.visible')
        .and('have.text', 'Add New Address')
    }

    verifySidebarMenuAddressBook(){
        cy.get('.content.block-collapsible-nav-content').contains('Address Book').should('be.visible')
    }


}
export default EditAddressPage