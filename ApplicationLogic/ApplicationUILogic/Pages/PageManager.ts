import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { CategoriesDetails } from "../Components/Categories/CategoriesDetails";
import { MainCatalog } from "../Components/Home/MainCatalog";
import { ConfiguratorCommon } from "../Components/Configurator/ConfiguratorCommon";
import { ASUS_Zan } from "../Components/Configurator/Products/ASUS_Zan";
import { QuoteInfo } from "../Components/Quote/HomeCart/QuoteInfo";
import { Products } from "../Components/Quote/HomeCart/Products";

export class PageManager {
    page: Page;
    loginPage;
    baseApplicationPage;
    categoriesDetails;
    mainCatalog;
    configuratorCommon;
    ASUS_Zan;
    quoteInfo;
    products;

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.categoriesDetails = new CategoriesDetails(page);
        this.configuratorCommon = new ConfiguratorCommon(page);
        this.ASUS_Zan = new ASUS_Zan(page);
        this.mainCatalog = new MainCatalog(page);
        this.quoteInfo = new QuoteInfo(page);
        this.products = new Products(page);
    };
};