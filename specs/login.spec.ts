var expect = require('chai').expect
import LoginPage from '../pages/login.page'
import UIMapper from '../pages/shared/uimapper';
import ClinicalPage from '../pages/clinical.page';


describe('Login page navigation', () => {
  it('should log user in and out', () => {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
    expect(ClinicalPage.isLoaded());
    
    ClinicalPage.logout();
    expect(LoginPage.isLoaded());
    expect(LoginPage.loginPageTitle.getText()).to.equal('Sign into MRCS');
	});
});