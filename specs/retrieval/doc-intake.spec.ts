var expect = require('chai').expect
import LoginPage from '../../pages/login.page'
import UIMapper from '../../pages/shared/uimapper';
import ClinicalPage from '../../pages/clinical.page';
import DocIntakePage from '../../pages/retrieval/doc-intake.page';
import SharePage from '../../pages/shared/share.page';

describe('Retrieval test suite', () => {
	before(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
	});
  
  it('should go to Doc Intake page and assign document to random user', () => {
    DocIntakePage.open();
    DocIntakePage.chooseDocAction('test3.pdf', 'Assign To');
    SharePage.selectRandomUser();
    browser.refresh();
    browser.pause(UIMapper.standardPause);

    expect(DocIntakePage.getDocAssignedTo('test3.pdf')).to.contain(SharePage.randomUser);
    ClinicalPage.logout();
  });
});