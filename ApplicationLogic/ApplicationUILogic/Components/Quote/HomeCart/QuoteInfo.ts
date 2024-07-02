import {BaseApplicationPage} from "../../../Pages/BaseApplicationPage"; 

export class QuoteInfo extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="quote-info-section"]'), 
    };

    TextInfo = {
        DateCreated: this.Containers.MainContainer.locator('[id="dateCreated"]'),
        DateModified: this.Containers.MainContainer.locator('[id="dateModified"]'),
        //CartComment: this.Containers.MainContainer.locator('')
    };

    DropDowns = {
        Status: this.Containers.MainContainer.locator('[id="orderStatusLabelId"]'), 
        Market: this.Containers.MainContainer.locator('[id="marketsLabelId"]'), 
        Revisiom: this.Containers.MainContainer.locator('[id="quoteCustomDropdownMenu"]')
    };

    Buttons = {
        Calendar: this.Containers.MainContainer.locator('[title="Calendar"]'), 
        CreateNewRevision: this.Containers.MainContainer.locator('[title="Create new revision"]'), 
        RenameRevision: this.Containers.MainContainer.locator('[title="Rename revision"]'), 
        SaveRevision: this.Containers.MainContainer.locator('[title="Save Revision"]'), 
        CancelRevision: this.Containers.MainContainer.locator('[title="Cancel Revision"]'), 
        CollapseAndExpand: this.Containers.MainContainer.locator('[title="Collapse/Expand Section"]')
    }
}