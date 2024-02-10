//Checking Access Registration page via homepage

class homePage {
    visit() {
        cy.visit('/')
    }
    
    clickRegisterLink() {
        cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/create/"]').eq(0).click()
        //verifikasi navigasi ke halaman registrasi
        cy.url().should('include', '/customer/account/create/')
    }
}

export default homePage