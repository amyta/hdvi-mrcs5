import { ErrorHandler } from 'webdriverio';
import UIMapper from '../shared/uimapper';

class DocIntake_Page {
  public get docIntakeTitle()      { return $('.retreival-document-review-container > h3:nth-child(1)') }
	public get documentDropdownList() { return $$('.action-template-container > app-button')}
  public get documentList() { return $$('tr.ui-selectable-row')}
  
  public open(): void {
    browser.url('/retrieval/review')
    this.docIntakeTitle.waitForVisible(60000);
  }

  public chooseFile(fileName: string):void {
    browser.pause(UIMapper.standardPause)
    for (let i = 0; i < this.documentList.length; i++) {
      if(this.documentList[i].element('td:nth-child(1) > a:nth-child(2)').getText() === fileName) {
        this.documentList[i].element('td:nth-child(1) > a:nth-child(2)').click()
      }
    }
  }

  public chooseDocAction(fileName: string, action: string):void {
    browser.pause(UIMapper.standardPause)
    for (let i = 0; i < this.documentList.length; i++) {
      if(this.documentList[i].element('td:nth-child(1) > a:nth-child(2)').getText() === fileName) {
        this.documentList[i].element('td:nth-child(6) > app-button:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)').click()
        for (let x = 0; x < this.documentDropdownList.length; x++) {
          if(this.documentDropdownList[x].getText() === action) {
            this.documentDropdownList[x].click()
          }
        }
      }
    }
  }

  public getDocAssignedTo(fileName:string):string {
    for (let i = 0; i < this.documentList.length; i++) {
      if(this.documentList[i].element('td:nth-child(1) > a:nth-child(2)').getText() === fileName) {
        return this.documentList[i].element('td:nth-child(4) > span:nth-child(2)').getText().toLowerCase();
      }
    }
  }

}
const DocIntakePage = new DocIntake_Page()
export default DocIntakePage