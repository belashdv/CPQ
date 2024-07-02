import {expect} from '@playwright/test'; 
import {test} from '../BaseTest'
import { Url, Data } from '../../Utils/Url';
import Log from '../../Utils/Logger';
var mydate = require('current-date');

test.describe('Configurator tests. @Configurator', () => {
    test.beforeEach(async ({pageManager}) => {
        //BaseTest.setFeatureSuite.configurator();

        Log.preStep('Open the page.');
        await pageManager.page.goto(Url.CPQUrl);

        Log.preStep('Enter credentials.');
        await pageManager.loginPage.LogIn(Data.login, Data.password); 
    });
    test('Choose QA dropdown and choose QA:Laptops. @Configurator', async ({pageManager}) => {
        Log.step('1. Select Category "QA: Hardware".');
        await pageManager.categoriesDetails.SelectNecessarySubCategory('QA: Hardware', 'QA:Laptops');

        Log.step('2. Select "ASUS_Zan" laptop and click on "Configure" button.');
        await pageManager.mainCatalog.ClickOnButtons.Configure('ASUS');

        Log.step('3. Select "HD150" hard drive and "DVD12X" optical drive');
        await pageManager.ASUS_Zan.ChooseAttributes.HardDrive('HD150');
        await pageManager.ASUS_Zan.ChooseAttributes.OpticalDrive('DVD12X');

        Log.step('4. Click on "Add to quote" button');
        await pageManager.configuratorCommon.Buttons.AddToQuote.click();

        Log.step('5. Choose "VN Preparing" from "Status" dropdown');
        await pageManager.quoteInfo.DropDowns.Status.selectOption({ label: 'VN Preparing'});

        Log.step('6. Check if Date Modified equal current date');
        const dateModified = pageManager.quoteInfo.TextInfo.DateModified.innerText();
        await expect(dateModified).toBe(mydate());

        await pageManager.page.pause();
    });
});
