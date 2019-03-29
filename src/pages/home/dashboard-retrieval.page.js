"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DashboardRetrieval_Page {
    get dRetrievalPageTitle() { return $('div.bold'); }
    get callsAndFaxesChart() { return $('div.ui-g:nth-child(5) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(1)'); }
    open() {
        browser.url('/dashboard/retrieval');
        this.dRetrievalPageTitle.waitForVisible(10000);
    }
    isLoaded() {
        this.dRetrievalPageTitle.waitForVisible(10000);
        this.callsAndFaxesChart.waitForVisible(10000);
        return this.dRetrievalPageTitle.getText() == 'YOUR ADDRESSES' && this.callsAndFaxesChart.isVisible();
    }
}
const DashboardRetrievalPage = new DashboardRetrieval_Page();
exports.default = DashboardRetrievalPage;
