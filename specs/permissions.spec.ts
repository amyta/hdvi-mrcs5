var expect = require('chai').expect
import LoginPage from '../pages/login.page'
import UIMapper from '../pages/shared/uimapper';
import NavigationPage from '../pages/navigation.page';
import DashboardRetrievalPage from '../pages/home/dashboard-retrieval.page';
import DashboardDocumentReviewerPage from '../pages/home/dashboard-documentreviewer.page';
import DashboardClinicalPage from '../pages/home/dashboard-clinical.page';
import ClinicalPage from '../pages/clinical.page';

describe('Permissions test suite', () => {
  before(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaPSRUser, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
    NavigationPage.expandNavigation();
  });
  
  it('should log in as a user with only PSR permission and see only Pend - Retrieval', () => {
    NavigationPage.clickOnPageInSideNav('Pend');
    NavigationPage.clickOnSubPageInSideNav('Retrieval');
    expect(NavigationPage.getPageInSideNavSize('Pend\nRetrieval')).to.equal(true);
  });
});