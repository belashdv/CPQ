import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { CategoriesDetails } from "../Components/Categories/CategoriesDetails";
import { MainCatalog } from "../Components/Home/MainCatalog";
import { ConfiguratorCommon } from "../Components/Configurator/ConfiguratorCommon";
import { ASUS_Zan } from "../Components/Configurator/Products/ASUS_Zan";
import { QuoteHeader } from "../Components/Quote/QuoteHeader";
import { QuoteInfo } from "../Components/Quote/HomeCart/QuoteInfo";
import { Products } from "../Components/Quote/HomeCart/Products";
import { Totals } from "../Components/Quote/HomeCart/Totals";
import { TotalSummary } from "../Components/Quote/HomeCart/TotalSummary";

export class PageManager {
    page: Page;
    loginPage;
    baseApplicationPage;
    categoriesDetails;
    mainCatalog;
    configuratorCommon;
    ASUS_Zan;
    quoteHeader;
    quoteInfo;
    products;
    totals;
    totalSummary;

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.categoriesDetails = new CategoriesDetails(page);
        this.configuratorCommon = new ConfiguratorCommon(page);
        this.ASUS_Zan = new ASUS_Zan(page);
        this.mainCatalog = new MainCatalog(page);
        this.quoteHeader = new QuoteHeader(page);
        this.quoteInfo = new QuoteInfo(page);
        this.products = new Products(page);
        this.totals = new Totals(page);
        this.totalSummary = new TotalSummary(page);
    };
};