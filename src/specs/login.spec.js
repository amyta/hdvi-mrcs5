"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../pages/login.page");
const uimapper_1 = require("../pages/shared/uimapper");
const clinical_page_1 = require("../pages/clinical.page");
describe('Login page navigation', () => {
    it('should log user in and out', () => {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaUsername, uimapper_1.default.qaPassword);
        browser.pause(3000);
        expect(clinical_page_1.default.isLoaded());
        clinical_page_1.default.logout();
        expect(login_page_1.default.isLoaded());
        expect(login_page_1.default.loginPageTitle.getText()).to.equal('Sign into MRCS');
    });
});
