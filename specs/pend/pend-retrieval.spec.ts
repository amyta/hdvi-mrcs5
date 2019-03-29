var expect = require('chai').expect
import LoginPage from '../../pages/login.page'
import UIMapper from '../../pages/shared/uimapper';
import AssignmentPage from '../../pages/retrieval/assignment.page';
import ClinicalPage from '../../pages/clinical.page';
import SharePage from '../../pages/shared/share.page';
import PendRetrievalPage from '../../pages/pend/pend-retrieval.page';


describe('Pend - Retrieval test suite', () => {
	before(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
	});
  
  it('should go to pend - retrieval page and checked if pend is closed', () => {
    PendRetrievalPage.open();
    PendRetrievalPage.pendRetrievalStatClosed.click();
    SharePage.doneLoading();

    expect(PendRetrievalPage.getPendListColumnData('8', 'Closed')).to.equal(true);
    ClinicalPage.logout();
  });
});