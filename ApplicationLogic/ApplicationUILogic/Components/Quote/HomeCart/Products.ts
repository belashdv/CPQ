import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class Products extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="items-section"]')
    }; 

    Buttons = {
        QuickConfig: this.Containers.MainContainer.locator('[title="Quick Config"]'), 
        AddItemsInBulk: this.Containers.MainContainer.locator('[title="Add items in Bulk"]'), 
        BrowseCatalog: this.Containers.MainContainer.locator('[title="Browse Catalog"]'),
    }; 

    Fields = {
        AddItems: this.Containers.MainContainer.locator('[id="quickAddInput"]'),
        Item: this.Containers.MainContainer.locator(`//*[contains(@class,'item-column item-column-sticky new-quote-item-actions-sticky')]`)
    }
}