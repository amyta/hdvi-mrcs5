var expect = require('chai').expect
import LoginPage from '../../pages/login.page'
import UIMapper from '../../pages/shared/uimapper';
import ClinicalPage from '../../pages/clinical.page';
import FieldTechPage from '../../pages/retrieval/field-tech.page';
import SharePage from '../../pages/shared/share.page';


describe('Rerieval - Field Tech test suite', () => {
	before(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
	});
  
  it('should go to Retrieval - Field Tech page and check Total Sites number matches list below', () => {
    FieldTechPage.open();
    expect(FieldTechPage.aidList.length.toString()).to.equal(FieldTechPage.totalSitesStat.getText());
	});

	afterEach(function () {
    ClinicalPage.logout();
    expect(LoginPage.isLoaded());
    browser.pause(UIMapper.standardPause);
  });
});