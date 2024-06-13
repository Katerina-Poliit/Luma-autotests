class SearchResultPageWithResults {
	constructor(page){
		 this.page = page;
	}

	locators = {
		 getRelatedSearchTerms: () => this.page.getByText('Related search terms Short'),
		 getSearchResult: () => this.page.getByRole('heading', { name: 'Search results for: \'short\'' }).locator('span'),
		 getSearchResultNegative: () => this.page.getByRole('heading', { name: 'Search results for: \'sss\'' }).locator('span'),
		 getNoResultsMessage: () => this.page.getByText('Your search returned no'),
		 getSearchResultShort: () => this.page.locator('dl.block')
	}

}

export default SearchResultPageWithResults;