var expect = require('chai').expect
import LoginPage from '../../pages/login.page'
import UIMapper from '../../pages/shared/uimapper';
import ClinicalPage from '../../pages/clinical.page';
import PSRPage from '../../pages/Retrieval/psr.page';
import SharePage from '../../pages/shared/share.page';


describe('PSR test suite', () => {
	before(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
	});
  
  it('should go to PSR page and filter by AID', () => {
    PSRPage.open();
    PSRPage.filterById('5092283');
    expect(SharePage.doneLoading()).to.equal(true);
    expect(PSRPage.firstResult.getText()).to.equal('5092283');

    ClinicalPage.logout();
    expect(LoginPage.isLoaded());
    expect(LoginPage.loginPageTitle.getText() == 'Sign into MRCS');
	});
});