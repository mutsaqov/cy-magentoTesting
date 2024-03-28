class MyAccountPage {
    visit(){
        cy.visit('/customer/account/')
    }

    verifySidebarMenuMyAccount(){
        cy.get('.content.block-collapsible-nav-content').contains('My Account').should('be.visible')
    }

    clickEditAccountInformation() {
        cy.get('.box-actions').contains('Edit').click()
    }

    clickChangePassword(){
        cy.get('.box-actions').contains('Change Password').click()
    }

    clickManageAddress(){
        cy.get(".block-title").contains('Manage Addresses').click()
    }

    clickEditAddress(){
        cy.get('.box-actions').contains('Edit Address').click()
    }

    getFirstName() {
        return cy.get('input[id="firstname"]')
    }

    getLastName() {
        return cy.get('input[id="lastname"]')
    }

    getEmail() {
        return cy.get('input[id="email"]')
    }

    fillCurrentPassword(){
        const currentPassword = Cypress.env('editAccountInformationData')
        cy.get('input[id="current-password"]').type(currentPassword)
    }

    editNewPassword(newPassword, confirmPassword){
       // const newPassword = Cypress.env('editAccountInformationData')
        cy.get('input[id="password"]').type(newPassword)
        cy.get('input[id="password-confirmation"]').type(confirmPassword)
    }
    
}

export default MyAccountPage