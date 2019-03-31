import { ErrorHandler } from 'webdriverio';
import UIMapper from '../shared/uimapper';

class ChaseQuery_Page {
  public get chaseQueryTitle()      { return $('div.bold') }
	public get chaseQueryFiltersList() { return $$('li.ui-state-default')}
	public get chaseIdFilterInput() { return $('#ChaseIdAndClientChaseKey')}
	public get updateFilterButton() { return $('.ui-dialog-footer > p-footer:nth-child(1) > footer:nth-child(1) > app-button:nth-child(2) > p-button:nth-child(1) > button:nth-child(1)')}
	public get chaseQuerySearchResults() { return $$('tr.ui-selectable-row')}
	public get measureCodesList() { return $$('#MeasuresCodes > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li')}
	public get assignToDropdownButton() { return $('button.ng-tns-c42-19')}
	public get assignToDropdownList() { return $$('.ui-autocomplete-items > li')}
	public get memberKeyFilterInput() { return $('#MemberSourceAliasID')}
	public get aidFilterInput() { return $('#AddressId')}
	public get pendCodesList() { return $$('#PendCodes > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li')}

  public open(): void {
    browser.url('/project/chasequery/hedis')
    this.chaseQueryTitle.waitForVisible(UIMapper.oneMinute);
  }

  public chooseFilter(filter: string, filterText: string):void {
		browser.pause(UIMapper.standardPause)

		for (let i=0; i < this.chaseQueryFiltersList.length; i++) {
			if (this.chaseQueryFiltersList[i].getText() == filter) {
				this.chaseQueryFiltersList[i].click();
			}
		}

		if (filter == 'Chase ID / Client Chase Key') {
			this.chaseIdFilterInput.setValue(filterText)
		} else if (filter == 'Measures') {
			for (let i=0; i < this.measureCodesList.length; i++) {
				if (this.measureCodesList[i].getText() == filterText) {
					this.measureCodesList[i].click();
				}
			}
		} else if (filter == 'Assigned To') {
			this.assignToDropdownButton.click();
			browser.pause(UIMapper.standardPause)
			for (let i=0; i < this.assignToDropdownList.length; i++) {
				if (this.assignToDropdownList[i].getText() == filterText) {
					this.assignToDropdownList[i].click();
					browser.pause(10000)
				}
			}
		} else if (filter == 'Member') {
			this.memberKeyFilterInput.setValue(filterText);
		} else if (filter == 'Address') {
			this.aidFilterInput.setValue(filterText);
		} else if (filter == 'Pend Codes') {
			for (let i=0; i < this.pendCodesList.length; i++) {
				if (this.pendCodesList[i].getText() == filterText) {
					this.pendCodesList[i].click();
				}
			}
		}
	}

	public clickUpdateFilterButton():void {
		this.updateFilterButton.click()
	}

	public getResults():string {
		for (let i = 0; i < this.chaseQuerySearchResults.length; i++) {
			return this.chaseQuerySearchResults[i].element('td:nth-child(2)').getText()
		}
	}

	public doResultsMatch(tdNumber:string, expectedValue:string):boolean {
		for (let i = 0; i < this.chaseQuerySearchResults.length; i++) {
			if (this.chaseQuerySearchResults[i].element('td:nth-child(' + tdNumber +')').getText() == expectedValue) {
				return true;
			}
		}
	}

}
const ChaseQueryPage = new ChaseQuery_Page()
export default ChaseQueryPage