
import {Selector, t} from 'testcafe';

class ProductPage{
    constructor(){
      /*this.todoistIcon=Selector('svg[data-svgs-path="sm1/todoist_logo.svg"]');
        this.proyecto01=Selector('td[class="name"] > span');   
        this.addTask=Selector("a[class='action action_add_item']");
        this.inputTaskName=Selector("div[class='notranslate public-DraftEditor-content']");
        this.addtaskbutton=Selector("button[class='item_editor_submit ist_button ist_button_red']");
        this.createdTaskname=Selector("span[class='task_item_content_text']");*/
        this.productheader=Selector(".product_label");
        this.optionbutton=Selector(".bm-burger-button");
        this.logoutlink=Selector("#logout_sidebar_link");
        this.loginButton=Selector('[type=submit]');
        this.shoppingcartbutton=Selector("a[href='./cart.html']");
        this.shoppingcartpageheader=Selector(".subheader");
        this.allitemslink=Selector('#inventory_sidebar_link');
        this.addtocartbutton=Selector('.pricebar > button ').nth(0);
        this.shoppingcartcount=Selector("a[href='./cart.html'] > span");
        this.productlist=[];


    }


    async isProductPageLoaded(){

        return await this.productheader.exists; 
    }


    async logOut(){
        await t.click(this.optionbutton)
                .click(this.logoutlink);
        return await this.loginButton.exists;
    }

    async goToShoppingCartPage(){
        await t.click(this.shoppingcartbutton);
        return await this.shoppingcartpageheader.textContent;
   }

   async addtoCart(addtocartselection){
    var i;
    this.productlist=[];

    for (i = 0; i < addtocartselection; i++) {
      
        this.addtocartbutton=Selector('.pricebar > button ').nth(i);
        this.productname=Selector('.inventory_item_name').nth(i);
        let productnametext= await this.productname.textContent;
        this.productlist.push(productnametext)

        await t.click(this.addtocartbutton);
    }
    console.log(this.productlist);
    return this.productlist;


    
}



async verifyAddToCart(addtocartselection){
    let cartcount= await this.shoppingcartcount.textContent;
    if ((addtocartselection) == cartcount){
            return true;
    }
    else{

        return false;
    }


    
}








}

export default  new ProductPage();