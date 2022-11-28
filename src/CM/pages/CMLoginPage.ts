import { Locator, Page } from "@playwright/test";

export default class CMLoginPage {

    private usernameTxtBox: Locator;
    private passwordTxtBox: Locator;
    private logInBtn: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.usernameTxtBox = page.getByPlaceholder(`Enter Email`);
        this.passwordTxtBox = page.getByPlaceholder(`Enter Password`);
        this.logInBtn = page.getByRole(`button`, { name: `Log In` });
    }

    public async visit(url: string){
        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded');
    }

    public async login(options?:{username?: string, password?: string}){
        if(options.username){
            await this.usernameTxtBox.waitFor();
            await this.usernameTxtBox.fill(options.username);
        }
        if(options.password){
            await this.passwordTxtBox.waitFor();
            await this.passwordTxtBox.fill(options.password);
        }
        await this.logInBtn.click();
        await this.page.waitForLoadState();
    }

}