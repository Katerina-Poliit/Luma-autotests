class AndvancedSearchPage {
    constructor (page) {
        this.page = page
    }

    locators = {

        getSettingsSearch : () => this.page.locator('legend')
    }
}

export default AndvancedSearchPage;