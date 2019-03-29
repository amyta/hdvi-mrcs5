"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocIntake_Page {
    get docIntakeTitle() { return $('.retreival-document-review-container > h3:nth-child(1)'); }
    get documentDropdownList() { return $$('.action-template-container > app-button'); }
    get documentList() { return $$('tr.ui-selectable-row'); }
    open() {
        browser.url('/retrieval/review');
        this.docIntakeTitle.waitForVisible(60000);
    }
    chooseFile(fileName) {
        browser.pause(1000);
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].element('td:nth-child(1) > a:nth-child(2)').getText() === fileName) {
                this.documentList[i].element('td:nth-child(1) > a:nth-child(2)').click();
            }
        }
    }
    chooseDocAction(fileName, action) {
        browser.pause(1000);
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].element('td:nth-child(1) > a:nth-child(2)').getText() === fileName) {
                this.documentList[i].element('td:nth-child(6) > app-button:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)').click();
                for (let x = 0; x < this.documentDropdownList.length; x++) {
                    if (this.documentDropdownList[x].getText() === action) {
                        this.documentDropdownList[x].click();
                    }
                }
            }
        }
    }
    getDocAssignedTo(fileName) {
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].element('td:nth-child(1) > a:nth-child(2)').getText() === fileName) {
                return this.documentList[i].element('td:nth-child(4) > span:nth-child(2)').getText().toLowerCase();
            }
        }
    }
}
const DocIntakePage = new DocIntake_Page();
exports.default = DocIntakePage;
