var expect = require('chai').expect
import LoginPage from '../../pages/login.page'
import UIMapper from '../../pages/shared/uimapper';
import SharePage from '../../pages/shared/share.page';
import DocQAPage from '../../pages/retrieval/doc-qa.page';
import ClinicalPage from '../../pages/clinical.page';


describe('Doc QA test suite', () => {
	beforeEach(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
	});
  
  it('should go to Doc QA page and click on unassigned Chase 4876 and verify user has read only access', () => {
    DocQAPage.open();
    DocQAPage.unassignedChaseStat.click();
    DocQAPage.chooseChaseByID('4876');
    SharePage.doneLoading();
    
    expect(DocQAPage.unassignedChaseErrorMessage.getText()).to.equal(UIMapper.unassignedChaseErrorMessage);
    expect(DocQAPage.readOnlyDisplay.getText()).to.equal(UIMapper.readonlyText);
	});

	it('should go to Doc QA page and click on assigned Chase 1301 and verify chart is loaded and editable', () => {
    DocQAPage.open();
    DocQAPage.assignedChaseStat.click();
    DocQAPage.chooseChaseByID('1301');
    SharePage.doneLoading();
    
    expect(DocQAPage.memberValidationContainer.isVisible()).to.equal(true);
		expect(DocQAPage.submitButton.isEnabled()).to.equal(true);
	});

	afterEach(function () {
    ClinicalPage.logout();
    expect(LoginPage.isLoaded());
    browser.pause(UIMapper.standardPause);
  });
});