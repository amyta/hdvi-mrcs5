import UIMapper from "../shared/uimapper";
import SharePage from "../shared/share.page";

class FieldTech_Page {
  public get fieldTechTitle()      { return $('div.bold') }
	public get totalSitesStat() { return $('.dashboard-container > div:nth-child(1) > a:nth-child(3) > span:nth-child(1)')}
	public get aidList() { return $$('tr.ui-selectable-row')}
	public get addAppointmentLink() { return $('.add-btn > app-button:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)')}
  public get apptDateInput()      { return $('input=Date') }
  public get apptStartTimeInput()      { return $('input=Start Time') }
  public get apptEndTimeInput()      { return $('input=End Time') }
  public get scheduleAppointmentButton()      { return $('.ui-dialog-footer > p-footer:nth-child(1) > footer:nth-child(1) > app-button:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)') }
  public get scheduleAction()      { return $('	app-button.ng-star-inserted:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)') }

	public open(): void {
    browser.url('/retrieval/view/ft')
		this.fieldTechTitle.waitForVisible(UIMapper.oneMinute);
		this.totalSitesStat.waitForValue(UIMapper.oneMinute);
		SharePage.doneLoading();
	}

	public getAidListColumnData(columnNo:string, expectedResult:string):boolean {
    for (let i = 0; i < this.aidList.length; i++) {
      if (this.aidList[i].element('td:nth-child(' + columnNo + ')').getText() == expectedResult) {
        return true;
      }
    }

    return false;
  }
}
const FieldTechPage = new FieldTech_Page()
export default FieldTechPage