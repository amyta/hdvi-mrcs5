"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DashboardDocumentReviewer_Page {
    get dDocumentReviewerPageTitle() { return $('div.bold'); }
    get documentsCompletedChart() { return $('div.ui-g:nth-child(4) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(1)'); }
    open() {
        browser.url('/dashboard/documentreviewer');
        this.dDocumentReviewerPageTitle.waitForVisible(10000);
    }
    isLoaded() {
        this.dDocumentReviewerPageTitle.waitForVisible(10000);
        this.documentsCompletedChart.waitForVisible(10000);
        return this.dDocumentReviewerPageTitle.getText() == 'YOUR DOCUMENTS' && this.documentsCompletedChart.isVisible();
    }
}
const DashboardDocumentReviewerPage = new DashboardDocumentReviewer_Page();
exports.default = DashboardDocumentReviewerPage;
