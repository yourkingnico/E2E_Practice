var ResumePage = function(){

    var downloadButton =  element(by.css('#download-button button'));

    this.isDownloadButtonVisible = function () {
        return downloadButton.isDisplayed();
    }

    this.isResumeDownloadable = function () {
        var filename = 'resume.pdf';
        var fs = require('fs');
      
        if (fs.existsSync(filename)) {
            //check if file with same name is present?
            fs.unlinkSync(filename);
        }

        downloadButton.click();

        console.log("Checking if " + filename + " exists...");

        exists = browser.driver.wait(function() {
          // Wait until the file has been downloaded
          return fs.existsSync(filename);
        }, 30000).catch(function(error) {
          console.log("File not found: ", error);
          return false;
        });

        return exists;
    }
}
module.exports = new ResumePage();