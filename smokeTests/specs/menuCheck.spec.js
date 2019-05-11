var HomePage = require('../pages/HomePage');


describe('Load home page and check menu buttons', function() { 

  it('should load home page', function() { 
    browser.waitForAngularEnabled(false);
    browser.get('http://nicktorres.net');
    console.log("Home page loaded for nicktorres.net");
  })

  it('should check that menu is visible', function() { 
    expect(HomePage.isMenuVisible()).toBe(true);
    console.log("Menu found");
  })

  it('should check that About label is visible', function() { 
    expect(HomePage.isAboutLabelVisible()).toBe(true);
  })

  it('should check that Timeline label is visible', function() { 
    expect(HomePage.isTimeLineVisible()).toBe(true);
  })

});