var TimeLine = require('../pages/sections/Timeline');
var Contact = require('./sections/Contact');
var Menu = require('./sections/Menu');

var HomePage = function(){
    var menu =  element(by.css('.navbar-nav'));
    var homeButton = element(by.css('.navbar-brand'));
    var introText = element(by.css('.intro-text'));
    var aboutLabel = element(by.css('h2.home-titles:not(:first-child)'));
    var copyrightLabel = element(by.css('#copyright'));

    this.isMenuVisible = function () {
        console.log("Looking for Menu");
        return menu.isDisplayed() && Menu.isMenuVisible();
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

    this.isContactSectionVisible = function () {
        return Contact.isContactLabelVisible() && 
        Contact.isEmailLinkVisible() && 
        Contact.isLinkedinLinkVisible() &&
        Contact.isGithubLinkVisible();
    }

    this.isCopyrightVisible = function () {
        return copyrightLabel.isDisplayed();
    }
}
module.exports = new HomePage();