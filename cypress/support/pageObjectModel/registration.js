class RegistrationPage {
    visit() {
        cy.visit('/customer/account/create/')
    }

    fillRegistrationForm(firstName, lastName, email, password, confirmPassword) {
        cy.get('input[id="firstname"]').type(firstName)
        cy.get('input[id="lastname"]').type(lastName)
        cy.get('input[id="email_address"]').type(email)
        cy.get('input[id="password"]').eq(0).type(password)
        cy.get('input[id="password-confirmation"]').eq(0).type(confirmPassword)
    }

    submitRegistration(){
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

    getInvalidPasswordFormating(){
        return cy.contains('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
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


    //Strongest Password checker status
    getPasswordStrangeMeter(){
        return cy.get('#password-strength-meter')
    }

    getWeakPasswordMessage(){
        return cy.contains('.password-weak','Password Strength: Weak')
    }

    getMediumPasswordMessage(){
        return cy.contains('.password-medium','Password Strength: Medium')
    }

    getStrongPasswordMessage(){
        return cy.contains('.password-strong','Password Strength: Strong')
    }

    getVeryStrongPasswordMessage(){
        return cy.contains('.password-very-strong', 'Password Strength: Very Strong')
        
    }
}
export default RegistrationPage;
