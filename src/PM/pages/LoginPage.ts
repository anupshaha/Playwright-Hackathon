import { Locator, Page } from "@playwright/test";

export default class LoginPage {

    private usernameTxtBox: Locator;
    private passwordTxtBox: Locator;
    private logInBtn: Locator;
    private page: Page;
    private loginFailedMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameTxtBox = page.getByPlaceholder(`Enter Username`);
        this.passwordTxtBox = page.getByPlaceholder(`Enter Password`);
        this.logInBtn = page.locator(`#soa-ui-cm-login-button`);
        //this.loginFailedMsg = page.locator("form[name='MS_LoginForm'] .soa-ui-cm-content-login-form h3.soa-ui-cm-error");
        //this.loginFailedMsg = page.locator("//font[contains(text(),'Failed to authenticate with username and password.')]");
        this.loginFailedMsg = page.getByRole(`heading`, { name: `Failed to authenticate with username and password..` });
    }

    public async visit(url: string){
        await this.page.goto(url);
        await this.page.waitForLoadState();
    }


    public async login(options?:{username?: string, password?: string}){
        if(options.username){
            await this.usernameTxtBox.waitFor({ state: `attached` });
            await this.usernameTxtBox.fill(options.username);
        }
        if(options.password){
            await this.passwordTxtBox.waitFor({ state: `attached` });
            await this.passwordTxtBox.fill(options.password);
        }
        await this.logInBtn.click();
    }

    public async loginFailedMessageTxt(){
        await this.loginFailedMsg.isVisible();
        return await this.loginFailedMsg;
    }
}