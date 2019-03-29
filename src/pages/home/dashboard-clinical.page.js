"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DashboardClinical_Page {
    get dClinicalPageTitle() { return $('div.bold'); }
    get chasesCompletedChart() { return $('div.ui-g:nth-child(4) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(1)'); }
    open() {
        browser.url('/dashboard/clinical');
        this.dClinicalPageTitle.waitForVisible(10000);
    }
    isLoaded() {
        this.dClinicalPageTitle.waitForVisible(10000);
        this.chasesCompletedChart.waitForVisible(10000);
        return this.dClinicalPageTitle.getText() == 'YOUR CHASES' && this.chasesCompletedChart.isVisible();
    }
}
const DashboardClinicalPage = new DashboardClinical_Page();
exports.default = DashboardClinicalPage;
