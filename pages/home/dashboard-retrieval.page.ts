import { ErrorHandler } from 'webdriverio';

class DashboardRetrieval_Page {
	public get dRetrievalPageTitle()      { return $('div.bold') }
	public get callsAndFaxesChart()      { return $('div.ui-g:nth-child(5) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(1)') }

	public open(): void {
    browser.url('/dashboard/retrieval')
    this.dRetrievalPageTitle.waitForVisible(10000);
	}
	
  public isLoaded(): boolean {
		this.dRetrievalPageTitle.waitForVisible(10000);
		this.callsAndFaxesChart.waitForVisible(10000);
		return this.dRetrievalPageTitle.getText() == 'YOUR ADDRESSES' && this.callsAndFaxesChart.isVisible();
  }

}
const DashboardRetrievalPage = new DashboardRetrieval_Page()
export default DashboardRetrievalPage