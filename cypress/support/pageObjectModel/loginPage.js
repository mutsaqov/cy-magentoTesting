class LoginPage{
    visit() {
        cy.visit('/customer/account/login/')
    }

    fillLoginForm(username, password){
        cy.get('input[id="email"]').type(username)
        cy.get('input[id="pass"]').type(password)
    }

    submitLoginForm(){
        cy.get('button[id="send2"]').click()
    }

    loginWithValidCredentials() {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        this.visit()
        this.fillLoginForm(username, password)
        this.submitLoginForm()
    }
}

export default LoginPage

