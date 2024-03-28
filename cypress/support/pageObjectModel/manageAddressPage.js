class ManageAddressPage {
    visit(){
        cy.visit('/customer/address/new/')

    }

    verifySuccessAccessAddNewAddressPage(){
        cy.url().should('include', 'customer/address/new/')
        cy.get('.page-title-wrapper .page-title .base')
        .should('be.visible')
        .and('have.text', 'Add New Address')
    }

    /*
    verifySidebarMenuAddressBook(){
        cy.get('.content.block-collapsible-nav-content').contains('Address Book').should('be.visible')
    }
*/

isAccountInformationSidebarActive(){
    return cy.get('.content.block-collapsible-nav-content')
    .contains('Address Book')
    .parent()
    .should('have.class', 'current');
}

}
export default ManageAddressPage