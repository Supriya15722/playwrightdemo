export class LoginPage
{
    constructor(page)
    {
        this.page= page;
        this.userName= page.locator("#user-name");
        this.password= page.locator("#password");
        this.loginButton= page.locator("#login-button");
        this.errMessageLocator= page.locator("h3");
    }


        async enterUserNamePass(username,password)
    {
        await this.userName.fill(username);
        await this.password.fill(password);

    }


        async loginMethod()
    {
        await this.loginButton.click();
        
    }
    
        async getLoginErrMsg()
        {
            //const errorSms= await this.errMessage.textContect();
            const errorSms= await this.errMessageLocator.textContent();
            return errorSms;
        }
}