"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PendClinical_Page {
    get assignmentTitle() { return $('div.bold'); }
    get byPendCodeChart() { return $('div.ui-fluid:nth-child(3) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(2)'); }
    get byProjectChart() { return $('div.ui-fluid:nth-child(4) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(2)'); }
    get byPendCodeBar() { return $('div.bold'); }
    get pendsList() { return $$('tr.ui-selectable-row'); }
    get pendDropdownActionList() { return $$('.action-template-container > app-button'); }
    get pendSummaryContainer() { return $('.summary-container'); }
    get pendId() { return $('div.summary-detail:nth-child(10) > div:nth-child(2)'); }
    get commentsTab() { return $('.bottom-left-container > div:nth-child(1) > app-sub-menu:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)'); }
    get commentTextInput() { return $('.commenttextarea'); }
    get sendMessageButton() { return $('.ui-button-text-only'); }
    get pendMostRecentComment() { return $('.comments-container > div:nth-child(1) > app-comment-item:nth-child(1) > div:nth-child(1) > div:nth-child(2)'); }
    get pendStatusDropdownButton() { return $('.ui-dropdown-trigger'); }
    get pendStatusDropdownList() { return $$('.ui-dropdown-items > li'); }
    get pendStatusInput() { return $('#notes'); }
    get updateStatusButton() { return $('.header-button > p-button:nth-child(1) > button:nth-child(1)'); }
    get toastMessage() { return $('p-toast'); }
    get pendStatus() { return $('div.summary-detail:nth-child(13) > div:nth-child(2)'); }
    get pendLatestComment() { return $('.othercomment-body'); }
    open() {
        browser.url('/pend/clinical');
        this.assignmentTitle.waitForVisible(60000);
        this.byPendCodeChart.waitForVisible(60000);
        this.byProjectChart.waitForVisible(60000);
    }
    openPendDetails(pendId) {
        browser.url('/pend/detail/' + pendId);
        this.pendSummaryContainer.waitForVisible(60000);
    }
    isLoaded() {
        return this.byPendCodeChart.isVisible() && this.byProjectChart.isVisible();
    }
    clickByPendCodeChart() {
        browser.url('/pend/clinical/view');
    }
    chooseActionOfPend(pendNo, action) {
        browser.pause(1000);
        for (let i = 0; i < this.pendsList.length; i++) {
            if (this.pendsList[i].element('td:nth-child(2)').getText() === pendNo) {
                this.pendsList[i].element('td:nth-child(15) > app-button:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)').click();
                for (let x = 0; x < this.pendDropdownActionList.length; x++) {
                    if (this.pendDropdownActionList[x].getText() === action) {
                        this.pendDropdownActionList[x].click();
                    }
                }
            }
        }
    }
    goToPendComments() {
        this.commentsTab.click();
    }
    addComment(comment) {
        this.commentTextInput.click();
        this.commentTextInput.setValue(comment);
        this.sendMessageButton.click();
    }
    changePendStatus(status, note) {
        this.pendStatusDropdownButton.click();
        for (let i = 0; i < this.pendStatusDropdownList.length; i++) {
            console.log(this.pendStatusDropdownList[i].getText());
            if (this.pendStatusDropdownList[i].getText() == status) {
                this.pendStatusDropdownList[i].click();
                this.pendStatusInput.setValue(note);
                this.updateStatusButton.click();
            }
        }
    }
}
const PendClinicalPage = new PendClinical_Page();
exports.default = PendClinicalPage;
