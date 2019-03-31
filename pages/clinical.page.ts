import UIMapper from "./shared/uimapper";

class Clinical_Page {
  public get clinicalTitle()      { return $('div.bold') }
	public get platformAccountMenu() { return '.account-menu > platform-account-menu:nth-child(1)'}
	public get platformAccountMenuList() { return $$('div.menu--item')}

  public isLoaded(): void {
    browser.url('/clinical')
    this.clinicalTitle.waitForVisible(UIMapper.oneMinute);
  }

  public logout():void {
		browser.moveToObject(this.platformAccountMenu).pause(1000)

		for (let i=0; i < this.platformAccountMenuList.length; i++) {
			if (this.platformAccountMenuList[i].getText() == 'Logout') {
				this.platformAccountMenuList[i].click();
			}
		}
	}

}
const ClinicalPage = new Clinical_Page()
export default ClinicalPage