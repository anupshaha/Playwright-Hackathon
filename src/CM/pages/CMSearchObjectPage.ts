/* This class is created to search the object like API,APP,Comments etc.*/
import { Locator, Page } from "@playwright/test";

export default class CMSearchObjectPage{
    private page : Page;
    private object_type : Locator;
    private keyward_to_search : Locator;
    private Search : Locator;
    private object_link : Locator;
    private searchNotFound: Locator;

    constructor(page: Page) {
        this.page = page;
        this.object_type = page.locator('#collection_options_type');
        this.keyward_to_search = page.getByRole('textbox', { name: 'Enter search keywords' });
        this.Search = page.getByRole('button', { name: ' Search' });
        this.object_link = page.locator('.collection_item_title');
        this.searchNotFound = page.locator(`div.collection_item_container`);
    }

    public async searchObject(object : string, search_keywaord : string){
        /* This method is used to search the object like API, APP,Ticket,Comments,Documents etc.
        Object - type of object you want to serach, i.e. is API
        search_keywaord - object name to search, i.e. swagger_petstore
        if search returns multiple object, it will click on 1st item in the searched list
        */
        //await this.object_type.selectOption(object);
        await this.keyward_to_search.click();
        await this.keyward_to_search.type(search_keywaord,{delay:100});
        await this.Search.click();
        if((await this.searchNotFound.innerText()).startsWith(`No search results found`)){
            await this.keyward_to_search.click();
            await this.Search.click();
        }
        await this.object_link.click();
    }
}