import UIMapper from '../shared/uimapper';

class DashboardDocumentReviewer_Page {
	public get dDocumentReviewerPageTitle()      { return $('div.bold') }
	public get documentsCompletedChart()      { return $('div.ui-g:nth-child(4) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(1)') }

	public open(): void {
    browser.url('/dashboard/documentreviewer')
    this.dDocumentReviewerPageTitle.waitForVisible(UIMapper.oneMinute);
	}
	
  public isLoaded(): boolean {
		this.dDocumentReviewerPageTitle.waitForVisible(UIMapper.oneMinute);
		this.documentsCompletedChart.waitForVisible(UIMapper.oneMinute)
  	return this.dDocumentReviewerPageTitle.getText() == 'YOUR DOCUMENTS' && this.documentsCompletedChart.isVisible()
  }

}
const DashboardDocumentReviewerPage = new DashboardDocumentReviewer_Page()
export default DashboardDocumentReviewerPage