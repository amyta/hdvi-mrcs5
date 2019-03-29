import { ErrorHandler } from 'webdriverio';
import UIMapper from './shared/uimapper';

class Navigation_Page {
	public get hamburgerIcon() { return $('.container-menu-button')}
	public get sideNavList() { return $$('div.ui-panelmenu-panel')}
  public get subSideNavList() { return $$('ul > li > a > span:nth-child(2)')}
  public get softwareUpdatePopup() { return $('#wm-shoutout-137690')}
  public get softwareUpdatePopupCloseButton() { return $('#wm-shoutout-137690 > div.wm-close-button.walkme-x-button')}

  public expandNavigation(): void {
    this.hamburgerIcon.click();
  }

  public clickOnPageInSideNav(page: String):void {
		for (let i=0; i < this.sideNavList.length; i++) {
			if (this.sideNavList[i].getText() == page) {
        this.sideNavList[i].click();
			}
		}
  }
  
  public clickOnSubPageInSideNav(subpage: String):void {
    browser.pause(UIMapper.standardPause)
    for (let x=0; x < this.subSideNavList.length; x++ ) {
      if (this.subSideNavList[x].getText() == subpage) {
        this.subSideNavList[x].click();
      }
    }
  }

  public getPageInSideNavSize(page: String):boolean {
		for (let i=0; i < this.sideNavList.length; i++) {
			if (this.sideNavList[i].getText() == page) {
        return true;
			}
    }

    return false;
  }

  public closeSoftwareUpdatePopup():void {
    browser.pause(UIMapper.standardPause)

    if (this.softwareUpdatePopup.isVisible() == true) {
      this.softwareUpdatePopupCloseButton.click()
    }
  }


}
const NavigationPage = new Navigation_Page()
export default NavigationPage