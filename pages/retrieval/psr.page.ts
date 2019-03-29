class PSR_Page {
  public get PSRTitle()      { return $('div.bold') }
	public get platformAccountMenu() { return $('.account-menu > platform-account-menu')}
	public get platformAccountMenuList() { return $$('div.menu--item')}
	public get filterButton() { return $('.sorting-panel > app-button:nth-child(2) > p-button:nth-child(1) > button:nth-child(1)')}
	public get filterOptionsList() { return $$('li.ui-state-default')}
	public get filterInput() { return $('#Id')}
	public get updateFilterButton() { return $('.ui-dialog-footer > p-footer:nth-child(1) > footer:nth-child(1) > app-button:nth-child(2) > p-button:nth-child(1) > button:nth-child(1)')}
	public get firstResult() { return $('a.ui-column-value')}
  
  public open(): void {
    browser.url('/retrieval/view/psr')
    this.PSRTitle.waitForVisible(60000);
  }

  public filterById(id: string):void {
    this.filterButton.click()
    this.filterInput.setValue(id)
    this.updateFilterButton.click()
  }

}
const PSRPage = new PSR_Page()
export default PSRPage