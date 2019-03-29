"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Navigation_Page {
    get hamburgerIcon() { return $('.container-menu-button'); }
    get sideNavList() { return $$('div.ui-panelmenu-panel'); }
    get subSideNavList() { return $$('ul > li > a > span:nth-child(2)'); }
    get softwareUpdatePopup() { return $('#wm-shoutout-137690'); }
    get softwareUpdatePopupCloseButton() { return $('#wm-shoutout-137690 > div.wm-close-button.walkme-x-button'); }
    expandNavigation() {
        this.hamburgerIcon.click();
    }
    clickOnPageInSideNav(page) {
        for (let i = 0; i < this.sideNavList.length; i++) {
            if (this.sideNavList[i].getText() == page) {
                this.sideNavList[i].click();
            }
        }
    }
    clickOnSubPageInSideNav(subpage) {
        browser.pause(1000);
        for (let x = 0; x < this.subSideNavList.length; x++) {
            if (this.subSideNavList[x].getText() == subpage) {
                this.subSideNavList[x].click();
            }
        }
    }
    getPageInSideNavSize(page) {
        for (let i = 0; i < this.sideNavList.length; i++) {
            console.log(this.sideNavList[i].getText(), "here");
            if (this.sideNavList[i].getText() == page) {
                return true;
            }
        }
        return false;
    }
    closeSoftwareUpdatePopup() {
        browser.pause(1000);
        if (this.softwareUpdatePopup.isVisible() == true) {
            this.softwareUpdatePopupCloseButton.click();
        }
    }
}
const NavigationPage = new Navigation_Page();
exports.default = NavigationPage;
