import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class Totals extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="totals-section"]')
    }; 

    Buttons = {
        CollapseAndExpand: this.Containers.MainContainer.locator('[title="Collapse/Expand Section"]'),
    };

    Fields = {
        Price: this.Containers.MainContainer.locator('[class="numberCell"] [data-bind*="text"]').last(), 
        Currency: this.Containers.MainContainer.locator('[data-bind*="currency"]')
    }
}