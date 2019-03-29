var expect = require('chai').expect
import LoginPage from '../../pages/login.page';
import UIMapper from '../../pages/shared/uimapper';
import ClinicalPage from '../../pages/clinical.page';
import ChaseQueryPage from '../../pages/projects/chase-query.page';
import SharePage from '../../pages/shared/share.page';


describe('Chase Query filters', () => {
  beforeEach(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
  });
  
  it('should filter by Chase ID 9', () => {
    ChaseQueryPage.open();
    ChaseQueryPage.chooseFilter('Chase ID / Client Chase Key', '9');
    ChaseQueryPage.clickUpdateFilterButton();

    expect(SharePage.doneLoading()).to.equal(true);
    expect(ChaseQueryPage.chaseQuerySearchResults.length).to.equal(1);
    expect(ChaseQueryPage.getResults()).to.equal('9');
  });
    
  it('should filter by Measures BMKY', () => {
    ChaseQueryPage.open();
    ChaseQueryPage.chooseFilter('Measures', 'BMKY');
    ChaseQueryPage.clickUpdateFilterButton();

    expect(SharePage.doneLoading()).to.equal(true);
    expect(ChaseQueryPage.doResultsMatch('4', 'BMKY')).to.equal(true);
  });

  it('should filter by Assigned To emr employee', () => {
    ChaseQueryPage.open();
    ChaseQueryPage.chooseFilter('Assigned To', 'emr employee');
    ChaseQueryPage.clickUpdateFilterButton();

    expect(SharePage.doneLoading()).to.equal(true);
    expect(ChaseQueryPage.doResultsMatch('17', 'emr employee')).to.equal(true);
  });
  
  it('should filter by Member 504412', () => {
    ChaseQueryPage.open();
    ChaseQueryPage.chooseFilter('Member', '504412');
    ChaseQueryPage.clickUpdateFilterButton();

    expect(SharePage.doneLoading()).to.equal(true);
    expect(ChaseQueryPage.doResultsMatch('8', '504412')).to.equal(true);
  });

  it('should filter by Address 39991436', () => {
    ChaseQueryPage.open();
    ChaseQueryPage.chooseFilter('Address', '39991436');
    ChaseQueryPage.clickUpdateFilterButton();

    expect(SharePage.doneLoading()).to.equal(true);
    expect(ChaseQueryPage.doResultsMatch('12', '39991436')).to.equal(true);
  });

    it('should filter by Pend Codes PC100', () => {
    ChaseQueryPage.open();
    ChaseQueryPage.chooseFilter('Pend Codes', 'PC100');
    ChaseQueryPage.clickUpdateFilterButton();

    expect(SharePage.doneLoading()).to.equal(true);
    expect(ChaseQueryPage.doResultsMatch('15', 'PC100')).to.equal(true);
  });

  afterEach(function () {
    ClinicalPage.logout();
    expect(LoginPage.isLoaded());
    browser.pause(UIMapper.standardPause);
  });
});