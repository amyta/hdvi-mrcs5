var expect = require('chai').expect
import LoginPage from '../../pages/login.page'
import UIMapper from '../../pages/shared/uimapper';
import SharePage from '../../pages/shared/share.page';
import ClinicalPage from '../../pages/clinical.page';
import EMRPage from '../../pages/retrieval/emr.page';


describe('EMR test suite', () => {
	beforeEach(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
	});
  
  it('should go to Retrieval - EMR page and update address of AID 12505672', () => {
    EMRPage.open();
    EMRPage.chooseAID('12505672');
    SharePage.doneLoading();
    EMRPage.editAddress(SharePage.getTestGroupName(), SharePage.getTestEmail(), SharePage.getTestPhoneNumber(), SharePage.getTestContactName());
		
		expect(EMRPage.aidGroupName.getText()).to.equal(SharePage.testGroupName);
		expect(EMRPage.aidContactName.getText()).to.equal(SharePage.testContactName);
		expect(EMRPage.aidEmail.getText()).to.equal(SharePage.testEmail);
		expect(EMRPage.aidPhoneNumber.getText()).to.equal(SharePage.testPhoneNumber);
		browser.refresh();
	});

	afterEach(function () {
    ClinicalPage.logout();
    expect(LoginPage.isLoaded());
    browser.pause(UIMapper.standardPause);
  });
});