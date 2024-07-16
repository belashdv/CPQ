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
        totalExtendedAmountOneTime: this.Containers.MainContainer.locator('[data-title="Extended Amount NRC"]').last(),
    };

    async getTotalExtendedAmount() {
        let amount = await this.Fields.totalExtendedAmountOneTime.innerText();
        return amount;
    }
}