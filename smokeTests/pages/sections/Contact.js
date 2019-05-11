var Contact = function(){
    var contactLabel =  element(by.css('#contact .home-titles:nth-child(1)'));
    var emailLink = element(by.css('.about-p:nth-child(2)'));
    var linkedinLink = element(by.css('.about-p:nth-child(3)'));
    var githubLink = element(by.css('.about-p:nth-child(4)'));

    this.isContactLabelVisible = function () {
        return contactLabel.isDisplayed();
    }

    this.isEmailLinkVisible = function () {
        return emailLink.isDisplayed();
    }

    this.isLinkedinLinkVisible = function () {
        return linkedinLink.isDisplayed();
    }

    this.isGithubLinkVisible = function () {
        return githubLink.isDisplayed();
    }
    
    this.isContactSectionVisible = function () {
        return this.isContactLabelVisible() && 
        this.isEmailLinkVisible() && 
        this.isLinkedinLinkVisible() &&
        this.isGithubLinkVisible();
    }
}
module.exports = new Contact();