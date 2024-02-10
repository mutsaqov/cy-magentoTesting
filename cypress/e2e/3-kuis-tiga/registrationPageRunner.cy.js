import RegistrationPage from "../../support/pageObjectModel/registration";
import homePage from "../../support/pageObjectModel/homePage";

describe('Registration Page User Test', () => {
    const registrationPage = new RegistrationPage()
    const HomePage = new homePage()

    beforeEach(() => {
        registrationPage.visit()
    })

    it('Fill the field without password strange checker', () => {
        registrationPage.fillFirstName('Pencari')
        registrationPage.fillLastName('Kutu')
        registrationPage.fillEmail('rewass@mineralenhanced.work')

        registrationPage.createAccountOnClick()
        registrationPage.verifySuccessMessage()
    });

    it('Fill password field with password strange checker', () => {
        registrationPage.fillPassword('Asdf1234')
        registrationPage.fillConfirmPassword('Asdf1234')
    });
});
