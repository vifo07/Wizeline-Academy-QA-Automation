import LoginPage from '../pages/login.page';
import ProductPage from '../pages/product.page';
import YourCartPage from '../pages/yourcart.page';

const EMAIL="standard_user";
/*const PASSWORD=process.env.TODOIST_PASSWORD;*/
const PASSWORD="secret_sauce"
const INCORRECT_PASSWORD="saasdfasdf";
var productstoadd=2;
var productlist=[];
var firstname="Alejandro"
var lastname="Alvarado"
var postcode="15887"

fixture('Checkuout Purchase').page('https://www.saucedemo.com/');

test('Fill Users Info missing Firstname',async t =>{
    
    await LoginPage.login(EMAIL,PASSWORD);
    await ProductPage.addtoCart(productstoadd=2,productlist);
    await ProductPage.verifyAddToCart(productstoadd=2);
    await ProductPage.goToShoppingCartPage();
    await YourCartPage.checkoutClick();
    await YourCartPage.fillIncompleteUserInformation(lastname,postcode);
    await t.expect(await YourCartPage.errorInputRequiered()).contains('Error: First Name is required');

});

test('Fill Users Info and navigate to overview page',async t =>{
    await LoginPage.login(EMAIL,PASSWORD);
    await ProductPage.addtoCart(productstoadd=2,productlist);
    await t.expect( await ProductPage.verifyAddToCart(productstoadd=2)).ok();
    await ProductPage.goToShoppingCartPage();
    await YourCartPage.checkoutClick();
    await YourCartPage.fillUserInformation(firstname,lastname,postcode);
    await t.expect(await YourCartPage.verifyNavigateOverviewpage()).ok();
});

test('Final order items ',async t =>{
    productstoadd=2;
    await LoginPage.login(EMAIL,PASSWORD);
    let productlistr=await ProductPage.addtoCart(productstoadd,productlist);
    await ProductPage.verifyAddToCart(productstoadd);
    await ProductPage.goToShoppingCartPage();
    await YourCartPage.checkoutClick();
    await YourCartPage.fillUserInformation(firstname,lastname,postcode);
    let productlistcheckout=await YourCartPage.getAddedProducts(productstoadd);
    await t.expect(productlistr).eql(productlistcheckout);
});

test('Final order items ',async t =>{
    productstoadd=2;
    await LoginPage.login(EMAIL,PASSWORD);
    let productlistr=await ProductPage.addtoCart(productstoadd,productlist);
    await ProductPage.verifyAddToCart(productstoadd);
    await ProductPage.goToShoppingCartPage();
    await YourCartPage.checkoutClick();
    await YourCartPage.fillUserInformation(firstname,lastname,postcode);
    let productlistcheckout=await YourCartPage.getAddedProducts(productstoadd);
    await t.expect (await YourCartPage.completePurchase()).eql('THANK YOU FOR YOUR ORDER');
});




