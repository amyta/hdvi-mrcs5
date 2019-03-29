import { ErrorHandler } from 'webdriverio';

class Assignment_Page {
  public get assignmentTitle()      { return $('div.bold') }
	public get unassignedChaseErrorMessage() { return $('.ui-messages-detail')}
  public get chaseResultsList() { return $$('tr.ui-selectable-row > td:nth-child(2)')}
  public get readOnlyDisplay() { return $('.readonly-view')}
  
  public open(): void {
    browser.url('/clinical/assignment')
    this.assignmentTitle.waitForVisible(60000);
  }

  public clickOnChase(id: string):void {
    browser.pause(5000)
    for (let i = 0; i < this.chaseResultsList.length; i++) {
      console.log(this.chaseResultsList[i].getText())
      if(this.chaseResultsList[i].getText() === id) {
        this.chaseResultsList[i].element('a').click()
      }
    }
  }

}
const AssignmentPage = new Assignment_Page()
export default AssignmentPage