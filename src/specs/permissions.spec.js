"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../pages/login.page");
const uimapper_1 = require("../pages/shared/uimapper");
const navigation_page_1 = require("../pages/navigation.page");
describe('Permissions test suite', () => {
    before(function () {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaPSRUser, uimapper_1.default.qaPassword);
        browser.pause(3000);
        navigation_page_1.default.expandNavigation();
    });
    it('should log in as a user with only PSR permission and see only Pend - Retrieval', () => {
        navigation_page_1.default.clickOnPageInSideNav('Pend');
        navigation_page_1.default.clickOnSubPageInSideNav('Retrieval');
        expect(navigation_page_1.default.getPageInSideNavSize('Pend\nRetrieval')).to.equal(true);
    });
});
