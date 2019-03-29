"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChaseQuery_Page {
    get chaseQueryTitle() { return $('div.bold'); }
    get chaseQueryFiltersList() { return $$('li.ui-state-default'); }
    get chaseIdFilterInput() { return $('#ChaseIdAndClientChaseKey'); }
    get updateFilterButton() { return $('.ui-dialog-footer > p-footer:nth-child(1) > footer:nth-child(1) > app-button:nth-child(2) > p-button:nth-child(1) > button:nth-child(1)'); }
    get chaseQuerySearchResults() { return $$('tr.ui-selectable-row'); }
    get measureCodesList() { return $$('#MeasuresCodes > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li'); }
    get assignToDropdownButton() { return $('button.ng-tns-c42-19'); }
    get assignToDropdownList() { return $$('.ui-autocomplete-items > li'); }
    get memberKeyFilterInput() { return $('#MemberSourceAliasID'); }
    get aidFilterInput() { return $('#AddressId'); }
    get pendCodesList() { return $$('#PendCodes > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li'); }
    open() {
        browser.url('/project/chasequery/hedis');
        this.chaseQueryTitle.waitForVisible(60000);
    }
    chooseFilter(filter, filterText) {
        browser.pause(1000);
        for (let i = 0; i < this.chaseQueryFiltersList.length; i++) {
            if (this.chaseQueryFiltersList[i].getText() == filter) {
                this.chaseQueryFiltersList[i].click();
            }
        }
        if (filter == 'Chase ID / Client Chase Key') {
            this.chaseIdFilterInput.setValue(filterText);
        }
        else if (filter == 'Measures') {
            for (let i = 0; i < this.measureCodesList.length; i++) {
                if (this.measureCodesList[i].getText() == filterText) {
                    this.measureCodesList[i].click();
                }
            }
        }
        else if (filter == 'Assigned To') {
            this.assignToDropdownButton.click();
            browser.pause(2000);
            for (let i = 0; i < this.assignToDropdownList.length; i++) {
                if (this.assignToDropdownList[i].getText() == filterText) {
                    this.assignToDropdownList[i].click();
                    browser.pause(10000);
                }
            }
        }
        else if (filter == 'Member') {
            this.memberKeyFilterInput.setValue(filterText);
        }
        else if (filter == 'Address') {
            this.aidFilterInput.setValue(filterText);
        }
        else if (filter == 'Pend Codes') {
            for (let i = 0; i < this.pendCodesList.length; i++) {
                if (this.pendCodesList[i].getText() == filterText) {
                    this.pendCodesList[i].click();
                }
            }
        }
    }
    clickUpdateFilterButton() {
        this.updateFilterButton.click();
    }
    getResults() {
        for (let i = 0; i < this.chaseQuerySearchResults.length; i++) {
            return this.chaseQuerySearchResults[i].element('td:nth-child(2)').getText();
        }
    }
    doResultsMatch(tdNumber, expectedValue) {
        for (let i = 0; i < this.chaseQuerySearchResults.length; i++) {
            if (this.chaseQuerySearchResults[i].element('td:nth-child(' + tdNumber + ')').getText() == expectedValue) {
                return true;
            }
        }
    }
}
const ChaseQueryPage = new ChaseQuery_Page();
exports.default = ChaseQueryPage;
