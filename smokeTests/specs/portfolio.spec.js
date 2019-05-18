var PortfolioPage = require('../pages/PortfolioPage');
var Menu = require('../pages/sections/Menu');

describe('Load portfolio page and check for essential ', function() { 

  it('should load home page', function() { 
    browser.waitForAngularEnabled(false);
    browser.get('http://nicktorres.net');
    console.log("Home page loaded for nicktorres.net");
  })

  it('should naviagate the the portfolio page', function() { 
    expect(Menu.openPortfolioPage()).toBeTruthy();
  })

  it('should verify portfolio label is visible', function() { 
    expect(PortfolioPage.isPortfolioLabelVisible()).toBeTruthy();
  })

  it('should verify portfolio sections are shown', function() { 
    expect(PortfolioPage.areProjectsShown()).toBeTruthy();
  })
});