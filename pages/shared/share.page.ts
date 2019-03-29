import UIMapper from "./uimapper";

class Share_Page {
  public get userDropdownButton() { return $('.ui-autocomplete-dropdown')}
  public get userDropdownList() { return $$('.ui-autocomplete-items > li')}
  public get userAssignButton() { return $('.header-button > p-button:nth-child(1) > button:nth-child(1)')}
  public randomUser:string
  public randomNumber:number

  public selectRandomUser():void {
    this.userDropdownButton.click()

    browser.pause(UIMapper.standardPause)
    let randomUserNumber = Math.floor(Math.random() * this.userDropdownList.length) 
   
    browser.pause(UIMapper.standardPause)
    this.randomUser = this.userDropdownList[randomUserNumber].getText().toLowerCase().split(' ')[0]
    this.userDropdownList[randomUserNumber].click()

    browser.pause(UIMapper.standardPause)
    this.userAssignButton.click()
  }

  public getRandomNumber():number {
    this.randomNumber = Math.floor(Math.random() * 1000) + 1;
    return this.randomNumber;
  }

  public doneLoading():boolean {
    return browser.waitForVisible('.ui-table-loading-icon', 20000, true) && browser.waitForVisible('.loader', 20000, true);
  }
}

const SharePage = new Share_Page()
export default SharePage