import { ErrorHandler } from 'webdriverio';
import UIMapper from '../shared/uimapper';

class Assignment_Page {
  public get assignmentTitle()      { return $('div.bold') }
	public get unassignedChaseErrorMessage() { return $('.ui-messages-detail')}
  public get chaseResultsList() { return $$('tr.ui-selectable-row > td:nth-child(2)')}
  public get readOnlyDisplay() { return $('.readonly-view')}
  
  public open(): void {
    browser.url('/clinical/assignment')
    this.assignmentTitle.waitForVisible(UIMapper.oneMinute);
  }

  public clickOnChase(id: string):void {
    browser.pause(UIMapper.standardPause)
    for (let i = 0; i < this.chaseResultsList.length; i++) {
      if(this.chaseResultsList[i].getText() === id) {
        this.chaseResultsList[i].element('a').click()
      }
    }
  }

}
const AssignmentPage = new Assignment_Page()
export default AssignmentPage