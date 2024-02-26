import LoginPage from "../../support/pageObjectModel/loginPage";
import MyAccountPage from "../../support/pageObjectModel/myAccountPage";
import EditPorfilePage from "../../support/pageObjectModel/editProfilePage";

describe('My Account Accessing Test', () => {
    const loginPage = new LoginPage()
    const myAccountPage = new MyAccountPage()
    const editProfilePage = new EditPorfilePage()

    before(() => {
        const { email, password } = Cypress.env('validLoginData')
        loginPage.visit()
        loginPage.fillLoginForm(email, password)
        loginPage.submitLoginForm()
    })
    it('Should access my acc page after login', () => {
        loginPage.verifySuccessAccessMyAccountPage()
        cy.wait(3000)

    });

    it('Edit Account Information success on click', () => {
        myAccountPage.visit()
        myAccountPage.clickEditAccountInformation()
        editProfilePage.verifySuccessAccessEditAccountPage()
        cy.wait(2000)
    })

})
