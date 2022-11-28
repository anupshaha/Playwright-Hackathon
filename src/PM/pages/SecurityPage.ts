import { FrameLocator, Locator, Page } from "@playwright/test";

export default class SecurityPage {

    private page: Page;
    private addUserBtn: Locator;
    private mainframe: FrameLocator;
    private internalframe: FrameLocator;
    private page1: Page;
    private usernameTxt: Locator;
    private fullnameTxt: Locator;
    private firstnameTxt: Locator;
    private lastnameTxt: Locator;
    private emailTxt: Locator;
    private passwordTxt: Locator;
    private confirmPasswordTxt: Locator;
    private finishBtn: Locator;
    private closeBtn: Locator;
    private subHeaderLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.mainframe = page.frameLocator(`frame[name="content"]`);
        this.internalframe = this.mainframe.frameLocator(`iframe[name="inframe"]`);
        this.addUserBtn = this.internalframe.getByRole(`button`, { name: `Add User` });
    }

    private async switchToAddUserPopUp() {
        [this.page1] = await Promise.all([
            this.page.waitForEvent(`popup`),
            this.addUserBtn.click()
        ]);
    }

    public async addUser(options: { username: string, fullname: string, password: string, firstname?: string, lastname?: string, email?: string }) {
        await this.switchToAddUserPopUp();

        this.usernameTxt = this.page1.locator(`input[name="userName"]`);
        this.fullnameTxt = this.page1.locator(`input[name="fullName"]`);
        this.firstnameTxt = this.page1.locator(`input[name="firstName"]`);
        this.lastnameTxt = this.page1.locator(`input[name="lastName"]`);
        this.emailTxt = this.page1.locator(`input[name="email"]`);
        this.passwordTxt = this.page1.locator(`input[name="password"]`);
        this.confirmPasswordTxt = this.page1.locator(`input[name="passwordConfirm"]`);
        this.finishBtn = this.page1.getByRole(`button`, { name: `Finish >` });
        this.closeBtn = this.page1.getByRole(`button`, { name: `close` });


        if (options.username) {
            await this.usernameTxt.waitFor({ state: `attached` });
            await this.usernameTxt.fill(options.username);
        }
        if (options.fullname) {
            await this.usernameTxt.waitFor({ state: `attached` });
            await this.fullnameTxt.fill(options.fullname);
        }

        if (options.firstname) {
            await this.firstnameTxt.fill(options.firstname);
        }

        if (options.lastname) {
            await this.lastnameTxt.fill(options.lastname);
        }

        if (options.email) {
            await this.emailTxt.fill(options.email);
        }

        if (options.password) {
            await this.usernameTxt.waitFor({ state: `attached` });
            await this.passwordTxt.fill(options.password);
            await this.confirmPasswordTxt.fill(options.password);
        }
        await this.finishBtn.click();
        await this.closeBtn.click();
    }

    public async getUserRowFromTable(username: string) {
        await this.internalframe.locator(`table.tableLists`).waitFor({ state: `attached` });
        const table = await this.internalframe.locator(`table.tableLists`);
        return await table.getByRole(`cell`, { name: username }).first();
    }

    public async searchUser(username: string) {
        await this.internalframe.locator(`input[name="keyword"]`).waitFor({ state: `attached` });
        await this.internalframe.locator(`input[name="keyword"]`).fill(username);
        await this.internalframe.getByRole(`button`, { name: `Filter` }).click();
    }


}