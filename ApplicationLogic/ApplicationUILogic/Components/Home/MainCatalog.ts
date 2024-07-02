
import { Page } from "@playwright/test";
import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class MainCatalog extends BaseApplicationPage {
    constructor(page) {
        super(page)
    }; 

    Containers = {
        ContentContainer: this.MainContainers.HomeContainer.locator('[class*="catalog-products"]')
    }

    ProductCard = {
        ProductCardLocator: this.Containers.ContentContainer.locator('[class="product-box"]'), 
        ProductTitle: this.Containers.ContentContainer.locator('[class*="product-title "]'),
        Buttons: {
            Add: this.Containers.ContentContainer.locator('"Add"'), 
            Configure: this.Containers.ContentContainer.locator('"Configure"'),
            Compare: this.Containers.ContentContainer.locator('"Compare"'), 
            AddToFavorites: this.Containers.ContentContainer.locator('[title="Add To Favorites"]')
        }, 
        InputLines: {
            QuantityLine: this.Containers.ContentContainer.locator('[aria-label="Quantity"]')
        },
    };

    ClickOnButtons = {
        Add: async (productName: string) => await this.page.locator(`((((((//a[contains(text(), "${productName}")]//parent::*))[1]//parent::*))[1]/following-sibling::div))[6]//div[contains(@class, "input-group fiori3-input-group qty")]/button`).click(), 
        Configure: async (productName: string) => this.page.locator(`((((((//a[contains(text(), "${productName}")]//parent::*))[1]//parent::*))[1]/following-sibling::div))[6]//div[contains(@class, "config-button")]`).click(),
        Compare: async (productName: string) => this.page.locator(`((((//a[contains(text(), "${productName}")]//parent::*))[1]/parent::*/following-sibling::div[contains(@class, "compare-quantity")]//span))[1]`).click(),
        Favorites: async (productName: string) => this.page.locator(`((//a[contains(text(), "${productName}")]//parent::*))[1]/parent::*/parent::*/span/a`).click(),
    };
}
