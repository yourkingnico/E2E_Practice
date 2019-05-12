var Menu = function(){
    var aboutLink = element(by.css('li a[href*="#about"]'));
    var contactLink = element(by.css('li a[href*="#contact"]'));
    var resumeLink = element(by.css('li a[href*="../nicks_site/html/resume.html"]'));
    var portfolioLink = element(by.css('li a[href*="../nicks_site/html/portfolio.html"]'));

    this.isAboutLinkVisible = function () {
        return aboutLink.isDisplayed();
    }

    this.isContactLinkVisible = function () {
        return contactLink.isDisplayed();
    }

    this.isResumeLinkVisible = function () {
        return resumeLink.isDisplayed();
    }

    this.isPortfolioLinkVisible = function () {
        return portfolioLink.isDisplayed();
    }  

    this.isMenuNavigatable = function() {
        aboutLink.click();
        expect(browser.getCurrentUrl()).toContain('nicktorres.net/');
        contactLink.click();
        expect(browser.getCurrentUrl()).toContain('nicktorres.net/');
        resumeLink.click();
        expect(browser.getCurrentUrl()).toContain('nicktorres.net/nicks_site/html/resume.html');
        aboutLink.click();
        portfolioLink.click();
        expect(browser.getCurrentUrl()).toContain('nicktorres.net/nicks_site/html/portfolio.html');
        return true;
    }
    
    this.isMenuVisible = function() {
        return this.isAboutLinkVisible() && 
        this.isContactLinkVisible() && 
        this.isResumeLinkVisible() && 
        this.isPortfolioLinkVisible();
    }
}
module.exports = new Menu();