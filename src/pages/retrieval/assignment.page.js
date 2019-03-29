"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Assignment_Page {
    get assignmentTitle() { return $('div.bold'); }
    get assignAddressesButton() { return $('app-button.ng-star-inserted:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)'); }
    get retrievalAddressesList() { return $$('tr.ui-selectable-row'); }
    open() {
        browser.url('/retrieval/assignment');
        this.assignmentTitle.waitForVisible(60000);
    }
    assignAID(fileName) {
        browser.pause(1000);
        for (let i = 0; i < this.retrievalAddressesList.length; i++) {
            if (this.retrievalAddressesList[i].element('td:nth-child(2)').getText() === fileName) {
                this.retrievalAddressesList[i].element('td:nth-child(19) > app-button:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)').click();
                this.assignAddressesButton.click();
            }
        }
    }
    getAIDAssignedTo(fileName) {
        for (let i = 0; i < this.retrievalAddressesList.length; i++) {
            if (this.retrievalAddressesList[i].element('td:nth-child(2)').getText() === fileName) {
                return this.retrievalAddressesList[i].element('td:nth-child(17) > span:nth-child(2)').getText().toLowerCase();
            }
        }
    }
}
const AssignmentPage = new Assignment_Page();
exports.default = AssignmentPage;
