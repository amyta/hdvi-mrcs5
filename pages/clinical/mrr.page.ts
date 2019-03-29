import { ErrorHandler } from 'webdriverio';

class MRR_Page {
  public get MRRTitle() { return $('div.bold') }
  public get chasesNumber() { return $('.activeStat') }
  public get mrrTopMetrics() { return $('.clinical-container') }
  public get topRecordsNumber() { return $('.total-container') }

  public open(): void {
    browser.url('/clinical/view/mrr')
    this.MRRTitle.waitForVisible(60000);
    this.mrrTopMetrics.waitForVisible(60000);
    this.topRecordsNumber.waitForVisible(60000);
  }

}
const MRRPage = new MRR_Page()
export default MRRPage