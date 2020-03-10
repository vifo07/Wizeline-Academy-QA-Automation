import LoginPage from '../pages/login.page';
import ProductPage from '../pages/product.page';

const EMAIL="standard_user";
/*const PASSWORD=process.env.TODOIST_PASSWORD;*/
const PASSWORD="secret_sauce"
const INCORRECT_PASSWORD="saasdfasdf";
var productstoadd=1;
var productlist=[];

fixture('Product Tests').page('https://www.saucedemo.com/');

test('Logout from product’s page',async t =>{
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await ProductPage.logOut()).ok()
});

test('Navigate to the shopping cart',async t =>{
    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect( await ProductPage.goToShoppingCartPage).ok()
});


test('Add a single item to the shopping cart',async t =>{
    await LoginPage.login(EMAIL,PASSWORD);
    await ProductPage.addtoCart(productstoadd,productlist)
    await t.expect( await ProductPage.verifyAddToCart(productstoadd)).ok()
});

test('Add multiple items to the shopping cart',async t =>{
    await LoginPage.login(EMAIL,PASSWORD);
    await ProductPage.addtoCart(productstoadd=2,productlist)
    await t.expect( await ProductPage.verifyAddToCart(productstoadd=2)).ok()
});



/*test('Add single item to the cart'),async t =>{

    await 

}*/


/*test('Wrong Email/Password handle succesful',async t=>{

    await LoginPage.login(EMAIL,INCORRECT_PASSWORD);

    let errormessage = await LoginPage.getLoginErrorMessage();

    await t.expect(errormessage).eql('Email o contraseña incorrectos');


});*/