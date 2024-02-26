import RegistrationPage from "../../support/pageObjectModel/registration";

describe('Registration Page User Test', () => {
    const registrationPage = new RegistrationPage()


    beforeEach(() => {
        registrationPage.visit()
    })

     it('(Positive Cases) Register User with valid credentials', () => {
        const { firstName, lastName, email, password, confirmPassword } = Cypress.env('registrationData')
        registrationPage.fillRegistrationForm(firstName, lastName, email, password, confirmPassword)
        registrationPage.submitRegistration()
        registrationPage.verifySuccessMessage()
        
        cy.wait(4000)
    });

    it('Check Weak password strength and show the massage', () => {
        const { firstName, lastName, email, password, confirmPassword } = Cypress.env('weakPasswordChecker')
        registrationPage.fillRegistrationForm(firstName, lastName, email, password, confirmPassword)
        registrationPage.getPasswordStrangeMeter()
        registrationPage.getWeakPasswordMessage().should('be.visible')

        cy.wait(4000)
    });

    it('Check Medium password strength and show the massage', () => {
        const { firstName, lastName, email, password, confirmPassword } = Cypress.env('mediumPasswordChecker')
        registrationPage.fillRegistrationForm(firstName, lastName, email, password, confirmPassword)
        registrationPage.getPasswordStrangeMeter()
        registrationPage.getMediumPasswordMessage().should('be.visible')

        cy.wait(4000)
        
    });

    it('Check Strong password strength and show the massage', () => {
        const { firstName, lastName, email, password, confirmPassword } = Cypress.env('strongPasswordChecker')
        registrationPage.fillRegistrationForm(firstName, lastName, email, password, confirmPassword)
        registrationPage.getPasswordStrangeMeter()
       // registrationPage.getPasswordStrangeMeter().should('have.css', 'background-color', 'rgb(197, 238, 172)')
        registrationPage.getStrongPasswordMessage().should('be.visible')

        cy.wait(4000)
    });

    it('Check Very Strong password strength and show the massage', () => {
        const { firstName, lastName, email, password, confirmPassword } = Cypress.env('veryStrongPasswordChecker')
        registrationPage.fillRegistrationForm(firstName, lastName, email, password, confirmPassword)
        registrationPage.getPasswordStrangeMeter()
        registrationPage.getVeryStrongPasswordMessage().should('be.visible')
        
        cy.wait(4000)
    });

    it('(Negative Cases) Show errors Message when required fields Empty', () => {
        registrationPage.submitRegistration()

        registrationPage.getFnameEmptyMessage()
        registrationPage.getLnameEmptyMessage()
        registrationPage.getEmailEmptyMessage()
        registrationPage.getPasswordEmptyMessage()
        registrationPage.getConPasswordEmptyMessage()

        cy.wait(4000)

    });

    it('(Negative Cases) Show errors message when invalid enter email address', () => {
        const { firstName, lastName, email, password, confirmPassword } = Cypress.env('invalidEmailFormat')
        registrationPage.fillRegistrationForm(firstName, lastName, email, password, confirmPassword)
        registrationPage.submitRegistration()
        registrationPage.getInvalidEmailFormat()

        cy.wait (4000)
    });


    it('(Negative Cases) Show errors message when invalid length password format (under minimum 8 characters)', () => {
        const { firstName, lastName, email, password, confirmPassword } = Cypress.env('invalidPasswordLength')
        registrationPage.fillRegistrationForm(firstName, lastName, email, password, confirmPassword)
        registrationPage.getInvalidLengthPasswordFormat()
        
        cy.wait(4000)
    });

    it('(Negative Cases) Show error message when Confirmation Password is not match', () => {
        const { firstName, lastName, email, password, confirmPassword } = Cypress.env('confirmPasswordNotMatch')
        registrationPage.fillRegistrationForm(firstName, lastName, email, password, confirmPassword)
        registrationPage.submitRegistration()
        registrationPage.getInvalidConfirmPassword()
        
        cy.wait(4000)
    });


    it('(Negative Cases) Show errors Message when account is already exist', () => {
        const { firstName, lastName, email, password, confirmPassword } = Cypress.env('accountAlreadyExist')
        registrationPage.fillRegistrationForm(firstName, lastName, email, password, confirmPassword)
        registrationPage.submitRegistration()
        registrationPage.getAccountAreRegistered()

        cy.wait(4000)
    });
    
});
