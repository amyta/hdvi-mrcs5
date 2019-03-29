"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MRR_Page {
    get MRRTitle() { return $('div.bold'); }
    get chasesNumber() { return $('.activeStat'); }
    get mrrTopMetrics() { return $('.clinical-container'); }
    get topRecordsNumber() { return $('.total-container'); }
    open() {
        browser.url('/clinical/view/mrr');
        this.MRRTitle.waitForVisible(60000);
        this.mrrTopMetrics.waitForVisible(60000);
        this.topRecordsNumber.waitForVisible(60000);
    }
}
const MRRPage = new MRR_Page();
exports.default = MRRPage;
