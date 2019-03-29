var expect = require('chai').expect
import LoginPage from '../../pages/login.page';
import UIMapper from '../../pages/shared/uimapper';
import PendClinicalPage from '../../pages/pend/pend-clinical.page';
import SharePage from '../../pages/shared/share.page';


describe('Pend Clinical test suite', () => {
  before(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
  });
  
  it('should open Pend - Clinical page', () => {
    PendClinicalPage.open();

    expect(PendClinicalPage.isLoaded()).to.equal(true);
  });
  
  it('should click PEND #13 and show details of pend', () => {
    PendClinicalPage.open();
    PendClinicalPage.clickByPendCodeChart();
    PendClinicalPage.chooseActionOfPend('13', 'View Details')

    expect(SharePage.doneLoading()).to.equal(true);
    expect(PendClinicalPage.pendId.getText()).to.equal('13');
  });
  
  it('should go to PEND #13 and add comment', () => {
    PendClinicalPage.openPendDetails('13');
    PendClinicalPage.goToPendComments();
    PendClinicalPage.addComment('automated_testing_' + SharePage.getRandomNumber());

    expect(SharePage.doneLoading()).to.equal(true);
    expect(PendClinicalPage.pendMostRecentComment.getText()).to.equal('automated_testing_' + SharePage.randomNumber);
  });
  
  it('should change status of PEND #17 to In Progress and add a note', () => {
    PendClinicalPage.open();
    PendClinicalPage.clickByPendCodeChart();
    PendClinicalPage.chooseActionOfPend('17', 'Change Status');
    PendClinicalPage.changePendStatus('In Progress', 'automated_testing_status_in_progress');
    SharePage.doneLoading();

    PendClinicalPage.openPendDetails('17');
    SharePage.doneLoading();
    expect(PendClinicalPage.pendStatus.getText()).to.equal('In Progress');
    expect(PendClinicalPage.pendLatestComment.getText()).to.equal('automated_testing_status_in_progress');
  });

  it('should change status of PEND #17 to Resolved and add a note', () => {
    PendClinicalPage.open();
    PendClinicalPage.clickByPendCodeChart();
    PendClinicalPage.chooseActionOfPend('17', 'Change Status');
    PendClinicalPage.changePendStatus('Resolved', 'automated_testing_status_resolved');
    SharePage.doneLoading();

    PendClinicalPage.openPendDetails('17');
    SharePage.doneLoading();
    expect(PendClinicalPage.pendStatus.getText()).to.equal('Resolved');
    expect(PendClinicalPage.pendLatestComment.getText()).to.equal('automated_testing_status_resolved');
  });
});