var expect = require('chai').expect
import LoginPage from '../../pages/login.page'
import UIMapper from '../../pages/shared/uimapper';
import AssignmentPage from '../../pages/retrieval/assignment.page';
import ClinicalPage from '../../pages/clinical.page';
import SharePage from '../../pages/shared/share.page';


describe('Retrival - Assignments test suite', () => {
	before(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
	});
  
  it('should go to retrieval - assignments page and assign AID to random user', () => {
    AssignmentPage.open();
    AssignmentPage.assignAID('1773744');
    SharePage.selectRandomUser();
    browser.pause(UIMapper.standardPause);

    expect(AssignmentPage.getAIDAssignedTo('1773744')).to.contain(SharePage.randomUser);
  });
});