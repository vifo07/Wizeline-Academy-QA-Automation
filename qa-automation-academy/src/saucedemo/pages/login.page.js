import {Selector, t} from 'testcafe';


class LoginPage {
    constructor(){

            /*this.loginLink =Selector('ul > li > a').withExactText('Iniciar sesión').nth(0);
            this.loginFrame=Selector('iframe[src*="showLogin"]');
            this.emailField=Selector('#email');
            this.passwordField=Selector('#password');
            this.loginButton=Selector('.submit_btn');
            this.loginerror=Selector('.error_msg > span');*/


            this.logininput=Selector('#user-name');
            this.passwordinput=Selector('#password');
            this.loginButton=Selector('[type=submit]');
            this.loginerror=Selector('[data-test=error]');
            this.optionbutton=Selector(".bm-burger-button");
            this.logoutlink=Selector("#logout_sidebar_link");
            this.productheader=Selector(".product_label");
            this.shoppingcartbutton=Selector("a[href='./cart.html']");
            this.shoppingcartpageheader=Selector(".subheader");
            this.allitemslink=Selector('#inventory_sidebar_link');




           



    }

    async login (email,password){

         /*await t.click(this.loginLink)
            .switchToIframe(this.loginFrame)
            .typeText(this.emailField,email)
            .typeText(this.passwordField,password)
            .click(this.loginButton)
            .switchToMainWindow();*/

        await t.typeText(this.logininput,email)
                .typeText(this.passwordinput,password)
                .click(this.loginButton);
    }

    async getLoginErrorMessage(){

        /*await t.switchToIframe(this.loginFrame);
        let errortext= await this.loginerror.textContent;
        await t.switchToMainWindow();
        return errortext;*/
        let errortext= await this.loginerror.textContent;
        return errortext;

    }

    



   



}

export default new LoginPage();
