import {Selector, t} from 'testcafe';


class YourCartPage{

    constructor(){

        this.checkoutbutton=Selector("[class='btn_action checkout_button']");
        this.checkoutfirstname=Selector('#first-name');
        this.checkoutlastname=Selector('#last-name');
        this.checkoutpostcodename=Selector('#postal-code');
        this.continuebutton=Selector("[class='btn_primary cart_button']");
        this.overviewheader=Selector('.subheader');
        this.finishbutton=Selector('a[href="./checkout-complete.html"]');
        this.confirmationheader=Selector('.complete-header');
        this.errormissinginput=Selector('[data-test="error"]');
        this.productlistcheckout=[];
        


    }
    

    async checkoutClick(){
        await t.click(this.checkoutbutton);
    }

    async fillUserInformation(firstname,lastname,postcode){

        await t.typeText(this.checkoutfirstname,firstname)
                .typeText(this.checkoutlastname,lastname)
                .typeText(this.checkoutpostcodename,postcode)
                .click(this.continuebutton);
    }

    async fillIncompleteUserInformation(lastname,postcode){

        await t.typeText(this.checkoutlastname,lastname)
                .typeText(this.checkoutpostcodename,postcode)
                .click(this.continuebutton);
    }
    async verifyNavigateOverviewpage(){
        return await this.overviewheader.exists;

    }
    async errorInputRequiered(){
        return await this.errormissinginput.textContent;

    }

    async getAddedProducts(addtocartselection){
        var i;
        this.productlistcheckout=[]

        for (i = 0; i < addtocartselection; i++) {
      
            this.productname=Selector('.inventory_item_name').nth(i);
            let productnametext= await this.productname.textContent;
            this.productlistcheckout.push(productnametext);
        }
    console.log(this.productlistcheckout);
    return this.productlistcheckout;
    }

    async completePurchase(){

        await t.click(this.finishbutton);
        return await this.confirmationheader.textContent;

    }

}
export default  new YourCartPage();
