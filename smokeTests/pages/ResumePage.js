var ResumePage = function(){
    var downloadButton =  element(by.css('#download-button button'));
    this.isDownloadButtonVisible = function () {
        return downloadButton.isDisplayed();
    }

    this.isResumeDownloadable = function () {
        var filename = 'resume.pdf';
        return this.canResumeDownload(filename);
    }

    this.canResumeDownload = function (filename) {
        var fs = require('fs');
      
        if (fs.existsSync(filename)) {
            //check to rename the download?
            fs.unlinkSync(filename);
        }
        downloadButton.click();
        console.log("Checking if " + filename + " exists...")
        exists = browser.driver.wait(function() {
          // Wait until the file has been downloaded.
          return fs.existsSync(filename);
        }, 30000).catch(function(error) {
          console.log("File not found: ", error);
          return false;
        });
    
        return  Promise.resolve(exists);
    }
}
module.exports = new ResumePage();