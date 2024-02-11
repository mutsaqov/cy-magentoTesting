import RegistrationPage from "../../support/pageObjectModel/registration";

describe('Registration Page User Test', () => {
    const registrationPage = new RegistrationPage()

    beforeEach(() => {
        registrationPage.visit()
    })

    it('Register User with valid credentials (Positive Cases)', () => {
        registrationPage.fillForm('Pencari', 'Kutu', 'usersuperior12@metadownload.com', 'Asdf1234!', 'Asdf1234!')
        registrationPage.createAccountOnClick()
        registrationPage.verifySuccessMessage()
        cy.wait(4000)
    });

    it('Show errors Message when required fields Empty (Negative Cases)', () => {
        registrationPage.createAccountOnClick()

        registrationPage.getFnameEmptyMessage()
        registrationPage.getLnameEmptyMessage()
        registrationPage.getEmailEmptyMessage()
        registrationPage.getPasswordEmptyMessage()
        registrationPage.getConPasswordEmptyMessage()

        cy.wait(4000)

    });

    it('Check Weak password strength and show the massage', () => {
        registrationPage.fillForm(
            'Pencari', 
            'Kutu', 
            'usersuperior12@metadownload.com', 
            'Asdf1234',
            'Asdf1234')
        
        registrationPage.getPasswordStrangeMeter().should('have.css', 'background-color', 'rgb(244, 244, 244)')
        registrationPage.getWeakPasswordMessage().should('be.visible')
        cy.wait(4000)
    });

    it('Check Medium password strength and show the massage', () => {
        registrationPage.fillForm(
            'Pencari', 
            'Kutu', 
            'usersuperior12@metadownload.com', 
            'aSDf1234',
            'aSDf1234')
        
        registrationPage.getPasswordStrangeMeter().should('have.css', 'background-color', 'rgb(255, 214, 179)')
        registrationPage.getMediumPasswordMessage().should('be.visible')
        cy.wait(4000)
        
    });

    it('Check Strong password strength and show the massage', () => {
        registrationPage.fillForm(
            'Pencari', 
            'Kutu', 
            'usersuperior12@metadownload.com', 
            'Asdf1234!',
            'Asdf1234!')
        
        registrationPage.getPasswordStrangeMeter().should('have.css', 'background-color', 'rgb(197, 238, 172)')
        registrationPage.getStrongPasswordMessage().should('be.visible')
        cy.wait(4000)
    });

    it('Check Very Strong password strength and show the massage', () => {
        registrationPage.fillForm(
            'Pencari', 
            'Kutu', 
            'usersuperior12@metadownload.com', 
            'Asdf1234@Test',
            'Asdf1234@Test')
        
        registrationPage.getPasswordStrangeMeter().should('have.css', 'background-color', 'rgb(197, 238, 172)')
        registrationPage.getVeryStrongPasswordMessage().should('be.visible')
        cy.wait(4000)
    });


    it('Show errors message when invalid enter email address', () => {
        registrationPage.fillForm(
        'Pencari', 
        'Kutu', 
        'naumovaia15com', 
        'Asdf1234!', 
        'Asdf1234!')
        registrationPage.createAccountOnClick()
        registrationPage.getInvalidEmailFormat()

        cy.wait (4000)
    });

    it('Show errors message when invalid length password format (under minimum 8 characters)', () => {
        registrationPage.fillForm(
            'Pencari', 
            'Kutu', 
            'usersuperior12@metadownload.com', 
            'asdf121', 
            'asdf121')
            registrationPage.createAccountOnClick()
            registrationPage.getInvalidLengthPasswordFormat()
            cy.wait(4000)
    });

    it('Show error message when password format is invalid but already fulfills the condition of 8 characters', () => {
        registrationPage.fillForm(
            'Pencari', 
            'Kutu', 
            'usersuperior12@metadownload.com', 
            'asdf1234', 
            'asdf1234')
            registrationPage.createAccountOnClick()
            registrationPage.getInvalidPasswordFormating()
            cy.wait(4000)
    });

    it('Show error message when Confirmation Password is not match', () => {
        registrationPage.fillForm(
            'Pencari', 
            'Kutu', 
            'usersuperior12@metadownload.com', 
            'Asdf1234', 
            'Pods4567')
            registrationPage.createAccountOnClick()
            registrationPage.getInvalidConfirmPassword()
            cy.wait(4000)
    });



    it('Show errors Message when account is already exist (Negative Cases)', () => {
        registrationPage.fillForm('Pencari', 'Kutu', 'usersuperior12@metadownload.com', 'Asdf1234!', 'Asdf1234!')
        registrationPage.createAccountOnClick()
        registrationPage.getAccountAreRegistered()
        cy.wait(4000)
    });

});
