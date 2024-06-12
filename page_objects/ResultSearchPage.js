class ResultSearchPage {
    constructor (page) {
        this.page = page
    }


    locators = {
        getValidMessage: () => this.page.getByText('1 item were found using the')
    }
}

export default ResultSearchPage;