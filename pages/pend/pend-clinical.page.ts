import UIMapper from "../shared/uimapper";

class PendClinical_Page {
  public get assignmentTitle()      { return $('div.bold') }
	public get byPendCodeChart() { return $('div.ui-fluid:nth-child(3) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(2)')}
  public get byProjectChart() { return $('div.ui-fluid:nth-child(4) > div:nth-child(1) > app-kpi:nth-child(1) > p-chart:nth-child(2) > div:nth-child(1) > canvas:nth-child(2)')}
  public get byPendCodeBar()      { return $('div.bold') }
  public get pendsList() { return $$('tr.ui-selectable-row')}
  public get pendDropdownActionList() { return $$('.action-template-container > app-button')}
  public get pendSummaryContainer()      { return $('.summary-container') }
  public get pendId()      { return $('div.summary-detail:nth-child(10) > div:nth-child(2)') }
  public get commentsTab()      { return $('.bottom-left-container > div:nth-child(1) > app-sub-menu:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)') }
  public get commentTextInput()      { return $('.commenttextarea') }
  public get sendMessageButton()      { return $('.ui-button-text-only') }
  public get pendMostRecentComment()      { return $('.comments-container > div:nth-child(1) > app-comment-item:nth-child(1) > div:nth-child(1) > div:nth-child(2)') }
  public get pendStatusDropdownButton() { return $('.ui-dropdown-trigger')}
  public get pendStatusDropdownList() { return $$('.ui-dropdown-items > li')}
  public get pendStatusInput() { return $('#notes') }
  public get updateStatusButton() { return $('.header-button > p-button:nth-child(1) > button:nth-child(1)') }
  public get pendStatus() { return $('div.summary-detail:nth-child(13) > div:nth-child(2)') }
  public get pendLatestComment() { return $('.othercomment-body') }

  public open():void {
    browser.url('/pend/clinical')
    this.assignmentTitle.waitForVisible(60000);
    this.byPendCodeChart.waitForVisible(60000)
    this.byProjectChart.waitForVisible(60000)
  }
  
  public openPendDetails(pendId:string):void {
    browser.url('/pend/detail/' + pendId)
    this.pendSummaryContainer.waitForVisible(60000)
  }

  public isLoaded():boolean {
    return this.byPendCodeChart.isVisible() && this.byProjectChart.isVisible()
  }

  public clickByPendCodeChart():void {
    browser.url('/pend/clinical/view')
  }

  public chooseActionOfPend(pendNo: string, action: string):void {
    browser.pause(UIMapper.standardPause)
    for (let i = 0; i < this.pendsList.length; i++) {
      if(this.pendsList[i].element('td:nth-child(2)').getText() === pendNo) {
        this.pendsList[i].element('td:nth-child(15) > app-button:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)').click()
        for (let x = 0; x < this.pendDropdownActionList.length; x++) {
          if(this.pendDropdownActionList[x].getText() === action) {
            this.pendDropdownActionList[x].click()
          }
        }
      }
    }
  }

  public goToPendComments():void {
    this.commentsTab.click()
  }

  public addComment(comment:string):void {
    this.commentTextInput.click();
    this.commentTextInput.setValue(comment);
    this.sendMessageButton.click();
  }

  public changePendStatus(status:string, note:string):void {
    this.pendStatusDropdownButton.click();
    
    for (let i = 0; i < this.pendStatusDropdownList.length; i++) {
      if (this.pendStatusDropdownList[i].getText() == status) {
        this.pendStatusDropdownList[i].click();
        this.pendStatusInput.setValue(note);
        this.updateStatusButton.click();
      }
    }
  }

}

const PendClinicalPage = new PendClinical_Page()
export default PendClinicalPage