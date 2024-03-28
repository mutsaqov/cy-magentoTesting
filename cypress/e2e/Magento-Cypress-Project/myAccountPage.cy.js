import LoginPage from "../../support/pageObjectModel/loginPage";
import MyAccountPage from "../../support/pageObjectModel/myAccountPage";
import EditPorfilePage from "../../support/pageObjectModel/editProfilePage";
import ChangePassowrdPage from "../../support/pageObjectModel/changePasswordPage";
import ManageAddressPage from "../../support/pageObjectModel/manageAddressPage";
import EditAddressPage from "../../support/pageObjectModel/editAddressPage";

describe('My Account Accessing Test', () => {
    const loginPage = new LoginPage()
    const myAccountPage = new MyAccountPage()
    const editProfilePage = new EditPorfilePage()
    const changePasswordPage = new ChangePassowrdPage()
    const manageAddressPage = new ManageAddressPage()
    const editAddressPage = new EditAddressPage()

    beforeEach(() => {
        const{ email, password } = Cypress.env('validLoginData')
        loginPage.login(email, password)
        myAccountPage.visit()
        cy.wait(2000)
    })

    it('Edit Account Information success on click', () => {
        myAccountPage.clickEditAccountInformation()
        editProfilePage.verifySuccessAccessEditAccountPage()
        editProfilePage.isAccountInformationSidebarActive().should('exist')
        cy.wait(2500)
    })

    
    it('Change Password Success on click', () => {
        myAccountPage.clickChangePassword()
        changePasswordPage.verifySuccessAccessEditAccountPage()
        changePasswordPage.isAccountInformationSidebarActive().should('exist')
        changePasswordPage.getChangePasswordCheckboxStatus().should('be.checked')
        cy.wait(2500)
    });

    
    it('Manage Address Success on click', () => {
        myAccountPage.clickManageAddress()
        manageAddressPage.verifySuccessAccessAddNewAddressPage()
        manageAddressPage.isAccountInformationSidebarActive().should('exist')
        cy.wait(2500)
    });

    
    it('Edit Address Success on click', () => {
        myAccountPage.clickEditAddress()
        editAddressPage.verifySuccessAccessEditAddressPage()
        manageAddressPage.isAccountInformationSidebarActive().should('exist')
        cy.wait(2500)
    });

})
