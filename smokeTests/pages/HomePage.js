var TimeLine = require('../pages/sections/Timeline');

var HomePage = function(){
    var menu =  element(by.css('.navbar-nav'));
    var homeButton = element(by.css('.navbar-brand'));
    var introText = element(by.css('.intro-text'));
    var aboutLabel = element(by.css('h2.home-titles:not(:first-child)'));


    this.isMenuVisible = function () {
        console.log("Looking for Menu");
        return menu.isDisplayed();
    }

    this.isHomeButtonVisible = function () {
        return homeButton.isDisplayed();
    }

    this.isIntroTextVisible = function () {
        return introText.isDisplayed();
    }

    this.isAboutLabelVisible = function () {
        return aboutLabel.isDisplayed();
    }

    this.isTimeLineVisible = function () {
        return TimeLine.isTimelineVisible() && TimeLine.isTimelineLabelVisible();
    }
}
module.exports = new HomePage();