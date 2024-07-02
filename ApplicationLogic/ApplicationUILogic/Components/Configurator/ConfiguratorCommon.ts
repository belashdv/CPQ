import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class ConfiguratorCommon extends BaseApplicationPage {
    constructor(page) {
        super(page);
    };

    Containers = {
        MainContainer: this.page.locator('[class*="configurator-section"]'), 
        SideSummaryContainer: this.page.locator('[id="mainResponderContainer"]')
    };

    Elements = {
        ProductName: this.Containers.MainContainer.locator('[class*="product-name"]'), 
        ProductStatusInfoLabel: this.Containers.MainContainer.locator('[class="info-label"]'), 
        PartNumber: this.Containers.SideSummaryContainer.locator('[data-bind*="partNumber"]'), 
        BasePrice: this.Containers.SideSummaryContainer.locator('[data-bind*="basePriceFormatted"]'), 
        Total: this.Containers.SideSummaryContainer.locator('[data-bind*="totalPrice"]')
    };

    Buttons = {
        AddToQuote: this.Containers.MainContainer.locator('"Add to Quote"'), 
        Reset: this.Containers.MainContainer.locator('"Reset"'), 
        ViewFavorites: this.Containers.MainContainer.locator('[title="View Favorites"]'), 
        AddToFavorites: this.Containers.MainContainer.locator('[title="Add To Favorites"]'), 
    };
};