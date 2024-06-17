export default class TrainingVideoDownloadPage {
	constructor(page) {
	  this.page = page;
      this.Heading = this.page.getByLabel('Video Download').getByText('Video Download');
	}


}
