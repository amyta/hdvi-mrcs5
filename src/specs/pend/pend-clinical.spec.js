"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../../pages/login.page");
const uimapper_1 = require("../../pages/shared/uimapper");
const pend_clinical_page_1 = require("../../pages/pend/pend-clinical.page");
const share_page_1 = require("../../pages/shared/share.page");
describe('Pend Clinical test suite', () => {
    before(function () {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaUsername, uimapper_1.default.qaPassword);
        browser.pause(3000);
    });
    it('should open Pend - Clinical page', () => {
        pend_clinical_page_1.default.open();
        expect(pend_clinical_page_1.default.isLoaded()).to.equal(true);
    });
    it('should click PEND #13 and show details of pend', () => {
        pend_clinical_page_1.default.open();
        pend_clinical_page_1.default.clickByPendCodeChart();
        pend_clinical_page_1.default.chooseActionOfPend('13', 'View Details');
        expect(share_page_1.default.doneLoading()).to.equal(true);
        expect(pend_clinical_page_1.default.pendId.getText()).to.equal('13');
    });
    it('should go to PEND #13 and add comment', () => {
        pend_clinical_page_1.default.openPendDetails('13');
        pend_clinical_page_1.default.goToPendComments();
        pend_clinical_page_1.default.addComment('automated_testing_' + share_page_1.default.getRandomNumber());
        expect(share_page_1.default.doneLoading()).to.equal(true);
        expect(pend_clinical_page_1.default.pendMostRecentComment.getText()).to.equal('automated_testing_' + share_page_1.default.randomNumber);
    });
    it('should change status of PEND #17 to In Progress and add a note', () => {
        pend_clinical_page_1.default.open();
        pend_clinical_page_1.default.clickByPendCodeChart();
        pend_clinical_page_1.default.chooseActionOfPend('17', 'Change Status');
        pend_clinical_page_1.default.changePendStatus('In Progress', 'automated_testing_status_in_progress');
        share_page_1.default.doneLoading();
        pend_clinical_page_1.default.openPendDetails('17');
        share_page_1.default.doneLoading();
        expect(pend_clinical_page_1.default.pendStatus.getText()).to.equal('In Progress');
        expect(pend_clinical_page_1.default.pendLatestComment.getText()).to.equal('automated_testing_status_in_progress');
    });
    it('should change status of PEND #17 to Resolved and add a note', () => {
        pend_clinical_page_1.default.open();
        pend_clinical_page_1.default.clickByPendCodeChart();
        pend_clinical_page_1.default.chooseActionOfPend('17', 'Change Status');
        pend_clinical_page_1.default.changePendStatus('Resolved', 'automated_testing_status_resolved');
        share_page_1.default.doneLoading();
        pend_clinical_page_1.default.openPendDetails('17');
        share_page_1.default.doneLoading();
        expect(pend_clinical_page_1.default.pendStatus.getText()).to.equal('Resolved');
        expect(pend_clinical_page_1.default.pendLatestComment.getText()).to.equal('automated_testing_status_resolved');
    });
});
