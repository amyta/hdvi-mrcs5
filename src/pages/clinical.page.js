"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clinical_Page {
    get clinicalTitle() { return $('div.bold'); }
    get platformAccountMenu() { return '.account-menu > platform-account-menu:nth-child(1)'; }
    get platformAccountMenuList() { return $$('div.menu--item'); }
    isLoaded() {
        browser.url('/clinical');
        this.clinicalTitle.waitForVisible(60000);
    }
    logout() {
        browser.moveToObject(this.platformAccountMenu).pause(1000);
        for (let i = 0; i < this.platformAccountMenuList.length; i++) {
            if (this.platformAccountMenuList[i].getText() == 'Logout') {
                this.platformAccountMenuList[i].click();
            }
        }
    }
}
const ClinicalPage = new Clinical_Page();
exports.default = ClinicalPage;
