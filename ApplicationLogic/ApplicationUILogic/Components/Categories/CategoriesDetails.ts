import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class CategoriesDetails extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }

    Lines = {
        Favorites: this.MainContainers.CategoriesContainer.locator('"Favorites"')
    }

    Buttons = {
        CollapseAndExpandCategoryTree: this.MainContainers.CategoriesContainer.locator('[title="Collapse/Expand Category Tree"]')
    }

    async SelectNecessaryCategory(option: string) {
        await this.MainContainers.CategoriesContainer.locator(`"${option}"`).click();
    }

    async SelectNecessarySubCategory(category: string, subcategory: string) {   
        await this.page.locator(`//a[contains(text(), '${category}')]/preceding-sibling::*[2]`).click(); 
        await this.MainContainers.CategoriesContainer.locator(`"${subcategory}"`).click();
    }
}