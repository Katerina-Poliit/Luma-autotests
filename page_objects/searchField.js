class SearchField {
	constructor(page){
		 this.page = page;
	}

	locators = {
		 getSearchField: () => this.page.getByPlaceholder('Search entire store here...')
	}

}

export default SearchField;