import RegistrationPage from "../../support/pageObjectModel/registration";

describe('Registration Page User Test', () => {
    const registrationPage = new RegistrationPage()

    beforeEach(() => {
        registrationPage.visit()
    })

    it('Register User with valid credentials (Positive Cases)', () => {
        registrationPage.fillForm('Pencari', 'Kutu', 'naumovaia15@metadownload.org', 'Asdf1234!', 'Asdf1234!')
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

    it('Show errors Message when account is already exist (Negative Cases)', () => {
        registrationPage.fillForm('Pencari', 'Kutu', 'naumovaia15@metadownload.org', 'Asdf1234!', 'Asdf1234!')
        registrationPage.createAccountOnClick()
        registrationPage.getAccountAreRegistered()
        cy.wait(4000)
    });


});
