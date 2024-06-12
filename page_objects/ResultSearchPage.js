class ResultSearchPage {
    constructor (page) {
        this.page = page
    }


    locators = {
        getValidMessage: () => this.page.getByText('1 item were found using the'),
        getNotValidMessage: () => this.page.getByText('We can\'t find any items')
    }
}

export default ResultSearchPage;