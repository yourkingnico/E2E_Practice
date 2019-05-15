var Menu = require('./sections/Menu');

var ResumePage = function(){
    var downloadButton =  element(by.css('#download-button'));
   
    this.isDownloadButtonVisible = function () {
        return downloadButton.isDisplayed();
     }

}
module.exports = new ResumePage();