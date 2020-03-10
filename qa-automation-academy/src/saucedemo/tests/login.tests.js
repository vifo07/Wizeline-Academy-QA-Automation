import LoginPage from '../pages/login.page';
import DashboardPage from '../pages/dashboard.page';
import ProductPage from '../pages/product.page';

const EMAIL='standard_user';
/*const PASSWORD=process.env.TODOIST_PASSWORD;*/
const PASSWORD="secret_sauce";
const INCORRECT_PASSWORD='saasdfasdf';

fixture('Login Tests').page('https://www.saucedemo.com/');

test('Login with a valid user',async t =>{

    await LoginPage.login(EMAIL,PASSWORD);
    await t.expect(await ProductPage.isProductPageLoaded()).ok();

});

test('Login with an invialid user',async t =>{

    
    await LoginPage.login(EMAIL,INCORRECT_PASSWORD);

    let errormessage = await LoginPage.getLoginErrorMessage();

    await t.expect(errormessage).contains('Username and password do not match any user in this service');
});








/*test('Wrong Email/Password handle succesful',async t=>{

    await LoginPage.login(EMAIL,INCORRECT_PASSWORD);

    let errormessage = await LoginPage.getLoginErrorMessage();

    await t.expect(errormessage).eql('Email o contraseña incorrectos');


});*/


