"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Share_Page {
    get userDropdownButton() { return $('.ui-autocomplete-dropdown'); }
    get userDropdownList() { return $$('.ui-autocomplete-items > li'); }
    get userAssignButton() { return $('.header-button > p-button:nth-child(1) > button:nth-child(1)'); }
    selectRandomUser() {
        this.userDropdownButton.click();
        browser.pause(1000);
        let randomUserNumber = Math.floor(Math.random() * this.userDropdownList.length);
        browser.pause(1000);
        this.randomUser = this.userDropdownList[randomUserNumber].getText().toLowerCase().split(' ')[0];
        this.userDropdownList[randomUserNumber].click();
        browser.pause(1000);
        this.userAssignButton.click();
    }
    getRandomNumber() {
        this.randomNumber = Math.floor(Math.random() * 1000) + 1;
        return this.randomNumber;
    }
    doneLoading() {
        return browser.waitForVisible('.ui-table-loading-icon', 20000, true) && browser.waitForVisible('.loader', 20000, true);
    }
}
const SharePage = new Share_Page();
exports.default = SharePage;
