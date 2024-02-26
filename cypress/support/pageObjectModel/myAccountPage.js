class MyAccountPage {
    visit(){
        cy.visit('/customer/account/')
    }

    clickEditAccountInformation() {
        cy.get('div.box-actions a.action.edit').click()
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