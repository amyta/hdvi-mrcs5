var expect = require('chai').expect
import LoginPage from '../pages/login.page'
import UIMapper from '../pages/shared/uimapper';
import NavigationPage from '../pages/navigation.page';
import DashboardRetrievalPage from '../pages/home/dashboard-retrieval.page';
import DashboardDocumentReviewerPage from '../pages/home/dashboard-documentreviewer.page';
import DashboardClinicalPage from '../pages/home/dashboard-clinical.page';
import ClinicalPage from '../pages/clinical.page';

describe('Navigation test suite', () => {
  before(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
    NavigationPage.expandNavigation();
  });
  
  it('should take user to My Sites in side nav', () => {
    NavigationPage.clickOnPageInSideNav('Home');
    NavigationPage.clickOnSubPageInSideNav('My Sites');
    expect(DashboardRetrievalPage.isLoaded()).to.equal(true);
  });
  
  it('should take user to My Documents in side nav', () => {
    NavigationPage.clickOnSubPageInSideNav('My Documents');
    expect(DashboardDocumentReviewerPage.isLoaded()).to.equal(true);
  });
  
  it('should take user to My Chases in side nav', () => {
    NavigationPage.clickOnSubPageInSideNav('My Chases');
    expect(DashboardClinicalPage.isLoaded()).to.equal(true);
    ClinicalPage.logout();
	});
});