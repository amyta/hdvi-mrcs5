"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../../pages/login.page");
const uimapper_1 = require("../../pages/shared/uimapper");
const assignment_page_1 = require("../../pages/retrieval/assignment.page");
const share_page_1 = require("../../pages/shared/share.page");
describe('Retrival - Assignments test suite', () => {
    before(function () {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaUsername, uimapper_1.default.qaPassword);
        browser.pause(3000);
    });
    it('should go to retrieval - assignments page and assign AID to random user', () => {
        assignment_page_1.default.open();
        assignment_page_1.default.assignAID('1773744');
        share_page_1.default.selectRandomUser();
        browser.pause(1000);
        console.log(assignment_page_1.default.getAIDAssignedTo('1773744'));
        console.log(share_page_1.default.randomUser);
        expect(assignment_page_1.default.getAIDAssignedTo('1773744')).to.contain(share_page_1.default.randomUser);
    });
});
