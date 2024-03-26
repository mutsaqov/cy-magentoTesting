import loginPage from "../../support/pageObjectModel/loginPage";


describe('Login Page Test Cases', () => {
    const LoginPage = new loginPage()
        
    beforeEach(() => {
        LoginPage.visit()
    })


    it('Success Valid Login', () => {
        const{ email, password } = Cypress.env('validLoginData')
        LoginPage.fillLoginFormUsername(email)
        LoginPage.fillLoginFormPassword(password)
        LoginPage.submitLoginForm()
        cy.url().should('include', '/customer/account/')
        cy.wait(2500)
    });


    it('Forgot Password button success hit', () => {
        LoginPage.onclickForgotPassword()
        cy.wait(2500)
    });

    it('Create an Account button success hit', () => {
        LoginPage.onClickCreateAccount()
        cy.wait(2500)
    });
    

    it('[Negative] Hit Login Button without Input all required fields', () => {
        LoginPage.submitLoginForm()
        LoginPage.verifyToasterMessageWhenFieldEmpty()
        cy.wait(3000)
    });


    it('[Negative] Invalid Login Account/Account is not exists', () => {
        const { email,password } = Cypress.env('invalidLoginData')
        LoginPage.fillLoginFormUsername(email)
        LoginPage.fillLoginFormPassword(password)
        LoginPage.submitLoginForm()
        LoginPage.getInvalidAccountErrorMessage()
    });
    

    it('[Negative] Hit Login Button without Input all required fields', () => {
        LoginPage.submitLoginForm()
        LoginPage.getEmptyEmailErrorMessage().should('be.visible').and('contain','This is a required field.')
        LoginPage.getEmptyPasswordErrorMessage().should('be.visible').and('contain','This is a required field.')
        cy.wait(3000)
    });



    it('[Negative] Hit Login Button without input email fields', () => {
        const { email } = Cypress.env('validLoginData')
        LoginPage.fillLoginFormUsername(email)
        LoginPage.submitLoginForm()
        LoginPage.getEmptyPasswordErrorMessage()
        cy.wait(3000)
    });


    it('[Negative] Hit Login Button without input password fields', () => {
        const { password } = Cypress.env('validLoginData')
        cy.intercept('POST', '/customer/account/login/').as('loginRequest')
        LoginPage.fillLoginFormPassword(password)
        LoginPage.submitLoginForm()
        
        LoginPage.getEmptyEmailErrorMessage()
        cy.wait('@loginRequest')
        cy.wait(3000)
    });

});
