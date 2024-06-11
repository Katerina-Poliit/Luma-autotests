class SearchtermsPage {
    constructor (page) {
        this.page = page
    }

    locators = {
        getSearchTermsHeading: () => this.page.getByText('Popular Search Terms'),
        getSearchTerms: () => this.page.locator('.search-terms')
    }
}

export default SearchtermsPage;