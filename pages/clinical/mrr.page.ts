import UIMapper from '../shared/uimapper';

class MRR_Page {
  public get MRRTitle() { return $('div.bold') }
  public get chasesNumber() { return $('.activeStat') }
  public get mrrTopMetrics() { return $('.clinical-container') }
  public get topRecordsNumber() { return $('.total-container') }

  public open(): void {
    browser.url('/clinical/view/mrr')
    this.MRRTitle.waitForVisible(UIMapper.oneMinute);
    this.mrrTopMetrics.waitForVisible(UIMapper.oneMinute);
    this.topRecordsNumber.waitForVisible(UIMapper.oneMinute);
  }

}
const MRRPage = new MRR_Page()
export default MRRPage