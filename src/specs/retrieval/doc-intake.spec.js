"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../../pages/login.page");
const uimapper_1 = require("../../pages/shared/uimapper");
const clinical_page_1 = require("../../pages/clinical.page");
const doc_intake_page_1 = require("../../pages/retrieval/doc-intake.page");
const share_page_1 = require("../../pages/shared/share.page");
describe('Retrieval test suite', () => {
    before(function () {
        login_page_1.default.open();
        login_page_1.default.login(uimapper_1.default.qaUsername, uimapper_1.default.qaPassword);
        browser.pause(3000);
    });
    it('should go to Doc Intake page and assign document to random user', () => {
        doc_intake_page_1.default.open();
        doc_intake_page_1.default.chooseDocAction('test3.pdf', 'Assign To');
        share_page_1.default.selectRandomUser();
        browser.refresh();
        browser.pause(1000);
        console.log(doc_intake_page_1.default.getDocAssignedTo('test3.pdf'));
        console.log(share_page_1.default.randomUser, 'doc intake');
        expect(doc_intake_page_1.default.getDocAssignedTo('test3.pdf')).to.contain(share_page_1.default.randomUser);
        clinical_page_1.default.logout();
    });
});
