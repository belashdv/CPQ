import { BasePage } from "../../BasePage";

export class BaseApplicationPage extends BasePage {
    constructor(page) {
        super(page)
    }; 

    MainContainers = {
        CategoriesContainer: this.page.locator('[id="categoryContainer"]'), 
        HomeContainer: this.page.locator('[class="catalog-content"]'), 
    }
}