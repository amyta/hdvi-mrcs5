import UIMapper from "../shared/uimapper";
import SharePage from "../shared/share.page";

class EMR_Page {
    public get EMRTitle()      { return $('div.bold') }
    public get dashboardContainer() { return $('.dashboard-container')}
		public get groupNameInput() { return $('#groupName')}
		public get emailInput() { return $('#email')}
    public get phoneNumberInput() { return $('#phone')}
    public get contactNameInput() { return $('#contactName')}
		public get aidResultsList() { return $$('tr.ui-selectable-row')}
		public get editAddressButton() { return $('app-button.header-button:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)')}
    public get editAddressApplyFilterButton() { return $('.ui-dialog-footer > p-footer:nth-child(1) > footer:nth-child(1) > app-button:nth-child(1) > p-button:nth-child(1) > button:nth-child(1)')}
		public get aidGroupName() { return $('div.summary-detail:nth-child(11) > div:nth-child(2)')}
		public get aidEmail() { return $('div.summary-detail:nth-child(6) > div:nth-child(2)')}
		public get aidPhoneNumber() { return $('div.summary-detail:nth-child(8) > div:nth-child(2)')}
		public get aidContactName() { return $('div.summary-detail:nth-child(5) > div:nth-child(2)')}

    public open(): void {
      browser.url('/retrieval/view/emr')
      this.EMRTitle.waitForVisible(UIMapper.oneMinute);
      this.dashboardContainer.waitForVisible(UIMapper.oneMinute);
      SharePage.doneLoading();
    }

    public chooseAID(aidNo: string):void {
    browser.pause(UIMapper.standardPause)
    for (let i = 0; i < this.aidResultsList.length; i++) {
      if(this.aidResultsList[i].element('td:nth-child(1) > a:nth-child(2)').getText() === aidNo) {
        this.aidResultsList[i].element('td:nth-child(1) > a:nth-child(2)').click();
        }
      }
    }

    public editAddress(groupName:string, email:string, phoneNumber:string, contactName:string):void {
			this.editAddressButton.click();
			this.clearInput('#groupName');
			this.groupNameInput.setValue(groupName);
			this.clearInput('#email');
			this.emailInput.setValue(email);
			this.clearInput('#phone');
			this.phoneNumberInput.setValue(phoneNumber);
			this.clearInput('#contactName');
			this.contactNameInput.setValue(contactName);
			this.editAddressApplyFilterButton.click();

			SharePage.doneLoading();
		}
	
		public clearInput(id:string):void {
			let valueLength = browser.getValue(id).length
			let backSpaces = new Array(valueLength).fill('Backspace')
			browser.setValue(id, backSpaces)
		}
  }
  const EMRPage = new EMR_Page()
  export default EMRPage