var PortfolioPage = function(){

    var portfolioLabel = element(by.css('.home-titles'));
    var radioSection = element(by.css('#radio'));
    var honorsCollege = element(by.css('.project:nth-child(3)'));

    this.isPortfolioLabelVisible = function () {
        return portfolioLabel.isDisplayed();
    }

    this.isRadioSectionVisible = function () {
        return radioSection.isDisplayed();
    }

    this.isHonorsCollegeSectionVisible = function () {
        return honorsCollege.isDisplayed();
    }

    this.areProjectsShown = function () {
        return this.isHonorsCollegeSectionVisible() && 
        this.isRadioSectionVisible() && 
        this.isPortfolioLabelVisible();
    }
}
module.exports = new PortfolioPage();