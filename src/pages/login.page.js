"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Login_Page {
    get loginButton() { return $('.ui-button'); }
    get usernameInput() { return $('#username'); }
    get passwordInput() { return $('#password'); }
    get loginPageTitle() { return $('.left-container--header'); }
    open() {
        browser.url('/login');
        try {
            this.loginButton.waitForVisible(60000);
        }
        catch (_a) {
            browser.refresh();
            this.loginButton.waitForVisible(60000);
        }
    }
    isLoaded() {
        try {
            this.loginPageTitle.waitForVisible(60000);
        }
        catch (_a) {
            browser.refresh();
            this.loginPageTitle.waitForVisible(60000);
        }
    }
    login(username, password) {
        if (username && password != null) {
            this.usernameInput.setValue(username);
            this.passwordInput.setValue(password);
            this.loginButton.click();
        }
        else {
            return { error: 'No username or password entered.' };
        }
    }
}
const LoginPage = new Login_Page();
exports.default = LoginPage;
