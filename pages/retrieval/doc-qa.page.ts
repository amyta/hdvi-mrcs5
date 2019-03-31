import UIMapper from "../shared/uimapper";
import SharePage from "../shared/share.page";

class DocQA_Page {
    public get docQATitle()      { return $('div.bold') }
    public get assignedChaseStat() { return $('div.item:nth-child(2) > a:nth-child(3) > span:nth-child(1)')}
    public get unassignedChaseStat() { return $('div.item:nth-child(3) > a:nth-child(3) > span:nth-child(1)')}
    public get chaseResultsList() { return $$('tr.ui-selectable-row')}
    public get unassignedChaseErrorMessage() { return $('.ui-messages-detail')}
    public get readOnlyDisplay() { return $('.readonly-view')}
    public get chart() { return $('#myImage')}
    public get memberValidationContainer() { return $('.membervalidation > app-member-validation:nth-child(1)')}
    public get submitButton() { return $('app-button.header-button:nth-child(3) > p-button:nth-child(1) > button:nth-child(1)')}

    public open(): void {
      browser.url('/retrieval/views/docqa')
      this.docQATitle.waitForVisible(UIMapper.oneMinute);
      this.assignedChaseStat.waitForVisible(UIMapper.oneMinute);
      this.unassignedChaseStat.waitForVisible(UIMapper.oneMinute);
      SharePage.doneLoading();
    }

    public chooseChaseByID(chaseNo: string):void {
    browser.pause(UIMapper.standardPause)
    for (let i = 0; i < this.chaseResultsList.length; i++) {
      if(this.chaseResultsList[i].element('td:nth-child(2) > a').getText() === chaseNo) {
        this.chaseResultsList[i].element('td:nth-child(2) > a').click();
        }
      }
    }
  
  }
  const DocQAPage = new DocQA_Page()
  export default DocQAPage