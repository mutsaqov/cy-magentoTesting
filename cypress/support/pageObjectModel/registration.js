class RegistrationPage {
    visit() {
        cy.visit('/customer/account/create/')
    }

    fillFirstName(fName){
        cy.get('input[id="firstname"]').type(fName)
    }

    fillLastName(lName){
        cy.get('input[id="lastname"]').type(lName)
    }

    fillEmail(email){
        cy.get('input[id="email_address"]').type(email)    
    }

    fillPassword(password){
        cy.get('input[id="password"]').eq(0).type(password)    
    }

    getPasswordScoreMeter(){
        return cy.get('.password-meter').invoke('attr','data-score')
    }

    fillConfirmPassword(conPassword){
        cy.get('input[id="password-confirmation"]').eq(0).type(conPassword)    
    }

    createAccountOnClick() {
       // cy.get('button[type="submit"]').removeAttr('disabled')
        cy.get('button[type="submit"]').eq(1).click()
       // cy.get('button[type="submit"]').should('not.be.disabled').click();

    }

    verifySuccessRegistration(){
       cy.url().should('include', '/customer/account/')
       cy.contains('My Account').should('be.visible')
    }

    verifySuccessMessage(){
        cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
    }

}

export default RegistrationPage;
