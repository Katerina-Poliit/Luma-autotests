class ResultSearchPage {
    constructor (page) {
        this.page = page
    }


    locators = {
        getValidMessage: () => this.locators.locator('div').filter({ hasText: 'Don\'t see what you\'re looking' }).nth(3)
    }
}

export default ResultSearchPage;