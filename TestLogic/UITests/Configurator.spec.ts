import {expect} from '@playwright/test'; 
import {test} from '../BaseTest'
import { Url, Data } from '../../Utils/Url';
import Log from '../../Utils/Logger';
import { HardDriveEnum, OpticalDrive, NotebookID } from '../../Data/Notebook.enum';
import { DropDownStatus } from '../../Data/Quote.enum';

test.describe('Configurator tests. @Configurator', () => {
   
    test('Choose QA dropdown and choose QA:Laptops. @Configurator', async ({pageManager}) => {
        Log.step('1. Select Category "QA: Hardware".');
        await pageManager.categoriesDetails.SelectNecessarySubCategory('QA: Hardware', 'QA:Laptops');

        Log.step('2. Select "ASUS_Zan" laptop and click on "Configure" button.');
        await pageManager.mainCatalog.ClickOnButtons.Configure('ASUS');

        Log.step('3. Select "HD150" hard drive and "DVD12X" optical drive');
        await pageManager.ASUS_Zan.ChooseAttributes.Attribute(HardDriveEnum.HD150);
        await pageManager.ASUS_Zan.ChooseAttributes.Attribute(OpticalDrive.DVD12X);
        await pageManager.page.waitForTimeout(1500);        //because playwright too fast
        let total = await pageManager.configuratorCommon.GetTotalPrice();
        Log.infoStep(`Total summ should be: ${total}`);

        Log.step('4. Click on "Add to quote" button');
        await pageManager.configuratorCommon.Buttons.AddToQuote.click();

        Log.step('5. Choose "VN Preparing" from "Status" dropdown');
        await pageManager.quoteInfo.DropDowns.Status.selectOption(DropDownStatus.VNPreparing);

        Log.step('6. Check if Date Modified equal current date');
        await expect(pageManager.quoteInfo.TextInfo.DateModified).toHaveText(todayDate());
        Log.infoStep(`Current date: ${todayDate()}`);

        Log.step('7. Check if chosen configurable product with options is in Products');
        // const isDisabled = await pageManager.products.Fields.Item.isDisabled();
        // if (!isDisabled) {
        // await expect(pageManager.products.Fields.Item).toHaveText('ASUL');
        // }
        await expect(pageManager.page.locator(`"${NotebookID.ASUL}"`).last()).toBeVisible(); 
        await expect(pageManager.page.locator(`"${OpticalDrive.DVD12X}"`).first()).toBeVisible(); 
    
        Log.step('8. Check if total sum is correct');
        let totalExtendedAmount = await pageManager.totalSummary.getTotalExtendedAmount(); 
        //await pageManager.page.pause();
        expect(totalExtendedAmount.toString().replace(/\s/g, '')).toBe(total);

        Log.step('9. Press "Save quote" button');
        //await pageManager.quoteHeader.Buttons.SaveQuote.click();
        await pageManager.page.locator('"Save Quote"').click();
    });
});







function todayDate() {
    let day = new Date().getDate().toString().padStart(2,'0');
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear().toString().slice(2, 4);
    return day+'/'+month.toString().padStart(2,'0')+'/'+year;
}