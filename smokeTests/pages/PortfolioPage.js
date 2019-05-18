var PortfolioPage = function(){

    var portfolioLabel =  element(by.css('.home-titles'));

    this.isPortfolioLabelVisible = function () {
        return portfolioLabel.isDisplayed();
    }

    
}
module.exports = new PortfolioPage();