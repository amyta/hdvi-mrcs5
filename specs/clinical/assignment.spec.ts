var expect = require('chai').expect
import LoginPage from '../../pages/login.page'
import UIMapper from '../../pages/shared/uimapper';
import AssignmentPage from '../../pages/clinical/assignment.page';
import ClinicalPage from '../../pages/clinical.page';
import NavigationPage from '../../pages/navigation.page';


describe('Clinical assignments test suite', () => {
	before(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
	});
  
  it('should go to Assignment page, open Chase 6 and user should have read only access', () => {
    AssignmentPage.open();
    NavigationPage.closeSoftwareUpdatePopup();
    AssignmentPage.clickOnChase('6');
    browser.pause(10000);
    expect(browser.getUrl()).to.equal('https://mrcs5-uat.healthdatavision.com/members/chase/6');
    expect(AssignmentPage.unassignedChaseErrorMessage.getText()).to.equal('You are not currently assigned to this Chase. Certain functions will not be available to you.');
    expect(AssignmentPage.readOnlyDisplay.getText()).to.equal('Readonly View');
    ClinicalPage.logout();
  });
});