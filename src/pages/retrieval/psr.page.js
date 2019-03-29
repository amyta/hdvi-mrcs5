"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PSR_Page {
    get PSRTitle() { return $('div.bold'); }
    get platformAccountMenu() { return $('.account-menu > platform-account-menu'); }
    get platformAccountMenuList() { return $$('div.menu--item'); }
    get filterButton() { return $('.sorting-panel > app-button:nth-child(2) > p-button:nth-child(1) > button:nth-child(1)'); }
    get filterOptionsList() { return $$('li.ui-state-default'); }
    get filterInput() { return $('#Id'); }
    get updateFilterButton() { return $('.ui-dialog-footer > p-footer:nth-child(1) > footer:nth-child(1) > app-button:nth-child(2) > p-button:nth-child(1) > button:nth-child(1)'); }
    get firstResult() { return $('a.ui-column-value'); }
    open() {
        browser.url('/retrieval/view/psr');
        this.PSRTitle.waitForVisible(60000);
    }
    filterById(id) {
        this.filterButton.click();
        this.filterInput.setValue(id);
        this.updateFilterButton.click();
    }
}
const PSRPage = new PSR_Page();
exports.default = PSRPage;
