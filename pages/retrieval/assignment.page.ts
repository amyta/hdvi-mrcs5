import UIMapper from '../shared/uimapper';

class Assignment_Page {
  public get assignmentTitle()      { return $('div.bold') }
	public get assignAddressesButton() { return $('app-button.ng-star-inserted:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)')}
  public get retrievalAddressesList() { return $$('tr.ui-selectable-row')}

  public open(): void {
    browser.url('/retrieval/assignment')
    this.assignmentTitle.waitForVisible(UIMapper.oneMinute);
  }

  public assignAID(fileName: string):void {
    browser.pause(UIMapper.standardPause)
    for (let i = 0; i < this.retrievalAddressesList.length; i++) {
      if(this.retrievalAddressesList[i].element('td:nth-child(2)').getText() === fileName) {
        this.retrievalAddressesList[i].element('td:nth-child(19) > app-button:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)').click()
        this.assignAddressesButton.click()
      }
    }
  }

  public getAIDAssignedTo(fileName:string):string {
    for (let i = 0; i < this.retrievalAddressesList.length; i++) {
      if(this.retrievalAddressesList[i].element('td:nth-child(2)').getText() === fileName) {
        return this.retrievalAddressesList[i].element('td:nth-child(17) > span:nth-child(2)').getText().toLowerCase();
      }
    }
  }

}
const AssignmentPage = new Assignment_Page()
export default AssignmentPage