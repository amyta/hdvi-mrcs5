"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../../pages/login.page");
const uimapper_1 = require("../../pages/shared/uimapper");
const clinical_page_1 = require("../../pages/clinical.page");
const share_page_1 = require("../../pages/shared/share.page");
const pend_retrieval_page_1 = require("../../pages/pend/pend-retrieval.page");
describe('Pend - Retrieval test suite', () => {
    before(function () {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaUsername, uimapper_1.default.qaPassword);
        browser.pause(3000);
    });
    it('should go to pend - retrieval page and checked if pend is closed', () => {
        pend_retrieval_page_1.default.open();
        pend_retrieval_page_1.default.pendRetrievalStatClosed.click();
        share_page_1.default.doneLoading();
        expect(pend_retrieval_page_1.default.getPendListColumnData('8', 'Closed')).to.equal(true);
        clinical_page_1.default.logout();
    });
});
