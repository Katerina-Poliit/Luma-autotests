export default class TrainingVideoDownloadPage {
	constructor(page) {
	  this.page = page;
      this.Header = this.page.getByLabel('Video Download').getByText('Video Download');
	}


}
