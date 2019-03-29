"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Assignment_Page {
    get assignmentTitle() { return $('div.bold'); }
    get unassignedChaseErrorMessage() { return $('.ui-messages-detail'); }
    get chaseResultsList() { return $$('tr.ui-selectable-row > td:nth-child(2)'); }
    get readOnlyDisplay() { return $('.readonly-view'); }
    open() {
        browser.url('/clinical/assignment');
        this.assignmentTitle.waitForVisible(60000);
    }
    clickOnChase(id) {
        browser.pause(5000);
        for (let i = 0; i < this.chaseResultsList.length; i++) {
            console.log(this.chaseResultsList[i].getText());
            if (this.chaseResultsList[i].getText() === id) {
                this.chaseResultsList[i].element('a').click();
            }
        }
    }
}
const AssignmentPage = new Assignment_Page();
exports.default = AssignmentPage;
