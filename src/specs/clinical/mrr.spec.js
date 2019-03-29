"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../../pages/login.page");
const uimapper_1 = require("../../pages/shared/uimapper");
const clinical_page_1 = require("../../pages/clinical.page");
const mrr_page_1 = require("../../pages/clinical/mrr.page");
describe('Clinical MRR test suite', () => {
    before(function () {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaUsername, uimapper_1.default.qaPassword);
        browser.pause(3000);
    });
    it('should go to MRR page and check dashboard Chase number matches total records shown', () => {
        mrr_page_1.default.open();
        expect(mrr_page_1.default.topRecordsNumber.getText()).to.contain(mrr_page_1.default.chasesNumber.getText());
        clinical_page_1.default.logout();
    });
});
