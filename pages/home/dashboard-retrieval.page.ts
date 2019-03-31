import UIMapper from '../shared/uimapper';

class DashboardRetrieval_Page {
	public get dRetrievalPageTitle()      { return $('div.bold') }
	public get callsAndFaxesChart()      { return $('div.ui-g:nth-child(5) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(1)') }

	public open(): void {
    browser.url('/dashboard/retrieval')
    this.dRetrievalPageTitle.waitForVisible(UIMapper.oneMinute);
	}
	
  public isLoaded(): boolean {
		this.dRetrievalPageTitle.waitForVisible(UIMapper.oneMinute);
		this.callsAndFaxesChart.waitForVisible(UIMapper.oneMinute);
		return this.dRetrievalPageTitle.getText() == 'YOUR ADDRESSES' && this.callsAndFaxesChart.isVisible();
  }

}
const DashboardRetrievalPage = new DashboardRetrieval_Page()
export default DashboardRetrievalPage