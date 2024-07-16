import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";


export class ASUS_Zan extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="attributesContainer"]'),
    }; 

    ChooseAttributes = {
        Attribute: async (param: string) => await this.page.locator(`//span[contains(.,"${param}")]/preceding-sibling::input//parent::*/parent::*`).click(), 
    };
};