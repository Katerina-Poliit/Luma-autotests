class SearchResultPageWithResults {
	constructor(page){
		 this.page = page;
	}

	locators = {
		 getRelatedSearchTerms: () => this.page.getByText('Related search terms Short'),
		 getSearchResult: () => this.page.getByRole('heading', { name: 'Search results for: \'short\'' }).locator('span')
	}

}

export default SearchResultPageWithResults;