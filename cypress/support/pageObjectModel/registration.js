class RegistrationPage {
    visit() {
        cy.visit('/customer/account/create/')
    }
    
    fillForm(fName, lName, email, password, conPassword){
        cy.get('input[id="firstname"]').type(fName)
        cy.get('input[id="lastname"]').type(lName)
        cy.get('input[id="email_address"]').type(email)
        cy.get('input[id="password"]').eq(0).type(password)
        cy.get('input[id="password-confirmation"]').eq(0).type(conPassword)   
    }
    //Success Statement
    createAccountOnClick() {
        cy.get('button[type="submit"]').eq(1).click()

    }
    verifySuccessRegistration(){
       cy.url().should('include', '/customer/account/')
       cy.contains('My Account').should('be.visible')
    }

    verifySuccessMessage(){
        cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
    }

    //Failed/error statement
    getInvalidEmailFormat(){
        return cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).')
    }

    getInvalidLengthPasswordFormat(){
        return cy.contains('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    }

    getInvalidConfirmPassword(){
        return cy.contains('Please enter the same value again.')
    }

    getFnameEmptyMessage(){
        return cy.contains('This is a required field.')
    }

    getLnameEmptyMessage(){
        return cy.contains('This is a required field.')
    }

    getEmailEmptyMessage(){
        return cy.contains('This is a required field.')
    }

    getPasswordEmptyMessage(){
        return cy.contains('This is a required field.')
    }

    getConPasswordEmptyMessage(){
        return cy.contains('This is a required field.')
    }

    getAccountAreRegistered(){
        return cy.contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    }
}

export default RegistrationPage;
