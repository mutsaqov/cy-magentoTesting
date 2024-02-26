const {defineConfig } = require("cypress")


module.exports = {
  e2e: {
    // supportFile: 'cypress/support/pageObjectModel',
     baseUrl:"https://magento.softwaretestingboard.com/",
     setupNodeEvents(on, config) {
       // implement node event listeners here
 
     },

  env:{
    
    validLoginData:{
      email: 'pencarikutu12@gmail.com',
      password: 'Chyper007',
      firstName: 'Pencari',
      lastName: 'Kutu'
    },

    invalidLoginData:{
      email: 'akuntester777@gmail.com',
      password: 'Asdf1234!'
    },

    editAccountInformationData:{
      firstName: 'Tester',
      lastName: 'Joss',
      email: 'cruserativ26@gmail.com',
      currentPassword: 'Chyper007',
      newPassword: 'Manusia007!',
      confirmPassword: 'Chyper007'
    },

    registrationData:{
      firstName: 'Manusia',
      lastName: 'Biasa',
      email: 'manusiabiasa12@gmail.com',
      password: 'Chyper007',
      confirmPassword : 'Chyper007'
    },

    accountAlreadyExist:{ 
      firstName: 'Pencari',
      lastName: 'Kutu',
      email: 'pencarikutu10@gmail.com',
      password: 'Chyper007',
      confirmPassword : 'Chyper007'
    },

    invalidEmailFormat: {
      firstName: 'Pencari',
      lastName: 'Kutu',
      email: 'naumovaia15com',
      password: 'Chyper007',
      confirmPassword : 'Chyper007'
    },

    invalidPasswordLength: {
      firstName: 'Pencari',
      lastName: 'Kutu',
      email: 'pencarikutu10@gmail.com',
      password: 'asdf121',
      confirmPassword : 'asdf121'
    },

    invalidPasswordFormat: {
      firstName: 'Pencari',
      lastName: 'Kutu',
      email: 'pencarikutu10@gmail.com',
      password: 'asdf1234'
    },

    confirmPasswordNotMatch: {
      firstName: 'Pencari',
      lastName: 'Kutu',
      email: 'pencarikutu10@gmail.com',
      password: 'Chyper007',
      confirmPassword : 'Pods4567'
    },

    weakPasswordChecker:{
      firstName: 'Pencari',
      lastName: 'Kutu',
      email: 'pencarikutu10@gmail.com',
      password: 'Asdf1234',
      confirmPassword : 'Asdf1234'
    },

    mediumPasswordChecker:{
      firstName: 'Pencari',
      lastName: 'Kutu',
      email: 'pencarikutu10@gmail.com',
      password: 'aSDf1234',
      confirmPassword : 'aSDf1234'
    },

    strongPasswordChecker:{
      firstName: 'Pencari',
      lastName: 'Kutu',
      email: 'pencarikutu10@gmail.com',
      password: 'Asdf1234!',
      confirmPassword : 'Asdf1234!'
    },

    veryStrongPasswordChecker:{
      firstName: 'Pencari',
      lastName: 'Kutu',
      email: 'pencarikutu10@gmail.com',
      password: 'Asdf1234@Test',
      confirmPassword : 'Asdf1234@Test'
    }

  },
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 30000,

  },
};
