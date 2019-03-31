import UIMapper from "./shared/uimapper";

class GlobalSearch_Page {
    public get globalSearchIcon()      { return $('.fa-search') }
    public get globalSearchInput() { return $('.input')}
		public get globalSearchDropdown() { return $$('.dropdown > option')}
		public get globalSearchResultsList() { return $$('.ui-selectable-row')}

		public globalSearch(searchOption:string, searchInput:string):void {
			this.globalSearchIcon.click();

			browser.pause(UIMapper.standardPause)
			for (let i=0; i < this.globalSearchDropdown.length; i++) {
				if (this.globalSearchDropdown[i].getText() == searchOption) {
					this.globalSearchDropdown[i].click();
					this.globalSearchInput.setValue(searchInput);
					this.globalSearchIcon.click();
				}
			}
		}

		public doAIDResultsMatch(searchInput:string):boolean {
			browser.pause(UIMapper.standardPause)
			
			for (let i=0; i < this.globalSearchResultsList.length; i++) {
				console.log(this.globalSearchResultsList[i].element('a.ui-column-value').getText())
				if (this.globalSearchResultsList[i].element('a.ui-column-value').getText() == searchInput) {
					return true;
				}	
			}

			return false;
		}

		public doChaseResultsMatch(searchInput:string):boolean {
			browser.pause(UIMapper.standardPause)
			
			for (let i=0; i < this.globalSearchResultsList.length; i++) {
				console.log(this.globalSearchResultsList[i].element('a.ui-column-value').getText())
				if (this.globalSearchResultsList[i].element('a.ui-column-value').getText() == searchInput) {
					return true;
				}	
			}

			return false;
		}
  }
  const GlobalSearchPage = new GlobalSearch_Page()
  export default GlobalSearchPage