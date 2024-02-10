import homePage from "../../support/pageObjectModel/homePage";


describe('Access Register Page via Homepage Case', () => {
    const HomePage = new homePage()
    
    beforeEach(() => {
        HomePage.visit()
    })

    it('Click on Register text button in header from Home Page', () => {
        HomePage.clickRegisterLink()
    });
});
