import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class QuoteHeader extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        CartHeaderContainer: this.page.locator('[class*="cart-header-"]'), 
        CartTabsContainer: this.page.locator('[id="cartTabsContainer"]'),
    }; 

    Elements = {
        QuoteNumber: this.Containers.CartHeaderContainer.locator('[data-bind*="Data.title"]'),
    }

    Buttons = {
        CheckOut: this.Containers.CartHeaderContainer.locator('[role="button"]').locator('"CheckOut"'), 
        AddItem: this.Containers.CartHeaderContainer.locator('[role="button"]').locator('"Add Item"'), 
        Reprice: this.Containers.CartHeaderContainer.locator('[role="button"]').locator('"Reprice"'),
        CustomerComments: this.Containers.CartHeaderContainer.locator('[id="customerComments"]'),         // there is a modal window 
        InvolvedParties: this.Containers.CartTabsContainer.locator('[class="cartTab"]').locator('"Involved Parties"'), 
        ShippingInfo: this.Containers.CartTabsContainer.locator('[class="cartTab"]').locator('"Shipping info"'), 
        SolutionDesign: this.Containers.CartTabsContainer.locator('[class="cartTab"]').locator('"Solution Design"'), 
        EPRSettings: this.Containers.CartTabsContainer.locator('[class="cartTab"]').locator('"EPR Settings"'), 
    }; 

    DropDowns = {
        // ActionDropDown
    };


}