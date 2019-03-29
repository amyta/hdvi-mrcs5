var expect = require('chai').expect
import LoginPage from '../../pages/login.page'
import UIMapper from '../../pages/shared/uimapper';
import ClinicalPage from '../../pages/clinical.page';
import MRRPage from '../../pages/clinical/mrr.page';


describe('Clinical MRR test suite', () => {
	before(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
	});
  
  it('should go to MRR page and check dashboard Chase number matches total records shown', () => {
    MRRPage.open();
    expect(MRRPage.topRecordsNumber.getText()).to.contain(MRRPage.chasesNumber.getText());
    ClinicalPage.logout();
  });
});