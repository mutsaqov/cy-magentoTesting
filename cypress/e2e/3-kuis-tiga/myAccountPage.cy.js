import LoginPage from "../../support/pageObjectModel/loginPage";
import MyAccountPage from "../../support/pageObjectModel/myAccountPage";

describe('My Account Accessing Test', () => {
    const loginPage = new LoginPage()
    const myAccountPage = new MyAccountPage()

    it('Should access my acc page after login', () => {
        loginPage.loginWithValidCredentials()

        myAccountPage.visit()
    });
})
