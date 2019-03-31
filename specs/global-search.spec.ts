var expect = require('chai').expect
import LoginPage from '../pages/login.page'
import UIMapper from '../pages/shared/uimapper';
import NavigationPage from '../pages/navigation.page';
import ClinicalPage from '../pages/clinical.page';
import GlobalSearchPage from '../pages/global-search.page';
import SharePage from '../pages/shared/share.page';

describe('Navigation test suite', () => {
  beforeEach(function () {
    LoginPage.open();
    LoginPage.login(UIMapper.qaUsername, UIMapper.qaPassword);
    browser.pause(UIMapper.standardPause);
    NavigationPage.expandNavigation();
  });
  
  it('should take global search by AID 12505672', () => {
    GlobalSearchPage.globalSearch('Address', '12505672');
    SharePage.doneLoading();
    
    expect(GlobalSearchPage.doAIDResultsMatch('12505672')).to.equal(true);
  });
  
  it('should take global search by Chase 14180', () => {
    GlobalSearchPage.globalSearch('Chase', '14180');
    SharePage.doneLoading();
    
    expect(GlobalSearchPage.doChaseResultsMatch('14180')).to.equal(true);
  });

  afterEach(function () {
    ClinicalPage.logout();
    expect(LoginPage.isLoaded());
    browser.pause(UIMapper.standardPause);
  });
});