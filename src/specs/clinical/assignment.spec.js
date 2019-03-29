"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../../pages/login.page");
const uimapper_1 = require("../../pages/shared/uimapper");
const assignment_page_1 = require("../../pages/clinical/assignment.page");
const clinical_page_1 = require("../../pages/clinical.page");
const navigation_page_1 = require("../../pages/navigation.page");
describe('Clinical assignments test suite', () => {
    before(function () {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaUsername, uimapper_1.default.qaPassword);
        browser.pause(3000);
    });
    it('should go to Assignment page, open Chase 6 and user should have read only access', () => {
        assignment_page_1.default.open();
        navigation_page_1.default.closeSoftwareUpdatePopup();
        assignment_page_1.default.clickOnChase('6');
        browser.pause(10000);
        expect(browser.getUrl()).to.equal('https://mrcs5-uat.healthdatavision.com/members/chase/6');
        expect(assignment_page_1.default.unassignedChaseErrorMessage.getText()).to.equal('You are not currently assigned to this Chase. Certain functions will not be available to you.');
        expect(assignment_page_1.default.readOnlyDisplay.getText()).to.equal('Readonly View');
        clinical_page_1.default.logout();
    });
});
