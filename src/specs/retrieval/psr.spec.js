"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../../pages/login.page");
const uimapper_1 = require("../../pages/shared/uimapper");
const clinical_page_1 = require("../../pages/clinical.page");
const psr_page_1 = require("../../pages/Retrieval/psr.page");
const share_page_1 = require("../../pages/shared/share.page");
describe('PSR test suite', () => {
    before(function () {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaUsername, uimapper_1.default.qaPassword);
        browser.pause(3000);
    });
    it('should go to PSR page and filter by AID', () => {
        psr_page_1.default.open();
        psr_page_1.default.filterById('5092283');
        expect(share_page_1.default.doneLoading()).to.equal(true);
        expect(psr_page_1.default.firstResult.getText()).to.equal('5092283');
        clinical_page_1.default.logout();
        expect(login_page_1.default.isLoaded());
        expect(login_page_1.default.loginPageTitle.getText() == 'Sign into MRCS');
    });
});
