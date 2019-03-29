"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../../pages/login.page");
const uimapper_1 = require("../../pages/shared/uimapper");
const clinical_page_1 = require("../../pages/clinical.page");
const chase_query_page_1 = require("../../pages/projects/chase-query.page");
const share_page_1 = require("../../pages/shared/share.page");
describe('Chase Query filters', () => {
    beforeEach(function () {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaUsername, uimapper_1.default.qaPassword);
        browser.pause(3000);
    });
    it('should filter by Chase ID 9', () => {
        chase_query_page_1.default.open();
        chase_query_page_1.default.chooseFilter('Chase ID / Client Chase Key', '9');
        chase_query_page_1.default.clickUpdateFilterButton();
        expect(share_page_1.default.doneLoading()).to.equal(true);
        expect(chase_query_page_1.default.chaseQuerySearchResults.length).to.equal(1);
        expect(chase_query_page_1.default.getResults()).to.equal('9');
    });
    it('should filter by Measures BMKY', () => {
        chase_query_page_1.default.open();
        chase_query_page_1.default.chooseFilter('Measures', 'BMKY');
        chase_query_page_1.default.clickUpdateFilterButton();
        expect(share_page_1.default.doneLoading()).to.equal(true);
        expect(chase_query_page_1.default.doResultsMatch('4', 'BMKY')).to.equal(true);
    });
    it('should filter by Assigned To emr employee', () => {
        chase_query_page_1.default.open();
        chase_query_page_1.default.chooseFilter('Assigned To', 'emr employee');
        chase_query_page_1.default.clickUpdateFilterButton();
        expect(share_page_1.default.doneLoading()).to.equal(true);
        expect(chase_query_page_1.default.doResultsMatch('17', 'emr employee')).to.equal(true);
    });
    it('should filter by Member 504412', () => {
        chase_query_page_1.default.open();
        chase_query_page_1.default.chooseFilter('Member', '504412');
        chase_query_page_1.default.clickUpdateFilterButton();
        expect(share_page_1.default.doneLoading()).to.equal(true);
        expect(chase_query_page_1.default.doResultsMatch('8', '504412')).to.equal(true);
    });
    it('should filter by Address 39991436', () => {
        chase_query_page_1.default.open();
        chase_query_page_1.default.chooseFilter('Address', '39991436');
        chase_query_page_1.default.clickUpdateFilterButton();
        expect(share_page_1.default.doneLoading()).to.equal(true);
        expect(chase_query_page_1.default.doResultsMatch('12', '39991436')).to.equal(true);
    });
    it('should filter by Pend Codes PC100', () => {
        chase_query_page_1.default.open();
        chase_query_page_1.default.chooseFilter('Pend Codes', 'PC100');
        chase_query_page_1.default.clickUpdateFilterButton();
        expect(share_page_1.default.doneLoading()).to.equal(true);
        expect(chase_query_page_1.default.doResultsMatch('15', 'PC100')).to.equal(true);
    });
    afterEach(function () {
        clinical_page_1.default.logout();
        expect(login_page_1.default.isLoaded());
        browser.pause(1000);
    });
});
