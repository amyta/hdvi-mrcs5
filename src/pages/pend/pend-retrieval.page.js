"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PendRetrieval_Page {
    get pendRetrievalTitle() { return $('div.bold'); }
    get byPendCodeChart() { return $('div.ui-fluid:nth-child(3) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(2)'); }
    get byProjectChart() { return $('div.ui-fluid:nth-child(4) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(2)'); }
    get pendRetrievalStatClosed() { return $('div.pend-land-stats-keyItem:nth-child(5) > a:nth-child(3) > span:nth-child(1)'); }
    get pendResultsList() { return $$('.ui-selectable-row'); }
    open() {
        browser.url('/pend/retrieval');
        this.pendRetrievalTitle.waitForVisible(60000);
        this.byPendCodeChart.waitForVisible(60000);
        this.byProjectChart.waitForVisible(60000);
    }
    getPendListColumnData(columnNo, expectedResult) {
        for (let i = 0; i < this.pendResultsList.length; i++) {
            if (this.pendResultsList[i].element('td.hdvi-gridcol:nth-child(' + columnNo + ')').getText() == expectedResult) {
                return true;
            }
        }
        return false;
    }
}
const PendRetrievalPage = new PendRetrieval_Page();
exports.default = PendRetrievalPage;
