import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class TotalSummary extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="product-types-section"]')
    }; 

    Buttons = {
        CollapseAndExpand: this.Containers.MainContainer.locator('[title="Collapse/Expand Section"]'), 
        
    };

    Fields = {
        totalExtendedAmount: this.Containers.MainContainer.locator('.totals-summary-cell'),
    };
}