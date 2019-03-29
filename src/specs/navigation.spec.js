"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../pages/login.page");
const uimapper_1 = require("../pages/shared/uimapper");
const navigation_page_1 = require("../pages/navigation.page");
const dashboard_retrieval_page_1 = require("../pages/home/dashboard-retrieval.page");
const dashboard_documentreviewer_page_1 = require("../pages/home/dashboard-documentreviewer.page");
const dashboard_clinical_page_1 = require("../pages/home/dashboard-clinical.page");
const clinical_page_1 = require("../pages/clinical.page");
describe('Navigation test suite', () => {
    before(function () {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaUsername, uimapper_1.default.qaPassword);
        browser.pause(3000);
        navigation_page_1.default.expandNavigation();
    });
    it('should take user to My Sites in side nav', () => {
        navigation_page_1.default.clickOnPageInSideNav('Home');
        navigation_page_1.default.clickOnSubPageInSideNav('My Sites');
        expect(dashboard_retrieval_page_1.default.isLoaded()).to.equal(true);
    });
    it('should take user to My Documents in side nav', () => {
        navigation_page_1.default.clickOnSubPageInSideNav('My Documents');
        expect(dashboard_documentreviewer_page_1.default.isLoaded()).to.equal(true);
    });
    it('should take user to My Chases in side nav', () => {
        navigation_page_1.default.clickOnSubPageInSideNav('My Chases');
        expect(dashboard_clinical_page_1.default.isLoaded()).to.equal(true);
        clinical_page_1.default.logout();
    });
});
