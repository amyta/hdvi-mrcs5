import { ErrorHandler } from 'webdriverio';

class PendRetrieval_Page {
  public get pendRetrievalTitle() { return $('div.bold') }
  public get byPendCodeChart() { return $('div.ui-fluid:nth-child(3) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(2)') }
  public get byProjectChart() { return $('div.ui-fluid:nth-child(4) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(2)') }
  public get pendRetrievalStatClosed() { return $('div.pend-land-stats-keyItem:nth-child(5) > a:nth-child(3) > span:nth-child(1)') }
  public get pendResultsList() { return $$('.ui-selectable-row') }

  public open():void {
    browser.url('/pend/retrieval')
    this.pendRetrievalTitle.waitForVisible(60000);
    this.byPendCodeChart.waitForVisible(60000);
    this.byProjectChart.waitForVisible(60000);
  }
  
  public getPendListColumnData(columnNo:string, expectedResult:string):boolean {
    for (let i = 0; i < this.pendResultsList.length; i++) {
      if (this.pendResultsList[i].element('td.hdvi-gridcol:nth-child(' + columnNo +')').getText() == expectedResult) {
        return true;
      }
    }

    return false;
  }

}
const PendRetrievalPage = new PendRetrieval_Page()
export default PendRetrievalPage